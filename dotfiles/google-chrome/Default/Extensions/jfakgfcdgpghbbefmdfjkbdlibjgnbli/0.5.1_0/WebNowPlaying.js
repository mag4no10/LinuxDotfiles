var currTitle;
var currArtist;
var currAlbum;
var currCover;
var currPos;
var currDur;
var currVolume;
var currRating;
var currRepeat;
var currShuffle;
var currState;

//Always make sure this is set
var currPlayer;

//Only set if the Rainmeter plugin will need to do extra cleanup with an external API
//NOTE: Doing this will require a plugin update and will have to be approved first
var currTrackID;
var currArtistID;
var currAlbumID;

var ws;
var connected = false;
var reconnect;
var sendData;
var outdatedCheck;

var musicEvents;
var musicInfo;

/*
ooooo   ooooo oooooooooooo ooooo        ooooooooo.   oooooooooooo ooooooooo.    .oooooo..o
`888'   `888' `888'     `8 `888'        `888   `Y88. `888'     `8 `888   `Y88. d8P'    `Y8
 888     888   888          888          888   .d88'  888          888   .d88' Y88bo.
 888ooooo888   888oooo8     888          888ooo88P'   888oooo8     888ooo88P'   `"Y8888o.
 888     888   888    "     888          888          888    "     888`88b.         `"Y88b
 888     888   888       o  888       o  888          888       o  888  `88b.  oo     .d8P
o888o   o888o o888ooooood8 o888ooooood8 o888o        o888ooooood8 o888o  o888o 8""88888P'
*/
function pad(number, length)
{
	var str = String(number);
	while (str.length < length)
	{
		str = "0" + str;
	}
	return str;
}

//Convert seconds to a time string acceptable to Rainmeter
function convertTimeToString(timeInSeconds)
{
	var timeInMinutes = parseInt(timeInSeconds / 60);
	if (timeInMinutes < 60)
	{
		return timeInMinutes + ":" + pad(parseInt(timeInSeconds % 60), 2);
	}
	return parseInt(timeInMinutes / 60) + ":" + pad(parseInt(timeInMinutes % 60), 2) + ":" + pad(parseInt(timeInSeconds % 60), 2);
}

//Convert every words to start with capital (Note: Does NOT ignore words that should not be)
function capitalize(str)
{
	str = str.replace(/-/g, ' ');
	return str.replace(/\w\S*/g, function(txt)
	{
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

/*
  .oooooo.   oooooooooo.     oooo oooooooooooo   .oooooo.   ooooooooooooo  .oooooo..o
 d8P'  `Y8b  `888'   `Y8b    `888 `888'     `8  d8P'  `Y8b  8'   888   `8 d8P'    `Y8
888      888  888     888     888  888         888               888      Y88bo.
888      888  888oooo888'     888  888oooo8    888               888       `"Y8888o.
888      888  888    `88b     888  888    "    888               888           `"Y88b
`88b    d88'  888    .88P     888  888       o `88b    ooo       888      oo     .d8P
 `Y8bood8P'  o888bood8P'  .o. 88P o888ooooood8  `Y8bood8P'      o888o     8""88888P'
                          `Y888P
*/
//@TODO Maybe add the ability to pass an already made object
//Use this object to define custom event logic
function createNewMusicEventHandler()
{
	musicEvents = {};

	musicEvents.readyCheck = null;

	musicEvents.playpause = null;
	musicEvents.next = null;
	musicEvents.previous = null;
	musicEvents.progress = null;
	musicEvents.progressSeconds = null;
	musicEvents.volume = null;
	musicEvents.repeat = null;
	musicEvents.shuffle = null;
	musicEvents.toggleThumbsUp = null;
	musicEvents.toggleThumbsDown = null;
	musicEvents.rating = null;

	return musicEvents;
}

//Use this object to define custom logic to retrieve data
function createNewMusicInfo()
{
	musicInfo = {};

	//Mandatory, just give the player name
	musicInfo.player = null;
	//Check player is ready to start doing info checks. ie. it is fully loaded and has the song title
	//While false no other info checks will be called
	musicInfo.readyCheck = null;

	musicInfo.state = null;
	musicInfo.title = null;
	musicInfo.artist = null;
	musicInfo.album = null;
	musicInfo.cover = null;
	musicInfo.duration = null;
	musicInfo.position = null;
	musicInfo.durationString = null;
	musicInfo.positionString = null;
	musicInfo.volume = null;
	musicInfo.rating = null;
	musicInfo.repeat = null;
	musicInfo.shuffle = null;

	//Optional, only use if more data parsing needed in the Rainmeter plugin
	musicInfo.trackID = null;
	musicInfo.artistID = null;
	musicInfo.albumID = null;

	//@TODO Make it possible to define custom update rates?
	//@TODO Event based updating?

	return musicInfo;
}

/*
ooooo     ooo ooooooooo.   oooooooooo.         .o.       ooooooooooooo oooooooooooo ooooooooo.
`888'     `8' `888   `Y88. `888'   `Y8b       .888.      8'   888   `8 `888'     `8 `888   `Y88.
 888       8   888   .d88'  888      888     .8"888.          888       888          888   .d88'
 888       8   888ooo88P'   888      888    .8' `888.         888       888oooo8     888ooo88P'
 888       8   888          888      888   .88ooo8888.        888       888    "     888`88b.
 `88.    .8'   888          888     d88'  .8'     `888.       888       888       o  888  `88b.
   `YbodP'    o888o        o888bood8P'   o88o     o8888o     o888o     o888ooooood8 o888o  o888o
*/
function updateInfo()
{
	//Try catch for each updater to make sure info is fail safe
	//This would be a lot cleaner if javascript had nice things like enums, then I could just foreach this
	//UPDATE STATE
	if (musicInfo.readyCheck === null || musicInfo.readyCheck())
	{
		var temp;
		try
		{
			if (musicInfo.state !== null)
			{
				temp = musicInfo.state();
				if (currState !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("STATE:" + temp);
					currState = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating state for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE TITLE
		try
		{
			if (musicInfo.title !== null)
			{
				temp = musicInfo.title();
				if (currTitle !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("TITLE:" + temp);
					currTitle = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating title for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE ARTIST
		try
		{
			if (musicInfo.artist !== null)
			{
				temp = musicInfo.artist();
				if (currArtist !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("ARTIST:" + temp);
					currArtist = temp;
				}
			}
		}
		catch (e)
		{
			
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating artist for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE ALBUM
		try
		{
			if (musicInfo.album !== null)
			{
				temp = musicInfo.album();
				if (currAlbum !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("ALBUM:" + temp);
					currAlbum = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating album for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE COVER
		try
		{
			if (musicInfo.cover !== null)
			{
				temp = musicInfo.cover();
				if (currCover !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					//Since I dont have certs I need to stip https from the URL. (In the future I should really look into signing everything again)
					ws.send("COVER:" + temp);
					currCover = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating cover for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE DURATION
		try
		{
			if (musicInfo.durationString !== null)
			{
				temp = musicInfo.durationString();
				if (currDur !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("DURATION:" + temp);
					currDur = temp;
				}
			}
			else if (musicInfo.duration !== null)
			{
				temp = musicInfo.duration();
				if (currDur !== temp && temp !== null && !isNaN(temp))
				{
					ws.send("DURATION:" + convertTimeToString(temp));
					currDur = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating duration for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE POSITION
		try
		{
			if (musicInfo.positionString !== null)
			{
				temp = musicInfo.positionString();
				if (currPos !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("POSITION:" + temp);
					currPos = temp;
				}
			}
			else if (musicInfo.position !== null)
			{
				temp = musicInfo.position();
				if (currPos !== temp && temp !== null && !isNaN(temp))
				{
					ws.send("POSITION:" + convertTimeToString(temp));
					currPos = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating position for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE VOLUME
		try
		{
			if (musicInfo.volume !== null)
			{
				temp = parseFloat(musicInfo.volume()) * 100;
				if (currVolume !== temp && temp !== null && !isNaN(temp))
				{
					ws.send("VOLUME:" + temp);
					currVolume = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating volume for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE RATING
		try
		{
			if (musicInfo.rating !== null)
			{
				temp = musicInfo.rating();
				if (currRating !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("RATING:" + temp);
					currRating = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating rating for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE REPEAT
		try
		{
			if (musicInfo.repeat !== null)
			{
				temp = musicInfo.repeat();
				if (currRepeat !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("REPEAT:" + temp);
					currRepeat = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating repeat for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE SHUFFLE
		try
		{
			if (musicInfo.shuffle !== null)
			{
				temp = musicInfo.shuffle();
				if (currShuffle !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("SHUFFLE:" + temp);
					currShuffle = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating shuffle for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}


		//OPTIONAL ID UPDATERS FOR PLUGIN USE
		//UPDATE TRACKID
		try
		{
			if (musicInfo.trackID !== null)
			{
				temp = musicInfo.trackID();
				if (currShuffle !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("TRACKID:" + temp);
					currShuffle = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating trackID for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE ARTISTID
		try
		{
			if (musicInfo.artistID !== null)
			{
				temp = musicInfo.artistID();
				if (currShuffle !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("ARTISTID:" + temp);
					currShuffle = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating artistID for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
		//UPDATE ALBUMID
		try
		{
			if (musicInfo.albumID !== null)
			{
				temp = musicInfo.albumID();
				if (currShuffle !== temp && temp !== null && ws.readyState == WebSocket.OPEN)
				{
					ws.send("ALBUMID:" + temp);
					currShuffle = temp;
				}
			}
		}
		catch (e)
		{
			if(ws.readyState == WebSocket.OPEN)
			{
				ws.send("Error:Error updating albumID for " + musicInfo.player());
				ws.send("ErrorD:" + e);
			}
		}
	}
	else
	{
		//@TODO Maybe make it so it clears data/disconnects if this is true and not just sets music to stopped
		if (currState !== 0)
		{
			ws.send("STATE:" + 0);
			currState = 0;
		}
	}
}

/*
oooooooooooo oooooo     oooo oooooooooooo ooooo      ooo ooooooooooooo  .oooooo..o
`888'     `8  `888.     .8'  `888'     `8 `888b.     `8' 8'   888   `8 d8P'    `Y8
 888           `888.   .8'    888          8 `88b.    8       888      Y88bo.
 888oooo8       `888. .8'     888oooo8     8   `88b.  8       888       `"Y8888o.
 888    "        `888.8'      888    "     8     `88b.8       888           `"Y88b
 888       o      `888'       888       o  8       `888       888      oo     .d8P
o888ooooood8       `8'       o888ooooood8 o8o        `8      o888o     8""88888P'
*/
function fireEvent(event)
{
	try
	{
		if (musicEvents.readyCheck === null || musicEvents.readyCheck())
		{
			if (event.data.toLowerCase() == "playpause" && musicEvents.playpause !== null)
			{
				musicEvents.playpause();
			}
			else if (event.data.toLowerCase() == "next" && musicEvents.next !== null)
			{
				musicEvents.next();
			}
			else if (event.data.toLowerCase() == "previous" && musicEvents.previous !== null)
			{
				musicEvents.previous();
			}
			else if (event.data.toLowerCase().includes("setprogress ") || event.data.toLowerCase().includes("setposition "))
			{
				if (musicEvents.progress !== null)
				{
					var progress = event.data.toLowerCase();
					//+9 because "progress " is 9 chars
					progress = progress.substring(progress.indexOf("progress ") + 9);
					//Goto the : at the end of the command, this command is now a compound command the first half is seconds the second is percent
					progress = parseFloat(progress.substring(0, progress.indexOf(":")));

					musicEvents.progress(progress);
				}
				else if (musicEvents.progressSeconds !== null)
				{
					var position = event.data.toLowerCase();
					//+9 because "position " is 9 chars
					position = position.substring(position.indexOf("position ") + 9);
					//Goto the : at the end of the command, this command is now a compound command the first half is seconds the second is percent
					position = parseInt(position.substring(0, position.indexOf(":")));

					musicEvents.progressSeconds(position);
				}
			}
			else if (event.data.toLowerCase().includes("setvolume ") && musicEvents.volume !== null)
			{
				var volume = event.data.toLowerCase();
				//+7 because "volume " is 7 chars
				volume = parseInt(volume.substring(volume.indexOf("volume ") + 7)) / 100;
				musicEvents.volume(volume);
			}
			else if (event.data.toLowerCase() == "repeat" && musicEvents.repeat !== null)
			{
				musicEvents.repeat();
			}
			else if (event.data.toLowerCase() == "shuffle" && musicEvents.shuffle !== null)
			{
				musicEvents.shuffle();
			}
			else if (event.data.toLowerCase() == "togglethumbsup" && musicEvents.toggleThumbsUp !== null)
			{
				musicEvents.toggleThumbsUp();
			}
			else if (event.data.toLowerCase() == "togglethumbsdown" && musicEvents.toggleThumbsDown !== null)
			{
				musicEvents.toggleThumbsDown();
			}
			else if (event.data.toLowerCase() == "rating " && musicEvents.rating !== null)
			{
				musicEvents.rating();
			}
		}
	}
	catch (e)
	{
		ws.send("Error:Error sending event to " + musicInfo.player);
		ws.send("ErrorD:" + e);
		throw e;
	}
}

/*
 .oooooo..o oooooooooooo ooooooooooooo ooooo     ooo ooooooooo.
d8P'    `Y8 `888'     `8 8'   888   `8 `888'     `8' `888   `Y88.
Y88bo.       888              888       888       8   888   .d88'
 `"Y8888o.   888oooo8         888       888       8   888ooo88P'
     `"Y88b  888    "         888       888       8   888
oo     .d8P  888       o      888       `88.    .8'   888
8""88888P'  o888ooooood8     o888o        `YbodP'    o888o
*/

//Max length of time between attempting to reconnect
//This is in MS so to make it more readable I took one second of time in MS * 60 to make it minutes so the last multiply is the amount of minutes you want
var MAXTIMEOUT = 1000 * 60 * 1;
var connectionAttemptCount = 0;
function init()
{
	//@TODO allow custom ports
	var url = "ws://127.0.0.1:8974/";
	ws = new WebSocket(url);
	ws.onopen = function()
	{
		//Reset connection attempts since we are now connected
		connectionAttemptCount = 0;
		connected = true;
		currPlayer = musicInfo.player();
		ws.send("PLAYER:" + currPlayer);
		//If this is not cleared in 1000 MS then assume plugin version is so old it has no version send
		outdatedCheck = setTimeout(function()
		{
			chrome.runtime.sendMessage(
				{"method": "flagAsOutdated"}
			);
		}, 1000);
		//@TODO Dynamic update rate based on success rate
		sendData = setInterval(function()
		{
			updateInfo();
		}, 50);
	};
	ws.onclose = function()
	{
		connected = false;
		chrome.runtime.sendMessage(
			{"method": "flagAsNotConnected"}
		);
		clearInterval(sendData);
		//If we fail repeatedly exponentially increase the length of time between connection attempts
		var timeoutLength = 1000 + Math.pow(10, connectionAttemptCount/4);
		//If we are longer than the max timeout do not increase and cap at timeout
		if(timeoutLength > MAXTIMEOUT)
		{
			timeoutLength = MAXTIMEOUT;
		}
		else
		{
			connectionAttemptCount++;
		}
		reconnect = setTimeout(function()
		{
			init();
		}, timeoutLength);
	};
	ws.onmessage = function(event)
	{
		var versionNumber = event.data.toLowerCase().split(":");
		if (versionNumber[0].includes("version"))
		{
			//Check that version number is the same major version
			if (versionNumber[1].split(".")[1] < 5)
			{
				chrome.runtime.sendMessage(
					{"method": "flagAsOutdated"}
				);
			}
			else
			{
				//Clear timeout set above
				clearTimeout(outdatedCheck);

				chrome.runtime.sendMessage(
					{"method": "flagAsConnected"}
				);
			}
		}
		try
		{
			fireEvent(event);
		}
		catch (e)
		{
			ws.send("Error:" + e);
			throw e;
		}
	};
	ws.onerror = function(event)
	{
		if (typeof event.data != 'undefined')
		{
			console.log("Websocket Error:" + event.data);
		}
	};

	currPlayer = null;

	currTitle = null;
	currArtist = null;
	currAlbum = null;
	currCover = null;
	currPos = null;
	currDur = null;
	currVolume = null;
	currRating = null;
	currRepeat = null;
	currShuffle = null;
	currState = null;

	currTrackID = null;
	currArtistID = null;
	currAlbumID = null;
}

window.onbeforeunload = function()
{
	if(ws != undefined)
	{
		ws.onclose = function() {}; // disable onclose handler first
		ws.close();
	}
};
