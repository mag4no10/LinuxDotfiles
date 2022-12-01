window.setTimeout(function () {
  if (app.loadReason === "install") {
    app.tab.open("https://sites.google.com/view/crx/sdm", true);
	//app.tab.open("https://sites.google.com/view/crx/toucan", true);
	app.tab.open("https://jointoucan.com/partners/superdarkmode", true);
	//app.tab.open("https://tabfortrees.org/sdm", true);
	//chrome.runtime.openOptionsPage();
	//setRatingTime();

	//Turn on Dark mode
	chrome.storage.local.set({"state": "ON"}, function () {});
	config.addon.state = "ON";
	update(config.addon.state);
  }
}, 1000);

var hostname = function (url) {
  url = url.replace("www.", '');
  var s = url.indexOf("//") + 2;
  if (s > 1) {
    var o = url.indexOf('/', s);
    if (o > 0) return url.substring(s, o);
    else {
      o = url.indexOf('?', s);
      if (o > 0) return url.substring(s, o);
      else return url.substring(s);
    }
  } else return url;
};

var update = function (state) {
  app.button.label = 'Super Dark Mode: ' + (state!==undefined?state.toUpperCase():"OFF");// + '  (Ctrl+Shift+S)';;
  app.button.icon = {
    "path": {
      "16": '../../data/icons/' + (state!==undefined?state.toLowerCase():"off")  + '/16.png',
      "32": '../../data/icons/' + (state!==undefined?state.toLowerCase():"off")  + '/32.png',
      "48": '../../data/icons/' + (state!==undefined?state.toLowerCase():"off")  + '/48.png',
      "64": '../../data/icons/' + (state!==undefined?state.toLowerCase():"off")  + '/64.png'
    }
  };
};

app.button.onCommand(function () {
  config.addon.state = config.addon.state === "ON" ? "OFF" : "ON";
  update(config.addon.state);
});

chrome.contextMenus.onClicked.addListener(function (e) {
  if (e.menuItemId === "dark-mode-context-menu") {
	var pageUrl = e.pageUrl;
	checkWhitelist(hostname(pageUrl), function(ok){
		if(!ok){
		  chrome.storage.local.get({"whitelist": []}, function (o) {
			var whitelist = o.whitelist;
			whitelist.push(hostname(pageUrl));
			whitelist = whitelist.filter(function (element, index, array) {return element && array.indexOf(element) === index});
			chrome.storage.local.set({"whitelist": whitelist}, function () {});
		  });
		}else{
		  removeHostFromWhitelist(hostname(pageUrl));
		}
	});
  }
  if (e.menuItemId === "sdm-goto-option-page") {
	chrome.runtime.openOptionsPage();
  }
});

function removeHostFromWhitelist(s){
	chrome.storage.local.get("whitelist", function(result){
		for(var i = 0; i< result.whitelist.length; i++)
			if(result.whitelist[i].indexOf(s)>=0){
				result.whitelist.splice(i, 1);
				break;
			};
			chrome.storage.local.set({"whitelist":result.whitelist});
	});
}

function checkWhitelist(s, func){
	chrome.storage.local.get("whitelist", function(result){
		res = false;
		if(result.whitelist!==null && result.whitelist!==undefined)
		for(var i = 0; i< result.whitelist.length; i++)
			if(result.whitelist[i].indexOf(s)>=0){
				res = true;
				break;
			};
		func(res);
	});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.url_host!==null && request.url_host!==undefined && request.sdm_update_event==1)
		checkWhitelist(hostname(request.url_host), function(ok){
			if(!ok){
			  chrome.contextMenus.update("dark-mode-context-menu", {"title": "⛔️ Disable SDM on this site (Ctrl+Shift+E)"});
			}else{
			  chrome.contextMenus.update("dark-mode-context-menu", {"title": "✅ Enable SDM on this site (Ctrl+Shift+E)"});
			}
			sendResponse({});
		});
	else if(request.url_host!==null && request.url_host!==undefined && request.sdm_update_event==2){
		var pageUrl = request.url_host;
		checkWhitelist(hostname(pageUrl), function(ok){
			if(!ok){
			  chrome.storage.local.get({"whitelist": []}, function (o) {
				var whitelist = o.whitelist;
				whitelist.push(hostname(pageUrl));
				whitelist = whitelist.filter(function (element, index, array) {return element && array.indexOf(element) === index});
				chrome.storage.local.set({"whitelist": whitelist}, function () {});
			  });
			}else{
			  removeHostFromWhitelist(hostname(pageUrl));
			}
			sendResponse({});
		});
	}
});

window.setTimeout(function () {update(config.addon.state)}, 300);
chrome.contextMenus.create({"contexts": ["page"], "id": "dark-mode-context-menu", "title": "⛔️ Disable SDM on this site (Ctrl+Shift+E)"});
chrome.contextMenus.create({"contexts": ["page"], "id": "sdm-goto-option-page", "title": "🛠 Advanced Options"});

function setRatingTime(){
	var d = (new Date()).getTime();
	chrome.storage.local.set({"sdm_time_installed": d}, function(){});
}