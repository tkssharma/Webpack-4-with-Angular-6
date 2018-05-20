/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
exports.NgLocalization_3 = common_1.NgLocalization;
exports.NgLocaleLocalization_4 = common_1.NgLocaleLocalization;
exports.ɵa_6 = common_1.ɵa;
exports.CommonModule_7 = common_1.CommonModule;
exports.DOCUMENT_29 = common_1.DOCUMENT;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
exports.LOCALE_ID_5 = core_1.LOCALE_ID;
exports.ApplicationRef_8 = core_1.ApplicationRef;
exports.NgZone_9 = core_1.NgZone;
exports.ɵConsole_10 = core_1.ɵConsole;
exports.Injector_11 = core_1.Injector;
exports.ErrorHandler_12 = core_1.ErrorHandler;
exports.ComponentFactoryResolver_13 = core_1.ComponentFactoryResolver;
exports.ApplicationInitStatus_14 = core_1.ApplicationInitStatus;
exports.ApplicationModule_15 = core_1.ApplicationModule;
exports.APP_INITIALIZER_16 = core_1.APP_INITIALIZER;
exports.Compiler_17 = core_1.Compiler;
exports.APP_ID_18 = core_1.APP_ID;
exports.ɵi_19 = core_1.ɵi;
exports.IterableDiffers_20 = core_1.IterableDiffers;
exports.ɵn_21 = core_1.ɵn;
exports.KeyValueDiffers_22 = core_1.KeyValueDiffers;
exports.ɵo_23 = core_1.ɵo;
exports.ɵq_24 = core_1.ɵq;
exports.Sanitizer_25 = core_1.Sanitizer;
exports.RendererFactory2_40 = core_1.RendererFactory2;
exports.Testability_42 = core_1.Testability;
exports.NgProbeToken_44 = core_1.NgProbeToken;
exports.PLATFORM_ID_53 = core_1.PLATFORM_ID;
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
exports.DomSanitizer_26 = platform_browser_1.DomSanitizer;
exports.BrowserModule_27 = platform_browser_1.BrowserModule;
exports.ɵe_28 = platform_browser_1.ɵe;
exports.ɵa_30 = platform_browser_1.ɵa;
exports.EVENT_MANAGER_PLUGINS_31 = platform_browser_1.EVENT_MANAGER_PLUGINS;
exports.ɵDomEventsPlugin_32 = platform_browser_1.ɵDomEventsPlugin;
exports.ɵKeyEventsPlugin_33 = platform_browser_1.ɵKeyEventsPlugin;
exports.ɵHammerGesturesPlugin_34 = platform_browser_1.ɵHammerGesturesPlugin;
exports.HAMMER_GESTURE_CONFIG_35 = platform_browser_1.HAMMER_GESTURE_CONFIG;
exports.HammerGestureConfig_36 = platform_browser_1.HammerGestureConfig;
exports.ɵDomRendererFactory2_37 = platform_browser_1.ɵDomRendererFactory2;
exports.EventManager_38 = platform_browser_1.EventManager;
exports.ɵDomSharedStylesHost_39 = platform_browser_1.ɵDomSharedStylesHost;
exports.ɵSharedStylesHost_41 = platform_browser_1.ɵSharedStylesHost;
exports.ɵh_43 = platform_browser_1.ɵh;
exports.Meta_45 = platform_browser_1.Meta;
exports.Title_46 = platform_browser_1.Title;
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
exports.ɵi_47 = http_1.ɵi;
exports.HttpXsrfTokenExtractor_48 = http_1.HttpXsrfTokenExtractor;
exports.ɵg_49 = http_1.ɵg;
exports.HttpClientXsrfModule_50 = http_1.HttpClientXsrfModule;
exports.HTTP_INTERCEPTORS_51 = http_1.HTTP_INTERCEPTORS;
exports.ɵh_52 = http_1.ɵh;
exports.ɵf_54 = http_1.ɵf;
exports.HttpClientModule_55 = http_1.HttpClientModule;
exports.HttpClient_56 = http_1.HttpClient;
exports.HttpHandler_57 = http_1.HttpHandler;
exports.ɵc_58 = http_1.ɵc;
exports.HttpBackend_59 = http_1.HttpBackend;
exports.HttpXhrBackend_60 = http_1.HttpXhrBackend;
exports.XhrFactory_61 = http_1.XhrFactory;
exports.ɵe_62 = http_1.ɵe;
var angular_svg_icon_1 = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js");
exports.SvgIconRegistryService_63 = angular_svg_icon_1.SvgIconRegistryService;
exports.SVG_ICON_REGISTRY_PROVIDER_FACTORY_64 = angular_svg_icon_1.SVG_ICON_REGISTRY_PROVIDER_FACTORY;
exports.AngularSvgIconModule_65 = angular_svg_icon_1.AngularSvgIconModule;
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.js");
var i2 = __webpack_require__(/*! ./root-component/app-root.component */ "./src/app/root-component/app-root.component.js");
var i3 = __webpack_require__(/*! ./root-component/app-root.component.ngfactory */ "./src/app/root-component/app-root.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var i6 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var i7 = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js");
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppRootComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AppRootComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵq, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵa]]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵi, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵn, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵo, []), i0.ɵmpd(4608, i5.DomSanitizer, i5.ɵe, [i4.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i5.DomSanitizer]), i0.ɵmpd(4608, i5.HAMMER_GESTURE_CONFIG, i5.HammerGestureConfig, []), i0.ɵmpd(5120, i5.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i5.ɵDomEventsPlugin(p0_0, p0_1), new i5.ɵKeyEventsPlugin(p1_0), new i5.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i4.DOCUMENT, i0.NgZone, i4.DOCUMENT, i4.DOCUMENT, i5.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i5.EventManager, i5.EventManager, [i5.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i5.ɵDomSharedStylesHost, i5.ɵDomSharedStylesHost, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.ɵDomRendererFactory2, i5.ɵDomRendererFactory2, [i5.EventManager, i5.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i5.ɵDomRendererFactory2]), i0.ɵmpd(6144, i5.ɵSharedStylesHost, null, [i5.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i5.Meta, i5.Meta, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.Title, i5.Title, [i4.DOCUMENT]), i0.ɵmpd(4608, i6.HttpXsrfTokenExtractor, i6.ɵh, [i4.DOCUMENT, i0.PLATFORM_ID, i6.ɵf]), i0.ɵmpd(4608, i6.ɵi, i6.ɵi, [i6.HttpXsrfTokenExtractor, i6.ɵg]), i0.ɵmpd(5120, i6.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i6.ɵi]), i0.ɵmpd(4608, i6.ɵe, i6.ɵe, []), i0.ɵmpd(6144, i6.XhrFactory, null, [i6.ɵe]), i0.ɵmpd(4608, i6.HttpXhrBackend, i6.HttpXhrBackend, [i6.XhrFactory]), i0.ɵmpd(6144, i6.HttpBackend, null, [i6.HttpXhrBackend]), i0.ɵmpd(4608, i6.HttpHandler, i6.ɵc, [i6.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i6.HttpClient, i6.HttpClient, [i6.HttpHandler]), i0.ɵmpd(5120, i7.SvgIconRegistryService, i7.SVG_ICON_REGISTRY_PROVIDER_FACTORY, [[3, i7.SvgIconRegistryService], i6.HttpClient]), i0.ɵmpd(512, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i5.ɵa, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0) { return [i5.ɵh(p0_0)]; }, [[2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i5.BrowserModule, i5.BrowserModule, [[3, i5.BrowserModule]]), i0.ɵmpd(512, i6.HttpClientXsrfModule, i6.HttpClientXsrfModule, []), i0.ɵmpd(512, i6.HttpClientModule, i6.HttpClientModule, []), i0.ɵmpd(512, i7.AngularSvgIconModule, i7.AngularSvgIconModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i6.ɵf, "XSRF-TOKEN", []), i0.ɵmpd(256, i6.ɵg, "X-XSRF-TOKEN", [])]); });
exports.AppModuleNgFactory = AppModuleNgFactory;
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ "./src/app/footer-component/footer.component.js":
/*!******************************************************!*\
  !*** ./src/app/footer-component/footer.component.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/footer-component/footer.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/footer-component/footer.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__(/*! ../../../node_modules/angular-svg-icon/angular-svg-icon.ngfactory */ "./node_modules/angular-svg-icon/angular-svg-icon.ngfactory.js");
var i2 = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/esm5/angular-svg-icon.js");
var i3 = __webpack_require__(/*! ./footer.component */ "./src/app/footer-component/footer.component.js");
var styles_FooterComponent = [];
var RenderType_FooterComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [["class", "footer-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "vendor-logo"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t\t"])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "svg-icon", [["src", "assets/images/angular.svg"]], null, null, null, i1.View_SvgIconComponent_0, i1.RenderType_SvgIconComponent)), i0.ɵdid(5, 1032192, null, 0, i2.SvgIconComponent, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2, i2.SvgIconRegistryService], { src: [0, "src"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(8, 0, null, null, 4, "div", [["class", "vendor-logo"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t\t"])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "svg-icon", [["src", "assets/images/webpack-icon.svg"]], null, null, null, i1.View_SvgIconComponent_0, i1.RenderType_SvgIconComponent)), i0.ɵdid(11, 1032192, null, 0, i2.SvgIconComponent, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2, i2.SvgIconRegistryService], { src: [0, "src"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\n\t"])), (_l()(), i0.ɵeld(14, 0, null, null, 1, "div", [["class", "footer-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit id ipsam molestiae vitae voluptatem. Debitis\n\t\tharum nam necessitatibus. Accusamus autem fugit non odit quis similique? Cupiditate expedita in necessitatibus\n\t\tperspiciatis.\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "assets/images/angular.svg"; _ck(_v, 5, 0, currVal_0); var currVal_1 = "assets/images/webpack-icon.svg"; _ck(_v, 11, 0, currVal_1); }, null); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "footer-component", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), i0.ɵdid(1, 49152, null, 0, i3.FooterComponent, [], null, null)], null, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i0.ɵccf("footer-component", i3.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;
//# sourceMappingURL=footer.component.ngfactory.js.map

/***/ }),

/***/ "./src/app/root-component/app-root.component.js":
/*!******************************************************!*\
  !*** ./src/app/root-component/app-root.component.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppRootComponent = (function () {
    function AppRootComponent() {
        this.title = 'Angular 5/W4 App started';
    }
    return AppRootComponent;
}());
exports.AppRootComponent = AppRootComponent;
//# sourceMappingURL=app-root.component.js.map

/***/ }),

/***/ "./src/app/root-component/app-root.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/root-component/app-root.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__(/*! ../footer-component/footer.component.ngfactory */ "./src/app/footer-component/footer.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../footer-component/footer.component */ "./src/app/footer-component/footer.component.js");
var i3 = __webpack_require__(/*! ./app-root.component */ "./src/app/root-component/app-root.component.js");
var styles_AppRootComponent = [];
var RenderType_AppRootComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppRootComponent, data: {} });
exports.RenderType_AppRootComponent = RenderType_AppRootComponent;
function View_AppRootComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 34, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "h1", [["class", "app"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugiat ipsum modi nam nostrum similique\n\t\tsint. Corporis cum dignissimos nam officiis quasi ullam ut velit. Dolores excepturi voluptas voluptatem\n\t\tvoluptatibus.\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Assumenda corporis, dolorum eius eligendi exercitationem illo impedit ipsum, necessitatibus nisi nostrum odio\n\t\tplaceat quae quibusdam quidem recusandae rerum vitae. Minus neque porro provident quo saepe totam! Laboriosam,\n\t\tlibero obcaecati!\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Beatae corporis cum deleniti, doloribus ea, earum eos error facere facilis id inventore magni maiores modi\n\t\tmollitia nostrum odit placeat praesentium quisquam temporibus voluptatum. Architecto consectetur error inventore\n\t\tlibero tenetur.\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Ab alias amet architecto asperiores aut autem beatae blanditiis consequatur culpa doloribus dolorum eius facere\n\t\tiste laborum libero magnam mollitia neque nobis omnis, porro quae qui repellat, sapiente temporibus tenetur?\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Aperiam asperiores aut consectetur cupiditate dicta dolore dolorem eaque eius, eligendi enim excepturi facilis,\n\t\thic illo inventore laboriosam nemo nesciunt nihil officiis pariatur provident quod ratione recusandae\n\t\trepellendus similique voluptatem?\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Delectus deleniti dicta illo nam non ratione veritatis. Debitis, neque rerum! A, aperiam architecto dicta,\n\t\tdignissimos enim et expedita, illo illum ipsam ipsum itaque libero mollitia odio praesentium quidem suscipit!\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["A accusantium animi asperiores atque consequatur culpa deleniti doloremque dolores eos eum fugiat in incidunt\n\t\tmagnam, maiores minus officia perferendis praesentium provident, qui ratione rem repudiandae sed similique sit\n\t\tsunt.\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Aut autem commodi consequatur consequuntur corporis cum dicta, dolor dolorum earum incidunt ipsam iure\n\t\tlaboriosam laudantium modi nam nemo nihil possimus quam quas quasi, repellat, repellendus vel. Consequatur,\n\t\tincidunt laudantium!\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Aliquam asperiores consequuntur cumque cupiditate deserunt dolorem eaque, earum error id incidunt itaque\n\t\tlaboriosam laudantium libero porro quas quasi quisquam reprehenderit sed sint soluta suscipit, ullam vitae\n\t\tvoluptatibus. Deleniti, suscipit.\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n\t"])), (_l()(), i0.ɵeld(32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Debitis dolores, exercitationem facere fuga harum impedit in ipsam labore, laboriosam magni molestiae molestias\n\t\tnam non numquam odio officiis pariatur praesentium quisquam quod quos sint soluta tempora tenetur vitae\n\t\tvoluptas!\n\t"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(36, 0, null, null, 1, "footer-component", [], null, null, null, i1.View_FooterComponent_0, i1.RenderType_FooterComponent)), i0.ɵdid(37, 49152, null, 0, i2.FooterComponent, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 3, 0, currVal_0); }); }
exports.View_AppRootComponent_0 = View_AppRootComponent_0;
function View_AppRootComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppRootComponent_0, RenderType_AppRootComponent)), i0.ɵdid(1, 49152, null, 0, i3.AppRootComponent, [], null, null)], null, null); }
exports.View_AppRootComponent_Host_0 = View_AppRootComponent_Host_0;
var AppRootComponentNgFactory = i0.ɵccf("app-root", i3.AppRootComponent, View_AppRootComponent_Host_0, {}, {}, []);
exports.AppRootComponentNgFactory = AppRootComponentNgFactory;
//# sourceMappingURL=app-root.component.ngfactory.js.map

/***/ }),

/***/ "./src/assets/app.less":
/*!*****************************!*\
  !*** ./src/assets/app.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/app.css";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./index.html */ "./src/index.html");
__webpack_require__(/*! ./assets/app.less */ "./src/assets/app.less");
__webpack_require__(/*! ./vendor */ "./src/vendor.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
if (false) {}
else {
    console.log('DEV mode');
}
console.log('Built at:', new Date(1526813693087));
__NgCli_bootstrap_2.platformBrowser().bootstrapModuleFactory(__NgCli_bootstrap_1.AppModuleNgFactory);


/***/ }),

/***/ "./src/vendor.js":
/*!***********************!*\
  !*** ./src/vendor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
__webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
__webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
__webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
//# sourceMappingURL=vendor.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yb290LWNvbXBvbmVudC9hcHAtcm9vdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yb290LWNvbXBvbmVudC9hcHAtcm9vdC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXBwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHdFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0M7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsMHZCQUEwdkIsdUhBQXVILEVBQUUsODFCQUE4MUIsZUFBZSxFQUFFLGtuQkFBa25CLHNCQUFzQixFQUFFLDJ2QkFBMnZCLEVBQUU7QUFDOXJHO0FBQ0EsZ0Q7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyREFBMkQsRUFBRTtBQUN2RztBQUNBLHFDQUFxQyxxbUJBQXFtQixrQkFBa0IsMmhCQUEyaEIsa0JBQWtCLDZoQkFBNmhCLDZDQUE2QywwQkFBMEIsa0RBQWtELDJCQUEyQixFQUFFLFFBQVE7QUFDcDREO0FBQ0EsMENBQTBDLHVPQUF1TztBQUNqUjtBQUNBLDhHQUE4RyxJQUFJO0FBQ2xIO0FBQ0Esc0Q7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNERBQTRELEVBQUU7QUFDekc7QUFDQSxzQ0FBc0Msd2dKQUF3Z0osd0JBQXdCLDJCQUEyQiwwQkFBMEIsRUFBRSxFQUFFO0FBQy9uSjtBQUNBLDJDQUEyQyxrT0FBa087QUFDN1E7QUFDQSx5R0FBeUcsSUFBSTtBQUM3RztBQUNBLHdEOzs7Ozs7Ozs7OztBQ2ZBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7Ozs7OztBQ0FBLDREQUFzQjtBQUN0QixzRUFBMkI7QUFDM0IsdURBQWtCO0FBS2xCLG1HQUE2Qzs7O0FBTTdDLEVBQUUsQ0FBQyxDQUFDLEtBQVUsQ0FBQyxDQUFDLEVBR2Y7QUFBQyxJQUFJLENBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWMsQ0FBQyxDQUFDLENBQUM7QUFFbkQscUNBQXdCLHVCQUFnQix3Q0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckJwRDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKCdDYW5ub3QgZmluZCBtb2R1bGUgXCInICsgcmVxICsgJ1wiLicpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFwcE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gQXBwTW9kdWxlO1xufSgpKTtcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLm1vZHVsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5leHBvcnRzLk5nTG9jYWxpemF0aW9uXzMgPSBjb21tb25fMS5OZ0xvY2FsaXphdGlvbjtcbmV4cG9ydHMuTmdMb2NhbGVMb2NhbGl6YXRpb25fNCA9IGNvbW1vbl8xLk5nTG9jYWxlTG9jYWxpemF0aW9uO1xuZXhwb3J0cy7JtWFfNiA9IGNvbW1vbl8xLsm1YTtcbmV4cG9ydHMuQ29tbW9uTW9kdWxlXzcgPSBjb21tb25fMS5Db21tb25Nb2R1bGU7XG5leHBvcnRzLkRPQ1VNRU5UXzI5ID0gY29tbW9uXzEuRE9DVU1FTlQ7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5leHBvcnRzLkxPQ0FMRV9JRF81ID0gY29yZV8xLkxPQ0FMRV9JRDtcbmV4cG9ydHMuQXBwbGljYXRpb25SZWZfOCA9IGNvcmVfMS5BcHBsaWNhdGlvblJlZjtcbmV4cG9ydHMuTmdab25lXzkgPSBjb3JlXzEuTmdab25lO1xuZXhwb3J0cy7JtUNvbnNvbGVfMTAgPSBjb3JlXzEuybVDb25zb2xlO1xuZXhwb3J0cy5JbmplY3Rvcl8xMSA9IGNvcmVfMS5JbmplY3RvcjtcbmV4cG9ydHMuRXJyb3JIYW5kbGVyXzEyID0gY29yZV8xLkVycm9ySGFuZGxlcjtcbmV4cG9ydHMuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXzEzID0gY29yZV8xLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbmV4cG9ydHMuQXBwbGljYXRpb25Jbml0U3RhdHVzXzE0ID0gY29yZV8xLkFwcGxpY2F0aW9uSW5pdFN0YXR1cztcbmV4cG9ydHMuQXBwbGljYXRpb25Nb2R1bGVfMTUgPSBjb3JlXzEuQXBwbGljYXRpb25Nb2R1bGU7XG5leHBvcnRzLkFQUF9JTklUSUFMSVpFUl8xNiA9IGNvcmVfMS5BUFBfSU5JVElBTElaRVI7XG5leHBvcnRzLkNvbXBpbGVyXzE3ID0gY29yZV8xLkNvbXBpbGVyO1xuZXhwb3J0cy5BUFBfSURfMTggPSBjb3JlXzEuQVBQX0lEO1xuZXhwb3J0cy7JtWlfMTkgPSBjb3JlXzEuybVpO1xuZXhwb3J0cy5JdGVyYWJsZURpZmZlcnNfMjAgPSBjb3JlXzEuSXRlcmFibGVEaWZmZXJzO1xuZXhwb3J0cy7JtW5fMjEgPSBjb3JlXzEuybVuO1xuZXhwb3J0cy5LZXlWYWx1ZURpZmZlcnNfMjIgPSBjb3JlXzEuS2V5VmFsdWVEaWZmZXJzO1xuZXhwb3J0cy7JtW9fMjMgPSBjb3JlXzEuybVvO1xuZXhwb3J0cy7JtXFfMjQgPSBjb3JlXzEuybVxO1xuZXhwb3J0cy5TYW5pdGl6ZXJfMjUgPSBjb3JlXzEuU2FuaXRpemVyO1xuZXhwb3J0cy5SZW5kZXJlckZhY3RvcnkyXzQwID0gY29yZV8xLlJlbmRlcmVyRmFjdG9yeTI7XG5leHBvcnRzLlRlc3RhYmlsaXR5XzQyID0gY29yZV8xLlRlc3RhYmlsaXR5O1xuZXhwb3J0cy5OZ1Byb2JlVG9rZW5fNDQgPSBjb3JlXzEuTmdQcm9iZVRva2VuO1xuZXhwb3J0cy5QTEFURk9STV9JRF81MyA9IGNvcmVfMS5QTEFURk9STV9JRDtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcbmV4cG9ydHMuRG9tU2FuaXRpemVyXzI2ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLkRvbVNhbml0aXplcjtcbmV4cG9ydHMuQnJvd3Nlck1vZHVsZV8yNyA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5Ccm93c2VyTW9kdWxlO1xuZXhwb3J0cy7JtWVfMjggPSBwbGF0Zm9ybV9icm93c2VyXzEuybVlO1xuZXhwb3J0cy7JtWFfMzAgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVhO1xuZXhwb3J0cy5FVkVOVF9NQU5BR0VSX1BMVUdJTlNfMzEgPSBwbGF0Zm9ybV9icm93c2VyXzEuRVZFTlRfTUFOQUdFUl9QTFVHSU5TO1xuZXhwb3J0cy7JtURvbUV2ZW50c1BsdWdpbl8zMiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS7JtURvbUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuybVLZXlFdmVudHNQbHVnaW5fMzMgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVLZXlFdmVudHNQbHVnaW47XG5leHBvcnRzLsm1SGFtbWVyR2VzdHVyZXNQbHVnaW5fMzQgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVIYW1tZXJHZXN0dXJlc1BsdWdpbjtcbmV4cG9ydHMuSEFNTUVSX0dFU1RVUkVfQ09ORklHXzM1ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLkhBTU1FUl9HRVNUVVJFX0NPTkZJRztcbmV4cG9ydHMuSGFtbWVyR2VzdHVyZUNvbmZpZ18zNiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5IYW1tZXJHZXN0dXJlQ29uZmlnO1xuZXhwb3J0cy7JtURvbVJlbmRlcmVyRmFjdG9yeTJfMzcgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVEb21SZW5kZXJlckZhY3RvcnkyO1xuZXhwb3J0cy5FdmVudE1hbmFnZXJfMzggPSBwbGF0Zm9ybV9icm93c2VyXzEuRXZlbnRNYW5hZ2VyO1xuZXhwb3J0cy7JtURvbVNoYXJlZFN0eWxlc0hvc3RfMzkgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVEb21TaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy7JtVNoYXJlZFN0eWxlc0hvc3RfNDEgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVTaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy7JtWhfNDMgPSBwbGF0Zm9ybV9icm93c2VyXzEuybVoO1xuZXhwb3J0cy5NZXRhXzQ1ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLk1ldGE7XG5leHBvcnRzLlRpdGxlXzQ2ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLlRpdGxlO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTtcbmV4cG9ydHMuybVpXzQ3ID0gaHR0cF8xLsm1aTtcbmV4cG9ydHMuSHR0cFhzcmZUb2tlbkV4dHJhY3Rvcl80OCA9IGh0dHBfMS5IdHRwWHNyZlRva2VuRXh0cmFjdG9yO1xuZXhwb3J0cy7JtWdfNDkgPSBodHRwXzEuybVnO1xuZXhwb3J0cy5IdHRwQ2xpZW50WHNyZk1vZHVsZV81MCA9IGh0dHBfMS5IdHRwQ2xpZW50WHNyZk1vZHVsZTtcbmV4cG9ydHMuSFRUUF9JTlRFUkNFUFRPUlNfNTEgPSBodHRwXzEuSFRUUF9JTlRFUkNFUFRPUlM7XG5leHBvcnRzLsm1aF81MiA9IGh0dHBfMS7JtWg7XG5leHBvcnRzLsm1Zl81NCA9IGh0dHBfMS7JtWY7XG5leHBvcnRzLkh0dHBDbGllbnRNb2R1bGVfNTUgPSBodHRwXzEuSHR0cENsaWVudE1vZHVsZTtcbmV4cG9ydHMuSHR0cENsaWVudF81NiA9IGh0dHBfMS5IdHRwQ2xpZW50O1xuZXhwb3J0cy5IdHRwSGFuZGxlcl81NyA9IGh0dHBfMS5IdHRwSGFuZGxlcjtcbmV4cG9ydHMuybVjXzU4ID0gaHR0cF8xLsm1YztcbmV4cG9ydHMuSHR0cEJhY2tlbmRfNTkgPSBodHRwXzEuSHR0cEJhY2tlbmQ7XG5leHBvcnRzLkh0dHBYaHJCYWNrZW5kXzYwID0gaHR0cF8xLkh0dHBYaHJCYWNrZW5kO1xuZXhwb3J0cy5YaHJGYWN0b3J5XzYxID0gaHR0cF8xLlhockZhY3Rvcnk7XG5leHBvcnRzLsm1ZV82MiA9IGh0dHBfMS7JtWU7XG52YXIgYW5ndWxhcl9zdmdfaWNvbl8xID0gcmVxdWlyZShcImFuZ3VsYXItc3ZnLWljb25cIik7XG5leHBvcnRzLlN2Z0ljb25SZWdpc3RyeVNlcnZpY2VfNjMgPSBhbmd1bGFyX3N2Z19pY29uXzEuU3ZnSWNvblJlZ2lzdHJ5U2VydmljZTtcbmV4cG9ydHMuU1ZHX0lDT05fUkVHSVNUUllfUFJPVklERVJfRkFDVE9SWV82NCA9IGFuZ3VsYXJfc3ZnX2ljb25fMS5TVkdfSUNPTl9SRUdJU1RSWV9QUk9WSURFUl9GQUNUT1JZO1xuZXhwb3J0cy5Bbmd1bGFyU3ZnSWNvbk1vZHVsZV82NSA9IGFuZ3VsYXJfc3ZnX2ljb25fMS5Bbmd1bGFyU3ZnSWNvbk1vZHVsZTtcbnZhciBpMCA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIGkxID0gcmVxdWlyZShcIi4vYXBwLm1vZHVsZVwiKTtcbnZhciBpMiA9IHJlcXVpcmUoXCIuL3Jvb3QtY29tcG9uZW50L2FwcC1yb290LmNvbXBvbmVudFwiKTtcbnZhciBpMyA9IHJlcXVpcmUoXCIuL3Jvb3QtY29tcG9uZW50L2FwcC1yb290LmNvbXBvbmVudC5uZ2ZhY3RvcnlcIik7XG52YXIgaTQgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xudmFyIGk1ID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XG52YXIgaTYgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIik7XG52YXIgaTcgPSByZXF1aXJlKFwiYW5ndWxhci1zdmctaWNvblwiKTtcbnZhciBBcHBNb2R1bGVOZ0ZhY3RvcnkgPSBpMC7JtWNtZihpMS5BcHBNb2R1bGUsIFtpMi5BcHBSb290Q29tcG9uZW50XSwgZnVuY3Rpb24gKF9sKSB7IHJldHVybiBpMC7JtW1vZChbaTAuybVtcGQoNTEyLCBpMC5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGkwLsm1Q29kZWdlbkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgW1s4LCBbaTMuQXBwUm9vdENvbXBvbmVudE5nRmFjdG9yeV1dLCBbMywgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXSwgaTAuTmdNb2R1bGVSZWZdKSwgaTAuybVtcGQoNTEyMCwgaTAuTE9DQUxFX0lELCBpMC7JtXEsIFtbMywgaTAuTE9DQUxFX0lEXV0pLCBpMC7JtW1wZCg0NjA4LCBpNC5OZ0xvY2FsaXphdGlvbiwgaTQuTmdMb2NhbGVMb2NhbGl6YXRpb24sIFtpMC5MT0NBTEVfSUQsIFsyLCBpNC7JtWFdXSksIGkwLsm1bXBkKDQ2MDgsIGkwLkNvbXBpbGVyLCBpMC5Db21waWxlciwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5BUFBfSUQsIGkwLsm1aSwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5JdGVyYWJsZURpZmZlcnMsIGkwLsm1biwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5LZXlWYWx1ZURpZmZlcnMsIGkwLsm1bywgW10pLCBpMC7JtW1wZCg0NjA4LCBpNS5Eb21TYW5pdGl6ZXIsIGk1Lsm1ZSwgW2k0LkRPQ1VNRU5UXSksIGkwLsm1bXBkKDYxNDQsIGkwLlNhbml0aXplciwgbnVsbCwgW2k1LkRvbVNhbml0aXplcl0pLCBpMC7JtW1wZCg0NjA4LCBpNS5IQU1NRVJfR0VTVFVSRV9DT05GSUcsIGk1LkhhbW1lckdlc3R1cmVDb25maWcsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTUuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBmdW5jdGlvbiAocDBfMCwgcDBfMSwgcDFfMCwgcDJfMCwgcDJfMSkgeyByZXR1cm4gW25ldyBpNS7JtURvbUV2ZW50c1BsdWdpbihwMF8wLCBwMF8xKSwgbmV3IGk1Lsm1S2V5RXZlbnRzUGx1Z2luKHAxXzApLCBuZXcgaTUuybVIYW1tZXJHZXN0dXJlc1BsdWdpbihwMl8wLCBwMl8xKV07IH0sIFtpNC5ET0NVTUVOVCwgaTAuTmdab25lLCBpNC5ET0NVTUVOVCwgaTQuRE9DVU1FTlQsIGk1LkhBTU1FUl9HRVNUVVJFX0NPTkZJR10pLCBpMC7JtW1wZCg0NjA4LCBpNS5FdmVudE1hbmFnZXIsIGk1LkV2ZW50TWFuYWdlciwgW2k1LkVWRU5UX01BTkFHRVJfUExVR0lOUywgaTAuTmdab25lXSksIGkwLsm1bXBkKDEzNTY4MCwgaTUuybVEb21TaGFyZWRTdHlsZXNIb3N0LCBpNS7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIFtpNC5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpNS7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIGk1Lsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgW2k1LkV2ZW50TWFuYWdlciwgaTUuybVEb21TaGFyZWRTdHlsZXNIb3N0XSksIGkwLsm1bXBkKDYxNDQsIGkwLlJlbmRlcmVyRmFjdG9yeTIsIG51bGwsIFtpNS7JtURvbVJlbmRlcmVyRmFjdG9yeTJdKSwgaTAuybVtcGQoNjE0NCwgaTUuybVTaGFyZWRTdHlsZXNIb3N0LCBudWxsLCBbaTUuybVEb21TaGFyZWRTdHlsZXNIb3N0XSksIGkwLsm1bXBkKDQ2MDgsIGkwLlRlc3RhYmlsaXR5LCBpMC5UZXN0YWJpbGl0eSwgW2kwLk5nWm9uZV0pLCBpMC7JtW1wZCg0NjA4LCBpNS5NZXRhLCBpNS5NZXRhLCBbaTQuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTUuVGl0bGUsIGk1LlRpdGxlLCBbaTQuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTYuSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgaTYuybVoLCBbaTQuRE9DVU1FTlQsIGkwLlBMQVRGT1JNX0lELCBpNi7JtWZdKSwgaTAuybVtcGQoNDYwOCwgaTYuybVpLCBpNi7JtWksIFtpNi5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpNi7JtWddKSwgaTAuybVtcGQoNTEyMCwgaTYuSFRUUF9JTlRFUkNFUFRPUlMsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpNi7JtWldKSwgaTAuybVtcGQoNDYwOCwgaTYuybVlLCBpNi7JtWUsIFtdKSwgaTAuybVtcGQoNjE0NCwgaTYuWGhyRmFjdG9yeSwgbnVsbCwgW2k2Lsm1ZV0pLCBpMC7JtW1wZCg0NjA4LCBpNi5IdHRwWGhyQmFja2VuZCwgaTYuSHR0cFhockJhY2tlbmQsIFtpNi5YaHJGYWN0b3J5XSksIGkwLsm1bXBkKDYxNDQsIGk2Lkh0dHBCYWNrZW5kLCBudWxsLCBbaTYuSHR0cFhockJhY2tlbmRdKSwgaTAuybVtcGQoNDYwOCwgaTYuSHR0cEhhbmRsZXIsIGk2Lsm1YywgW2k2Lkh0dHBCYWNrZW5kLCBpMC5JbmplY3Rvcl0pLCBpMC7JtW1wZCg0NjA4LCBpNi5IdHRwQ2xpZW50LCBpNi5IdHRwQ2xpZW50LCBbaTYuSHR0cEhhbmRsZXJdKSwgaTAuybVtcGQoNTEyMCwgaTcuU3ZnSWNvblJlZ2lzdHJ5U2VydmljZSwgaTcuU1ZHX0lDT05fUkVHSVNUUllfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpNy5TdmdJY29uUmVnaXN0cnlTZXJ2aWNlXSwgaTYuSHR0cENsaWVudF0pLCBpMC7JtW1wZCg1MTIsIGk0LkNvbW1vbk1vZHVsZSwgaTQuQ29tbW9uTW9kdWxlLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkwLkVycm9ySGFuZGxlciwgaTUuybVhLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkwLkFQUF9JTklUSUFMSVpFUiwgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtpNS7JtWgocDBfMCldOyB9LCBbWzIsIGkwLk5nUHJvYmVUb2tlbl1dKSwgaTAuybVtcGQoNTEyLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXMsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1cywgW1syLCBpMC5BUFBfSU5JVElBTElaRVJdXSksIGkwLsm1bXBkKDEzMTU4NCwgaTAuQXBwbGljYXRpb25SZWYsIGkwLkFwcGxpY2F0aW9uUmVmLCBbaTAuTmdab25lLCBpMC7JtUNvbnNvbGUsIGkwLkluamVjdG9yLCBpMC5FcnJvckhhbmRsZXIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzXSksIGkwLsm1bXBkKDUxMiwgaTAuQXBwbGljYXRpb25Nb2R1bGUsIGkwLkFwcGxpY2F0aW9uTW9kdWxlLCBbaTAuQXBwbGljYXRpb25SZWZdKSwgaTAuybVtcGQoNTEyLCBpNS5Ccm93c2VyTW9kdWxlLCBpNS5Ccm93c2VyTW9kdWxlLCBbWzMsIGk1LkJyb3dzZXJNb2R1bGVdXSksIGkwLsm1bXBkKDUxMiwgaTYuSHR0cENsaWVudFhzcmZNb2R1bGUsIGk2Lkh0dHBDbGllbnRYc3JmTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTYuSHR0cENsaWVudE1vZHVsZSwgaTYuSHR0cENsaWVudE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk3LkFuZ3VsYXJTdmdJY29uTW9kdWxlLCBpNy5Bbmd1bGFyU3ZnSWNvbk1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkxLkFwcE1vZHVsZSwgaTEuQXBwTW9kdWxlLCBbXSksIGkwLsm1bXBkKDI1NiwgaTYuybVmLCBcIlhTUkYtVE9LRU5cIiwgW10pLCBpMC7JtW1wZCgyNTYsIGk2Lsm1ZywgXCJYLVhTUkYtVE9LRU5cIiwgW10pXSk7IH0pO1xuZXhwb3J0cy5BcHBNb2R1bGVOZ0ZhY3RvcnkgPSBBcHBNb2R1bGVOZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLm5nZmFjdG9yeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGb290ZXJDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvb3RlckNvbXBvbmVudCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEZvb3RlckNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkZvb3RlckNvbXBvbmVudCA9IEZvb3RlckNvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvb3Rlci5jb21wb25lbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaTAgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBpMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1zdmctaWNvbi9hbmd1bGFyLXN2Zy1pY29uLm5nZmFjdG9yeVwiKTtcbnZhciBpMiA9IHJlcXVpcmUoXCJhbmd1bGFyLXN2Zy1pY29uXCIpO1xudmFyIGkzID0gcmVxdWlyZShcIi4vZm9vdGVyLmNvbXBvbmVudFwiKTtcbnZhciBzdHlsZXNfRm9vdGVyQ29tcG9uZW50ID0gW107XG52YXIgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQgPSBpMC7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0Zvb3RlckNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnRzLlJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50ID0gUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQ7XG5mdW5jdGlvbiBWaWV3X0Zvb3RlckNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMC7JtXZpZCgwLCBbKF9sKCkoKSwgaTAuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMTYsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImZvb3Rlci1jb250ZW50XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDQsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInZlbmRvci1sb2dvXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDEsIFwic3ZnLWljb25cIiwgW1tcInNyY1wiLCBcImFzc2V0cy9pbWFnZXMvYW5ndWxhci5zdmdcIl1dLCBudWxsLCBudWxsLCBudWxsLCBpMS5WaWV3X1N2Z0ljb25Db21wb25lbnRfMCwgaTEuUmVuZGVyVHlwZV9TdmdJY29uQ29tcG9uZW50KSksIGkwLsm1ZGlkKDUsIDEwMzIxOTIsIG51bGwsIDAsIGkyLlN2Z0ljb25Db21wb25lbnQsIFtpMC5FbGVtZW50UmVmLCBpMC5LZXlWYWx1ZURpZmZlcnMsIGkwLlJlbmRlcmVyMiwgaTIuU3ZnSWNvblJlZ2lzdHJ5U2VydmljZV0sIHsgc3JjOiBbMCwgXCJzcmNcIl0gfSwgbnVsbCksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCA0LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJ2ZW5kb3ItbG9nb1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtWVsZCgxMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzdmctaWNvblwiLCBbW1wic3JjXCIsIFwiYXNzZXRzL2ltYWdlcy93ZWJwYWNrLWljb24uc3ZnXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTEuVmlld19TdmdJY29uQ29tcG9uZW50XzAsIGkxLlJlbmRlclR5cGVfU3ZnSWNvbkNvbXBvbmVudCkpLCBpMC7JtWRpZCgxMSwgMTAzMjE5MiwgbnVsbCwgMCwgaTIuU3ZnSWNvbkNvbXBvbmVudCwgW2kwLkVsZW1lbnRSZWYsIGkwLktleVZhbHVlRGlmZmVycywgaTAuUmVuZGVyZXIyLCBpMi5TdmdJY29uUmVnaXN0cnlTZXJ2aWNlXSwgeyBzcmM6IFswLCBcInNyY1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDE0LCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJmb290ZXItdGV4dFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFxcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdpdCBpZCBpcHNhbSBtb2xlc3RpYWUgdml0YWUgdm9sdXB0YXRlbS4gRGViaXRpc1xcblxcdFxcdGhhcnVtIG5hbSBuZWNlc3NpdGF0aWJ1cy4gQWNjdXNhbXVzIGF1dGVtIGZ1Z2l0IG5vbiBvZGl0IHF1aXMgc2ltaWxpcXVlPyBDdXBpZGl0YXRlIGV4cGVkaXRhIGluIG5lY2Vzc2l0YXRpYnVzXFxuXFx0XFx0cGVyc3BpY2lhdGlzLlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXCJdKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gXCJhc3NldHMvaW1hZ2VzL2FuZ3VsYXIuc3ZnXCI7IF9jayhfdiwgNSwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IFwiYXNzZXRzL2ltYWdlcy93ZWJwYWNrLWljb24uc3ZnXCI7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfMSk7IH0sIG51bGwpOyB9XG5leHBvcnRzLlZpZXdfRm9vdGVyQ29tcG9uZW50XzAgPSBWaWV3X0Zvb3RlckNvbXBvbmVudF8wO1xuZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMC7JtXZpZCgwLCBbKF9sKCkoKSwgaTAuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJmb290ZXItY29tcG9uZW50XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0Zvb3RlckNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0Zvb3RlckNvbXBvbmVudCkpLCBpMC7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTMuRm9vdGVyQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0cy5WaWV3X0Zvb3RlckNvbXBvbmVudF9Ib3N0XzAgPSBWaWV3X0Zvb3RlckNvbXBvbmVudF9Ib3N0XzA7XG52YXIgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gaTAuybVjY2YoXCJmb290ZXItY29tcG9uZW50XCIsIGkzLkZvb3RlckNvbXBvbmVudCwgVmlld19Gb290ZXJDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydHMuRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXBwUm9vdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwUm9vdENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdBbmd1bGFyIDUvVzQgQXBwIHN0YXJ0ZWQnO1xuICAgIH1cbiAgICByZXR1cm4gQXBwUm9vdENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkFwcFJvb3RDb21wb25lbnQgPSBBcHBSb290Q29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvb3QuY29tcG9uZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGkwID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgaTEgPSByZXF1aXJlKFwiLi4vZm9vdGVyLWNvbXBvbmVudC9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeVwiKTtcbnZhciBpMiA9IHJlcXVpcmUoXCIuLi9mb290ZXItY29tcG9uZW50L2Zvb3Rlci5jb21wb25lbnRcIik7XG52YXIgaTMgPSByZXF1aXJlKFwiLi9hcHAtcm9vdC5jb21wb25lbnRcIik7XG52YXIgc3R5bGVzX0FwcFJvb3RDb21wb25lbnQgPSBbXTtcbnZhciBSZW5kZXJUeXBlX0FwcFJvb3RDb21wb25lbnQgPSBpMC7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0FwcFJvb3RDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0cy5SZW5kZXJUeXBlX0FwcFJvb3RDb21wb25lbnQgPSBSZW5kZXJUeXBlX0FwcFJvb3RDb21wb25lbnQ7XG5mdW5jdGlvbiBWaWV3X0FwcFJvb3RDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTAuybV2aWQoMCwgWyhfbCgpKCksIGkwLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDM0LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJjb250ZW50XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYXBwXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgzLCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAxLCBcInBcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3BlcmlvcmVzIGZ1Z2lhdCBpcHN1bSBtb2RpIG5hbSBub3N0cnVtIHNpbWlsaXF1ZVxcblxcdFxcdHNpbnQuIENvcnBvcmlzIGN1bSBkaWduaXNzaW1vcyBuYW0gb2ZmaWNpaXMgcXVhc2kgdWxsYW0gdXQgdmVsaXQuIERvbG9yZXMgZXhjZXB0dXJpIHZvbHVwdGFzIHZvbHVwdGF0ZW1cXG5cXHRcXHR2b2x1cHRhdGlidXMuXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybVlbGQoOCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJBc3N1bWVuZGEgY29ycG9yaXMsIGRvbG9ydW0gZWl1cyBlbGlnZW5kaSBleGVyY2l0YXRpb25lbSBpbGxvIGltcGVkaXQgaXBzdW0sIG5lY2Vzc2l0YXRpYnVzIG5pc2kgbm9zdHJ1bSBvZGlvXFxuXFx0XFx0cGxhY2VhdCBxdWFlIHF1aWJ1c2RhbSBxdWlkZW0gcmVjdXNhbmRhZSByZXJ1bSB2aXRhZS4gTWludXMgbmVxdWUgcG9ycm8gcHJvdmlkZW50IHF1byBzYWVwZSB0b3RhbSEgTGFib3Jpb3NhbSxcXG5cXHRcXHRsaWJlcm8gb2JjYWVjYXRpIVxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDExLCAwLCBudWxsLCBudWxsLCAxLCBcInBcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIkJlYXRhZSBjb3Jwb3JpcyBjdW0gZGVsZW5pdGksIGRvbG9yaWJ1cyBlYSwgZWFydW0gZW9zIGVycm9yIGZhY2VyZSBmYWNpbGlzIGlkIGludmVudG9yZSBtYWduaSBtYWlvcmVzIG1vZGlcXG5cXHRcXHRtb2xsaXRpYSBub3N0cnVtIG9kaXQgcGxhY2VhdCBwcmFlc2VudGl1bSBxdWlzcXVhbSB0ZW1wb3JpYnVzIHZvbHVwdGF0dW0uIEFyY2hpdGVjdG8gY29uc2VjdGV0dXIgZXJyb3IgaW52ZW50b3JlXFxuXFx0XFx0bGliZXJvIHRlbmV0dXIuXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybVlbGQoMTQsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiQWIgYWxpYXMgYW1ldCBhcmNoaXRlY3RvIGFzcGVyaW9yZXMgYXV0IGF1dGVtIGJlYXRhZSBibGFuZGl0aWlzIGNvbnNlcXVhdHVyIGN1bHBhIGRvbG9yaWJ1cyBkb2xvcnVtIGVpdXMgZmFjZXJlXFxuXFx0XFx0aXN0ZSBsYWJvcnVtIGxpYmVybyBtYWduYW0gbW9sbGl0aWEgbmVxdWUgbm9iaXMgb21uaXMsIHBvcnJvIHF1YWUgcXVpIHJlcGVsbGF0LCBzYXBpZW50ZSB0ZW1wb3JpYnVzIHRlbmV0dXI/XFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybVlbGQoMTcsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiQXBlcmlhbSBhc3BlcmlvcmVzIGF1dCBjb25zZWN0ZXR1ciBjdXBpZGl0YXRlIGRpY3RhIGRvbG9yZSBkb2xvcmVtIGVhcXVlIGVpdXMsIGVsaWdlbmRpIGVuaW0gZXhjZXB0dXJpIGZhY2lsaXMsXFxuXFx0XFx0aGljIGlsbG8gaW52ZW50b3JlIGxhYm9yaW9zYW0gbmVtbyBuZXNjaXVudCBuaWhpbCBvZmZpY2lpcyBwYXJpYXR1ciBwcm92aWRlbnQgcXVvZCByYXRpb25lIHJlY3VzYW5kYWVcXG5cXHRcXHRyZXBlbGxlbmR1cyBzaW1pbGlxdWUgdm9sdXB0YXRlbT9cXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtWVsZCgyMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJEZWxlY3R1cyBkZWxlbml0aSBkaWN0YSBpbGxvIG5hbSBub24gcmF0aW9uZSB2ZXJpdGF0aXMuIERlYml0aXMsIG5lcXVlIHJlcnVtISBBLCBhcGVyaWFtIGFyY2hpdGVjdG8gZGljdGEsXFxuXFx0XFx0ZGlnbmlzc2ltb3MgZW5pbSBldCBleHBlZGl0YSwgaWxsbyBpbGx1bSBpcHNhbSBpcHN1bSBpdGFxdWUgbGliZXJvIG1vbGxpdGlhIG9kaW8gcHJhZXNlbnRpdW0gcXVpZGVtIHN1c2NpcGl0IVxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDIzLCAwLCBudWxsLCBudWxsLCAxLCBcInBcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIkEgYWNjdXNhbnRpdW0gYW5pbWkgYXNwZXJpb3JlcyBhdHF1ZSBjb25zZXF1YXR1ciBjdWxwYSBkZWxlbml0aSBkb2xvcmVtcXVlIGRvbG9yZXMgZW9zIGV1bSBmdWdpYXQgaW4gaW5jaWR1bnRcXG5cXHRcXHRtYWduYW0sIG1haW9yZXMgbWludXMgb2ZmaWNpYSBwZXJmZXJlbmRpcyBwcmFlc2VudGl1bSBwcm92aWRlbnQsIHF1aSByYXRpb25lIHJlbSByZXB1ZGlhbmRhZSBzZWQgc2ltaWxpcXVlIHNpdFxcblxcdFxcdHN1bnQuXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybVlbGQoMjYsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiQXV0IGF1dGVtIGNvbW1vZGkgY29uc2VxdWF0dXIgY29uc2VxdXVudHVyIGNvcnBvcmlzIGN1bSBkaWN0YSwgZG9sb3IgZG9sb3J1bSBlYXJ1bSBpbmNpZHVudCBpcHNhbSBpdXJlXFxuXFx0XFx0bGFib3Jpb3NhbSBsYXVkYW50aXVtIG1vZGkgbmFtIG5lbW8gbmloaWwgcG9zc2ltdXMgcXVhbSBxdWFzIHF1YXNpLCByZXBlbGxhdCwgcmVwZWxsZW5kdXMgdmVsLiBDb25zZXF1YXR1cixcXG5cXHRcXHRpbmNpZHVudCBsYXVkYW50aXVtIVxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDI5LCAwLCBudWxsLCBudWxsLCAxLCBcInBcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIkFsaXF1YW0gYXNwZXJpb3JlcyBjb25zZXF1dW50dXIgY3VtcXVlIGN1cGlkaXRhdGUgZGVzZXJ1bnQgZG9sb3JlbSBlYXF1ZSwgZWFydW0gZXJyb3IgaWQgaW5jaWR1bnQgaXRhcXVlXFxuXFx0XFx0bGFib3Jpb3NhbSBsYXVkYW50aXVtIGxpYmVybyBwb3JybyBxdWFzIHF1YXNpIHF1aXNxdWFtIHJlcHJlaGVuZGVyaXQgc2VkIHNpbnQgc29sdXRhIHN1c2NpcGl0LCB1bGxhbSB2aXRhZVxcblxcdFxcdHZvbHVwdGF0aWJ1cy4gRGVsZW5pdGksIHN1c2NpcGl0LlxcblxcdFwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXFx0XCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDMyLCAwLCBudWxsLCBudWxsLCAxLCBcInBcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIkRlYml0aXMgZG9sb3JlcywgZXhlcmNpdGF0aW9uZW0gZmFjZXJlIGZ1Z2EgaGFydW0gaW1wZWRpdCBpbiBpcHNhbSBsYWJvcmUsIGxhYm9yaW9zYW0gbWFnbmkgbW9sZXN0aWFlIG1vbGVzdGlhc1xcblxcdFxcdG5hbSBub24gbnVtcXVhbSBvZGlvIG9mZmljaWlzIHBhcmlhdHVyIHByYWVzZW50aXVtIHF1aXNxdWFtIHF1b2QgcXVvcyBzaW50IHNvbHV0YSB0ZW1wb3JhIHRlbmV0dXIgdml0YWVcXG5cXHRcXHR2b2x1cHRhcyFcXG5cXHRcIl0pKSwgKF9sKCkoKSwgaTAuybV0ZWQoLTEsIG51bGwsIFtcIlxcblwiXSkpLCAoX2woKSgpLCBpMC7JtXRlZCgtMSwgbnVsbCwgW1wiXFxuXCJdKSksIChfbCgpKCksIGkwLsm1ZWxkKDM2LCAwLCBudWxsLCBudWxsLCAxLCBcImZvb3Rlci1jb21wb25lbnRcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGkxLlZpZXdfRm9vdGVyQ29tcG9uZW50XzAsIGkxLlJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50KSksIGkwLsm1ZGlkKDM3LCA0OTE1MiwgbnVsbCwgMCwgaTIuRm9vdGVyQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkwLsm1dGVkKC0xLCBudWxsLCBbXCJcXG5cIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBfY28udGl0bGU7IF9jayhfdiwgMywgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmV4cG9ydHMuVmlld19BcHBSb290Q29tcG9uZW50XzAgPSBWaWV3X0FwcFJvb3RDb21wb25lbnRfMDtcbmZ1bmN0aW9uIFZpZXdfQXBwUm9vdENvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkwLsm1dmlkKDAsIFsoX2woKSgpLCBpMC7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImFwcC1yb290XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0FwcFJvb3RDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9BcHBSb290Q29tcG9uZW50KSksIGkwLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpMy5BcHBSb290Q29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0cy5WaWV3X0FwcFJvb3RDb21wb25lbnRfSG9zdF8wID0gVmlld19BcHBSb290Q29tcG9uZW50X0hvc3RfMDtcbnZhciBBcHBSb290Q29tcG9uZW50TmdGYWN0b3J5ID0gaTAuybVjY2YoXCJhcHAtcm9vdFwiLCBpMy5BcHBSb290Q29tcG9uZW50LCBWaWV3X0FwcFJvb3RDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydHMuQXBwUm9vdENvbXBvbmVudE5nRmFjdG9yeSA9IEFwcFJvb3RDb21wb25lbnROZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm9vdC5jb21wb25lbnQubmdmYWN0b3J5LmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9hcHAuY3NzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImltcG9ydCAnLi9pbmRleC5odG1sJztcbmltcG9ydCAnLi9hc3NldHMvYXBwLmxlc3MnO1xuaW1wb3J0ICcuL3ZlbmRvcic7XG5cbmltcG9ydCB7QXBwTW9kdWxlfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7cGxhdGZvcm1Ccm93c2VyRHluYW1pY30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHdlYnBhY2sgRGVmaW5lUGx1Z2luXG5kZWNsYXJlIGNvbnN0IFBST0RVQ1RJT047XG5kZWNsYXJlIGNvbnN0IEJVSUxEVElNRVNUQU1QO1xuXG5pZiAoUFJPRFVDVElPTikge1xuXHRjb25zb2xlLmxvZygnUFJPRCBtb2RlJyk7XG5cdGVuYWJsZVByb2RNb2RlKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLmxvZygnREVWIG1vZGUnKTtcbn1cbmNvbnNvbGUubG9nKCdCdWlsdCBhdDonLCBuZXcgRGF0ZShCVUlMRFRJTUVTVEFNUCkpO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xucmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiKTtcbnJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlbmRvci5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9