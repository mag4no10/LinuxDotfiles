var n_dark_themes = 3;
var tab = document.location.href;
var link = document.getElementById("dark-mode");
var style = document.getElementById("dark-mode-custom-style");
var head = document.documentElement || document.head || document.querySelector("head");
var iseventfired = true;
var css4iframe = '';

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

var custom = {
  "ebay": "www.ebay.",
  "yahoo": "www.yahoo.",
  "twitch": ".twitch.tv",
  "github": "github.com",
  "docs": "docs.google.",
  "calendar": "calendar.google.",
  "bing": "www.bing.com",
  "amazon": "www.amazon.",
  "gmail": "mail.google.",
  "tumblr": "www.tumblr.",
  "twitter": "twitter.com",
  "inbox": "inbox.google.",
  "drive": "drive.google.",
  "sites": "sites.google.",
  "youtube": "www.youtube.",
  "dropbox": "www.dropbox.",
  "reddit": "www.reddit.com",
  "maps": ".google.com/maps/",
  "facebook": "www.facebook.",
  "wikipedia": "wikipedia.org",
  "instagram": "www.instagram.",
  "duckduckgo": "duckduckgo.com",
  "stackoverflow": "stackoverflow.com",
  "vimeo": "vimeo.com",
  "aljazeera":"aljazeera.com",
  "microsoft":"microsoft.com",
  "analytics":"analytics.google.",
  "chicagotribune":"chicagotribune.com",
  "schoology":"schoology.com",
  "xbox":".xbox.com",
  "vk":"vk.com",
  "espn":"espn.com",
  "oracle":"oracle.com",
  "translate":"translate.google.",
  "whatsapp":"whatsapp.com",
  "bilibili":"bilibili.com",
  "ecjugend":"ec-jugend.de",
  "7plusau":"7plus.com.au",
  "toucan":"jointoucan.com",
  "archive":"archive.org",
  "tiktok":"tiktok.com"
};

if (!link) {
  link = document.createElement("link");
  link.setAttribute("type", "text/css");
  link.setAttribute("id", "dark-mode");
  link.setAttribute("rel", "stylesheet");
  if (head) head.appendChild(link);
}

if (!style) {
  style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "dark-mode-custom-style");
}

var edit = function (href, txt) {
  link.setAttribute("href", href);
  if(href==='')
	  forcedarkTwitter(false, href);
  else
	  forcedarkTwitter(true, href);
  style.textContent = txt;
  chrome.storage.local.get("sdm_low_contrast", function(e){
	if(e["sdm_low_contrast"]===true){
		if(href==='')
			removelowcontrastfilter();
		 else
			addlowcontrastfilter();
	}else{
		removelowcontrastfilter();
	}
  });
  chrome.storage.local.get("sdm_range_value", function(e){
	  removelowcontrastfilter();
	  if(href!=='')
		  setTimeout(function(){
			  addlowcontrastfilter();
		  }, 100);
  });
  chrome.storage.local.get("sdm_enable_pattern", function(e){
	if(e["sdm_enable_pattern"]===true){
		if(href==='')
			disablepattern();
		 else
			enablepattern();
	}else{
		disablepattern();
	}
  });
  chrome.storage.local.get("dark_2", function(e){
	  if(e.dark_2)
		  addcustomecolorschemes();
	  else{
		var dmdc = document.getElementById('dark-mode-custom-color');
		if(dmdc!==undefined && dmdc!==null)
			dmdc.remove();
	  }
  });
  chrome.storage.local.get("sdm_custom_css", function(e){
	var sdmcss = document.getElementById("sdm_custom_css");
	if(e["sdm_custom_css"]!==undefined && e["sdm_custom_css"]!==null && e["sdm_custom_css"]!==""){
		if(href!=='')
			customCSS(e["sdm_custom_css"]);
		else{
			if(sdmcss!=null)
				sdmcss.remove();
		}
	}else{
		if(sdmcss!=null)
			sdmcss.remove();
	}
  });
};

function forcedarkTwitter(twdark, src){
	var timetwitter = setInterval(function(){
		let shadowroots = document.querySelectorAll('*');
		let counteri = 0;
		if(location.host.indexOf("archive.org")<0){
			for(var i=0; i<shadowroots.length; i++)
				if (shadowroots[i].shadowRoot != undefined && shadowroots[i] != null) {
					let sheet = new CSSStyleSheet;
					if(twdark)
						sheet.replaceSync(`*{background:black !important; color:gray !important; border: none !important;} span[class*="tou-"]{color:orange !important;}`);
					else
						sheet.replaceSync(`*{background: "" !important; color:"" !important; border: "" !important;} span[class*="tou-"]{color:"" !important;} .tou-g6751g{background-color:white !important; }`);
					shadowroots[i].shadowRoot.adoptedStyleSheets = [ sheet ];
					
					if(counteri===0) clearInterval(timetwitter);
					counteri++;
				}
		}else{
			let shr = document.getElementsByTagName("app-root");
			if(shr.length>0){
				if(shr[0].shadowRoot != undefined && shr[0].shadowRoot != null){
					let headerarch = shr[0].shadowRoot.querySelector("header");
					if(headerarch!=null && headerarch!=undefined){
						headerarch.style.filter = (twdark)?("invert(1)"):("none");
						headerarch.style.zIndex = 9999;
						headerarch.style.position = 'relative';
					}
					let shrr = shr[0].shadowRoot.querySelector("modal-manager");
					if(shrr!=null && shrr!=undefined) shrr.style.display = "none";
					let shrr2 = shr[0].shadowRoot.querySelector("main router-slot home-page");
					if(shrr2!=null && shrr2!=undefined)
					if(shrr2.shadowRoot != undefined && shrr2.shadowRoot != null){
						let shrr3 = shrr2.shadowRoot.querySelector("#page-container #page-content-container infinite-scroller");
						if(shrr3!=null && shrr3!=undefined)
							if(shrr3.shadowRoot != undefined && shrr3.shadowRoot !== null){
								//shrr3.shadowRoot.adoptedStyleSheets = [sheet2];
								shrr3.shadowRoot.getElementById("container").style.filter = (twdark)?("invert(1)"):("none");
							}
						let shrr4 = shrr2.shadowRoot.querySelector('#wayback-search-container');
						if(shrr4!=null && shrr4!=undefined){
							shrr4.style.filter  = (twdark)?("invert(1)"):("none");
						}
					}
				}
			}
			clearInterval(timetwitter);
		}
	}, 500);
}

function customCSS(xxx){
	let style3 = document.createElement('style');
	style3.type = 'text/css';
	style3.id = "sdm_custom_css";
	if (style3.styleSheet){
	  style3.styleSheet.cssText = xxx;
	} else {
	  style3.appendChild(document.createTextNode(xxx));
	}
	head.appendChild(style3);
}

var listsitewithoutfilters = {
  "stackoverflow": "stackoverflow.com",
  "twitch": "twitch.tv"
};
function addlowcontrastfilter(){
	chrome.storage.local.get('sdm_range_value', function(e){
	chrome.storage.local.get('sdm_low_contrast', function(e1){
		let noinsert = false;
		for(url_check in listsitewithoutfilters)
			noinsert=noinsert||(location.host.indexOf(listsitewithoutfilters[url_check])>=0);
		
		let css = (noinsert)?('body{filter:brightness('+e['sdm_range_value']+'%) sepia(10%);}'):('html{filter:brightness('+e['sdm_range_value']+'%) sepia(10%);}');
		
		let style2 = document.createElement('style');
		style2.type = 'text/css';
		style2.id = "sdm_low_contrast";
		if (style2.styleSheet){
		  style2.styleSheet.cssText = css;
		} else {
		  style2.appendChild(document.createTextNode(css));
		}
		
		if(!noinsert && document.getElementById('sdm_low_contrast')==null && e1['sdm_low_contrast']==true)
			head.appendChild(style2);
		else if(document.getElementById('sdm_low_contrast')==null && e1['sdm_low_contrast']==true)
			head.appendChild(style2);
	});
	});
}

function enablepattern(){
	//{
	let css = `:root{--bg-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E") !important;}`;
	//}
	let style4 = document.createElement('style');
	style4.type = 'text/css';
	style4.id = "sdm_enable_pattern";
	if (style4.styleSheet){
	  style4.styleSheet.cssText = css;
	} else {
	  style4.appendChild(document.createTextNode(css));
	}
	let noinsert = false;
	for(url_check in custom)
		noinsert=noinsert||(location.host.indexOf(custom[url_check])>=0);
	if(!noinsert && document.getElementById('sdm_enable_pattern')==null)
		head.appendChild(style4);
}

function removelowcontrastfilter(){
	let sdm_lc_f = document.getElementById('sdm_low_contrast');
	if(sdm_lc_f!=null)
		sdm_lc_f.remove();
}

function disablepattern(){
	let sdm_lc_f = document.getElementById('sdm_enable_pattern');
	if(sdm_lc_f!=null)
		sdm_lc_f.remove();
}

function hexToRgbA(hex, alpha){
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    throw new Error('Bad Hex');
}

function addcustomecolorschemes(){
  let tmp = {};
  let colors = Array("#1a1a1a", "#6e6e6e", "#5a7878", "#78785a", "#d3d3d3", "#d3d3d3", "#add8e6", "#242424");
  for (var i=0; i<=8; i++) tmp['colorschemes_'+i] = "";
  chrome.storage.local.get(tmp, function (e) {
	for(var i=1; i<=8; i++) {
		if(e!==undefined && e!==null) 
			if(i===6)
				colors[i-1] = hexToRgbA(e['colorschemes_'+i], 0.2);
			else if(i===8)
				colors[i-1] = hexToRgbA(e['colorschemes_'+i], 0.95);
			else
				colors[i-1] = hexToRgbA(e['colorschemes_'+i], 1);;
	}
	let css = `
		:root{
			--bg-color:`+colors[0]+`;
			--text-color:`+colors[1]+`;
			--a-color:`+colors[2]+`;
			--a-visited-color:`+colors[3]+`;
			--a-hover-color:`+colors[4]+`;
			--input-border-color:`+colors[5]+`;
			--input-placeholder-color:`+colors[6]+`;
			--dialog-bg-color:`+colors[7]+`;
			--bg-image:linear-gradient(`+colors[0]+`,`+colors[0]+`);
		}
	`;
	let style3 = document.createElement('style');
	style3.type = 'text/css';
	style3.id = "dark-mode-custom-color";
	if (style3.styleSheet){
	  style3.styleSheet.cssText = css;
	} else {
	  style3.appendChild(document.createTextNode(css));
	}
	let dmdc = document.getElementById('dark-mode-custom-color');
	if(dmdc!==undefined && dmdc!==null)
		dmdc.remove();
	head.appendChild(style3);
  });
}

var update = function () {
  var tmp = {};
  for (var name in custom) tmp[name] = true;
  for (var i = 1; i <= n_dark_themes; i++) tmp['dark_' + i] = false;
  tmp["dark_1"] = true;
  tmp["whitelist"] = [];
  tmp["state"] = "OFF";
  chrome.storage.local.get(tmp, function (e) {
    var id = null;
    var host = hostname(tab);
    /* disable dark mode for chrome newtab page */
    if (tab.indexOf("/chrome/newtab") !== -1) return edit('', '');
    for (var i = 0; i < e.whitelist.length; i++) {
      if (e.whitelist[i] === host) return edit('', '');
    }
    /*  */
    for (var i = 1; i <= n_dark_themes; i++) {
      if (e['dark_' + i]) {
        id = i;
        break;
      }
    }
    /*  */
    for (var name in custom) {
      if (e[name]) {
        if (tab.indexOf(custom[name]) !== -1) {
          var href = e.state === "ON" ? (chrome.runtime.getURL("data/content_script/custom/" + name + ".css")) : '';
          edit(href, '');
          return;
        }
      }
    }
    /*  */
    if (e.state === "ON") {
      if (id) {
        var href = chrome.runtime.getURL('data/content_script/general/dark_' + id + '.css');
        if (id === 34) chrome.storage.local.get({"custom": ''}, function (e) {edit('', e.custom)});
        else {edit(href, '');}
      } else edit('', '');
    } else edit('', '');
  });
  var _thread = setInterval(function(){
	  if(document.body!==null&&document.body!==undefined){
		clearInterval(_thread);
		try{
			document.body.addEventListener("mousedown", function sdmmousedownevent(eventData){
				if(eventData.which===3)
					chrome.runtime.sendMessage({"sdm_update_event":1, "url_host":location.hostname}, function(response){if(chrome.runtime.lastError){}});
			});
			if(iseventfired)
				document.body.addEventListener("keydown", function sdmkeydownevent(eventData){
					if(eventData.ctrlKey && event.shiftKey && eventData.keyCode == 69 && !(eventData.altKey || eventData.metaKey)){//Ctrl+Shift+E
						chrome.runtime.sendMessage({"sdm_update_event":2, "url_host":location.hostname}, function(response){if(chrome.runtime.lastError){}});
						iseventfired = false;
					}
			});
		}catch(exception){};
	  }
  },10);
};

var init = function (e) {
  if (e) tab = e;
  update();
  if(chrome.runtime.lastError){}
};

var observer = new MutationObserver(function (e) {
  var link_tmp = document.getElementById("dark-mode");
  if (!link_tmp) {
    if (head) head.appendChild(link);
  }
  /*  */
  observer.disconnect();
});

if (window === window.top) update();
else chrome.runtime.sendMessage({"message": "top"}, init);

chrome.storage.onChanged.addListener(update);
observer.observe(document, {"childList": true, "subtree": true});