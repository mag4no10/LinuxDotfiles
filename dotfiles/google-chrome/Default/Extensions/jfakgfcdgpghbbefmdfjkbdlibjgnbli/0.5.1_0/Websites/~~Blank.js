//A blank file to use for those starting to add support for other players
/*global init createNewMusicInfo createNewMusicEventHandler convertTimeToString capitalize*/
function setup()
{
	var blankInfoHandler = createNewMusicInfo();

	blankInfoHandler.player = function()
	{
		return "Player Name";
	};

	blankInfoHandler.readyCheck = function()
	{
		return;
	};

	blankInfoHandler.state = function()
	{
		return;
	};
	blankInfoHandler.title = function()
	{
		return;
	};
	blankInfoHandler.artist = function()
	{
		return;
	};
	blankInfoHandler.album = function()
	{
		return;
	};
	blankInfoHandler.cover = function()
	{
		return;

	};
	blankInfoHandler.duration = function()
	{
		return;
	};
	blankInfoHandler.position = function()
	{
		return;
	};
	blankInfoHandler.volume = function()
	{
		return;
	};
	blankInfoHandler.rating = function()
	{
		return;
	};
	blankInfoHandler.repeat = function()
	{
		return;
	};
	blankInfoHandler.shuffle = function()
	{
		return;
	};


	var blankEventHandler = createNewMusicEventHandler();

	blankEventHandler.readyCheck = function()
	{
		return;
	};

	blankEventHandler.playpause = function()
	{
		
	};
	blankEventHandler.next = function()
	{
		
	};
	blankEventHandler.previous = function()
	{
		
	};
	blankEventHandler.progress = function(progress)
	{
		
	};
	blankEventHandler.volume = function(volume)
	{
		
	};
	blankEventHandler.repeat = function()
	{
		
	};
	blankEventHandler.shuffle = function()
	{
		
	};
	blankEventHandler.toggleThumbsUp = function()
	{
		
	};
	blankEventHandler.toggleThumbsDown = function()
	{
		
	};
	blankEventHandler.rating = function(rating)
	{
		
	};
}


setup();
init();
