var app = {};
app.tab = {"open": function (url) {chrome.tabs.create({"url": url, "active": true})}};
if (chrome.runtime.onInstalled) chrome.runtime.onInstalled.addListener(function (e) {app.loadReason = e.reason});
app.storage = (function () {
  var objs = {};
  chrome.storage.onChanged.addListener(function () {chrome.storage.local.get(null, function (o) {objs = o})});
  window.setTimeout(function () {
    chrome.storage.local.get(null, function (o) {
      objs = o;
      var script = document.createElement("script");
      script.src = "../common.js";
      document.body.appendChild(script);
    });
  }, 300);
  
  return {
    "read": function (id) {return objs[id]},
    "write": function (id, data) {
      var tmp = {};
      objs[id] = data;
      tmp[id] = data;
      chrome.storage.local.set(tmp, function () {});
    }
  }
})();

app.button = (function () {
  var onCommand;
  chrome.browserAction.onClicked.addListener(function () {if (onCommand) onCommand(); chrome.storage.local.set({"sdm_auto_time": false}, function(){});});
  /*  */
  return {
    "onCommand": function (c) {onCommand = c},
    set icon (o) {chrome.browserAction.setIcon(o)},
    set label (label) {chrome.browserAction.setTitle({"title": label})}
  };
})();

window.setInterval(function(){
	chrome.storage.local.get("sdm_auto_time", function(e){
		if(e["sdm_auto_time"]){
			chrome.storage.local.get("sdm_start_time", function(e1){
				chrome.storage.local.get("sdm_to_time", function(e2){
					if(e1['sdm_start_time']!==undefined && e2['sdm_to_time']!=undefined){
						if(checkTime(e1['sdm_start_time'], e2['sdm_to_time'])){
							if(config.addon.state === "OFF"){
								config.addon.state = "ON";
								update(config.addon.state);
							}
						}else{
							if(config.addon.state === "ON"){
								config.addon.state = "OFF";
								update(config.addon.state);
							}
						}
					}
				});
			});
		}
	});
	chrome.storage.local.get("sdm_autodarken", function(e){
		if(e["sdm_autodarken"]){
			if(checkSystemDark()){
				if(config.addon.state === "OFF"){
					config.addon.state = "ON";
					update(config.addon.state);
				}
			}else{
				if(config.addon.state === "ON"){
					config.addon.state = "OFF";
					update(config.addon.state);
				}
			}
		}
	});
	chrome.storage.local.get("state", function(e){update(e['state']);});
}, 500);

function checkTime(fromtime, totime) {
    var d = new Date();
    var curr = d.getSeconds()+60*d.getMinutes()+60*60*d.getHours();
	
	var sfromtime = fromtime.split(':');
	var stotime = totime.split(':');
	
	var fromtime = parseInt(sfromtime[0])*60*60+parseInt(sfromtime[1])*60;;
	var totime = parseInt(stotime[0])*60*60+parseInt(stotime[1])*60;
	
	if(parseInt(sfromtime[0])>parseInt(stotime[0]))
		return !(curr>=totime && curr<=fromtime);
	else
		return curr>=fromtime && curr<=totime;
}

function update(state) {
  app.button.label = 'Super Dark Mode: ' + state.toUpperCase();// + '  (Ctrl+Shift+S)';
  app.button.icon = {
    "path": {
      "16": '../../data/icons/' + state.toLowerCase() + '/16.png',
      "32": '../../data/icons/' + state.toLowerCase() + '/32.png',
      "48": '../../data/icons/' + state.toLowerCase() + '/48.png',
      "64": '../../data/icons/' + state.toLowerCase() + '/64.png'
    }
  };
};

chrome.runtime.onStartup.addListener(function(){
	//console.log('On startup');
	chrome.storage.local.get("sdm_time_installed", function(e){
		if(e["sdm_time_installed"]!==undefined){
			var curr = (new Date()).getTime();
			var installed = e["sdm_time_installed"];
			var time_diff = curr - installed;
			if(time_diff>2*24*60*60*1000){
				app.tab.open("https://sites.google.com/view/crx/rating-sdm", true);
				chrome.storage.local.remove("sdm_time_installed", function(){});
			}
		}
	});
});

//chrome.runtime.setUninstallURL("https://fontkeyboard.org/try-our-chrome-extensions?utm_source=sdm_uninstall");
//chrome.runtime.setUninstallURL("https://sites.google.com/view/crx/toucan");
chrome.runtime.setUninstallURL("https://jointoucan.com/partners/superdarkmode");

function checkSystemDark(){
	try{
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}catch(e){
		return false;
	}
}