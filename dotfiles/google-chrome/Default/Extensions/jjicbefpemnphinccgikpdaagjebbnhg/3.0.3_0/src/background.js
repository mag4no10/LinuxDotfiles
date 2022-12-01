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

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSMoneyPrice": () => (/* binding */ CSMoneyPrice)
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


const CSMoneyPrice = new _main__WEBPACK_IMPORTED_MODULE_0__.SimpleHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.CSMONEY_PRICE, (req, sender) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(`https://money.csgofloat.com/price?name=${req.marketHashName}`).then((resp) => {
        return resp.json();
    });
}));


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

/***/ 366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchSkinModel": () => (/* binding */ FetchSkinModel)
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


const FetchSkinModel = new _main__WEBPACK_IMPORTED_MODULE_0__.SimpleHandler(_types__WEBPACK_IMPORTED_MODULE_1__.RequestType.FETCH_SKIN_MODEL, (req) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(`https://money.csgofloat.com/model?url=${req.inspectLink}`).then((resp) => {
        return resp.json().then((data) => {
            if (resp.ok) {
                return data;
            }
            else {
                throw new Error(data.error);
            }
        });
    });
}));


/***/ }),

/***/ 41:
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

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HANDLERS_MAP": () => (/* binding */ HANDLERS_MAP)
/* harmony export */ });
/* harmony import */ var _execute_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fetch_stall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _fetch_inspect_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _execute_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _storage_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _storage_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _csmoney_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(374);
/* harmony import */ var _fetch_pending_trades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(386);
/* harmony import */ var _fetch_skin_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(366);
/* harmony import */ var _storage_remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(342);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);











const HANDLERS_MAP = {
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.EXECUTE_SCRIPT_ON_PAGE]: _execute_script__WEBPACK_IMPORTED_MODULE_0__.ExecuteScriptOnPage,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.EXECUTE_CSS_ON_PAGE]: _execute_css__WEBPACK_IMPORTED_MODULE_3__.ExecuteCssOnPage,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.FETCH_INSPECT_INFO]: _fetch_inspect_info__WEBPACK_IMPORTED_MODULE_2__.FetchInspectInfo,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.FETCH_STALL]: _fetch_stall__WEBPACK_IMPORTED_MODULE_1__.FetchStall,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.STORAGE_GET]: _storage_get__WEBPACK_IMPORTED_MODULE_4__.StorageGet,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.STORAGE_SET]: _storage_set__WEBPACK_IMPORTED_MODULE_5__.StorageSet,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.STORAGE_REMOVE]: _storage_remove__WEBPACK_IMPORTED_MODULE_9__.StorageRemove,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.CSMONEY_PRICE]: _csmoney_price__WEBPACK_IMPORTED_MODULE_6__.CSMoneyPrice,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.FETCH_PENDING_TRADES]: _fetch_pending_trades__WEBPACK_IMPORTED_MODULE_7__.FetchPendingTrades,
    [_types__WEBPACK_IMPORTED_MODULE_10__.RequestType.FETCH_SKIN_MODEL]: _fetch_skin_model__WEBPACK_IMPORTED_MODULE_8__.FetchSkinModel,
};


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

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageGet": () => (/* binding */ StorageGet)
/* harmony export */ });
/* unused harmony export Get */
/* harmony import */ var _storage_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class StorageGetHandler {
    getType() {
        return _types__WEBPACK_IMPORTED_MODULE_2__.RequestType.STORAGE_GET;
    }
    handleRequest(request, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield _storage_store__WEBPACK_IMPORTED_MODULE_0__.gStore.get(request.key);
            return { value };
        });
    }
}
function Get(row) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield (0,_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(new StorageGetHandler(), { key: row.key });
        return resp.value;
    });
}
const StorageGet = new StorageGetHandler();


/***/ }),

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageRemove": () => (/* binding */ StorageRemove)
/* harmony export */ });
/* unused harmony export Remove */
/* harmony import */ var _storage_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class StorageRemoveHandler {
    getType() {
        return _types__WEBPACK_IMPORTED_MODULE_2__.RequestType.STORAGE_REMOVE;
    }
    handleRequest(request, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _storage_store__WEBPACK_IMPORTED_MODULE_0__.gStore.remove(request.key);
            return {};
        });
    }
}
const StorageRemove = new StorageRemoveHandler();
function Remove(row) {
    return (0,_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(StorageRemove, { key: row.key });
}


/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageSet": () => (/* binding */ StorageSet)
/* harmony export */ });
/* unused harmony export Set */
/* harmony import */ var _storage_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class StorageSetHandler {
    getType() {
        return _types__WEBPACK_IMPORTED_MODULE_2__.RequestType.STORAGE_SET;
    }
    handleRequest(request, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _storage_store__WEBPACK_IMPORTED_MODULE_0__.gStore.set(request.key, request.value);
            return {};
        });
    }
}
const StorageSet = new StorageSetHandler();
function Set(row, value) {
    return (0,_client__WEBPACK_IMPORTED_MODULE_1__.ClientSend)(StorageSet, { key: row.key, value });
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

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Handle": () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _handlers_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(391);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function findHandler(type) {
    return _handlers_handlers__WEBPACK_IMPORTED_MODULE_1__.HANDLERS_MAP[type];
}
function Handle(blob, sender) {
    return __awaiter(this, void 0, void 0, function* () {
        if (blob.version !== _types__WEBPACK_IMPORTED_MODULE_0__.Version.V1) {
            // Ignore messages that aren't for this bridge
            return;
        }
        const req = blob;
        const handler = findHandler(req.request_type);
        if (!handler) {
            throw new Error(`couldn't find handler for request type ${req.request_type}`);
        }
        return handler.handleRequest(req.request, sender);
    });
}


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

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gStore": () => (/* binding */ gStore)
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
class Store {
    // Prefer to use sync storage if possible
    get storage() {
        return chrome.storage.sync ? chrome.storage.sync : chrome.storage.local;
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield this.storage.get(key);
            if (!a || !(key in a)) {
                return null;
            }
            try {
                return JSON.parse(a[key]);
            }
            catch (e) {
                // Fallback if this is an old key not stored as JSON
                return a[key];
            }
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storage.set({ [key]: JSON.stringify(value) });
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storage.remove([key]);
        });
    }
}
const gStore = new Store();


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
/* harmony import */ var _lib_bridge_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);

function unifiedHandler(request, sender, sendResponse) {
    (0,_lib_bridge_server__WEBPACK_IMPORTED_MODULE_0__.Handle)(request, sender)
        .then((response) => {
        sendResponse({
            request_type: request.request_type,
            id: request.id,
            response,
        });
    })
        .catch((error) => {
        sendResponse({
            request_type: request.request_type,
            id: request.id,
            error: error.toString(),
        });
    });
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    unifiedHandler(request, sender, sendResponse);
    return true;
});
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    unifiedHandler(request, sender, sendResponse);
    return true;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRTtJQUNuRSxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5QyxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRTtJQUMzRSxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5QyxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9jc21vbmV5X3ByaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfY3NzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2V4ZWN1dGVfc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2ZldGNoX2luc3BlY3RfaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9wZW5kaW5nX3RyYWRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JyaWRnZS9oYW5kbGVycy9mZXRjaF9za2luX21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2ZldGNoX3N0YWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL2hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL2hhbmRsZXJzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvc3RvcmFnZV9nZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvc3RvcmFnZV9yZW1vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvc3RvcmFnZV9zZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2UvaGFuZGxlcnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icmlkZ2Uvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYnJpZGdlL3dyYXBwZXJzL3ByaXZpbGVnZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdG9yYWdlL3N0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW50ZXJuYWxSZXF1ZXN0QnVuZGxlLCBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlLCBSZXF1ZXN0SGFuZGxlciwgVmVyc2lvbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDbGllbnRTZW5kPFJlcSwgUmVzcD4oaGFuZGxlcjogUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPiwgYXJnczogUmVxKTogUHJvbWlzZTxSZXNwPiB7XG4gICAgY29uc3QgYnVuZGxlOiBJbnRlcm5hbFJlcXVlc3RCdW5kbGUgPSB7XG4gICAgICAgIHZlcnNpb246IFZlcnNpb24uVjEsXG4gICAgICAgIHJlcXVlc3RfdHlwZTogaGFuZGxlci5nZXRUeXBlKCksXG4gICAgICAgIHJlcXVlc3Q6IGFyZ3MsXG4gICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMCksXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgd2luZG93LkNTR09GTE9BVF9FWFRFTlNJT05fSUQgfHwgY2hyb21lLnJ1bnRpbWUuaWQsXG4gICAgICAgICAgICBidW5kbGUsXG4gICAgICAgICAgICAocmVzcDogSW50ZXJuYWxSZXNwb25zZUJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwPy5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3AucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwPy5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtTaW1wbGVIYW5kbGVyfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1NNb25leVByaWNlUmVxdWVzdCB7XHJcbiAgICBtYXJrZXRIYXNoTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHluYW1pY0Jhbm5lciB7XHJcbiAgICBkeW5hbWljOiBib29sZWFuO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEltYWdlQmFubmVyIHtcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCYW5uZXIgZXh0ZW5kcyBEeW5hbWljQmFubmVyLCBJbWFnZUJhbm5lciB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDU01vbmV5UHJpY2VSZXNwb25zZSB7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgYmFubmVyPzoge2VuYWJsZT86IGJvb2xlYW59ICYgQmFubmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ1NNb25leVByaWNlID0gbmV3IFNpbXBsZUhhbmRsZXI8Q1NNb25leVByaWNlUmVxdWVzdCwgQ1NNb25leVByaWNlUmVzcG9uc2U+KFxyXG4gICAgUmVxdWVzdFR5cGUuQ1NNT05FWV9QUklDRSxcclxuICAgIGFzeW5jIChyZXEsIHNlbmRlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9tb25leS5jc2dvZmxvYXQuY29tL3ByaWNlP25hbWU9JHtyZXEubWFya2V0SGFzaE5hbWV9YCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkgYXMgUHJvbWlzZTxDU01vbmV5UHJpY2VSZXNwb25zZT47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCB7RW1wdHlSZXNwb25zZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1ByaXZpbGVnZWRIYW5kbGVyfSBmcm9tICcuLi93cmFwcGVycy9wcml2aWxlZ2VkJztcclxuXHJcbmludGVyZmFjZSBFeGVjdXRlQ3NzUmVxdWVzdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeGVjdXRlQ3NzT25QYWdlID0gbmV3IFByaXZpbGVnZWRIYW5kbGVyKFxyXG4gICAgbmV3IEVtcHR5UmVzcG9uc2VIYW5kbGVyPEV4ZWN1dGVDc3NSZXF1ZXN0PihSZXF1ZXN0VHlwZS5FWEVDVVRFX0NTU19PTl9QQUdFLCBhc3luYyAocmVxLCBzZW5kZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICBmaWxlczogW3JlcS5wYXRoXSxcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbik7XHJcbiIsImltcG9ydCB7RW1wdHlSZXNwb25zZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1ByaXZpbGVnZWRIYW5kbGVyfSBmcm9tICcuLi93cmFwcGVycy9wcml2aWxlZ2VkJztcclxuXHJcbmludGVyZmFjZSBFeGVjdXRlU2NyaXB0UmVxdWVzdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeGVjdXRlU2NyaXB0T25QYWdlID0gbmV3IFByaXZpbGVnZWRIYW5kbGVyKFxyXG4gICAgbmV3IEVtcHR5UmVzcG9uc2VIYW5kbGVyPEV4ZWN1dGVTY3JpcHRSZXF1ZXN0PihSZXF1ZXN0VHlwZS5FWEVDVVRFX1NDUklQVF9PTl9QQUdFLCBhc3luYyAocmVxLCBzZW5kZXIpID0+IHtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIGluamVjdCB0aGUgZXh0ZW5zaW9uIElEIGR5bmFtaWNhbGx5IHNvIHRoZSBjbGllbnQga25vd3Mgd2hvIHRvXHJcbiAgICAgICAgLy8gY29tbXVuaWNhdGUgd2l0aC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIE9uIEZpcmVmb3gsIGV4dGVuc2lvbiBJRHMgYXJlIHJhbmRvbSwgc28gdGhpcyBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHNlbmRlci50YWI/LmlkIGFzIG51bWJlcn0sXHJcbiAgICAgICAgICAgIHdvcmxkOiAnTUFJTicsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtjaHJvbWUucnVudGltZS5pZCwgY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdzcmMvbW9kZWxfZnJhbWUuaHRtbCcpXSxcclxuICAgICAgICAgICAgZnVuYzogZnVuY3Rpb24gRXh0ZW5zaW9uSWQoZXh0ZW5zaW9uSWQsIG1vZGVsRnJhbWVVcmwpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5DU0dPRkxPQVRfRVhURU5TSU9OX0lEID0gZXh0ZW5zaW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ1NHT0ZMT0FUX01PREVMX0ZSQU1FX1VSTCA9IG1vZGVsRnJhbWVVcmw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiBzZW5kZXIudGFiPy5pZCBhcyBudW1iZXJ9LFxyXG4gICAgICAgICAgICBmaWxlczogW3JlcS5wYXRoXSxcclxuICAgICAgICAgICAgd29ybGQ6ICdNQUlOJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbik7XHJcbiIsImltcG9ydCB7U2ltcGxlSGFuZGxlcn0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RpY2tlciB7XHJcbiAgICBzbG90OiBudW1iZXI7XHJcbiAgICBzdGlja2VySWQ6IG51bWJlcjtcclxuICAgIGNvZGVuYW1lPzogc3RyaW5nO1xyXG4gICAgbWF0ZXJpYWw/OiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgd2Vhcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtSW5mbyB7XHJcbiAgICBzdGlja2VyczogU3RpY2tlcltdO1xyXG4gICAgaXRlbWlkOiBzdHJpbmc7XHJcbiAgICBkZWZpbmRleDogbnVtYmVyO1xyXG4gICAgcGFpbnRpbmRleDogbnVtYmVyO1xyXG4gICAgcmFyaXR5OiBudW1iZXI7XHJcbiAgICBxdWFsaXR5OiBudW1iZXI7XHJcbiAgICBwYWludHNlZWQ6IG51bWJlcjtcclxuICAgIGludmVudG9yeTogbnVtYmVyO1xyXG4gICAgb3JpZ2luOiBudW1iZXI7XHJcbiAgICBzOiBzdHJpbmc7XHJcbiAgICBhOiBzdHJpbmc7XHJcbiAgICBkOiBzdHJpbmc7XHJcbiAgICBtOiBzdHJpbmc7XHJcbiAgICBmbG9hdHZhbHVlOiBudW1iZXI7XHJcbiAgICBpbWFnZXVybDogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuICAgIHdlYXBvbl90eXBlPzogc3RyaW5nO1xyXG4gICAgaXRlbV9uYW1lPzogc3RyaW5nO1xyXG4gICAgcmFyaXR5X25hbWU/OiBzdHJpbmc7XHJcbiAgICBxdWFsaXR5X25hbWU/OiBzdHJpbmc7XHJcbiAgICBvcmlnaW5fbmFtZT86IHN0cmluZztcclxuICAgIHdlYXJfbmFtZT86IHN0cmluZztcclxuICAgIGZ1bGxfaXRlbV9uYW1lPzogc3RyaW5nO1xyXG4gICAgbG93X3Jhbms/OiBudW1iZXI7XHJcbiAgICBoaWdoX3Jhbms/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hJbnNwZWN0SW5mb1JlcXVlc3Qge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgbGlzdFByaWNlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoSW5zcGVjdEluZm9SZXNwb25zZSB7XHJcbiAgICBpdGVtaW5mbzogSXRlbUluZm87XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZldGNoSW5zcGVjdEluZm8gPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaEluc3BlY3RJbmZvUmVxdWVzdCwgRmV0Y2hJbnNwZWN0SW5mb1Jlc3BvbnNlPihcclxuICAgIFJlcXVlc3RUeXBlLkZFVENIX0lOU1BFQ1RfSU5GTyxcclxuICAgIChyZXEpID0+IHtcclxuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkuY3Nnb2Zsb2F0LmNvbS8/dXJsPSR7cmVxLmxpbmt9Jm1pbmltYWw9dHJ1ZSR7XHJcbiAgICAgICAgICAgIHJlcS5saXN0UHJpY2UgPyAnJmxpc3RQcmljZT0nICsgcmVxLmxpc3RQcmljZSA6ICcnXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVybCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoanNvbjogRmV0Y2hJbnNwZWN0SW5mb1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihqc29uLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxGZXRjaEluc3BlY3RJbmZvUmVzcG9uc2U+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQge1NpbXBsZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7VHJhZGV9IGZyb20gJy4uLy4uL3R5cGVzL2Zsb2F0X21hcmtldCc7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZXRjaFBlbmRpbmdUcmFkZXNSZXF1ZXN0IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoUGVuZGluZ1RyYWRlc1Jlc3BvbnNlIHtcclxuICAgIHRyYWRlc190b19zZW5kOiBUcmFkZVtdO1xyXG4gICAgdHJhZGVzX3RvX3JlY2VpdmU6IFRyYWRlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGZXRjaFBlbmRpbmdUcmFkZXMgPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaFBlbmRpbmdUcmFkZXNSZXF1ZXN0LCBGZXRjaFBlbmRpbmdUcmFkZXNSZXNwb25zZT4oXHJcbiAgICBSZXF1ZXN0VHlwZS5GRVRDSF9QRU5ESU5HX1RSQURFUyxcclxuICAgIGFzeW5jIChyZXEpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vY3Nnb2Zsb2F0LmNvbS9hcGkvdjEvbWUvcGVuZGluZy10cmFkZXNgLCB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgfSkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkgYXMgUHJvbWlzZTxGZXRjaFBlbmRpbmdUcmFkZXNSZXNwb25zZT47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCB7U2ltcGxlSGFuZGxlcn0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoU2tpbk1vZGVsUmVxdWVzdCB7XHJcbiAgICBpbnNwZWN0TGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoU2tpbk1vZGVsUmVzcG9uc2Uge1xyXG4gICAgbW9kZWxMaW5rOiBzdHJpbmc7XHJcbiAgICBzY3JlZW5zaG90TGluazogc3RyaW5nO1xyXG5cclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmV0Y2hTa2luTW9kZWwgPSBuZXcgU2ltcGxlSGFuZGxlcjxGZXRjaFNraW5Nb2RlbFJlcXVlc3QsIEZldGNoU2tpbk1vZGVsUmVzcG9uc2U+KFxyXG4gICAgUmVxdWVzdFR5cGUuRkVUQ0hfU0tJTl9NT0RFTCxcclxuICAgIGFzeW5jIChyZXEpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vbW9uZXkuY3Nnb2Zsb2F0LmNvbS9tb2RlbD91cmw9JHtyZXEuaW5zcGVjdExpbmt9YCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSBhcyBQcm9taXNlPEZldGNoU2tpbk1vZGVsUmVzcG9uc2U+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQge1NpbXBsZUhhbmRsZXJ9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7Q29udHJhY3QsIFVzZXJ9IGZyb20gJy4uLy4uL3R5cGVzL2Zsb2F0X21hcmtldCc7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZXRjaFN0YWxsUmVxdWVzdCB7XHJcbiAgICBzdGVhbV9pZDY0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hTdGFsbFJlc3BvbnNlIHtcclxuICAgIGxpc3RpbmdzPzogQ29udHJhY3RbXTtcclxuICAgIHVzZXI/OiBVc2VyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoU3RhbGxSZXNwb25zZUVycm9yIHtcclxuICAgIGNvZGU/OiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmV0Y2hTdGFsbCA9IG5ldyBTaW1wbGVIYW5kbGVyPEZldGNoU3RhbGxSZXF1ZXN0LCBGZXRjaFN0YWxsUmVzcG9uc2U+KFxyXG4gICAgUmVxdWVzdFR5cGUuRkVUQ0hfU1RBTEwsXHJcbiAgICBhc3luYyAocmVxKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL2NzZ29mbG9hdC5jb20vYXBpL3YxL3VzZXJzLyR7cmVxLnN0ZWFtX2lkNjR9L3N0YWxsYCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCkudGhlbigoanNvbjogRmV0Y2hTdGFsbFJlc3BvbnNlIHwgRmV0Y2hTdGFsbFJlc3BvbnNlRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKChqc29uIGFzIEZldGNoU3RhbGxSZXNwb25zZUVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxGZXRjaFN0YWxsUmVzcG9uc2U+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQge0V4ZWN1dGVTY3JpcHRPblBhZ2V9IGZyb20gJy4vZXhlY3V0ZV9zY3JpcHQnO1xyXG5pbXBvcnQge0ZldGNoU3RhbGx9IGZyb20gJy4vZmV0Y2hfc3RhbGwnO1xyXG5pbXBvcnQge0ZldGNoSW5zcGVjdEluZm99IGZyb20gJy4vZmV0Y2hfaW5zcGVjdF9pbmZvJztcclxuaW1wb3J0IHtFeGVjdXRlQ3NzT25QYWdlfSBmcm9tICcuL2V4ZWN1dGVfY3NzJztcclxuaW1wb3J0IHtTdG9yYWdlR2V0fSBmcm9tICcuL3N0b3JhZ2VfZ2V0JztcclxuaW1wb3J0IHtTdG9yYWdlU2V0fSBmcm9tICcuL3N0b3JhZ2Vfc2V0JztcclxuaW1wb3J0IHtDU01vbmV5UHJpY2V9IGZyb20gJy4vY3Ntb25leV9wcmljZSc7XHJcbmltcG9ydCB7UmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtGZXRjaFBlbmRpbmdUcmFkZXN9IGZyb20gJy4vZmV0Y2hfcGVuZGluZ190cmFkZXMnO1xyXG5pbXBvcnQge0ZldGNoU2tpbk1vZGVsfSBmcm9tICcuL2ZldGNoX3NraW5fbW9kZWwnO1xyXG5pbXBvcnQge1N0b3JhZ2VSZW1vdmV9IGZyb20gJy4vc3RvcmFnZV9yZW1vdmUnO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIQU5ETEVSU19NQVA6IHtba2V5IGluIFJlcXVlc3RUeXBlXTogUmVxdWVzdEhhbmRsZXI8YW55LCBhbnk+fSA9IHtcclxuICAgIFtSZXF1ZXN0VHlwZS5FWEVDVVRFX1NDUklQVF9PTl9QQUdFXTogRXhlY3V0ZVNjcmlwdE9uUGFnZSxcclxuICAgIFtSZXF1ZXN0VHlwZS5FWEVDVVRFX0NTU19PTl9QQUdFXTogRXhlY3V0ZUNzc09uUGFnZSxcclxuICAgIFtSZXF1ZXN0VHlwZS5GRVRDSF9JTlNQRUNUX0lORk9dOiBGZXRjaEluc3BlY3RJbmZvLFxyXG4gICAgW1JlcXVlc3RUeXBlLkZFVENIX1NUQUxMXTogRmV0Y2hTdGFsbCxcclxuICAgIFtSZXF1ZXN0VHlwZS5TVE9SQUdFX0dFVF06IFN0b3JhZ2VHZXQsXHJcbiAgICBbUmVxdWVzdFR5cGUuU1RPUkFHRV9TRVRdOiBTdG9yYWdlU2V0LFxyXG4gICAgW1JlcXVlc3RUeXBlLlNUT1JBR0VfUkVNT1ZFXTogU3RvcmFnZVJlbW92ZSxcclxuICAgIFtSZXF1ZXN0VHlwZS5DU01PTkVZX1BSSUNFXTogQ1NNb25leVByaWNlLFxyXG4gICAgW1JlcXVlc3RUeXBlLkZFVENIX1BFTkRJTkdfVFJBREVTXTogRmV0Y2hQZW5kaW5nVHJhZGVzLFxyXG4gICAgW1JlcXVlc3RUeXBlLkZFVENIX1NLSU5fTU9ERUxdOiBGZXRjaFNraW5Nb2RlbCxcclxufTtcclxuIiwiaW1wb3J0IHtSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUhhbmRsZXI8UmVxLCBSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFJlcSwgUmVzcD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBSZXF1ZXN0VHlwZSwgcHJpdmF0ZSBoYW5kbGVyOiAocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8UmVzcD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcihyZXF1ZXN0LCBzZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5IHt9XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlSZXF1ZXN0SGFuZGxlcjxSZXNwPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPEVtcHR5LCBSZXNwPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFJlcXVlc3RUeXBlLCBwcml2YXRlIGhhbmRsZXI6IChzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpID0+IFByb21pc2U8UmVzcD4pIHt9XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IEVtcHR5LCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3BvbnNlSGFuZGxlcjxSZXE+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8UmVxLCB2b2lkPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFJlcXVlc3RUeXBlLCBwcml2YXRlIGhhbmRsZXI6IChyZXF1ZXN0OiBSZXEsIHNlbmRlcjogTWVzc2FnZVNlbmRlcikgPT4gUHJvbWlzZTx2b2lkPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKHJlcXVlc3QsIHNlbmRlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge2dTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmFnZS9zdG9yZSc7XHJcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vY2xpZW50JztcclxuaW1wb3J0IHtEeW5hbWljU3RvcmFnZUtleSwgU3RvcmFnZUtleSwgU3RvcmFnZVJvd30gZnJvbSAnLi4vLi4vc3RvcmFnZS9rZXlzJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvcmFnZUdldFJlcXVlc3Qge1xyXG4gICAga2V5OiBTdG9yYWdlS2V5IHwgRHluYW1pY1N0b3JhZ2VLZXk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9yYWdlR2V0UmVzcG9uc2U8VD4ge1xyXG4gICAgdmFsdWU6IFQgfCBudWxsO1xyXG59XHJcblxyXG5jbGFzcyBTdG9yYWdlR2V0SGFuZGxlcjxUPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFN0b3JhZ2VHZXRSZXF1ZXN0LCBTdG9yYWdlR2V0UmVzcG9uc2U8VD4+IHtcclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiBSZXF1ZXN0VHlwZS5TVE9SQUdFX0dFVDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVSZXF1ZXN0KFxyXG4gICAgICAgIHJlcXVlc3Q6IFN0b3JhZ2VHZXRSZXF1ZXN0LFxyXG4gICAgICAgIHNlbmRlcjogY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlclxyXG4gICAgKTogUHJvbWlzZTxTdG9yYWdlR2V0UmVzcG9uc2U8VD4+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGdTdG9yZS5nZXQ8VD4ocmVxdWVzdC5rZXkpO1xyXG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0PFQ+KHJvdzogU3RvcmFnZVJvdzxUPik6IFByb21pc2U8VCB8IG51bGw+IHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBDbGllbnRTZW5kKG5ldyBTdG9yYWdlR2V0SGFuZGxlcjxUPigpLCB7a2V5OiByb3cua2V5fSk7XHJcbiAgICByZXR1cm4gcmVzcC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2VHZXQgPSBuZXcgU3RvcmFnZUdldEhhbmRsZXIoKTtcclxuIiwiaW1wb3J0IHtSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge2dTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmFnZS9zdG9yZSc7XHJcbmltcG9ydCB7Q2xpZW50U2VuZH0gZnJvbSAnLi4vY2xpZW50JztcclxuaW1wb3J0IHtEeW5hbWljU3RvcmFnZUtleSwgU3RvcmFnZUtleSwgU3RvcmFnZVJvd30gZnJvbSAnLi4vLi4vc3RvcmFnZS9rZXlzJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvcmFnZVJlbW92ZVJlcXVlc3Qge1xyXG4gICAga2V5OiBTdG9yYWdlS2V5IHwgRHluYW1pY1N0b3JhZ2VLZXk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9yYWdlUmVtb3ZlUmVzcG9uc2Uge31cclxuXHJcbmNsYXNzIFN0b3JhZ2VSZW1vdmVIYW5kbGVyPFQ+IGltcGxlbWVudHMgUmVxdWVzdEhhbmRsZXI8U3RvcmFnZVJlbW92ZVJlcXVlc3QsIFN0b3JhZ2VSZW1vdmVSZXNwb25zZT4ge1xyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIFJlcXVlc3RUeXBlLlNUT1JBR0VfUkVNT1ZFO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZVJlcXVlc3QoXHJcbiAgICAgICAgcmVxdWVzdDogU3RvcmFnZVJlbW92ZVJlcXVlc3QsXHJcbiAgICAgICAgc2VuZGVyOiBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyXHJcbiAgICApOiBQcm9taXNlPFN0b3JhZ2VSZW1vdmVSZXNwb25zZT4ge1xyXG4gICAgICAgIGF3YWl0IGdTdG9yZS5yZW1vdmUocmVxdWVzdC5rZXkpO1xyXG4gICAgICAgIHJldHVybiB7fSBhcyBTdG9yYWdlUmVtb3ZlUmVzcG9uc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yYWdlUmVtb3ZlID0gbmV3IFN0b3JhZ2VSZW1vdmVIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVtb3ZlKHJvdzogU3RvcmFnZVJvdzxhbnk+KTogUHJvbWlzZTxTdG9yYWdlUmVtb3ZlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBDbGllbnRTZW5kKFN0b3JhZ2VSZW1vdmUsIHtrZXk6IHJvdy5rZXl9KTtcclxufVxyXG4iLCJpbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7Z1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yYWdlL3N0b3JlJztcclxuaW1wb3J0IHtDbGllbnRTZW5kfSBmcm9tICcuLi9jbGllbnQnO1xyXG5pbXBvcnQge0R5bmFtaWNTdG9yYWdlS2V5LCBTdG9yYWdlS2V5LCBTdG9yYWdlUm93fSBmcm9tICcuLi8uLi9zdG9yYWdlL2tleXMnO1xyXG5pbXBvcnQge1JlcXVlc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmludGVyZmFjZSBTdG9yYWdlU2V0UmVxdWVzdDxUPiB7XHJcbiAgICBrZXk6IFN0b3JhZ2VLZXkgfCBEeW5hbWljU3RvcmFnZUtleTtcclxuICAgIHZhbHVlOiBUO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvcmFnZVNldFJlc3BvbnNlIHt9XHJcblxyXG5jbGFzcyBTdG9yYWdlU2V0SGFuZGxlcjxUPiBpbXBsZW1lbnRzIFJlcXVlc3RIYW5kbGVyPFN0b3JhZ2VTZXRSZXF1ZXN0PFQ+LCBTdG9yYWdlU2V0UmVzcG9uc2U+IHtcclxuICAgIGdldFR5cGUoKTogUmVxdWVzdFR5cGUge1xyXG4gICAgICAgIHJldHVybiBSZXF1ZXN0VHlwZS5TVE9SQUdFX1NFVDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVSZXF1ZXN0KFxyXG4gICAgICAgIHJlcXVlc3Q6IFN0b3JhZ2VTZXRSZXF1ZXN0PFQ+LFxyXG4gICAgICAgIHNlbmRlcjogY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlclxyXG4gICAgKTogUHJvbWlzZTxTdG9yYWdlU2V0UmVzcG9uc2U+IHtcclxuICAgICAgICBhd2FpdCBnU3RvcmUuc2V0PFQ+KHJlcXVlc3Qua2V5LCByZXF1ZXN0LnZhbHVlKTtcclxuICAgICAgICByZXR1cm4ge30gYXMgU3RvcmFnZVNldFJlc3BvbnNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmFnZVNldCA9IG5ldyBTdG9yYWdlU2V0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNldDxUPihyb3c6IFN0b3JhZ2VSb3c8YW55PiwgdmFsdWU6IFQpOiBQcm9taXNlPFN0b3JhZ2VTZXRSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIENsaWVudFNlbmQoU3RvcmFnZVNldCwge2tleTogcm93LmtleSwgdmFsdWV9KTtcclxufVxyXG4iLCJleHBvcnQgZW51bSBSZXF1ZXN0VHlwZSB7XHJcbiAgICBFWEVDVVRFX1NDUklQVF9PTl9QQUdFLFxyXG4gICAgRVhFQ1VURV9DU1NfT05fUEFHRSxcclxuICAgIEZFVENIX0lOU1BFQ1RfSU5GTyxcclxuICAgIEZFVENIX1NUQUxMLFxyXG4gICAgU1RPUkFHRV9HRVQsXHJcbiAgICBTVE9SQUdFX1NFVCxcclxuICAgIFNUT1JBR0VfUkVNT1ZFLFxyXG4gICAgQ1NNT05FWV9QUklDRSxcclxuICAgIEZFVENIX1BFTkRJTkdfVFJBREVTLFxyXG4gICAgRkVUQ0hfU0tJTl9NT0RFTCxcclxufVxyXG4iLCJpbXBvcnQge0ludGVybmFsUmVxdWVzdEJ1bmRsZSwgUmVxdWVzdEhhbmRsZXIsIFZlcnNpb259IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7SEFORExFUlNfTUFQfSBmcm9tICcuL2hhbmRsZXJzL2hhbmRsZXJzJztcclxuaW1wb3J0IHtSZXF1ZXN0VHlwZX0gZnJvbSAnLi9oYW5kbGVycy90eXBlcyc7XHJcblxyXG5mdW5jdGlvbiBmaW5kSGFuZGxlcih0eXBlOiBSZXF1ZXN0VHlwZSk6IFJlcXVlc3RIYW5kbGVyPGFueSwgYW55PiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gSEFORExFUlNfTUFQW3R5cGVdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gSGFuZGxlKGJsb2I6IGFueSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmIChibG9iLnZlcnNpb24gIT09IFZlcnNpb24uVjEpIHtcclxuICAgICAgICAvLyBJZ25vcmUgbWVzc2FnZXMgdGhhdCBhcmVuJ3QgZm9yIHRoaXMgYnJpZGdlXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcTogSW50ZXJuYWxSZXF1ZXN0QnVuZGxlID0gYmxvYiBhcyBJbnRlcm5hbFJlcXVlc3RCdW5kbGU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlciA9IGZpbmRIYW5kbGVyKHJlcS5yZXF1ZXN0X3R5cGUpO1xyXG4gICAgaWYgKCFoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb3VsZG4ndCBmaW5kIGhhbmRsZXIgZm9yIHJlcXVlc3QgdHlwZSAke3JlcS5yZXF1ZXN0X3R5cGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhbmRsZXIuaGFuZGxlUmVxdWVzdChyZXEucmVxdWVzdCwgc2VuZGVyKTtcclxufVxyXG4iLCJpbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4vaGFuZGxlcnMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogUmVxLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIpOiBQcm9taXNlPFJlc3A+O1xyXG4gICAgZ2V0VHlwZSgpOiBSZXF1ZXN0VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmVyc2lvbiB7XHJcbiAgICBWMSA9ICdDU0dPRkxPQVRfVjEnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVxdWVzdEJ1bmRsZSB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBJbnB1dCByZXF1ZXN0XHJcbiAgICByZXF1ZXN0OiBhbnk7XHJcblxyXG4gICAgLy8gUmFuZG9tIElEIHRvIGlkZW50aWZ5IHRoZSByZXF1ZXN0XHJcbiAgICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsUmVzcG9uc2VCdW5kbGUge1xyXG4gICAgcmVxdWVzdF90eXBlOiBSZXF1ZXN0VHlwZTtcclxuXHJcbiAgICAvLyBSZXNwb25zZVxyXG4gICAgcmVzcG9uc2U6IGFueTtcclxuXHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG5cclxuICAgIC8vIFJhbmRvbSBJRCB0byBpZGVudGlmeSB0aGUgcmVxdWVzdFxyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7UmVxdWVzdFR5cGV9IGZyb20gJy4uL2hhbmRsZXJzL3R5cGVzJztcclxuaW1wb3J0IE1lc3NhZ2VTZW5kZXIgPSBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyO1xyXG5cclxuLyoqXHJcbiAqIFJlc3RyaWN0cyBhIGdpdmVuIGhhbmRsZXIgc3VjaCB0aGF0IGl0IGNhbiBvbmx5IHJ1biBpZiB0aGUgc2VuZGVyIGlzXHJcbiAqIHZlcmlmaWVkIHRvIGJlIGZyb20gdGhlIGV4dGVuc2lvbidzIG9yaWdpbiAoaWUuIGNvbnRlbnQgc2NyaXB0KVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByaXZpbGVnZWRIYW5kbGVyPFJlcSwgUmVzcD4gaW1wbGVtZW50cyBSZXF1ZXN0SGFuZGxlcjxSZXEsIFJlc3A+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFuZGxlcjogUmVxdWVzdEhhbmRsZXI8UmVxLCBSZXNwPikge31cclxuXHJcbiAgICBnZXRUeXBlKCk6IFJlcXVlc3RUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmdldFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyKTogUHJvbWlzZTxSZXNwPiB7XHJcbiAgICAgICAgaWYgKHNlbmRlci5pZCAhPT0gY2hyb21lLnJ1bnRpbWUuaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0IHRvIGFjY2VzcyByZXN0cmljdGVkIG1ldGhvZCBvdXRzaWRlIG9mIHNlY3VyZSBjb250ZXh0IChpZS4gY29udGVudCBzY3JpcHQpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZVJlcXVlc3QocmVxdWVzdCwgc2VuZGVyKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0R5bmFtaWNTdG9yYWdlS2V5LCBTdG9yYWdlS2V5fSBmcm9tICcuL2tleXMnO1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gICAgLy8gUHJlZmVyIHRvIHVzZSBzeW5jIHN0b3JhZ2UgaWYgcG9zc2libGVcclxuICAgIGdldCBzdG9yYWdlKCk6IGNocm9tZS5zdG9yYWdlLlN5bmNTdG9yYWdlQXJlYSB8IGNocm9tZS5zdG9yYWdlLkxvY2FsU3RvcmFnZUFyZWEge1xyXG4gICAgICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5zeW5jID8gY2hyb21lLnN0b3JhZ2Uuc3luYyA6IGNocm9tZS5zdG9yYWdlLmxvY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldDxUPihrZXk6IFN0b3JhZ2VLZXkgfCBEeW5hbWljU3RvcmFnZUtleSk6IFByb21pc2U8VCB8IG51bGw+IHtcclxuICAgICAgICBjb25zdCBhID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldChrZXkpO1xyXG4gICAgICAgIGlmICghYSB8fCAhKGtleSBpbiBhKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGFba2V5XSkgYXMgVDtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGlmIHRoaXMgaXMgYW4gb2xkIGtleSBub3Qgc3RvcmVkIGFzIEpTT05cclxuICAgICAgICAgICAgcmV0dXJuIGFba2V5XSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXQ8VD4oa2V5OiBTdG9yYWdlS2V5IHwgRHluYW1pY1N0b3JhZ2VLZXksIHZhbHVlOiBUKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXQoe1trZXldOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmUoa2V5OiBTdG9yYWdlS2V5IHwgRHluYW1pY1N0b3JhZ2VLZXkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnJlbW92ZShba2V5XSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnU3RvcmUgPSBuZXcgU3RvcmUoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQge0hhbmRsZX0gZnJvbSAnLi9saWIvYnJpZGdlL3NlcnZlcic7XG5pbXBvcnQge0ludGVybmFsUmVzcG9uc2VCdW5kbGV9IGZyb20gJy4vbGliL2JyaWRnZS90eXBlcyc7XG5pbXBvcnQgTWVzc2FnZVNlbmRlciA9IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXI7XG5cbmZ1bmN0aW9uIHVuaWZpZWRIYW5kbGVyKHJlcXVlc3Q6IGFueSwgc2VuZGVyOiBNZXNzYWdlU2VuZGVyLCBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZCkge1xuICAgIEhhbmRsZShyZXF1ZXN0LCBzZW5kZXIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHJlcXVlc3QucmVxdWVzdF90eXBlLFxuICAgICAgICAgICAgICAgIGlkOiByZXF1ZXN0LmlkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfSBhcyBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHJlcXVlc3QucmVxdWVzdF90eXBlLFxuICAgICAgICAgICAgICAgIGlkOiByZXF1ZXN0LmlkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgfSBhcyBJbnRlcm5hbFJlc3BvbnNlQnVuZGxlKTtcbiAgICAgICAgfSk7XG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB1bmlmaWVkSGFuZGxlcihyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdW5pZmllZEhhbmRsZXIocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=