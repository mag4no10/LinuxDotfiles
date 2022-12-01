/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecuteScriptOnPage": () => (/* binding */ ExecuteScriptOnPage)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _wrappers_privileged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const ExecuteScriptOnPage = new _wrappers_privileged__WEBPACK_IMPORTED_MODULE_2__.PrivilegedHandler(new _main__WEBPACK_IMPORTED_MODULE_0__.EmptyResponseHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.EXECUTE_SCRIPT_ON_PAGE, (req, sender) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // We need to inject the extension ID dynamically so the client knows who to
    // communicate with.
    //
    // On Firefox, extension IDs are random, so this is necessary.
    yield chrome.scripting.executeScript({
        target: { tabId: (_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id },
        world: 'MAIN',
        args: [chrome.runtime.id, chrome.runtime.getURL('src/model_frame.html')],
        func: function ExtensionId(extensionId, modelFrameUrl) {
            window.CSGOFLOAT_EXTENSION_ID = extensionId;
            window.CSGOFLOAT_MODEL_FRAME_URL = modelFrameUrl;
        },
    });
    yield chrome.scripting.executeScript({
        target: { tabId: (_b = sender.tab) === null || _b === void 0 ? void 0 : _b.id },
        files: [req.path],
        world: 'MAIN',
    });
})));


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyResponseHandler": () => (/* binding */ EmptyResponseHandler)
/* harmony export */ });
/* unused harmony exports SimpleHandler, EmptyRequestHandler */
class SimpleHandler {
    constructor(type, handler) {
        this.type = type;
        this.handler = handler;
    }
    getType() {
        return this.type;
    }
    handleRequest(request, sender) {
        return this.handler(request, sender);
    }
}
class EmptyRequestHandler {
    constructor(type, handler) {
        this.type = type;
        this.handler = handler;
    }
    getType() {
        return this.type;
    }
    handleRequest(request, sender) {
        return this.handler(sender);
    }
}
class EmptyResponseHandler {
    constructor(type, handler) {
        this.type = type;
        this.handler = handler;
    }
    getType() {
        return this.type;
    }
    handleRequest(request, sender) {
        return this.handler(request, sender);
    }
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestType": () => (/* binding */ RequestType)
/* harmony export */ });
var RequestType;
(function (RequestType) {
    RequestType[RequestType["EXECUTE_SCRIPT_ON_PAGE"] = 0] = "EXECUTE_SCRIPT_ON_PAGE";
    RequestType[RequestType["EXECUTE_CSS_ON_PAGE"] = 1] = "EXECUTE_CSS_ON_PAGE";
    RequestType[RequestType["FETCH_INSPECT_INFO"] = 2] = "FETCH_INSPECT_INFO";
    RequestType[RequestType["FETCH_STALL"] = 3] = "FETCH_STALL";
    RequestType[RequestType["STORAGE_GET"] = 4] = "STORAGE_GET";
    RequestType[RequestType["STORAGE_SET"] = 5] = "STORAGE_SET";
    RequestType[RequestType["STORAGE_REMOVE"] = 6] = "STORAGE_REMOVE";
    RequestType[RequestType["CSMONEY_PRICE"] = 7] = "CSMONEY_PRICE";
    RequestType[RequestType["FETCH_PENDING_TRADES"] = 8] = "FETCH_PENDING_TRADES";
    RequestType[RequestType["FETCH_SKIN_MODEL"] = 9] = "FETCH_SKIN_MODEL";
})(RequestType || (RequestType = {}));


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivilegedHandler": () => (/* binding */ PrivilegedHandler)
/* harmony export */ });
/**
 * Restricts a given handler such that it can only run if the sender is
 * verified to be from the extension's origin (ie. content script)
 */
class PrivilegedHandler {
    constructor(handler) {
        this.handler = handler;
    }
    getType() {
        return this.handler.getType();
    }
    handleRequest(request, sender) {
        if (sender.id !== chrome.runtime.id) {
            throw new Error('Attempt to access restricted method outside of secure context (ie. content script)');
        }
        return this.handler.handleRequest(request, sender);
    }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSend": () => (/* binding */ ClientSend)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function ClientSend(handler, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const bundle = {
            version: _types__WEBPACK_IMPORTED_MODULE_0__.Version.V1,
            request_type: handler.getType(),
            request: args,
            id: Math.ceil(Math.random() * 100000000000),
        };
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(window.CSGOFLOAT_EXTENSION_ID || chrome.runtime.id, bundle, (resp) => {
                if (resp === null || resp === void 0 ? void 0 : resp.response) {
                    resolve(resp.response);
                }
                else {
                    reject(resp === null || resp === void 0 ? void 0 : resp.error);
                }
            });
        });
    });
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Version": () => (/* binding */ Version)
/* harmony export */ });
var Version;
(function (Version) {
    Version["V1"] = "CSGOFLOAT_V1";
})(Version || (Version = {}));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inPageContext": () => (/* binding */ inPageContext)
/* harmony export */ });
function inPageContext() {
    return !chrome.extension;
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecuteCssOnPage": () => (/* binding */ ExecuteCssOnPage)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _wrappers_privileged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const ExecuteCssOnPage = new _wrappers_privileged__WEBPACK_IMPORTED_MODULE_2__.PrivilegedHandler(new _main__WEBPACK_IMPORTED_MODULE_0__.EmptyResponseHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.EXECUTE_CSS_ON_PAGE, (req, sender) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield chrome.scripting.insertCSS({
        target: { tabId: (_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id },
        files: [req.path],
    });
})));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* unused harmony export init */
/* harmony import */ var _bridge_handlers_execute_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _bridge_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils_snips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _bridge_handlers_execute_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




/**
 * Initializes a page script, executing it in the page context if necessary
 *
 * @param scriptPath Relative path of the script (always in .js)
 * @param ifPage Fn to run if we are in the page's execution context
 */
function init(scriptPath, ifPage) {
    // Don't allow the page script to run this.
    if ((0,_utils_snips__WEBPACK_IMPORTED_MODULE_2__.inPageContext)()) {
        // @ts-ignore Set global identifier for other extensions to use
        window.csgofloat = true;
        ifPage();
        return;
    }
    // Global styles
    (0,_bridge_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(_bridge_handlers_execute_css__WEBPACK_IMPORTED_MODULE_3__.ExecuteCssOnPage, {
        path: 'src/global.css',
    });
    (0,_bridge_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(_bridge_handlers_execute_script__WEBPACK_IMPORTED_MODULE_0__.ExecuteScriptOnPage, {
        path: scriptPath,
    });
    console.log(`%c CSGOFloat Market Checker (v${chrome.runtime.getManifest().version}) by Step7750 `, 'background: #004594; color: #fff;');
    console.log('%c Changelog can be found here: https://github.com/csgofloat/extension ', 'background: #004594; color: #fff;');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0RCwyQ0FBMkM7SUFDM0MsSUFBSSwyREFBYSxFQUFFLEVBQUU7UUFDakIsK0RBQStEO1FBQy9ELE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXhCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTztLQUNWO0lBRUQsZ0JBQWdCO0lBQ2hCLDBEQUFVLENBQUMsMEVBQWdCLEVBQUU7UUFDekIsSUFBSSxFQUFFLGdCQUFnQjtLQUN6QixDQUFDLENBQUM7SUFFSCwwREFBVSxDQUFDLGdGQUFtQixFQUFFO1FBQzVCLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxHQUFHLENBQ1AsaUNBQWlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxnQkFBZ0IsRUFDckYsbUNBQW1DLENBQ3RDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUNQLHlFQUF5RSxFQUN6RSxtQ0FBbUMsQ0FDdEMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9leGVjdXRlX3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3dyYXBwZXJzL3ByaXZpbGVnZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvc25pcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9jc3MudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9wYWdlX3NjcmlwdHMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbXB0eVJlc3BvbnNlSGFuZGxlcn0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7UHJpdmlsZWdlZEhhbmRsZXJ9IGZyb20gJy4uL3dyYXBwZXJzL3ByaXZpbGVnZWQnO1xyXG5cclxuaW50ZXJmYWNlIEV4ZWN1dGVTY3JpcHRSZXF1ZXN0IHtcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVTY3JpcHRPblBhZ2UgPSBuZXcgUHJpdmlsZWdlZEhhbmRsZXIoXHJcbiAgICBuZXcgRW1wdHlSZXNwb25zZUhhbmRsZXI8RXhlY3V0ZVNjcmlwdFJlcXVlc3Q+KFJlcXVlc3RUeXBlLkVYRUNVVEVfU0NSSVBUX09OX1BBR0UsIGFzeW5jIChyZXEsIHNlbmRlcikgPT4ge1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gaW5qZWN0IHRoZSBleHRlbnNpb24gSUQgZHluYW1pY2FsbHkgc28gdGhlIGNsaWVudCBrbm93cyB3aG8gdG9cclxuICAgICAgICAvLyBjb21tdW5pY2F0ZSB3aXRoLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gT24gRmlyZWZveCwgZXh0ZW5zaW9uIElEcyBhcmUgcmFuZG9tLCBzbyB0aGlzIGlzIG5lY2Vzc2FyeS5cclxuICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogc2VuZGVyLnRhYj8uaWQgYXMgbnVtYmVyfSxcclxuICAgICAgICAgICAgd29ybGQ6ICdNQUlOJyxcclxuICAgICAgICAgICAgYXJnczogW2Nocm9tZS5ydW50aW1lLmlkLCBjaHJvbWUucnVudGltZS5nZXRVUkwoJ3NyYy9tb2RlbF9mcmFtZS5odG1sJyldLFxyXG4gICAgICAgICAgICBmdW5jOiBmdW5jdGlvbiBFeHRlbnNpb25JZChleHRlbnNpb25JZCwgbW9kZWxGcmFtZVVybCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LkNTR09GTE9BVF9FWFRFTlNJT05fSUQgPSBleHRlbnNpb25JZDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5DU0dPRkxPQVRfTU9ERUxfRlJBTUVfVVJMID0gbW9kZWxGcmFtZVVybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHNlbmRlci50YWI/LmlkIGFzIG51bWJlcn0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbcmVxLnBhdGhdLFxyXG4gICAgICAgICAgICB3b3JsZDogJ01BSU4nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuKTtcclxuIiwiaW1wb3J0IHtSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUhhbmRsZXI8UmVxLCBSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8UmVzcD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5IHt9XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlSZXF1ZXN0SGFuZGxlcjxSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPEVtcHR5LCBSZXNwPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFJlcXVlc3RUeXBlLCBwcml2YXRlIGhhbmRsZXI6IChzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8UmVzcD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IEVtcHR5LCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3BvbnNlSGFuZGxlcjxSZXE+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8UmVxLCB2b2lkPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFJlcXVlc3RUeXBlLCBwcml2YXRlIGhhbmRsZXI6IChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcikgPT4gUHJvbWlzZTx2b2lkPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKHJlcXVlc3QsIHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gUmVxdWVzdFR5cGUge1xyXG4gICAgRVhFQ1VURV9TQ1JJUFRfT05fUEFHRSxcclxuICAgIEVYRUNVVEVfQ1NTX09OX1BBR0UsXHJcbiAgICBGRVRDSF9JTlNQRUNUX0lORk8sXHJcbiAgICBGRVRDSF9TVEFMTCxcclxuICAgIFNUT1JBR0VfR0VULFxyXG4gICAgU1RPUkFHRV9TRVQsXHJcbiAgICBTVE9SQUdFX1JFTU9WRSxcclxuICAgIENTTU9ORVlfUFJJQ0UsXHJcbiAgICBGRVRDSF9QRU5ESU5HX1RSQURFUyxcclxuICAgIEZFVENIX1NLSU5fTU9ERUwsXHJcbn1cclxuIiwiaW1wb3J0IHtSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuLi9oYW5kbGVycy90eXBlcyc7XHJcbmltcG9ydCBNZXNzYWdlU2VuZGVyID0gY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcjtcclxuXHJcbi8qKlxyXG4gKiBSZXN0cmljdHMgYSBnaXZlbiBoYW5kbGVyIHN1Y2ggdGhhdCBpdCBjYW4gb25seSBydW4gaWYgdGhlIHNlbmRlciBpc1xyXG4gKiB2ZXJpZmllZCB0byBiZSBmcm9tIHRoZSBleHRlbnNpb24ncyBvcmlnaW4gKGllLiBjb250ZW50IHNjcmlwdClcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcml2aWxlZ2VkSGFuZGxlcjxSZXEsIFJlc3A+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5nZXRUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIGlmIChzZW5kZXIuaWQgIT09IGNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byBhY2Nlc3MgcmVzdHJpY3RlZCBtZXRob2Qgb3V0c2lkZSBvZiBzZWN1cmUgY29udGV4dCAoaWUuIGNvbnRlbnQgc2NyaXB0KScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGVSZXF1ZXN0KHJlcXVlc3QsIHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcm5hbFJlcXVlc3RCdW5kbGUsIEludGVybmFsUmVzcG9uc2VCdW5kbGUsIFJlcXVlc3RIYW5kbGVyLCBWZXJzaW9ufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENsaWVudFNlbmQ8UmVxLCBSZXNwPihoYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+LCBhcmdzOiBSZXEpOiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBidW5kbGU6IEludGVybmFsUmVxdWVzdEJ1bmRsZSA9IHtcbiAgICAgICAgdmVyc2lvbjogVmVyc2lvbi5WMSxcbiAgICAgICAgcmVxdWVzdF90eXBlOiBoYW5kbGVyLmdldFR5cGUoKSxcbiAgICAgICAgcmVxdWVzdDogYXJncyxcbiAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDAwKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX0VYVEVOU0lPTl9JRCB8fCBjaHJvbWUucnVudGltZS5pZCxcbiAgICAgICAgICAgIGJ1bmRsZSxcbiAgICAgICAgICAgIChyZXNwOiBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3A/LnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcC5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3A/LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vaGFuZGxlcnMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+O1xyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmVyc2lvbiB7XHJcbiAgICBWMSA9ICdDU0dPRkxPQVRfVjEnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVxdWVzdEJ1bmRsZSB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBJbnB1dCByZXF1ZXN0XHJcbiAgICByZXF1ZXN0OiBhbnk7XHJcblxyXG4gICAgLy8gUmFuZG9tIElEIHRvIGlkZW50aWZ5IHRoZSByZXF1ZXN0XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVzcG9uc2VCdW5kbGUge1xyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBSZXNwb25zZVxyXG4gICAgcmVzcG9uc2U6IGFueTtcclxuXHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIC8vIFJhbmRvbSBJRCB0byBpZGVudGlmeSB0aGUgcmVxdWVzdFxyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaW5QYWdlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gIWNocm9tZS5leHRlbnNpb247XG59XG4iLCJpbXBvcnQge0VtcHR5UmVzcG9uc2VIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHtQcml2aWxlZ2VkSGFuZGxlcn0gZnJvbSAnLi4vd3JhcHBlcnMvcHJpdmlsZWdlZCc7XHJcblxyXG5pbnRlcmZhY2UgRXhlY3V0ZUNzc1JlcXVlc3Qge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXhlY3V0ZUNzc09uUGFnZSA9IG5ldyBQcml2aWxlZ2VkSGFuZGxlcihcclxuICAgIG5ldyBFbXB0eVJlc3BvbnNlSGFuZGxlcjxFeGVjdXRlQ3NzUmVxdWVzdD4oUmVxdWVzdFR5cGUuRVhFQ1VURV9DU1NfT05fUEFHRSwgYXN5bmMgKHJlcSwgc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogc2VuZGVyLnRhYj8uaWQgYXMgbnVtYmVyfSxcclxuICAgICAgICAgICAgZmlsZXM6IFtyZXEucGF0aF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7RXhlY3V0ZVNjcmlwdE9uUGFnZX0gZnJvbSAnLi4vYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfc2NyaXB0JztcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vYnJpZGdlL2NsaWVudCc7XG5pbXBvcnQge2luUGFnZUNvbnRleHR9IGZyb20gJy4uL3V0aWxzL3NuaXBzJztcbmltcG9ydCB7RXhlY3V0ZUNzc09uUGFnZX0gZnJvbSAnLi4vYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfY3NzJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIHBhZ2Ugc2NyaXB0LCBleGVjdXRpbmcgaXQgaW4gdGhlIHBhZ2UgY29udGV4dCBpZiBuZWNlc3NhcnlcbiAqXG4gKiBAcGFyYW0gc2NyaXB0UGF0aCBSZWxhdGl2ZSBwYXRoIG9mIHRoZSBzY3JpcHQgKGFsd2F5cyBpbiAuanMpXG4gKiBAcGFyYW0gaWZQYWdlIEZuIHRvIHJ1biBpZiB3ZSBhcmUgaW4gdGhlIHBhZ2UncyBleGVjdXRpb24gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChzY3JpcHRQYXRoOiBzdHJpbmcsIGlmUGFnZTogKCkgPT4gYW55KSB7XG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlIHBhZ2Ugc2NyaXB0IHRvIHJ1biB0aGlzLlxuICAgIGlmIChpblBhZ2VDb250ZXh0KCkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBTZXQgZ2xvYmFsIGlkZW50aWZpZXIgZm9yIG90aGVyIGV4dGVuc2lvbnMgdG8gdXNlXG4gICAgICAgIHdpbmRvdy5jc2dvZmxvYXQgPSB0cnVlO1xuXG4gICAgICAgIGlmUGFnZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIHN0eWxlc1xuICAgIENsaWVudFNlbmQoRXhlY3V0ZUNzc09uUGFnZSwge1xuICAgICAgICBwYXRoOiAnc3JjL2dsb2JhbC5jc3MnLFxuICAgIH0pO1xuXG4gICAgQ2xpZW50U2VuZChFeGVjdXRlU2NyaXB0T25QYWdlLCB7XG4gICAgICAgIHBhdGg6IHNjcmlwdFBhdGgsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCVjIENTR09GbG9hdCBNYXJrZXQgQ2hlY2tlciAodiR7Y2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufSkgYnkgU3RlcDc3NTAgYCxcbiAgICAgICAgJ2JhY2tncm91bmQ6ICMwMDQ1OTQ7IGNvbG9yOiAjZmZmOydcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnJWMgQ2hhbmdlbG9nIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vY3Nnb2Zsb2F0L2V4dGVuc2lvbiAnLFxuICAgICAgICAnYmFja2dyb3VuZDogIzAwNDU5NDsgY29sb3I6ICNmZmY7J1xuICAgICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=