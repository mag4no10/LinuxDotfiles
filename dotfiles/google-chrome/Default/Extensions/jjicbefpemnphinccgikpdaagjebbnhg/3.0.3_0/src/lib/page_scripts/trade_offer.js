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

/***/ 34:
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

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchPendingTrades": () => (/* binding */ FetchPendingTrades)
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


const FetchPendingTrades = new _main__WEBPACK_IMPORTED_MODULE_0__.SimpleHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.FETCH_PENDING_TRADES, (req) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(`https://csgofloat.com/api/v1/me/pending-trades`, {
        credentials: 'include',
    }).then((resp) => {
        return resp.json();
    });
}));


/***/ }),

/***/ 3:
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

/***/ 23:
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
/* harmony export */   "InjectBefore": () => (/* binding */ InjectBefore),
/* harmony export */   "InjectionMode": () => (/* binding */ InjectionMode)
/* harmony export */ });
/* unused harmony export InjectAfter */
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

/***/ 385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export AutoFill */
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _bridge_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _bridge_handlers_fetch_pending_trades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(386);
/* harmony import */ var _types_float_market__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(387);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _utils_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var _common_ui_steam_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(367);
/* harmony import */ var _types_steam_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);
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










let AutoFill = class AutoFill extends _custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement {
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.connectedCallback.call(this);
            try {
                this.pendingTradesResponse = yield (0,_bridge_client__WEBPACK_IMPORTED_MODULE_3__.ClientSend)(_bridge_handlers_fetch_pending_trades__WEBPACK_IMPORTED_MODULE_4__.FetchPendingTrades, {});
            }
            catch (e) {
                console.error('failed to fetch pending trades on CSGOFloat Market, they are likely not logged in.', e.toString());
            }
            (0,_utils_observers__WEBPACK_IMPORTED_MODULE_7__.Observe)(() => g_rgCurrentTradeStatus.me.assets.length, () => {
                // Items they are giving changed, we can potentially hide/show an auto-fill dialog
                this.requestUpdate();
            });
        });
    }
    renderAutoFillDialog(trade) {
        if (trade.state !== _types_float_market__WEBPACK_IMPORTED_MODULE_5__.TradeState.PENDING) {
            // Make sure they accepted the sale on CSGOFloat first
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        const item = trade.contract.item;
        if (g_rgCurrentTradeStatus.me.assets.find((a) => a.assetid === item.asset_id)) {
            // Item is already included in the trade offer
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="container">
                <div>
                    <div class="float-icon">
                        <img
                            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/79/798a12316637ad8fbb91ddb7dc63f770b680bd19_full.jpg"
                            style="height: 32px;"
                        />
                    </div>
                    <span class="item-name"> ${item.market_hash_name} </span>
                    <div class="sale-info">
                        Detected Sale (Float: ${item.float_value.toFixed(12)}, Seed: ${item.paint_seed})
                    </div>
                </div>
                <csgofloat-steam-button
                    .text="${'Auto-Fill'}"
                    @click="${() => this.autoFill(trade)}"
                ></csgofloat-steam-button>
            </div>
        `;
    }
    /**
     * Show a warning to users if trade includes item with csgofloat note that doesn't match an existing sale
     *
     * Tries to prevent scenarios where malicious actors send offer with CSGOFloat text requesting an item
     */
    showWarningDialog() {
        if (!this.hasAutoFillText()) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        const hasItemWithNoSale = g_rgCurrentTradeStatus.me.assets.find((a) => { var _a; return !((_a = this.pendingTradesResponse) === null || _a === void 0 ? void 0 : _a.trades_to_send.find((b) => b.contract.item.asset_id === a.assetid)); });
        if (!hasItemWithNoSale) {
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="container warning">
                <div>
                    <div class="float-icon">
                        <img
                            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/79/798a12316637ad8fbb91ddb7dc63f770b680bd19_full.jpg"
                            style="height: 32px;"
                        />
                    </div>
                    <span class="item-name"> Warning! </span>
                    <div class="sale-info">
                        Some of the items in the offer were not purchased from you on CSGOFloat Market (or you're logged
                        into the wrong account)
                    </div>
                </div>
            </div>
        `;
    }
    render() {
        if (!this.pendingTradesResponse)
            return lit__WEBPACK_IMPORTED_MODULE_2__.html ``;
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            ${this.pendingTradesResponse.trades_to_send
            .filter((e) => e.buyer_id === (UserThem === null || UserThem === void 0 ? void 0 : UserThem.strSteamId))
            .map((e) => this.renderAutoFillDialog(e))}
            ${this.showWarningDialog()}
        `;
    }
    autoFill(trade) {
        var _a;
        $J('#inventory_select_your_inventory').click();
        const el = (_a = UserYou === null || UserYou === void 0 ? void 0 : UserYou.findAsset(_types_steam_constants__WEBPACK_IMPORTED_MODULE_9__.AppId.CSGO, _types_steam_constants__WEBPACK_IMPORTED_MODULE_9__.ContextId.PRIMARY, trade.contract.item.asset_id)) === null || _a === void 0 ? void 0 : _a.element;
        if (!el) {
            console.error('failed to find asset element for id ' + trade.contract.item.asset_id);
            return;
        }
        MoveItemToTrade(el);
        const note = document.getElementById('trade_offer_note');
        if (note) {
            note.value = `CSGOFloat Market Trade Offer #${trade.id} \n\nThanks for using CSGOFloat!`;
        }
    }
    hasAutoFillText() {
        const tradeMessages = document.getElementsByClassName('included_trade_offer_note_ctn');
        if (tradeMessages.length > 0) {
            const sanitized = tradeMessages[0].innerText.trim().replace(/ /g, '').toLowerCase();
            return sanitized.includes('csgofloat') || sanitized.includes('floatmarket');
        }
        return false;
    }
};
AutoFill.styles = [
    ..._custom__WEBPACK_IMPORTED_MODULE_0__.FloatElement.styles,
    lit__WEBPACK_IMPORTED_MODULE_2__.css `
            .container {
                margin-top: 10px;
                margin-bottom: 10px;
                padding: 15px;
                background-color: rgb(48, 48, 48);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .container.warning {
                background-color: rgb(179, 0, 0);
            }

            .float-icon {
                float: left;
            }

            .item-name {
                font-size: 18px;
                margin-left: 15px;
                line-height: 32px;
            }

            .sale-info {
                padding-left: 45px;
                color: darkgrey;
            }
        `,
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.state)()
], AutoFill.prototype, "pendingTradesResponse", void 0);
AutoFill = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.CustomElement)(),
    (0,_injectors__WEBPACK_IMPORTED_MODULE_1__.InjectBefore)('div.trade_area')
], AutoFill);



/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export TradeItemHolderMetadata */
/* harmony import */ var _injectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _common_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _types_steam_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TradeItemHolderMetadata_1;



// Annotates item info (float, seed, etc...) in boxes on the Trade Offer Page
let TradeItemHolderMetadata = TradeItemHolderMetadata_1 = class TradeItemHolderMetadata extends _common_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__.ItemHolderMetadata {
    get owningUser() {
        if (!this.assetId)
            return;
        if (UserThem && TradeItemHolderMetadata_1.getAssetFromUser(UserThem, this.assetId)) {
            return UserThem;
        }
        else if (UserYou && TradeItemHolderMetadata_1.getAssetFromUser(UserYou, this.assetId)) {
            return UserYou;
        }
    }
    get ownerSteamId() {
        var _a;
        if (!this.assetId)
            return;
        return (_a = this.owningUser) === null || _a === void 0 ? void 0 : _a.strSteamId;
    }
    get asset() {
        if (!this.assetId)
            return;
        if (!this.owningUser)
            return;
        return TradeItemHolderMetadata_1.getAssetFromUser(this.owningUser, this.assetId);
    }
    static getAssetFromUser(user, assetId) {
        var _a;
        if ((_a = user.rgContexts[_types_steam_constants__WEBPACK_IMPORTED_MODULE_2__.AppId.CSGO][_types_steam_constants__WEBPACK_IMPORTED_MODULE_2__.ContextId.PRIMARY].inventory) === null || _a === void 0 ? void 0 : _a.rgInventory[assetId]) {
            const inventory = user.rgContexts[_types_steam_constants__WEBPACK_IMPORTED_MODULE_2__.AppId.CSGO][_types_steam_constants__WEBPACK_IMPORTED_MODULE_2__.ContextId.PRIMARY].inventory;
            return inventory === null || inventory === void 0 ? void 0 : inventory.rgInventory[assetId];
        }
    }
};
TradeItemHolderMetadata = TradeItemHolderMetadata_1 = __decorate([
    (0,_injectors__WEBPACK_IMPORTED_MODULE_0__.CustomElement)()
    // Items when browsing their/your inventory
    ,
    (0,_injectors__WEBPACK_IMPORTED_MODULE_0__.InjectAppend)('div.inventory_page:not([style*="display: none"]) .itemHolder div.app730', _injectors__WEBPACK_IMPORTED_MODULE_0__.InjectionMode.CONTINUOUS)
    // Items selected within the trade offer
    ,
    (0,_injectors__WEBPACK_IMPORTED_MODULE_0__.InjectAppend)('.trade_offer .itemHolder div.app730', _injectors__WEBPACK_IMPORTED_MODULE_0__.InjectionMode.CONTINUOUS)
], TradeItemHolderMetadata);



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

/***/ 30:
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

/***/ 387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeState": () => (/* binding */ TradeState)
/* harmony export */ });
/* unused harmony exports ContractState, ContractType */
/**
 * Types related to CSGOFloat Market
 */
var ContractState;
(function (ContractState) {
    ContractState["SOLD"] = "sold";
    ContractState["LISTED"] = "listed";
    ContractState["DELISTED"] = "delisted";
    ContractState["REFUNDED"] = "refunded";
})(ContractState || (ContractState = {}));
var ContractType;
(function (ContractType) {
    ContractType["BUY_NOW"] = "buy_now";
    ContractType["AUCTION"] = "auction";
})(ContractType || (ContractType = {}));
var TradeState;
(function (TradeState) {
    TradeState["QUEUED"] = "queued";
    TradeState["PENDING"] = "pending";
    TradeState["VERIFIED"] = "verified";
    TradeState["FAILED"] = "failed";
    TradeState["CANCELLED"] = "cancelled";
})(TradeState || (TradeState = {}));


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppId": () => (/* binding */ AppId),
/* harmony export */   "ContextId": () => (/* binding */ ContextId)
/* harmony export */ });
/* unused harmony export Currency */
// See g_rgCurrencyData
var Currency;
(function (Currency) {
    Currency[Currency["USD"] = 2001] = "USD";
})(Currency || (Currency = {}));
var AppId;
(function (AppId) {
    AppId[AppId["CSGO"] = 730] = "CSGO";
})(AppId || (AppId = {}));
var ContextId;
(function (ContextId) {
    ContextId[ContextId["PRIMARY"] = 2] = "PRIMARY";
})(ContextId || (ContextId = {}));


/***/ }),

/***/ 32:
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

/***/ 33:
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

/***/ 36:
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

/***/ 38:
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

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Job": () => (/* binding */ Job),
/* harmony export */   "SimpleCachedQueue": () => (/* binding */ SimpleCachedQueue)
/* harmony export */ });
/* unused harmony exports GenericJob, Queue, CachedQueue, TTLCachedQueue */
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

/***/ 37:
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

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatFloatWithRank": () => (/* binding */ formatFloatWithRank),
/* harmony export */   "formatSeed": () => (/* binding */ formatSeed),
/* harmony export */   "getLowestRank": () => (/* binding */ getLowestRank),
/* harmony export */   "isSkin": () => (/* binding */ isSkin)
/* harmony export */ });
/* unused harmony exports rangeFromWear, parseRank, renderClickableRank */
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
/* harmony import */ var _components_trade_offer_trade_item_holder_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var _components_trade_offer_auto_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(385);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



(0,_utils__WEBPACK_IMPORTED_MODULE_0__.init)('src/lib/page_scripts/trade_offer.js', main);
function main() {
    return __awaiter(this, void 0, void 0, function* () { });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBNEQsZ0NBQWdDLE1BQU0sMkRBQTJELGlCQUFpQixFQUFFLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLE1BQU0sb0ZBQW9GLFFBQVEsdUJBQXVCLDBNQUEwTSxjQUFjLDRCQUE0QixXQUFXLHNCQUFzQixtQkFBbUIscUJBQXFCLFNBQVMsNkVBQTZFLEtBQUssVUFBVSxRQUFRLGVBQWUsYUFBYSwySUFBMkksaUJBQWlCLEtBQUssaUdBQWlHLGtCQUFrQixjQUFjLGdDQUFnQyxLQUFLLHdDQUF3QywyQkFBMkIsa0JBQWtCLGNBQWMsZ0NBQWdDLEtBQUsseUZBQXlGLGtCQUFrQix1QkFBdUIsNkJBQTZCLGVBQWUsTUFBTSwyREFBMkQsb0hBQW9ILHFIQUFxSCxlQUFlLFFBQVEsaUtBQWlLLFFBQVEsbUJBQW1CLHVFQUF1RSxXQUFXLHNCQUFzQixRQUFRLFdBQVcsU0FBUyw4REFBOEQsNEJBQTRCLGdHQUE0SztBQUN4dlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOGlCO0FBQzlpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0R1RjtBQUN2Rjs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDaUM7QUFDakI7QUFFN0MsNENBQUksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVsRCxTQUFlLElBQUk7MERBQUksQ0FBQztDQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfY3NzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2ZldGNoX2luc3BlY3RfaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9wZW5kaW5nX3RyYWRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3dyYXBwZXJzL3ByaXZpbGVnZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL2NvbW1vbi9pdGVtX2hvbGRlcl9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvY29tbW9uL3VpL3N0ZWFtLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvY3VzdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy9pbmplY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21wb25lbnRzL3RyYWRlX29mZmVyL2F1dG9fZmlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdHJhZGVfb2ZmZXIvdHJhZGVfaXRlbV9ob2xkZXJfbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9wYWdlX3NjcmlwdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zZXJ2aWNlcy9mbG9hdF9mZXRjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdHlwZXMvZmxvYXRfbWFya2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdHlwZXMvc3RlYW1fY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy9kZWZlcnJlZF9wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvZG9wcGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy9vYnNlcnZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3JhbmtzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMvc2tpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3NuaXBzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhZ2Vfc2NyaXB0cy90cmFkZV9vZmZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ludGVybmFsUmVxdWVzdEJ1bmRsZSwgSW50ZXJuYWxSZXNwb25zZUJ1bmRsZSwgUmVxdWVzdEhhbmRsZXIsIFZlcnNpb259IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ2xpZW50U2VuZDxSZXEsIFJlc3A+KGhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4sIGFyZ3M6IFJlcSk6IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IGJ1bmRsZTogSW50ZXJuYWxSZXF1ZXN0QnVuZGxlID0ge1xuICAgICAgICB2ZXJzaW9uOiBWZXJzaW9uLlYxLFxuICAgICAgICByZXF1ZXN0X3R5cGU6IGhhbmRsZXIuZ2V0VHlwZSgpLFxuICAgICAgICByZXF1ZXN0OiBhcmdzLFxuICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDApLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgIHdpbmRvdy5DU0dPRkxPQVRfRVhURU5TSU9OX0lEIHx8IGNocm9tZS5ydW50aW1lLmlkLFxuICAgICAgICAgICAgYnVuZGxlLFxuICAgICAgICAgICAgKHJlc3A6IEludGVybmFsUmVzcG9uc2VCdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcD8ucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcD8uZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7RW1wdHlSZXNwb25zZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1ByaXZpbGVnZWRIYW5kbGVyfSBmcm9tICcuLi93cmFwcGVycy9wcml2aWxlZ2VkJztcclxuXHJcbmludGVyZmFjZSBFeGVjdXRlQ3NzUmVxdWVzdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeGVjdXRlQ3NzT25QYWdlID0gbmV3IFByaXZpbGVnZWRIYW5kbGVyKFxyXG4gICAgbmV3IEVtcHR5UmVzcG9uc2VIYW5kbGVyPEV4ZWN1dGVDc3NSZXF1ZXN0PihSZXF1ZXN0VHlwZS5FWEVDVVRFX0NTU19PTl9QQUdFLCBhc3luYyAocmVxLCBzZW5kZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICBmaWxlczogW3JlcS5wYXRoXSxcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbik7XHJcbiIsImltcG9ydCB7RW1wdHlSZXNwb25zZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1ByaXZpbGVnZWRIYW5kbGVyfSBmcm9tICcuLi93cmFwcGVycy9wcml2aWxlZ2VkJztcclxuXHJcbmludGVyZmFjZSBFeGVjdXRlU2NyaXB0UmVxdWVzdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeGVjdXRlU2NyaXB0T25QYWdlID0gbmV3IFByaXZpbGVnZWRIYW5kbGVyKFxyXG4gICAgbmV3IEVtcHR5UmVzcG9uc2VIYW5kbGVyPEV4ZWN1dGVTY3JpcHRSZXF1ZXN0PihSZXF1ZXN0VHlwZS5FWEVDVVRFX1NDUklQVF9PTl9QQUdFLCBhc3luYyAocmVxLCBzZW5kZXIpID0+IHtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIGluamVjdCB0aGUgZXh0ZW5zaW9uIElEIGR5bmFtaWNhbGx5IHNvIHRoZSBjbGllbnQga25vd3Mgd2hvIHRvXHJcbiAgICAgICAgLy8gY29tbXVuaWNhdGUgd2l0aC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIE9uIEZpcmVmb3gsIGV4dGVuc2lvbiBJRHMgYXJlIHJhbmRvbSwgc28gdGhpcyBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHNlbmRlci50YWI/LmlkIGFzIG51bWJlcn0sXHJcbiAgICAgICAgICAgIHdvcmxkOiAnTUFJTicsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtjaHJvbWUucnVudGltZS5pZCwgY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdzcmMvbW9kZWxfZnJhbWUuaHRtbCcpXSxcclxuICAgICAgICAgICAgZnVuYzogZnVuY3Rpb24gRXh0ZW5zaW9uSWQoZXh0ZW5zaW9uSWQsIG1vZGVsRnJhbWVVcmwpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5DU0dPRkxPQVRfRVhURU5TSU9OX0lEID0gZXh0ZW5zaW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX01PREVMX0ZSQU1FX1VSTCA9IG1vZGVsRnJhbWVVcmw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICBmaWxlczogW3JlcS5wYXRoXSxcclxuICAgICAgICAgICAgd29ybGQ6ICdNQUlOJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbik7XHJcbiIsImltcG9ydCB7U2ltcGxlSGFuZGxlcn0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RpY2tlciB7XHJcbiAgICBzbG90OiBudW1iZXI7XHJcbiAgICBzdGlja2VySWQ6IG51bWJlcjtcclxuICAgIGNvZGVuYW1lPzogc3RyaW5nO1xyXG4gICAgbWF0ZXJpYWw/OiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgd2Vhcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtSW5mbyB7XHJcbiAgICBzdGlja2VyczogU3RpY2tlcltdO1xyXG4gICAgaXRlbWlkOiBzdHJpbmc7XHJcbiAgICBkZWZpbmRleDogbnVtYmVyO1xyXG4gICAgcGFpbnRpbmRleDogbnVtYmVyO1xyXG4gICAgcmFyaXR5OiBudW1iZXI7XHJcbiAgICBxdWFsaXR5OiBudW1iZXI7XHJcbiAgICBwYWludHNlZWQ6IG51bWJlcjtcclxuICAgIGludmVudG9yeTogbnVtYmVyO1xyXG4gICAgb3JpZ2luOiBudW1iZXI7XHJcbiAgICBzOiBzdHJpbmc7XHJcbiAgICBhOiBzdHJpbmc7XHJcbiAgICBkOiBzdHJpbmc7XHJcbiAgICBtOiBzdHJpbmc7XHJcbiAgICBmbG9hdHZhbHVlOiBudW1iZXI7XHJcbiAgICBpbWFnZXVybDogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuICAgIHdlYXBvbl90eXBlPzogc3RyaW5nO1xyXG4gICAgaXRlbV9uYW1lPzogc3RyaW5nO1xyXG4gICAgcmFyaXR5X25hbWU/OiBzdHJpbmc7XHJcbiAgICBxdWFsaXR5X25hbWU/OiBzdHJpbmc7XHJcbiAgICBvcmlnaW5fbmFtZT86IHN0cmluZztcclxuICAgIHdlYXJfbmFtZT86IHN0cmluZztcclxuICAgIGZ1bGxfaXRlbV9uYW1lPzogc3RyaW5nO1xyXG4gICAgbG93X3Jhbms/OiBudW1iZXI7XHJcbiAgICBoaWdoX3Jhbms/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3Qge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgbGlzdFByaWNlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoSW5zcGVjdEluZm9SZXNwb25zZSB7XHJcbiAgICBpdGVtaW5mbzogSXRlbUluZm87XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZldGNoSW5zcGVjdEluZm8gPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaEluc3BlY3RJbmZvUmVxdWVzdCwgRmV0Y2hJbnNwZWN0SW5mb1Jlc3BvbnNlPihcclxuICAgIFJlcXVlc3RUeXBlLkZFVENIX0lOU1BFQ1RfSU5GTyxcclxuICAgIChyZXEpID0+IHtcclxuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkuY3Nnb2Zsb2F0LmNvbS8/dXJsPSR7cmVxLmxpbmt9Jm1pbmltYWw9dHJ1ZSR7XHJcbiAgICAgICAgICAgIHJlcS5saXN0UHJpY2UgPyAnJmxpc3RQcmljZT0nICsgcmVxLmxpc3RQcmljZSA6ICcnXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVybCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoanNvbjogRmV0Y2hJbnNwZWN0SW5mb1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihqc29uLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxGZXRjaEluc3BlY3RJbmZvUmVzcG9uc2U+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQge1NpbXBsZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7VHJhZGV9IGZyb20gJy4uLy4uL3R5cGVzL2Zsb2F0X21hcmtldCc7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZXRjaFBlbmRpbmdUcmFkZXNSZXF1ZXN0IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoUGVuZGluZ1RyYWRlc1Jlc3BvbnNlIHtcclxuICAgIHRyYWRlc190b19zZW5kOiBUcmFkZVtdO1xyXG4gICAgdHJhZGVzX3RvX3JlY2VpdmU6IFRyYWRlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGZXRjaFBlbmRpbmdUcmFkZXMgPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaFBlbmRpbmdUcmFkZXNSZXF1ZXN0LCBGZXRjaFBlbmRpbmdUcmFkZXNSZXNwb25zZT4oXHJcbiAgICBSZXF1ZXN0VHlwZS5GRVRDSF9QRU5ESU5HX1RSQURFUyxcclxuICAgIGFzeW5jIChyZXEpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9hcGkvdjEvbWUvcGVuZGluZy10cmFkZXNgLCB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgfSkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkgYXMgUHJvbWlzZTxGZXRjaFBlbmRpbmdUcmFkZXNSZXNwb25zZT47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCB7UmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IE1lc3NhZ2VTZW5kZXIgPSBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVIYW5kbGVyPFJlcSwgUmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogUmVxdWVzdFR5cGUsIHByaXZhdGUgaGFuZGxlcjogKHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKSA9PiBQcm9taXNlPFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIocmVxdWVzdCwgc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbXB0eSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtcHR5UmVxdWVzdEhhbmRsZXI8UmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxFbXB0eSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAoc2VuZGVyOiBNZXNzYWdlU2VuZGVyKSA9PiBQcm9taXNlPFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBFbXB0eSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlSZXNwb25zZUhhbmRsZXI8UmVxPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgdm9pZD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8dm9pZD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIFJlcXVlc3RUeXBlIHtcclxuICAgIEVYRUNVVEVfU0NSSVBUX09OX1BBR0UsXHJcbiAgICBFWEVDVVRFX0NTU19PTl9QQUdFLFxyXG4gICAgRkVUQ0hfSU5TUEVDVF9JTkZPLFxyXG4gICAgRkVUQ0hfU1RBTEwsXHJcbiAgICBTVE9SQUdFX0dFVCxcclxuICAgIFNUT1JBR0VfU0VULFxyXG4gICAgU1RPUkFHRV9SRU1PVkUsXHJcbiAgICBDU01PTkVZX1BSSUNFLFxyXG4gICAgRkVUQ0hfUEVORElOR19UUkFERVMsXHJcbiAgICBGRVRDSF9TS0lOX01PREVMLFxyXG59XHJcbiIsImltcG9ydCBNZXNzYWdlU2VuZGVyID0gY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcjtcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi9oYW5kbGVycy90eXBlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4ge1xyXG4gICAgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcik6IFByb21pc2U8UmVzcD47XHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWZXJzaW9uIHtcclxuICAgIFYxID0gJ0NTR09GTE9BVF9WMScsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxSZXF1ZXN0QnVuZGxlIHtcclxuICAgIHZlcnNpb246IHN0cmluZztcclxuXHJcbiAgICByZXF1ZXN0X3R5cGU6IFJlcXVlc3RUeXBlO1xyXG5cclxuICAgIC8vIElucHV0IHJlcXVlc3RcclxuICAgIHJlcXVlc3Q6IGFueTtcclxuXHJcbiAgICAvLyBSYW5kb20gSUQgdG8gaWRlbnRpZnkgdGhlIHJlcXVlc3RcclxuICAgIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxSZXNwb25zZUJ1bmRsZSB7XHJcbiAgICByZXF1ZXN0X3R5cGU6IFJlcXVlc3RUeXBlO1xyXG5cclxuICAgIC8vIFJlc3BvbnNlXHJcbiAgICByZXNwb25zZTogYW55O1xyXG5cclxuICAgIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gUmFuZG9tIElEIHRvIGlkZW50aWZ5IHRoZSByZXF1ZXN0XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7UmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi4vaGFuZGxlcnMvdHlwZXMnO1xyXG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcblxyXG4vKipcclxuICogUmVzdHJpY3RzIGEgZ2l2ZW4gaGFuZGxlciBzdWNoIHRoYXQgaXQgY2FuIG9ubHkgcnVuIGlmIHRoZSBzZW5kZXIgaXNcclxuICogdmVyaWZpZWQgdG8gYmUgZnJvbSB0aGUgZXh0ZW5zaW9uJ3Mgb3JpZ2luIChpZS4gY29udGVudCBzY3JpcHQpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJpdmlsZWdlZEhhbmRsZXI8UmVxLCBSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuZ2V0VHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+IHtcclxuICAgICAgICBpZiAoc2VuZGVyLmlkICE9PSBjaHJvbWUucnVudGltZS5pZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gYWNjZXNzIHJlc3RyaWN0ZWQgbWV0aG9kIG91dHNpZGUgb2Ygc2VjdXJlIGNvbnRleHQgKGllLiBjb250ZW50IHNjcmlwdCknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlUmVxdWVzdChyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RmxvYXRFbGVtZW50fSBmcm9tICcuLi9jdXN0b20nO1xyXG5pbXBvcnQge2h0bWwsIGNzcywgSFRNTFRlbXBsYXRlUmVzdWx0fSBmcm9tICdsaXQnO1xyXG5pbXBvcnQge3N0YXRlfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7QXNzZXR9IGZyb20gJy4uLy4uL3R5cGVzL3N0ZWFtJztcclxuaW1wb3J0IHtnRmxvYXRGZXRjaGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mbG9hdF9mZXRjaGVyJztcclxuaW1wb3J0IHtJdGVtSW5mb30gZnJvbSAnLi4vLi4vYnJpZGdlL2hhbmRsZXJzL2ZldGNoX2luc3BlY3RfaW5mbyc7XHJcbmltcG9ydCB7Zm9ybWF0RmxvYXRXaXRoUmFuaywgZm9ybWF0U2VlZCwgZ2V0TG93ZXN0UmFua30gZnJvbSAnLi4vLi4vdXRpbHMvc2tpbic7XHJcbmltcG9ydCB7aXNTa2lufSBmcm9tICcuLi8uLi91dGlscy9za2luJztcclxuaW1wb3J0IHtnZXRSYW5rQ29sb3VyfSBmcm9tICcuLi8uLi91dGlscy9yYW5rcyc7XHJcbmltcG9ydCB7T2JzZXJ2ZX0gZnJvbSAnLi4vLi4vdXRpbHMvb2JzZXJ2ZXJzJztcclxuXHJcbi8vIEdlbmVyaWMgYW5ub3RhdG9yIG9mIGl0ZW0gaG9sZGVyIG1ldGFkYXRhIChmbG9hdCwgc2VlZCwgZXRjLi4uKVxyXG4vLyBNdXN0IGJlIGV4dGVuZGVkIHRvIHVzZSBhcyBhIGNvbXBvbmVudFxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbUhvbGRlck1ldGFkYXRhIGV4dGVuZHMgRmxvYXRFbGVtZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBbXHJcbiAgICAgICAgLi4uRmxvYXRFbGVtZW50LnN0eWxlcyxcclxuICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgIC5mbG9hdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWVkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICBdO1xyXG5cclxuICAgIEBzdGF0ZSgpXHJcbiAgICBwcml2YXRlIGl0ZW1JbmZvOiBJdGVtSW5mbyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBnZXQgYXNzZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiAkSih0aGlzKS5wYXJlbnQoKS5hdHRyKCdpZCcpPy5zcGxpdCgnXycpWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldCBhc3NldCgpOiBBc3NldCB8IHVuZGVmaW5lZDtcclxuICAgIGFic3RyYWN0IGdldCBvd25lclN0ZWFtSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGdldCBpbnNwZWN0TGluaygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghdGhpcy5hc3NldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYXNzZXQ/LmFjdGlvbnMgfHwgdGhpcy5hc3NldD8uYWN0aW9ucz8ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vd25lclN0ZWFtSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRcclxuICAgICAgICAgICAgPy5hY3Rpb25zIVswXS5saW5rLnJlcGxhY2UoJyVvd25lcl9zdGVhbWlkJScsIHRoaXMub3duZXJTdGVhbUlkKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnJWFzc2V0aWQlJywgdGhpcy5hc3NldElkISk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBIVE1MVGVtcGxhdGVSZXN1bHQge1xyXG4gICAgICAgIGlmICghdGhpcy5pdGVtSW5mbykgcmV0dXJuIGh0bWxgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdFwiPiR7Zm9ybWF0RmxvYXRXaXRoUmFuayh0aGlzLml0ZW1JbmZvLCA2KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlZWRcIj4ke2Zvcm1hdFNlZWQodGhpcy5pdGVtSW5mbyl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnNwZWN0TGluaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIGFzc2V0IGV4aXN0c1xyXG4gICAgICAgICAgICBPYnNlcnZlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5pbnNwZWN0TGluayxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnNwZWN0TGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAyMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hc3NldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIWlzU2tpbih0aGlzLmFzc2V0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBDb21tb2RpdGllcyB3b24ndCBoYXZlIGluc3BlY3QgbGlua3NcclxuICAgICAgICBpZiAoIXRoaXMuaW5zcGVjdExpbmspIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtSW5mbyA9IGF3YWl0IGdGbG9hdEZldGNoZXIuZmV0Y2goe1xyXG4gICAgICAgICAgICAgICAgbGluazogdGhpcy5pbnNwZWN0TGluayxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBmbG9hdCBmb3IgJHt0aGlzLmFzc2V0SWR9OiAke2UudG9TdHJpbmcoKX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVSYW5rU2hpbmUodGhpcy5pdGVtSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFubm90YXRlUmFua1NoaW5lKGluZm86IEl0ZW1JbmZvKSB7XHJcbiAgICAgICAgY29uc3QgcmFuayA9IGdldExvd2VzdFJhbmsoaW5mbyk7XHJcbiAgICAgICAgaWYgKCFyYW5rIHx8IHJhbmsgPiA1KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2UgdGhlIGludmVudG9yeSBib3ggY29sb3VyZWQgOylcclxuICAgICAgICAkSih0aGlzKS5wYXJlbnQoKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XHJcbiAgICAgICAgJEoodGhpcykucGFyZW50KCkuZmluZCgnaW1nJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZ2V0UmFua0NvbG91cihyYW5rKSk7XHJcbiAgICAgICAgJEoodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2NzZ29mbG9hdC1zaGluZScpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3NzLCBodG1sfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtjbGFzc01hcH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMnO1xuXG5pbXBvcnQge3Byb3BlcnR5fSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge0N1c3RvbUVsZW1lbnR9IGZyb20gJy4uLy4uL2luamVjdG9ycyc7XG5pbXBvcnQge0Zsb2F0RWxlbWVudH0gZnJvbSAnLi4vLi4vY3VzdG9tJztcblxuZW51bSBCdXR0b25UeXBlIHtcbiAgICBHcmVlbldoaXRlID0gJ2dyZWVuX3doaXRlJyxcbiAgICBHcmV5V2hpdGUgPSAnZ3JleV93aGl0ZScsXG59XG5cbkBDdXN0b21FbGVtZW50KClcbmV4cG9ydCBjbGFzcyBTdGVhbUJ1dHRvbiBleHRlbmRzIEZsb2F0RWxlbWVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFN0cmluZ30pXG4gICAgcHJpdmF0ZSB0eXBlOiBCdXR0b25UeXBlID0gQnV0dG9uVHlwZS5HcmVlbldoaXRlO1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IFtcbiAgICAgICAgLi4uRmxvYXRFbGVtZW50LnN0eWxlcyxcbiAgICAgICAgY3NzYFxuICAgICAgICAgICAgLmJ0bl9ncmVlbl93aGl0ZV9pbm5lcmZhZGUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMmU4ODUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNGQwMDc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYTRkMDA3IDUlLCAjNTM2OTA0IDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2E0ZDAwNyA1JSwgIzUzNjkwNCA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZWVuX3doaXRlX2lubmVyZmFkZSA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3OTk5MDU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzk5OTA1IDUlLCAjNTM2OTA0IDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc5OTkwNSA1JSwgIzUzNjkwNCA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZWVuX3doaXRlX2lubmVyZmFkZTpub3QoLmJ0bl9kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCk6bm90KC5idG5fYWN0aXZlKTpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjZkOTA4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2I2ZDkwOCA1JSwgIzgwYTAwNiA5NSUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiNmQ5MDggNSUsICM4MGEwMDYgOTUlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bl9ncmVlbl93aGl0ZV9pbm5lcmZhZGU6bm90KC5idG5fZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpOm5vdCguYnRuX2FjdGl2ZSk6bm90KC5hY3RpdmUpOmhvdmVyID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ExYmYwNztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNhMWJmMDcgNSUsICM4MGEwMDYgOTUlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYTFiZjA3IDUlLCAjODBhMDA2IDk1JSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG5fZ3JleV93aGl0ZV9pbm5lcmZhZGUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhY2I1YmQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYWNiNWJkIDUlLCAjNDE0YTUyIDk1JSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2FjYjViZCA1JSwgIzQxNGE1MiA5NSUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuX2dyZXlfd2hpdGVfaW5uZXJmYWRlID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc3ODA4ODtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM3NzgwODggNSUsICM0MTRhNTIgOTUlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzc4MDg4IDUlLCAjNDE0YTUyIDk1JSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG5fZ3JleV93aGl0ZV9pbm5lcmZhZGU6bm90KC5idG5fZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpOm5vdCguYnRuX2FjdGl2ZSk6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NmZDhlMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNjZmQ4ZTAgNSUsICM1NjVmNjcgOTUlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjY2ZkOGUwIDUlLCAjNTY1ZjY3IDk1JSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG5fZ3JleV93aGl0ZV9pbm5lcmZhZGU6bm90KC5idG5fZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpOm5vdCguYnRuX2FjdGl2ZSk6bm90KC5hY3RpdmUpOmhvdmVyID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk5YTJhYTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM5OWEyYWEgNSUsICM1NjVmNjcgOTUlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTlhMmFhIDUlLCAjNTY1ZjY3IDk1JSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG5fc21hbGwgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgIF07XG5cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBidG5DbGFzcygpIHtcbiAgICAgICAgY29uc3Qgcjoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge2J0bl9zbWFsbDogdHJ1ZX07XG4gICAgICAgIHJbYGJ0bl8ke3RoaXMudHlwZX1faW5uZXJmYWRlYF0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gY2xhc3NNYXAocik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiJHt0aGlzLmJ0bkNsYXNzKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICBgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Y3NzLCBMaXRFbGVtZW50fSBmcm9tICdsaXQnO1xuXG5mdW5jdGlvbiBjYW1lbFRvRGFzaENhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5zcGxpdCgvKD89W0EtWl0pLylcbiAgICAgICAgLmpvaW4oJy0nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gTGl0RWxlbWVudCB3cmFwcGVyIHdpdGggYSBwcmUtZGV0ZXJtaW5lZCB0YWdcbmV4cG9ydCBjbGFzcyBGbG9hdEVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gW1xuICAgICAgICBjc3NgXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjkzOTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkIG5vbmUgbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlYmViZWI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdwYXNzd29yZCddLFxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nbnVtYmVyJ10sXG4gICAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY29sb3InXSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NvbG9yJ106Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NvbG9yJ106Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgXTtcblxuICAgIHN0YXRpYyB0YWcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBjc2dvZmxvYXQtJHtjYW1lbFRvRGFzaENhc2UodGhpcy5uYW1lKX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbGVtKCk6IGFueSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtGbG9hdEVsZW1lbnR9IGZyb20gJy4vY3VzdG9tJztcbmltcG9ydCB7aW5QYWdlQ29udGV4dH0gZnJvbSAnLi4vdXRpbHMvc25pcHMnO1xuXG5leHBvcnQgZW51bSBJbmplY3Rpb25Nb2RlIHtcbiAgICAvLyBJbmplY3RzIG9uY2UgYXQgcGFnZSBsb2FkIGZvciBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VsZWN0b3JcbiAgICBPTkNFLFxuICAgIC8vIENvbnRpbnVhbGx5IGluamVjdHMgd2hlbmV2ZXIgbmV3IGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlXG4gICAgLy8gc2VsZWN0b3IgZXhpc3QgdGhhdCBoYXZlbid0IGJlZW4gaW5qZWN0ZWQgaW50byB5ZXRcbiAgICAvL1xuICAgIC8vIFNob3VsZCBiZSB1c2UgZm9yIFwiZHluYW1pY1wiIGVsZW1lbnRzXG4gICAgQ09OVElOVU9VUyxcbn1cblxuZW51bSBJbmplY3Rpb25UeXBlIHtcbiAgICBBcHBlbmQsXG4gICAgQmVmb3JlLFxuICAgIEFmdGVyLFxufVxuXG5pbnRlcmZhY2UgSW5qZWN0aW9uQ29uZmlnIHtcbiAgICBleGlzdHM6IChjdHg6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gICAgb3A6IChjdHg6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHRhcmdldDogdHlwZW9mIEZsb2F0RWxlbWVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgSW5qZWN0aW9uQ29uZmlnczoge1trZXkgaW4gSW5qZWN0aW9uVHlwZV06IEluamVjdGlvbkNvbmZpZ30gPSB7XG4gICAgW0luamVjdGlvblR5cGUuQXBwZW5kXToge1xuICAgICAgICBleGlzdHM6IChjdHgsIHNlbGVjdG9yKSA9PiAhIWN0eC5jaGlsZHJlbihzZWxlY3RvcikubGVuZ3RoLFxuICAgICAgICBvcDogKGN0eCwgdGFyZ2V0KSA9PiBjdHguYXBwZW5kKHRhcmdldC5lbGVtKCkpLFxuICAgIH0sXG4gICAgW0luamVjdGlvblR5cGUuQmVmb3JlXToge1xuICAgICAgICBleGlzdHM6IChjdHgsIHNlbGVjdG9yKSA9PiAhIWN0eC5wYXJlbnQoKS5jaGlsZHJlbihzZWxlY3RvcikubGVuZ3RoLFxuICAgICAgICBvcDogKGN0eCwgdGFyZ2V0KSA9PiBjdHguYmVmb3JlKHRhcmdldC5lbGVtKCkpLFxuICAgIH0sXG4gICAgW0luamVjdGlvblR5cGUuQWZ0ZXJdOiB7XG4gICAgICAgIGV4aXN0czogKGN0eCwgc2VsZWN0b3IpID0+ICEhY3R4LnBhcmVudCgpLmNoaWxkcmVuKHNlbGVjdG9yKS5sZW5ndGgsXG4gICAgICAgIG9wOiAoY3R4LCB0YXJnZXQpID0+IGN0eC5hZnRlcih0YXJnZXQuZWxlbSgpKSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogdHlwZW9mIEZsb2F0RWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmICghaW5QYWdlQ29udGV4dCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3VzdG9tRWxlbWVudCh0YXJnZXQudGFnKCkpKHRhcmdldCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gSW5qZWN0KHNlbGVjdG9yOiBzdHJpbmcsIG1vZGU6IEluamVjdGlvbk1vZGUsIHR5cGU6IEluamVjdGlvblR5cGUpOiBhbnkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiB0eXBlb2YgRmxvYXRFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKCFpblBhZ2VDb250ZXh0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSW5qZWN0aW9uTW9kZS5PTkNFOlxuICAgICAgICAgICAgICAgICRKKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgSW5qZWN0aW9uQ29uZmlnc1t0eXBlXS5vcCgkSih0aGlzKSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW5qZWN0aW9uTW9kZS5DT05USU5VT1VTOlxuICAgICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJEooc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgYWRkIHRoZSBpdGVtIGFnYWluIGlmIHdlIGFscmVhZHkgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEluamVjdGlvbkNvbmZpZ3NbdHlwZV0uZXhpc3RzKCRKKHRoaXMpLCB0YXJnZXQudGFnKCkpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluamVjdGlvbkNvbmZpZ3NbdHlwZV0ub3AoJEoodGhpcyksIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5qZWN0QXBwZW5kKHNlbGVjdG9yOiBzdHJpbmcsIG1vZGU6IEluamVjdGlvbk1vZGUgPSBJbmplY3Rpb25Nb2RlLk9OQ0UpOiBhbnkge1xuICAgIHJldHVybiBJbmplY3Qoc2VsZWN0b3IsIG1vZGUsIEluamVjdGlvblR5cGUuQXBwZW5kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEluamVjdEJlZm9yZShzZWxlY3Rvcjogc3RyaW5nLCBtb2RlOiBJbmplY3Rpb25Nb2RlID0gSW5qZWN0aW9uTW9kZS5PTkNFKTogYW55IHtcbiAgICByZXR1cm4gSW5qZWN0KHNlbGVjdG9yLCBtb2RlLCBJbmplY3Rpb25UeXBlLkJlZm9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmplY3RBZnRlcihzZWxlY3Rvcjogc3RyaW5nLCBtb2RlOiBJbmplY3Rpb25Nb2RlID0gSW5qZWN0aW9uTW9kZS5PTkNFKTogYW55IHtcbiAgICByZXR1cm4gSW5qZWN0KHNlbGVjdG9yLCBtb2RlLCBJbmplY3Rpb25UeXBlLkFmdGVyKTtcbn1cbiIsImltcG9ydCB7RmxvYXRFbGVtZW50fSBmcm9tICcuLi9jdXN0b20nO1xyXG5pbXBvcnQge0N1c3RvbUVsZW1lbnQsIEluamVjdEJlZm9yZX0gZnJvbSAnLi4vaW5qZWN0b3JzJztcclxuaW1wb3J0IHtjc3MsIGh0bWwsIEhUTUxUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHtDbGllbnRTZW5kfSBmcm9tICcuLi8uLi9icmlkZ2UvY2xpZW50JztcclxuaW1wb3J0IHtGZXRjaFBlbmRpbmdUcmFkZXMsIEZldGNoUGVuZGluZ1RyYWRlc1Jlc3BvbnNlfSBmcm9tICcuLi8uLi9icmlkZ2UvaGFuZGxlcnMvZmV0Y2hfcGVuZGluZ190cmFkZXMnO1xyXG5pbXBvcnQge1RyYWRlLCBUcmFkZVN0YXRlfSBmcm9tICcuLi8uLi90eXBlcy9mbG9hdF9tYXJrZXQnO1xyXG5pbXBvcnQge3N0YXRlfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7T2JzZXJ2ZX0gZnJvbSAnLi4vLi4vdXRpbHMvb2JzZXJ2ZXJzJztcclxuXHJcbmltcG9ydCAnLi4vY29tbW9uL3VpL3N0ZWFtLWJ1dHRvbic7XHJcbmltcG9ydCB7QXBwSWQsIENvbnRleHRJZH0gZnJvbSAnLi4vLi4vdHlwZXMvc3RlYW1fY29uc3RhbnRzJztcclxuXHJcbkBDdXN0b21FbGVtZW50KClcclxuQEluamVjdEJlZm9yZSgnZGl2LnRyYWRlX2FyZWEnKVxyXG5leHBvcnQgY2xhc3MgQXV0b0ZpbGwgZXh0ZW5kcyBGbG9hdEVsZW1lbnQge1xyXG4gICAgQHN0YXRlKClcclxuICAgIHByaXZhdGUgcGVuZGluZ1RyYWRlc1Jlc3BvbnNlOiBGZXRjaFBlbmRpbmdUcmFkZXNSZXNwb25zZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0aWMgc3R5bGVzID0gW1xyXG4gICAgICAgIC4uLkZsb2F0RWxlbWVudC5zdHlsZXMsXHJcbiAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGFpbmVyLndhcm5pbmcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbG9hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zYWxlLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgIF07XHJcblxyXG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nVHJhZGVzUmVzcG9uc2UgPSBhd2FpdCBDbGllbnRTZW5kKEZldGNoUGVuZGluZ1RyYWRlcywge30pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ2ZhaWxlZCB0byBmZXRjaCBwZW5kaW5nIHRyYWRlcyBvbiBDU0dPRmxvYXQgTWFya2V0LCB0aGV5IGFyZSBsaWtlbHkgbm90IGxvZ2dlZCBpbi4nLFxyXG4gICAgICAgICAgICAgICAgZS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYnNlcnZlKFxyXG4gICAgICAgICAgICAoKSA9PiBnX3JnQ3VycmVudFRyYWRlU3RhdHVzLm1lLmFzc2V0cy5sZW5ndGgsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEl0ZW1zIHRoZXkgYXJlIGdpdmluZyBjaGFuZ2VkLCB3ZSBjYW4gcG90ZW50aWFsbHkgaGlkZS9zaG93IGFuIGF1dG8tZmlsbCBkaWFsb2dcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBdXRvRmlsbERpYWxvZyh0cmFkZTogVHJhZGUpOiBIVE1MVGVtcGxhdGVSZXN1bHQge1xyXG4gICAgICAgIGlmICh0cmFkZS5zdGF0ZSAhPT0gVHJhZGVTdGF0ZS5QRU5ESU5HKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGV5IGFjY2VwdGVkIHRoZSBzYWxlIG9uIENTR09GbG9hdCBmaXJzdFxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRyYWRlLmNvbnRyYWN0Lml0ZW07XHJcblxyXG4gICAgICAgIGlmIChnX3JnQ3VycmVudFRyYWRlU3RhdHVzLm1lLmFzc2V0cy5maW5kKChhKSA9PiBhLmFzc2V0aWQgPT09IGl0ZW0uYXNzZXRfaWQpKSB7XHJcbiAgICAgICAgICAgIC8vIEl0ZW0gaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0aGUgdHJhZGUgb2ZmZXJcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RlYW1jZG4tYS5ha2FtYWloZC5uZXQvc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9hdmF0YXJzLzc5Lzc5OGExMjMxNjYzN2FkOGZiYjkxZGRiN2RjNjNmNzcwYjY4MGJkMTlfZnVsbC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDMycHg7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiAke2l0ZW0ubWFya2V0X2hhc2hfbmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYWxlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV0ZWN0ZWQgU2FsZSAoRmxvYXQ6ICR7aXRlbS5mbG9hdF92YWx1ZS50b0ZpeGVkKDEyKX0sIFNlZWQ6ICR7aXRlbS5wYWludF9zZWVkfSlcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGNzZ29mbG9hdC1zdGVhbS1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAudGV4dD1cIiR7J0F1dG8tRmlsbCd9XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkeygpID0+IHRoaXMuYXV0b0ZpbGwodHJhZGUpfVwiXHJcbiAgICAgICAgICAgICAgICA+PC9jc2dvZmxvYXQtc3RlYW0tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhIHdhcm5pbmcgdG8gdXNlcnMgaWYgdHJhZGUgaW5jbHVkZXMgaXRlbSB3aXRoIGNzZ29mbG9hdCBub3RlIHRoYXQgZG9lc24ndCBtYXRjaCBhbiBleGlzdGluZyBzYWxlXHJcbiAgICAgKlxyXG4gICAgICogVHJpZXMgdG8gcHJldmVudCBzY2VuYXJpb3Mgd2hlcmUgbWFsaWNpb3VzIGFjdG9ycyBzZW5kIG9mZmVyIHdpdGggQ1NHT0Zsb2F0IHRleHQgcmVxdWVzdGluZyBhbiBpdGVtXHJcbiAgICAgKi9cclxuICAgIHNob3dXYXJuaW5nRGlhbG9nKCk6IEhUTUxUZW1wbGF0ZVJlc3VsdCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0F1dG9GaWxsVGV4dCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYXNJdGVtV2l0aE5vU2FsZSA9IGdfcmdDdXJyZW50VHJhZGVTdGF0dXMubWUuYXNzZXRzLmZpbmQoXHJcbiAgICAgICAgICAgIChhKSA9PiAhdGhpcy5wZW5kaW5nVHJhZGVzUmVzcG9uc2U/LnRyYWRlc190b19zZW5kLmZpbmQoKGIpID0+IGIuY29udHJhY3QuaXRlbS5hc3NldF9pZCA9PT0gYS5hc3NldGlkKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghaGFzSXRlbVdpdGhOb1NhbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2F2YXRhcnMvNzkvNzk4YTEyMzE2NjM3YWQ4ZmJiOTFkZGI3ZGM2M2Y3NzBiNjgwYmQxOV9mdWxsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMzJweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+IFdhcm5pbmchIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgb2YgdGhlIGl0ZW1zIGluIHRoZSBvZmZlciB3ZXJlIG5vdCBwdXJjaGFzZWQgZnJvbSB5b3Ugb24gQ1NHT0Zsb2F0IE1hcmtldCAob3IgeW91J3JlIGxvZ2dlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRvIHRoZSB3cm9uZyBhY2NvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBIVE1MVGVtcGxhdGVSZXN1bHQge1xyXG4gICAgICAgIGlmICghdGhpcy5wZW5kaW5nVHJhZGVzUmVzcG9uc2UpIHJldHVybiBodG1sYGA7XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICAke3RoaXMucGVuZGluZ1RyYWRlc1Jlc3BvbnNlLnRyYWRlc190b19zZW5kXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlKSA9PiBlLmJ1eWVyX2lkID09PSBVc2VyVGhlbT8uc3RyU3RlYW1JZClcclxuICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IHRoaXMucmVuZGVyQXV0b0ZpbGxEaWFsb2coZSkpfVxyXG4gICAgICAgICAgICAke3RoaXMuc2hvd1dhcm5pbmdEaWFsb2coKX1cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9GaWxsKHRyYWRlOiBUcmFkZSkge1xyXG4gICAgICAgICRKKCcjaW52ZW50b3J5X3NlbGVjdF95b3VyX2ludmVudG9yeScpLmNsaWNrKCk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBVc2VyWW91Py5maW5kQXNzZXQoQXBwSWQuQ1NHTywgQ29udGV4dElkLlBSSU1BUlksIHRyYWRlLmNvbnRyYWN0Lml0ZW0uYXNzZXRfaWQpPy5lbGVtZW50O1xyXG4gICAgICAgIGlmICghZWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGZpbmQgYXNzZXQgZWxlbWVudCBmb3IgaWQgJyArIHRyYWRlLmNvbnRyYWN0Lml0ZW0uYXNzZXRfaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNb3ZlSXRlbVRvVHJhZGUoZWwpO1xyXG5cclxuICAgICAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWRlX29mZmVyX25vdGUnKTtcclxuICAgICAgICBpZiAobm90ZSkge1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICBub3RlIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnRcclxuICAgICAgICAgICAgKS52YWx1ZSA9IGBDU0dPRmxvYXQgTWFya2V0IFRyYWRlIE9mZmVyICMke3RyYWRlLmlkfSBcXG5cXG5UaGFua3MgZm9yIHVzaW5nIENTR09GbG9hdCFgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNBdXRvRmlsbFRleHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdHJhZGVNZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luY2x1ZGVkX3RyYWRlX29mZmVyX25vdGVfY3RuJyk7XHJcbiAgICAgICAgaWYgKHRyYWRlTWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWQgPSAodHJhZGVNZXNzYWdlc1swXSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0LnRyaW0oKS5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNhbml0aXplZC5pbmNsdWRlcygnY3Nnb2Zsb2F0JykgfHwgc2FuaXRpemVkLmluY2x1ZGVzKCdmbG9hdG1hcmtldCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q3VzdG9tRWxlbWVudCwgSW5qZWN0QXBwZW5kLCBJbmplY3Rpb25Nb2RlfSBmcm9tICcuLi9pbmplY3RvcnMnO1xuaW1wb3J0IHtBc3NldCwgVXNlclNvbWVvbmV9IGZyb20gJy4uLy4uL3R5cGVzL3N0ZWFtJztcbmltcG9ydCB7SXRlbUhvbGRlck1ldGFkYXRhfSBmcm9tICcuLi9jb21tb24vaXRlbV9ob2xkZXJfbWV0YWRhdGEnO1xuaW1wb3J0IHtBcHBJZCwgQ29udGV4dElkfSBmcm9tICcuLi8uLi90eXBlcy9zdGVhbV9jb25zdGFudHMnO1xuXG4vLyBBbm5vdGF0ZXMgaXRlbSBpbmZvIChmbG9hdCwgc2VlZCwgZXRjLi4uKSBpbiBib3hlcyBvbiB0aGUgVHJhZGUgT2ZmZXIgUGFnZVxuQEN1c3RvbUVsZW1lbnQoKVxuLy8gSXRlbXMgd2hlbiBicm93c2luZyB0aGVpci95b3VyIGludmVudG9yeVxuQEluamVjdEFwcGVuZCgnZGl2LmludmVudG9yeV9wYWdlOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXSkgLml0ZW1Ib2xkZXIgZGl2LmFwcDczMCcsIEluamVjdGlvbk1vZGUuQ09OVElOVU9VUylcbi8vIEl0ZW1zIHNlbGVjdGVkIHdpdGhpbiB0aGUgdHJhZGUgb2ZmZXJcbkBJbmplY3RBcHBlbmQoJy50cmFkZV9vZmZlciAuaXRlbUhvbGRlciBkaXYuYXBwNzMwJywgSW5qZWN0aW9uTW9kZS5DT05USU5VT1VTKVxuZXhwb3J0IGNsYXNzIFRyYWRlSXRlbUhvbGRlck1ldGFkYXRhIGV4dGVuZHMgSXRlbUhvbGRlck1ldGFkYXRhIHtcbiAgICBnZXQgb3duaW5nVXNlcigpOiBVc2VyU29tZW9uZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5hc3NldElkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKFVzZXJUaGVtICYmIFRyYWRlSXRlbUhvbGRlck1ldGFkYXRhLmdldEFzc2V0RnJvbVVzZXIoVXNlclRoZW0sIHRoaXMuYXNzZXRJZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyVGhlbTtcbiAgICAgICAgfSBlbHNlIGlmIChVc2VyWW91ICYmIFRyYWRlSXRlbUhvbGRlck1ldGFkYXRhLmdldEFzc2V0RnJvbVVzZXIoVXNlcllvdSwgdGhpcy5hc3NldElkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJZb3U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgb3duZXJTdGVhbUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5hc3NldElkKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub3duaW5nVXNlcj8uc3RyU3RlYW1JZDtcbiAgICB9XG5cbiAgICBnZXQgYXNzZXQoKTogQXNzZXQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuYXNzZXRJZCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghdGhpcy5vd25pbmdVc2VyKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIFRyYWRlSXRlbUhvbGRlck1ldGFkYXRhLmdldEFzc2V0RnJvbVVzZXIodGhpcy5vd25pbmdVc2VyLCB0aGlzLmFzc2V0SWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldEFzc2V0RnJvbVVzZXIodXNlcjogVXNlclNvbWVvbmUsIGFzc2V0SWQ6IHN0cmluZyk6IEFzc2V0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHVzZXIucmdDb250ZXh0c1tBcHBJZC5DU0dPXVtDb250ZXh0SWQuUFJJTUFSWV0uaW52ZW50b3J5Py5yZ0ludmVudG9yeVthc3NldElkXSkge1xuICAgICAgICAgICAgY29uc3QgaW52ZW50b3J5ID0gdXNlci5yZ0NvbnRleHRzW0FwcElkLkNTR09dW0NvbnRleHRJZC5QUklNQVJZXS5pbnZlbnRvcnk7XG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5Py5yZ0ludmVudG9yeVthc3NldElkXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7RXhlY3V0ZVNjcmlwdE9uUGFnZX0gZnJvbSAnLi4vYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfc2NyaXB0JztcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vYnJpZGdlL2NsaWVudCc7XG5pbXBvcnQge2luUGFnZUNvbnRleHR9IGZyb20gJy4uL3V0aWxzL3NuaXBzJztcbmltcG9ydCB7RXhlY3V0ZUNzc09uUGFnZX0gZnJvbSAnLi4vYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfY3NzJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIHBhZ2Ugc2NyaXB0LCBleGVjdXRpbmcgaXQgaW4gdGhlIHBhZ2UgY29udGV4dCBpZiBuZWNlc3NhcnlcbiAqXG4gKiBAcGFyYW0gc2NyaXB0UGF0aCBSZWxhdGl2ZSBwYXRoIG9mIHRoZSBzY3JpcHQgKGFsd2F5cyBpbiAuanMpXG4gKiBAcGFyYW0gaWZQYWdlIEZuIHRvIHJ1biBpZiB3ZSBhcmUgaW4gdGhlIHBhZ2UncyBleGVjdXRpb24gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChzY3JpcHRQYXRoOiBzdHJpbmcsIGlmUGFnZTogKCkgPT4gYW55KSB7XG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlIHBhZ2Ugc2NyaXB0IHRvIHJ1biB0aGlzLlxuICAgIGlmIChpblBhZ2VDb250ZXh0KCkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBTZXQgZ2xvYmFsIGlkZW50aWZpZXIgZm9yIG90aGVyIGV4dGVuc2lvbnMgdG8gdXNlXG4gICAgICAgIHdpbmRvdy5jc2dvZmxvYXQgPSB0cnVlO1xuXG4gICAgICAgIGlmUGFnZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIHN0eWxlc1xuICAgIENsaWVudFNlbmQoRXhlY3V0ZUNzc09uUGFnZSwge1xuICAgICAgICBwYXRoOiAnc3JjL2dsb2JhbC5jc3MnLFxuICAgIH0pO1xuXG4gICAgQ2xpZW50U2VuZChFeGVjdXRlU2NyaXB0T25QYWdlLCB7XG4gICAgICAgIHBhdGg6IHNjcmlwdFBhdGgsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCVjIENTR09GbG9hdCBNYXJrZXQgQ2hlY2tlciAodiR7Y2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufSkgYnkgU3RlcDc3NTAgYCxcbiAgICAgICAgJ2JhY2tncm91bmQ6ICMwMDQ1OTQ7IGNvbG9yOiAjZmZmOydcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnJWMgQ2hhbmdlbG9nIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vY3Nnb2Zsb2F0L2V4dGVuc2lvbiAnLFxuICAgICAgICAnYmFja2dyb3VuZDogIzAwNDU5NDsgY29sb3I6ICNmZmY7J1xuICAgICk7XG59XG4iLCJpbXBvcnQge0pvYiwgU2ltcGxlQ2FjaGVkUXVldWV9IGZyb20gJy4uL3V0aWxzL3F1ZXVlJztcclxuaW1wb3J0IHtDbGllbnRTZW5kfSBmcm9tICcuLi9icmlkZ2UvY2xpZW50JztcclxuaW1wb3J0IHtGZXRjaEluc3BlY3RJbmZvLCBGZXRjaEluc3BlY3RJbmZvUmVxdWVzdCwgSXRlbUluZm99IGZyb20gJy4uL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9pbnNwZWN0X2luZm8nO1xyXG5cclxuY2xhc3MgSW5zcGVjdEpvYiBleHRlbmRzIEpvYjxGZXRjaEluc3BlY3RJbmZvUmVxdWVzdD4ge1xyXG4gICAgaGFzaENvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxpbms7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEZsb2F0RmV0Y2hlciBleHRlbmRzIFNpbXBsZUNhY2hlZFF1ZXVlPEZldGNoSW5zcGVjdEluZm9SZXF1ZXN0LCBJdGVtSW5mbz4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqIGFsbG93IHVwIHRvIDEwIHNpbXVsdGFuZW91cyBmbG9hdCBmZXRjaCByZXFzICovXHJcbiAgICAgICAgc3VwZXIoMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKHJlcTogRmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3QpOiBQcm9taXNlPEl0ZW1JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBJbnNwZWN0Sm9iKHJlcSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhc3luYyBwcm9jZXNzKHJlcTogRmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3QpOiBQcm9taXNlPEl0ZW1JbmZvPiB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IENsaWVudFNlbmQoRmV0Y2hJbnNwZWN0SW5mbywgcmVxKTtcclxuICAgICAgICByZXR1cm4gcmVzcC5pdGVtaW5mbztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdGbG9hdEZldGNoZXIgPSBuZXcgRmxvYXRGZXRjaGVyKCk7XHJcbiIsIi8qKlxuICogVHlwZXMgcmVsYXRlZCB0byBDU0dPRmxvYXQgTWFya2V0XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgICBhc3NldF9pZDogc3RyaW5nO1xuICAgIGRfcGFyYW06IHN0cmluZztcbiAgICBkZWZfaW5kZXg6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGZsb2F0X3ZhbHVlOiBudW1iZXI7XG4gICAgaGFzX3NjcmVlbnNob3Q6IGJvb2xlYW47XG4gICAgaGlnaF9yYW5rOiBudW1iZXI7XG4gICAgaWNvbl91cmw6IHN0cmluZztcbiAgICBpbnNwZWN0X2xpbms6IHN0cmluZztcbiAgICBpc19zb3V2ZW5pcjogZmFsc2U7XG4gICAgaXNfc3RhdHRyYWs6IGZhbHNlO1xuICAgIGl0ZW1fbmFtZTogc3RyaW5nO1xuICAgIGxvd19yYW5rOiBudW1iZXI7XG4gICAgbWFya2V0X2hhc2hfbmFtZTogc3RyaW5nO1xuICAgIHBhaW50X2luZGV4OiBudW1iZXI7XG4gICAgcGFpbnRfc2VlZDogbnVtYmVyO1xuICAgIHBoYXNlPzogc3RyaW5nO1xuICAgIHF1YWxpdHk6IG51bWJlcjtcbiAgICByYXJpdHk6IG51bWJlcjtcbiAgICB3ZWFyX25hbWU6IHN0cmluZztcbiAgICBzY20/OiB7XG4gICAgICAgIHByaWNlPzogbnVtYmVyO1xuICAgICAgICB2b2x1bWU/OiBudW1iZXI7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICBhdmF0YXI6IHN0cmluZztcbiAgICBmbGFnczogbnVtYmVyO1xuICAgIG9ubGluZTogYm9vbGVhbjtcbiAgICBzdGFsbF9wdWJsaWM6IGJvb2xlYW47XG4gICAgc3RhdGlzdGljczoge1xuICAgICAgICBtZWRpYW5fdHJhZGVfdGltZTogbnVtYmVyO1xuICAgICAgICB0b3RhbF9hdm9pZGVkX3RyYWRlczogbnVtYmVyO1xuICAgICAgICB0b3RhbF9mYWlsZWRfdHJhZGVzOiBudW1iZXI7XG4gICAgICAgIHRvdGFsX3RyYWRlczogbnVtYmVyO1xuICAgICAgICB0b3RhbF92ZXJpZmllZF90cmFkZXM6IG51bWJlcjtcbiAgICB9O1xuICAgIHN0ZWFtX2lkOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQ29udHJhY3RTdGF0ZSB7XG4gICAgU09MRCA9ICdzb2xkJyxcbiAgICBMSVNURUQgPSAnbGlzdGVkJyxcbiAgICBERUxJU1RFRCA9ICdkZWxpc3RlZCcsXG4gICAgUkVGVU5ERUQgPSAncmVmdW5kZWQnLFxufVxuXG5leHBvcnQgZW51bSBDb250cmFjdFR5cGUge1xuICAgIEJVWV9OT1cgPSAnYnV5X25vdycsXG4gICAgQVVDVElPTiA9ICdhdWN0aW9uJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250cmFjdCB7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaXNfc2VsbGVyOiBib29sZWFuO1xuICAgIGlzX3dhdGNobGlzdGVkOiBib29sZWFuO1xuICAgIGl0ZW06IEl0ZW07XG4gICAgbWF4X29mZmVyX2Rpc2NvdW50PzogbnVtYmVyO1xuICAgIG1pbl9vZmZlcl9wcmljZT86IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIHNlbGxlcjogVXNlcjtcbiAgICBzdGF0ZTogQ29udHJhY3RTdGF0ZTtcbiAgICB0eXBlOiBDb250cmFjdFR5cGU7XG4gICAgd2F0Y2hlcnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gVHJhZGVTdGF0ZSB7XG4gICAgUVVFVUVEID0gJ3F1ZXVlZCcsXG4gICAgUEVORElORyA9ICdwZW5kaW5nJyxcbiAgICBWRVJJRklFRCA9ICd2ZXJpZmllZCcsXG4gICAgRkFJTEVEID0gJ2ZhaWxlZCcsXG4gICAgQ0FOQ0VMTEVEID0gJ2NhbmNlbGxlZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhZGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgYWNjZXB0ZWRfYXQ/OiBzdHJpbmc7XG4gICAgYnV5ZXI6IFVzZXI7XG4gICAgYnV5ZXJfaWQ6IHN0cmluZztcbiAgICBjb250cmFjdDogQ29udHJhY3Q7XG4gICAgY29udHJhY3RfaWQ6IHN0cmluZztcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgZXhwaXJlc19hdD86IHN0cmluZztcbiAgICBncmFjZV9wZXJpb2Rfc3RhcnQ6IHN0cmluZztcbiAgICBtYW51YWxfdmVyaWZpY2F0aW9uOiBib29sZWFuO1xuICAgIG1hbnVhbF92ZXJpZmljYXRpb25fYXQ/OiBzdHJpbmc7XG4gICAgc2VsbGVyX2lkOiBzdHJpbmc7XG4gICAgc3RhdGU6IFRyYWRlU3RhdGU7XG4gICAgdHJhZGVfdXJsOiBzdHJpbmc7XG59XG4iLCIvLyBTZWUgZ19yZ0N1cnJlbmN5RGF0YVxuZXhwb3J0IGVudW0gQ3VycmVuY3kge1xuICAgIFVTRCA9IDIwMDEsXG59XG5cbmV4cG9ydCBlbnVtIEFwcElkIHtcbiAgICBDU0dPID0gNzMwLFxufVxuXG5leHBvcnQgZW51bSBDb250ZXh0SWQge1xuICAgIFBSSU1BUlkgPSAyLFxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJQ2FjaGU8VD4ge1xyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkO1xyXG4gICAgZ2V0T3JUaHJvdyhrZXk6IHN0cmluZyk6IFQ7XHJcbiAgICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgc2l6ZSgpOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgR2VuZXJpYyBDYWNoZSB3aXRoIHN0cmluZ2lmaWVkIGtleXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYWNoZTxUPiBpbXBsZW1lbnRzIElDYWNoZTxUPiB7XHJcbiAgICBwcml2YXRlIGNhY2hlXzoge1trZXk6IHN0cmluZ106IFR9ID0ge307XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVfW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV9ba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPclRocm93KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiBtYXAgW2dldE9yVGhyb3ddYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV9ba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMuY2FjaGVfO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWNoZV8pLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFRUTFdyYXBwZXI8VD4ge1xyXG4gICAgZGF0YTogVDtcclxuICAgIGV4cGlyZXNFcG9jaDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogRXh0ZW5zaW9uIG9mIHtAbGluayBDYWNoZX0gdGhhdCBhbGxvd3Mgc2V0dGluZyBhIFRUTCAodGltZS10by1saXZlKSBvbiBhIGtleVxyXG4gKiBzdWNoIHRoYXQgYXV0b21hdGljYWxseSBleHBpcmVzIGFmdGVyIGEgc3BlY2lmaWVkIHRpbWUuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIGtleXMgd2lsbCBleHBpcmUgd2l0aCB7QGxpbmsgZGVmYXVsdFRUTE1zfS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUVExDYWNoZTxUPiBpbXBsZW1lbnRzIElDYWNoZTxUPiB7XHJcbiAgICBwcml2YXRlIGNhY2hlXzoge1trZXk6IHN0cmluZ106IFRUTFdyYXBwZXI8VD59ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZhdWx0VFRMTXM6IG51bWJlcikge31cclxuXHJcbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY2FjaGVfW2tleV07XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBpdCBhbHNvIHJlc3BlY3RzIFRUTFxyXG4gICAgICAgIGlmICh2YWx1ZS5leHBpcmVzRXBvY2ggPCBEYXRlLm5vdygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JUaHJvdyhrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGtleSAke2tleX0gZG9lcyBub3QgZXhpc3QgaW4gbWFwIFtnZXRPclRocm93XWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpdGhUVEwoa2V5OiBzdHJpbmcsIHZhbHVlOiBULCB0dGxNczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZV9ba2V5XSA9IHtcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIGV4cGlyZXNFcG9jaDogRGF0ZS5ub3coKSArIHR0bE1zLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMuc2V0V2l0aFRUTChrZXksIHZhbHVlLCB0aGlzLmRlZmF1bHRUVExNcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNhY2hlXykubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogU2ltaWxhciB0byBhIHByb21pc2UsIGJ1dCBhbGxvd3MgdGhlIGFiaWxpdHkgdG8gcmVzb2x2ZS9yZWplY3QgaW4gYSBkaWZmZXJlbnQgY29udGV4dFxuICogKi9cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZFByb21pc2U8VD4ge1xuICAgIHByaXZhdGUgcmVzb2x2ZV86ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcmVqZWN0XzogKChyZWFzb246IHN0cmluZykgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9taXNlXzogUHJvbWlzZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdF8gPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmUodmFsdWU6IFQpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlXyEodmFsdWUpO1xuICAgIH1cblxuICAgIHJlamVjdChyZWFzb246IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlamVjdF8hKHJlYXNvbik7XG4gICAgfVxuXG4gICAgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gICAgfVxufVxuIiwiY29uc3QgZG9wcGxlclBoYXNlczoge1twYWludEluZGV4OiBudW1iZXJdOiBzdHJpbmd9ID0ge1xuICAgIDQxODogJ1BoYXNlIDEnLFxuICAgIDQxOTogJ1BoYXNlIDInLFxuICAgIDQyMDogJ1BoYXNlIDMnLFxuICAgIDQyMTogJ1BoYXNlIDQnLFxuICAgIDQxNTogJ1J1YnknLFxuICAgIDQxNjogJ1NhcHBoaXJlJyxcbiAgICA0MTc6ICdCbGFjayBQZWFybCcsXG4gICAgNTY5OiAnUGhhc2UgMScsXG4gICAgNTcwOiAnUGhhc2UgMicsXG4gICAgNTcxOiAnUGhhc2UgMycsXG4gICAgNTcyOiAnUGhhc2UgNCcsXG4gICAgNTY4OiAnRW1lcmFsZCcsXG4gICAgNjE4OiAnUGhhc2UgMicsXG4gICAgNjE5OiAnU2FwcGhpcmUnLFxuICAgIDYxNzogJ0JsYWNrIFBlYXJsJyxcbiAgICA4NTI6ICdQaGFzZSAxJyxcbiAgICA4NTM6ICdQaGFzZSAyJyxcbiAgICA4NTQ6ICdQaGFzZSAzJyxcbiAgICA4NTU6ICdQaGFzZSA0JyxcbiAgICAxMTE5OiAnRW1lcmFsZCcsXG4gICAgMTEyMDogJ1BoYXNlIDEnLFxuICAgIDExMjE6ICdQaGFzZSAyJyxcbiAgICAxMTIyOiAnUGhhc2UgMycsXG4gICAgMTEyMzogJ1BoYXNlIDQnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RvcHBsZXJQaGFzZShwYWludEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gcGFpbnRJbmRleCBpbiBkb3BwbGVyUGhhc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9wcGxlclBoYXNlKHBhaW50SW5kZXg6IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRvcHBsZXJQaGFzZXNbcGFpbnRJbmRleF07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZTxUPihjb21wdXRlT2JqZWN0OiAoKSA9PiBULCBjYjogKCkgPT4gYW55LCBwb2xsUmF0ZU1zID0gNTApIHtcbiAgICBsZXQgcHJldiA9IGNvbXB1dGVPYmplY3QoKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gY29tcHV0ZU9iamVjdCgpO1xuICAgICAgICBpZiAocHJldiAhPT0gbm93KSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHByZXYgPSBub3c7XG4gICAgfSwgcG9sbFJhdGVNcyk7XG59XG4iLCJpbXBvcnQge0NhY2hlLCBJQ2FjaGUsIFRUTENhY2hlfSBmcm9tICcuL2NhY2hlJztcclxuaW1wb3J0IHtEZWZlcnJlZFByb21pc2V9IGZyb20gJy4vZGVmZXJyZWRfcHJvbWlzZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSm9iPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhOiBUKSB7fVxyXG5cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhc2ggdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoaXMgam9iLlxyXG4gICAgICpcclxuICAgICAqIElmIHR3byBqb2JzIGhhdmUgdGhlIHNhbWUgaGFzaGNvZGUsIHRoZXkgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsLlxyXG4gICAgICogKi9cclxuICAgIGhhc2hDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljSm9iPFQ+IGV4dGVuZHMgSm9iPFQ+IHt9XHJcblxyXG5pbnRlcmZhY2UgUXVldWVkSm9iPFJlcSwgUmVzcD4ge1xyXG4gICAgam9iOiBKb2I8UmVxPjtcclxuICAgIGRlZmVycmVkUHJvbWlzZTogRGVmZXJyZWRQcm9taXNlPFJlc3A+O1xyXG59XHJcblxyXG4vKipcclxuICogUXVldWUgdG8gaGFuZGxlIHByb2Nlc3Npbmcgb2YgXCJKb2JzXCIgd2l0aCBhIHJlcXVlc3QgdGhhdFxyXG4gKiByZXR1cm4gYSByZXNwb25zZS4gRW5zdXJlcyBhIG1heCBjb25jdXJyZW5jeSBvZiBwcm9jZXNzaW5nXHJcbiAqIHNpbXVsdGFuZW91cyBqb2JzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFF1ZXVlPFJlcSwgUmVzcD4ge1xyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFF1ZXVlOiBRdWV1ZWRKb2I8UmVxLCBSZXNwPltdID0gW107XHJcbiAgICBwcml2YXRlIGpvYnNQcm9jZXNzaW5nOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF4Q29uY3VycmVuY3k6IG51bWJlcikge31cclxuXHJcbiAgICAvKiogQW1vdW50IG9mIGpvYnMgY3VycmVudGx5IGluIHRoZSBxdWV1ZSAqL1xyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUXVldWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhqb2I6IEpvYjxSZXE+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pbnRlcm5hbFF1ZXVlLmZpbmQoKGUpID0+IGUuam9iLmhhc2hDb2RlKCkgPT09IGpvYi5oYXNoQ29kZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPclRocm93KGpvYjogSm9iPFJlcT4pOiBRdWV1ZWRKb2I8UmVxLCBSZXNwPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhqb2IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iWyR7am9iLmhhc2hDb2RlKCl9XSBpcyBub3QgcXVldWVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHdWFyYW50ZWVkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxRdWV1ZS5maW5kKChlKSA9PiBlLmpvYi5oYXNoQ29kZSgpID09PSBqb2IuaGFzaENvZGUoKSkhO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxRdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5qb2JzUHJvY2Vzc2luZyA+PSB0aGlzLm1heENvbmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHdhbnQgdG8gbGF1bmNoIG1vcmUgaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuam9ic1Byb2Nlc3NpbmcgKz0gMTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVldWVkSm9iID0gdGhpcy5pbnRlcm5hbFF1ZXVlLnNoaWZ0KCkhO1xyXG4gICAgICAgIGNvbnN0IHJlcTogUmVxID0gcXVldWVkSm9iLmpvYi5nZXREYXRhKCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLnByb2Nlc3MocmVxKTtcclxuICAgICAgICAgICAgcXVldWVkSm9iLmRlZmVycmVkUHJvbWlzZS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcXVldWVkSm9iLmRlZmVycmVkUHJvbWlzZS5yZWplY3QoKGUgYXMgYW55KS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuam9ic1Byb2Nlc3NpbmcgLT0gMTtcclxuICAgICAgICB0aGlzLmNoZWNrUXVldWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoam9iOiBKb2I8UmVxPik6IFByb21pc2U8UmVzcD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhcyhqb2IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yVGhyb3coam9iKT8uZGVmZXJyZWRQcm9taXNlLnByb21pc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgRGVmZXJyZWRQcm9taXNlPFJlc3A+KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbFF1ZXVlLnB1c2goe2pvYiwgZGVmZXJyZWRQcm9taXNlOiBwcm9taXNlfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1F1ZXVlKCksIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByb2Nlc3MocmVxOiBSZXEpOiBQcm9taXNlPFJlc3A+O1xyXG59XHJcblxyXG4vKipcclxuICogTGlrZSBhIHF1ZXVlLCBidXQgaGFzIGFuIGludGVybmFsIGNhY2hlIGZvciBlbGVtZW50cyBhbHJlYWR5IHJlcXVlc3RlZFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhY2hlZFF1ZXVlPFJlcSwgUmVzcD4gZXh0ZW5kcyBRdWV1ZTxSZXEsIFJlc3A+IHtcclxuICAgIC8qKiBVbmRlcmx5aW5nIGltcGxlbWVudGF0aW9uIG9mIGEgY2FjaGUgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjYWNoZSgpOiBJQ2FjaGU8UmVzcD47XHJcblxyXG4gICAgLyoqIEFtb3VudCBvZiBwcmV2aW91c2x5IHJlcXVlc3RlZCBqb2JzIHN0b3JlZCBpbiB0aGUgY2FjaGUgKi9cclxuICAgIGNhY2hlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlKCkuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhY2hlZChqb2I6IEpvYjxSZXE+KTogUmVzcCB8IG51bGwge1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlKCkuaGFzKGpvYi5oYXNoQ29kZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZSgpLmdldE9yVGhyb3coam9iLmhhc2hDb2RlKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDYWNoZWQoam9iOiBKb2I8UmVxPiwgcmVzcDogUmVzcCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FjaGUoKS5zZXQoam9iLmhhc2hDb2RlKCksIHJlc3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChqb2I6IEpvYjxSZXE+KTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2FjaGVkKGpvYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldENhY2hlZChqb2IpISk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuYWRkKGpvYikudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhY2hlZChqb2IsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvY2VzcyhyZXE6IFJlcSk6IFByb21pc2U8UmVzcD47XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVDYWNoZWRRdWV1ZTxSZXEsIFJlc3A+IGV4dGVuZHMgQ2FjaGVkUXVldWU8UmVxLCBSZXNwPiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlXyA9IG5ldyBDYWNoZTxSZXNwPigpO1xyXG5cclxuICAgIHByb3RlY3RlZCBjYWNoZSgpOiBJQ2FjaGU8UmVzcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlXztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRUTENhY2hlZFF1ZXVlPFJlcSwgUmVzcD4gZXh0ZW5kcyBDYWNoZWRRdWV1ZTxSZXEsIFJlc3A+IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVfOiBUVExDYWNoZTxSZXNwPjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobWF4Q29uY3VycmVuY3k6IG51bWJlciwgcHJpdmF0ZSB0dGxNczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobWF4Q29uY3VycmVuY3kpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVfID0gbmV3IFRUTENhY2hlPFJlc3A+KHR0bE1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FjaGUoKTogSUNhY2hlPFJlc3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZV87XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmtDb2xvdXIocmFuazogbnVtYmVyKSB7XG4gICAgc3dpdGNoIChyYW5rKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAnI2MzYTUwOCc7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICcjOWE5OTk5JztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gJyM4YTU5MjknO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QXNzZXR9IGZyb20gJy4uL3R5cGVzL3N0ZWFtJztcbmltcG9ydCB7SXRlbUluZm99IGZyb20gJy4uL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9pbnNwZWN0X2luZm8nO1xuaW1wb3J0IHtnZXREb3BwbGVyUGhhc2UsIGhhc0RvcHBsZXJQaGFzZX0gZnJvbSAnLi9kb3BwbGVycyc7XG5pbXBvcnQge2h0bWwsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VGcm9tV2Vhcih3ZWFyOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCB7XG4gICAgY29uc3Qgd2VhclJhbmdlczogW251bWJlciwgbnVtYmVyXVtdID0gW1xuICAgICAgICBbMC4wLCAwLjA3XSxcbiAgICAgICAgWzAuMDcsIDAuMTVdLFxuICAgICAgICBbMC4xNSwgMC4zOF0sXG4gICAgICAgIFswLjM4LCAwLjQ1XSxcbiAgICAgICAgWzAuNDUsIDEuMF0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2Ygd2VhclJhbmdlcykge1xuICAgICAgICBpZiAod2VhciA+IHJhbmdlWzBdICYmIHdlYXIgPD0gcmFuZ2VbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG93ZXN0UmFuayhpbmZvOiBJdGVtSW5mbyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFpbmZvLmxvd19yYW5rICYmICFpbmZvLmhpZ2hfcmFuaykge1xuICAgICAgICAvLyBJdGVtIGhhcyBubyByYW5rIHRvIHJldHVyblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChpbmZvLmxvd19yYW5rIHx8IDEwMDEpIDwgKGluZm8uaGlnaF9yYW5rIHx8IDEwMDEpID8gaW5mby5sb3dfcmFuayA6IGluZm8uaGlnaF9yYW5rO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYW5rKGluZm86IEl0ZW1JbmZvKToge29yZGVyOiBPcmRlclR5cGU7IHJhbms6IG51bWJlcn0gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHJhbmsgPSBnZXRMb3dlc3RSYW5rKGluZm8pO1xuICAgIGlmIChyYW5rICYmIHJhbmsgPD0gMTAwMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXI6IHJhbmsgPT09IGluZm8ubG93X3JhbmsgPyBPcmRlclR5cGUuTE9XX1JBTksgOiBPcmRlclR5cGUuSElHSF9SQU5LLFxuICAgICAgICAgICAgcmFuayxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGbG9hdFdpdGhSYW5rKGluZm86IEl0ZW1JbmZvLCBwcmVjaXNpb25EaWdpdHMgPSAxNCk6IHN0cmluZyB7XG4gICAgbGV0IHIgPSBpbmZvLmZsb2F0dmFsdWUudG9GaXhlZChwcmVjaXNpb25EaWdpdHMpO1xuXG4gICAgY29uc3QgcmFua2VkID0gcGFyc2VSYW5rKGluZm8pO1xuICAgIGlmIChyYW5rZWQpIHtcbiAgICAgICAgciArPSBgICgjJHtyYW5rZWQucmFua30pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNlZWQoaW5mbzogSXRlbUluZm8pOiBzdHJpbmcge1xuICAgIGxldCByID0gaW5mby5wYWludHNlZWQudG9TdHJpbmcoKTtcblxuICAgIGlmIChoYXNEb3BwbGVyUGhhc2UoaW5mby5wYWludGluZGV4KSkge1xuICAgICAgICByICs9IGAgKCR7Z2V0RG9wcGxlclBoYXNlKGluZm8ucGFpbnRpbmRleCl9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG59XG5cbmVudW0gT3JkZXJUeXBlIHtcbiAgICBMT1dfUkFOSyA9IDEsXG4gICAgSElHSF9SQU5LID0gLTEsXG59XG5cbi8qKlxuICogR2V0cyBmb3JtYXR0ZWQgbGluayBmb3IgZmxvYXRkYiBmb3IgdGhlIHNwZWNpZmllZCBpdGVtIHR5cGUgYW5kIG9yZGVyXG4gKiBAcGFyYW0gaW5mbyBpdGVtIHByb3BlcnRpZXMgZGljdFxuICogQHBhcmFtIG9yZGVyIDEgZm9yIGxvdyBmbG9hdCwgLTEgZm9yIGhpZ2ggZmxvYXQgb3JkZXJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0RmxvYXREYkxpbmsoaW5mbzogSXRlbUluZm8sIG9yZGVyOiBPcmRlclR5cGUpOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldEZsb2F0RGJDYXRlZ29yeShpdGVtOiBJdGVtSW5mbyk6IG51bWJlciB7XG4gICAgICAgIGlmIChpdGVtLmZ1bGxfaXRlbV9uYW1lIS5pbmNsdWRlcygnU3RhdFRyYWsnKSkge1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5mdWxsX2l0ZW1fbmFtZSEuaW5jbHVkZXMoJ1NvdXZlbmlyJykpIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXCJOb3JtYWxcIlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYGh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9kYj9kZWZJbmRleD0ke2luZm8uZGVmaW5kZXh9JnBhaW50SW5kZXg9JHtcbiAgICAgICAgaW5mby5wYWludGluZGV4XG4gICAgfSZvcmRlcj0ke29yZGVyfSZjYXRlZ29yeT0ke2dldEZsb2F0RGJDYXRlZ29yeShpbmZvKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2xpY2thYmxlUmFuayhpbmZvOiBJdGVtSW5mbyk6IFRlbXBsYXRlUmVzdWx0PDE+IHtcbiAgICBjb25zdCBwYXJzZWRSYW5rID0gcGFyc2VSYW5rKGluZm8pO1xuICAgIGlmICghcGFyc2VkUmFuaykge1xuICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYCA8YVxuICAgICAgICBzdHlsZT1cImNvbG9yOiAjZWJlYmViOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcIlxuICAgICAgICBocmVmPVwiJHtnZXRGbG9hdERiTGluayhpbmZvLCBwYXJzZWRSYW5rLm9yZGVyKX1cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgICAgKFJhbmsgIyR7cGFyc2VkUmFuay5yYW5rfSlcbiAgICA8L2E+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2tpbihhc3NldDogQXNzZXQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFhc3NldC50YWdzPy5maW5kKFxuICAgICAgICAoYSkgPT4gYS5jYXRlZ29yeSA9PT0gJ1dlYXBvbicgfHwgKGEuY2F0ZWdvcnkgPT09ICdUeXBlJyAmJiBhLmludGVybmFsX25hbWUgPT09ICdUeXBlX0hhbmRzJylcbiAgICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluUGFnZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuICFjaHJvbWUuZXh0ZW5zaW9uO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCB0PXdpbmRvdyxlPXQuU2hhZG93Um9vdCYmKHZvaWQgMD09PXQuU2hhZHlDU1N8fHQuU2hhZHlDU1MubmF0aXZlU2hhZG93KSYmXCJhZG9wdGVkU3R5bGVTaGVldHNcImluIERvY3VtZW50LnByb3RvdHlwZSYmXCJyZXBsYWNlXCJpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxzPVN5bWJvbCgpLG49bmV3IFdlYWtNYXA7Y2xhc3Mgb3tjb25zdHJ1Y3Rvcih0LGUsbil7aWYodGhpcy5fJGNzc1Jlc3VsdCQ9ITAsbiE9PXMpdGhyb3cgRXJyb3IoXCJDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLlwiKTt0aGlzLmNzc1RleHQ9dCx0aGlzLnQ9ZX1nZXQgc3R5bGVTaGVldCgpe2xldCB0PXRoaXMubztjb25zdCBzPXRoaXMudDtpZihlJiZ2b2lkIDA9PT10KXtjb25zdCBlPXZvaWQgMCE9PXMmJjE9PT1zLmxlbmd0aDtlJiYodD1uLmdldChzKSksdm9pZCAwPT09dCYmKCh0aGlzLm89dD1uZXcgQ1NTU3R5bGVTaGVldCkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KSxlJiZuLnNldChzLHQpKX1yZXR1cm4gdH10b1N0cmluZygpe3JldHVybiB0aGlzLmNzc1RleHR9fWNvbnN0IHI9dD0+bmV3IG8oXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDp0K1wiXCIsdm9pZCAwLHMpLGk9KHQsLi4uZSk9Pntjb25zdCBuPTE9PT10Lmxlbmd0aD90WzBdOmUucmVkdWNlKCgoZSxzLG4pPT5lKyh0PT57aWYoITA9PT10Ll8kY3NzUmVzdWx0JClyZXR1cm4gdC5jc3NUZXh0O2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KXJldHVybiB0O3Rocm93IEVycm9yKFwiVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IFwiK3QrXCIuIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5cIil9KShzKSt0W24rMV0pLHRbMF0pO3JldHVybiBuZXcgbyhuLHQscyl9LFM9KHMsbik9PntlP3MuYWRvcHRlZFN0eWxlU2hlZXRzPW4ubWFwKCh0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD90OnQuc3R5bGVTaGVldCkpOm4uZm9yRWFjaCgoZT0+e2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89dC5saXROb25jZTt2b2lkIDAhPT1vJiZuLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsbyksbi50ZXh0Q29udGVudD1lLmNzc1RleHQscy5hcHBlbmRDaGlsZChuKX0pKX0sYz1lP3Q9PnQ6dD0+dCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQ/KHQ9PntsZXQgZT1cIlwiO2Zvcihjb25zdCBzIG9mIHQuY3NzUnVsZXMpZSs9cy5jc3NUZXh0O3JldHVybiByKGUpfSkodCk6dDtleHBvcnR7byBhcyBDU1NSZXN1bHQsUyBhcyBhZG9wdFN0eWxlcyxpIGFzIGNzcyxjIGFzIGdldENvbXBhdGlibGVTdHlsZSxlIGFzIHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyxyIGFzIHVuc2FmZUNTU307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBlPShlLHQsbyk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLGUpfSx0PShlLHQpPT4oe2tpbmQ6XCJtZXRob2RcIixwbGFjZW1lbnQ6XCJwcm90b3R5cGVcIixrZXk6dC5rZXksZGVzY3JpcHRvcjplfSksbz0oe2ZpbmlzaGVyOmUsZGVzY3JpcHRvcjp0fSk9PihvLG4pPT57dmFyIHI7aWYodm9pZCAwPT09bil7Y29uc3Qgbj1udWxsIT09KHI9by5vcmlnaW5hbEtleSkmJnZvaWQgMCE9PXI/cjpvLmtleSxpPW51bGwhPXQ/e2tpbmQ6XCJtZXRob2RcIixwbGFjZW1lbnQ6XCJwcm90b3R5cGVcIixrZXk6bixkZXNjcmlwdG9yOnQoby5rZXkpfTp7Li4ubyxrZXk6bn07cmV0dXJuIG51bGwhPWUmJihpLmZpbmlzaGVyPWZ1bmN0aW9uKHQpe2UodCxuKX0pLGl9e2NvbnN0IHI9by5jb25zdHJ1Y3Rvcjt2b2lkIDAhPT10JiZPYmplY3QuZGVmaW5lUHJvcGVydHkobyxuLHQobikpLG51bGw9PWV8fGUocixuKX19O2V4cG9ydHtvIGFzIGRlY29yYXRlUHJvcGVydHksZSBhcyBsZWdhY3lQcm90b3R5cGVNZXRob2QsdCBhcyBzdGFuZGFyZFByb3RvdHlwZU1ldGhvZH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBlPWU9Pm49PlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KChlLG4pPT4oY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsbiksbikpKGUsbik6KChlLG4pPT57Y29uc3R7a2luZDp0LGVsZW1lbnRzOnN9PW47cmV0dXJue2tpbmQ6dCxlbGVtZW50czpzLGZpbmlzaGVyKG4pe2N1c3RvbUVsZW1lbnRzLmRlZmluZShlLG4pfX19KShlLG4pO2V4cG9ydHtlIGFzIGN1c3RvbUVsZW1lbnR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZmluaXNoZXI6KHIsdCk9PntPYmplY3QuYXNzaWduKHIucHJvdG90eXBlW3RdLGUpfX0pfWV4cG9ydHtlIGFzIGV2ZW50T3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1vcHRpb25zLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBpPShpLGUpPT5cIm1ldGhvZFwiPT09ZS5raW5kJiZlLmRlc2NyaXB0b3ImJiEoXCJ2YWx1ZVwiaW4gZS5kZXNjcmlwdG9yKT97Li4uZSxmaW5pc2hlcihuKXtuLmNyZWF0ZVByb3BlcnR5KGUua2V5LGkpfX06e2tpbmQ6XCJmaWVsZFwiLGtleTpTeW1ib2woKSxwbGFjZW1lbnQ6XCJvd25cIixkZXNjcmlwdG9yOnt9LG9yaWdpbmFsS2V5OmUua2V5LGluaXRpYWxpemVyKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5pbml0aWFsaXplciYmKHRoaXNbZS5rZXldPWUuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKSl9LGZpbmlzaGVyKG4pe24uY3JlYXRlUHJvcGVydHkoZS5rZXksaSl9fTtmdW5jdGlvbiBlKGUpe3JldHVybihuLHQpPT52b2lkIDAhPT10PygoaSxlLG4pPT57ZS5jb25zdHJ1Y3Rvci5jcmVhdGVQcm9wZXJ0eShuLGkpfSkoZSxuLHQpOmkoZSxuKX1leHBvcnR7ZSBhcyBwcm9wZXJ0eX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wZXJ0eS5qcy5tYXBcbiIsImltcG9ydHtkZWNvcmF0ZVByb3BlcnR5IGFzIHJ9ZnJvbVwiLi9iYXNlLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBlKGUpe3JldHVybiByKHtkZXNjcmlwdG9yOnI9Pih7Z2V0KCl7dmFyIHIsbztyZXR1cm4gbnVsbCE9PShvPW51bGw9PT0ocj10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpJiZ2b2lkIDAhPT1vP286W119LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7ZSBhcyBxdWVyeUFsbH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hbGwuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBvfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIG47Y29uc3QgZT1udWxsIT0obnVsbD09PShuPXdpbmRvdy5IVE1MU2xvdEVsZW1lbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKT8obyxuKT0+by5hc3NpZ25lZEVsZW1lbnRzKG4pOihvLG4pPT5vLmFzc2lnbmVkTm9kZXMobikuZmlsdGVyKChvPT5vLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpKTtmdW5jdGlvbiBsKG4pe2NvbnN0e3Nsb3Q6bCxzZWxlY3Rvcjp0fT1udWxsIT1uP246e307cmV0dXJuIG8oe2Rlc2NyaXB0b3I6bz0+KHtnZXQoKXt2YXIgbztjb25zdCByPVwic2xvdFwiKyhsP2BbbmFtZT0ke2x9XWA6XCI6bm90KFtuYW1lXSlcIiksaT1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKHIpLHM9bnVsbCE9aT9lKGksbik6W107cmV0dXJuIHQ/cy5maWx0ZXIoKG89Pm8ubWF0Y2hlcyh0KSkpOnN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7bCBhcyBxdWVyeUFzc2lnbmVkRWxlbWVudHN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBlfWZyb21cIi4vYmFzZS5qc1wiO2ltcG9ydHtxdWVyeUFzc2lnbmVkRWxlbWVudHMgYXMgdH1mcm9tXCIuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBvKG8sbixyKXtsZXQgbCxzPW87cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG8/KHM9by5zbG90LGw9byk6bD17ZmxhdHRlbjpufSxyP3Qoe3Nsb3Q6cyxmbGF0dGVuOm4sc2VsZWN0b3I6cn0pOmUoe2Rlc2NyaXB0b3I6ZT0+KHtnZXQoKXt2YXIgZSx0O2NvbnN0IG89XCJzbG90XCIrKHM/YFtuYW1lPSR7c31dYDpcIjpub3QoW25hbWVdKVwiKSxuPW51bGw9PT0oZT10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnF1ZXJ5U2VsZWN0b3Iobyk7cmV0dXJuIG51bGwhPT0odD1udWxsPT1uP3ZvaWQgMDpuLmFzc2lnbmVkTm9kZXMobCkpJiZ2b2lkIDAhPT10P3Q6W119LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7byBhcyBxdWVyeUFzc2lnbmVkTm9kZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5mdW5jdGlvbiBlKGUpe3JldHVybiByKHtkZXNjcmlwdG9yOnI9Pih7YXN5bmMgZ2V0KCl7dmFyIHI7cmV0dXJuIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGUsbnVsbD09PShyPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PXI/dm9pZCAwOnIucXVlcnlTZWxlY3RvcihlKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0pfWV4cG9ydHtlIGFzIHF1ZXJ5QXN5bmN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXN5bmMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBvfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gaShpLG4pe3JldHVybiBvKHtkZXNjcmlwdG9yOm89Pntjb25zdCB0PXtnZXQoKXt2YXIgbyxuO3JldHVybiBudWxsIT09KG49bnVsbD09PShvPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucXVlcnlTZWxlY3RvcihpKSkmJnZvaWQgMCE9PW4/bjpudWxsfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH07aWYobil7Y29uc3Qgbj1cInN5bWJvbFwiPT10eXBlb2Ygbz9TeW1ib2woKTpcIl9fXCIrbzt0LmdldD1mdW5jdGlvbigpe3ZhciBvLHQ7cmV0dXJuIHZvaWQgMD09PXRoaXNbbl0mJih0aGlzW25dPW51bGwhPT0odD1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKGkpKSYmdm9pZCAwIT09dD90Om51bGwpLHRoaXNbbl19fXJldHVybiB0fX0pfWV4cG9ydHtpIGFzIHF1ZXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcFxuIiwiaW1wb3J0e3Byb3BlcnR5IGFzIHJ9ZnJvbVwiLi9wcm9wZXJ0eS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gdCh0KXtyZXR1cm4gcih7Li4udCxzdGF0ZTohMH0pfWV4cG9ydHt0IGFzIHN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcFxuIiwiaW1wb3J0e2dldENvbXBhdGlibGVTdHlsZSBhcyB0LGFkb3B0U3R5bGVzIGFzIGl9ZnJvbVwiLi9jc3MtdGFnLmpzXCI7ZXhwb3J0e0NTU1Jlc3VsdCxhZG9wdFN0eWxlcyxjc3MsZ2V0Q29tcGF0aWJsZVN0eWxlLHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyx1bnNhZmVDU1N9ZnJvbVwiLi9jc3MtdGFnLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi92YXIgcztjb25zdCBlPXdpbmRvdyxyPWUudHJ1c3RlZFR5cGVzLGg9cj9yLmVtcHR5U2NyaXB0OlwiXCIsbz1lLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydCxuPXt0b0F0dHJpYnV0ZSh0LGkpe3N3aXRjaChpKXtjYXNlIEJvb2xlYW46dD10P2g6bnVsbDticmVhaztjYXNlIE9iamVjdDpjYXNlIEFycmF5OnQ9bnVsbD09dD90OkpTT04uc3RyaW5naWZ5KHQpfXJldHVybiB0fSxmcm9tQXR0cmlidXRlKHQsaSl7bGV0IHM9dDtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnM9bnVsbCE9PXQ7YnJlYWs7Y2FzZSBOdW1iZXI6cz1udWxsPT09dD9udWxsOk51bWJlcih0KTticmVhaztjYXNlIE9iamVjdDpjYXNlIEFycmF5OnRyeXtzPUpTT04ucGFyc2UodCl9Y2F0Y2godCl7cz1udWxsfX1yZXR1cm4gc319LGE9KHQsaSk9PmkhPT10JiYoaT09aXx8dD09dCksbD17YXR0cmlidXRlOiEwLHR5cGU6U3RyaW5nLGNvbnZlcnRlcjpuLHJlZmxlY3Q6ITEsaGFzQ2hhbmdlZDphfTtjbGFzcyBkIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuXyRFaT1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExLHRoaXMuaGFzVXBkYXRlZD0hMSx0aGlzLl8kRWw9bnVsbCx0aGlzLnUoKX1zdGF0aWMgYWRkSW5pdGlhbGl6ZXIodCl7dmFyIGk7bnVsbCE9PShpPXRoaXMuaCkmJnZvaWQgMCE9PWl8fCh0aGlzLmg9W10pLHRoaXMuaC5wdXNoKHQpfXN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7dGhpcy5maW5hbGl6ZSgpO2NvbnN0IHQ9W107cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoKGkscyk9Pntjb25zdCBlPXRoaXMuXyRFcChzLGkpO3ZvaWQgMCE9PWUmJih0aGlzLl8kRXYuc2V0KGUscyksdC5wdXNoKGUpKX0pKSx0fXN0YXRpYyBjcmVhdGVQcm9wZXJ0eSh0LGk9bCl7aWYoaS5zdGF0ZSYmKGkuYXR0cmlidXRlPSExKSx0aGlzLmZpbmFsaXplKCksdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQodCxpKSwhaS5ub0FjY2Vzc29yJiYhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkodCkpe2NvbnN0IHM9XCJzeW1ib2xcIj09dHlwZW9mIHQ/U3ltYm9sKCk6XCJfX1wiK3QsZT10aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcih0LHMsaSk7dm9pZCAwIT09ZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLHQsZSl9fXN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxpLHMpe3JldHVybntnZXQoKXtyZXR1cm4gdGhpc1tpXX0sc2V0KGUpe2NvbnN0IHI9dGhpc1t0XTt0aGlzW2ldPWUsdGhpcy5yZXF1ZXN0VXBkYXRlKHQscixzKX0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9fXN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnModCl7cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KHQpfHxsfXN0YXRpYyBmaW5hbGl6ZSgpe2lmKHRoaXMuaGFzT3duUHJvcGVydHkoXCJmaW5hbGl6ZWRcIikpcmV0dXJuITE7dGhpcy5maW5hbGl6ZWQ9ITA7Y29uc3QgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7aWYodC5maW5hbGl6ZSgpLHRoaXMuZWxlbWVudFByb3BlcnRpZXM9bmV3IE1hcCh0LmVsZW1lbnRQcm9wZXJ0aWVzKSx0aGlzLl8kRXY9bmV3IE1hcCx0aGlzLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSl7Y29uc3QgdD10aGlzLnByb3BlcnRpZXMsaT1bLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCksLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KV07Zm9yKGNvbnN0IHMgb2YgaSl0aGlzLmNyZWF0ZVByb3BlcnR5KHMsdFtzXSl9cmV0dXJuIHRoaXMuZWxlbWVudFN0eWxlcz10aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKSwhMH1zdGF0aWMgZmluYWxpemVTdHlsZXMoaSl7Y29uc3Qgcz1bXTtpZihBcnJheS5pc0FycmF5KGkpKXtjb25zdCBlPW5ldyBTZXQoaS5mbGF0KDEvMCkucmV2ZXJzZSgpKTtmb3IoY29uc3QgaSBvZiBlKXMudW5zaGlmdCh0KGkpKX1lbHNlIHZvaWQgMCE9PWkmJnMucHVzaCh0KGkpKTtyZXR1cm4gc31zdGF0aWMgXyRFcCh0LGkpe2NvbnN0IHM9aS5hdHRyaWJ1dGU7cmV0dXJuITE9PT1zP3ZvaWQgMDpcInN0cmluZ1wiPT10eXBlb2Ygcz9zOlwic3RyaW5nXCI9PXR5cGVvZiB0P3QudG9Mb3dlckNhc2UoKTp2b2lkIDB9dSgpe3ZhciB0O3RoaXMuXyRFXz1uZXcgUHJvbWlzZSgodD0+dGhpcy5lbmFibGVVcGRhdGluZz10KSksdGhpcy5fJEFMPW5ldyBNYXAsdGhpcy5fJEVnKCksdGhpcy5yZXF1ZXN0VXBkYXRlKCksbnVsbD09PSh0PXRoaXMuY29uc3RydWN0b3IuaCl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+dCh0aGlzKSkpfWFkZENvbnRyb2xsZXIodCl7dmFyIGksczsobnVsbCE9PShpPXRoaXMuXyRFUykmJnZvaWQgMCE9PWk/aTp0aGlzLl8kRVM9W10pLnB1c2godCksdm9pZCAwIT09dGhpcy5yZW5kZXJSb290JiZ0aGlzLmlzQ29ubmVjdGVkJiYobnVsbD09PShzPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PXN8fHMuY2FsbCh0KSl9cmVtb3ZlQ29udHJvbGxlcih0KXt2YXIgaTtudWxsPT09KGk9dGhpcy5fJEVTKXx8dm9pZCAwPT09aXx8aS5zcGxpY2UodGhpcy5fJEVTLmluZGV4T2YodCk+Pj4wLDEpfV8kRWcoKXt0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKCh0LGkpPT57dGhpcy5oYXNPd25Qcm9wZXJ0eShpKSYmKHRoaXMuXyRFaS5zZXQoaSx0aGlzW2ldKSxkZWxldGUgdGhpc1tpXSl9KSl9Y3JlYXRlUmVuZGVyUm9vdCgpe3ZhciB0O2NvbnN0IHM9bnVsbCE9PSh0PXRoaXMuc2hhZG93Um9vdCkmJnZvaWQgMCE9PXQ/dDp0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtyZXR1cm4gaShzLHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyksc31jb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3ZvaWQgMD09PXRoaXMucmVuZGVyUm9vdCYmKHRoaXMucmVuZGVyUm9vdD10aGlzLmNyZWF0ZVJlbmRlclJvb3QoKSksdGhpcy5lbmFibGVVcGRhdGluZyghMCksbnVsbD09PSh0PXRoaXMuXyRFUyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0Q29ubmVjdGVkKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpfWVuYWJsZVVwZGF0aW5nKHQpe31kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O251bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdERpc2Nvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxpLHMpe3RoaXMuXyRBSyh0LHMpfV8kRU8odCxpLHM9bCl7dmFyIGU7Y29uc3Qgcj10aGlzLmNvbnN0cnVjdG9yLl8kRXAodCxzKTtpZih2b2lkIDAhPT1yJiYhMD09PXMucmVmbGVjdCl7Y29uc3QgaD0odm9pZCAwIT09KG51bGw9PT0oZT1zLmNvbnZlcnRlcil8fHZvaWQgMD09PWU/dm9pZCAwOmUudG9BdHRyaWJ1dGUpP3MuY29udmVydGVyOm4pLnRvQXR0cmlidXRlKGkscy50eXBlKTt0aGlzLl8kRWw9dCxudWxsPT1oP3RoaXMucmVtb3ZlQXR0cmlidXRlKHIpOnRoaXMuc2V0QXR0cmlidXRlKHIsaCksdGhpcy5fJEVsPW51bGx9fV8kQUsodCxpKXt2YXIgcztjb25zdCBlPXRoaXMuY29uc3RydWN0b3Iscj1lLl8kRXYuZ2V0KHQpO2lmKHZvaWQgMCE9PXImJnRoaXMuXyRFbCE9PXIpe2NvbnN0IHQ9ZS5nZXRQcm9wZXJ0eU9wdGlvbnMociksaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnZlcnRlcj97ZnJvbUF0dHJpYnV0ZTp0LmNvbnZlcnRlcn06dm9pZCAwIT09KG51bGw9PT0ocz10LmNvbnZlcnRlcil8fHZvaWQgMD09PXM/dm9pZCAwOnMuZnJvbUF0dHJpYnV0ZSk/dC5jb252ZXJ0ZXI6bjt0aGlzLl8kRWw9cix0aGlzW3JdPWguZnJvbUF0dHJpYnV0ZShpLHQudHlwZSksdGhpcy5fJEVsPW51bGx9fXJlcXVlc3RVcGRhdGUodCxpLHMpe2xldCBlPSEwO3ZvaWQgMCE9PXQmJigoKHM9c3x8dGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnModCkpLmhhc0NoYW5nZWR8fGEpKHRoaXNbdF0saSk/KHRoaXMuXyRBTC5oYXModCl8fHRoaXMuXyRBTC5zZXQodCxpKSwhMD09PXMucmVmbGVjdCYmdGhpcy5fJEVsIT09dCYmKHZvaWQgMD09PXRoaXMuXyRFQyYmKHRoaXMuXyRFQz1uZXcgTWFwKSx0aGlzLl8kRUMuc2V0KHQscykpKTplPSExKSwhdGhpcy5pc1VwZGF0ZVBlbmRpbmcmJmUmJih0aGlzLl8kRV89dGhpcy5fJEVqKCkpfWFzeW5jIF8kRWooKXt0aGlzLmlzVXBkYXRlUGVuZGluZz0hMDt0cnl7YXdhaXQgdGhpcy5fJEVffWNhdGNoKHQpe1Byb21pc2UucmVqZWN0KHQpfWNvbnN0IHQ9dGhpcy5zY2hlZHVsZVVwZGF0ZSgpO3JldHVybiBudWxsIT10JiZhd2FpdCB0LCF0aGlzLmlzVXBkYXRlUGVuZGluZ31zY2hlZHVsZVVwZGF0ZSgpe3JldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKX1wZXJmb3JtVXBkYXRlKCl7dmFyIHQ7aWYoIXRoaXMuaXNVcGRhdGVQZW5kaW5nKXJldHVybjt0aGlzLmhhc1VwZGF0ZWQsdGhpcy5fJEVpJiYodGhpcy5fJEVpLmZvckVhY2goKCh0LGkpPT50aGlzW2ldPXQpKSx0aGlzLl8kRWk9dm9pZCAwKTtsZXQgaT0hMTtjb25zdCBzPXRoaXMuXyRBTDt0cnl7aT10aGlzLnNob3VsZFVwZGF0ZShzKSxpPyh0aGlzLndpbGxVcGRhdGUocyksbnVsbD09PSh0PXRoaXMuXyRFUyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0VXBkYXRlKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpLHRoaXMudXBkYXRlKHMpKTp0aGlzLl8kRWsoKX1jYXRjaCh0KXt0aHJvdyBpPSExLHRoaXMuXyRFaygpLHR9aSYmdGhpcy5fJEFFKHMpfXdpbGxVcGRhdGUodCl7fV8kQUUodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0VXBkYXRlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLmhhc1VwZGF0ZWR8fCh0aGlzLmhhc1VwZGF0ZWQ9ITAsdGhpcy5maXJzdFVwZGF0ZWQodCkpLHRoaXMudXBkYXRlZCh0KX1fJEVrKCl7dGhpcy5fJEFMPW5ldyBNYXAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITF9Z2V0IHVwZGF0ZUNvbXBsZXRlKCl7cmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKX1nZXRVcGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLl8kRV99c2hvdWxkVXBkYXRlKHQpe3JldHVybiEwfXVwZGF0ZSh0KXt2b2lkIDAhPT10aGlzLl8kRUMmJih0aGlzLl8kRUMuZm9yRWFjaCgoKHQsaSk9PnRoaXMuXyRFTyhpLHRoaXNbaV0sdCkpKSx0aGlzLl8kRUM9dm9pZCAwKSx0aGlzLl8kRWsoKX11cGRhdGVkKHQpe31maXJzdFVwZGF0ZWQodCl7fX1kLmZpbmFsaXplZD0hMCxkLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAsZC5lbGVtZW50U3R5bGVzPVtdLGQuc2hhZG93Um9vdE9wdGlvbnM9e21vZGU6XCJvcGVuXCJ9LG51bGw9PW98fG8oe1JlYWN0aXZlRWxlbWVudDpkfSksKG51bGwhPT0ocz1lLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSYmdm9pZCAwIT09cz9zOmUucmVhY3RpdmVFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIxLjQuMFwiKTtleHBvcnR7ZCBhcyBSZWFjdGl2ZUVsZW1lbnQsbiBhcyBkZWZhdWx0Q29udmVydGVyLGEgYXMgbm90RXF1YWx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXBcbiIsImltcG9ydHtSZWFjdGl2ZUVsZW1lbnQgYXMgdH1mcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0e3JlbmRlciBhcyBlLG5vQ2hhbmdlIGFzIGl9ZnJvbVwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWh0bWxcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBsLG87Y29uc3Qgcj10O2NsYXNzIHMgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnJlbmRlck9wdGlvbnM9e2hvc3Q6dGhpc30sdGhpcy5fJERvPXZvaWQgMH1jcmVhdGVSZW5kZXJSb290KCl7dmFyIHQsZTtjb25zdCBpPXN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtyZXR1cm4gbnVsbCE9PSh0PShlPXRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09dHx8KGUucmVuZGVyQmVmb3JlPWkuZmlyc3RDaGlsZCksaX11cGRhdGUodCl7Y29uc3QgaT10aGlzLnJlbmRlcigpO3RoaXMuaGFzVXBkYXRlZHx8KHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZD10aGlzLmlzQ29ubmVjdGVkKSxzdXBlci51cGRhdGUodCksdGhpcy5fJERvPWUoaSx0aGlzLnJlbmRlclJvb3QsdGhpcy5yZW5kZXJPcHRpb25zKX1jb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCEwKX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCExKX1yZW5kZXIoKXtyZXR1cm4gaX19cy5maW5hbGl6ZWQ9ITAscy5fJGxpdEVsZW1lbnQkPSEwLG51bGw9PT0obD1nbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCl8fHZvaWQgMD09PWx8fGwuY2FsbChnbG9iYWxUaGlzLHtMaXRFbGVtZW50OnN9KTtjb25zdCBuPWdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtudWxsPT1ufHxuKHtMaXRFbGVtZW50OnN9KTtjb25zdCBoPXtfJEFLOih0LGUsaSk9Pnt0Ll8kQUsoZSxpKX0sXyRBTDp0PT50Ll8kQUx9OyhudWxsIT09KG89Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpJiZ2b2lkIDAhPT1vP286Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIzLjIuMlwiKTtleHBvcnR7cyBhcyBMaXRFbGVtZW50LHIgYXMgVXBkYXRpbmdFbGVtZW50LGggYXMgXyRMRX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgdD17QVRUUklCVVRFOjEsQ0hJTEQ6MixQUk9QRVJUWTozLEJPT0xFQU5fQVRUUklCVVRFOjQsRVZFTlQ6NSxFTEVNRU5UOjZ9LGU9dD0+KC4uLmUpPT4oe18kbGl0RGlyZWN0aXZlJDp0LHZhbHVlczplfSk7Y2xhc3MgaXtjb25zdHJ1Y3Rvcih0KXt9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBVCh0LGUsaSl7dGhpcy5fJEN0PXQsdGhpcy5fJEFNPWUsdGhpcy5fJENpPWl9XyRBUyh0LGUpe3JldHVybiB0aGlzLnVwZGF0ZSh0LGUpfXVwZGF0ZSh0LGUpe3JldHVybiB0aGlzLnJlbmRlciguLi5lKX19ZXhwb3J0e2kgYXMgRGlyZWN0aXZlLHQgYXMgUGFydFR5cGUsZSBhcyBkaXJlY3RpdmV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcFxuIiwiaW1wb3J0e25vQ2hhbmdlIGFzIHR9ZnJvbVwiLi4vbGl0LWh0bWwuanNcIjtpbXBvcnR7ZGlyZWN0aXZlIGFzIGksRGlyZWN0aXZlIGFzIHMsUGFydFR5cGUgYXMgcn1mcm9tXCIuLi9kaXJlY3RpdmUuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2NvbnN0IG89aShjbGFzcyBleHRlbmRzIHN7Y29uc3RydWN0b3IodCl7dmFyIGk7aWYoc3VwZXIodCksdC50eXBlIT09ci5BVFRSSUJVVEV8fFwiY2xhc3NcIiE9PXQubmFtZXx8KG51bGw9PT0oaT10LnN0cmluZ3MpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmxlbmd0aCk+Mil0aHJvdyBFcnJvcihcImBjbGFzc01hcCgpYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuXCIpfXJlbmRlcih0KXtyZXR1cm5cIiBcIitPYmplY3Qua2V5cyh0KS5maWx0ZXIoKGk9PnRbaV0pKS5qb2luKFwiIFwiKStcIiBcIn11cGRhdGUoaSxbc10pe3ZhciByLG87aWYodm9pZCAwPT09dGhpcy5udCl7dGhpcy5udD1uZXcgU2V0LHZvaWQgMCE9PWkuc3RyaW5ncyYmKHRoaXMuc3Q9bmV3IFNldChpLnN0cmluZ3Muam9pbihcIiBcIikuc3BsaXQoL1xccy8pLmZpbHRlcigodD0+XCJcIiE9PXQpKSkpO2Zvcihjb25zdCB0IGluIHMpc1t0XSYmIShudWxsPT09KHI9dGhpcy5zdCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuaGFzKHQpKSYmdGhpcy5udC5hZGQodCk7cmV0dXJuIHRoaXMucmVuZGVyKHMpfWNvbnN0IGU9aS5lbGVtZW50LmNsYXNzTGlzdDt0aGlzLm50LmZvckVhY2goKHQ9Pnt0IGluIHN8fChlLnJlbW92ZSh0KSx0aGlzLm50LmRlbGV0ZSh0KSl9KSk7Zm9yKGNvbnN0IHQgaW4gcyl7Y29uc3QgaT0hIXNbdF07aT09PXRoaXMubnQuaGFzKHQpfHwobnVsbD09PShvPXRoaXMuc3QpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLmhhcyh0KSl8fChpPyhlLmFkZCh0KSx0aGlzLm50LmFkZCh0KSk6KGUucmVtb3ZlKHQpLHRoaXMubnQuZGVsZXRlKHQpKSl9cmV0dXJuIHR9fSk7ZXhwb3J0e28gYXMgY2xhc3NNYXB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xhc3MtbWFwLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgdDtjb25zdCBpPXdpbmRvdyxzPWkudHJ1c3RlZFR5cGVzLGU9cz9zLmNyZWF0ZVBvbGljeShcImxpdC1odG1sXCIse2NyZWF0ZUhUTUw6dD0+dH0pOnZvaWQgMCxvPWBsaXQkJHsoTWF0aC5yYW5kb20oKStcIlwiKS5zbGljZSg5KX0kYCxuPVwiP1wiK28sbD1gPCR7bn0+YCxoPWRvY3VtZW50LHI9KHQ9XCJcIik9PmguY3JlYXRlQ29tbWVudCh0KSxkPXQ9Pm51bGw9PT10fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCx1PUFycmF5LmlzQXJyYXksYz10PT51KHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0W1N5bWJvbC5pdGVyYXRvcl0pLHY9LzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nLGE9Ly0tPi9nLGY9Lz4vZyxfPVJlZ0V4cChcIj58WyBcXHRcXG5cXGZcXHJdKD86KFteXFxcXHNcXFwiJz49L10rKShbIFxcdFxcblxcZlxccl0qPVsgXFx0XFxuXFxmXFxyXSooPzpbXiBcXHRcXG5cXGZcXHJcXFwiJ2A8Pj1dfChcXFwifCcpfCkpfCQpXCIsXCJnXCIpLG09LycvZyxwPS9cIi9nLCQ9L14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pLGc9dD0+KGksLi4ucyk9Pih7XyRsaXRUeXBlJDp0LHN0cmluZ3M6aSx2YWx1ZXM6c30pLHk9ZygxKSx3PWcoMikseD1TeW1ib2wuZm9yKFwibGl0LW5vQ2hhbmdlXCIpLGI9U3ltYm9sLmZvcihcImxpdC1ub3RoaW5nXCIpLFQ9bmV3IFdlYWtNYXAsQT0odCxpLHMpPT57dmFyIGUsbztjb25zdCBuPW51bGwhPT0oZT1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PWU/ZTppO2xldCBsPW4uXyRsaXRQYXJ0JDtpZih2b2lkIDA9PT1sKXtjb25zdCB0PW51bGwhPT0obz1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PW8/bzpudWxsO24uXyRsaXRQYXJ0JD1sPW5ldyBTKGkuaW5zZXJ0QmVmb3JlKHIoKSx0KSx0LHZvaWQgMCxudWxsIT1zP3M6e30pfXJldHVybiBsLl8kQUkodCksbH0sRT1oLmNyZWF0ZVRyZWVXYWxrZXIoaCwxMjksbnVsbCwhMSksQz0odCxpKT0+e2NvbnN0IHM9dC5sZW5ndGgtMSxuPVtdO2xldCBoLHI9Mj09PWk/XCI8c3ZnPlwiOlwiXCIsZD12O2ZvcihsZXQgaT0wO2k8cztpKyspe2NvbnN0IHM9dFtpXTtsZXQgZSx1LGM9LTEsZz0wO2Zvcig7ZzxzLmxlbmd0aCYmKGQubGFzdEluZGV4PWcsdT1kLmV4ZWMocyksbnVsbCE9PXUpOylnPWQubGFzdEluZGV4LGQ9PT12P1wiIS0tXCI9PT11WzFdP2Q9YTp2b2lkIDAhPT11WzFdP2Q9Zjp2b2lkIDAhPT11WzJdPygkLnRlc3QodVsyXSkmJihoPVJlZ0V4cChcIjwvXCIrdVsyXSxcImdcIikpLGQ9Xyk6dm9pZCAwIT09dVszXSYmKGQ9Xyk6ZD09PV8/XCI+XCI9PT11WzBdPyhkPW51bGwhPWg/aDp2LGM9LTEpOnZvaWQgMD09PXVbMV0/Yz0tMjooYz1kLmxhc3RJbmRleC11WzJdLmxlbmd0aCxlPXVbMV0sZD12b2lkIDA9PT11WzNdP186J1wiJz09PXVbM10/cDptKTpkPT09cHx8ZD09PW0/ZD1fOmQ9PT1hfHxkPT09Zj9kPXY6KGQ9XyxoPXZvaWQgMCk7Y29uc3QgeT1kPT09XyYmdFtpKzFdLnN0YXJ0c1dpdGgoXCIvPlwiKT9cIiBcIjpcIlwiO3IrPWQ9PT12P3MrbDpjPj0wPyhuLnB1c2goZSkscy5zbGljZSgwLGMpK1wiJGxpdCRcIitzLnNsaWNlKGMpK28reSk6cytvKygtMj09PWM/KG4ucHVzaCh2b2lkIDApLGkpOnkpfWNvbnN0IHU9cisodFtzXXx8XCI8Pz5cIikrKDI9PT1pP1wiPC9zdmc+XCI6XCJcIik7aWYoIUFycmF5LmlzQXJyYXkodCl8fCF0Lmhhc093blByb3BlcnR5KFwicmF3XCIpKXRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO3JldHVyblt2b2lkIDAhPT1lP2UuY3JlYXRlSFRNTCh1KTp1LG5dfTtjbGFzcyBQe2NvbnN0cnVjdG9yKHtzdHJpbmdzOnQsXyRsaXRUeXBlJDppfSxlKXtsZXQgbDt0aGlzLnBhcnRzPVtdO2xldCBoPTAsZD0wO2NvbnN0IHU9dC5sZW5ndGgtMSxjPXRoaXMucGFydHMsW3YsYV09Qyh0LGkpO2lmKHRoaXMuZWw9UC5jcmVhdGVFbGVtZW50KHYsZSksRS5jdXJyZW50Tm9kZT10aGlzLmVsLmNvbnRlbnQsMj09PWkpe2NvbnN0IHQ9dGhpcy5lbC5jb250ZW50LGk9dC5maXJzdENoaWxkO2kucmVtb3ZlKCksdC5hcHBlbmQoLi4uaS5jaGlsZE5vZGVzKX1mb3IoO251bGwhPT0obD1FLm5leHROb2RlKCkpJiZjLmxlbmd0aDx1Oyl7aWYoMT09PWwubm9kZVR5cGUpe2lmKGwuaGFzQXR0cmlidXRlcygpKXtjb25zdCB0PVtdO2Zvcihjb25zdCBpIG9mIGwuZ2V0QXR0cmlidXRlTmFtZXMoKSlpZihpLmVuZHNXaXRoKFwiJGxpdCRcIil8fGkuc3RhcnRzV2l0aChvKSl7Y29uc3Qgcz1hW2QrK107aWYodC5wdXNoKGkpLHZvaWQgMCE9PXMpe2NvbnN0IHQ9bC5nZXRBdHRyaWJ1dGUocy50b0xvd2VyQ2FzZSgpK1wiJGxpdCRcIikuc3BsaXQobyksaT0vKFsuP0BdKT8oLiopLy5leGVjKHMpO2MucHVzaCh7dHlwZToxLGluZGV4OmgsbmFtZTppWzJdLHN0cmluZ3M6dCxjdG9yOlwiLlwiPT09aVsxXT9SOlwiP1wiPT09aVsxXT9IOlwiQFwiPT09aVsxXT9JOk19KX1lbHNlIGMucHVzaCh7dHlwZTo2LGluZGV4Omh9KX1mb3IoY29uc3QgaSBvZiB0KWwucmVtb3ZlQXR0cmlidXRlKGkpfWlmKCQudGVzdChsLnRhZ05hbWUpKXtjb25zdCB0PWwudGV4dENvbnRlbnQuc3BsaXQobyksaT10Lmxlbmd0aC0xO2lmKGk+MCl7bC50ZXh0Q29udGVudD1zP3MuZW1wdHlTY3JpcHQ6XCJcIjtmb3IobGV0IHM9MDtzPGk7cysrKWwuYXBwZW5kKHRbc10scigpKSxFLm5leHROb2RlKCksYy5wdXNoKHt0eXBlOjIsaW5kZXg6KytofSk7bC5hcHBlbmQodFtpXSxyKCkpfX19ZWxzZSBpZig4PT09bC5ub2RlVHlwZSlpZihsLmRhdGE9PT1uKWMucHVzaCh7dHlwZToyLGluZGV4Omh9KTtlbHNle2xldCB0PS0xO2Zvcig7LTEhPT0odD1sLmRhdGEuaW5kZXhPZihvLHQrMSkpOyljLnB1c2goe3R5cGU6NyxpbmRleDpofSksdCs9by5sZW5ndGgtMX1oKyt9fXN0YXRpYyBjcmVhdGVFbGVtZW50KHQsaSl7Y29uc3Qgcz1oLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gcy5pbm5lckhUTUw9dCxzfX1mdW5jdGlvbiBWKHQsaSxzPXQsZSl7dmFyIG8sbixsLGg7aWYoaT09PXgpcmV0dXJuIGk7bGV0IHI9dm9pZCAwIT09ZT9udWxsPT09KG89cy5fJENsKXx8dm9pZCAwPT09bz92b2lkIDA6b1tlXTpzLl8kQ3U7Y29uc3QgdT1kKGkpP3ZvaWQgMDppLl8kbGl0RGlyZWN0aXZlJDtyZXR1cm4obnVsbD09cj92b2lkIDA6ci5jb25zdHJ1Y3RvcikhPT11JiYobnVsbD09PShuPW51bGw9PXI/dm9pZCAwOnIuXyRBTyl8fHZvaWQgMD09PW58fG4uY2FsbChyLCExKSx2b2lkIDA9PT11P3I9dm9pZCAwOihyPW5ldyB1KHQpLHIuXyRBVCh0LHMsZSkpLHZvaWQgMCE9PWU/KG51bGwhPT0obD0oaD1zKS5fJENsKSYmdm9pZCAwIT09bD9sOmguXyRDbD1bXSlbZV09cjpzLl8kQ3U9ciksdm9pZCAwIT09ciYmKGk9Vih0LHIuXyRBUyh0LGkudmFsdWVzKSxyLGUpKSxpfWNsYXNzIE57Y29uc3RydWN0b3IodCxpKXt0aGlzLnY9W10sdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUQ9dCx0aGlzLl8kQU09aX1nZXQgcGFyZW50Tm9kZSgpe3JldHVybiB0aGlzLl8kQU0ucGFyZW50Tm9kZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1wKHQpe3ZhciBpO2NvbnN0e2VsOntjb250ZW50OnN9LHBhcnRzOmV9PXRoaXMuXyRBRCxvPShudWxsIT09KGk9bnVsbD09dD92b2lkIDA6dC5jcmVhdGlvblNjb3BlKSYmdm9pZCAwIT09aT9pOmgpLmltcG9ydE5vZGUocywhMCk7RS5jdXJyZW50Tm9kZT1vO2xldCBuPUUubmV4dE5vZGUoKSxsPTAscj0wLGQ9ZVswXTtmb3IoO3ZvaWQgMCE9PWQ7KXtpZihsPT09ZC5pbmRleCl7bGV0IGk7Mj09PWQudHlwZT9pPW5ldyBTKG4sbi5uZXh0U2libGluZyx0aGlzLHQpOjE9PT1kLnR5cGU/aT1uZXcgZC5jdG9yKG4sZC5uYW1lLGQuc3RyaW5ncyx0aGlzLHQpOjY9PT1kLnR5cGUmJihpPW5ldyBMKG4sdGhpcyx0KSksdGhpcy52LnB1c2goaSksZD1lWysrcl19bCE9PShudWxsPT1kP3ZvaWQgMDpkLmluZGV4KSYmKG49RS5uZXh0Tm9kZSgpLGwrKyl9cmV0dXJuIG99bSh0KXtsZXQgaT0wO2Zvcihjb25zdCBzIG9mIHRoaXMudil2b2lkIDAhPT1zJiYodm9pZCAwIT09cy5zdHJpbmdzPyhzLl8kQUkodCxzLGkpLGkrPXMuc3RyaW5ncy5sZW5ndGgtMik6cy5fJEFJKHRbaV0pKSxpKyt9fWNsYXNzIFN7Y29uc3RydWN0b3IodCxpLHMsZSl7dmFyIG87dGhpcy50eXBlPTIsdGhpcy5fJEFIPWIsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUE9dCx0aGlzLl8kQUI9aSx0aGlzLl8kQU09cyx0aGlzLm9wdGlvbnM9ZSx0aGlzLl8kQ189bnVsbD09PShvPW51bGw9PWU/dm9pZCAwOmUuaXNDb25uZWN0ZWQpfHx2b2lkIDA9PT1vfHxvfWdldCBfJEFVKCl7dmFyIHQsaTtyZXR1cm4gbnVsbCE9PShpPW51bGw9PT0odD10aGlzLl8kQU0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0Ll8kQVUpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJENffWdldCBwYXJlbnROb2RlKCl7bGV0IHQ9dGhpcy5fJEFBLnBhcmVudE5vZGU7Y29uc3QgaT10aGlzLl8kQU07cmV0dXJuIHZvaWQgMCE9PWkmJjExPT09dC5ub2RlVHlwZSYmKHQ9aS5wYXJlbnROb2RlKSx0fWdldCBzdGFydE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFBfWdldCBlbmROb2RlKCl7cmV0dXJuIHRoaXMuXyRBQn1fJEFJKHQsaT10aGlzKXt0PVYodGhpcyx0LGkpLGQodCk/dD09PWJ8fG51bGw9PXR8fFwiXCI9PT10Pyh0aGlzLl8kQUghPT1iJiZ0aGlzLl8kQVIoKSx0aGlzLl8kQUg9Yik6dCE9PXRoaXMuXyRBSCYmdCE9PXgmJnRoaXMuJCh0KTp2b2lkIDAhPT10Ll8kbGl0VHlwZSQ/dGhpcy5UKHQpOnZvaWQgMCE9PXQubm9kZVR5cGU/dGhpcy5rKHQpOmModCk/dGhpcy5PKHQpOnRoaXMuJCh0KX1TKHQsaT10aGlzLl8kQUIpe3JldHVybiB0aGlzLl8kQUEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxpKX1rKHQpe3RoaXMuXyRBSCE9PXQmJih0aGlzLl8kQVIoKSx0aGlzLl8kQUg9dGhpcy5TKHQpKX0kKHQpe3RoaXMuXyRBSCE9PWImJmQodGhpcy5fJEFIKT90aGlzLl8kQUEubmV4dFNpYmxpbmcuZGF0YT10OnRoaXMuayhoLmNyZWF0ZVRleHROb2RlKHQpKSx0aGlzLl8kQUg9dH1UKHQpe3ZhciBpO2NvbnN0e3ZhbHVlczpzLF8kbGl0VHlwZSQ6ZX09dCxvPVwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuXyRBQyh0KToodm9pZCAwPT09ZS5lbCYmKGUuZWw9UC5jcmVhdGVFbGVtZW50KGUuaCx0aGlzLm9wdGlvbnMpKSxlKTtpZigobnVsbD09PShpPXRoaXMuXyRBSCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuXyRBRCk9PT1vKXRoaXMuXyRBSC5tKHMpO2Vsc2V7Y29uc3QgdD1uZXcgTihvLHRoaXMpLGk9dC5wKHRoaXMub3B0aW9ucyk7dC5tKHMpLHRoaXMuayhpKSx0aGlzLl8kQUg9dH19XyRBQyh0KXtsZXQgaT1ULmdldCh0LnN0cmluZ3MpO3JldHVybiB2b2lkIDA9PT1pJiZULnNldCh0LnN0cmluZ3MsaT1uZXcgUCh0KSksaX1PKHQpe3UodGhpcy5fJEFIKXx8KHRoaXMuXyRBSD1bXSx0aGlzLl8kQVIoKSk7Y29uc3QgaT10aGlzLl8kQUg7bGV0IHMsZT0wO2Zvcihjb25zdCBvIG9mIHQpZT09PWkubGVuZ3RoP2kucHVzaChzPW5ldyBTKHRoaXMuUyhyKCkpLHRoaXMuUyhyKCkpLHRoaXMsdGhpcy5vcHRpb25zKSk6cz1pW2VdLHMuXyRBSShvKSxlKys7ZTxpLmxlbmd0aCYmKHRoaXMuXyRBUihzJiZzLl8kQUIubmV4dFNpYmxpbmcsZSksaS5sZW5ndGg9ZSl9XyRBUih0PXRoaXMuXyRBQS5uZXh0U2libGluZyxpKXt2YXIgcztmb3IobnVsbD09PShzPXRoaXMuXyRBUCl8fHZvaWQgMD09PXN8fHMuY2FsbCh0aGlzLCExLCEwLGkpO3QmJnQhPT10aGlzLl8kQUI7KXtjb25zdCBpPXQubmV4dFNpYmxpbmc7dC5yZW1vdmUoKSx0PWl9fXNldENvbm5lY3RlZCh0KXt2YXIgaTt2b2lkIDA9PT10aGlzLl8kQU0mJih0aGlzLl8kQ189dCxudWxsPT09KGk9dGhpcy5fJEFQKXx8dm9pZCAwPT09aXx8aS5jYWxsKHRoaXMsdCkpfX1jbGFzcyBNe2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7dGhpcy50eXBlPTEsdGhpcy5fJEFIPWIsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLmVsZW1lbnQ9dCx0aGlzLm5hbWU9aSx0aGlzLl8kQU09ZSx0aGlzLm9wdGlvbnM9byxzLmxlbmd0aD4yfHxcIlwiIT09c1swXXx8XCJcIiE9PXNbMV0/KHRoaXMuXyRBSD1BcnJheShzLmxlbmd0aC0xKS5maWxsKG5ldyBTdHJpbmcpLHRoaXMuc3RyaW5ncz1zKTp0aGlzLl8kQUg9Yn1nZXQgdGFnTmFtZSgpe3JldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQsaT10aGlzLHMsZSl7Y29uc3Qgbz10aGlzLnN0cmluZ3M7bGV0IG49ITE7aWYodm9pZCAwPT09byl0PVYodGhpcyx0LGksMCksbj0hZCh0KXx8dCE9PXRoaXMuXyRBSCYmdCE9PXgsbiYmKHRoaXMuXyRBSD10KTtlbHNle2NvbnN0IGU9dDtsZXQgbCxoO2Zvcih0PW9bMF0sbD0wO2w8by5sZW5ndGgtMTtsKyspaD1WKHRoaXMsZVtzK2xdLGksbCksaD09PXgmJihoPXRoaXMuXyRBSFtsXSksbnx8KG49IWQoaCl8fGghPT10aGlzLl8kQUhbbF0pLGg9PT1iP3Q9Yjp0IT09YiYmKHQrPShudWxsIT1oP2g6XCJcIikrb1tsKzFdKSx0aGlzLl8kQUhbbF09aH1uJiYhZSYmdGhpcy5QKHQpfVAodCl7dD09PWI/dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpOnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLG51bGwhPXQ/dDpcIlwiKX19Y2xhc3MgUiBleHRlbmRzIE17Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT0zfVAodCl7dGhpcy5lbGVtZW50W3RoaXMubmFtZV09dD09PWI/dm9pZCAwOnR9fWNvbnN0IGs9cz9zLmVtcHR5U2NyaXB0OlwiXCI7Y2xhc3MgSCBleHRlbmRzIE17Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT00fVAodCl7dCYmdCE9PWI/dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsayk6dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpfX1jbGFzcyBJIGV4dGVuZHMgTXtjb25zdHJ1Y3Rvcih0LGkscyxlLG8pe3N1cGVyKHQsaSxzLGUsbyksdGhpcy50eXBlPTV9XyRBSSh0LGk9dGhpcyl7dmFyIHM7aWYoKHQ9bnVsbCE9PShzPVYodGhpcyx0LGksMCkpJiZ2b2lkIDAhPT1zP3M6Yik9PT14KXJldHVybjtjb25zdCBlPXRoaXMuXyRBSCxvPXQ9PT1iJiZlIT09Ynx8dC5jYXB0dXJlIT09ZS5jYXB0dXJlfHx0Lm9uY2UhPT1lLm9uY2V8fHQucGFzc2l2ZSE9PWUucGFzc2l2ZSxuPXQhPT1iJiYoZT09PWJ8fG8pO28mJnRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLGUpLG4mJnRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLHQpLHRoaXMuXyRBSD10fWhhbmRsZUV2ZW50KHQpe3ZhciBpLHM7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fJEFIP3RoaXMuXyRBSC5jYWxsKG51bGwhPT0ocz1udWxsPT09KGk9dGhpcy5vcHRpb25zKXx8dm9pZCAwPT09aT92b2lkIDA6aS5ob3N0KSYmdm9pZCAwIT09cz9zOnRoaXMuZWxlbWVudCx0KTp0aGlzLl8kQUguaGFuZGxlRXZlbnQodCl9fWNsYXNzIEx7Y29uc3RydWN0b3IodCxpLHMpe3RoaXMuZWxlbWVudD10LHRoaXMudHlwZT02LHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFNPWksdGhpcy5vcHRpb25zPXN9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBSSh0KXtWKHRoaXMsdCl9fWNvbnN0IHo9e0E6XCIkbGl0JFwiLE06byxDOm4sTDoxLFI6QyxEOk4sVjpjLEk6VixIOlMsTjpNLFU6SCxCOkksRjpSLFc6TH0sWj1pLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7bnVsbD09Wnx8WihQLFMpLChudWxsIT09KHQ9aS5saXRIdG1sVmVyc2lvbnMpJiZ2b2lkIDAhPT10P3Q6aS5saXRIdG1sVmVyc2lvbnM9W10pLnB1c2goXCIyLjMuMVwiKTtleHBvcnR7eiBhcyBfJExILHkgYXMgaHRtbCx4IGFzIG5vQ2hhbmdlLGIgYXMgbm90aGluZyxBIGFzIHJlbmRlcix3IGFzIHN2Z307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXBcbiIsImV4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFsbC5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3luYy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb3JhdG9ycy5qcy5tYXBcbiIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7aW5pdH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvdHJhZGVfb2ZmZXIvdHJhZGVfaXRlbV9ob2xkZXJfbWV0YWRhdGEnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3RyYWRlX29mZmVyL2F1dG9fZmlsbCc7XG5cbmluaXQoJ3NyYy9saWIvcGFnZV9zY3JpcHRzL3RyYWRlX29mZmVyLmpzJywgbWFpbik7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9