/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
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


/***/ }),
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
/* harmony export */   "EmptyResponseHandler": () => (/* binding */ EmptyResponseHandler),
/* harmony export */   "SimpleHandler": () => (/* binding */ SimpleHandler)
/* harmony export */ });
/* unused harmony export EmptyRequestHandler */
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


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export InventoryItemHolderMetadata */
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _common_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let InventoryItemHolderMetadata = class InventoryItemHolderMetadata extends _common_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__.ItemHolderMetadata {
    get asset() {
        var _a;
        if (!this.assetId)
            return;
        return (_a = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_rgAssets[this.assetId]) === null || _a === void 0 ? void 0 : _a.description;
    }
    get ownerSteamId() {
        var _a, _b;
        if (g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner) {
            return (_a = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner) === null || _a === void 0 ? void 0 : _a.strSteamId;
        }
        else if (g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.owner) {
            return (_b = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.owner) === null || _b === void 0 ? void 0 : _b.strSteamId;
        }
    }
};
InventoryItemHolderMetadata = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_0__.CustomElement)(),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_0__.InjectAppend)('#active_inventory_page div.inventory_page:not([style*="display: none"]) .itemHolder div.app730', _injectors__WEBPACK_IMPORTED_MODULE_0__.InjectionMode.CONTINUOUS)
], InventoryItemHolderMetadata);



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomElement": () => (/* binding */ CustomElement),
/* harmony export */   "InjectAfter": () => (/* binding */ InjectAfter),
/* harmony export */   "InjectAppend": () => (/* binding */ InjectAppend),
/* harmony export */   "InjectionMode": () => (/* binding */ InjectionMode)
/* harmony export */ });
/* unused harmony export InjectBefore */
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _utils_snips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


var InjectionMode;
(function (InjectionMode) {
    // Injects once at page load for elements matching the selector
    InjectionMode[InjectionMode["ONCE"] = 0] = "ONCE";
    // Continually injects whenever new elements that match the
    // selector exist that haven't been injected into yet
    //
    // Should be use for "dynamic" elements
    InjectionMode[InjectionMode["CONTINUOUS"] = 1] = "CONTINUOUS";
})(InjectionMode || (InjectionMode = {}));
var InjectionType;
(function (InjectionType) {
    InjectionType[InjectionType["Append"] = 0] = "Append";
    InjectionType[InjectionType["Before"] = 1] = "Before";
    InjectionType[InjectionType["After"] = 2] = "After";
})(InjectionType || (InjectionType = {}));
const InjectionConfigs = {
    [InjectionType.Append]: {
        exists: (ctx, selector) => !!ctx.children(selector).length,
        op: (ctx, target) => ctx.append(target.elem()),
    },
    [InjectionType.Before]: {
        exists: (ctx, selector) => !!ctx.parent().children(selector).length,
        op: (ctx, target) => ctx.before(target.elem()),
    },
    [InjectionType.After]: {
        exists: (ctx, selector) => !!ctx.parent().children(selector).length,
        op: (ctx, target) => ctx.after(target.elem()),
    },
};
function CustomElement() {
    return function (target, propertyKey, descriptor) {
        if (!(0,_utils_snips__WEBPACK_IMPORTED_MODULE_1__.inPageContext)()) {
            return;
        }
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.customElement)(target.tag())(target);
    };
}
function Inject(selector, mode, type) {
    return function (target, propertyKey, descriptor) {
        if (!(0,_utils_snips__WEBPACK_IMPORTED_MODULE_1__.inPageContext)()) {
            return;
        }
        switch (mode) {
            case InjectionMode.ONCE:
                $J(selector).each(function () {
                    InjectionConfigs[type].op($J(this), target);
                });
                break;
            case InjectionMode.CONTINUOUS:
                setInterval(() => {
                    $J(selector).each(function () {
                        // Don't add the item again if we already have
                        if (InjectionConfigs[type].exists($J(this), target.tag()))
                            return;
                        InjectionConfigs[type].op($J(this), target);
                    });
                }, 250);
                break;
        }
    };
}
function InjectAppend(selector, mode = InjectionMode.ONCE) {
    return Inject(selector, mode, InjectionType.Append);
}
function InjectBefore(selector, mode = InjectionMode.ONCE) {
    return Inject(selector, mode, InjectionType.Before);
}
function InjectAfter(selector, mode = InjectionMode.ONCE) {
    return Inject(selector, mode, InjectionType.After);
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   "state": () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);

//# sourceMappingURL=decorators.js.map


/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map


/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "property": () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):i(e,n)}
//# sourceMappingURL=property.js.map


/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({...t,state:!0})}
//# sourceMappingURL=state.js.map


/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export eventOptions */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e){return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map


/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decorateProperty": () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports legacyPrototypeMethod, standardPrototypeMethod */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=(e,t,o)=>{Object.defineProperty(t,o,e)},t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map


/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export query */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(i,n){return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}
//# sourceMappingURL=query.js.map


/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export queryAll */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e){return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-all.js.map


/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export queryAsync */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e){return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-async.js.map


/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAssignedElements": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;const e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l(n){const{slot:l,selector:t}=null!=n?n:{};return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map


/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export queryAssignedNodes */
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?(0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({slot:s,flatten:n,selector:r}):(0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemHolderMetadata": () => (/* binding */ ItemHolderMetadata)
/* harmony export */ });
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _services_float_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _utils_skin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _utils_ranks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _utils_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// Generic annotator of item holder metadata (float, seed, etc...)
// Must be extended to use as a component
class ItemHolderMetadata extends _custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement {
    get assetId() {
        var _a;
        return (_a = $J(this).parent().attr('id')) === null || _a === void 0 ? void 0 : _a.split('_')[2];
    }
    get inspectLink() {
        var _a, _b, _c, _d;
        if (!this.asset)
            return;
        if (!((_a = this.asset) === null || _a === void 0 ? void 0 : _a.actions) || ((_c = (_b = this.asset) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c.length) === 0)
            return;
        if (!this.ownerSteamId) {
            return;
        }
        return (_d = this.asset) === null || _d === void 0 ? void 0 : _d.actions[0].link.replace('%owner_steamid%', this.ownerSteamId).replace('%assetid%', this.assetId);
    }
    render() {
        if (!this.itemInfo)
            return lit__WEBPACK_IMPORTED_MODULE_1__.html ``;
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <span>
                <span class="float">${(0,_utils_skin__WEBPACK_IMPORTED_MODULE_4__.formatFloatWithRank)(this.itemInfo, 6)}</span>
                <span class="seed">${(0,_utils_skin__WEBPACK_IMPORTED_MODULE_4__.formatSeed)(this.itemInfo)}</span>
            </span>
        `;
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.connectedCallback.call(this);
            if (this.inspectLink) {
                this.onInit();
            }
            else {
                // Wait until the asset exists
                (0,_utils_observers__WEBPACK_IMPORTED_MODULE_6__.Observe)(() => this.inspectLink, () => {
                    if (this.inspectLink) {
                        this.onInit();
                    }
                }, 200);
            }
        });
    }
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.asset)
                return;
            if (!(0,_utils_skin__WEBPACK_IMPORTED_MODULE_4__.isSkin)(this.asset))
                return;
            // Commodities won't have inspect links
            if (!this.inspectLink)
                return;
            try {
                this.itemInfo = yield _services_float_fetcher__WEBPACK_IMPORTED_MODULE_3__.gFloatFetcher.fetch({
                    link: this.inspectLink,
                });
            }
            catch (e) {
                console.error(`Failed to fetch float for ${this.assetId}: ${e.toString()}`);
            }
            if (this.itemInfo) {
                this.annotateRankShine(this.itemInfo);
            }
        });
    }
    annotateRankShine(info) {
        const rank = (0,_utils_skin__WEBPACK_IMPORTED_MODULE_4__.getLowestRank)(info);
        if (!rank || rank > 5) {
            return;
        }
        // Make the inventory box coloured ;)
        $J(this).parent().css('color', 'black');
        $J(this).parent().find('img').css('background-color', (0,_utils_ranks__WEBPACK_IMPORTED_MODULE_5__.getRankColour)(rank));
        $J(this).parent().addClass('csgofloat-shine');
    }
}
ItemHolderMetadata.styles = [
    ..._custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement.styles,
    lit__WEBPACK_IMPORTED_MODULE_1__.css `
            .float {
                position: absolute;
                bottom: 3px;
                right: 3px;
                font-size: 12px;
            }

            .seed {
                position: absolute;
                top: 3px;
                right: 3px;
                font-size: 12px;
            }
        `,
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], ItemHolderMetadata.prototype, "itemInfo", void 0);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatElement": () => (/* binding */ FloatElement)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

function camelToDashCase(str) {
    return str
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
}
// LitElement wrapper with a pre-determined tag
class FloatElement extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static tag() {
        return `csgofloat-${camelToDashCase(this.name)}`;
    }
    static elem() {
        return document.createElement(this.tag());
    }
}
FloatElement.styles = [
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
            hr {
                background-color: #1b2939;
                border-style: solid none none;
                border-color: black;
                border-width: 1px 0 0;
                height: 2px;
            }

            a {
                color: #ebebeb;
                cursor: pointer;
            }

            input[type='text'],
            input[type='password'],
            input[type='number'],
            select {
                color: #909090;
                background-color: rgba(0, 0, 0, 0.2);
                border: 1px solid #000;
                border-radius: 3px;
            }

            input[type='color'] {
                float: left;
                margin-top: 2px;
                -webkit-appearance: none;
                border: none;
                width: 20px;
                height: 20px;
                padding: 0;
            }

            input[type='color']::-webkit-color-swatch-wrapper {
                padding: 0;
            }

            input[type='color']::-webkit-color-swatch {
                border: none;
            }
        `,
];


/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);

//# sourceMappingURL=index.js.map


/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactiveElement": () => (/* binding */ d),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css)
/* harmony export */ });
/* unused harmony exports defaultConverter, notEqual */
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;const e=window,r=e.trustedTypes,h=r?r.emptyScript:"",o=e.reactiveElementPolyfillSupport,n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(i))}else void 0!==i&&s.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:d}),(null!==(s=e.reactiveElementVersions)&&void 0!==s?s:e.reactiveElementVersions=[]).push("1.4.0");
//# sourceMappingURL=reactive-element.js.map


/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adoptStyles": () => (/* binding */ S),
/* harmony export */   "css": () => (/* binding */ i),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports CSSResult, supportsAdoptingStyleSheets, unsafeCSS */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map


/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ y),
/* harmony export */   "noChange": () => (/* binding */ x),
/* harmony export */   "render": () => (/* binding */ A)
/* harmony export */ });
/* unused harmony exports _$LH, nothing, svg */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s=i.trustedTypes,e=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,n="?"+o,l=`<${n}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new S(i.insertBefore(r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},E=h.createTreeWalker(h,129,null,!1),C=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o+y):s+o+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==e?e.createHTML(u):u,n]};class P{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,i);if(this.el=P.createElement(v,e),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=E.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?H:"@"===i[1]?I:M})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(o),i=t.length-1;if(i>0){l.textContent=s?s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),E.nextNode(),c.push({type:2,index:++h});l.append(t[i],r())}}}else if(8===l.nodeType)if(l.data===n)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(o,t+1));)c.push({type:7,index:h}),t+=o.length-1}h++}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=V(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=E.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class S{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):c(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.k(h.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}O(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new S(this.S(r()),this.S(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.P(t)}P(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===b?void 0:t}}const k=s?s.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const z={A:"$lit$",M:o,C:n,L:1,R:C,D:N,V:c,I:V,H:S,N:M,U:H,B:I,F:R,W:L},Z=i.litHtmlPolyfillSupport;null==Z||Z(P,S),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.3.1");
//# sourceMappingURL=lit-html.js.map


/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LitElement": () => (/* binding */ s),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html)
/* harmony export */ });
/* unused harmony exports UpdatingElement, _$LE */
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;const r=_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});const h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2");
//# sourceMappingURL=lit-element.js.map


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gFloatFetcher": () => (/* binding */ gFloatFetcher)
/* harmony export */ });
/* harmony import */ var _utils_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _bridge_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _bridge_handlers_fetch_inspect_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class InspectJob extends _utils_queue__WEBPACK_IMPORTED_MODULE_0__.Job {
    hashCode() {
        return this.data.link;
    }
}
class FloatFetcher extends _utils_queue__WEBPACK_IMPORTED_MODULE_0__.SimpleCachedQueue {
    constructor() {
        /** allow up to 10 simultaneous float fetch reqs */
        super(10);
    }
    fetch(req) {
        return this.add(new InspectJob(req));
    }
    process(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield (0,_bridge_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(_bridge_handlers_fetch_inspect_info__WEBPACK_IMPORTED_MODULE_2__.FetchInspectInfo, req);
            return resp.iteminfo;
        });
    }
}
const gFloatFetcher = new FloatFetcher();


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericJob": () => (/* binding */ GenericJob),
/* harmony export */   "Job": () => (/* binding */ Job),
/* harmony export */   "SimpleCachedQueue": () => (/* binding */ SimpleCachedQueue)
/* harmony export */ });
/* unused harmony exports Queue, CachedQueue, TTLCachedQueue */
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _deferred_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Job {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
    /**
     * Hash that uniquely identifies this job.
     *
     * If two jobs have the same hashcode, they are considered identical.
     * */
    hashCode() {
        return JSON.stringify(this.data);
    }
}
class GenericJob extends Job {
}
/**
 * Queue to handle processing of "Jobs" with a request that
 * return a response. Ensures a max concurrency of processing
 * simultaneous jobs.
 */
class Queue {
    constructor(maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        this.internalQueue = [];
        this.jobsProcessing = 0;
    }
    /** Amount of jobs currently in the queue */
    size() {
        return this.internalQueue.length;
    }
    has(job) {
        return !!this.internalQueue.find((e) => e.job.hashCode() === job.hashCode());
    }
    getOrThrow(job) {
        if (!this.has(job)) {
            throw new Error(`Job[${job.hashCode()}] is not queued`);
        }
        // Guaranteed
        return this.internalQueue.find((e) => e.job.hashCode() === job.hashCode());
    }
    checkQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.internalQueue.length === 0 || this.jobsProcessing >= this.maxConcurrency) {
                // Don't want to launch more instances
                return;
            }
            this.jobsProcessing += 1;
            const queuedJob = this.internalQueue.shift();
            const req = queuedJob.job.getData();
            try {
                const resp = yield this.process(req);
                queuedJob.deferredPromise.resolve(resp);
            }
            catch (e) {
                queuedJob.deferredPromise.reject(e.toString());
            }
            this.jobsProcessing -= 1;
            this.checkQueue();
        });
    }
    add(job) {
        var _a;
        if (this.has(job)) {
            return (_a = this.getOrThrow(job)) === null || _a === void 0 ? void 0 : _a.deferredPromise.promise();
        }
        const promise = new _deferred_promise__WEBPACK_IMPORTED_MODULE_1__.DeferredPromise();
        this.internalQueue.push({ job, deferredPromise: promise });
        setTimeout(() => this.checkQueue(), 0);
        return promise.promise();
    }
}
/**
 * Like a queue, but has an internal cache for elements already requested
 */
class CachedQueue extends Queue {
    /** Amount of previously requested jobs stored in the cache */
    cacheSize() {
        return this.cache().size();
    }
    getCached(job) {
        if (this.cache().has(job.hashCode())) {
            return this.cache().getOrThrow(job.hashCode());
        }
        else {
            return null;
        }
    }
    setCached(job, resp) {
        this.cache().set(job.hashCode(), resp);
    }
    add(job) {
        if (this.getCached(job)) {
            return Promise.resolve(this.getCached(job));
        }
        return super.add(job).then((resp) => {
            this.setCached(job, resp);
            return resp;
        });
    }
}
class SimpleCachedQueue extends CachedQueue {
    constructor() {
        super(...arguments);
        this.cache_ = new _cache__WEBPACK_IMPORTED_MODULE_0__.Cache();
    }
    cache() {
        return this.cache_;
    }
}
class TTLCachedQueue extends CachedQueue {
    constructor(maxConcurrency, ttlMs) {
        super(maxConcurrency);
        this.ttlMs = ttlMs;
        this.cache_ = new _cache__WEBPACK_IMPORTED_MODULE_0__.TTLCache(ttlMs);
    }
    cache() {
        return this.cache_;
    }
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cache": () => (/* binding */ Cache),
/* harmony export */   "TTLCache": () => (/* binding */ TTLCache)
/* harmony export */ });
/**
 * Simple Generic Cache with stringified keys
 */
class Cache {
    constructor() {
        this.cache_ = {};
    }
    set(key, value) {
        this.cache_[key] = value;
    }
    get(key) {
        return this.cache_[key];
    }
    getOrThrow(key) {
        if (!this.has(key)) {
            throw new Error(`key ${key} does not exist in map [getOrThrow]`);
        }
        return this.cache_[key];
    }
    has(key) {
        return key in this.cache_;
    }
    size() {
        return Object.keys(this.cache_).length;
    }
}
/**
 * Extension of {@link Cache} that allows setting a TTL (time-to-live) on a key
 * such that automatically expires after a specified time.
 *
 * By default, keys will expire with {@link defaultTTLMs}.
 */
class TTLCache {
    constructor(defaultTTLMs) {
        this.defaultTTLMs = defaultTTLMs;
        this.cache_ = {};
    }
    get(key) {
        const value = this.cache_[key];
        if (!value) {
            return;
        }
        // Check if it also respects TTL
        if (value.expiresEpoch < Date.now()) {
            return;
        }
        return value.data;
    }
    has(key) {
        return !!this.get(key);
    }
    getOrThrow(key) {
        if (!this.has(key)) {
            throw new Error(`key ${key} does not exist in map [getOrThrow]`);
        }
        return this.get(key);
    }
    setWithTTL(key, value, ttlMs) {
        this.cache_[key] = {
            data: value,
            expiresEpoch: Date.now() + ttlMs,
        };
    }
    set(key, value) {
        this.setWithTTL(key, value, this.defaultTTLMs);
    }
    size() {
        return Object.keys(this.cache_).length;
    }
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeferredPromise": () => (/* binding */ DeferredPromise)
/* harmony export */ });
/**
 * Similar to a promise, but allows the ability to resolve/reject in a different context
 * */
class DeferredPromise {
    constructor() {
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = resolve;
            this.reject_ = reject;
        });
    }
    resolve(value) {
        this.resolve_(value);
    }
    reject(reason) {
        this.reject_(reason);
    }
    promise() {
        return this.promise_;
    }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchInspectInfo": () => (/* binding */ FetchInspectInfo)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const FetchInspectInfo = new _main__WEBPACK_IMPORTED_MODULE_0__.SimpleHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.FETCH_INSPECT_INFO, (req) => {
    const apiUrl = `https://api.csgofloat.com/?url=${req.link}&minimal=true${req.listPrice ? '&listPrice=' + req.listPrice : ''}`;
    return fetch(apiUrl).then((resp) => {
        return resp.json().then((json) => {
            if (resp.ok) {
                return json;
            }
            else {
                throw Error(json.error);
            }
        });
    });
});


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatFloatWithRank": () => (/* binding */ formatFloatWithRank),
/* harmony export */   "formatSeed": () => (/* binding */ formatSeed),
/* harmony export */   "getLowestRank": () => (/* binding */ getLowestRank),
/* harmony export */   "isSkin": () => (/* binding */ isSkin),
/* harmony export */   "renderClickableRank": () => (/* binding */ renderClickableRank)
/* harmony export */ });
/* unused harmony exports rangeFromWear, parseRank */
/* harmony import */ var _dopplers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);


function rangeFromWear(wear) {
    const wearRanges = [
        [0.0, 0.07],
        [0.07, 0.15],
        [0.15, 0.38],
        [0.38, 0.45],
        [0.45, 1.0],
    ];
    for (const range of wearRanges) {
        if (wear > range[0] && wear <= range[1]) {
            return range;
        }
    }
    return null;
}
function getLowestRank(info) {
    if (!info.low_rank && !info.high_rank) {
        // Item has no rank to return
        return;
    }
    return (info.low_rank || 1001) < (info.high_rank || 1001) ? info.low_rank : info.high_rank;
}
function parseRank(info) {
    const rank = getLowestRank(info);
    if (rank && rank <= 1000) {
        return {
            order: rank === info.low_rank ? OrderType.LOW_RANK : OrderType.HIGH_RANK,
            rank,
        };
    }
}
function formatFloatWithRank(info, precisionDigits = 14) {
    let r = info.floatvalue.toFixed(precisionDigits);
    const ranked = parseRank(info);
    if (ranked) {
        r += ` (#${ranked.rank})`;
    }
    return r;
}
function formatSeed(info) {
    let r = info.paintseed.toString();
    if ((0,_dopplers__WEBPACK_IMPORTED_MODULE_0__.hasDopplerPhase)(info.paintindex)) {
        r += ` (${(0,_dopplers__WEBPACK_IMPORTED_MODULE_0__.getDopplerPhase)(info.paintindex)})`;
    }
    return r;
}
var OrderType;
(function (OrderType) {
    OrderType[OrderType["LOW_RANK"] = 1] = "LOW_RANK";
    OrderType[OrderType["HIGH_RANK"] = -1] = "HIGH_RANK";
})(OrderType || (OrderType = {}));
/**
 * Gets formatted link for floatdb for the specified item type and order
 * @param info item properties dict
 * @param order 1 for low float, -1 for high float ordering
 */
function getFloatDbLink(info, order) {
    function getFloatDbCategory(item) {
        if (item.full_item_name.includes('StatTrak')) {
            return 2;
        }
        else if (item.full_item_name.includes('Souvenir')) {
            return 3;
        }
        else {
            // "Normal"
            return 1;
        }
    }
    return `https://csgofloat.com/db?defIndex=${info.defindex}&paintIndex=${info.paintindex}&order=${order}&category=${getFloatDbCategory(info)}`;
}
function renderClickableRank(info) {
    const parsedRank = parseRank(info);
    if (!parsedRank) {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html ``;
    }
    return lit__WEBPACK_IMPORTED_MODULE_1__.html ` <a
        style="color: #ebebeb; text-decoration: none; cursor: pointer;"
        href="${getFloatDbLink(info, parsedRank.order)}"
        target="_blank"
    >
        (Rank #${parsedRank.rank})
    </a>`;
}
function isSkin(asset) {
    var _a;
    return !!((_a = asset.tags) === null || _a === void 0 ? void 0 : _a.find((a) => a.category === 'Weapon' || (a.category === 'Type' && a.internal_name === 'Type_Hands')));
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDopplerPhase": () => (/* binding */ getDopplerPhase),
/* harmony export */   "hasDopplerPhase": () => (/* binding */ hasDopplerPhase)
/* harmony export */ });
const dopplerPhases = {
    418: 'Phase 1',
    419: 'Phase 2',
    420: 'Phase 3',
    421: 'Phase 4',
    415: 'Ruby',
    416: 'Sapphire',
    417: 'Black Pearl',
    569: 'Phase 1',
    570: 'Phase 2',
    571: 'Phase 3',
    572: 'Phase 4',
    568: 'Emerald',
    618: 'Phase 2',
    619: 'Sapphire',
    617: 'Black Pearl',
    852: 'Phase 1',
    853: 'Phase 2',
    854: 'Phase 3',
    855: 'Phase 4',
    1119: 'Emerald',
    1120: 'Phase 1',
    1121: 'Phase 2',
    1122: 'Phase 3',
    1123: 'Phase 4',
};
function hasDopplerPhase(paintIndex) {
    return paintIndex in dopplerPhases;
}
function getDopplerPhase(paintIndex) {
    return dopplerPhases[paintIndex];
}


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRankColour": () => (/* binding */ getRankColour)
/* harmony export */ });
function getRankColour(rank) {
    switch (rank) {
        case 1:
            return '#c3a508';
        case 2:
        case 3:
            return '#9a9999';
        case 4:
        case 5:
            return '#8a5929';
        default:
            return '';
    }
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observe": () => (/* binding */ Observe)
/* harmony export */ });
function Observe(computeObject, cb, pollRateMs = 50) {
    let prev = computeObject();
    setInterval(() => {
        const now = computeObject();
        if (prev !== now) {
            cb();
        }
        prev = now;
    }, pollRateMs);
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SelectedItemInfo */
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _services_float_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _utils_skin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _utils_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _services_stall_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * Why do we bind to iteminfo0 AND iteminfo1?
 *
 * Steam uses two divs that are interchanged (presumably to make a "fade" animation between them) for each selected
 * item click.
 */
let SelectedItemInfo = class SelectedItemInfo extends _custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    get asset() {
        return g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.selectedItem;
    }
    get inspectLink() {
        var _a, _b, _c, _d;
        if (!this.asset)
            return;
        if (!((_a = this.asset.description) === null || _a === void 0 ? void 0 : _a.actions) || ((_c = (_b = this.asset.description) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c.length) === 0)
            return;
        if (!(g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner)) {
            return;
        }
        return (_d = this.asset.description) === null || _d === void 0 ? void 0 : _d.actions[0].link.replace('%owner_steamid%', g_ActiveInventory.m_owner.strSteamId).replace('%assetid%', this.asset.assetid);
    }
    get stallListing() {
        if (!this.stall) {
            return;
        }
        return (this.stall.listings || []).find((e) => { var _a; return e.item.asset_id === ((_a = this.asset) === null || _a === void 0 ? void 0 : _a.assetid); });
    }
    render() {
        if (this.loading) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html `<div>Loading...</div>`;
        }
        if (!this.itemInfo) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="container">
                <div>Float: ${this.itemInfo.floatvalue.toFixed(14)} ${(0,_utils_skin__WEBPACK_IMPORTED_MODULE_5__.renderClickableRank)(this.itemInfo)}</div>
                <div>Paint Seed: ${(0,_utils_skin__WEBPACK_IMPORTED_MODULE_5__.formatSeed)(this.itemInfo)}</div>
                ${this.renderListOnCSGOFloat()} ${this.renderFloatMarketListing()}
            </div>
        `;
    }
    renderFloatMarketListing() {
        if (!this.stallListing) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="market-btn-container">
                <a class="market-btn" href="https://csgofloat.com/item/${this.stallListing.id}" target="_blank">
                    <img src="https://csgofloat.com/assets/full_logo.png" height="21" style="margin-right: 5px;" />
                    <span>
                        Listed for
                        <b>$${(this.stallListing.price / 100).toFixed(2)}</b>
                    </span>
                </a>
            </div>
        `;
    }
    renderListOnCSGOFloat() {
        var _a;
        if (this.stallListing) {
            // Don't tell them to list it if it's already listed...
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        if (((_a = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner) === null || _a === void 0 ? void 0 : _a.strSteamId) !== g_steamID) {
            // Not the signed-in user, don't show
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="market-btn-container">
                <a class="market-btn" href="https://csgofloat.com" target="_blank">
                    <span>List on </span>
                    <img src="https://csgofloat.com/assets/full_logo.png" height="21" style="margin-left: 5px;" />
                </a>
            </div>
        `;
    }
    processSelectChange() {
        return __awaiter(this, void 0, void 0, function* () {
            // Reset state in-case they swap between skin and non-skin
            this.itemInfo = undefined;
            if (!this.asset)
                return;
            if (!(0,_utils_skin__WEBPACK_IMPORTED_MODULE_5__.isSkin)(this.asset.description))
                return;
            // Commodities won't have inspect links
            if (!this.inspectLink)
                return;
            try {
                this.loading = true;
                this.itemInfo = yield _services_float_fetcher__WEBPACK_IMPORTED_MODULE_4__.gFloatFetcher.fetch({
                    link: this.inspectLink,
                });
            }
            catch (e) {
                console.error(`Failed to fetch float for ${this.asset.assetid}: ${e.toString()}`);
            }
            finally {
                this.loading = false;
            }
        });
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        // For the initial load, in case an item is pre-selected
        this.processSelectChange();
        (0,_utils_observers__WEBPACK_IMPORTED_MODULE_6__.Observe)(() => this.asset, () => {
            this.processSelectChange();
        });
        if ((_a = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner) === null || _a === void 0 ? void 0 : _a.strSteamId) {
            // Ignore errors
            _services_stall_fetcher__WEBPACK_IMPORTED_MODULE_7__.gStallFetcher.fetch({ steam_id64: g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner.strSteamId })
                .then((stall) => (this.stall = stall));
        }
    }
};
SelectedItemInfo.styles = [
    ..._custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement.styles,
    lit__WEBPACK_IMPORTED_MODULE_2__.css `
            .container {
                margin-bottom: 10px;
            }

            .market-btn-container {
                margin: 10px 0 10px 0;
                padding: 5px;
                width: fit-content;
                border: 1px #5a5a5a solid;
                background-color: #383838;
                border-radius: 3px;
            }

            .market-btn {
                font-size: 15px;
                display: flex;
                align-items: center;
                color: #ebebeb;
                text-decoration: none;
            }
        `,
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], SelectedItemInfo.prototype, "itemInfo", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], SelectedItemInfo.prototype, "loading", void 0);
SelectedItemInfo = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.CustomElement)(),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.InjectAfter)('div#iteminfo0_content .item_desc_description div.item_desc_game_info', _injectors__WEBPACK_IMPORTED_MODULE_1__.InjectionMode.CONTINUOUS),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.InjectAfter)('div#iteminfo1_content .item_desc_description div.item_desc_game_info', _injectors__WEBPACK_IMPORTED_MODULE_1__.InjectionMode.CONTINUOUS)
], SelectedItemInfo);



/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gStallFetcher": () => (/* binding */ gStallFetcher)
/* harmony export */ });
/* harmony import */ var _utils_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _bridge_handlers_fetch_stall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _bridge_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class StallFetcher extends _utils_queue__WEBPACK_IMPORTED_MODULE_0__.SimpleCachedQueue {
    fetch(req) {
        return this.add(new _utils_queue__WEBPACK_IMPORTED_MODULE_0__.GenericJob(req));
    }
    process(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0,_bridge_client__WEBPACK_IMPORTED_MODULE_2__.ClientSend)(_bridge_handlers_fetch_stall__WEBPACK_IMPORTED_MODULE_1__.FetchStall, req);
            }
            catch (e) {
                // Stub out to prevent future calls
                return { listings: [] };
            }
        });
    }
}
const gStallFetcher = new StallFetcher(1);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchStall": () => (/* binding */ FetchStall)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const FetchStall = new _main__WEBPACK_IMPORTED_MODULE_0__.SimpleHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.FETCH_STALL, (req) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(`https://csgofloat.com/api/v1/users/${req.steam_id64}/stall`).then((resp) => {
        return resp.json().then((json) => {
            if (resp.ok) {
                return json;
            }
            else {
                throw Error(json.message);
            }
        });
    });
}));


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SelectedItemInfoExpiry */
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _utils_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _services_fallback_inventory_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * Annotates the expiration time of an untradable item if relevant
 */
let SelectedItemInfoExpiry = class SelectedItemInfoExpiry extends _custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement {
    get asset() {
        return g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.selectedItem;
    }
    get ownerId() {
        var _a;
        return (_a = g_ActiveInventory === null || g_ActiveInventory === void 0 ? void 0 : g_ActiveInventory.m_owner) === null || _a === void 0 ? void 0 : _a.strSteamId;
    }
    render() {
        if (!this.expiresAt) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        // @ts-ignore Date.toGMTString() does exist on modern browsers
        const formatted = new Date(this.expiresAt).toGMTString();
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `<div class="container">
            <div class="descriptor">Tradable After ${formatted}</div>
        </div> `;
    }
    processSelectChange() {
        return __awaiter(this, void 0, void 0, function* () {
            // Reset...
            this.expiresAt = undefined;
            if (!this.ownerId || !this.asset) {
                return;
            }
            const resp = yield _services_fallback_inventory_fetcher__WEBPACK_IMPORTED_MODULE_5__.gFallbackInventoryFetcher.fetch({ steamid_64: this.ownerId });
            const assetDetails = resp.rgInventory && resp.rgInventory[this.asset.assetid];
            if (!assetDetails)
                return;
            const description = resp.rgDescriptions && resp.rgDescriptions[`${assetDetails.classid}_${assetDetails.instanceid}`];
            if (!description)
                return;
            if (!description.tradable) {
                this.expiresAt = description.cache_expiration;
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        // For the initial load, in case an item is pre-selected
        this.processSelectChange();
        (0,_utils_observers__WEBPACK_IMPORTED_MODULE_4__.Observe)(() => this.asset, () => {
            this.processSelectChange();
        });
    }
};
SelectedItemInfoExpiry.styles = [
    ..._custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement.styles,
    lit__WEBPACK_IMPORTED_MODULE_2__.css `
            .container {
                margin-top: 16px;
                margin-bottom: 16px;
            }

            .descriptor {
                color: rgb(255, 64, 64);
            }
        `,
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], SelectedItemInfoExpiry.prototype, "expiresAt", void 0);
SelectedItemInfoExpiry = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.CustomElement)(),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.InjectAfter)('div#iteminfo0_content .item_desc_description', _injectors__WEBPACK_IMPORTED_MODULE_1__.InjectionMode.CONTINUOUS),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.InjectAfter)('div#iteminfo1_content .item_desc_description', _injectors__WEBPACK_IMPORTED_MODULE_1__.InjectionMode.CONTINUOUS)
], SelectedItemInfoExpiry);



/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gFallbackInventoryFetcher": () => (/* binding */ gFallbackInventoryFetcher)
/* harmony export */ });
/* harmony import */ var _utils_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Fetches using a deprecated Steam inventory endpoint that has some fields
 * the newer ones don't (ie. trade hold expiry)
 */
class FallbackInventoryFetcher extends _utils_queue__WEBPACK_IMPORTED_MODULE_0__.SimpleCachedQueue {
    constructor() {
        /** allow up to 5 simultaneous req */
        super(5);
    }
    fetch(req) {
        return this.add(new _utils_queue__WEBPACK_IMPORTED_MODULE_0__.GenericJob(req));
    }
    process(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`https://steamcommunity.com/profiles/${req.steamid_64}/inventory/json/730/2?l=english`).then((resp) => __awaiter(this, void 0, void 0, function* () {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw Error(`failed to fetch inventory: ${resp.text().toString()}`);
                }
            }));
        });
    }
}
const gFallbackInventoryFetcher = new FallbackInventoryFetcher();


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_inventory_inventory_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _components_inventory_selected_item_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _components_inventory_selected_item_info_expiry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




(0,_utils__WEBPACK_IMPORTED_MODULE_0__.init)('src/lib/page_scripts/inventory.js', main);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        injectInventoryFallback();
    });
}
function injectInventoryFallback() {
    /*
        Steam inventories are a mess, adds a fallback onto a deprecated inventory endpoint
        We effectively just override some of the inventory URL functions
     */
    let g_InventoryFallbackCSGOFloat = false;
    CInventory.prototype.g_GetInventoryLoadURL = CInventory.prototype.GetInventoryLoadURL;
    CInventory.prototype.g_AddInventoryData = CInventory.prototype.AddInventoryData;
    CInventory.prototype.g_ShowInventoryLoadError = CInventory.prototype.ShowInventoryLoadError;
    CInventory.prototype.GetInventoryLoadURL = function CInventory_GetInventoryLoadURL_CSGOFloat() {
        if (g_InventoryFallbackCSGOFloat) {
            return `https://steamcommunity.com/profiles/${this.m_steamid}/inventory/json/${this.m_appid}/${this.m_contextid}`;
        }
        else {
            /* Fallback to the upstream method */
            return this.g_GetInventoryLoadURL();
        }
    };
    CInventory.prototype.AddInventoryData = function CInventory_AddInventoryData_CSGOFloat(data) {
        if (!g_InventoryFallbackCSGOFloat) {
            /* upstream can handle */
            return this.g_AddInventoryData(data);
        }
        /* Preprocess the data to match the other inventory format */
        if (!data || !data.success) {
            alert('failed to fetch inventory');
            return;
        }
        const assets = Object.values(data.rgInventory)
            .map((asset) => {
            return {
                appid: this.m_appid,
                contextid: this.m_contextid,
                assetid: asset.id,
                classid: asset.classid,
                instanceid: asset.instanceid,
                amount: asset.amount,
                m_pos: asset.pos,
            };
        })
            .sort((a, b) => a.m_pos - b.m_pos);
        const transformedData = {
            assets,
            descriptions: Object.values(data.rgDescriptions),
            total_inventory_count: Math.max(...assets.map((e) => e.m_pos)),
            success: true,
            more_items: 0,
            rwgrsn: -2,
        };
        /* Required to force the page to lazy load images correctly */
        this.m_bNeedsRepagination = true;
        return this.g_AddInventoryData(transformedData);
    };
    CInventory.prototype.ShowInventoryLoadError = function CInventory_ShowInventoryLoadError_CSGOFloat() {
        const prev_$ErrorDisplay = this.m_$ErrorDisplay;
        /* Handle upstream like before */
        this.g_ShowInventoryLoadError();
        if (prev_$ErrorDisplay) {
            /* Element already created, nothing special to do */
            return;
        }
        this.m_$ErrorDisplay.find('.retry_load_btn').after(`
        <div class="btnv6_blue_hoverfade btn_small retry_load_btn_csgofloat" style="margin-left: 10px;">
            <span>Try Again using CSGOFloat</span>
        </div>
    `);
        this.m_$ErrorDisplay.find('.retry_load_btn_csgofloat').click(() => {
            g_InventoryFallbackCSGOFloat = true;
            this.RetryLoad();
        });
    };
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLENBQUM7WUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQztRQUVGLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztJQUVGLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsU0FBUywyQ0FBMkM7UUFDOUYsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRWhELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVoQyxJQUFJLGtCQUFrQixFQUFFO1lBQ3BCLG9EQUFvRDtZQUNwRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7OztLQUl0RCxDQUFDLENBQUM7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDOUQsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhZ2Vfc2NyaXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9leGVjdXRlX3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3dyYXBwZXJzL3ByaXZpbGVnZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvc25pcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9jc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL2ludmVudG9yeS9pbnZlbnRvcnlfaXRlbV9ob2xkZXJfbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL2luamVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL2NvbW1vbi9pdGVtX2hvbGRlcl9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvY3VzdG9tLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZXMvZmxvYXRfZmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3F1ZXVlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy9kZWZlcnJlZF9wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2ZldGNoX2luc3BlY3RfaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3NraW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy9kb3BwbGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3JhbmtzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvb2JzZXJ2ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy9pbnZlbnRvcnkvc2VsZWN0ZWRfaXRlbV9pbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZXMvc3RhbGxfZmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9zdGFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvaW52ZW50b3J5L3NlbGVjdGVkX2l0ZW1faW5mb19leHBpcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zZXJ2aWNlcy9mYWxsYmFja19pbnZlbnRvcnlfZmV0Y2hlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhZ2Vfc2NyaXB0cy9pbnZlbnRvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeGVjdXRlU2NyaXB0T25QYWdlfSBmcm9tICcuLi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9zY3JpcHQnO1xuaW1wb3J0IHtDbGllbnRTZW5kfSBmcm9tICcuLi9icmlkZ2UvY2xpZW50JztcbmltcG9ydCB7aW5QYWdlQ29udGV4dH0gZnJvbSAnLi4vdXRpbHMvc25pcHMnO1xuaW1wb3J0IHtFeGVjdXRlQ3NzT25QYWdlfSBmcm9tICcuLi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9jc3MnO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgcGFnZSBzY3JpcHQsIGV4ZWN1dGluZyBpdCBpbiB0aGUgcGFnZSBjb250ZXh0IGlmIG5lY2Vzc2FyeVxuICpcbiAqIEBwYXJhbSBzY3JpcHRQYXRoIFJlbGF0aXZlIHBhdGggb2YgdGhlIHNjcmlwdCAoYWx3YXlzIGluIC5qcylcbiAqIEBwYXJhbSBpZlBhZ2UgRm4gdG8gcnVuIGlmIHdlIGFyZSBpbiB0aGUgcGFnZSdzIGV4ZWN1dGlvbiBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHNjcmlwdFBhdGg6IHN0cmluZywgaWZQYWdlOiAoKSA9PiBhbnkpIHtcbiAgICAvLyBEb24ndCBhbGxvdyB0aGUgcGFnZSBzY3JpcHQgdG8gcnVuIHRoaXMuXG4gICAgaWYgKGluUGFnZUNvbnRleHQoKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlIFNldCBnbG9iYWwgaWRlbnRpZmllciBmb3Igb3RoZXIgZXh0ZW5zaW9ucyB0byB1c2VcbiAgICAgICAgd2luZG93LmNzZ29mbG9hdCA9IHRydWU7XG5cbiAgICAgICAgaWZQYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbG9iYWwgc3R5bGVzXG4gICAgQ2xpZW50U2VuZChFeGVjdXRlQ3NzT25QYWdlLCB7XG4gICAgICAgIHBhdGg6ICdzcmMvZ2xvYmFsLmNzcycsXG4gICAgfSk7XG5cbiAgICBDbGllbnRTZW5kKEV4ZWN1dGVTY3JpcHRPblBhZ2UsIHtcbiAgICAgICAgcGF0aDogc2NyaXB0UGF0aCxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWMgQ1NHT0Zsb2F0IE1hcmtldCBDaGVja2VyICh2JHtjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259KSBieSBTdGVwNzc1MCBgLFxuICAgICAgICAnYmFja2dyb3VuZDogIzAwNDU5NDsgY29sb3I6ICNmZmY7J1xuICAgICk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgICclYyBDaGFuZ2Vsb2cgY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9jc2dvZmxvYXQvZXh0ZW5zaW9uICcsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAjMDA0NTk0OyBjb2xvcjogI2ZmZjsnXG4gICAgKTtcbn1cbiIsImltcG9ydCB7RW1wdHlSZXNwb25zZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1ByaXZpbGVnZWRIYW5kbGVyfSBmcm9tICcuLi93cmFwcGVycy9wcml2aWxlZ2VkJztcclxuXHJcbmludGVyZmFjZSBFeGVjdXRlU2NyaXB0UmVxdWVzdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeGVjdXRlU2NyaXB0T25QYWdlID0gbmV3IFByaXZpbGVnZWRIYW5kbGVyKFxyXG4gICAgbmV3IEVtcHR5UmVzcG9uc2VIYW5kbGVyPEV4ZWN1dGVTY3JpcHRSZXF1ZXN0PihSZXF1ZXN0VHlwZS5FWEVDVVRFX1NDUklQVF9PTl9QQUdFLCBhc3luYyAocmVxLCBzZW5kZXIpID0+IHtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIGluamVjdCB0aGUgZXh0ZW5zaW9uIElEIGR5bmFtaWNhbGx5IHNvIHRoZSBjbGllbnQga25vd3Mgd2hvIHRvXHJcbiAgICAgICAgLy8gY29tbXVuaWNhdGUgd2l0aC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIE9uIEZpcmVmb3gsIGV4dGVuc2lvbiBJRHMgYXJlIHJhbmRvbSwgc28gdGhpcyBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHNlbmRlci50YWI/LmlkIGFzIG51bWJlcn0sXHJcbiAgICAgICAgICAgIHdvcmxkOiAnTUFJTicsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtjaHJvbWUucnVudGltZS5pZCwgY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdzcmMvbW9kZWxfZnJhbWUuaHRtbCcpXSxcclxuICAgICAgICAgICAgZnVuYzogZnVuY3Rpb24gRXh0ZW5zaW9uSWQoZXh0ZW5zaW9uSWQsIG1vZGVsRnJhbWVVcmwpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5DU0dPRkxPQVRfRVhURU5TSU9OX0lEID0gZXh0ZW5zaW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX01PREVMX0ZSQU1FX1VSTCA9IG1vZGVsRnJhbWVVcmw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICBmaWxlczogW3JlcS5wYXRoXSxcclxuICAgICAgICAgICAgd29ybGQ6ICdNQUlOJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbik7XHJcbiIsImltcG9ydCB7UmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IE1lc3NhZ2VTZW5kZXIgPSBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVIYW5kbGVyPFJlcSwgUmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogUmVxdWVzdFR5cGUsIHByaXZhdGUgaGFuZGxlcjogKHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKSA9PiBQcm9taXNlPFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIocmVxdWVzdCwgc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbXB0eSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtcHR5UmVxdWVzdEhhbmRsZXI8UmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxFbXB0eSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAoc2VuZGVyOiBNZXNzYWdlU2VuZGVyKSA9PiBQcm9taXNlPFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBFbXB0eSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlSZXNwb25zZUhhbmRsZXI8UmVxPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgdm9pZD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8dm9pZD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIFJlcXVlc3RUeXBlIHtcclxuICAgIEVYRUNVVEVfU0NSSVBUX09OX1BBR0UsXHJcbiAgICBFWEVDVVRFX0NTU19PTl9QQUdFLFxyXG4gICAgRkVUQ0hfSU5TUEVDVF9JTkZPLFxyXG4gICAgRkVUQ0hfU1RBTEwsXHJcbiAgICBTVE9SQUdFX0dFVCxcclxuICAgIFNUT1JBR0VfU0VULFxyXG4gICAgU1RPUkFHRV9SRU1PVkUsXHJcbiAgICBDU01PTkVZX1BSSUNFLFxyXG4gICAgRkVUQ0hfUEVORElOR19UUkFERVMsXHJcbiAgICBGRVRDSF9TS0lOX01PREVMLFxyXG59XHJcbiIsImltcG9ydCB7UmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi4vaGFuZGxlcnMvdHlwZXMnO1xyXG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcblxyXG4vKipcclxuICogUmVzdHJpY3RzIGEgZ2l2ZW4gaGFuZGxlciBzdWNoIHRoYXQgaXQgY2FuIG9ubHkgcnVuIGlmIHRoZSBzZW5kZXIgaXNcclxuICogdmVyaWZpZWQgdG8gYmUgZnJvbSB0aGUgZXh0ZW5zaW9uJ3Mgb3JpZ2luIChpZS4gY29udGVudCBzY3JpcHQpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJpdmlsZWdlZEhhbmRsZXI8UmVxLCBSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuZ2V0VHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+IHtcclxuICAgICAgICBpZiAoc2VuZGVyLmlkICE9PSBjaHJvbWUucnVudGltZS5pZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gYWNjZXNzIHJlc3RyaWN0ZWQgbWV0aG9kIG91dHNpZGUgb2Ygc2VjdXJlIGNvbnRleHQgKGllLiBjb250ZW50IHNjcmlwdCknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlUmVxdWVzdChyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SW50ZXJuYWxSZXF1ZXN0QnVuZGxlLCBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlLCBSZXF1ZXN0SGFuZGxlciwgVmVyc2lvbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDbGllbnRTZW5kPFJlcSwgUmVzcD4oaGFuZGxlcjogUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPiwgYXJnczogUmVxKTogUHJvbWlzZTxSZXNwPiB7XG4gICAgY29uc3QgYnVuZGxlOiBJbnRlcm5hbFJlcXVlc3RCdW5kbGUgPSB7XG4gICAgICAgIHZlcnNpb246IFZlcnNpb24uVjEsXG4gICAgICAgIHJlcXVlc3RfdHlwZTogaGFuZGxlci5nZXRUeXBlKCksXG4gICAgICAgIHJlcXVlc3Q6IGFyZ3MsXG4gICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMCksXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgd2luZG93LkNTR09GTE9BVF9FWFRFTlNJT05fSUQgfHwgY2hyb21lLnJ1bnRpbWUuaWQsXG4gICAgICAgICAgICBidW5kbGUsXG4gICAgICAgICAgICAocmVzcDogSW50ZXJuYWxSZXNwb25zZUJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwPy5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3AucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwPy5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IE1lc3NhZ2VTZW5kZXIgPSBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL2hhbmRsZXJzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPiB7XHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPjtcclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZlcnNpb24ge1xyXG4gICAgVjEgPSAnQ1NHT0ZMT0FUX1YxJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbFJlcXVlc3RCdW5kbGUge1xyXG4gICAgdmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICAgIHJlcXVlc3RfdHlwZTogUmVxdWVzdFR5cGU7XHJcblxyXG4gICAgLy8gSW5wdXQgcmVxdWVzdFxyXG4gICAgcmVxdWVzdDogYW55O1xyXG5cclxuICAgIC8vIFJhbmRvbSBJRCB0byBpZGVudGlmeSB0aGUgcmVxdWVzdFxyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlIHtcclxuICAgIHJlcXVlc3RfdHlwZTogUmVxdWVzdFR5cGU7XHJcblxyXG4gICAgLy8gUmVzcG9uc2VcclxuICAgIHJlc3BvbnNlOiBhbnk7XHJcblxyXG4gICAgZXJyb3I6IHN0cmluZztcclxuXHJcbiAgICAvLyBSYW5kb20gSUQgdG8gaWRlbnRpZnkgdGhlIHJlcXVlc3RcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluUGFnZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuICFjaHJvbWUuZXh0ZW5zaW9uO1xufVxuIiwiaW1wb3J0IHtFbXB0eVJlc3BvbnNlSGFuZGxlcn0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7UHJpdmlsZWdlZEhhbmRsZXJ9IGZyb20gJy4uL3dyYXBwZXJzL3ByaXZpbGVnZWQnO1xyXG5cclxuaW50ZXJmYWNlIEV4ZWN1dGVDc3NSZXF1ZXN0IHtcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVDc3NPblBhZ2UgPSBuZXcgUHJpdmlsZWdlZEhhbmRsZXIoXHJcbiAgICBuZXcgRW1wdHlSZXNwb25zZUhhbmRsZXI8RXhlY3V0ZUNzc1JlcXVlc3Q+KFJlcXVlc3RUeXBlLkVYRUNVVEVfQ1NTX09OX1BBR0UsIGFzeW5jIChyZXEsIHNlbmRlcikgPT4ge1xyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuaW5zZXJ0Q1NTKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHNlbmRlci50YWI/LmlkIGFzIG51bWJlcn0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbcmVxLnBhdGhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuKTtcclxuIiwiaW1wb3J0IHtDdXN0b21FbGVtZW50LCBJbmplY3RBcHBlbmQsIEluamVjdGlvbk1vZGV9IGZyb20gJy4uL2luamVjdG9ycyc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuLi8uLi90eXBlcy9zdGVhbSc7XG5pbXBvcnQge0l0ZW1Ib2xkZXJNZXRhZGF0YX0gZnJvbSAnLi4vY29tbW9uL2l0ZW1faG9sZGVyX21ldGFkYXRhJztcblxuQEN1c3RvbUVsZW1lbnQoKVxuQEluamVjdEFwcGVuZChcbiAgICAnI2FjdGl2ZV9pbnZlbnRvcnlfcGFnZSBkaXYuaW52ZW50b3J5X3BhZ2U6bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lXCJdKSAuaXRlbUhvbGRlciBkaXYuYXBwNzMwJyxcbiAgICBJbmplY3Rpb25Nb2RlLkNPTlRJTlVPVVNcbilcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlJdGVtSG9sZGVyTWV0YWRhdGEgZXh0ZW5kcyBJdGVtSG9sZGVyTWV0YWRhdGEge1xuICAgIGdldCBhc3NldCgpOiBBc3NldCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5hc3NldElkKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGdfQWN0aXZlSW52ZW50b3J5Py5tX3JnQXNzZXRzW3RoaXMuYXNzZXRJZF0/LmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBvd25lclN0ZWFtSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGdfQWN0aXZlSW52ZW50b3J5Py5tX293bmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ19BY3RpdmVJbnZlbnRvcnk/Lm1fb3duZXI/LnN0clN0ZWFtSWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZ19BY3RpdmVJbnZlbnRvcnk/Lm93bmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ19BY3RpdmVJbnZlbnRvcnk/Lm93bmVyPy5zdHJTdGVhbUlkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge0Zsb2F0RWxlbWVudH0gZnJvbSAnLi9jdXN0b20nO1xuaW1wb3J0IHtpblBhZ2VDb250ZXh0fSBmcm9tICcuLi91dGlscy9zbmlwcyc7XG5cbmV4cG9ydCBlbnVtIEluamVjdGlvbk1vZGUge1xuICAgIC8vIEluamVjdHMgb25jZSBhdCBwYWdlIGxvYWQgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgIE9OQ0UsXG4gICAgLy8gQ29udGludWFsbHkgaW5qZWN0cyB3aGVuZXZlciBuZXcgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGVcbiAgICAvLyBzZWxlY3RvciBleGlzdCB0aGF0IGhhdmVuJ3QgYmVlbiBpbmplY3RlZCBpbnRvIHlldFxuICAgIC8vXG4gICAgLy8gU2hvdWxkIGJlIHVzZSBmb3IgXCJkeW5hbWljXCIgZWxlbWVudHNcbiAgICBDT05USU5VT1VTLFxufVxuXG5lbnVtIEluamVjdGlvblR5cGUge1xuICAgIEFwcGVuZCxcbiAgICBCZWZvcmUsXG4gICAgQWZ0ZXIsXG59XG5cbmludGVyZmFjZSBJbmplY3Rpb25Db25maWcge1xuICAgIGV4aXN0czogKGN0eDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgICBvcDogKGN0eDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgdGFyZ2V0OiB0eXBlb2YgRmxvYXRFbGVtZW50KSA9PiB2b2lkO1xufVxuXG5jb25zdCBJbmplY3Rpb25Db25maWdzOiB7W2tleSBpbiBJbmplY3Rpb25UeXBlXTogSW5qZWN0aW9uQ29uZmlnfSA9IHtcbiAgICBbSW5qZWN0aW9uVHlwZS5BcHBlbmRdOiB7XG4gICAgICAgIGV4aXN0czogKGN0eCwgc2VsZWN0b3IpID0+ICEhY3R4LmNoaWxkcmVuKHNlbGVjdG9yKS5sZW5ndGgsXG4gICAgICAgIG9wOiAoY3R4LCB0YXJnZXQpID0+IGN0eC5hcHBlbmQodGFyZ2V0LmVsZW0oKSksXG4gICAgfSxcbiAgICBbSW5qZWN0aW9uVHlwZS5CZWZvcmVdOiB7XG4gICAgICAgIGV4aXN0czogKGN0eCwgc2VsZWN0b3IpID0+ICEhY3R4LnBhcmVudCgpLmNoaWxkcmVuKHNlbGVjdG9yKS5sZW5ndGgsXG4gICAgICAgIG9wOiAoY3R4LCB0YXJnZXQpID0+IGN0eC5iZWZvcmUodGFyZ2V0LmVsZW0oKSksXG4gICAgfSxcbiAgICBbSW5qZWN0aW9uVHlwZS5BZnRlcl06IHtcbiAgICAgICAgZXhpc3RzOiAoY3R4LCBzZWxlY3RvcikgPT4gISFjdHgucGFyZW50KCkuY2hpbGRyZW4oc2VsZWN0b3IpLmxlbmd0aCxcbiAgICAgICAgb3A6IChjdHgsIHRhcmdldCkgPT4gY3R4LmFmdGVyKHRhcmdldC5lbGVtKCkpLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tRWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiB0eXBlb2YgRmxvYXRFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKCFpblBhZ2VDb250ZXh0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdXN0b21FbGVtZW50KHRhcmdldC50YWcoKSkodGFyZ2V0KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBJbmplY3Qoc2VsZWN0b3I6IHN0cmluZywgbW9kZTogSW5qZWN0aW9uTW9kZSwgdHlwZTogSW5qZWN0aW9uVHlwZSk6IGFueSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IHR5cGVvZiBGbG9hdEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgICBpZiAoIWluUGFnZUNvbnRleHQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSBJbmplY3Rpb25Nb2RlLk9OQ0U6XG4gICAgICAgICAgICAgICAgJEooc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBJbmplY3Rpb25Db25maWdzW3R5cGVdLm9wKCRKKHRoaXMpLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbmplY3Rpb25Nb2RlLkNPTlRJTlVPVVM6XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkSihzZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBhZGQgdGhlIGl0ZW0gYWdhaW4gaWYgd2UgYWxyZWFkeSBoYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoSW5qZWN0aW9uQ29uZmlnc1t0eXBlXS5leGlzdHMoJEoodGhpcyksIHRhcmdldC50YWcoKSkpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgSW5qZWN0aW9uQ29uZmlnc1t0eXBlXS5vcCgkSih0aGlzKSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmplY3RBcHBlbmQoc2VsZWN0b3I6IHN0cmluZywgbW9kZTogSW5qZWN0aW9uTW9kZSA9IEluamVjdGlvbk1vZGUuT05DRSk6IGFueSB7XG4gICAgcmV0dXJuIEluamVjdChzZWxlY3RvciwgbW9kZSwgSW5qZWN0aW9uVHlwZS5BcHBlbmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5qZWN0QmVmb3JlKHNlbGVjdG9yOiBzdHJpbmcsIG1vZGU6IEluamVjdGlvbk1vZGUgPSBJbmplY3Rpb25Nb2RlLk9OQ0UpOiBhbnkge1xuICAgIHJldHVybiBJbmplY3Qoc2VsZWN0b3IsIG1vZGUsIEluamVjdGlvblR5cGUuQmVmb3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEluamVjdEFmdGVyKHNlbGVjdG9yOiBzdHJpbmcsIG1vZGU6IEluamVjdGlvbk1vZGUgPSBJbmplY3Rpb25Nb2RlLk9OQ0UpOiBhbnkge1xuICAgIHJldHVybiBJbmplY3Qoc2VsZWN0b3IsIG1vZGUsIEluamVjdGlvblR5cGUuQWZ0ZXIpO1xufVxuIiwiZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBlPWU9Pm49PlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KChlLG4pPT4oY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsbiksbikpKGUsbik6KChlLG4pPT57Y29uc3R7a2luZDp0LGVsZW1lbnRzOnN9PW47cmV0dXJue2tpbmQ6dCxlbGVtZW50czpzLGZpbmlzaGVyKG4pe2N1c3RvbUVsZW1lbnRzLmRlZmluZShlLG4pfX19KShlLG4pO2V4cG9ydHtlIGFzIGN1c3RvbUVsZW1lbnR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGk9KGksZSk9PlwibWV0aG9kXCI9PT1lLmtpbmQmJmUuZGVzY3JpcHRvciYmIShcInZhbHVlXCJpbiBlLmRlc2NyaXB0b3IpP3suLi5lLGZpbmlzaGVyKG4pe24uY3JlYXRlUHJvcGVydHkoZS5rZXksaSl9fTp7a2luZDpcImZpZWxkXCIsa2V5OlN5bWJvbCgpLHBsYWNlbWVudDpcIm93blwiLGRlc2NyaXB0b3I6e30sb3JpZ2luYWxLZXk6ZS5rZXksaW5pdGlhbGl6ZXIoKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluaXRpYWxpemVyJiYodGhpc1tlLmtleV09ZS5pbml0aWFsaXplci5jYWxsKHRoaXMpKX0sZmluaXNoZXIobil7bi5jcmVhdGVQcm9wZXJ0eShlLmtleSxpKX19O2Z1bmN0aW9uIGUoZSl7cmV0dXJuKG4sdCk9PnZvaWQgMCE9PXQ/KChpLGUsbik9PntlLmNvbnN0cnVjdG9yLmNyZWF0ZVByb3BlcnR5KG4saSl9KShlLG4sdCk6aShlLG4pfWV4cG9ydHtlIGFzIHByb3BlcnR5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BlcnR5LmpzLm1hcFxuIiwiaW1wb3J0e3Byb3BlcnR5IGFzIHJ9ZnJvbVwiLi9wcm9wZXJ0eS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gdCh0KXtyZXR1cm4gcih7Li4udCxzdGF0ZTohMH0pfWV4cG9ydHt0IGFzIHN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgcn1mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHIoe2ZpbmlzaGVyOihyLHQpPT57T2JqZWN0LmFzc2lnbihyLnByb3RvdHlwZVt0XSxlKX19KX1leHBvcnR7ZSBhcyBldmVudE9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtb3B0aW9ucy5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgZT0oZSx0LG8pPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyxlKX0sdD0oZSx0KT0+KHtraW5kOlwibWV0aG9kXCIscGxhY2VtZW50OlwicHJvdG90eXBlXCIsa2V5OnQua2V5LGRlc2NyaXB0b3I6ZX0pLG89KHtmaW5pc2hlcjplLGRlc2NyaXB0b3I6dH0pPT4obyxuKT0+e3ZhciByO2lmKHZvaWQgMD09PW4pe2NvbnN0IG49bnVsbCE9PShyPW8ub3JpZ2luYWxLZXkpJiZ2b2lkIDAhPT1yP3I6by5rZXksaT1udWxsIT10P3traW5kOlwibWV0aG9kXCIscGxhY2VtZW50OlwicHJvdG90eXBlXCIsa2V5Om4sZGVzY3JpcHRvcjp0KG8ua2V5KX06ey4uLm8sa2V5Om59O3JldHVybiBudWxsIT1lJiYoaS5maW5pc2hlcj1mdW5jdGlvbih0KXtlKHQsbil9KSxpfXtjb25zdCByPW8uY29uc3RydWN0b3I7dm9pZCAwIT09dCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sbix0KG4pKSxudWxsPT1lfHxlKHIsbil9fTtleHBvcnR7byBhcyBkZWNvcmF0ZVByb3BlcnR5LGUgYXMgbGVnYWN5UHJvdG90eXBlTWV0aG9kLHQgYXMgc3RhbmRhcmRQcm90b3R5cGVNZXRob2R9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXBcbiIsImltcG9ydHtkZWNvcmF0ZVByb3BlcnR5IGFzIG99ZnJvbVwiLi9iYXNlLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBpKGksbil7cmV0dXJuIG8oe2Rlc2NyaXB0b3I6bz0+e2NvbnN0IHQ9e2dldCgpe3ZhciBvLG47cmV0dXJuIG51bGwhPT0obj1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKGkpKSYmdm9pZCAwIT09bj9uOm51bGx9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfTtpZihuKXtjb25zdCBuPVwic3ltYm9sXCI9PXR5cGVvZiBvP1N5bWJvbCgpOlwiX19cIitvO3QuZ2V0PWZ1bmN0aW9uKCl7dmFyIG8sdDtyZXR1cm4gdm9pZCAwPT09dGhpc1tuXSYmKHRoaXNbbl09bnVsbCE9PSh0PW51bGw9PT0obz10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnF1ZXJ5U2VsZWN0b3IoaSkpJiZ2b2lkIDAhPT10P3Q6bnVsbCksdGhpc1tuXX19cmV0dXJuIHR9fSl9ZXhwb3J0e2kgYXMgcXVlcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnkuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZGVzY3JpcHRvcjpyPT4oe2dldCgpe3ZhciByLG87cmV0dXJuIG51bGwhPT0obz1udWxsPT09KHI9dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09cj92b2lkIDA6ci5xdWVyeVNlbGVjdG9yQWxsKGUpKSYmdm9pZCAwIT09bz9vOltdfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e2UgYXMgcXVlcnlBbGx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYWxsLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgcn1mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZGVzY3JpcHRvcjpyPT4oe2FzeW5jIGdldCgpe3ZhciByO3JldHVybiBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlLG51bGw9PT0ocj10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnF1ZXJ5U2VsZWN0b3IoZSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7ZSBhcyBxdWVyeUFzeW5jfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzeW5jLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgb31mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBuO2NvbnN0IGU9bnVsbCE9KG51bGw9PT0obj13aW5kb3cuSFRNTFNsb3RFbGVtZW50KXx8dm9pZCAwPT09bj92b2lkIDA6bi5wcm90b3R5cGUuYXNzaWduZWRFbGVtZW50cyk/KG8sbik9Pm8uYXNzaWduZWRFbGVtZW50cyhuKToobyxuKT0+by5hc3NpZ25lZE5vZGVzKG4pLmZpbHRlcigobz0+by5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSk7ZnVuY3Rpb24gbChuKXtjb25zdHtzbG90Omwsc2VsZWN0b3I6dH09bnVsbCE9bj9uOnt9O3JldHVybiBvKHtkZXNjcmlwdG9yOm89Pih7Z2V0KCl7dmFyIG87Y29uc3Qgcj1cInNsb3RcIisobD9gW25hbWU9JHtsfV1gOlwiOm5vdChbbmFtZV0pXCIpLGk9bnVsbD09PShvPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucXVlcnlTZWxlY3RvcihyKSxzPW51bGwhPWk/ZShpLG4pOltdO3JldHVybiB0P3MuZmlsdGVyKChvPT5vLm1hdGNoZXModCkpKTpzfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e2wgYXMgcXVlcnlBc3NpZ25lZEVsZW1lbnRzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgZX1mcm9tXCIuL2Jhc2UuanNcIjtpbXBvcnR7cXVlcnlBc3NpZ25lZEVsZW1lbnRzIGFzIHR9ZnJvbVwiLi9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gbyhvLG4scil7bGV0IGwscz1vO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBvPyhzPW8uc2xvdCxsPW8pOmw9e2ZsYXR0ZW46bn0scj90KHtzbG90OnMsZmxhdHRlbjpuLHNlbGVjdG9yOnJ9KTplKHtkZXNjcmlwdG9yOmU9Pih7Z2V0KCl7dmFyIGUsdDtjb25zdCBvPVwic2xvdFwiKyhzP2BbbmFtZT0ke3N9XWA6XCI6bm90KFtuYW1lXSlcIiksbj1udWxsPT09KGU9dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5xdWVyeVNlbGVjdG9yKG8pO3JldHVybiBudWxsIT09KHQ9bnVsbD09bj92b2lkIDA6bi5hc3NpZ25lZE5vZGVzKGwpKSYmdm9pZCAwIT09dD90OltdfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e28gYXMgcXVlcnlBc3NpZ25lZE5vZGVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzLm1hcFxuIiwiaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4uL2N1c3RvbSc7XHJcbmltcG9ydCB7aHRtbCwgY3NzLCBIVE1MVGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7c3RhdGV9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHtBc3NldH0gZnJvbSAnLi4vLi4vdHlwZXMvc3RlYW0nO1xyXG5pbXBvcnQge2dGbG9hdEZldGNoZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zsb2F0X2ZldGNoZXInO1xyXG5pbXBvcnQge0l0ZW1JbmZvfSBmcm9tICcuLi8uLi9icmlkZ2UvaGFuZGxlcnMvZmV0Y2hfaW5zcGVjdF9pbmZvJztcclxuaW1wb3J0IHtmb3JtYXRGbG9hdFdpdGhSYW5rLCBmb3JtYXRTZWVkLCBnZXRMb3dlc3RSYW5rfSBmcm9tICcuLi8uLi91dGlscy9za2luJztcclxuaW1wb3J0IHtpc1NraW59IGZyb20gJy4uLy4uL3V0aWxzL3NraW4nO1xyXG5pbXBvcnQge2dldFJhbmtDb2xvdXJ9IGZyb20gJy4uLy4uL3V0aWxzL3JhbmtzJztcclxuaW1wb3J0IHtPYnNlcnZlfSBmcm9tICcuLi8uLi91dGlscy9vYnNlcnZlcnMnO1xyXG5cclxuLy8gR2VuZXJpYyBhbm5vdGF0b3Igb2YgaXRlbSBob2xkZXIgbWV0YWRhdGEgKGZsb2F0LCBzZWVkLCBldGMuLi4pXHJcbi8vIE11c3QgYmUgZXh0ZW5kZWQgdG8gdXNlIGFzIGEgY29tcG9uZW50XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJdGVtSG9sZGVyTWV0YWRhdGEgZXh0ZW5kcyBGbG9hdEVsZW1lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IFtcclxuICAgICAgICAuLi5GbG9hdEVsZW1lbnQuc3R5bGVzLFxyXG4gICAgICAgIGNzc2BcclxuICAgICAgICAgICAgLmZsb2F0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlZWQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgIF07XHJcblxyXG4gICAgQHN0YXRlKClcclxuICAgIHByaXZhdGUgaXRlbUluZm86IEl0ZW1JbmZvIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGdldCBhc3NldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuICRKKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2lkJyk/LnNwbGl0KCdfJylbMl07XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IGFzc2V0KCk6IEFzc2V0IHwgdW5kZWZpbmVkO1xyXG4gICAgYWJzdHJhY3QgZ2V0IG93bmVyU3RlYW1JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgZ2V0IGluc3BlY3RMaW5rKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hc3NldD8uYWN0aW9ucyB8fCB0aGlzLmFzc2V0Py5hY3Rpb25zPy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm93bmVyU3RlYW1JZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NldFxyXG4gICAgICAgICAgICA/LmFjdGlvbnMhWzBdLmxpbmsucmVwbGFjZSgnJW93bmVyX3N0ZWFtaWQlJywgdGhpcy5vd25lclN0ZWFtSWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCclYXNzZXRpZCUnLCB0aGlzLmFzc2V0SWQhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IEhUTUxUZW1wbGF0ZVJlc3VsdCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1JbmZvKSByZXR1cm4gaHRtbGBgO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0XCI+JHtmb3JtYXRGbG9hdFdpdGhSYW5rKHRoaXMuaXRlbUluZm8sIDYpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VlZFwiPiR7Zm9ybWF0U2VlZCh0aGlzLml0ZW1JbmZvKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluc3BlY3RMaW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgYXNzZXQgZXhpc3RzXHJcbiAgICAgICAgICAgIE9ic2VydmUoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmluc3BlY3RMaW5rLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3BlY3RMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghaXNTa2luKHRoaXMuYXNzZXQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIENvbW1vZGl0aWVzIHdvbid0IGhhdmUgaW5zcGVjdCBsaW5rc1xyXG4gICAgICAgIGlmICghdGhpcy5pbnNwZWN0TGluaykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmZvID0gYXdhaXQgZ0Zsb2F0RmV0Y2hlci5mZXRjaCh7XHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0aGlzLmluc3BlY3RMaW5rLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGZsb2F0IGZvciAke3RoaXMuYXNzZXRJZH06ICR7ZS50b1N0cmluZygpfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZVJhbmtTaGluZSh0aGlzLml0ZW1JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5ub3RhdGVSYW5rU2hpbmUoaW5mbzogSXRlbUluZm8pIHtcclxuICAgICAgICBjb25zdCByYW5rID0gZ2V0TG93ZXN0UmFuayhpbmZvKTtcclxuICAgICAgICBpZiAoIXJhbmsgfHwgcmFuayA+IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWFrZSB0aGUgaW52ZW50b3J5IGJveCBjb2xvdXJlZCA7KVxyXG4gICAgICAgICRKKHRoaXMpLnBhcmVudCgpLmNzcygnY29sb3InLCAnYmxhY2snKTtcclxuICAgICAgICAkSih0aGlzKS5wYXJlbnQoKS5maW5kKCdpbWcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBnZXRSYW5rQ29sb3VyKHJhbmspKTtcclxuICAgICAgICAkSih0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnY3Nnb2Zsb2F0LXNoaW5lJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjc3MsIExpdEVsZW1lbnR9IGZyb20gJ2xpdCc7XG5cbmZ1bmN0aW9uIGNhbWVsVG9EYXNoQ2FzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgICAuam9pbignLScpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBMaXRFbGVtZW50IHdyYXBwZXIgd2l0aCBhIHByZS1kZXRlcm1pbmVkIHRhZ1xuZXhwb3J0IGNsYXNzIEZsb2F0RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgICAgIGNzc2BcbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyOTM5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ViZWJlYjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9J3RleHQnXSxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdudW1iZXInXSxcbiAgICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5MDkwOTA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjb2xvciddIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICBdO1xuXG4gICAgc3RhdGljIHRhZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYGNzZ29mbG9hdC0ke2NhbWVsVG9EYXNoQ2FzZSh0aGlzLm5hbWUpfWA7XG4gICAgfVxuXG4gICAgc3RhdGljIGVsZW0oKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydHtnZXRDb21wYXRpYmxlU3R5bGUgYXMgdCxhZG9wdFN0eWxlcyBhcyBpfWZyb21cIi4vY3NzLXRhZy5qc1wiO2V4cG9ydHtDU1NSZXN1bHQsYWRvcHRTdHlsZXMsY3NzLGdldENvbXBhdGlibGVTdHlsZSxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIHM7Y29uc3QgZT13aW5kb3cscj1lLnRydXN0ZWRUeXBlcyxoPXI/ci5lbXB0eVNjcmlwdDpcIlwiLG89ZS5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsbj17dG9BdHRyaWJ1dGUodCxpKXtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnQ9dD9oOm51bGw7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0PW51bGw9PXQ/dDpKU09OLnN0cmluZ2lmeSh0KX1yZXR1cm4gdH0sZnJvbUF0dHJpYnV0ZSh0LGkpe2xldCBzPXQ7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjpzPW51bGwhPT10O2JyZWFrO2Nhc2UgTnVtYmVyOnM9bnVsbD09PXQ/bnVsbDpOdW1iZXIodCk7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0cnl7cz1KU09OLnBhcnNlKHQpfWNhdGNoKHQpe3M9bnVsbH19cmV0dXJuIHN9fSxhPSh0LGkpPT5pIT09dCYmKGk9PWl8fHQ9PXQpLGw9e2F0dHJpYnV0ZTohMCx0eXBlOlN0cmluZyxjb252ZXJ0ZXI6bixyZWZsZWN0OiExLGhhc0NoYW5nZWQ6YX07Y2xhc3MgZCBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl8kRWk9bmV3IE1hcCx0aGlzLmlzVXBkYXRlUGVuZGluZz0hMSx0aGlzLmhhc1VwZGF0ZWQ9ITEsdGhpcy5fJEVsPW51bGwsdGhpcy51KCl9c3RhdGljIGFkZEluaXRpYWxpemVyKHQpe3ZhciBpO251bGwhPT0oaT10aGlzLmgpJiZ2b2lkIDAhPT1pfHwodGhpcy5oPVtdKSx0aGlzLmgucHVzaCh0KX1zdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3RoaXMuZmluYWxpemUoKTtjb25zdCB0PVtdO3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKChpLHMpPT57Y29uc3QgZT10aGlzLl8kRXAocyxpKTt2b2lkIDAhPT1lJiYodGhpcy5fJEV2LnNldChlLHMpLHQucHVzaChlKSl9KSksdH1zdGF0aWMgY3JlYXRlUHJvcGVydHkodCxpPWwpe2lmKGkuc3RhdGUmJihpLmF0dHJpYnV0ZT0hMSksdGhpcy5maW5hbGl6ZSgpLHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHQsaSksIWkubm9BY2Nlc3NvciYmIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpKXtjb25zdCBzPVwic3ltYm9sXCI9PXR5cGVvZiB0P1N5bWJvbCgpOlwiX19cIit0LGU9dGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxzLGkpO3ZvaWQgMCE9PWUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSx0LGUpfX1zdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsaSxzKXtyZXR1cm57Z2V0KCl7cmV0dXJuIHRoaXNbaV19LHNldChlKXtjb25zdCByPXRoaXNbdF07dGhpc1tpXT1lLHRoaXMucmVxdWVzdFVwZGF0ZSh0LHIscyl9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfX1zdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKHQpe3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldCh0KXx8bH1zdGF0aWMgZmluYWxpemUoKXtpZih0aGlzLmhhc093blByb3BlcnR5KFwiZmluYWxpemVkXCIpKXJldHVybiExO3RoaXMuZmluYWxpemVkPSEwO2NvbnN0IHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO2lmKHQuZmluYWxpemUoKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAodC5lbGVtZW50UHJvcGVydGllcyksdGhpcy5fJEV2PW5ldyBNYXAsdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2NvbnN0IHQ9dGhpcy5wcm9wZXJ0aWVzLGk9Wy4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCldO2Zvcihjb25zdCBzIG9mIGkpdGhpcy5jcmVhdGVQcm9wZXJ0eShzLHRbc10pfXJldHVybiB0aGlzLmVsZW1lbnRTdHlsZXM9dGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyksITB9c3RhdGljIGZpbmFsaXplU3R5bGVzKGkpe2NvbnN0IHM9W107aWYoQXJyYXkuaXNBcnJheShpKSl7Y29uc3QgZT1uZXcgU2V0KGkuZmxhdCgxLzApLnJldmVyc2UoKSk7Zm9yKGNvbnN0IGkgb2YgZSlzLnVuc2hpZnQodChpKSl9ZWxzZSB2b2lkIDAhPT1pJiZzLnB1c2godChpKSk7cmV0dXJuIHN9c3RhdGljIF8kRXAodCxpKXtjb25zdCBzPWkuYXR0cmlidXRlO3JldHVybiExPT09cz92b2lkIDA6XCJzdHJpbmdcIj09dHlwZW9mIHM/czpcInN0cmluZ1wiPT10eXBlb2YgdD90LnRvTG93ZXJDYXNlKCk6dm9pZCAwfXUoKXt2YXIgdDt0aGlzLl8kRV89bmV3IFByb21pc2UoKHQ9PnRoaXMuZW5hYmxlVXBkYXRpbmc9dCkpLHRoaXMuXyRBTD1uZXcgTWFwLHRoaXMuXyRFZygpLHRoaXMucmVxdWVzdFVwZGF0ZSgpLG51bGw9PT0odD10aGlzLmNvbnN0cnVjdG9yLmgpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9PnQodGhpcykpKX1hZGRDb250cm9sbGVyKHQpe3ZhciBpLHM7KG51bGwhPT0oaT10aGlzLl8kRVMpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJEVTPVtdKS5wdXNoKHQpLHZvaWQgMCE9PXRoaXMucmVuZGVyUm9vdCYmdGhpcy5pc0Nvbm5lY3RlZCYmKG51bGw9PT0ocz10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1zfHxzLmNhbGwodCkpfXJlbW92ZUNvbnRyb2xsZXIodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuc3BsaWNlKHRoaXMuXyRFUy5pbmRleE9mKHQpPj4+MCwxKX1fJEVnKCl7dGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgodCxpKT0+e3RoaXMuaGFzT3duUHJvcGVydHkoaSkmJih0aGlzLl8kRWkuc2V0KGksdGhpc1tpXSksZGVsZXRlIHRoaXNbaV0pfSkpfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdDtjb25zdCBzPW51bGwhPT0odD10aGlzLnNoYWRvd1Jvb3QpJiZ2b2lkIDAhPT10P3Q6dGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7cmV0dXJuIGkocyx0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLHN9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDt2b2lkIDA9PT10aGlzLnJlbmRlclJvb3QmJih0aGlzLnJlbmRlclJvb3Q9dGhpcy5jcmVhdGVSZW5kZXJSb290KCkpLHRoaXMuZW5hYmxlVXBkYXRpbmcoITApLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1lbmFibGVVcGRhdGluZyh0KXt9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3REaXNjb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsaSxzKXt0aGlzLl8kQUsodCxzKX1fJEVPKHQsaSxzPWwpe3ZhciBlO2NvbnN0IHI9dGhpcy5jb25zdHJ1Y3Rvci5fJEVwKHQscyk7aWYodm9pZCAwIT09ciYmITA9PT1zLnJlZmxlY3Qpe2NvbnN0IGg9KHZvaWQgMCE9PShudWxsPT09KGU9cy5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRvQXR0cmlidXRlKT9zLmNvbnZlcnRlcjpuKS50b0F0dHJpYnV0ZShpLHMudHlwZSk7dGhpcy5fJEVsPXQsbnVsbD09aD90aGlzLnJlbW92ZUF0dHJpYnV0ZShyKTp0aGlzLnNldEF0dHJpYnV0ZShyLGgpLHRoaXMuXyRFbD1udWxsfX1fJEFLKHQsaSl7dmFyIHM7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLHI9ZS5fJEV2LmdldCh0KTtpZih2b2lkIDAhPT1yJiZ0aGlzLl8kRWwhPT1yKXtjb25zdCB0PWUuZ2V0UHJvcGVydHlPcHRpb25zKHIpLGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb252ZXJ0ZXI/e2Zyb21BdHRyaWJ1dGU6dC5jb252ZXJ0ZXJ9OnZvaWQgMCE9PShudWxsPT09KHM9dC5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLmZyb21BdHRyaWJ1dGUpP3QuY29udmVydGVyOm47dGhpcy5fJEVsPXIsdGhpc1tyXT1oLmZyb21BdHRyaWJ1dGUoaSx0LnR5cGUpLHRoaXMuXyRFbD1udWxsfX1yZXF1ZXN0VXBkYXRlKHQsaSxzKXtsZXQgZT0hMDt2b2lkIDAhPT10JiYoKChzPXN8fHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHQpKS5oYXNDaGFuZ2VkfHxhKSh0aGlzW3RdLGkpPyh0aGlzLl8kQUwuaGFzKHQpfHx0aGlzLl8kQUwuc2V0KHQsaSksITA9PT1zLnJlZmxlY3QmJnRoaXMuXyRFbCE9PXQmJih2b2lkIDA9PT10aGlzLl8kRUMmJih0aGlzLl8kRUM9bmV3IE1hcCksdGhpcy5fJEVDLnNldCh0LHMpKSk6ZT0hMSksIXRoaXMuaXNVcGRhdGVQZW5kaW5nJiZlJiYodGhpcy5fJEVfPXRoaXMuXyRFaigpKX1hc3luYyBfJEVqKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFX31jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe3ZhciB0O2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47dGhpcy5oYXNVcGRhdGVkLHRoaXMuXyRFaSYmKHRoaXMuXyRFaS5mb3JFYWNoKCgodCxpKT0+dGhpc1tpXT10KSksdGhpcy5fJEVpPXZvaWQgMCk7bGV0IGk9ITE7Y29uc3Qgcz10aGlzLl8kQUw7dHJ5e2k9dGhpcy5zaG91bGRVcGRhdGUocyksaT8odGhpcy53aWxsVXBkYXRlKHMpLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLnVwZGF0ZShzKSk6dGhpcy5fJEVrKCl9Y2F0Y2godCl7dGhyb3cgaT0hMSx0aGlzLl8kRWsoKSx0fWkmJnRoaXMuXyRBRShzKX13aWxsVXBkYXRlKHQpe31fJEFFKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRVMpfHx2b2lkIDA9PT1pfHxpLmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy5oYXNVcGRhdGVkfHwodGhpcy5oYXNVcGRhdGVkPSEwLHRoaXMuZmlyc3RVcGRhdGVkKHQpKSx0aGlzLnVwZGF0ZWQodCl9XyRFaygpe3RoaXMuXyRBTD1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExfWdldCB1cGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCl9Z2V0VXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5fJEVffXNob3VsZFVwZGF0ZSh0KXtyZXR1cm4hMH11cGRhdGUodCl7dm9pZCAwIT09dGhpcy5fJEVDJiYodGhpcy5fJEVDLmZvckVhY2goKCh0LGkpPT50aGlzLl8kRU8oaSx0aGlzW2ldLHQpKSksdGhpcy5fJEVDPXZvaWQgMCksdGhpcy5fJEVrKCl9dXBkYXRlZCh0KXt9Zmlyc3RVcGRhdGVkKHQpe319ZC5maW5hbGl6ZWQ9ITAsZC5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwLGQuZWxlbWVudFN0eWxlcz1bXSxkLnNoYWRvd1Jvb3RPcHRpb25zPXttb2RlOlwib3BlblwifSxudWxsPT1vfHxvKHtSZWFjdGl2ZUVsZW1lbnQ6ZH0pLChudWxsIT09KHM9ZS5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PXM/czplLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMS40LjBcIik7ZXhwb3J0e2QgYXMgUmVhY3RpdmVFbGVtZW50LG4gYXMgZGVmYXVsdENvbnZlcnRlcixhIGFzIG5vdEVxdWFsfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9d2luZG93LGU9dC5TaGFkb3dSb290JiYodm9pZCAwPT09dC5TaGFkeUNTU3x8dC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpJiZcImFkb3B0ZWRTdHlsZVNoZWV0c1wiaW4gRG9jdW1lbnQucHJvdG90eXBlJiZcInJlcGxhY2VcImluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLHM9U3ltYm9sKCksbj1uZXcgV2Vha01hcDtjbGFzcyBve2NvbnN0cnVjdG9yKHQsZSxuKXtpZih0aGlzLl8kY3NzUmVzdWx0JD0hMCxuIT09cyl0aHJvdyBFcnJvcihcIkNTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuXCIpO3RoaXMuY3NzVGV4dD10LHRoaXMudD1lfWdldCBzdHlsZVNoZWV0KCl7bGV0IHQ9dGhpcy5vO2NvbnN0IHM9dGhpcy50O2lmKGUmJnZvaWQgMD09PXQpe2NvbnN0IGU9dm9pZCAwIT09cyYmMT09PXMubGVuZ3RoO2UmJih0PW4uZ2V0KHMpKSx2b2lkIDA9PT10JiYoKHRoaXMubz10PW5ldyBDU1NTdHlsZVNoZWV0KS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpLGUmJm4uc2V0KHMsdCkpfXJldHVybiB0fXRvU3RyaW5nKCl7cmV0dXJuIHRoaXMuY3NzVGV4dH19Y29uc3Qgcj10PT5uZXcgbyhcInN0cmluZ1wiPT10eXBlb2YgdD90OnQrXCJcIix2b2lkIDAscyksaT0odCwuLi5lKT0+e2NvbnN0IG49MT09PXQubGVuZ3RoP3RbMF06ZS5yZWR1Y2UoKChlLHMsbik9PmUrKHQ9PntpZighMD09PXQuXyRjc3NSZXN1bHQkKXJldHVybiB0LmNzc1RleHQ7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7dGhyb3cgRXJyb3IoXCJWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogXCIrdCtcIi4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LlwiKX0pKHMpK3RbbisxXSksdFswXSk7cmV0dXJuIG5ldyBvKG4sdCxzKX0sUz0ocyxuKT0+e2U/cy5hZG9wdGVkU3R5bGVTaGVldHM9bi5tYXAoKHQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0P3Q6dC5zdHlsZVNoZWV0KSk6bi5mb3JFYWNoKChlPT57Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz10LmxpdE5vbmNlO3ZvaWQgMCE9PW8mJm4uc2V0QXR0cmlidXRlKFwibm9uY2VcIixvKSxuLnRleHRDb250ZW50PWUuY3NzVGV4dCxzLmFwcGVuZENoaWxkKG4pfSkpfSxjPWU/dD0+dDp0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD8odD0+e2xldCBlPVwiXCI7Zm9yKGNvbnN0IHMgb2YgdC5jc3NSdWxlcyllKz1zLmNzc1RleHQ7cmV0dXJuIHIoZSl9KSh0KTp0O2V4cG9ydHtvIGFzIENTU1Jlc3VsdCxTIGFzIGFkb3B0U3R5bGVzLGkgYXMgY3NzLGMgYXMgZ2V0Q29tcGF0aWJsZVN0eWxlLGUgYXMgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLHIgYXMgdW5zYWZlQ1NTfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciB0O2NvbnN0IGk9d2luZG93LHM9aS50cnVzdGVkVHlwZXMsZT1zP3MuY3JlYXRlUG9saWN5KFwibGl0LWh0bWxcIix7Y3JlYXRlSFRNTDp0PT50fSk6dm9pZCAwLG89YGxpdCQkeyhNYXRoLnJhbmRvbSgpK1wiXCIpLnNsaWNlKDkpfSRgLG49XCI/XCIrbyxsPWA8JHtufT5gLGg9ZG9jdW1lbnQscj0odD1cIlwiKT0+aC5jcmVhdGVDb21tZW50KHQpLGQ9dD0+bnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LHU9QXJyYXkuaXNBcnJheSxjPXQ9PnUodCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnRbU3ltYm9sLml0ZXJhdG9yXSksdj0vPCg/OighLS18XFwvW15hLXpBLVpdKXwoXFwvP1thLXpBLVpdW14+XFxzXSopfChcXC8/JCkpL2csYT0vLS0+L2csZj0vPi9nLF89UmVnRXhwKFwiPnxbIFxcdFxcblxcZlxccl0oPzooW15cXFxcc1xcXCInPj0vXSspKFsgXFx0XFxuXFxmXFxyXSo9WyBcXHRcXG5cXGZcXHJdKig/OlteIFxcdFxcblxcZlxcclxcXCInYDw+PV18KFxcXCJ8Jyl8KSl8JClcIixcImdcIiksbT0vJy9nLHA9L1wiL2csJD0vXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2ksZz10PT4oaSwuLi5zKT0+KHtfJGxpdFR5cGUkOnQsc3RyaW5nczppLHZhbHVlczpzfSkseT1nKDEpLHc9ZygyKSx4PVN5bWJvbC5mb3IoXCJsaXQtbm9DaGFuZ2VcIiksYj1TeW1ib2wuZm9yKFwibGl0LW5vdGhpbmdcIiksVD1uZXcgV2Vha01hcCxBPSh0LGkscyk9Pnt2YXIgZSxvO2NvbnN0IG49bnVsbCE9PShlPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09ZT9lOmk7bGV0IGw9bi5fJGxpdFBhcnQkO2lmKHZvaWQgMD09PWwpe2NvbnN0IHQ9bnVsbCE9PShvPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09bz9vOm51bGw7bi5fJGxpdFBhcnQkPWw9bmV3IFMoaS5pbnNlcnRCZWZvcmUocigpLHQpLHQsdm9pZCAwLG51bGwhPXM/czp7fSl9cmV0dXJuIGwuXyRBSSh0KSxsfSxFPWguY3JlYXRlVHJlZVdhbGtlcihoLDEyOSxudWxsLCExKSxDPSh0LGkpPT57Y29uc3Qgcz10Lmxlbmd0aC0xLG49W107bGV0IGgscj0yPT09aT9cIjxzdmc+XCI6XCJcIixkPXY7Zm9yKGxldCBpPTA7aTxzO2krKyl7Y29uc3Qgcz10W2ldO2xldCBlLHUsYz0tMSxnPTA7Zm9yKDtnPHMubGVuZ3RoJiYoZC5sYXN0SW5kZXg9Zyx1PWQuZXhlYyhzKSxudWxsIT09dSk7KWc9ZC5sYXN0SW5kZXgsZD09PXY/XCIhLS1cIj09PXVbMV0/ZD1hOnZvaWQgMCE9PXVbMV0/ZD1mOnZvaWQgMCE9PXVbMl0/KCQudGVzdCh1WzJdKSYmKGg9UmVnRXhwKFwiPC9cIit1WzJdLFwiZ1wiKSksZD1fKTp2b2lkIDAhPT11WzNdJiYoZD1fKTpkPT09Xz9cIj5cIj09PXVbMF0/KGQ9bnVsbCE9aD9oOnYsYz0tMSk6dm9pZCAwPT09dVsxXT9jPS0yOihjPWQubGFzdEluZGV4LXVbMl0ubGVuZ3RoLGU9dVsxXSxkPXZvaWQgMD09PXVbM10/XzonXCInPT09dVszXT9wOm0pOmQ9PT1wfHxkPT09bT9kPV86ZD09PWF8fGQ9PT1mP2Q9djooZD1fLGg9dm9pZCAwKTtjb25zdCB5PWQ9PT1fJiZ0W2krMV0uc3RhcnRzV2l0aChcIi8+XCIpP1wiIFwiOlwiXCI7cis9ZD09PXY/cytsOmM+PTA/KG4ucHVzaChlKSxzLnNsaWNlKDAsYykrXCIkbGl0JFwiK3Muc2xpY2UoYykrbyt5KTpzK28rKC0yPT09Yz8obi5wdXNoKHZvaWQgMCksaSk6eSl9Y29uc3QgdT1yKyh0W3NdfHxcIjw/PlwiKSsoMj09PWk/XCI8L3N2Zz5cIjpcIlwiKTtpZighQXJyYXkuaXNBcnJheSh0KXx8IXQuaGFzT3duUHJvcGVydHkoXCJyYXdcIikpdGhyb3cgRXJyb3IoXCJpbnZhbGlkIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXlcIik7cmV0dXJuW3ZvaWQgMCE9PWU/ZS5jcmVhdGVIVE1MKHUpOnUsbl19O2NsYXNzIFB7Y29uc3RydWN0b3Ioe3N0cmluZ3M6dCxfJGxpdFR5cGUkOml9LGUpe2xldCBsO3RoaXMucGFydHM9W107bGV0IGg9MCxkPTA7Y29uc3QgdT10Lmxlbmd0aC0xLGM9dGhpcy5wYXJ0cyxbdixhXT1DKHQsaSk7aWYodGhpcy5lbD1QLmNyZWF0ZUVsZW1lbnQodixlKSxFLmN1cnJlbnROb2RlPXRoaXMuZWwuY29udGVudCwyPT09aSl7Y29uc3QgdD10aGlzLmVsLmNvbnRlbnQsaT10LmZpcnN0Q2hpbGQ7aS5yZW1vdmUoKSx0LmFwcGVuZCguLi5pLmNoaWxkTm9kZXMpfWZvcig7bnVsbCE9PShsPUUubmV4dE5vZGUoKSkmJmMubGVuZ3RoPHU7KXtpZigxPT09bC5ub2RlVHlwZSl7aWYobC5oYXNBdHRyaWJ1dGVzKCkpe2NvbnN0IHQ9W107Zm9yKGNvbnN0IGkgb2YgbC5nZXRBdHRyaWJ1dGVOYW1lcygpKWlmKGkuZW5kc1dpdGgoXCIkbGl0JFwiKXx8aS5zdGFydHNXaXRoKG8pKXtjb25zdCBzPWFbZCsrXTtpZih0LnB1c2goaSksdm9pZCAwIT09cyl7Y29uc3QgdD1sLmdldEF0dHJpYnV0ZShzLnRvTG93ZXJDYXNlKCkrXCIkbGl0JFwiKS5zcGxpdChvKSxpPS8oWy4/QF0pPyguKikvLmV4ZWMocyk7Yy5wdXNoKHt0eXBlOjEsaW5kZXg6aCxuYW1lOmlbMl0sc3RyaW5nczp0LGN0b3I6XCIuXCI9PT1pWzFdP1I6XCI/XCI9PT1pWzFdP0g6XCJAXCI9PT1pWzFdP0k6TX0pfWVsc2UgYy5wdXNoKHt0eXBlOjYsaW5kZXg6aH0pfWZvcihjb25zdCBpIG9mIHQpbC5yZW1vdmVBdHRyaWJ1dGUoaSl9aWYoJC50ZXN0KGwudGFnTmFtZSkpe2NvbnN0IHQ9bC50ZXh0Q29udGVudC5zcGxpdChvKSxpPXQubGVuZ3RoLTE7aWYoaT4wKXtsLnRleHRDb250ZW50PXM/cy5lbXB0eVNjcmlwdDpcIlwiO2ZvcihsZXQgcz0wO3M8aTtzKyspbC5hcHBlbmQodFtzXSxyKCkpLEUubmV4dE5vZGUoKSxjLnB1c2goe3R5cGU6MixpbmRleDorK2h9KTtsLmFwcGVuZCh0W2ldLHIoKSl9fX1lbHNlIGlmKDg9PT1sLm5vZGVUeXBlKWlmKGwuZGF0YT09PW4pYy5wdXNoKHt0eXBlOjIsaW5kZXg6aH0pO2Vsc2V7bGV0IHQ9LTE7Zm9yKDstMSE9PSh0PWwuZGF0YS5pbmRleE9mKG8sdCsxKSk7KWMucHVzaCh7dHlwZTo3LGluZGV4Omh9KSx0Kz1vLmxlbmd0aC0xfWgrK319c3RhdGljIGNyZWF0ZUVsZW1lbnQodCxpKXtjb25zdCBzPWguY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiBzLmlubmVySFRNTD10LHN9fWZ1bmN0aW9uIFYodCxpLHM9dCxlKXt2YXIgbyxuLGwsaDtpZihpPT09eClyZXR1cm4gaTtsZXQgcj12b2lkIDAhPT1lP251bGw9PT0obz1zLl8kQ2wpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvW2VdOnMuXyRDdTtjb25zdCB1PWQoaSk/dm9pZCAwOmkuXyRsaXREaXJlY3RpdmUkO3JldHVybihudWxsPT1yP3ZvaWQgMDpyLmNvbnN0cnVjdG9yKSE9PXUmJihudWxsPT09KG49bnVsbD09cj92b2lkIDA6ci5fJEFPKXx8dm9pZCAwPT09bnx8bi5jYWxsKHIsITEpLHZvaWQgMD09PXU/cj12b2lkIDA6KHI9bmV3IHUodCksci5fJEFUKHQscyxlKSksdm9pZCAwIT09ZT8obnVsbCE9PShsPShoPXMpLl8kQ2wpJiZ2b2lkIDAhPT1sP2w6aC5fJENsPVtdKVtlXT1yOnMuXyRDdT1yKSx2b2lkIDAhPT1yJiYoaT1WKHQsci5fJEFTKHQsaS52YWx1ZXMpLHIsZSkpLGl9Y2xhc3MgTntjb25zdHJ1Y3Rvcih0LGkpe3RoaXMudj1bXSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBRD10LHRoaXMuXyRBTT1pfWdldCBwYXJlbnROb2RlKCl7cmV0dXJuIHRoaXMuXyRBTS5wYXJlbnROb2RlfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfXAodCl7dmFyIGk7Y29uc3R7ZWw6e2NvbnRlbnQ6c30scGFydHM6ZX09dGhpcy5fJEFELG89KG51bGwhPT0oaT1udWxsPT10P3ZvaWQgMDp0LmNyZWF0aW9uU2NvcGUpJiZ2b2lkIDAhPT1pP2k6aCkuaW1wb3J0Tm9kZShzLCEwKTtFLmN1cnJlbnROb2RlPW87bGV0IG49RS5uZXh0Tm9kZSgpLGw9MCxyPTAsZD1lWzBdO2Zvcig7dm9pZCAwIT09ZDspe2lmKGw9PT1kLmluZGV4KXtsZXQgaTsyPT09ZC50eXBlP2k9bmV3IFMobixuLm5leHRTaWJsaW5nLHRoaXMsdCk6MT09PWQudHlwZT9pPW5ldyBkLmN0b3IobixkLm5hbWUsZC5zdHJpbmdzLHRoaXMsdCk6Nj09PWQudHlwZSYmKGk9bmV3IEwobix0aGlzLHQpKSx0aGlzLnYucHVzaChpKSxkPWVbKytyXX1sIT09KG51bGw9PWQ/dm9pZCAwOmQuaW5kZXgpJiYobj1FLm5leHROb2RlKCksbCsrKX1yZXR1cm4gb31tKHQpe2xldCBpPTA7Zm9yKGNvbnN0IHMgb2YgdGhpcy52KXZvaWQgMCE9PXMmJih2b2lkIDAhPT1zLnN0cmluZ3M/KHMuXyRBSSh0LHMsaSksaSs9cy5zdHJpbmdzLmxlbmd0aC0yKTpzLl8kQUkodFtpXSkpLGkrK319Y2xhc3MgU3tjb25zdHJ1Y3Rvcih0LGkscyxlKXt2YXIgbzt0aGlzLnR5cGU9Mix0aGlzLl8kQUg9Yix0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBQT10LHRoaXMuXyRBQj1pLHRoaXMuXyRBTT1zLHRoaXMub3B0aW9ucz1lLHRoaXMuXyRDXz1udWxsPT09KG89bnVsbD09ZT92b2lkIDA6ZS5pc0Nvbm5lY3RlZCl8fHZvaWQgMD09PW98fG99Z2V0IF8kQVUoKXt2YXIgdCxpO3JldHVybiBudWxsIT09KGk9bnVsbD09PSh0PXRoaXMuXyRBTSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuXyRBVSkmJnZvaWQgMCE9PWk/aTp0aGlzLl8kQ199Z2V0IHBhcmVudE5vZGUoKXtsZXQgdD10aGlzLl8kQUEucGFyZW50Tm9kZTtjb25zdCBpPXRoaXMuXyRBTTtyZXR1cm4gdm9pZCAwIT09aSYmMTE9PT10Lm5vZGVUeXBlJiYodD1pLnBhcmVudE5vZGUpLHR9Z2V0IHN0YXJ0Tm9kZSgpe3JldHVybiB0aGlzLl8kQUF9Z2V0IGVuZE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFCfV8kQUkodCxpPXRoaXMpe3Q9Vih0aGlzLHQsaSksZCh0KT90PT09Ynx8bnVsbD09dHx8XCJcIj09PXQ/KHRoaXMuXyRBSCE9PWImJnRoaXMuXyRBUigpLHRoaXMuXyRBSD1iKTp0IT09dGhpcy5fJEFIJiZ0IT09eCYmdGhpcy4kKHQpOnZvaWQgMCE9PXQuXyRsaXRUeXBlJD90aGlzLlQodCk6dm9pZCAwIT09dC5ub2RlVHlwZT90aGlzLmsodCk6Yyh0KT90aGlzLk8odCk6dGhpcy4kKHQpfVModCxpPXRoaXMuXyRBQil7cmV0dXJuIHRoaXMuXyRBQS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGkpfWsodCl7dGhpcy5fJEFIIT09dCYmKHRoaXMuXyRBUigpLHRoaXMuXyRBSD10aGlzLlModCkpfSQodCl7dGhpcy5fJEFIIT09YiYmZCh0aGlzLl8kQUgpP3RoaXMuXyRBQS5uZXh0U2libGluZy5kYXRhPXQ6dGhpcy5rKGguY3JlYXRlVGV4dE5vZGUodCkpLHRoaXMuXyRBSD10fVQodCl7dmFyIGk7Y29uc3R7dmFsdWVzOnMsXyRsaXRUeXBlJDplfT10LG89XCJudW1iZXJcIj09dHlwZW9mIGU/dGhpcy5fJEFDKHQpOih2b2lkIDA9PT1lLmVsJiYoZS5lbD1QLmNyZWF0ZUVsZW1lbnQoZS5oLHRoaXMub3B0aW9ucykpLGUpO2lmKChudWxsPT09KGk9dGhpcy5fJEFIKXx8dm9pZCAwPT09aT92b2lkIDA6aS5fJEFEKT09PW8pdGhpcy5fJEFILm0ocyk7ZWxzZXtjb25zdCB0PW5ldyBOKG8sdGhpcyksaT10LnAodGhpcy5vcHRpb25zKTt0Lm0ocyksdGhpcy5rKGkpLHRoaXMuXyRBSD10fX1fJEFDKHQpe2xldCBpPVQuZ2V0KHQuc3RyaW5ncyk7cmV0dXJuIHZvaWQgMD09PWkmJlQuc2V0KHQuc3RyaW5ncyxpPW5ldyBQKHQpKSxpfU8odCl7dSh0aGlzLl8kQUgpfHwodGhpcy5fJEFIPVtdLHRoaXMuXyRBUigpKTtjb25zdCBpPXRoaXMuXyRBSDtsZXQgcyxlPTA7Zm9yKGNvbnN0IG8gb2YgdCllPT09aS5sZW5ndGg/aS5wdXNoKHM9bmV3IFModGhpcy5TKHIoKSksdGhpcy5TKHIoKSksdGhpcyx0aGlzLm9wdGlvbnMpKTpzPWlbZV0scy5fJEFJKG8pLGUrKztlPGkubGVuZ3RoJiYodGhpcy5fJEFSKHMmJnMuXyRBQi5uZXh0U2libGluZyxlKSxpLmxlbmd0aD1lKX1fJEFSKHQ9dGhpcy5fJEFBLm5leHRTaWJsaW5nLGkpe3ZhciBzO2ZvcihudWxsPT09KHM9dGhpcy5fJEFQKXx8dm9pZCAwPT09c3x8cy5jYWxsKHRoaXMsITEsITAsaSk7dCYmdCE9PXRoaXMuXyRBQjspe2NvbnN0IGk9dC5uZXh0U2libGluZzt0LnJlbW92ZSgpLHQ9aX19c2V0Q29ubmVjdGVkKHQpe3ZhciBpO3ZvaWQgMD09PXRoaXMuXyRBTSYmKHRoaXMuXyRDXz10LG51bGw9PT0oaT10aGlzLl8kQVApfHx2b2lkIDA9PT1pfHxpLmNhbGwodGhpcyx0KSl9fWNsYXNzIE17Y29uc3RydWN0b3IodCxpLHMsZSxvKXt0aGlzLnR5cGU9MSx0aGlzLl8kQUg9Yix0aGlzLl8kQU49dm9pZCAwLHRoaXMuZWxlbWVudD10LHRoaXMubmFtZT1pLHRoaXMuXyRBTT1lLHRoaXMub3B0aW9ucz1vLHMubGVuZ3RoPjJ8fFwiXCIhPT1zWzBdfHxcIlwiIT09c1sxXT8odGhpcy5fJEFIPUFycmF5KHMubGVuZ3RoLTEpLmZpbGwobmV3IFN0cmluZyksdGhpcy5zdHJpbmdzPXMpOnRoaXMuXyRBSD1ifWdldCB0YWdOYW1lKCl7cmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCxpPXRoaXMscyxlKXtjb25zdCBvPXRoaXMuc3RyaW5ncztsZXQgbj0hMTtpZih2b2lkIDA9PT1vKXQ9Vih0aGlzLHQsaSwwKSxuPSFkKHQpfHx0IT09dGhpcy5fJEFIJiZ0IT09eCxuJiYodGhpcy5fJEFIPXQpO2Vsc2V7Y29uc3QgZT10O2xldCBsLGg7Zm9yKHQ9b1swXSxsPTA7bDxvLmxlbmd0aC0xO2wrKyloPVYodGhpcyxlW3MrbF0saSxsKSxoPT09eCYmKGg9dGhpcy5fJEFIW2xdKSxufHwobj0hZChoKXx8aCE9PXRoaXMuXyRBSFtsXSksaD09PWI/dD1iOnQhPT1iJiYodCs9KG51bGwhPWg/aDpcIlwiKStvW2wrMV0pLHRoaXMuXyRBSFtsXT1ofW4mJiFlJiZ0aGlzLlAodCl9UCh0KXt0PT09Yj90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk6dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsbnVsbCE9dD90OlwiXCIpfX1jbGFzcyBSIGV4dGVuZHMgTXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTN9UCh0KXt0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXT10PT09Yj92b2lkIDA6dH19Y29uc3Qgaz1zP3MuZW1wdHlTY3JpcHQ6XCJcIjtjbGFzcyBIIGV4dGVuZHMgTXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTR9UCh0KXt0JiZ0IT09Yj90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSxrKTp0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSl9fWNsYXNzIEkgZXh0ZW5kcyBNe2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7c3VwZXIodCxpLHMsZSxvKSx0aGlzLnR5cGU9NX1fJEFJKHQsaT10aGlzKXt2YXIgcztpZigodD1udWxsIT09KHM9Vih0aGlzLHQsaSwwKSkmJnZvaWQgMCE9PXM/czpiKT09PXgpcmV0dXJuO2NvbnN0IGU9dGhpcy5fJEFILG89dD09PWImJmUhPT1ifHx0LmNhcHR1cmUhPT1lLmNhcHR1cmV8fHQub25jZSE9PWUub25jZXx8dC5wYXNzaXZlIT09ZS5wYXNzaXZlLG49dCE9PWImJihlPT09Ynx8byk7byYmdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsZSksbiYmdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsdCksdGhpcy5fJEFIPXR9aGFuZGxlRXZlbnQodCl7dmFyIGkscztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl8kQUg/dGhpcy5fJEFILmNhbGwobnVsbCE9PShzPW51bGw9PT0oaT10aGlzLm9wdGlvbnMpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmhvc3QpJiZ2b2lkIDAhPT1zP3M6dGhpcy5lbGVtZW50LHQpOnRoaXMuXyRBSC5oYW5kbGVFdmVudCh0KX19Y2xhc3MgTHtjb25zdHJ1Y3Rvcih0LGkscyl7dGhpcy5lbGVtZW50PXQsdGhpcy50eXBlPTYsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQU09aSx0aGlzLm9wdGlvbnM9c31nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQpe1YodGhpcyx0KX19Y29uc3Qgej17QTpcIiRsaXQkXCIsTTpvLEM6bixMOjEsUjpDLEQ6TixWOmMsSTpWLEg6UyxOOk0sVTpILEI6SSxGOlIsVzpMfSxaPWkubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtudWxsPT1afHxaKFAsUyksKG51bGwhPT0odD1pLmxpdEh0bWxWZXJzaW9ucykmJnZvaWQgMCE9PXQ/dDppLmxpdEh0bWxWZXJzaW9ucz1bXSkucHVzaChcIjIuMy4xXCIpO2V4cG9ydHt6IGFzIF8kTEgseSBhcyBodG1sLHggYXMgbm9DaGFuZ2UsYiBhcyBub3RoaW5nLEEgYXMgcmVuZGVyLHcgYXMgc3ZnfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcFxuIiwiaW1wb3J0e1JlYWN0aXZlRWxlbWVudCBhcyB0fWZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnR7cmVuZGVyIGFzIGUsbm9DaGFuZ2UgYXMgaX1mcm9tXCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbFwiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIGwsbztjb25zdCByPXQ7Y2xhc3MgcyBleHRlbmRzIHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMucmVuZGVyT3B0aW9ucz17aG9zdDp0aGlzfSx0aGlzLl8kRG89dm9pZCAwfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdCxlO2NvbnN0IGk9c3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO3JldHVybiBudWxsIT09KHQ9KGU9dGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT10fHwoZS5yZW5kZXJCZWZvcmU9aS5maXJzdENoaWxkKSxpfXVwZGF0ZSh0KXtjb25zdCBpPXRoaXMucmVuZGVyKCk7dGhpcy5oYXNVcGRhdGVkfHwodGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkPXRoaXMuaXNDb25uZWN0ZWQpLHN1cGVyLnVwZGF0ZSh0KSx0aGlzLl8kRG89ZShpLHRoaXMucmVuZGVyUm9vdCx0aGlzLnJlbmRlck9wdGlvbnMpfWNvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJERvKXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITApfWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJERvKXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITEpfXJlbmRlcigpe3JldHVybiBpfX1zLmZpbmFsaXplZD0hMCxzLl8kbGl0RWxlbWVudCQ9ITAsbnVsbD09PShsPWdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KXx8dm9pZCAwPT09bHx8bC5jYWxsKGdsb2JhbFRoaXMse0xpdEVsZW1lbnQ6c30pO2NvbnN0IG49Z2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O251bGw9PW58fG4oe0xpdEVsZW1lbnQ6c30pO2NvbnN0IGg9e18kQUs6KHQsZSxpKT0+e3QuXyRBSyhlLGkpfSxfJEFMOnQ9PnQuXyRBTH07KG51bGwhPT0obz1nbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PW8/bzpnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucz1bXSkucHVzaChcIjMuMi4yXCIpO2V4cG9ydHtzIGFzIExpdEVsZW1lbnQsciBhcyBVcGRhdGluZ0VsZW1lbnQsaCBhcyBfJExFfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcFxuIiwiaW1wb3J0IHtKb2IsIFNpbXBsZUNhY2hlZFF1ZXVlfSBmcm9tICcuLi91dGlscy9xdWV1ZSc7XHJcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vYnJpZGdlL2NsaWVudCc7XHJcbmltcG9ydCB7RmV0Y2hJbnNwZWN0SW5mbywgRmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3QsIEl0ZW1JbmZvfSBmcm9tICcuLi9icmlkZ2UvaGFuZGxlcnMvZmV0Y2hfaW5zcGVjdF9pbmZvJztcclxuXHJcbmNsYXNzIEluc3BlY3RKb2IgZXh0ZW5kcyBKb2I8RmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3Q+IHtcclxuICAgIGhhc2hDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5saW5rO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBGbG9hdEZldGNoZXIgZXh0ZW5kcyBTaW1wbGVDYWNoZWRRdWV1ZTxGZXRjaEluc3BlY3RJbmZvUmVxdWVzdCwgSXRlbUluZm8+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qKiBhbGxvdyB1cCB0byAxMCBzaW11bHRhbmVvdXMgZmxvYXQgZmV0Y2ggcmVxcyAqL1xyXG4gICAgICAgIHN1cGVyKDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChyZXE6IEZldGNoSW5zcGVjdEluZm9SZXF1ZXN0KTogUHJvbWlzZTxJdGVtSW5mbz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZChuZXcgSW5zcGVjdEpvYihyZXEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgcHJvY2VzcyhyZXE6IEZldGNoSW5zcGVjdEluZm9SZXF1ZXN0KTogUHJvbWlzZTxJdGVtSW5mbz4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBDbGllbnRTZW5kKEZldGNoSW5zcGVjdEluZm8sIHJlcSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3AuaXRlbWluZm87XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnRmxvYXRGZXRjaGVyID0gbmV3IEZsb2F0RmV0Y2hlcigpO1xyXG4iLCJpbXBvcnQge0NhY2hlLCBJQ2FjaGUsIFRUTENhY2hlfSBmcm9tICcuL2NhY2hlJztcclxuaW1wb3J0IHtEZWZlcnJlZFByb21pc2V9IGZyb20gJy4vZGVmZXJyZWRfcHJvbWlzZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSm9iPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhOiBUKSB7fVxyXG5cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhc2ggdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoaXMgam9iLlxyXG4gICAgICpcclxuICAgICAqIElmIHR3byBqb2JzIGhhdmUgdGhlIHNhbWUgaGFzaGNvZGUsIHRoZXkgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsLlxyXG4gICAgICogKi9cclxuICAgIGhhc2hDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljSm9iPFQ+IGV4dGVuZHMgSm9iPFQ+IHt9XHJcblxyXG5pbnRlcmZhY2UgUXVldWVkSm9iPFJlcSwgUmVzcD4ge1xyXG4gICAgam9iOiBKb2I8UmVxPjtcclxuICAgIGRlZmVycmVkUHJvbWlzZTogRGVmZXJyZWRQcm9taXNlPFJlc3A+O1xyXG59XHJcblxyXG4vKipcclxuICogUXVldWUgdG8gaGFuZGxlIHByb2Nlc3Npbmcgb2YgXCJKb2JzXCIgd2l0aCBhIHJlcXVlc3QgdGhhdFxyXG4gKiByZXR1cm4gYSByZXNwb25zZS4gRW5zdXJlcyBhIG1heCBjb25jdXJyZW5jeSBvZiBwcm9jZXNzaW5nXHJcbiAqIHNpbXVsdGFuZW91cyBqb2JzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFF1ZXVlPFJlcSwgUmVzcD4ge1xyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFF1ZXVlOiBRdWV1ZWRKb2I8UmVxLCBSZXNwPltdID0gW107XHJcbiAgICBwcml2YXRlIGpvYnNQcm9jZXNzaW5nOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF4Q29uY3VycmVuY3k6IG51bWJlcikge31cclxuXHJcbiAgICAvKiogQW1vdW50IG9mIGpvYnMgY3VycmVudGx5IGluIHRoZSBxdWV1ZSAqL1xyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUXVldWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhqb2I6IEpvYjxSZXE+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pbnRlcm5hbFF1ZXVlLmZpbmQoKGUpID0+IGUuam9iLmhhc2hDb2RlKCkgPT09IGpvYi5oYXNoQ29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPclRocm93KGpvYjogSm9iPFJlcT4pOiBRdWV1ZWRKb2I8UmVxLCBSZXNwPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhqb2IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iWyR7am9iLmhhc2hDb2RlKCl9XSBpcyBub3QgcXVldWVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHdWFyYW50ZWVkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxRdWV1ZS5maW5kKChlKSA9PiBlLmpvYi5oYXNoQ29kZSgpID09PSBqb2IuaGFzaENvZGUoKSkhO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxRdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5qb2JzUHJvY2Vzc2luZyA+PSB0aGlzLm1heENvbmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHdhbnQgdG8gbGF1bmNoIG1vcmUgaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuam9ic1Byb2Nlc3NpbmcgKz0gMTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVldWVkSm9iID0gdGhpcy5pbnRlcm5hbFF1ZXVlLnNoaWZ0KCkhO1xyXG4gICAgICAgIGNvbnN0IHJlcTogUmVxID0gcXVldWVkSm9iLmpvYi5nZXREYXRhKCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLnByb2Nlc3MocmVxKTtcclxuICAgICAgICAgICAgcXVldWVkSm9iLmRlZmVycmVkUHJvbWlzZS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcXVldWVkSm9iLmRlZmVycmVkUHJvbWlzZS5yZWplY3QoKGUgYXMgYW55KS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuam9ic1Byb2Nlc3NpbmcgLT0gMTtcclxuICAgICAgICB0aGlzLmNoZWNrUXVldWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoam9iOiBKb2I8UmVxPik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhcyhqb2IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yVGhyb3coam9iKT8uZGVmZXJyZWRQcm9taXNlLnByb21pc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgRGVmZXJyZWRQcm9taXNlPFJlc3A+KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbFF1ZXVlLnB1c2goe2pvYiwgZGVmZXJyZWRQcm9taXNlOiBwcm9taXNlfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1F1ZXVlKCksIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByb2Nlc3MocmVxOiBSZXEpOiBQcm9taXNlPFJlc3A+O1xyXG59XHJcblxyXG4vKipcclxuICogTGlrZSBhIHF1ZXVlLCBidXQgaGFzIGFuIGludGVybmFsIGNhY2hlIGZvciBlbGVtZW50cyBhbHJlYWR5IHJlcXVlc3RlZFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhY2hlZFF1ZXVlPFJlcSwgUmVzcD4gZXh0ZW5kcyBRdWV1ZTxSZXEsIFJlc3A+IHtcclxuICAgIC8qKiBVbmRlcmx5aW5nIGltcGxlbWVudGF0aW9uIG9mIGEgY2FjaGUgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjYWNoZSgpOiBJQ2FjaGU8UmVzcD47XHJcblxyXG4gICAgLyoqIEFtb3VudCBvZiBwcmV2aW91c2x5IHJlcXVlc3RlZCBqb2JzIHN0b3JlZCBpbiB0aGUgY2FjaGUgKi9cclxuICAgIGNhY2hlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlKCkuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhY2hlZChqb2I6IEpvYjxSZXE+KTogUmVzcCB8IG51bGwge1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlKCkuaGFzKGpvYi5oYXNoQ29kZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZSgpLmdldE9yVGhyb3coam9iLmhhc2hDb2RlKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDYWNoZWQoam9iOiBKb2I8UmVxPiwgcmVzcDogUmVzcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FjaGUoKS5zZXQoam9iLmhhc2hDb2RlKCksIHJlc3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChqb2I6IEpvYjxSZXE+KTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGVkKGpvYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldENhY2hlZChqb2IpISk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuYWRkKGpvYikudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhY2hlZChqb2IsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvY2VzcyhyZXE6IFJlcSk6IFByb21pc2U8UmVzcD47XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVDYWNoZWRRdWV1ZTxSZXEsIFJlc3A+IGV4dGVuZHMgQ2FjaGVkUXVldWU8UmVxLCBSZXNwPiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlXyA9IG5ldyBDYWNoZTxSZXNwPigpO1xyXG5cclxuICAgIHByb3RlY3RlZCBjYWNoZSgpOiBJQ2FjaGU8UmVzcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlXztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRUTENhY2hlZFF1ZXVlPFJlcSwgUmVzcD4gZXh0ZW5kcyBDYWNoZWRRdWV1ZTxSZXEsIFJlc3A+IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVfOiBUVExDYWNoZTxSZXNwPjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobWF4Q29uY3VycmVuY3k6IG51bWJlciwgcHJpdmF0ZSB0dGxNczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobWF4Q29uY3VycmVuY3kpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVfID0gbmV3IFRUTENhY2hlPFJlc3A+KHR0bE1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FjaGUoKTogSUNhY2hlPFJlc3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV87XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJQ2FjaGU8VD4ge1xyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkO1xyXG4gICAgZ2V0T3JUaHJvdyhrZXk6IHN0cmluZyk6IFQ7XHJcbiAgICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgc2l6ZSgpOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgR2VuZXJpYyBDYWNoZSB3aXRoIHN0cmluZ2lmaWVkIGtleXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYWNoZTxUPiBpbXBsZW1lbnRzIElDYWNoZTxUPiB7XHJcbiAgICBwcml2YXRlIGNhY2hlXzoge1trZXk6IHN0cmluZ106IFR9ID0ge307XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVfW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV9ba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPclRocm93KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiBtYXAgW2dldE9yVGhyb3ddYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV9ba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMuY2FjaGVfO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWNoZV8pLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFRUTFdyYXBwZXI8VD4ge1xyXG4gICAgZGF0YTogVDtcclxuICAgIGV4cGlyZXNFcG9jaDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogRXh0ZW5zaW9uIG9mIHtAbGluayBDYWNoZX0gdGhhdCBhbGxvd3Mgc2V0dGluZyBhIFRUTCAodGltZS10by1saXZlKSBvbiBhIGtleVxyXG4gKiBzdWNoIHRoYXQgYXV0b21hdGljYWxseSBleHBpcmVzIGFmdGVyIGEgc3BlY2lmaWVkIHRpbWUuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIGtleXMgd2lsbCBleHBpcmUgd2l0aCB7QGxpbmsgZGVmYXVsdFRUTE1zfS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUVExDYWNoZTxUPiBpbXBsZW1lbnRzIElDYWNoZTxUPiB7XHJcbiAgICBwcml2YXRlIGNhY2hlXzoge1trZXk6IHN0cmluZ106IFRUTFdyYXBwZXI8VD59ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZhdWx0VFRMTXM6IG51bWJlcikge31cclxuXHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY2FjaGVfW2tleV07XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBpdCBhbHNvIHJlc3BlY3RzIFRUTFxyXG4gICAgICAgIGlmICh2YWx1ZS5leHBpcmVzRXBvY2ggPCBEYXRlLm5vdygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JUaHJvdyhrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGtleSAke2tleX0gZG9lcyBub3QgZXhpc3QgaW4gbWFwIFtnZXRPclRocm93XWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpdGhUVEwoa2V5OiBzdHJpbmcsIHZhbHVlOiBULCB0dGxNczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZV9ba2V5XSA9IHtcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIGV4cGlyZXNFcG9jaDogRGF0ZS5ub3coKSArIHR0bE1zLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMuc2V0V2l0aFRUTChrZXksIHZhbHVlLCB0aGlzLmRlZmF1bHRUVExNcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNhY2hlXykubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogU2ltaWxhciB0byBhIHByb21pc2UsIGJ1dCBhbGxvd3MgdGhlIGFiaWxpdHkgdG8gcmVzb2x2ZS9yZWplY3QgaW4gYSBkaWZmZXJlbnQgY29udGV4dFxuICogKi9cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZFByb21pc2U8VD4ge1xuICAgIHByaXZhdGUgcmVzb2x2ZV86ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcmVqZWN0XzogKChyZWFzb246IHN0cmluZykgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9taXNlXzogUHJvbWlzZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdF8gPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFQpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlXyEodmFsdWUpO1xuICAgIH1cblxuICAgIHJlamVjdChyZWFzb246IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlamVjdF8hKHJlYXNvbik7XG4gICAgfVxuXG4gICAgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gICAgfVxufVxuIiwiaW1wb3J0IHtTaW1wbGVIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmludGVyZmFjZSBTdGlja2VyIHtcclxuICAgIHNsb3Q6IG51bWJlcjtcclxuICAgIHN0aWNrZXJJZDogbnVtYmVyO1xyXG4gICAgY29kZW5hbWU/OiBzdHJpbmc7XHJcbiAgICBtYXRlcmlhbD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICB3ZWFyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1JbmZvIHtcclxuICAgIHN0aWNrZXJzOiBTdGlja2VyW107XHJcbiAgICBpdGVtaWQ6IHN0cmluZztcclxuICAgIGRlZmluZGV4OiBudW1iZXI7XHJcbiAgICBwYWludGluZGV4OiBudW1iZXI7XHJcbiAgICByYXJpdHk6IG51bWJlcjtcclxuICAgIHF1YWxpdHk6IG51bWJlcjtcclxuICAgIHBhaW50c2VlZDogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5OiBudW1iZXI7XHJcbiAgICBvcmlnaW46IG51bWJlcjtcclxuICAgIHM6IHN0cmluZztcclxuICAgIGE6IHN0cmluZztcclxuICAgIGQ6IHN0cmluZztcclxuICAgIG06IHN0cmluZztcclxuICAgIGZsb2F0dmFsdWU6IG51bWJlcjtcclxuICAgIGltYWdldXJsOiBzdHJpbmc7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICAgIG1heDogbnVtYmVyO1xyXG4gICAgd2VhcG9uX3R5cGU/OiBzdHJpbmc7XHJcbiAgICBpdGVtX25hbWU/OiBzdHJpbmc7XHJcbiAgICByYXJpdHlfbmFtZT86IHN0cmluZztcclxuICAgIHF1YWxpdHlfbmFtZT86IHN0cmluZztcclxuICAgIG9yaWdpbl9uYW1lPzogc3RyaW5nO1xyXG4gICAgd2Vhcl9uYW1lPzogc3RyaW5nO1xyXG4gICAgZnVsbF9pdGVtX25hbWU/OiBzdHJpbmc7XHJcbiAgICBsb3dfcmFuaz86IG51bWJlcjtcclxuICAgIGhpZ2hfcmFuaz86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZXRjaEluc3BlY3RJbmZvUmVxdWVzdCB7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBsaXN0UHJpY2U/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hJbnNwZWN0SW5mb1Jlc3BvbnNlIHtcclxuICAgIGl0ZW1pbmZvOiBJdGVtSW5mbztcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmV0Y2hJbnNwZWN0SW5mbyA9IG5ldyBTaW1wbGVIYW5kbGVyPEZldGNoSW5zcGVjdEluZm9SZXF1ZXN0LCBGZXRjaEluc3BlY3RJbmZvUmVzcG9uc2U+KFxyXG4gICAgUmVxdWVzdFR5cGUuRkVUQ0hfSU5TUEVDVF9JTkZPLFxyXG4gICAgKHJlcSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5jc2dvZmxvYXQuY29tLz91cmw9JHtyZXEubGlua30mbWluaW1hbD10cnVlJHtcclxuICAgICAgICAgICAgcmVxLmxpc3RQcmljZSA/ICcmbGlzdFByaWNlPScgKyByZXEubGlzdFByaWNlIDogJydcclxuICAgICAgICB9YDtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVXJsKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChqc29uOiBGZXRjaEluc3BlY3RJbmZvUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGpzb24uZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSBhcyBQcm9taXNlPEZldGNoSW5zcGVjdEluZm9SZXNwb25zZT47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCB7QXNzZXR9IGZyb20gJy4uL3R5cGVzL3N0ZWFtJztcbmltcG9ydCB7SXRlbUluZm99IGZyb20gJy4uL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9pbnNwZWN0X2luZm8nO1xuaW1wb3J0IHtnZXREb3BwbGVyUGhhc2UsIGhhc0RvcHBsZXJQaGFzZX0gZnJvbSAnLi9kb3BwbGVycyc7XG5pbXBvcnQge2h0bWwsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VGcm9tV2Vhcih3ZWFyOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCB7XG4gICAgY29uc3Qgd2VhclJhbmdlczogW251bWJlciwgbnVtYmVyXVtdID0gW1xuICAgICAgICBbMC4wLCAwLjA3XSxcbiAgICAgICAgWzAuMDcsIDAuMTVdLFxuICAgICAgICBbMC4xNSwgMC4zOF0sXG4gICAgICAgIFswLjM4LCAwLjQ1XSxcbiAgICAgICAgWzAuNDUsIDEuMF0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2Ygd2VhclJhbmdlcykge1xuICAgICAgICBpZiAod2VhciA+IHJhbmdlWzBdICYmIHdlYXIgPD0gcmFuZ2VbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG93ZXN0UmFuayhpbmZvOiBJdGVtSW5mbyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFpbmZvLmxvd19yYW5rICYmICFpbmZvLmhpZ2hfcmFuaykge1xuICAgICAgICAvLyBJdGVtIGhhcyBubyByYW5rIHRvIHJldHVyblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChpbmZvLmxvd19yYW5rIHx8IDEwMDEpIDwgKGluZm8uaGlnaF9yYW5rIHx8IDEwMDEpID8gaW5mby5sb3dfcmFuayA6IGluZm8uaGlnaF9yYW5rO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYW5rKGluZm86IEl0ZW1JbmZvKToge29yZGVyOiBPcmRlclR5cGU7IHJhbms6IG51bWJlcn0gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHJhbmsgPSBnZXRMb3dlc3RSYW5rKGluZm8pO1xuICAgIGlmIChyYW5rICYmIHJhbmsgPD0gMTAwMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXI6IHJhbmsgPT09IGluZm8ubG93X3JhbmsgPyBPcmRlclR5cGUuTE9XX1JBTksgOiBPcmRlclR5cGUuSElHSF9SQU5LLFxuICAgICAgICAgICAgcmFuayxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGbG9hdFdpdGhSYW5rKGluZm86IEl0ZW1JbmZvLCBwcmVjaXNpb25EaWdpdHMgPSAxNCk6IHN0cmluZyB7XG4gICAgbGV0IHIgPSBpbmZvLmZsb2F0dmFsdWUudG9GaXhlZChwcmVjaXNpb25EaWdpdHMpO1xuXG4gICAgY29uc3QgcmFua2VkID0gcGFyc2VSYW5rKGluZm8pO1xuICAgIGlmIChyYW5rZWQpIHtcbiAgICAgICAgciArPSBgICgjJHtyYW5rZWQucmFua30pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNlZWQoaW5mbzogSXRlbUluZm8pOiBzdHJpbmcge1xuICAgIGxldCByID0gaW5mby5wYWludHNlZWQudG9TdHJpbmcoKTtcblxuICAgIGlmIChoYXNEb3BwbGVyUGhhc2UoaW5mby5wYWludGluZGV4KSkge1xuICAgICAgICByICs9IGAgKCR7Z2V0RG9wcGxlclBoYXNlKGluZm8ucGFpbnRpbmRleCl9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG59XG5cbmVudW0gT3JkZXJUeXBlIHtcbiAgICBMT1dfUkFOSyA9IDEsXG4gICAgSElHSF9SQU5LID0gLTEsXG59XG5cbi8qKlxuICogR2V0cyBmb3JtYXR0ZWQgbGluayBmb3IgZmxvYXRkYiBmb3IgdGhlIHNwZWNpZmllZCBpdGVtIHR5cGUgYW5kIG9yZGVyXG4gKiBAcGFyYW0gaW5mbyBpdGVtIHByb3BlcnRpZXMgZGljdFxuICogQHBhcmFtIG9yZGVyIDEgZm9yIGxvdyBmbG9hdCwgLTEgZm9yIGhpZ2ggZmxvYXQgb3JkZXJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0RmxvYXREYkxpbmsoaW5mbzogSXRlbUluZm8sIG9yZGVyOiBPcmRlclR5cGUpOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldEZsb2F0RGJDYXRlZ29yeShpdGVtOiBJdGVtSW5mbyk6IG51bWJlciB7XG4gICAgICAgIGlmIChpdGVtLmZ1bGxfaXRlbV9uYW1lIS5pbmNsdWRlcygnU3RhdFRyYWsnKSkge1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5mdWxsX2l0ZW1fbmFtZSEuaW5jbHVkZXMoJ1NvdXZlbmlyJykpIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXCJOb3JtYWxcIlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYGh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9kYj9kZWZJbmRleD0ke2luZm8uZGVmaW5kZXh9JnBhaW50SW5kZXg9JHtcbiAgICAgICAgaW5mby5wYWludGluZGV4XG4gICAgfSZvcmRlcj0ke29yZGVyfSZjYXRlZ29yeT0ke2dldEZsb2F0RGJDYXRlZ29yeShpbmZvKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2xpY2thYmxlUmFuayhpbmZvOiBJdGVtSW5mbyk6IFRlbXBsYXRlUmVzdWx0PDE+IHtcbiAgICBjb25zdCBwYXJzZWRSYW5rID0gcGFyc2VSYW5rKGluZm8pO1xuICAgIGlmICghcGFyc2VkUmFuaykge1xuICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYCA8YVxuICAgICAgICBzdHlsZT1cImNvbG9yOiAjZWJlYmViOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcIlxuICAgICAgICBocmVmPVwiJHtnZXRGbG9hdERiTGluayhpbmZvLCBwYXJzZWRSYW5rLm9yZGVyKX1cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgICAgKFJhbmsgIyR7cGFyc2VkUmFuay5yYW5rfSlcbiAgICA8L2E+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2tpbihhc3NldDogQXNzZXQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFhc3NldC50YWdzPy5maW5kKFxuICAgICAgICAoYSkgPT4gYS5jYXRlZ29yeSA9PT0gJ1dlYXBvbicgfHwgKGEuY2F0ZWdvcnkgPT09ICdUeXBlJyAmJiBhLmludGVybmFsX25hbWUgPT09ICdUeXBlX0hhbmRzJylcbiAgICApO1xufVxuIiwiY29uc3QgZG9wcGxlclBoYXNlczoge1twYWludEluZGV4OiBudW1iZXJdOiBzdHJpbmd9ID0ge1xuICAgIDQxODogJ1BoYXNlIDEnLFxuICAgIDQxOTogJ1BoYXNlIDInLFxuICAgIDQyMDogJ1BoYXNlIDMnLFxuICAgIDQyMTogJ1BoYXNlIDQnLFxuICAgIDQxNTogJ1J1YnknLFxuICAgIDQxNjogJ1NhcHBoaXJlJyxcbiAgICA0MTc6ICdCbGFjayBQZWFybCcsXG4gICAgNTY5OiAnUGhhc2UgMScsXG4gICAgNTcwOiAnUGhhc2UgMicsXG4gICAgNTcxOiAnUGhhc2UgMycsXG4gICAgNTcyOiAnUGhhc2UgNCcsXG4gICAgNTY4OiAnRW1lcmFsZCcsXG4gICAgNjE4OiAnUGhhc2UgMicsXG4gICAgNjE5OiAnU2FwcGhpcmUnLFxuICAgIDYxNzogJ0JsYWNrIFBlYXJsJyxcbiAgICA4NTI6ICdQaGFzZSAxJyxcbiAgICA4NTM6ICdQaGFzZSAyJyxcbiAgICA4NTQ6ICdQaGFzZSAzJyxcbiAgICA4NTU6ICdQaGFzZSA0JyxcbiAgICAxMTE5OiAnRW1lcmFsZCcsXG4gICAgMTEyMDogJ1BoYXNlIDEnLFxuICAgIDExMjE6ICdQaGFzZSAyJyxcbiAgICAxMTIyOiAnUGhhc2UgMycsXG4gICAgMTEyMzogJ1BoYXNlIDQnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RvcHBsZXJQaGFzZShwYWludEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gcGFpbnRJbmRleCBpbiBkb3BwbGVyUGhhc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9wcGxlclBoYXNlKHBhaW50SW5kZXg6IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRvcHBsZXJQaGFzZXNbcGFpbnRJbmRleF07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFua0NvbG91cihyYW5rOiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKHJhbmspIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuICcjYzNhNTA4JztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gJyM5YTk5OTknO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiAnIzhhNTkyOSc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmU8VD4oY29tcHV0ZU9iamVjdDogKCkgPT4gVCwgY2I6ICgpID0+IGFueSwgcG9sbFJhdGVNcyA9IDUwKSB7XG4gICAgbGV0IHByZXYgPSBjb21wdXRlT2JqZWN0KCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IGNvbXB1dGVPYmplY3QoKTtcbiAgICAgICAgaWYgKHByZXYgIT09IG5vdykge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2ID0gbm93O1xuICAgIH0sIHBvbGxSYXRlTXMpO1xufVxuIiwiaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4uL2N1c3RvbSc7XHJcbmltcG9ydCB7Q3VzdG9tRWxlbWVudCwgSW5qZWN0QWZ0ZXIsIEluamVjdGlvbk1vZGV9IGZyb20gJy4uL2luamVjdG9ycyc7XHJcbmltcG9ydCB7aHRtbCwgY3NzLCBUZW1wbGF0ZVJlc3VsdCwgSFRNTFRlbXBsYXRlUmVzdWx0fSBmcm9tICdsaXQnO1xyXG5pbXBvcnQge3N0YXRlfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7SW52ZW50b3J5QXNzZXR9IGZyb20gJy4uLy4uL3R5cGVzL3N0ZWFtJztcclxuaW1wb3J0IHtnRmxvYXRGZXRjaGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mbG9hdF9mZXRjaGVyJztcclxuaW1wb3J0IHtJdGVtSW5mb30gZnJvbSAnLi4vLi4vYnJpZGdlL2hhbmRsZXJzL2ZldGNoX2luc3BlY3RfaW5mbyc7XHJcbmltcG9ydCB7Zm9ybWF0U2VlZCwgaXNTa2luLCByZW5kZXJDbGlja2FibGVSYW5rfSBmcm9tICcuLi8uLi91dGlscy9za2luJztcclxuaW1wb3J0IHtPYnNlcnZlfSBmcm9tICcuLi8uLi91dGlscy9vYnNlcnZlcnMnO1xyXG5pbXBvcnQge0ZldGNoU3RhbGxSZXNwb25zZX0gZnJvbSAnLi4vLi4vYnJpZGdlL2hhbmRsZXJzL2ZldGNoX3N0YWxsJztcclxuaW1wb3J0IHtnU3RhbGxGZXRjaGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGFsbF9mZXRjaGVyJztcclxuaW1wb3J0IHtDb250cmFjdH0gZnJvbSAnLi4vLi4vdHlwZXMvZmxvYXRfbWFya2V0JztcclxuXHJcbi8qKlxyXG4gKiBXaHkgZG8gd2UgYmluZCB0byBpdGVtaW5mbzAgQU5EIGl0ZW1pbmZvMT9cclxuICpcclxuICogU3RlYW0gdXNlcyB0d28gZGl2cyB0aGF0IGFyZSBpbnRlcmNoYW5nZWQgKHByZXN1bWFibHkgdG8gbWFrZSBhIFwiZmFkZVwiIGFuaW1hdGlvbiBiZXR3ZWVuIHRoZW0pIGZvciBlYWNoIHNlbGVjdGVkXHJcbiAqIGl0ZW0gY2xpY2suXHJcbiAqL1xyXG5AQ3VzdG9tRWxlbWVudCgpXHJcbkBJbmplY3RBZnRlcignZGl2I2l0ZW1pbmZvMF9jb250ZW50IC5pdGVtX2Rlc2NfZGVzY3JpcHRpb24gZGl2Lml0ZW1fZGVzY19nYW1lX2luZm8nLCBJbmplY3Rpb25Nb2RlLkNPTlRJTlVPVVMpXHJcbkBJbmplY3RBZnRlcignZGl2I2l0ZW1pbmZvMV9jb250ZW50IC5pdGVtX2Rlc2NfZGVzY3JpcHRpb24gZGl2Lml0ZW1fZGVzY19nYW1lX2luZm8nLCBJbmplY3Rpb25Nb2RlLkNPTlRJTlVPVVMpXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZEl0ZW1JbmZvIGV4dGVuZHMgRmxvYXRFbGVtZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBbXHJcbiAgICAgICAgLi4uRmxvYXRFbGVtZW50LnN0eWxlcyxcclxuICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hcmtldC1idG4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4ICM1YTVhNWEgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWFya2V0LWJ0biB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWJlYmViO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgIF07XHJcblxyXG4gICAgQHN0YXRlKClcclxuICAgIHByaXZhdGUgaXRlbUluZm86IEl0ZW1JbmZvIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIEBzdGF0ZSgpXHJcbiAgICBwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YWxsOiBGZXRjaFN0YWxsUmVzcG9uc2UgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgZ2V0IGFzc2V0KCk6IEludmVudG9yeUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gZ19BY3RpdmVJbnZlbnRvcnk/LnNlbGVjdGVkSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5zcGVjdExpbmsoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXNzZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0LmRlc2NyaXB0aW9uPy5hY3Rpb25zIHx8IHRoaXMuYXNzZXQuZGVzY3JpcHRpb24/LmFjdGlvbnM/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIWdfQWN0aXZlSW52ZW50b3J5Py5tX293bmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2V0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgID8uYWN0aW9ucyFbMF0ubGluay5yZXBsYWNlKCclb3duZXJfc3RlYW1pZCUnLCBnX0FjdGl2ZUludmVudG9yeS5tX293bmVyLnN0clN0ZWFtSWQhKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnJWFzc2V0aWQlJywgdGhpcy5hc3NldC5hc3NldGlkISk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YWxsTGlzdGluZygpOiBDb250cmFjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5zdGFsbC5saXN0aW5ncyB8fCBbXSkuZmluZCgoZSkgPT4gZS5pdGVtLmFzc2V0X2lkID09PSB0aGlzLmFzc2V0Py5hc3NldGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IEhUTUxUZW1wbGF0ZVJlc3VsdCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1JbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5GbG9hdDogJHt0aGlzLml0ZW1JbmZvLmZsb2F0dmFsdWUudG9GaXhlZCgxNCl9ICR7cmVuZGVyQ2xpY2thYmxlUmFuayh0aGlzLml0ZW1JbmZvKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+UGFpbnQgU2VlZDogJHtmb3JtYXRTZWVkKHRoaXMuaXRlbUluZm8pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckxpc3RPbkNTR09GbG9hdCgpfSAke3RoaXMucmVuZGVyRmxvYXRNYXJrZXRMaXN0aW5nKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmxvYXRNYXJrZXRMaXN0aW5nKCk6IFRlbXBsYXRlUmVzdWx0PDE+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhbGxMaXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmtldC1idG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1hcmtldC1idG5cIiBocmVmPVwiaHR0cHM6Ly9jc2dvZmxvYXQuY29tL2l0ZW0vJHt0aGlzLnN0YWxsTGlzdGluZy5pZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9hc3NldHMvZnVsbF9sb2dvLnBuZ1wiIGhlaWdodD1cIjIxXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDVweDtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiQkeyh0aGlzLnN0YWxsTGlzdGluZy5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxpc3RPbkNTR09GbG9hdCgpOiBUZW1wbGF0ZVJlc3VsdDwxPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhbGxMaXN0aW5nKSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHRlbGwgdGhlbSB0byBsaXN0IGl0IGlmIGl0J3MgYWxyZWFkeSBsaXN0ZWQuLi5cclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnX0FjdGl2ZUludmVudG9yeT8ubV9vd25lcj8uc3RyU3RlYW1JZCAhPT0gZ19zdGVhbUlEKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdCB0aGUgc2lnbmVkLWluIHVzZXIsIGRvbid0IHNob3dcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFya2V0LWJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWFya2V0LWJ0blwiIGhyZWY9XCJodHRwczovL2NzZ29mbG9hdC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaXN0IG9uIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9hc3NldHMvZnVsbF9sb2dvLnBuZ1wiIGhlaWdodD1cIjIxXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4O1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc1NlbGVjdENoYW5nZSgpIHtcclxuICAgICAgICAvLyBSZXNldCBzdGF0ZSBpbi1jYXNlIHRoZXkgc3dhcCBiZXR3ZWVuIHNraW4gYW5kIG5vbi1za2luXHJcbiAgICAgICAgdGhpcy5pdGVtSW5mbyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghaXNTa2luKHRoaXMuYXNzZXQuZGVzY3JpcHRpb24pKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIENvbW1vZGl0aWVzIHdvbid0IGhhdmUgaW5zcGVjdCBsaW5rc1xyXG4gICAgICAgIGlmICghdGhpcy5pbnNwZWN0TGluaykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmZvID0gYXdhaXQgZ0Zsb2F0RmV0Y2hlci5mZXRjaCh7XHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0aGlzLmluc3BlY3RMaW5rLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGZsb2F0IGZvciAke3RoaXMuYXNzZXQuYXNzZXRpZH06ICR7ZS50b1N0cmluZygpfWApO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAvLyBGb3IgdGhlIGluaXRpYWwgbG9hZCwgaW4gY2FzZSBhbiBpdGVtIGlzIHByZS1zZWxlY3RlZFxyXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlbGVjdENoYW5nZSgpO1xyXG5cclxuICAgICAgICBPYnNlcnZlKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmFzc2V0LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTZWxlY3RDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChnX0FjdGl2ZUludmVudG9yeT8ubV9vd25lcj8uc3RyU3RlYW1JZCkge1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzXHJcbiAgICAgICAgICAgIGdTdGFsbEZldGNoZXJcclxuICAgICAgICAgICAgICAgIC5mZXRjaCh7c3RlYW1faWQ2NDogZ19BY3RpdmVJbnZlbnRvcnk/Lm1fb3duZXIuc3RyU3RlYW1JZH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc3RhbGwpID0+ICh0aGlzLnN0YWxsID0gc3RhbGwpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtHZW5lcmljSm9iLCBTaW1wbGVDYWNoZWRRdWV1ZX0gZnJvbSAnLi4vdXRpbHMvcXVldWUnO1xyXG5pbXBvcnQge0ZldGNoU3RhbGwsIEZldGNoU3RhbGxSZXF1ZXN0LCBGZXRjaFN0YWxsUmVzcG9uc2V9IGZyb20gJy4uL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9zdGFsbCc7XHJcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vYnJpZGdlL2NsaWVudCc7XHJcblxyXG5jbGFzcyBTdGFsbEZldGNoZXIgZXh0ZW5kcyBTaW1wbGVDYWNoZWRRdWV1ZTxGZXRjaFN0YWxsUmVxdWVzdCwgRmV0Y2hTdGFsbFJlc3BvbnNlPiB7XHJcbiAgICBmZXRjaChyZXE6IEZldGNoU3RhbGxSZXF1ZXN0KTogUHJvbWlzZTxGZXRjaFN0YWxsUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGQobmV3IEdlbmVyaWNKb2IocmVxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHByb2Nlc3MocmVxOiBGZXRjaFN0YWxsUmVxdWVzdCk6IFByb21pc2U8RmV0Y2hTdGFsbFJlc3BvbnNlPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IENsaWVudFNlbmQoRmV0Y2hTdGFsbCwgcmVxKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFN0dWIgb3V0IHRvIHByZXZlbnQgZnV0dXJlIGNhbGxzXHJcbiAgICAgICAgICAgIHJldHVybiB7bGlzdGluZ3M6IFtdfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnU3RhbGxGZXRjaGVyID0gbmV3IFN0YWxsRmV0Y2hlcigxKTtcclxuIiwiaW1wb3J0IHtTaW1wbGVIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge0NvbnRyYWN0LCBVc2VyfSBmcm9tICcuLi8uLi90eXBlcy9mbG9hdF9tYXJrZXQnO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hTdGFsbFJlcXVlc3Qge1xyXG4gICAgc3RlYW1faWQ2NDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoU3RhbGxSZXNwb25zZSB7XHJcbiAgICBsaXN0aW5ncz86IENvbnRyYWN0W107XHJcbiAgICB1c2VyPzogVXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZXRjaFN0YWxsUmVzcG9uc2VFcnJvciB7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZldGNoU3RhbGwgPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaFN0YWxsUmVxdWVzdCwgRmV0Y2hTdGFsbFJlc3BvbnNlPihcclxuICAgIFJlcXVlc3RUeXBlLkZFVENIX1NUQUxMLFxyXG4gICAgYXN5bmMgKHJlcSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9jc2dvZmxvYXQuY29tL2FwaS92MS91c2Vycy8ke3JlcS5zdGVhbV9pZDY0fS9zdGFsbGApLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oKGpzb246IEZldGNoU3RhbGxSZXNwb25zZSB8IEZldGNoU3RhbGxSZXNwb25zZUVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigoanNvbiBhcyBGZXRjaFN0YWxsUmVzcG9uc2VFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pIGFzIFByb21pc2U8RmV0Y2hTdGFsbFJlc3BvbnNlPjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4uL2N1c3RvbSc7XG5pbXBvcnQge0N1c3RvbUVsZW1lbnQsIEluamVjdEFmdGVyLCBJbmplY3Rpb25Nb2RlfSBmcm9tICcuLi9pbmplY3RvcnMnO1xuaW1wb3J0IHtjc3MsIGh0bWwsIEhUTUxUZW1wbGF0ZVJlc3VsdCwgbm90aGluZ30gZnJvbSAnbGl0JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7SW52ZW50b3J5QXNzZXR9IGZyb20gJy4uLy4uL3R5cGVzL3N0ZWFtJztcbmltcG9ydCB7T2JzZXJ2ZX0gZnJvbSAnLi4vLi4vdXRpbHMvb2JzZXJ2ZXJzJztcbmltcG9ydCB7Z0ZhbGxiYWNrSW52ZW50b3J5RmV0Y2hlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFsbGJhY2tfaW52ZW50b3J5X2ZldGNoZXInO1xuXG4vKipcbiAqIEFubm90YXRlcyB0aGUgZXhwaXJhdGlvbiB0aW1lIG9mIGFuIHVudHJhZGFibGUgaXRlbSBpZiByZWxldmFudFxuICovXG5AQ3VzdG9tRWxlbWVudCgpXG5ASW5qZWN0QWZ0ZXIoJ2RpdiNpdGVtaW5mbzBfY29udGVudCAuaXRlbV9kZXNjX2Rlc2NyaXB0aW9uJywgSW5qZWN0aW9uTW9kZS5DT05USU5VT1VTKVxuQEluamVjdEFmdGVyKCdkaXYjaXRlbWluZm8xX2NvbnRlbnQgLml0ZW1fZGVzY19kZXNjcmlwdGlvbicsIEluamVjdGlvbk1vZGUuQ09OVElOVU9VUylcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZEl0ZW1JbmZvRXhwaXJ5IGV4dGVuZHMgRmxvYXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gW1xuICAgICAgICAuLi5GbG9hdEVsZW1lbnQuc3R5bGVzLFxuICAgICAgICBjc3NgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdG9yIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgNjQsIDY0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICBdO1xuXG4gICAgQHN0YXRlKClcbiAgICBwcml2YXRlIGV4cGlyZXNBdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgZ2V0IGFzc2V0KCk6IEludmVudG9yeUFzc2V0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIGdfQWN0aXZlSW52ZW50b3J5Py5zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgZ2V0IG93bmVySWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIGdfQWN0aXZlSW52ZW50b3J5Py5tX293bmVyPy5zdHJTdGVhbUlkO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogSFRNTFRlbXBsYXRlUmVzdWx0IHtcbiAgICAgICAgaWYgKCF0aGlzLmV4cGlyZXNBdCkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgRGF0ZS50b0dNVFN0cmluZygpIGRvZXMgZXhpc3Qgb24gbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBEYXRlKHRoaXMuZXhwaXJlc0F0KS50b0dNVFN0cmluZygpO1xuXG4gICAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdG9yXCI+VHJhZGFibGUgQWZ0ZXIgJHtmb3JtYXR0ZWR9PC9kaXY+XG4gICAgICAgIDwvZGl2PiBgO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NTZWxlY3RDaGFuZ2UoKSB7XG4gICAgICAgIC8vIFJlc2V0Li4uXG4gICAgICAgIHRoaXMuZXhwaXJlc0F0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5vd25lcklkIHx8ICF0aGlzLmFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZ0ZhbGxiYWNrSW52ZW50b3J5RmV0Y2hlci5mZXRjaCh7c3RlYW1pZF82NDogdGhpcy5vd25lcklkfSk7XG5cbiAgICAgICAgY29uc3QgYXNzZXREZXRhaWxzID0gcmVzcC5yZ0ludmVudG9yeSAmJiByZXNwLnJnSW52ZW50b3J5W3RoaXMuYXNzZXQuYXNzZXRpZF07XG4gICAgICAgIGlmICghYXNzZXREZXRhaWxzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgcmVzcC5yZ0Rlc2NyaXB0aW9ucyAmJiByZXNwLnJnRGVzY3JpcHRpb25zW2Ake2Fzc2V0RGV0YWlscy5jbGFzc2lkfV8ke2Fzc2V0RGV0YWlscy5pbnN0YW5jZWlkfWBdO1xuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbi50cmFkYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5leHBpcmVzQXQgPSBkZXNjcmlwdGlvbi5jYWNoZV9leHBpcmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgLy8gRm9yIHRoZSBpbml0aWFsIGxvYWQsIGluIGNhc2UgYW4gaXRlbSBpcyBwcmUtc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5wcm9jZXNzU2VsZWN0Q2hhbmdlKCk7XG5cbiAgICAgICAgT2JzZXJ2ZShcbiAgICAgICAgICAgICgpID0+IHRoaXMuYXNzZXQsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VsZWN0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHZW5lcmljSm9iLCBTaW1wbGVDYWNoZWRRdWV1ZX0gZnJvbSAnLi4vdXRpbHMvcXVldWUnO1xuXG5pbnRlcmZhY2UgRmV0Y2hGYWxsYmFja0ludmVudG9yeVJlcXVlc3Qge1xuICAgIHN0ZWFtaWRfNjQ6IHN0cmluZztcbn1cblxudHlwZSBDbGFzc0lkID0gbnVtYmVyO1xudHlwZSBJbnN0YW5jZUlkID0gbnVtYmVyO1xuXG5pbnRlcmZhY2UgRmFsbGJhY2tBc3NldCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBjb250ZXh0aWQ6IG51bWJlcjtcbiAgICBhc3NldGlkOiBudW1iZXI7XG4gICAgY2xhc3NpZDogQ2xhc3NJZDtcbiAgICBpbnN0YW5jZWlkOiBJbnN0YW5jZUlkO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIHBvczogbnVtYmVyO1xufVxuXG50eXBlIGRlc2NyaXB0aW9uS2V5ID0gYCR7Q2xhc3NJZH1fJHtJbnN0YW5jZUlkfWA7XG5cbmludGVyZmFjZSBGZXRjaEZhbGxiYWNrSW52ZW50b3J5UmVzcG9uc2Uge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgcmdJbnZlbnRvcnk6IHtbYXNzZXRJZDogc3RyaW5nXTogRmFsbGJhY2tBc3NldH07XG4gICAgcmdEZXNjcmlwdGlvbnM6IHtcbiAgICAgICAgW2tleTogZGVzY3JpcHRpb25LZXldOiB7XG4gICAgICAgICAgICB0cmFkYWJsZTogYm9vbGVhbjtcbiAgICAgICAgICAgIGNhY2hlX2V4cGlyYXRpb246IHN0cmluZztcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEZldGNoZXMgdXNpbmcgYSBkZXByZWNhdGVkIFN0ZWFtIGludmVudG9yeSBlbmRwb2ludCB0aGF0IGhhcyBzb21lIGZpZWxkc1xuICogdGhlIG5ld2VyIG9uZXMgZG9uJ3QgKGllLiB0cmFkZSBob2xkIGV4cGlyeSlcbiAqL1xuY2xhc3MgRmFsbGJhY2tJbnZlbnRvcnlGZXRjaGVyIGV4dGVuZHMgU2ltcGxlQ2FjaGVkUXVldWU8XG4gICAgRmV0Y2hGYWxsYmFja0ludmVudG9yeVJlcXVlc3QsXG4gICAgRmV0Y2hGYWxsYmFja0ludmVudG9yeVJlc3BvbnNlXG4+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqIGFsbG93IHVwIHRvIDUgc2ltdWx0YW5lb3VzIHJlcSAqL1xuICAgICAgICBzdXBlcig1KTtcbiAgICB9XG5cbiAgICBmZXRjaChyZXE6IEZldGNoRmFsbGJhY2tJbnZlbnRvcnlSZXF1ZXN0KTogUHJvbWlzZTxGZXRjaEZhbGxiYWNrSW52ZW50b3J5UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBHZW5lcmljSm9iKHJlcSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBwcm9jZXNzKHJlcTogRmV0Y2hGYWxsYmFja0ludmVudG9yeVJlcXVlc3QpOiBQcm9taXNlPEZldGNoRmFsbGJhY2tJbnZlbnRvcnlSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL3Byb2ZpbGVzLyR7cmVxLnN0ZWFtaWRfNjR9L2ludmVudG9yeS9qc29uLzczMC8yP2w9ZW5nbGlzaGApLnRoZW4oXG4gICAgICAgICAgICBhc3luYyAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZmFpbGVkIHRvIGZldGNoIGludmVudG9yeTogJHtyZXNwLnRleHQoKS50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnRmFsbGJhY2tJbnZlbnRvcnlGZXRjaGVyID0gbmV3IEZhbGxiYWNrSW52ZW50b3J5RmV0Y2hlcigpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQge2luaXR9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2ludmVudG9yeS9pbnZlbnRvcnlfaXRlbV9ob2xkZXJfbWV0YWRhdGEnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2ludmVudG9yeS9zZWxlY3RlZF9pdGVtX2luZm8nO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2ludmVudG9yeS9zZWxlY3RlZF9pdGVtX2luZm9fZXhwaXJ5JztcblxuaW5pdCgnc3JjL2xpYi9wYWdlX3NjcmlwdHMvaW52ZW50b3J5LmpzJywgbWFpbik7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgaW5qZWN0SW52ZW50b3J5RmFsbGJhY2soKTtcbn1cblxuZnVuY3Rpb24gaW5qZWN0SW52ZW50b3J5RmFsbGJhY2soKSB7XG4gICAgLypcbiAgICAgICAgU3RlYW0gaW52ZW50b3JpZXMgYXJlIGEgbWVzcywgYWRkcyBhIGZhbGxiYWNrIG9udG8gYSBkZXByZWNhdGVkIGludmVudG9yeSBlbmRwb2ludFxuICAgICAgICBXZSBlZmZlY3RpdmVseSBqdXN0IG92ZXJyaWRlIHNvbWUgb2YgdGhlIGludmVudG9yeSBVUkwgZnVuY3Rpb25zXG4gICAgICovXG5cbiAgICBsZXQgZ19JbnZlbnRvcnlGYWxsYmFja0NTR09GbG9hdCA9IGZhbHNlO1xuXG4gICAgQ0ludmVudG9yeS5wcm90b3R5cGUuZ19HZXRJbnZlbnRvcnlMb2FkVVJMID0gQ0ludmVudG9yeS5wcm90b3R5cGUuR2V0SW52ZW50b3J5TG9hZFVSTDtcbiAgICBDSW52ZW50b3J5LnByb3RvdHlwZS5nX0FkZEludmVudG9yeURhdGEgPSBDSW52ZW50b3J5LnByb3RvdHlwZS5BZGRJbnZlbnRvcnlEYXRhO1xuICAgIENJbnZlbnRvcnkucHJvdG90eXBlLmdfU2hvd0ludmVudG9yeUxvYWRFcnJvciA9IENJbnZlbnRvcnkucHJvdG90eXBlLlNob3dJbnZlbnRvcnlMb2FkRXJyb3I7XG5cbiAgICBDSW52ZW50b3J5LnByb3RvdHlwZS5HZXRJbnZlbnRvcnlMb2FkVVJMID0gZnVuY3Rpb24gQ0ludmVudG9yeV9HZXRJbnZlbnRvcnlMb2FkVVJMX0NTR09GbG9hdCgpIHtcbiAgICAgICAgaWYgKGdfSW52ZW50b3J5RmFsbGJhY2tDU0dPRmxvYXQpIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vcHJvZmlsZXMvJHt0aGlzLm1fc3RlYW1pZH0vaW52ZW50b3J5L2pzb24vJHt0aGlzLm1fYXBwaWR9LyR7dGhpcy5tX2NvbnRleHRpZH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRmFsbGJhY2sgdG8gdGhlIHVwc3RyZWFtIG1ldGhvZCAqL1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ19HZXRJbnZlbnRvcnlMb2FkVVJMKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJmYWNlIEZhbGxiYWNrQXNzZXQge1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICBjb250ZXh0aWQ6IG51bWJlcjtcbiAgICAgICAgYXNzZXRpZDogbnVtYmVyO1xuICAgICAgICBjbGFzc2lkOiBudW1iZXI7XG4gICAgICAgIGluc3RhbmNlaWQ6IG51bWJlcjtcbiAgICAgICAgYW1vdW50OiBudW1iZXI7XG4gICAgICAgIHBvczogbnVtYmVyO1xuICAgIH1cbiAgICBpbnRlcmZhY2UgRmFsbGJhY2tSZXNwb25zZSB7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIHJnSW52ZW50b3J5OiB7W2Fzc2V0SWQ6IHN0cmluZ106IEZhbGxiYWNrQXNzZXR9O1xuICAgICAgICByZ0Rlc2NyaXB0aW9uczogYW55O1xuICAgIH1cblxuICAgIENJbnZlbnRvcnkucHJvdG90eXBlLkFkZEludmVudG9yeURhdGEgPSBmdW5jdGlvbiBDSW52ZW50b3J5X0FkZEludmVudG9yeURhdGFfQ1NHT0Zsb2F0KGRhdGE6IEZhbGxiYWNrUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFnX0ludmVudG9yeUZhbGxiYWNrQ1NHT0Zsb2F0KSB7XG4gICAgICAgICAgICAvKiB1cHN0cmVhbSBjYW4gaGFuZGxlICovXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nX0FkZEludmVudG9yeURhdGEoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBQcmVwcm9jZXNzIHRoZSBkYXRhIHRvIG1hdGNoIHRoZSBvdGhlciBpbnZlbnRvcnkgZm9ybWF0ICovXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhbGVydCgnZmFpbGVkIHRvIGZldGNoIGludmVudG9yeScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXNzZXRzID0gT2JqZWN0LnZhbHVlcyhkYXRhLnJnSW52ZW50b3J5KVxuICAgICAgICAgICAgLm1hcCgoYXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhcHBpZDogdGhpcy5tX2FwcGlkLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0aWQ6IHRoaXMubV9jb250ZXh0aWQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0aWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2lkOiBhc3NldC5jbGFzc2lkLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZWlkOiBhc3NldC5pbnN0YW5jZWlkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGFzc2V0LmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgbV9wb3M6IGFzc2V0LnBvcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm1fcG9zIC0gYi5tX3Bvcyk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0ge1xuICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiBPYmplY3QudmFsdWVzKGRhdGEucmdEZXNjcmlwdGlvbnMpLFxuICAgICAgICAgICAgdG90YWxfaW52ZW50b3J5X2NvdW50OiBNYXRoLm1heCguLi5hc3NldHMubWFwKChlKSA9PiBlLm1fcG9zKSksXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbW9yZV9pdGVtczogMCxcbiAgICAgICAgICAgIHJ3Z3JzbjogLTIsXG4gICAgICAgIH07XG5cbiAgICAgICAgLyogUmVxdWlyZWQgdG8gZm9yY2UgdGhlIHBhZ2UgdG8gbGF6eSBsb2FkIGltYWdlcyBjb3JyZWN0bHkgKi9cbiAgICAgICAgdGhpcy5tX2JOZWVkc1JlcGFnaW5hdGlvbiA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ19BZGRJbnZlbnRvcnlEYXRhKHRyYW5zZm9ybWVkRGF0YSk7XG4gICAgfTtcblxuICAgIENJbnZlbnRvcnkucHJvdG90eXBlLlNob3dJbnZlbnRvcnlMb2FkRXJyb3IgPSBmdW5jdGlvbiBDSW52ZW50b3J5X1Nob3dJbnZlbnRvcnlMb2FkRXJyb3JfQ1NHT0Zsb2F0KCkge1xuICAgICAgICBjb25zdCBwcmV2XyRFcnJvckRpc3BsYXkgPSB0aGlzLm1fJEVycm9yRGlzcGxheTtcblxuICAgICAgICAvKiBIYW5kbGUgdXBzdHJlYW0gbGlrZSBiZWZvcmUgKi9cbiAgICAgICAgdGhpcy5nX1Nob3dJbnZlbnRvcnlMb2FkRXJyb3IoKTtcblxuICAgICAgICBpZiAocHJldl8kRXJyb3JEaXNwbGF5KSB7XG4gICAgICAgICAgICAvKiBFbGVtZW50IGFscmVhZHkgY3JlYXRlZCwgbm90aGluZyBzcGVjaWFsIHRvIGRvICovXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1fJEVycm9yRGlzcGxheS5maW5kKCcucmV0cnlfbG9hZF9idG4nKS5hZnRlcihgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG52Nl9ibHVlX2hvdmVyZmFkZSBidG5fc21hbGwgcmV0cnlfbG9hZF9idG5fY3Nnb2Zsb2F0XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj5cbiAgICAgICAgICAgIDxzcGFuPlRyeSBBZ2FpbiB1c2luZyBDU0dPRmxvYXQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGApO1xuICAgICAgICB0aGlzLm1fJEVycm9yRGlzcGxheS5maW5kKCcucmV0cnlfbG9hZF9idG5fY3Nnb2Zsb2F0JykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgZ19JbnZlbnRvcnlGYWxsYmFja0NTR09GbG9hdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlJldHJ5TG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9