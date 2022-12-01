/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6:
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

/***/ 9:
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

/***/ 2:
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

/***/ 3:
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

/***/ 4:
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

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Version": () => (/* binding */ Version)
/* harmony export */ });
var Version;
(function (Version) {
    Version["V1"] = "CSGOFLOAT_V1";
})(Version || (Version = {}));


/***/ }),

/***/ 5:
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

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SteamButton */
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(368);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
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





var ButtonType;
(function (ButtonType) {
    ButtonType["GreenWhite"] = "green_white";
    ButtonType["GreyWhite"] = "grey_white";
})(ButtonType || (ButtonType = {}));
let SteamButton = class SteamButton extends _custom__WEBPACK_IMPORTED_MODULE_4__.FloatElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.type = ButtonType.GreenWhite;
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.connectedCallback.call(this);
        });
    }
    btnClass() {
        const r = { btn_small: true };
        r[`btn_${this.type}_innerfade`] = true;
        return (0,lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)(r);
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <a class="${this.btnClass()}">
                <span>${this.text}</span>
            </a>
        `;
    }
};
SteamButton.styles = [
    ..._custom__WEBPACK_IMPORTED_MODULE_4__.FloatElement.styles,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
            .btn_green_white_innerfade {
                border-radius: 2px;
                border: none;
                padding: 1px;
                display: inline-block;
                cursor: pointer;
                text-decoration: none !important;
                color: #d2e885 !important;

                background: #a4d007;
                background: -webkit-linear-gradient(top, #a4d007 5%, #536904 95%);
                background: linear-gradient(to bottom, #a4d007 5%, #536904 95%);
            }

            .btn_green_white_innerfade > span {
                border-radius: 2px;
                display: block;

                background: #799905;
                background: -webkit-linear-gradient(top, #799905 5%, #536904 95%);
                background: linear-gradient(to bottom, #799905 5%, #536904 95%);
            }

            .btn_green_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover {
                text-decoration: none !important;
                color: #fff !important;

                background: #b6d908;
                background: -webkit-linear-gradient(top, #b6d908 5%, #80a006 95%);
                background: linear-gradient(to bottom, #b6d908 5%, #80a006 95%);
            }

            .btn_green_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span {
                background: #a1bf07;
                background: -webkit-linear-gradient(top, #a1bf07 5%, #80a006 95%);
                background: linear-gradient(to bottom, #a1bf07 5%, #80a006 95%);
            }

            .btn_grey_white_innerfade {
                border-radius: 2px;
                border: none;
                padding: 1px;
                display: inline-block;
                cursor: pointer;
                text-decoration: none !important;
                color: #fff !important;

                background: #acb5bd;
                background: -webkit-linear-gradient(top, #acb5bd 5%, #414a52 95%);
                background: linear-gradient(to bottom, #acb5bd 5%, #414a52 95%);
            }

            .btn_grey_white_innerfade > span {
                border-radius: 2px;
                display: block;

                background: #778088;
                background: -webkit-linear-gradient(top, #778088 5%, #414a52 95%);
                background: linear-gradient(to bottom, #778088 5%, #414a52 95%);
            }

            .btn_grey_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover {
                text-decoration: none !important;
                color: #fff !important;

                background: #cfd8e0;
                background: -webkit-linear-gradient(top, #cfd8e0 5%, #565f67 95%);
                background: linear-gradient(to bottom, #cfd8e0 5%, #565f67 95%);
            }

            .btn_grey_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span {
                background: #99a2aa;
                background: -webkit-linear-gradient(top, #99a2aa 5%, #565f67 95%);
                background: linear-gradient(to bottom, #99a2aa 5%, #565f67 95%);
            }

            .btn_small > span {
                padding: 0 15px;
                font-size: 12px;
                line-height: 20px;
            }
        `,
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: String })
], SteamButton.prototype, "text", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: String })
], SteamButton.prototype, "type", void 0);
SteamButton = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_3__.CustomElement)()
], SteamButton);



/***/ }),

/***/ 24:
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

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomElement": () => (/* binding */ CustomElement),
/* harmony export */   "InjectAppend": () => (/* binding */ InjectAppend),
/* harmony export */   "InjectionMode": () => (/* binding */ InjectionMode)
/* harmony export */ });
/* unused harmony exports InjectBefore, InjectAfter */
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

/***/ 382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchListingTime": () => (/* binding */ fetchListingTime)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function historyRowHashcode(row) {
    const text = row.innerText.replace(/\W/g, '');
    /* Based on https://stackoverflow.com/a/8831937 (Java's hashCode() method) */
    if (text.length === 0) {
        return '';
    }
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash.toString();
}
function getTimestampFromTrade(row) {
    const dateDiv = row.querySelector('.tradehistory_date');
    if (!dateDiv) {
        return null;
    }
    const date = dateDiv.firstChild.nodeValue.trim();
    const time = dateDiv.querySelector('.tradehistory_timestamp').innerText;
    const d = new Date(date);
    const pure = time.replace('am', '').replace('pm', '');
    let hours = parseInt(pure.split(':')[0]);
    const minutes = parseInt(pure.split(':')[1]);
    if (time.includes('pm') && hours !== 12) {
        /* Prevent 12:XXpm from getting 12 hours added */
        hours += 12;
    }
    else if (time.includes('am') && hours === 12) {
        /* Prevent 12:XXam from getting 12 hours instead of being 0 */
        hours -= 12;
    }
    d.setHours(hours);
    d.setMinutes(minutes);
    return d.getTime() / 1000;
}
function hasTradeBeforeTime(hashCode, timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch(`${location.protocol}//${location.host}${location.pathname}?after_time=${timestamp}&l=english`, {
            credentials: 'same-origin',
        });
        const body = yield resp.text();
        if (body.includes('too many requests')) {
            alert('You need to wait a couple seconds before generating the proof due to Valve rate-limits');
            throw 'Too many requests';
        }
        const doc = new DOMParser().parseFromString(body, 'text/html');
        const rows = doc.querySelectorAll('.tradehistoryrow');
        for (const row of rows) {
            const thisCode = historyRowHashcode(row);
            if (thisCode === hashCode) {
                return true;
            }
        }
        return false;
    });
}
function fetchEnglishRow(index) {
    return __awaiter(this, void 0, void 0, function* () {
        let queryParams = location.search;
        if (queryParams === '') {
            queryParams = '?l=english';
        }
        else {
            queryParams += '&l=english';
        }
        /* Forces us to fetch the english version of the row at a given index no matter what */
        const resp = yield fetch(`${location.protocol}//${location.host}${location.pathname}${queryParams}`, {
            credentials: 'same-origin',
        });
        const body = yield resp.text();
        const doc = new DOMParser().parseFromString(body, 'text/html');
        const rows = doc.querySelectorAll('.tradehistoryrow');
        return rows[index];
    });
}
/**
 * Returns the listing time of the row at {@param index}
 * @param index Index of the trade history row on the page
 */
function fetchListingTime(index) {
    return __awaiter(this, void 0, void 0, function* () {
        const node = yield fetchEnglishRow(index);
        const hashCode = historyRowHashcode(node);
        const timestamp = getTimestampFromTrade(node);
        if (!timestamp) {
            throw 'failed timestamp creation';
        }
        let left = 0, right = 60;
        let amt = 0;
        while (left < right && amt < 5) {
            const middle = left + Math.floor((right - left) / 2);
            const hasTrade = yield hasTradeBeforeTime(hashCode, timestamp + middle);
            if (hasTrade) {
                right = middle;
            }
            else {
                left = middle;
            }
            amt++;
        }
        /* Hello to all the reversers */
        return timestamp + Math.floor((right + left) / 2);
    });
}


/***/ }),

/***/ 381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export TradeProof */
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(382);
/* harmony import */ var _common_ui_steam_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(367);
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






let TradeProof = class TradeProof extends _custom__WEBPACK_IMPORTED_MODULE_3__.FloatElement {
    constructor() {
        super(...arguments);
        this.isProcessing = false;
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.connectedCallback.call(this);
        });
    }
    render() {
        return this.proofNumber
            ? lit__WEBPACK_IMPORTED_MODULE_0__.html ` <span>Proof: ${this.proofNumber}</span> `
            : lit__WEBPACK_IMPORTED_MODULE_0__.html `
                  <csgofloat-steam-button
                      @click="${this.onClick}"
                      .text="${this.isProcessing ? 'Computing Proof...' : 'CSGOFloat Proof'}"
                  >
                  </csgofloat-steam-button>
              `;
    }
    onClick() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isProcessing = true;
            const index = $J('.tradehistoryrow').index($J(this).parent().parent());
            try {
                this.proofNumber = yield (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.fetchListingTime)(index);
            }
            catch (e) {
                alert("Failed to parse time, make sure you're on an english version of the page by appending ?l=english to the url");
            }
            this.isProcessing = false;
        });
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], TradeProof.prototype, "proofNumber", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], TradeProof.prototype, "isProcessing", void 0);
TradeProof = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_2__.CustomElement)(),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_2__.InjectAppend)('.tradehistoryrow .tradehistory_content', _injectors__WEBPACK_IMPORTED_MODULE_2__.InjectionMode.CONTINUOUS)
], TradeProof);



/***/ }),

/***/ 1:
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

/***/ 8:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inPageContext": () => (/* binding */ inPageContext)
/* harmony export */ });
function inPageContext() {
    return !chrome.extension;
}


/***/ }),

/***/ 27:
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

/***/ 17:
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

/***/ 13:
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

/***/ 16:
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

/***/ 14:
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

/***/ 19:
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

/***/ 21:
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

/***/ 22:
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

/***/ 20:
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

/***/ 18:
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

/***/ 15:
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

/***/ 26:
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

/***/ 29:
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

/***/ 369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* binding */ i),
/* harmony export */   "PartType": () => (/* binding */ t),
/* harmony export */   "directive": () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 368:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(369);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive{constructor(t){var i;if(super(t),t.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(s)}const e=i.element.classList;this.nt.forEach((t=>{t in s||(e.remove(t),this.nt.delete(t))}));for(const t in s){const i=!!s[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.nt.add(t)):(e.remove(t),this.nt.delete(t)))}return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange}});
//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ 28:
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

/***/ 12:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   "property": () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
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

/***/ 25:
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


/***/ })

/******/ 	});
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
/* harmony import */ var _components_trade_history_trade_proof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(381);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


(0,_utils__WEBPACK_IMPORTED_MODULE_0__.init)('src/lib/page_scripts/trade_history.js', main);
function main() {
    return __awaiter(this, void 0, void 0, function* () { });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3BhZ2Vfc2NyaXB0cy90cmFkZV9oaXN0b3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBRXhGLFNBQWUsVUFBVSxDQUFZLE9BQWtDLEVBQUUsSUFBUzs7UUFDckYsTUFBTSxNQUFNLEdBQTBCO1lBQ2xDLE9BQU8sRUFBRSw4Q0FBVTtZQUNuQixZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUMvQixPQUFPLEVBQUUsSUFBSTtZQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUM7U0FDOUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQ3RCLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFDbEQsTUFBTSxFQUNOLENBQUMsSUFBNEIsRUFBRSxFQUFFO2dCQUM3QixJQUFJLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLEVBQUU7b0JBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzFCO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjJDO0FBQ1I7QUFDcUI7QUFNbEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1FQUFpQixDQUNqRCxJQUFJLHVEQUFvQixDQUFvQixtRUFBK0IsRUFBRSxDQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTs7SUFDL0YsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFD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Y2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9jc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS93cmFwcGVycy9wcml2aWxlZ2VkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy9jb21tb24vdWkvc3RlYW0tYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy9jdXN0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL2luamVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdHJhZGVfaGlzdG9yeS9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy90cmFkZV9oaXN0b3J5L3RyYWRlX3Byb29mLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGFnZV9zY3JpcHRzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvc25pcHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQvZGVjb3JhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy8uL3NyYy9saWIvcGFnZV9zY3JpcHRzL3RyYWRlX2hpc3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnRlcm5hbFJlcXVlc3RCdW5kbGUsIEludGVybmFsUmVzcG9uc2VCdW5kbGUsIFJlcXVlc3RIYW5kbGVyLCBWZXJzaW9ufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENsaWVudFNlbmQ8UmVxLCBSZXNwPihoYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+LCBhcmdzOiBSZXEpOiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBidW5kbGU6IEludGVybmFsUmVxdWVzdEJ1bmRsZSA9IHtcbiAgICAgICAgdmVyc2lvbjogVmVyc2lvbi5WMSxcbiAgICAgICAgcmVxdWVzdF90eXBlOiBoYW5kbGVyLmdldFR5cGUoKSxcbiAgICAgICAgcmVxdWVzdDogYXJncyxcbiAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDAwKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX0VYVEVOU0lPTl9JRCB8fCBjaHJvbWUucnVudGltZS5pZCxcbiAgICAgICAgICAgIGJ1bmRsZSxcbiAgICAgICAgICAgIChyZXNwOiBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3A/LnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcC5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3A/LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge0VtcHR5UmVzcG9uc2VIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHtQcml2aWxlZ2VkSGFuZGxlcn0gZnJvbSAnLi4vd3JhcHBlcnMvcHJpdmlsZWdlZCc7XHJcblxyXG5pbnRlcmZhY2UgRXhlY3V0ZUNzc1JlcXVlc3Qge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXhlY3V0ZUNzc09uUGFnZSA9IG5ldyBQcml2aWxlZ2VkSGFuZGxlcihcclxuICAgIG5ldyBFbXB0eVJlc3BvbnNlSGFuZGxlcjxFeGVjdXRlQ3NzUmVxdWVzdD4oUmVxdWVzdFR5cGUuRVhFQ1VURV9DU1NfT05fUEFHRSwgYXN5bmMgKHJlcSwgc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogc2VuZGVyLnRhYj8uaWQgYXMgbnVtYmVyfSxcclxuICAgICAgICAgICAgZmlsZXM6IFtyZXEucGF0aF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4pO1xyXG4iLCJpbXBvcnQge0VtcHR5UmVzcG9uc2VIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHtQcml2aWxlZ2VkSGFuZGxlcn0gZnJvbSAnLi4vd3JhcHBlcnMvcHJpdmlsZWdlZCc7XHJcblxyXG5pbnRlcmZhY2UgRXhlY3V0ZVNjcmlwdFJlcXVlc3Qge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXhlY3V0ZVNjcmlwdE9uUGFnZSA9IG5ldyBQcml2aWxlZ2VkSGFuZGxlcihcclxuICAgIG5ldyBFbXB0eVJlc3BvbnNlSGFuZGxlcjxFeGVjdXRlU2NyaXB0UmVxdWVzdD4oUmVxdWVzdFR5cGUuRVhFQ1VURV9TQ1JJUFRfT05fUEFHRSwgYXN5bmMgKHJlcSwgc2VuZGVyKSA9PiB7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byBpbmplY3QgdGhlIGV4dGVuc2lvbiBJRCBkeW5hbWljYWxseSBzbyB0aGUgY2xpZW50IGtub3dzIHdobyB0b1xyXG4gICAgICAgIC8vIGNvbW11bmljYXRlIHdpdGguXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBPbiBGaXJlZm94LCBleHRlbnNpb24gSURzIGFyZSByYW5kb20sIHNvIHRoaXMgaXMgbmVjZXNzYXJ5LlxyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICB3b3JsZDogJ01BSU4nLFxyXG4gICAgICAgICAgICBhcmdzOiBbY2hyb21lLnJ1bnRpbWUuaWQsIGNocm9tZS5ydW50aW1lLmdldFVSTCgnc3JjL21vZGVsX2ZyYW1lLmh0bWwnKV0sXHJcbiAgICAgICAgICAgIGZ1bmM6IGZ1bmN0aW9uIEV4dGVuc2lvbklkKGV4dGVuc2lvbklkLCBtb2RlbEZyYW1lVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX0VYVEVOU0lPTl9JRCA9IGV4dGVuc2lvbklkO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LkNTR09GTE9BVF9NT0RFTF9GUkFNRV9VUkwgPSBtb2RlbEZyYW1lVXJsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogc2VuZGVyLnRhYj8uaWQgYXMgbnVtYmVyfSxcclxuICAgICAgICAgICAgZmlsZXM6IFtyZXEucGF0aF0sXHJcbiAgICAgICAgICAgIHdvcmxkOiAnTUFJTicsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4pO1xyXG4iLCJpbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBNZXNzYWdlU2VuZGVyID0gY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcjtcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlSGFuZGxlcjxSZXEsIFJlc3A+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFJlcXVlc3RUeXBlLCBwcml2YXRlIGhhbmRsZXI6IChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcikgPT4gUHJvbWlzZTxSZXNwPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKHJlcXVlc3QsIHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1wdHkge31cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXB0eVJlcXVlc3RIYW5kbGVyPFJlc3A+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8RW1wdHksIFJlc3A+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogUmVxdWVzdFR5cGUsIHByaXZhdGUgaGFuZGxlcjogKHNlbmRlcjogTWVzc2FnZVNlbmRlcikgPT4gUHJvbWlzZTxSZXNwPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogRW1wdHksIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIoc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzcG9uc2VIYW5kbGVyPFJlcT4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxSZXEsIHZvaWQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogUmVxdWVzdFR5cGUsIHByaXZhdGUgaGFuZGxlcjogKHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKSA9PiBQcm9taXNlPHZvaWQ+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIocmVxdWVzdCwgc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBSZXF1ZXN0VHlwZSB7XHJcbiAgICBFWEVDVVRFX1NDUklQVF9PTl9QQUdFLFxyXG4gICAgRVhFQ1VURV9DU1NfT05fUEFHRSxcclxuICAgIEZFVENIX0lOU1BFQ1RfSU5GTyxcclxuICAgIEZFVENIX1NUQUxMLFxyXG4gICAgU1RPUkFHRV9HRVQsXHJcbiAgICBTVE9SQUdFX1NFVCxcclxuICAgIFNUT1JBR0VfUkVNT1ZFLFxyXG4gICAgQ1NNT05FWV9QUklDRSxcclxuICAgIEZFVENIX1BFTkRJTkdfVFJBREVTLFxyXG4gICAgRkVUQ0hfU0tJTl9NT0RFTCxcclxufVxyXG4iLCJpbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vaGFuZGxlcnMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+O1xyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmVyc2lvbiB7XHJcbiAgICBWMSA9ICdDU0dPRkxPQVRfVjEnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVxdWVzdEJ1bmRsZSB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBJbnB1dCByZXF1ZXN0XHJcbiAgICByZXF1ZXN0OiBhbnk7XHJcblxyXG4gICAgLy8gUmFuZG9tIElEIHRvIGlkZW50aWZ5IHRoZSByZXF1ZXN0XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVzcG9uc2VCdW5kbGUge1xyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBSZXNwb25zZVxyXG4gICAgcmVzcG9uc2U6IGFueTtcclxuXHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIC8vIFJhbmRvbSBJRCB0byBpZGVudGlmeSB0aGUgcmVxdWVzdFxyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4uL2hhbmRsZXJzL3R5cGVzJztcclxuaW1wb3J0IE1lc3NhZ2VTZW5kZXIgPSBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyO1xyXG5cclxuLyoqXHJcbiAqIFJlc3RyaWN0cyBhIGdpdmVuIGhhbmRsZXIgc3VjaCB0aGF0IGl0IGNhbiBvbmx5IHJ1biBpZiB0aGUgc2VuZGVyIGlzXHJcbiAqIHZlcmlmaWVkIHRvIGJlIGZyb20gdGhlIGV4dGVuc2lvbidzIG9yaWdpbiAoaWUuIGNvbnRlbnQgc2NyaXB0KVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByaXZpbGVnZWRIYW5kbGVyPFJlcSwgUmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFuZGxlcjogUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmdldFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgaWYgKHNlbmRlci5pZCAhPT0gY2hyb21lLnJ1bnRpbWUuaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0IHRvIGFjY2VzcyByZXN0cmljdGVkIG1ldGhvZCBvdXRzaWRlIG9mIHNlY3VyZSBjb250ZXh0IChpZS4gY29udGVudCBzY3JpcHQpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZVJlcXVlc3QocmVxdWVzdCwgc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2NzcywgaHRtbH0gZnJvbSAnbGl0JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwLmpzJztcblxuaW1wb3J0IHtwcm9wZXJ0eX0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtDdXN0b21FbGVtZW50fSBmcm9tICcuLi8uLi9pbmplY3RvcnMnO1xuaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4uLy4uL2N1c3RvbSc7XG5cbmVudW0gQnV0dG9uVHlwZSB7XG4gICAgR3JlZW5XaGl0ZSA9ICdncmVlbl93aGl0ZScsXG4gICAgR3JleVdoaXRlID0gJ2dyZXlfd2hpdGUnLFxufVxuXG5AQ3VzdG9tRWxlbWVudCgpXG5leHBvcnQgY2xhc3MgU3RlYW1CdXR0b24gZXh0ZW5kcyBGbG9hdEVsZW1lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogU3RyaW5nfSlcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxuICAgIHByaXZhdGUgdHlwZTogQnV0dG9uVHlwZSA9IEJ1dHRvblR5cGUuR3JlZW5XaGl0ZTtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgICAgIC4uLkZsb2F0RWxlbWVudC5zdHlsZXMsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICAgIC5idG5fZ3JlZW5fd2hpdGVfaW5uZXJmYWRlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJlODg1ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTRkMDA3O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2E0ZDAwNyA1JSwgIzUzNjkwNCA5NSUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhNGQwMDcgNSUsICM1MzY5MDQgOTUlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bl9ncmVlbl93aGl0ZV9pbm5lcmZhZGUgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzk5OTA1O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc5OTkwNSA1JSwgIzUzNjkwNCA5NSUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3OTk5MDUgNSUsICM1MzY5MDQgOTUlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bl9ncmVlbl93aGl0ZV9pbm5lcmZhZGU6bm90KC5idG5fZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpOm5vdCguYnRuX2FjdGl2ZSk6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2I2ZDkwODtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNiNmQ5MDggNSUsICM4MGEwMDYgOTUlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYjZkOTA4IDUlLCAjODBhMDA2IDk1JSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG5fZ3JlZW5fd2hpdGVfaW5uZXJmYWRlOm5vdCguYnRuX2Rpc2FibGVkKTpub3QoOmRpc2FibGVkKTpub3QoLmJ0bl9hY3RpdmUpOm5vdCguYWN0aXZlKTpob3ZlciA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhMWJmMDc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYTFiZjA3IDUlLCAjODBhMDA2IDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ExYmYwNyA1JSwgIzgwYTAwNiA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZXlfd2hpdGVfaW5uZXJmYWRlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWNiNWJkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2FjYjViZCA1JSwgIzQxNGE1MiA5NSUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhY2I1YmQgNSUsICM0MTRhNTIgOTUlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bl9ncmV5X3doaXRlX2lubmVyZmFkZSA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NzgwODg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzc4MDg4IDUlLCAjNDE0YTUyIDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc3ODA4OCA1JSwgIzQxNGE1MiA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZXlfd2hpdGVfaW5uZXJmYWRlOm5vdCguYnRuX2Rpc2FibGVkKTpub3QoOmRpc2FibGVkKTpub3QoLmJ0bl9hY3RpdmUpOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjZmQ4ZTA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjY2ZkOGUwIDUlLCAjNTY1ZjY3IDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2NmZDhlMCA1JSwgIzU2NWY2NyA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZXlfd2hpdGVfaW5uZXJmYWRlOm5vdCguYnRuX2Rpc2FibGVkKTpub3QoOmRpc2FibGVkKTpub3QoLmJ0bl9hY3RpdmUpOm5vdCguYWN0aXZlKTpob3ZlciA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5OWEyYWE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjOTlhMmFhIDUlLCAjNTY1ZjY3IDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzk5YTJhYSA1JSwgIzU2NWY2NyA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX3NtYWxsID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICBdO1xuXG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgYnRuQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHI6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSA9IHtidG5fc21hbGw6IHRydWV9O1xuICAgICAgICByW2BidG5fJHt0aGlzLnR5cGV9X2lubmVyZmFkZWBdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTWFwKHIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8YSBjbGFzcz1cIiR7dGhpcy5idG5DbGFzcygpfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgYDtcbiAgICB9XG59XG4iLCJpbXBvcnQge2NzcywgTGl0RWxlbWVudH0gZnJvbSAnbGl0JztcblxuZnVuY3Rpb24gY2FtZWxUb0Rhc2hDYXNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAuc3BsaXQoLyg/PVtBLVpdKS8pXG4gICAgICAgIC5qb2luKCctJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIExpdEVsZW1lbnQgd3JhcHBlciB3aXRoIGEgcHJlLWRldGVybWluZWQgdGFnXG5leHBvcnQgY2xhc3MgRmxvYXRFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IFtcbiAgICAgICAgY3NzYFxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5Mzk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwIDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWJlYmViO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgICAgICAgICAgaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J251bWJlciddLFxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkwOTA5MDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NvbG9yJ10ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjb2xvciddOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjb2xvciddOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgIF07XG5cbiAgICBzdGF0aWMgdGFnKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgY3Nnb2Zsb2F0LSR7Y2FtZWxUb0Rhc2hDYXNlKHRoaXMubmFtZSl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZWxlbSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZygpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7RmxvYXRFbGVtZW50fSBmcm9tICcuL2N1c3RvbSc7XG5pbXBvcnQge2luUGFnZUNvbnRleHR9IGZyb20gJy4uL3V0aWxzL3NuaXBzJztcblxuZXhwb3J0IGVudW0gSW5qZWN0aW9uTW9kZSB7XG4gICAgLy8gSW5qZWN0cyBvbmNlIGF0IHBhZ2UgbG9hZCBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAgT05DRSxcbiAgICAvLyBDb250aW51YWxseSBpbmplY3RzIHdoZW5ldmVyIG5ldyBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZVxuICAgIC8vIHNlbGVjdG9yIGV4aXN0IHRoYXQgaGF2ZW4ndCBiZWVuIGluamVjdGVkIGludG8geWV0XG4gICAgLy9cbiAgICAvLyBTaG91bGQgYmUgdXNlIGZvciBcImR5bmFtaWNcIiBlbGVtZW50c1xuICAgIENPTlRJTlVPVVMsXG59XG5cbmVudW0gSW5qZWN0aW9uVHlwZSB7XG4gICAgQXBwZW5kLFxuICAgIEJlZm9yZSxcbiAgICBBZnRlcixcbn1cblxuaW50ZXJmYWNlIEluamVjdGlvbkNvbmZpZyB7XG4gICAgZXhpc3RzOiAoY3R4OiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuO1xuICAgIG9wOiAoY3R4OiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCB0YXJnZXQ6IHR5cGVvZiBGbG9hdEVsZW1lbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEluamVjdGlvbkNvbmZpZ3M6IHtba2V5IGluIEluamVjdGlvblR5cGVdOiBJbmplY3Rpb25Db25maWd9ID0ge1xuICAgIFtJbmplY3Rpb25UeXBlLkFwcGVuZF06IHtcbiAgICAgICAgZXhpc3RzOiAoY3R4LCBzZWxlY3RvcikgPT4gISFjdHguY2hpbGRyZW4oc2VsZWN0b3IpLmxlbmd0aCxcbiAgICAgICAgb3A6IChjdHgsIHRhcmdldCkgPT4gY3R4LmFwcGVuZCh0YXJnZXQuZWxlbSgpKSxcbiAgICB9LFxuICAgIFtJbmplY3Rpb25UeXBlLkJlZm9yZV06IHtcbiAgICAgICAgZXhpc3RzOiAoY3R4LCBzZWxlY3RvcikgPT4gISFjdHgucGFyZW50KCkuY2hpbGRyZW4oc2VsZWN0b3IpLmxlbmd0aCxcbiAgICAgICAgb3A6IChjdHgsIHRhcmdldCkgPT4gY3R4LmJlZm9yZSh0YXJnZXQuZWxlbSgpKSxcbiAgICB9LFxuICAgIFtJbmplY3Rpb25UeXBlLkFmdGVyXToge1xuICAgICAgICBleGlzdHM6IChjdHgsIHNlbGVjdG9yKSA9PiAhIWN0eC5wYXJlbnQoKS5jaGlsZHJlbihzZWxlY3RvcikubGVuZ3RoLFxuICAgICAgICBvcDogKGN0eCwgdGFyZ2V0KSA9PiBjdHguYWZ0ZXIodGFyZ2V0LmVsZW0oKSksXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21FbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IHR5cGVvZiBGbG9hdEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgICBpZiAoIWluUGFnZUNvbnRleHQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1c3RvbUVsZW1lbnQodGFyZ2V0LnRhZygpKSh0YXJnZXQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIEluamVjdChzZWxlY3Rvcjogc3RyaW5nLCBtb2RlOiBJbmplY3Rpb25Nb2RlLCB0eXBlOiBJbmplY3Rpb25UeXBlKTogYW55IHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogdHlwZW9mIEZsb2F0RWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmICghaW5QYWdlQ29udGV4dCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEluamVjdGlvbk1vZGUuT05DRTpcbiAgICAgICAgICAgICAgICAkSihzZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEluamVjdGlvbkNvbmZpZ3NbdHlwZV0ub3AoJEoodGhpcyksIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEluamVjdGlvbk1vZGUuQ09OVElOVU9VUzpcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRKKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGFkZCB0aGUgaXRlbSBhZ2FpbiBpZiB3ZSBhbHJlYWR5IGhhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChJbmplY3Rpb25Db25maWdzW3R5cGVdLmV4aXN0cygkSih0aGlzKSwgdGFyZ2V0LnRhZygpKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBJbmplY3Rpb25Db25maWdzW3R5cGVdLm9wKCRKKHRoaXMpLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEluamVjdEFwcGVuZChzZWxlY3Rvcjogc3RyaW5nLCBtb2RlOiBJbmplY3Rpb25Nb2RlID0gSW5qZWN0aW9uTW9kZS5PTkNFKTogYW55IHtcbiAgICByZXR1cm4gSW5qZWN0KHNlbGVjdG9yLCBtb2RlLCBJbmplY3Rpb25UeXBlLkFwcGVuZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmplY3RCZWZvcmUoc2VsZWN0b3I6IHN0cmluZywgbW9kZTogSW5qZWN0aW9uTW9kZSA9IEluamVjdGlvbk1vZGUuT05DRSk6IGFueSB7XG4gICAgcmV0dXJuIEluamVjdChzZWxlY3RvciwgbW9kZSwgSW5qZWN0aW9uVHlwZS5CZWZvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5qZWN0QWZ0ZXIoc2VsZWN0b3I6IHN0cmluZywgbW9kZTogSW5qZWN0aW9uTW9kZSA9IEluamVjdGlvbk1vZGUuT05DRSk6IGFueSB7XG4gICAgcmV0dXJuIEluamVjdChzZWxlY3RvciwgbW9kZSwgSW5qZWN0aW9uVHlwZS5BZnRlcik7XG59XG4iLCJmdW5jdGlvbiBoaXN0b3J5Um93SGFzaGNvZGUocm93OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGV4dCA9IHJvdy5pbm5lclRleHQucmVwbGFjZSgvXFxXL2csICcnKTtcblxuICAgIC8qIEJhc2VkIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84ODMxOTM3IChKYXZhJ3MgaGFzaENvZGUoKSBtZXRob2QpICovXG4gICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaGFyO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wRnJvbVRyYWRlKHJvdzogSFRNTEVsZW1lbnQpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBkYXRlRGl2ID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy50cmFkZWhpc3RvcnlfZGF0ZScpO1xuICAgIGlmICghZGF0ZURpdikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlID0gZGF0ZURpdi5maXJzdENoaWxkIS5ub2RlVmFsdWUhLnRyaW0oKTtcbiAgICBjb25zdCB0aW1lID0gKGRhdGVEaXYucXVlcnlTZWxlY3RvcignLnRyYWRlaGlzdG9yeV90aW1lc3RhbXAnKSEgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dDtcblxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBwdXJlID0gdGltZS5yZXBsYWNlKCdhbScsICcnKS5yZXBsYWNlKCdwbScsICcnKTtcbiAgICBsZXQgaG91cnMgPSBwYXJzZUludChwdXJlLnNwbGl0KCc6JylbMF0pO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChwdXJlLnNwbGl0KCc6JylbMV0pO1xuICAgIGlmICh0aW1lLmluY2x1ZGVzKCdwbScpICYmIGhvdXJzICE9PSAxMikge1xuICAgICAgICAvKiBQcmV2ZW50IDEyOlhYcG0gZnJvbSBnZXR0aW5nIDEyIGhvdXJzIGFkZGVkICovXG4gICAgICAgIGhvdXJzICs9IDEyO1xuICAgIH0gZWxzZSBpZiAodGltZS5pbmNsdWRlcygnYW0nKSAmJiBob3VycyA9PT0gMTIpIHtcbiAgICAgICAgLyogUHJldmVudCAxMjpYWGFtIGZyb20gZ2V0dGluZyAxMiBob3VycyBpbnN0ZWFkIG9mIGJlaW5nIDAgKi9cbiAgICAgICAgaG91cnMgLT0gMTI7XG4gICAgfVxuXG4gICAgZC5zZXRIb3Vycyhob3Vycyk7XG4gICAgZC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgIHJldHVybiBkLmdldFRpbWUoKSAvIDEwMDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc1RyYWRlQmVmb3JlVGltZShoYXNoQ29kZTogc3RyaW5nLCB0aW1lc3RhbXA6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtsb2NhdGlvbi5wYXRobmFtZX0/YWZ0ZXJfdGltZT0ke3RpbWVzdGFtcH0mbD1lbmdsaXNoYCxcbiAgICAgICAge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG4gICAgaWYgKGJvZHkuaW5jbHVkZXMoJ3RvbyBtYW55IHJlcXVlc3RzJykpIHtcbiAgICAgICAgYWxlcnQoJ1lvdSBuZWVkIHRvIHdhaXQgYSBjb3VwbGUgc2Vjb25kcyBiZWZvcmUgZ2VuZXJhdGluZyB0aGUgcHJvb2YgZHVlIHRvIFZhbHZlIHJhdGUtbGltaXRzJyk7XG4gICAgICAgIHRocm93ICdUb28gbWFueSByZXF1ZXN0cyc7XG4gICAgfVxuXG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhib2R5LCAndGV4dC9odG1sJyk7XG4gICAgY29uc3Qgcm93cyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCcudHJhZGVoaXN0b3J5cm93JykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIGNvbnN0IHRoaXNDb2RlID0gaGlzdG9yeVJvd0hhc2hjb2RlKHJvdyk7XG4gICAgICAgIGlmICh0aGlzQ29kZSA9PT0gaGFzaENvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVuZ2xpc2hSb3coaW5kZXg6IG51bWJlcik6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgICBsZXQgcXVlcnlQYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgaWYgKHF1ZXJ5UGFyYW1zID09PSAnJykge1xuICAgICAgICBxdWVyeVBhcmFtcyA9ICc/bD1lbmdsaXNoJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVBhcmFtcyArPSAnJmw9ZW5nbGlzaCc7XG4gICAgfVxuXG4gICAgLyogRm9yY2VzIHVzIHRvIGZldGNoIHRoZSBlbmdsaXNoIHZlcnNpb24gb2YgdGhlIHJvdyBhdCBhIGdpdmVuIGluZGV4IG5vIG1hdHRlciB3aGF0ICovXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7bG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeVBhcmFtc31gLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhib2R5LCAndGV4dC9odG1sJyk7XG4gICAgY29uc3Qgcm93cyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCcudHJhZGVoaXN0b3J5cm93Jyk7XG4gICAgcmV0dXJuIHJvd3NbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxpc3RpbmcgdGltZSBvZiB0aGUgcm93IGF0IHtAcGFyYW0gaW5kZXh9XG4gKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIHRyYWRlIGhpc3Rvcnkgcm93IG9uIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaExpc3RpbmdUaW1lKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IG5vZGUgPSBhd2FpdCBmZXRjaEVuZ2xpc2hSb3coaW5kZXgpO1xuICAgIGNvbnN0IGhhc2hDb2RlID0gaGlzdG9yeVJvd0hhc2hjb2RlKG5vZGUpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wRnJvbVRyYWRlKG5vZGUpO1xuICAgIGlmICghdGltZXN0YW1wKSB7XG4gICAgICAgIHRocm93ICdmYWlsZWQgdGltZXN0YW1wIGNyZWF0aW9uJztcbiAgICB9XG5cbiAgICBsZXQgbGVmdCA9IDAsXG4gICAgICAgIHJpZ2h0ID0gNjA7XG4gICAgbGV0IGFtdCA9IDA7XG4gICAgd2hpbGUgKGxlZnQgPCByaWdodCAmJiBhbXQgPCA1KSB7XG4gICAgICAgIGNvbnN0IG1pZGRsZSA9IGxlZnQgKyBNYXRoLmZsb29yKChyaWdodCAtIGxlZnQpIC8gMik7XG4gICAgICAgIGNvbnN0IGhhc1RyYWRlID0gYXdhaXQgaGFzVHJhZGVCZWZvcmVUaW1lKGhhc2hDb2RlLCB0aW1lc3RhbXAgKyBtaWRkbGUpO1xuICAgICAgICBpZiAoaGFzVHJhZGUpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbWlkZGxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVmdCA9IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICBhbXQrKztcbiAgICB9XG5cbiAgICAvKiBIZWxsbyB0byBhbGwgdGhlIHJldmVyc2VycyAqL1xuICAgIHJldHVybiB0aW1lc3RhbXAgKyBNYXRoLmZsb29yKChyaWdodCArIGxlZnQpIC8gMik7XG59XG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCB7c3RhdGV9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7Q3VzdG9tRWxlbWVudCwgSW5qZWN0QXBwZW5kLCBJbmplY3Rpb25Nb2RlfSBmcm9tICcuLi9pbmplY3RvcnMnO1xuaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4uL2N1c3RvbSc7XG5pbXBvcnQge2ZldGNoTGlzdGluZ1RpbWV9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgJy4uL2NvbW1vbi91aS9zdGVhbS1idXR0b24nO1xuXG5AQ3VzdG9tRWxlbWVudCgpXG5ASW5qZWN0QXBwZW5kKCcudHJhZGVoaXN0b3J5cm93IC50cmFkZWhpc3RvcnlfY29udGVudCcsIEluamVjdGlvbk1vZGUuQ09OVElOVU9VUylcbmV4cG9ydCBjbGFzcyBUcmFkZVByb29mIGV4dGVuZHMgRmxvYXRFbGVtZW50IHtcbiAgICBAc3RhdGUoKVxuICAgIHByaXZhdGUgcHJvb2ZOdW1iZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIEBzdGF0ZSgpXG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvb2ZOdW1iZXJcbiAgICAgICAgICAgID8gaHRtbGAgPHNwYW4+UHJvb2Y6ICR7dGhpcy5wcm9vZk51bWJlcn08L3NwYW4+IGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxjc2dvZmxvYXQtc3RlYW0tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLm9uQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgICAudGV4dD1cIiR7dGhpcy5pc1Byb2Nlc3NpbmcgPyAnQ29tcHV0aW5nIFByb29mLi4uJyA6ICdDU0dPRmxvYXQgUHJvb2YnfVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NzZ29mbG9hdC1zdGVhbS1idXR0b24+XG4gICAgICAgICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSAkSignLnRyYWRlaGlzdG9yeXJvdycpLmluZGV4KCRKKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucHJvb2ZOdW1iZXIgPSBhd2FpdCBmZXRjaExpc3RpbmdUaW1lKGluZGV4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgdGltZSwgbWFrZSBzdXJlIHlvdSdyZSBvbiBhbiBlbmdsaXNoIHZlcnNpb24gb2YgdGhlIHBhZ2UgYnkgYXBwZW5kaW5nID9sPWVuZ2xpc2ggdG8gdGhlIHVybFwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtFeGVjdXRlU2NyaXB0T25QYWdlfSBmcm9tICcuLi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9zY3JpcHQnO1xuaW1wb3J0IHtDbGllbnRTZW5kfSBmcm9tICcuLi9icmlkZ2UvY2xpZW50JztcbmltcG9ydCB7aW5QYWdlQ29udGV4dH0gZnJvbSAnLi4vdXRpbHMvc25pcHMnO1xuaW1wb3J0IHtFeGVjdXRlQ3NzT25QYWdlfSBmcm9tICcuLi9icmlkZ2UvaGFuZGxlcnMvZXhlY3V0ZV9jc3MnO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgcGFnZSBzY3JpcHQsIGV4ZWN1dGluZyBpdCBpbiB0aGUgcGFnZSBjb250ZXh0IGlmIG5lY2Vzc2FyeVxuICpcbiAqIEBwYXJhbSBzY3JpcHRQYXRoIFJlbGF0aXZlIHBhdGggb2YgdGhlIHNjcmlwdCAoYWx3YXlzIGluIC5qcylcbiAqIEBwYXJhbSBpZlBhZ2UgRm4gdG8gcnVuIGlmIHdlIGFyZSBpbiB0aGUgcGFnZSdzIGV4ZWN1dGlvbiBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHNjcmlwdFBhdGg6IHN0cmluZywgaWZQYWdlOiAoKSA9PiBhbnkpIHtcbiAgICAvLyBEb24ndCBhbGxvdyB0aGUgcGFnZSBzY3JpcHQgdG8gcnVuIHRoaXMuXG4gICAgaWYgKGluUGFnZUNvbnRleHQoKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlIFNldCBnbG9iYWwgaWRlbnRpZmllciBmb3Igb3RoZXIgZXh0ZW5zaW9ucyB0byB1c2VcbiAgICAgICAgd2luZG93LmNzZ29mbG9hdCA9IHRydWU7XG5cbiAgICAgICAgaWZQYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbG9iYWwgc3R5bGVzXG4gICAgQ2xpZW50U2VuZChFeGVjdXRlQ3NzT25QYWdlLCB7XG4gICAgICAgIHBhdGg6ICdzcmMvZ2xvYmFsLmNzcycsXG4gICAgfSk7XG5cbiAgICBDbGllbnRTZW5kKEV4ZWN1dGVTY3JpcHRPblBhZ2UsIHtcbiAgICAgICAgcGF0aDogc2NyaXB0UGF0aCxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWMgQ1NHT0Zsb2F0IE1hcmtldCBDaGVja2VyICh2JHtjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259KSBieSBTdGVwNzc1MCBgLFxuICAgICAgICAnYmFja2dyb3VuZDogIzAwNDU5NDsgY29sb3I6ICNmZmY7J1xuICAgICk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgICclYyBDaGFuZ2Vsb2cgY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9jc2dvZmxvYXQvZXh0ZW5zaW9uICcsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAjMDA0NTk0OyBjb2xvcjogI2ZmZjsnXG4gICAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpblBhZ2VDb250ZXh0KCkge1xuICAgIHJldHVybiAhY2hyb21lLmV4dGVuc2lvbjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgdD13aW5kb3csZT10LlNoYWRvd1Jvb3QmJih2b2lkIDA9PT10LlNoYWR5Q1NTfHx0LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykmJlwiYWRvcHRlZFN0eWxlU2hlZXRzXCJpbiBEb2N1bWVudC5wcm90b3R5cGUmJlwicmVwbGFjZVwiaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUscz1TeW1ib2woKSxuPW5ldyBXZWFrTWFwO2NsYXNzIG97Y29uc3RydWN0b3IodCxlLG4pe2lmKHRoaXMuXyRjc3NSZXN1bHQkPSEwLG4hPT1zKXRocm93IEVycm9yKFwiQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC5cIik7dGhpcy5jc3NUZXh0PXQsdGhpcy50PWV9Z2V0IHN0eWxlU2hlZXQoKXtsZXQgdD10aGlzLm87Y29uc3Qgcz10aGlzLnQ7aWYoZSYmdm9pZCAwPT09dCl7Y29uc3QgZT12b2lkIDAhPT1zJiYxPT09cy5sZW5ndGg7ZSYmKHQ9bi5nZXQocykpLHZvaWQgMD09PXQmJigodGhpcy5vPXQ9bmV3IENTU1N0eWxlU2hlZXQpLnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCksZSYmbi5zZXQocyx0KSl9cmV0dXJuIHR9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5jc3NUZXh0fX1jb25zdCByPXQ9Pm5ldyBvKFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dCtcIlwiLHZvaWQgMCxzKSxpPSh0LC4uLmUpPT57Y29uc3Qgbj0xPT09dC5sZW5ndGg/dFswXTplLnJlZHVjZSgoKGUscyxuKT0+ZSsodD0+e2lmKCEwPT09dC5fJGNzc1Jlc3VsdCQpcmV0dXJuIHQuY3NzVGV4dDtpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdDt0aHJvdyBFcnJvcihcIlZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBcIit0K1wiLiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuXCIpfSkocykrdFtuKzFdKSx0WzBdKTtyZXR1cm4gbmV3IG8obix0LHMpfSxTPShzLG4pPT57ZT9zLmFkb3B0ZWRTdHlsZVNoZWV0cz1uLm1hcCgodD0+dCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQ/dDp0LnN0eWxlU2hlZXQpKTpuLmZvckVhY2goKGU9Pntjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPXQubGl0Tm9uY2U7dm9pZCAwIT09byYmbi5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLG8pLG4udGV4dENvbnRlbnQ9ZS5jc3NUZXh0LHMuYXBwZW5kQ2hpbGQobil9KSl9LGM9ZT90PT50OnQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0Pyh0PT57bGV0IGU9XCJcIjtmb3IoY29uc3QgcyBvZiB0LmNzc1J1bGVzKWUrPXMuY3NzVGV4dDtyZXR1cm4gcihlKX0pKHQpOnQ7ZXhwb3J0e28gYXMgQ1NTUmVzdWx0LFMgYXMgYWRvcHRTdHlsZXMsaSBhcyBjc3MsYyBhcyBnZXRDb21wYXRpYmxlU3R5bGUsZSBhcyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsciBhcyB1bnNhZmVDU1N9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgZT0oZSx0LG8pPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyxlKX0sdD0oZSx0KT0+KHtraW5kOlwibWV0aG9kXCIscGxhY2VtZW50OlwicHJvdG90eXBlXCIsa2V5OnQua2V5LGRlc2NyaXB0b3I6ZX0pLG89KHtmaW5pc2hlcjplLGRlc2NyaXB0b3I6dH0pPT4obyxuKT0+e3ZhciByO2lmKHZvaWQgMD09PW4pe2NvbnN0IG49bnVsbCE9PShyPW8ub3JpZ2luYWxLZXkpJiZ2b2lkIDAhPT1yP3I6by5rZXksaT1udWxsIT10P3traW5kOlwibWV0aG9kXCIscGxhY2VtZW50OlwicHJvdG90eXBlXCIsa2V5Om4sZGVzY3JpcHRvcjp0KG8ua2V5KX06ey4uLm8sa2V5Om59O3JldHVybiBudWxsIT1lJiYoaS5maW5pc2hlcj1mdW5jdGlvbih0KXtlKHQsbil9KSxpfXtjb25zdCByPW8uY29uc3RydWN0b3I7dm9pZCAwIT09dCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sbix0KG4pKSxudWxsPT1lfHxlKHIsbil9fTtleHBvcnR7byBhcyBkZWNvcmF0ZVByb3BlcnR5LGUgYXMgbGVnYWN5UHJvdG90eXBlTWV0aG9kLHQgYXMgc3RhbmRhcmRQcm90b3R5cGVNZXRob2R9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgZT1lPT5uPT5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPygoZSxuKT0+KGN1c3RvbUVsZW1lbnRzLmRlZmluZShlLG4pLG4pKShlLG4pOigoZSxuKT0+e2NvbnN0e2tpbmQ6dCxlbGVtZW50czpzfT1uO3JldHVybntraW5kOnQsZWxlbWVudHM6cyxmaW5pc2hlcihuKXtjdXN0b21FbGVtZW50cy5kZWZpbmUoZSxuKX19fSkoZSxuKTtleHBvcnR7ZSBhcyBjdXN0b21FbGVtZW50fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1lbGVtZW50LmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgcn1mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHIoe2ZpbmlzaGVyOihyLHQpPT57T2JqZWN0LmFzc2lnbihyLnByb3RvdHlwZVt0XSxlKX19KX1leHBvcnR7ZSBhcyBldmVudE9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtb3B0aW9ucy5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgaT0oaSxlKT0+XCJtZXRob2RcIj09PWUua2luZCYmZS5kZXNjcmlwdG9yJiYhKFwidmFsdWVcImluIGUuZGVzY3JpcHRvcik/ey4uLmUsZmluaXNoZXIobil7bi5jcmVhdGVQcm9wZXJ0eShlLmtleSxpKX19OntraW5kOlwiZmllbGRcIixrZXk6U3ltYm9sKCkscGxhY2VtZW50Olwib3duXCIsZGVzY3JpcHRvcjp7fSxvcmlnaW5hbEtleTplLmtleSxpbml0aWFsaXplcigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUuaW5pdGlhbGl6ZXImJih0aGlzW2Uua2V5XT1lLmluaXRpYWxpemVyLmNhbGwodGhpcykpfSxmaW5pc2hlcihuKXtuLmNyZWF0ZVByb3BlcnR5KGUua2V5LGkpfX07ZnVuY3Rpb24gZShlKXtyZXR1cm4obix0KT0+dm9pZCAwIT09dD8oKGksZSxuKT0+e2UuY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobixpKX0pKGUsbix0KTppKGUsbil9ZXhwb3J0e2UgYXMgcHJvcGVydHl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZGVzY3JpcHRvcjpyPT4oe2dldCgpe3ZhciByLG87cmV0dXJuIG51bGwhPT0obz1udWxsPT09KHI9dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09cj92b2lkIDA6ci5xdWVyeVNlbGVjdG9yQWxsKGUpKSYmdm9pZCAwIT09bz9vOltdfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e2UgYXMgcXVlcnlBbGx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYWxsLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgb31mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBuO2NvbnN0IGU9bnVsbCE9KG51bGw9PT0obj13aW5kb3cuSFRNTFNsb3RFbGVtZW50KXx8dm9pZCAwPT09bj92b2lkIDA6bi5wcm90b3R5cGUuYXNzaWduZWRFbGVtZW50cyk/KG8sbik9Pm8uYXNzaWduZWRFbGVtZW50cyhuKToobyxuKT0+by5hc3NpZ25lZE5vZGVzKG4pLmZpbHRlcigobz0+by5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSk7ZnVuY3Rpb24gbChuKXtjb25zdHtzbG90Omwsc2VsZWN0b3I6dH09bnVsbCE9bj9uOnt9O3JldHVybiBvKHtkZXNjcmlwdG9yOm89Pih7Z2V0KCl7dmFyIG87Y29uc3Qgcj1cInNsb3RcIisobD9gW25hbWU9JHtsfV1gOlwiOm5vdChbbmFtZV0pXCIpLGk9bnVsbD09PShvPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucXVlcnlTZWxlY3RvcihyKSxzPW51bGwhPWk/ZShpLG4pOltdO3JldHVybiB0P3MuZmlsdGVyKChvPT5vLm1hdGNoZXModCkpKTpzfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e2wgYXMgcXVlcnlBc3NpZ25lZEVsZW1lbnRzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgZX1mcm9tXCIuL2Jhc2UuanNcIjtpbXBvcnR7cXVlcnlBc3NpZ25lZEVsZW1lbnRzIGFzIHR9ZnJvbVwiLi9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gbyhvLG4scil7bGV0IGwscz1vO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBvPyhzPW8uc2xvdCxsPW8pOmw9e2ZsYXR0ZW46bn0scj90KHtzbG90OnMsZmxhdHRlbjpuLHNlbGVjdG9yOnJ9KTplKHtkZXNjcmlwdG9yOmU9Pih7Z2V0KCl7dmFyIGUsdDtjb25zdCBvPVwic2xvdFwiKyhzP2BbbmFtZT0ke3N9XWA6XCI6bm90KFtuYW1lXSlcIiksbj1udWxsPT09KGU9dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5xdWVyeVNlbGVjdG9yKG8pO3JldHVybiBudWxsIT09KHQ9bnVsbD09bj92b2lkIDA6bi5hc3NpZ25lZE5vZGVzKGwpKSYmdm9pZCAwIT09dD90OltdfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfSl9ZXhwb3J0e28gYXMgcXVlcnlBc3NpZ25lZE5vZGVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgcn1mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZGVzY3JpcHRvcjpyPT4oe2FzeW5jIGdldCgpe3ZhciByO3JldHVybiBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlLG51bGw9PT0ocj10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnF1ZXJ5U2VsZWN0b3IoZSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7ZSBhcyBxdWVyeUFzeW5jfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzeW5jLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgb31mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2Z1bmN0aW9uIGkoaSxuKXtyZXR1cm4gbyh7ZGVzY3JpcHRvcjpvPT57Y29uc3QgdD17Z2V0KCl7dmFyIG8sbjtyZXR1cm4gbnVsbCE9PShuPW51bGw9PT0obz10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnF1ZXJ5U2VsZWN0b3IoaSkpJiZ2b2lkIDAhPT1uP246bnVsbH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O2lmKG4pe2NvbnN0IG49XCJzeW1ib2xcIj09dHlwZW9mIG8/U3ltYm9sKCk6XCJfX1wiK287dC5nZXQ9ZnVuY3Rpb24oKXt2YXIgbyx0O3JldHVybiB2b2lkIDA9PT10aGlzW25dJiYodGhpc1tuXT1udWxsIT09KHQ9bnVsbD09PShvPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucXVlcnlTZWxlY3RvcihpKSkmJnZvaWQgMCE9PXQ/dDpudWxsKSx0aGlzW25dfX1yZXR1cm4gdH19KX1leHBvcnR7aSBhcyBxdWVyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS5qcy5tYXBcbiIsImltcG9ydHtwcm9wZXJ0eSBhcyByfWZyb21cIi4vcHJvcGVydHkuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2Z1bmN0aW9uIHQodCl7cmV0dXJuIHIoey4uLnQsc3RhdGU6ITB9KX1leHBvcnR7dCBhcyBzdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZS5qcy5tYXBcbiIsImltcG9ydHtnZXRDb21wYXRpYmxlU3R5bGUgYXMgdCxhZG9wdFN0eWxlcyBhcyBpfWZyb21cIi4vY3NzLXRhZy5qc1wiO2V4cG9ydHtDU1NSZXN1bHQsYWRvcHRTdHlsZXMsY3NzLGdldENvbXBhdGlibGVTdHlsZSxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIHM7Y29uc3QgZT13aW5kb3cscj1lLnRydXN0ZWRUeXBlcyxoPXI/ci5lbXB0eVNjcmlwdDpcIlwiLG89ZS5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsbj17dG9BdHRyaWJ1dGUodCxpKXtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnQ9dD9oOm51bGw7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0PW51bGw9PXQ/dDpKU09OLnN0cmluZ2lmeSh0KX1yZXR1cm4gdH0sZnJvbUF0dHJpYnV0ZSh0LGkpe2xldCBzPXQ7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjpzPW51bGwhPT10O2JyZWFrO2Nhc2UgTnVtYmVyOnM9bnVsbD09PXQ/bnVsbDpOdW1iZXIodCk7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0cnl7cz1KU09OLnBhcnNlKHQpfWNhdGNoKHQpe3M9bnVsbH19cmV0dXJuIHN9fSxhPSh0LGkpPT5pIT09dCYmKGk9PWl8fHQ9PXQpLGw9e2F0dHJpYnV0ZTohMCx0eXBlOlN0cmluZyxjb252ZXJ0ZXI6bixyZWZsZWN0OiExLGhhc0NoYW5nZWQ6YX07Y2xhc3MgZCBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl8kRWk9bmV3IE1hcCx0aGlzLmlzVXBkYXRlUGVuZGluZz0hMSx0aGlzLmhhc1VwZGF0ZWQ9ITEsdGhpcy5fJEVsPW51bGwsdGhpcy51KCl9c3RhdGljIGFkZEluaXRpYWxpemVyKHQpe3ZhciBpO251bGwhPT0oaT10aGlzLmgpJiZ2b2lkIDAhPT1pfHwodGhpcy5oPVtdKSx0aGlzLmgucHVzaCh0KX1zdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3RoaXMuZmluYWxpemUoKTtjb25zdCB0PVtdO3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKChpLHMpPT57Y29uc3QgZT10aGlzLl8kRXAocyxpKTt2b2lkIDAhPT1lJiYodGhpcy5fJEV2LnNldChlLHMpLHQucHVzaChlKSl9KSksdH1zdGF0aWMgY3JlYXRlUHJvcGVydHkodCxpPWwpe2lmKGkuc3RhdGUmJihpLmF0dHJpYnV0ZT0hMSksdGhpcy5maW5hbGl6ZSgpLHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHQsaSksIWkubm9BY2Nlc3NvciYmIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpKXtjb25zdCBzPVwic3ltYm9sXCI9PXR5cGVvZiB0P1N5bWJvbCgpOlwiX19cIit0LGU9dGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxzLGkpO3ZvaWQgMCE9PWUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSx0LGUpfX1zdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsaSxzKXtyZXR1cm57Z2V0KCl7cmV0dXJuIHRoaXNbaV19LHNldChlKXtjb25zdCByPXRoaXNbdF07dGhpc1tpXT1lLHRoaXMucmVxdWVzdFVwZGF0ZSh0LHIscyl9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfX1zdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKHQpe3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldCh0KXx8bH1zdGF0aWMgZmluYWxpemUoKXtpZih0aGlzLmhhc093blByb3BlcnR5KFwiZmluYWxpemVkXCIpKXJldHVybiExO3RoaXMuZmluYWxpemVkPSEwO2NvbnN0IHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO2lmKHQuZmluYWxpemUoKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAodC5lbGVtZW50UHJvcGVydGllcyksdGhpcy5fJEV2PW5ldyBNYXAsdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2NvbnN0IHQ9dGhpcy5wcm9wZXJ0aWVzLGk9Wy4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCldO2Zvcihjb25zdCBzIG9mIGkpdGhpcy5jcmVhdGVQcm9wZXJ0eShzLHRbc10pfXJldHVybiB0aGlzLmVsZW1lbnRTdHlsZXM9dGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyksITB9c3RhdGljIGZpbmFsaXplU3R5bGVzKGkpe2NvbnN0IHM9W107aWYoQXJyYXkuaXNBcnJheShpKSl7Y29uc3QgZT1uZXcgU2V0KGkuZmxhdCgxLzApLnJldmVyc2UoKSk7Zm9yKGNvbnN0IGkgb2YgZSlzLnVuc2hpZnQodChpKSl9ZWxzZSB2b2lkIDAhPT1pJiZzLnB1c2godChpKSk7cmV0dXJuIHN9c3RhdGljIF8kRXAodCxpKXtjb25zdCBzPWkuYXR0cmlidXRlO3JldHVybiExPT09cz92b2lkIDA6XCJzdHJpbmdcIj09dHlwZW9mIHM/czpcInN0cmluZ1wiPT10eXBlb2YgdD90LnRvTG93ZXJDYXNlKCk6dm9pZCAwfXUoKXt2YXIgdDt0aGlzLl8kRV89bmV3IFByb21pc2UoKHQ9PnRoaXMuZW5hYmxlVXBkYXRpbmc9dCkpLHRoaXMuXyRBTD1uZXcgTWFwLHRoaXMuXyRFZygpLHRoaXMucmVxdWVzdFVwZGF0ZSgpLG51bGw9PT0odD10aGlzLmNvbnN0cnVjdG9yLmgpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9PnQodGhpcykpKX1hZGRDb250cm9sbGVyKHQpe3ZhciBpLHM7KG51bGwhPT0oaT10aGlzLl8kRVMpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJEVTPVtdKS5wdXNoKHQpLHZvaWQgMCE9PXRoaXMucmVuZGVyUm9vdCYmdGhpcy5pc0Nvbm5lY3RlZCYmKG51bGw9PT0ocz10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1zfHxzLmNhbGwodCkpfXJlbW92ZUNvbnRyb2xsZXIodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuc3BsaWNlKHRoaXMuXyRFUy5pbmRleE9mKHQpPj4+MCwxKX1fJEVnKCl7dGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgodCxpKT0+e3RoaXMuaGFzT3duUHJvcGVydHkoaSkmJih0aGlzLl8kRWkuc2V0KGksdGhpc1tpXSksZGVsZXRlIHRoaXNbaV0pfSkpfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdDtjb25zdCBzPW51bGwhPT0odD10aGlzLnNoYWRvd1Jvb3QpJiZ2b2lkIDAhPT10P3Q6dGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7cmV0dXJuIGkocyx0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLHN9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDt2b2lkIDA9PT10aGlzLnJlbmRlclJvb3QmJih0aGlzLnJlbmRlclJvb3Q9dGhpcy5jcmVhdGVSZW5kZXJSb290KCkpLHRoaXMuZW5hYmxlVXBkYXRpbmcoITApLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1lbmFibGVVcGRhdGluZyh0KXt9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3REaXNjb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsaSxzKXt0aGlzLl8kQUsodCxzKX1fJEVPKHQsaSxzPWwpe3ZhciBlO2NvbnN0IHI9dGhpcy5jb25zdHJ1Y3Rvci5fJEVwKHQscyk7aWYodm9pZCAwIT09ciYmITA9PT1zLnJlZmxlY3Qpe2NvbnN0IGg9KHZvaWQgMCE9PShudWxsPT09KGU9cy5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRvQXR0cmlidXRlKT9zLmNvbnZlcnRlcjpuKS50b0F0dHJpYnV0ZShpLHMudHlwZSk7dGhpcy5fJEVsPXQsbnVsbD09aD90aGlzLnJlbW92ZUF0dHJpYnV0ZShyKTp0aGlzLnNldEF0dHJpYnV0ZShyLGgpLHRoaXMuXyRFbD1udWxsfX1fJEFLKHQsaSl7dmFyIHM7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLHI9ZS5fJEV2LmdldCh0KTtpZih2b2lkIDAhPT1yJiZ0aGlzLl8kRWwhPT1yKXtjb25zdCB0PWUuZ2V0UHJvcGVydHlPcHRpb25zKHIpLGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb252ZXJ0ZXI/e2Zyb21BdHRyaWJ1dGU6dC5jb252ZXJ0ZXJ9OnZvaWQgMCE9PShudWxsPT09KHM9dC5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLmZyb21BdHRyaWJ1dGUpP3QuY29udmVydGVyOm47dGhpcy5fJEVsPXIsdGhpc1tyXT1oLmZyb21BdHRyaWJ1dGUoaSx0LnR5cGUpLHRoaXMuXyRFbD1udWxsfX1yZXF1ZXN0VXBkYXRlKHQsaSxzKXtsZXQgZT0hMDt2b2lkIDAhPT10JiYoKChzPXN8fHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHQpKS5oYXNDaGFuZ2VkfHxhKSh0aGlzW3RdLGkpPyh0aGlzLl8kQUwuaGFzKHQpfHx0aGlzLl8kQUwuc2V0KHQsaSksITA9PT1zLnJlZmxlY3QmJnRoaXMuXyRFbCE9PXQmJih2b2lkIDA9PT10aGlzLl8kRUMmJih0aGlzLl8kRUM9bmV3IE1hcCksdGhpcy5fJEVDLnNldCh0LHMpKSk6ZT0hMSksIXRoaXMuaXNVcGRhdGVQZW5kaW5nJiZlJiYodGhpcy5fJEVfPXRoaXMuXyRFaigpKX1hc3luYyBfJEVqKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFX31jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe3ZhciB0O2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47dGhpcy5oYXNVcGRhdGVkLHRoaXMuXyRFaSYmKHRoaXMuXyRFaS5mb3JFYWNoKCgodCxpKT0+dGhpc1tpXT10KSksdGhpcy5fJEVpPXZvaWQgMCk7bGV0IGk9ITE7Y29uc3Qgcz10aGlzLl8kQUw7dHJ5e2k9dGhpcy5zaG91bGRVcGRhdGUocyksaT8odGhpcy53aWxsVXBkYXRlKHMpLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLnVwZGF0ZShzKSk6dGhpcy5fJEVrKCl9Y2F0Y2godCl7dGhyb3cgaT0hMSx0aGlzLl8kRWsoKSx0fWkmJnRoaXMuXyRBRShzKX13aWxsVXBkYXRlKHQpe31fJEFFKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRVMpfHx2b2lkIDA9PT1pfHxpLmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy5oYXNVcGRhdGVkfHwodGhpcy5oYXNVcGRhdGVkPSEwLHRoaXMuZmlyc3RVcGRhdGVkKHQpKSx0aGlzLnVwZGF0ZWQodCl9XyRFaygpe3RoaXMuXyRBTD1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExfWdldCB1cGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCl9Z2V0VXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5fJEVffXNob3VsZFVwZGF0ZSh0KXtyZXR1cm4hMH11cGRhdGUodCl7dm9pZCAwIT09dGhpcy5fJEVDJiYodGhpcy5fJEVDLmZvckVhY2goKCh0LGkpPT50aGlzLl8kRU8oaSx0aGlzW2ldLHQpKSksdGhpcy5fJEVDPXZvaWQgMCksdGhpcy5fJEVrKCl9dXBkYXRlZCh0KXt9Zmlyc3RVcGRhdGVkKHQpe319ZC5maW5hbGl6ZWQ9ITAsZC5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwLGQuZWxlbWVudFN0eWxlcz1bXSxkLnNoYWRvd1Jvb3RPcHRpb25zPXttb2RlOlwib3BlblwifSxudWxsPT1vfHxvKHtSZWFjdGl2ZUVsZW1lbnQ6ZH0pLChudWxsIT09KHM9ZS5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PXM/czplLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMS40LjBcIik7ZXhwb3J0e2QgYXMgUmVhY3RpdmVFbGVtZW50LG4gYXMgZGVmYXVsdENvbnZlcnRlcixhIGFzIG5vdEVxdWFsfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwXG4iLCJpbXBvcnR7UmVhY3RpdmVFbGVtZW50IGFzIHR9ZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2ltcG9ydHtyZW5kZXIgYXMgZSxub0NoYW5nZSBhcyBpfWZyb21cImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1odG1sXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi92YXIgbCxvO2NvbnN0IHI9dDtjbGFzcyBzIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5yZW5kZXJPcHRpb25zPXtob3N0OnRoaXN9LHRoaXMuXyREbz12b2lkIDB9Y3JlYXRlUmVuZGVyUm9vdCgpe3ZhciB0LGU7Y29uc3QgaT1zdXBlci5jcmVhdGVSZW5kZXJSb290KCk7cmV0dXJuIG51bGwhPT0odD0oZT10aGlzLnJlbmRlck9wdGlvbnMpLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PXR8fChlLnJlbmRlckJlZm9yZT1pLmZpcnN0Q2hpbGQpLGl9dXBkYXRlKHQpe2NvbnN0IGk9dGhpcy5yZW5kZXIoKTt0aGlzLmhhc1VwZGF0ZWR8fCh0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQ9dGhpcy5pc0Nvbm5lY3RlZCksc3VwZXIudXBkYXRlKHQpLHRoaXMuXyREbz1lKGksdGhpcy5yZW5kZXJSb290LHRoaXMucmVuZGVyT3B0aW9ucyl9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpLG51bGw9PT0odD10aGlzLl8kRG8pfHx2b2lkIDA9PT10fHx0LnNldENvbm5lY3RlZCghMCl9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpLG51bGw9PT0odD10aGlzLl8kRG8pfHx2b2lkIDA9PT10fHx0LnNldENvbm5lY3RlZCghMSl9cmVuZGVyKCl7cmV0dXJuIGl9fXMuZmluYWxpemVkPSEwLHMuXyRsaXRFbGVtZW50JD0hMCxudWxsPT09KGw9Z2xvYmFsVGhpcy5saXRFbGVtZW50SHlkcmF0ZVN1cHBvcnQpfHx2b2lkIDA9PT1sfHxsLmNhbGwoZ2xvYmFsVGhpcyx7TGl0RWxlbWVudDpzfSk7Y29uc3Qgbj1nbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7bnVsbD09bnx8bih7TGl0RWxlbWVudDpzfSk7Y29uc3QgaD17XyRBSzoodCxlLGkpPT57dC5fJEFLKGUsaSl9LF8kQUw6dD0+dC5fJEFMfTsobnVsbCE9PShvPWdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zKSYmdm9pZCAwIT09bz9vOmdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMy4yLjJcIik7ZXhwb3J0e3MgYXMgTGl0RWxlbWVudCxyIGFzIFVwZGF0aW5nRWxlbWVudCxoIGFzIF8kTEV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9e0FUVFJJQlVURToxLENISUxEOjIsUFJPUEVSVFk6MyxCT09MRUFOX0FUVFJJQlVURTo0LEVWRU5UOjUsRUxFTUVOVDo2fSxlPXQ9PiguLi5lKT0+KHtfJGxpdERpcmVjdGl2ZSQ6dCx2YWx1ZXM6ZX0pO2NsYXNzIGl7Y29uc3RydWN0b3IodCl7fWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQVQodCxlLGkpe3RoaXMuXyRDdD10LHRoaXMuXyRBTT1lLHRoaXMuXyRDaT1pfV8kQVModCxlKXtyZXR1cm4gdGhpcy51cGRhdGUodCxlKX11cGRhdGUodCxlKXtyZXR1cm4gdGhpcy5yZW5kZXIoLi4uZSl9fWV4cG9ydHtpIGFzIERpcmVjdGl2ZSx0IGFzIFBhcnRUeXBlLGUgYXMgZGlyZWN0aXZlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXBcbiIsImltcG9ydHtub0NoYW5nZSBhcyB0fWZyb21cIi4uL2xpdC1odG1sLmpzXCI7aW1wb3J0e2RpcmVjdGl2ZSBhcyBpLERpcmVjdGl2ZSBhcyBzLFBhcnRUeXBlIGFzIHJ9ZnJvbVwiLi4vZGlyZWN0aXZlLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9jb25zdCBvPWkoY2xhc3MgZXh0ZW5kcyBze2NvbnN0cnVjdG9yKHQpe3ZhciBpO2lmKHN1cGVyKHQpLHQudHlwZSE9PXIuQVRUUklCVVRFfHxcImNsYXNzXCIhPT10Lm5hbWV8fChudWxsPT09KGk9dC5zdHJpbmdzKXx8dm9pZCAwPT09aT92b2lkIDA6aS5sZW5ndGgpPjIpdGhyb3cgRXJyb3IoXCJgY2xhc3NNYXAoKWAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLlwiKX1yZW5kZXIodCl7cmV0dXJuXCIgXCIrT2JqZWN0LmtleXModCkuZmlsdGVyKChpPT50W2ldKSkuam9pbihcIiBcIikrXCIgXCJ9dXBkYXRlKGksW3NdKXt2YXIgcixvO2lmKHZvaWQgMD09PXRoaXMubnQpe3RoaXMubnQ9bmV3IFNldCx2b2lkIDAhPT1pLnN0cmluZ3MmJih0aGlzLnN0PW5ldyBTZXQoaS5zdHJpbmdzLmpvaW4oXCIgXCIpLnNwbGl0KC9cXHMvKS5maWx0ZXIoKHQ9PlwiXCIhPT10KSkpKTtmb3IoY29uc3QgdCBpbiBzKXNbdF0mJiEobnVsbD09PShyPXRoaXMuc3QpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhcyh0KSkmJnRoaXMubnQuYWRkKHQpO3JldHVybiB0aGlzLnJlbmRlcihzKX1jb25zdCBlPWkuZWxlbWVudC5jbGFzc0xpc3Q7dGhpcy5udC5mb3JFYWNoKCh0PT57dCBpbiBzfHwoZS5yZW1vdmUodCksdGhpcy5udC5kZWxldGUodCkpfSkpO2Zvcihjb25zdCB0IGluIHMpe2NvbnN0IGk9ISFzW3RdO2k9PT10aGlzLm50Lmhhcyh0KXx8KG51bGw9PT0obz10aGlzLnN0KXx8dm9pZCAwPT09bz92b2lkIDA6by5oYXModCkpfHwoaT8oZS5hZGQodCksdGhpcy5udC5hZGQodCkpOihlLnJlbW92ZSh0KSx0aGlzLm50LmRlbGV0ZSh0KSkpfXJldHVybiB0fX0pO2V4cG9ydHtvIGFzIGNsYXNzTWFwfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLW1hcC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIHQ7Y29uc3QgaT13aW5kb3cscz1pLnRydXN0ZWRUeXBlcyxlPXM/cy5jcmVhdGVQb2xpY3koXCJsaXQtaHRtbFwiLHtjcmVhdGVIVE1MOnQ9PnR9KTp2b2lkIDAsbz1gbGl0JCR7KE1hdGgucmFuZG9tKCkrXCJcIikuc2xpY2UoOSl9JGAsbj1cIj9cIitvLGw9YDwke259PmAsaD1kb2N1bWVudCxyPSh0PVwiXCIpPT5oLmNyZWF0ZUNvbW1lbnQodCksZD10PT5udWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQsdT1BcnJheS5pc0FycmF5LGM9dD0+dSh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dFtTeW1ib2wuaXRlcmF0b3JdKSx2PS88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZyxhPS8tLT4vZyxmPS8+L2csXz1SZWdFeHAoXCI+fFsgXFx0XFxuXFxmXFxyXSg/OihbXlxcXFxzXFxcIic+PS9dKykoWyBcXHRcXG5cXGZcXHJdKj1bIFxcdFxcblxcZlxccl0qKD86W14gXFx0XFxuXFxmXFxyXFxcIidgPD49XXwoXFxcInwnKXwpKXwkKVwiLFwiZ1wiKSxtPS8nL2cscD0vXCIvZywkPS9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhfHRpdGxlKSQvaSxnPXQ9PihpLC4uLnMpPT4oe18kbGl0VHlwZSQ6dCxzdHJpbmdzOmksdmFsdWVzOnN9KSx5PWcoMSksdz1nKDIpLHg9U3ltYm9sLmZvcihcImxpdC1ub0NoYW5nZVwiKSxiPVN5bWJvbC5mb3IoXCJsaXQtbm90aGluZ1wiKSxUPW5ldyBXZWFrTWFwLEE9KHQsaSxzKT0+e3ZhciBlLG87Y29uc3Qgbj1udWxsIT09KGU9bnVsbD09cz92b2lkIDA6cy5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT1lP2U6aTtsZXQgbD1uLl8kbGl0UGFydCQ7aWYodm9pZCAwPT09bCl7Y29uc3QgdD1udWxsIT09KG89bnVsbD09cz92b2lkIDA6cy5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT1vP286bnVsbDtuLl8kbGl0UGFydCQ9bD1uZXcgUyhpLmluc2VydEJlZm9yZShyKCksdCksdCx2b2lkIDAsbnVsbCE9cz9zOnt9KX1yZXR1cm4gbC5fJEFJKHQpLGx9LEU9aC5jcmVhdGVUcmVlV2Fsa2VyKGgsMTI5LG51bGwsITEpLEM9KHQsaSk9Pntjb25zdCBzPXQubGVuZ3RoLTEsbj1bXTtsZXQgaCxyPTI9PT1pP1wiPHN2Zz5cIjpcIlwiLGQ9djtmb3IobGV0IGk9MDtpPHM7aSsrKXtjb25zdCBzPXRbaV07bGV0IGUsdSxjPS0xLGc9MDtmb3IoO2c8cy5sZW5ndGgmJihkLmxhc3RJbmRleD1nLHU9ZC5leGVjKHMpLG51bGwhPT11KTspZz1kLmxhc3RJbmRleCxkPT09dj9cIiEtLVwiPT09dVsxXT9kPWE6dm9pZCAwIT09dVsxXT9kPWY6dm9pZCAwIT09dVsyXT8oJC50ZXN0KHVbMl0pJiYoaD1SZWdFeHAoXCI8L1wiK3VbMl0sXCJnXCIpKSxkPV8pOnZvaWQgMCE9PXVbM10mJihkPV8pOmQ9PT1fP1wiPlwiPT09dVswXT8oZD1udWxsIT1oP2g6dixjPS0xKTp2b2lkIDA9PT11WzFdP2M9LTI6KGM9ZC5sYXN0SW5kZXgtdVsyXS5sZW5ndGgsZT11WzFdLGQ9dm9pZCAwPT09dVszXT9fOidcIic9PT11WzNdP3A6bSk6ZD09PXB8fGQ9PT1tP2Q9XzpkPT09YXx8ZD09PWY/ZD12OihkPV8saD12b2lkIDApO2NvbnN0IHk9ZD09PV8mJnRbaSsxXS5zdGFydHNXaXRoKFwiLz5cIik/XCIgXCI6XCJcIjtyKz1kPT09dj9zK2w6Yz49MD8obi5wdXNoKGUpLHMuc2xpY2UoMCxjKStcIiRsaXQkXCIrcy5zbGljZShjKStvK3kpOnMrbysoLTI9PT1jPyhuLnB1c2godm9pZCAwKSxpKTp5KX1jb25zdCB1PXIrKHRbc118fFwiPD8+XCIpKygyPT09aT9cIjwvc3ZnPlwiOlwiXCIpO2lmKCFBcnJheS5pc0FycmF5KHQpfHwhdC5oYXNPd25Qcm9wZXJ0eShcInJhd1wiKSl0aHJvdyBFcnJvcihcImludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVwiKTtyZXR1cm5bdm9pZCAwIT09ZT9lLmNyZWF0ZUhUTUwodSk6dSxuXX07Y2xhc3MgUHtjb25zdHJ1Y3Rvcih7c3RyaW5nczp0LF8kbGl0VHlwZSQ6aX0sZSl7bGV0IGw7dGhpcy5wYXJ0cz1bXTtsZXQgaD0wLGQ9MDtjb25zdCB1PXQubGVuZ3RoLTEsYz10aGlzLnBhcnRzLFt2LGFdPUModCxpKTtpZih0aGlzLmVsPVAuY3JlYXRlRWxlbWVudCh2LGUpLEUuY3VycmVudE5vZGU9dGhpcy5lbC5jb250ZW50LDI9PT1pKXtjb25zdCB0PXRoaXMuZWwuY29udGVudCxpPXQuZmlyc3RDaGlsZDtpLnJlbW92ZSgpLHQuYXBwZW5kKC4uLmkuY2hpbGROb2Rlcyl9Zm9yKDtudWxsIT09KGw9RS5uZXh0Tm9kZSgpKSYmYy5sZW5ndGg8dTspe2lmKDE9PT1sLm5vZGVUeXBlKXtpZihsLmhhc0F0dHJpYnV0ZXMoKSl7Y29uc3QgdD1bXTtmb3IoY29uc3QgaSBvZiBsLmdldEF0dHJpYnV0ZU5hbWVzKCkpaWYoaS5lbmRzV2l0aChcIiRsaXQkXCIpfHxpLnN0YXJ0c1dpdGgobykpe2NvbnN0IHM9YVtkKytdO2lmKHQucHVzaChpKSx2b2lkIDAhPT1zKXtjb25zdCB0PWwuZ2V0QXR0cmlidXRlKHMudG9Mb3dlckNhc2UoKStcIiRsaXQkXCIpLnNwbGl0KG8pLGk9LyhbLj9AXSk/KC4qKS8uZXhlYyhzKTtjLnB1c2goe3R5cGU6MSxpbmRleDpoLG5hbWU6aVsyXSxzdHJpbmdzOnQsY3RvcjpcIi5cIj09PWlbMV0/UjpcIj9cIj09PWlbMV0/SDpcIkBcIj09PWlbMV0/STpNfSl9ZWxzZSBjLnB1c2goe3R5cGU6NixpbmRleDpofSl9Zm9yKGNvbnN0IGkgb2YgdClsLnJlbW92ZUF0dHJpYnV0ZShpKX1pZigkLnRlc3QobC50YWdOYW1lKSl7Y29uc3QgdD1sLnRleHRDb250ZW50LnNwbGl0KG8pLGk9dC5sZW5ndGgtMTtpZihpPjApe2wudGV4dENvbnRlbnQ9cz9zLmVtcHR5U2NyaXB0OlwiXCI7Zm9yKGxldCBzPTA7czxpO3MrKylsLmFwcGVuZCh0W3NdLHIoKSksRS5uZXh0Tm9kZSgpLGMucHVzaCh7dHlwZToyLGluZGV4OisraH0pO2wuYXBwZW5kKHRbaV0scigpKX19fWVsc2UgaWYoOD09PWwubm9kZVR5cGUpaWYobC5kYXRhPT09biljLnB1c2goe3R5cGU6MixpbmRleDpofSk7ZWxzZXtsZXQgdD0tMTtmb3IoOy0xIT09KHQ9bC5kYXRhLmluZGV4T2Yobyx0KzEpKTspYy5wdXNoKHt0eXBlOjcsaW5kZXg6aH0pLHQrPW8ubGVuZ3RoLTF9aCsrfX1zdGF0aWMgY3JlYXRlRWxlbWVudCh0LGkpe2NvbnN0IHM9aC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7cmV0dXJuIHMuaW5uZXJIVE1MPXQsc319ZnVuY3Rpb24gVih0LGkscz10LGUpe3ZhciBvLG4sbCxoO2lmKGk9PT14KXJldHVybiBpO2xldCByPXZvaWQgMCE9PWU/bnVsbD09PShvPXMuXyRDbCl8fHZvaWQgMD09PW8/dm9pZCAwOm9bZV06cy5fJEN1O2NvbnN0IHU9ZChpKT92b2lkIDA6aS5fJGxpdERpcmVjdGl2ZSQ7cmV0dXJuKG51bGw9PXI/dm9pZCAwOnIuY29uc3RydWN0b3IpIT09dSYmKG51bGw9PT0obj1udWxsPT1yP3ZvaWQgMDpyLl8kQU8pfHx2b2lkIDA9PT1ufHxuLmNhbGwociwhMSksdm9pZCAwPT09dT9yPXZvaWQgMDoocj1uZXcgdSh0KSxyLl8kQVQodCxzLGUpKSx2b2lkIDAhPT1lPyhudWxsIT09KGw9KGg9cykuXyRDbCkmJnZvaWQgMCE9PWw/bDpoLl8kQ2w9W10pW2VdPXI6cy5fJEN1PXIpLHZvaWQgMCE9PXImJihpPVYodCxyLl8kQVModCxpLnZhbHVlcykscixlKSksaX1jbGFzcyBOe2NvbnN0cnVjdG9yKHQsaSl7dGhpcy52PVtdLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFEPXQsdGhpcy5fJEFNPWl9Z2V0IHBhcmVudE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFNLnBhcmVudE5vZGV9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9cCh0KXt2YXIgaTtjb25zdHtlbDp7Y29udGVudDpzfSxwYXJ0czplfT10aGlzLl8kQUQsbz0obnVsbCE9PShpPW51bGw9PXQ/dm9pZCAwOnQuY3JlYXRpb25TY29wZSkmJnZvaWQgMCE9PWk/aTpoKS5pbXBvcnROb2RlKHMsITApO0UuY3VycmVudE5vZGU9bztsZXQgbj1FLm5leHROb2RlKCksbD0wLHI9MCxkPWVbMF07Zm9yKDt2b2lkIDAhPT1kOyl7aWYobD09PWQuaW5kZXgpe2xldCBpOzI9PT1kLnR5cGU/aT1uZXcgUyhuLG4ubmV4dFNpYmxpbmcsdGhpcyx0KToxPT09ZC50eXBlP2k9bmV3IGQuY3RvcihuLGQubmFtZSxkLnN0cmluZ3MsdGhpcyx0KTo2PT09ZC50eXBlJiYoaT1uZXcgTChuLHRoaXMsdCkpLHRoaXMudi5wdXNoKGkpLGQ9ZVsrK3JdfWwhPT0obnVsbD09ZD92b2lkIDA6ZC5pbmRleCkmJihuPUUubmV4dE5vZGUoKSxsKyspfXJldHVybiBvfW0odCl7bGV0IGk9MDtmb3IoY29uc3QgcyBvZiB0aGlzLnYpdm9pZCAwIT09cyYmKHZvaWQgMCE9PXMuc3RyaW5ncz8ocy5fJEFJKHQscyxpKSxpKz1zLnN0cmluZ3MubGVuZ3RoLTIpOnMuXyRBSSh0W2ldKSksaSsrfX1jbGFzcyBTe2NvbnN0cnVjdG9yKHQsaSxzLGUpe3ZhciBvO3RoaXMudHlwZT0yLHRoaXMuXyRBSD1iLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFBPXQsdGhpcy5fJEFCPWksdGhpcy5fJEFNPXMsdGhpcy5vcHRpb25zPWUsdGhpcy5fJENfPW51bGw9PT0obz1udWxsPT1lP3ZvaWQgMDplLmlzQ29ubmVjdGVkKXx8dm9pZCAwPT09b3x8b31nZXQgXyRBVSgpe3ZhciB0LGk7cmV0dXJuIG51bGwhPT0oaT1udWxsPT09KHQ9dGhpcy5fJEFNKXx8dm9pZCAwPT09dD92b2lkIDA6dC5fJEFVKSYmdm9pZCAwIT09aT9pOnRoaXMuXyRDX31nZXQgcGFyZW50Tm9kZSgpe2xldCB0PXRoaXMuXyRBQS5wYXJlbnROb2RlO2NvbnN0IGk9dGhpcy5fJEFNO3JldHVybiB2b2lkIDAhPT1pJiYxMT09PXQubm9kZVR5cGUmJih0PWkucGFyZW50Tm9kZSksdH1nZXQgc3RhcnROb2RlKCl7cmV0dXJuIHRoaXMuXyRBQX1nZXQgZW5kTm9kZSgpe3JldHVybiB0aGlzLl8kQUJ9XyRBSSh0LGk9dGhpcyl7dD1WKHRoaXMsdCxpKSxkKHQpP3Q9PT1ifHxudWxsPT10fHxcIlwiPT09dD8odGhpcy5fJEFIIT09YiYmdGhpcy5fJEFSKCksdGhpcy5fJEFIPWIpOnQhPT10aGlzLl8kQUgmJnQhPT14JiZ0aGlzLiQodCk6dm9pZCAwIT09dC5fJGxpdFR5cGUkP3RoaXMuVCh0KTp2b2lkIDAhPT10Lm5vZGVUeXBlP3RoaXMuayh0KTpjKHQpP3RoaXMuTyh0KTp0aGlzLiQodCl9Uyh0LGk9dGhpcy5fJEFCKXtyZXR1cm4gdGhpcy5fJEFBLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsaSl9ayh0KXt0aGlzLl8kQUghPT10JiYodGhpcy5fJEFSKCksdGhpcy5fJEFIPXRoaXMuUyh0KSl9JCh0KXt0aGlzLl8kQUghPT1iJiZkKHRoaXMuXyRBSCk/dGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGE9dDp0aGlzLmsoaC5jcmVhdGVUZXh0Tm9kZSh0KSksdGhpcy5fJEFIPXR9VCh0KXt2YXIgaTtjb25zdHt2YWx1ZXM6cyxfJGxpdFR5cGUkOmV9PXQsbz1cIm51bWJlclwiPT10eXBlb2YgZT90aGlzLl8kQUModCk6KHZvaWQgMD09PWUuZWwmJihlLmVsPVAuY3JlYXRlRWxlbWVudChlLmgsdGhpcy5vcHRpb25zKSksZSk7aWYoKG51bGw9PT0oaT10aGlzLl8kQUgpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLl8kQUQpPT09byl0aGlzLl8kQUgubShzKTtlbHNle2NvbnN0IHQ9bmV3IE4obyx0aGlzKSxpPXQucCh0aGlzLm9wdGlvbnMpO3QubShzKSx0aGlzLmsoaSksdGhpcy5fJEFIPXR9fV8kQUModCl7bGV0IGk9VC5nZXQodC5zdHJpbmdzKTtyZXR1cm4gdm9pZCAwPT09aSYmVC5zZXQodC5zdHJpbmdzLGk9bmV3IFAodCkpLGl9Tyh0KXt1KHRoaXMuXyRBSCl8fCh0aGlzLl8kQUg9W10sdGhpcy5fJEFSKCkpO2NvbnN0IGk9dGhpcy5fJEFIO2xldCBzLGU9MDtmb3IoY29uc3QgbyBvZiB0KWU9PT1pLmxlbmd0aD9pLnB1c2gocz1uZXcgUyh0aGlzLlMocigpKSx0aGlzLlMocigpKSx0aGlzLHRoaXMub3B0aW9ucykpOnM9aVtlXSxzLl8kQUkobyksZSsrO2U8aS5sZW5ndGgmJih0aGlzLl8kQVIocyYmcy5fJEFCLm5leHRTaWJsaW5nLGUpLGkubGVuZ3RoPWUpfV8kQVIodD10aGlzLl8kQUEubmV4dFNpYmxpbmcsaSl7dmFyIHM7Zm9yKG51bGw9PT0ocz10aGlzLl8kQVApfHx2b2lkIDA9PT1zfHxzLmNhbGwodGhpcywhMSwhMCxpKTt0JiZ0IT09dGhpcy5fJEFCOyl7Y29uc3QgaT10Lm5leHRTaWJsaW5nO3QucmVtb3ZlKCksdD1pfX1zZXRDb25uZWN0ZWQodCl7dmFyIGk7dm9pZCAwPT09dGhpcy5fJEFNJiYodGhpcy5fJENfPXQsbnVsbD09PShpPXRoaXMuXyRBUCl8fHZvaWQgMD09PWl8fGkuY2FsbCh0aGlzLHQpKX19Y2xhc3MgTXtjb25zdHJ1Y3Rvcih0LGkscyxlLG8pe3RoaXMudHlwZT0xLHRoaXMuXyRBSD1iLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5lbGVtZW50PXQsdGhpcy5uYW1lPWksdGhpcy5fJEFNPWUsdGhpcy5vcHRpb25zPW8scy5sZW5ndGg+Mnx8XCJcIiE9PXNbMF18fFwiXCIhPT1zWzFdPyh0aGlzLl8kQUg9QXJyYXkocy5sZW5ndGgtMSkuZmlsbChuZXcgU3RyaW5nKSx0aGlzLnN0cmluZ3M9cyk6dGhpcy5fJEFIPWJ9Z2V0IHRhZ05hbWUoKXtyZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWV9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBSSh0LGk9dGhpcyxzLGUpe2NvbnN0IG89dGhpcy5zdHJpbmdzO2xldCBuPSExO2lmKHZvaWQgMD09PW8pdD1WKHRoaXMsdCxpLDApLG49IWQodCl8fHQhPT10aGlzLl8kQUgmJnQhPT14LG4mJih0aGlzLl8kQUg9dCk7ZWxzZXtjb25zdCBlPXQ7bGV0IGwsaDtmb3IodD1vWzBdLGw9MDtsPG8ubGVuZ3RoLTE7bCsrKWg9Vih0aGlzLGVbcytsXSxpLGwpLGg9PT14JiYoaD10aGlzLl8kQUhbbF0pLG58fChuPSFkKGgpfHxoIT09dGhpcy5fJEFIW2xdKSxoPT09Yj90PWI6dCE9PWImJih0Kz0obnVsbCE9aD9oOlwiXCIpK29bbCsxXSksdGhpcy5fJEFIW2xdPWh9biYmIWUmJnRoaXMuUCh0KX1QKHQpe3Q9PT1iP3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTp0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSxudWxsIT10P3Q6XCJcIil9fWNsYXNzIFIgZXh0ZW5kcyBNe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnR5cGU9M31QKHQpe3RoaXMuZWxlbWVudFt0aGlzLm5hbWVdPXQ9PT1iP3ZvaWQgMDp0fX1jb25zdCBrPXM/cy5lbXB0eVNjcmlwdDpcIlwiO2NsYXNzIEggZXh0ZW5kcyBNe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnR5cGU9NH1QKHQpe3QmJnQhPT1iP3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLGspOnRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKX19Y2xhc3MgSSBleHRlbmRzIE17Y29uc3RydWN0b3IodCxpLHMsZSxvKXtzdXBlcih0LGkscyxlLG8pLHRoaXMudHlwZT01fV8kQUkodCxpPXRoaXMpe3ZhciBzO2lmKCh0PW51bGwhPT0ocz1WKHRoaXMsdCxpLDApKSYmdm9pZCAwIT09cz9zOmIpPT09eClyZXR1cm47Y29uc3QgZT10aGlzLl8kQUgsbz10PT09YiYmZSE9PWJ8fHQuY2FwdHVyZSE9PWUuY2FwdHVyZXx8dC5vbmNlIT09ZS5vbmNlfHx0LnBhc3NpdmUhPT1lLnBhc3NpdmUsbj10IT09YiYmKGU9PT1ifHxvKTtvJiZ0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyxlKSxuJiZ0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyx0KSx0aGlzLl8kQUg9dH1oYW5kbGVFdmVudCh0KXt2YXIgaSxzO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuXyRBSD90aGlzLl8kQUguY2FsbChudWxsIT09KHM9bnVsbD09PShpPXRoaXMub3B0aW9ucyl8fHZvaWQgMD09PWk/dm9pZCAwOmkuaG9zdCkmJnZvaWQgMCE9PXM/czp0aGlzLmVsZW1lbnQsdCk6dGhpcy5fJEFILmhhbmRsZUV2ZW50KHQpfX1jbGFzcyBMe2NvbnN0cnVjdG9yKHQsaSxzKXt0aGlzLmVsZW1lbnQ9dCx0aGlzLnR5cGU9Nix0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBTT1pLHRoaXMub3B0aW9ucz1zfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCl7Vih0aGlzLHQpfX1jb25zdCB6PXtBOlwiJGxpdCRcIixNOm8sQzpuLEw6MSxSOkMsRDpOLFY6YyxJOlYsSDpTLE46TSxVOkgsQjpJLEY6UixXOkx9LFo9aS5saXRIdG1sUG9seWZpbGxTdXBwb3J0O251bGw9PVp8fFooUCxTKSwobnVsbCE9PSh0PWkubGl0SHRtbFZlcnNpb25zKSYmdm9pZCAwIT09dD90OmkubGl0SHRtbFZlcnNpb25zPVtdKS5wdXNoKFwiMi4zLjFcIik7ZXhwb3J0e3ogYXMgXyRMSCx5IGFzIGh0bWwseCBhcyBub0NoYW5nZSxiIGFzIG5vdGhpbmcsQSBhcyByZW5kZXIsdyBhcyBzdmd9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwXG4iLCJleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG4iLCJpbXBvcnRcIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2ltcG9ydFwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQge2luaXR9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3RyYWRlX2hpc3RvcnkvdHJhZGVfcHJvb2YnO1xuXG5pbml0KCdzcmMvbGliL3BhZ2Vfc2NyaXB0cy90cmFkZV9oaXN0b3J5LmpzJywgbWFpbik7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9