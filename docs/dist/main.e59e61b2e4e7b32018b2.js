/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/
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
/******/ 		"main": 0
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.jsx":
/*!*********************!*\
  !*** ./app/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Body_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body.jsx */ "./app/Body.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intrinsic-scale */ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-footer/Footer.jsx */ "./app/header-footer/Footer.jsx");
/* harmony import */ var _header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-footer/Header.jsx */ "./app/header-footer/Header.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./temp-content/LegalTermsOrBizCard.jsx */ "./app/temp-content/LegalTermsOrBizCard.jsx");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_PasswordLogin_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/PasswordLogin.jsx */ "./app/shared/PasswordLogin.jsx");
/* harmony import */ var _helpers_preloadBigImages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/preloadBigImages */ "./app/helpers/preloadBigImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classes/State.js */ "./app/classes/State.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff */ "./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff");
/* harmony import */ var _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2 */ "./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2");
/* harmony import */ var _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff */ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff");
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff */ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff");
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff */ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff");
/* harmony import */ var _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff */ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff");
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2 */ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2");
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff */ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff");
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2 */ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2");
/* harmony import */ var _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'Aref Ruqaa';\n    font-style: normal;\n    font-weight: 700;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 300;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: normal;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 500;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Playfair Display';\n    font-style: normal;\n    font-weight: 700;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Playfair Display';\n    font-style: normal;\n    font-weight: 900;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n\n  html {\n    // Best practice to load fonts: \n    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import\n\n    font-family: 'Montserrat', sans-serif;\n    font-size: 62.5%;\n    font-weight: 300;\n    background-color: ", ";\n  }\n\n  body {\n    margin: 0px;\n    padding: 0px;\n    font-size: ", ";\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n\n    h1,\n    h2,\n    h3,\n    p,\n    ul {\n      margin: 0px;\n    }\n\n    h1 {\n      font-family: 'Playfair Display', serif;\n      font-weight: 900;\n    }\n\n    h1,\n    h2 {\n      margin-left: 2px;\n    }\n\n    p {\n      margin-bottom: ", ";\n      line-height: 1.6;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




















 // Fonts!













var colors = {
  black: 'black',
  blue: '#008dd5',
  blueTwo: '#b9dff3',
  darkPink: '#af125a',
  darkPinkTwo: '#bd3d78',
  frostedBlue: '#4286f4',
  lightBlack: '#455057',
  pink: '#fd1172',
  reverieBlue: '#d2e7ff',
  white: 'white',
  yellow: '#ffe74c'
};
var fontSizes = {
  zero: '.9rem',
  one: '1.1rem',
  two: '1.15rem',
  three: '1.2rem',
  four: '1.25rem',
  five: '1.298rem',
  six: '1.3rem',
  seven: '1.35rem',
  eight: '1.4rem',
  nine: '1.45rem',
  ten: '1.5rem',
  eleven: '1.55rem',
  twelve: '1.6rem',
  thirteen: '1.7rem',
  fourteen: '1.9rem',
  fifteen: '2.2rem',
  sixteen: '3.1rem',
  seventeen: '6.5rem',
  eighteen: '2.5rem',
  nineteen: '1.745rem',
  twenty: '2.5rem',
  twentyOne: '1rem',
  twentyTwo: '1.13rem',
  twentyThree: '1.36rem',
  twentyFour: '2.75rem',
  twentyFive: '1rem',
  twentySix: '1.455rem'
};
var mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  narrowBreakTwoB: '691px',
  desktop: '848px',
  huge: '1920px'
};
var bottomMargin = {
  regular: '20px'
};
var blurControl = {
  regular: 'blur(4px)',
  home: 'blur(1px)'
};
var ZoomControl = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "App__ZoomControl",
  componentId: "sc-1392lpu-0"
})(["display:flex;flex-direction:column;align-items:center;height:", "px;overflow:hidden;position:relative;@media(orientation:landscape){", "}", ";"], function (p) {
  return p.theme.pageHeight;
}, function (p) {
  return p.fixMobileSafariBugOn7 && 'position: fixed; bottom: 0;';
}, function (p) {
  return p.home && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["width:100%;overflow:hidden;"]);
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_21___default.a, _docs_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_20___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_22___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_22___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_23___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_23___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_24___default.a, _docs_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_24___default.a, _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_26___default.a, _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_25___default.a, _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_28___default.a, _docs_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_27___default.a, function (p) {
  return p.reverie ? '#d2e7ff' : p.notFound ? '#fd1172' : '';
}, function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.bottomMargin.regular;
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search;
    var images = Object(_helpers_preloadBigImages__WEBPACK_IMPORTED_MODULE_13__["default"])();
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_16__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_10__["default"](referrer.pathToMatch, {
      location: {
        pathname: pathname
      }
    });
    var illustrationState; // Check status of illustration for appStateillustrationState
    // Also updated in ReloadRoute (for section shifts) and
    // in contentLoader.cDU for swapped content

    if (location.caller === 'chapter') {
      var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
        location: {
          pathname: pathname
        }
      }, location);
      illustrationState = state.checkIllustrationState(images);
    } // Show the heartbeat if the last date isn't located in storage
    // If it is in storage, we'll check the time elapsed since it ran


    var firstHeartbeat = typeof localStorage.lastHeartbeat === 'undefined';

    if (!firstHeartbeat) {
      var now = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(); // For debugging: now.add('3', 'week');

      var lastHeartbeat = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(localStorage.lastHeartbeat);
      firstHeartbeat = now.diff(lastHeartbeat, 'week', true) > 2; // Always update the date if < 2 weeks pass between user visits
      // If > 2 weeks pass, onAnimationEnd() will do it after next heartbeat

      if (!firstHeartbeat) {
        // Technically, not a last heartbeat...but a trackable event
        localStorage.lastHeartbeat = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format();
      }
    } // Let's deal w/height.
    //  1. Check value based on device type.
    //  2. If the screen is landscape:
    //    a. Set property on initial load,
    //    b. Resize on orientation change via updateHeight(),
    //    c.  Keep resized height on subsequent orientation
    //        changes by rejecting w/n updateHeight() when
    //        this.minAllowedHeight > newHeight.
    // Note, 11/9/19: iPadOS uses a desktop user agent. This test doesn't catch it.
    // However, the values it selects seem to remain accurate in terms of height.
    // Thus, this.calculatePageHeight() doesn't use the customMobileTest.js.


    var pageHeight = _this.calculatePageHeight();

    var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__["cover"])(window.innerWidth, pageHeight, images.width, images.height); // Let's remember the coverVals.y offset so we can resize on desktops when it changes .
    // Also, not updating this value after it's set because it doesn't matter once set.
    // The value is a benchmark. It's valid as long as we see a change when comparing
    // it to the current coverVal.y in the resize event.

    _this.homeImageYOffsets = coverVals.y; // Want to block orientation changes? Try this:
    // https://css-tricks.com/snippets/css/orientation-lock/

    if (false) {} // Lower limit for resizing — (iPhone/SE form
    // factor uses default height, wider phones
    // use their true height).


    _this.defaultHeightWhenTooSmall = pageHeight; // Arbitrary (iPhone SE height)

    _this.isZooming = false; // Synchronous property that avoids fear of setState race condition 

    _this.headerMenuTimeoutId = undefined;
    _this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are ~325px

    _this.resizeTimeoutId = undefined; // Let's debounce 'resize'!

    _this.resizeTimeoutId2 = undefined; // Let's debounce 'resize'!

    _this.timeoutToResizeAfterZoom = undefined;
    _this.images = images; // Back-up object for this.calculateSpacerHeight() during load
    // Prevent resize when scrolling oversized page. Not using state b/c it causes
    // overflowing divs (w/content in them) to 'jump' when scrolling.

    _this.isAfterTouchWhenScrollingPage = false;
    _this.state = {
      currentCaller: location.caller !== 'i' ? location.caller : 'home',
      // 0 = not ready, 1 = run, 2 = nevermore
      heartbeat: firstHeartbeat ? 0 : 2,
      // height: // Height for <Main /> element
      //   pageHeight > this.minAllowedHeight
      //     ? pageHeight
      //     : this.defaultHeightWhenTooSmall,
      height: pageHeight,
      homePageLoaded: false,
      // loadLevels confined to Home, this is for whole app
      illustrationDelay: false,
      // Control illustration loader on /chapter pages
      illustrationDirection: 'enter',
      // Properly interpret illustrationLevel 
      // Used by header, main, and footer
      // Enter: 0 = text on, 1 = fade out text and portal, 2 = fade out blurred image, 3 = done
      // Exit: 3 = real image on, 2 = fade in blurred image and portal, 1 = fade in text, 0 = done
      illustrationLevel: 0,
      // 0 is n/a, + is loaded, and - is loading
      illustrationState: illustrationState ? illustrationState : 0,
      images: images,
      // preloaded big images (minimize time to display b/c of loading)
      inCity: false,
      // false = fantasy, true = city
      isMenu: referrer.isMenu(props),
      // /projects, /journalism, /reverie
      isAfterTouch: false,
      // Resize using clientHeight when true
      isValidUser: false,
      // to be removed
      // isZooming: false, // True when usere is pinch zooming
      lastCaller: '',
      nameTagWidth: _this.calculateNameTagWidth(images),
      // Orig. dimensions: 1349 / 5115
      password: '',
      // to be removed
      pinchZoomed: false,
      // Zoomed! (Or not.)
      spacerHeight: _this.calculateSpacerHeight(),
      // Set by 'handleResize', so must live here. Used by Home/NameTag.
      tempContent: 0,
      // 0 = off; 1 = businessCard; 2 = legalTerms; 3 = headerMenu
      // Won't catch iPadOS w/o customMobileTest. Search for 11/9/19 notes as to necessity.
      type: react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobile"] ? 'mobile' : 'desktop',
      wrongPassword: '' // to be removed

    };
    _this.handleBackAndForth = _this.handleBackAndForth.bind(_assertThisInitialized(_this));
    _this.handlePasswordEntry = _this.handlePasswordEntry.bind(_assertThisInitialized(_this));
    _this.handlePasswordSubmit = _this.handlePasswordSubmit.bind(_assertThisInitialized(_this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.updateSpacerHeight = _this.updateSpacerHeight.bind(_assertThisInitialized(_this));
    _this.updateNameTagWidth = _this.updateNameTagWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick;
      var homeIsActive = this.state.currentCaller === 'home';
      var reverieIsActive = this.state.currentCaller === 'reverie';
      var isNotFound = this.state.currentCaller === 'not-found';
      var fixMobileSafariBugOn7 = react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isTablet"] && react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobileSafari"] && react_device_detect__WEBPACK_IMPORTED_MODULE_8__["osVersion"][0] === '7';
      return  false ? undefined : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: {
          bottomMargin: bottomMargin,
          colors: colors,
          fontSizes: fontSizes,
          mediaQueries: mediaQueries,
          blur: this.state.currentCaller === 'home' ? blurControl.home : blurControl.regular,
          blurForTempContent: this.state.tempContent > 0,
          isHeaderMenu: this.state.tempContent === 3,
          pageHeight: this.state.height.toString()
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"] // Used b/c ThemeProvider only accepts one child.
      , null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(GlobalStyle, {
        notFound: isNotFound,
        reverie: reverieIsActive
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(ZoomControl // Though an extra <div>, ZoomControl lets us add 'touch'
      // events to React (alt is to add them to the Window)
      , {
        fixMobileSafariBugOn7: fixMobileSafariBugOn7,
        home: homeIsActive,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Body_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        style: {
          backgroundColor: 'rgba(0, 0, 0, .7)',
          color: 'white',
          left: "".concat(this.state.pinchZoomed ? '0px' : '-200px'),
          opacity: "".concat(this.state.pinchZoomed ? '1' : '0'),
          padding: '10px',
          position: 'fixed',
          top: '205px',
          transition: 'left .2s ease-in-out, opacity .2s ease-in',
          zIndex: '5'
        }
      }, "Zoom on!"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })))));
    }
  }, {
    key: "calculatePageHeight",
    value: function calculatePageHeight() {
      // On mobile, we must account for browser differences: 
      //  -Mobile Safari updates innerHeight on resize and UI changes but mobile Chrome does not. 
      //  -Also, after touchMove, Safari doesn't update innerHeight correctly, so we'll use/
      //  the .isAfterTouch property to shift to document.documentElement.clientHeight.
      //    a. clientHeight. Mobile Chrome or after touchMove everywhere
      //    b. innerHeight. Mobile Safari
      // -If Android, further check for the larger of our two possible values b/c some devices
      //  let the address bar shrink in landscape, some don't (BrowserStack testing).
      // Note: This may be causing problems on iPadOS! MUST REVIEW!
      return react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobile"] && (!react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobileSafari"] || this.state && this.state.isAfterTouch) ? document.documentElement.clientHeight > window.innerHeight ? document.documentElement.clientHeight : window.innerHeight : window.innerHeight;
    }
  }, {
    key: "calculateNameTagWidth",
    value: function calculateNameTagWidth(topImages) {
      var images = topImages || this.state.images;
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__["cover"])(window.innerWidth, window.innerHeight, images.width, images.height);
      return Math.floor(.27 * coverVals.width);
    }
  }, {
    key: "calculateSpacerHeight",
    value: function calculateSpacerHeight() {
      var images = this.images;
      var windowHeight = window.innerHeight;
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__["cover"])(window.innerWidth, windowHeight, images.width, images.height);
      var yImageTop = coverVals.y;

      var makePositive = function makePositive(val) {
        return val * -1;
      }; // 1. 14.4 & 14.7 are arbitrary values (trial-n-error)
      // 2. 52px is the height of the header in pixels


      var mathForSpacer = function mathForSpacer(windowHeight, percentage) {
        return windowHeight * (percentage / 100) - 52;
      };

      var spacerHeight = Math.ceil(mathForSpacer(windowHeight, 14.5)); // Original: 14.2
      // yImageTop < 0 when thewindow's width is larger than the image's 
      // width. If so, we cut off the image's top and bottom to zoom in.

      if (Math.floor(yImageTop) < 0) {
        var newHeight = coverVals.height - makePositive(yImageTop);
        var newSpacerHeight = mathForSpacer(newHeight, 14.7); // Original: 14.6

        var spacerHeightDifference = newSpacerHeight - spacerHeight;
        var changedPosition = makePositive(yImageTop) - spacerHeightDifference;
        spacerHeight = Math.ceil(spacerHeight - changedPosition);
      }

      return spacerHeight >= 15 ? spacerHeight : 15;
    }
  }, {
    key: "handleBackAndForth",
    value: function handleBackAndForth() {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_10__["default"]('/', this.props);
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick; // Always the caller.
      // Update isMenu if it isn't synced w/window.location.pathname.

      var isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
      var updateMenuForBackAndForthButton = isMenu !== this.state.isMenu;
      boundHandleClickForApp('updateApp', location.caller, updateMenuForBackAndForthButton);
    }
  }, {
    key: "handlePasswordSubmit",
    value: function handlePasswordSubmit(event) {
      var password = this.state.password.toLowerCase().trim();
      event.preventDefault();

      if (password === 'enter' || password === 'illustrator' || password === 'boom!') {
        this.setState({
          isValidUser: true
        });
      } else {
        this.setState({
          password: '',
          wrongPassword: 'Incorrect'
        });
      }
    }
  }, {
    key: "handlePasswordEntry",
    value: function handlePasswordEntry(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      var _this2 = this;

      /* Must reads onTouch:
          1. https://stackoverflow.com/a/4165641
          2. https://m14i.wordpress.com/2009/10/25/javascript-touch-and-gesture-events-iphone-and-android/
          3. https://www.sitepen.com/blog/touching-and-gesturing-on-iphone-android-and-more/
      */
      // Touch is over when length is 0. Let's remember:
      //  -event.touches refers to all on-screen touches
      //  -event.targetTouches refers to touches w/n target element
      //  -We've added the touch events to zoom control, an empty div that
      //    sits above all others, except <html>, <body>, and <div id="app">
      //  -Bizarrely, the targetTouches element will adopt the element in which
      //    a finger is first sensed, so we're not using targetTouches here.
      //  -Regarding the timeout, it's 'undefined' the first time the user zooms.
      //    -It's made 'undefined' every time thereafter at the conclusion of the
      //      user's zoom session, as defined by handleTouchMove.
      Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);

      if (event.touches.length === 0) {
        // Let's reset the offset cache
        if (typeof this.cachedXOffsetForZoom !== 'undefined') {
          this.cachedXOffsetForZoom = undefined;
        }

        if (typeof this.cachedYOffsetForZoom !== 'undefined') {
          this.cachedYOffsetForZoom = undefined;
        }

        if (!this.isZooming && typeof this.timeoutToResizeAfterZoom === 'undefined' // Always reset by onTouchMove
        ) {
            // Let's add a failsafe, just in case pinchZoomed doesn't get shut off (may happen...?)
            if (this.state.pinchZoomed) {
              this.setState({
                pinchZoomed: false
              });
            } // Remember, 250 milliseconds is added to 50 milliseconds b/c handleResize 
            // has a setTimeout inside it, too. This timing is stable. I experimented 
            // w/shorter times. They were not stable. We might get a resize on the 
            // intermediate elements that are on screen before the final, stable 
            // paint. These elements will have the wrong dimensions, which
            // typically results in an extra-wide NameTag and a height 
            // that stretches below Safari's bottom menu bar.
            // If anyting, add more time to 250...


            this.timeoutToResizeAfterZoom = setTimeout(function () {
              return _this2.handleResize('afterPinchZoom');
            }, 250);
          }
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
      var pinchZoomed = this.state.pinchZoomed; // We'll check to see if we're zooming if more than finger's down.

      if (event.touches.length > 1) {
        // Let's prep an object for the state update.
        var stateToUpdate = {}; // Notes on detecting zoom:
        //  -We only need to turn pinchZoom on once, we only need to turn if off once.
        //  -Pinch zoom almost always moves the X, Y offsets. It's very hard not to move at least one of them.
        //    -This is a more effective check than trying to create coordinates by adding points to screen 
        //    -or to measure and compare some element's dimensions, or at least this has been my exp.
        //  -It's not entirely enough to simply check the offsets, when setting pinchZoomed, we should also
        //    check if the offsets are increasing. We do so by checking a set of values that were cached 
        //    when THIS touch interaction began, via the onTouchMove event. If at least one is growing,
        //    we're probably zooming, which means that we should set pinchZoomed to true.
        //  -We can turn off pinchZoomed when both offsets are less than 0. It's very hard not to move 
        //    both values belwo 0 when unzooming. We can add a visual element to screen to help users
        //    understand what's happening, and that they may have failed to move far enough when 
        //    trying to unzoom.
        //  -When we unzoom, we'll also set this.timeoutToResizeAfterZoom to 'undefined' as a hook.
        //    -It'll tell handleTouchEnd that it set a timer to resize the app now that the user's 
        //      done pinchZooming. The timeout will be cleared by handleTouchStart if a new zoom
        //      session is begun before the timeout has a chance to run.
        //  -We're actually using the isZooming property on this to track the zoom state. Why? We don't 
        //    have to worry about race conditions and async returns from React's setState property.
        //    -We're using the pinchZoomed property on state to control when the user is notified 
        //      that zoom is on. Why? Calls to setState will cause a re-render so we can remove
        //      the notice seamlessly, without worrying about any lags on actual detection. 

        if (!pinchZoomed && (window.pageXOffset >= 0 || window.pageYOffset >= 0) && (window.pageXOffset > this.cachedXOffsetForZoom || window.pageYOffset > this.cachedYOffsetForZoom)) {
          console.log('pZ ON');
          this.isZooming = true; // zoom detection (on)

          stateToUpdate.pinchZoomed = true; // give notice

          this.setState(stateToUpdate);
        } else if (pinchZoomed && window.pageXOffset < 0 && window.pageYOffset < 0) {
          console.log('pZ OFF');
          this.isZooming = false; // zoom detection (off)

          stateToUpdate.pinchZoomed = false; // remove notice

          this.setState(stateToUpdate);
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      // This event is used to begin our zoom session. We'll prepare to test for pinchZoom by:
      //  -Clearing any exiting timeouts
      //  -Caching the page's X, Y offsets so we can see if they're growing in onTouchMove.
      //    -This will tell us whether or not we should turn on isZooming pinchZoom.
      //  -While we could techincally set isZooming in here, this choice seems fraught.
      //    -We'll have to remember to turn it off in onTouchMove.
      //    -We may also run afoul of confusing scenarios, like are we actualy zooming or 
      //      just making the window small as we zoom away from a properly sized viewport.
      //    -Bottom line: It gets funky fast. Explicit tracking in onTouchMove seems
      //      clearest over time.
      Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);

      if (event.touches.length > 1) {
        if (typeof this.timeoutToResizeAfterZoom !== 'undefined') {
          // I believe this will clear the timeout should it be running in the fraction
          // of a second between release and adding two fingers back to screen.
          // I can't imagine any other reason to add two to screen...
          clearTimeout(this.timeoutToResizeAfterZoom);
          this.timeoutToResizeAfterZoom = undefined;
        }

        this.cachedXOffsetForZoom = window.pageXOffset;
        this.cachedYOffsetForZoom = window.pageYOffset;
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize(str) {
      var _this3 = this;

      // https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/
      var afterPinchZoom = str === 'afterPinchZoom';

      if (!afterPinchZoom) {
        if (this.rejectResizing().result) {
          return false;
        }
      }

      if (this.resizeTimeoutId > 0) {
        clearTimeout(this.resizeTimeoutId); // Still moving, kill timeout (aka, debounce)
      }

      this.resizeTimeoutId = setTimeout(function () {
        _this3.updateSpacerHeight();

        _this3.updateNameTagWidth();

        _this3.updateHeight();
      }, 50);
    }
  }, {
    key: "hasStyle",
    value: function hasStyle(type) {
      // https://johanronsse.be/2016/01/03/simple-flexbox-check/
      var documentStyle = window.document.body ? window.document.body.style : window.document.documentElement.style;

      if (type === 'flexbox') {
        if (documentStyle.webkitFlexWrap === '' || documentStyle.msFlexWrap === '' || documentStyle.flexWrap === '') {
          return true;
        }
      }

      if (type === 'object-fit') {
        if (documentStyle.objectFit === '') {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "rejectResizing",
    value: function rejectResizing() {
      var _this$state = this.state,
          images = _this$state.images,
          pinchZoomed = _this$state.pinchZoomed;
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_2__["cover"])(window.innerWidth, this.calculatePageHeight(), images.width, images.height); // Note for desktop Chrome. isMobile will be false if you emulate mobile via devTools 
      // AFTER loading the site. You must reload the site from within the mobile emulator 
      // in devTools for isMobile to test correctly.

      if (!react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobile"] && coverVals.y === this.homeImageYOffsets) {
        return {
          result: true,
          reason: 'On desktop, no change to homeImageYOffset'
        };
      } else if (this.isZooming) {
        // Don't resize while isZooming, even if pinchZoomed hasn't been set yet.
        return {
          result: true,
          reason: 'isZooming'
        };
      } else if (pinchZoomed) {
        // Do not resize while pinchZoomed.
        return {
          result: true,
          reason: 'pinchZoomed'
        };
      }

      return {
        result: false,
        reason: ''
      };
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var _this4 = this;

      var _window$location2 = window.location,
          pathname = _window$location2.pathname,
          search = _window$location2.search; // Early versions of iOS 12 have strange behavior. On orientation change, the
      // screen can collapse between the first and second setStates. Remember, in 
      // iOS, resize fires on orientation change, then AGAIN afer the bottom 
      // menu bar is added to screen. 
      // This on/off function ensures that the app's height will occupy the 
      // entire screen during the update phase. Trust me, it works.
      // Note, 11/9/19: This won't catch iPadOS as it doesn't report
      // itself as mobile — 'tis OK, I've observed good behavior.

      var toggleHtmlElementHeight = function toggleHtmlElementHeight(mode) {
        if (react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobileSafari"] && parseInt(react_device_detect__WEBPACK_IMPORTED_MODULE_8__["osVersion"]) >= 12) {
          if (mode === 'on') {
            document.getElementsByTagName('html')[0].style.height = '100vh';
          } else if (mode === 'off') {
            // setTimeout ensures that elementHeight has time to do its work
            setTimeout(function () {
              document.getElementsByTagName('html')[0].style.height = '';
            }, 250);
          }
        }
      };

      toggleHtmlElementHeight('on'); // Another approach to determining orientation change: 
      // https://stackoverflow.com/a/37493832

      var newHeight = this.calculatePageHeight(); // Resize if height changes and newHeight > this.minAllowedHeight.
      // Note, mobile Brave slips through this test on /home. The image
      // resizes and Brave then resizes. No fix for now.

      if (newHeight === this.state.height) {
        if (false) {} // On orientation change, covers every section but /chapter
        // (at least on iPhone)


        toggleHtmlElementHeight('off');
        return false;
      } // Update page height when these factors are true:
      //  a. mobile device
      //  b. orientation change AND pinchZoom is off
      //  c. height changes (we've already discarded newHeight <= 350)


      if (false) {} // On orientation change, covers /chapter b/c of hidden image
      // (at least on iPhone)


      toggleHtmlElementHeight('off');
      this.setState(function () {
        return {
          height: _this4.minAllowedHeight < newHeight ? newHeight : _this4.minAllowedHeight,
          // Reset (true until handleMove says otherwise)
          isAfterTouch: _this4.state.isAfterTouch && false
        };
      });
    }
  }, {
    key: "updateNameTagWidth",
    value: function updateNameTagWidth() {
      var nameTagWidth = this.calculateNameTagWidth();

      if (nameTagWidth !== this.state.nameTagWidth) {
        this.setState({
          nameTagWidth: nameTagWidth
        });
      }
    }
  }, {
    key: "updateSpacerHeight",
    value: function updateSpacerHeight() {
      // Note: Really a faceplate now...see NameTag notes.
      var spacerHeight = this.calculateSpacerHeight();

      if (spacerHeight !== this.state.spacerHeight) {
        this.setState({
          spacerHeight: spacerHeight
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // A note on Flexbox compatibility: https://stackoverflow.com/a/35137869
      if (!this.hasStyle('flexbox')) {
        throw new Error("Browser doesn't support Flexbox");
      } else if (react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isOpera"] || react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isIE"] && react_device_detect__WEBPACK_IMPORTED_MODULE_8__["browserVersion"] <= 10) {
        throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
      }

      if (!this.hasStyle('object-fit')) {
        object_fit_images__WEBPACK_IMPORTED_MODULE_11___default()();
      } // Heard after all React handlers run
      // https://fortes.com/2018/react-and-dom-events/


      window.addEventListener('resize', this.handleResize);
      window.addEventListener('popstate', this.handleBackAndForth);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (false) { var _window$location3, pathname, search, location; }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // This will never be called, here as good practice.
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('popstate', this.handleBackAndForth);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(App));

/***/ }),

/***/ "./app/Body.jsx":
/*!**********************!*\
  !*** ./app/Body.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Body; });
/* harmony import */ var _about_About_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/About.jsx */ "./app/about/About.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _shared_ContentLoader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ContentLoader.jsx */ "./app/shared/ContentLoader.jsx");
/* harmony import */ var _Debug_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Debug.jsx */ "./app/Debug.jsx");
/* harmony import */ var _home_Home_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/Home.jsx */ "./app/home/Home.jsx");
/* harmony import */ var _classes_Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/Location */ "./app/classes/Location.js");
/* harmony import */ var _not_found_NotFound_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/NotFound.jsx */ "./app/not-found/NotFound.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _reload_ReloadRoute_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reload/ReloadRoute.jsx */ "./app/reload/ReloadRoute.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/State.js */ "./app/classes/State.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Body =
/*#__PURE__*/
function (_Component) {
  _inherits(Body, _Component);

  function Body(props) {
    var _this;

    _classCallCheck(this, Body);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, props));
    /** Build initial bodyState.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections, e.g., returns from a menu.
     */

    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_8__["default"](props);
    var location = new _classes_Location__WEBPACK_IMPORTED_MODULE_5__["default"](referrer.pathToMatch, props);
    var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_11__["default"](props, location);
    _this.state = {
      indexForArticleData: state.getIndex('article'),
      indexForChapterData: state.getIndex('chapter'),
      indexForProjectData: state.getIndex('project'),
      indexForProjectPics: state.getIndex('projectPics'),
      indexForPublication: state.getIndex('publication'),
      indexForReverieData: state.getIndex('reverie')
    };
    return _this;
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('body', this);
      var boundHandleClickForBody = clickHandling.boundHandleClick; // Optional params in React:
      // https://stackoverflow.com/a/35604855

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_home_Home_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _this2.props);
        }
      }), ['/chapter/:title?', '/journalism/:publication?/:headline?', '/projects/:projectName?/:projectThumbnail?', '/reverie/:headline?'].map(function (path, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
          key: idx,
          path: path,
          render: function render(_ref) {
            var match = _ref.match;
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_ContentLoader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _this2.props, {
              bodyState: _this2.state,
              boundHandleClickForBody: boundHandleClickForBody,
              match: match
            }));
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/i",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_reload_ReloadRoute_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _this2.props, {
            bodyState: _this2.state
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/about",
        component: _about_About_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/debug",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Debug_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _this2.props);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_not_found_NotFound_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _this2.props);
        }
      }));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./app/Debug.jsx":
/*!***********************!*\
  !*** ./app/Debug.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Debug; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Debug__RestyledContentHolder",
  componentId: "wm80ed-0"
})(["width:100%;overflow:auto;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "Debug__Hed",
  componentId: "wm80ed-1"
})(["font-size:", ";margin-top:5px;margin-right:20px;margin-bottom:25px;"], function (p) {
  return p.theme.fontSizes.twenty;
});

var Debug =
/*#__PURE__*/
function (_Component) {
  _inherits(Debug, _Component);

  function Debug() {
    _classCallCheck(this, Debug);

    return _possibleConstructorReturn(this, _getPrototypeOf(Debug).apply(this, arguments));
  }

  _createClass(Debug, [{
    key: "render",
    value: function render() {
      var type = react_device_detect__WEBPACK_IMPORTED_MODULE_4__["isIOS"] ? 'true' : 'false';
      var devicePixelRatio = window.devicePixelRatio;
      var devicePixelRatio2 = react_device_detect__WEBPACK_IMPORTED_MODULE_4__["isIOS"] ? Math.floor(window.devicePixelRatio) : window.devicePixelRatio;

      var timesPixelRatio = function timesPixelRatio(dimension) {
        return Math.floor(devicePixelRatio * dimension);
      }; // Desktops get it right, mobile may not— check if height is bigger than width


      var widthType = window.screen.height > window.screen.width ? 'widthIsHeight' : 'widthIsWidth';
      var screenWidth = widthType === 'widthIsHeight' ? window.screen.height : window.screen.width;
      var screenHeight = widthType === 'widthIsHeight' ? window.screen.width : window.screen.height;
      var resWidth = timesPixelRatio(screenWidth);
      var resHeight = timesPixelRatio(screenHeight);
      var bodyEl = document.getElementsByTagName('body')[0];
      var bodyRect = bodyEl.getBoundingClientRect();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestyledContentHolder, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hed, null, "Debug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "window.screen.width: ", window.screen.width), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "window.screen.height: ", window.screen.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "widthType: ", widthType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "width (my algorithm): ", screenWidth), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "height (my algorithm): ", screenHeight), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "iOS: ", type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "window.devicePixelRatio: ", devicePixelRatio), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "my pixelRatio: ", devicePixelRatio2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "resolution width: ", resWidth), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "resolution height: ", resHeight), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "image width: ", this.props.appState.images.width), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "image height: ", this.props.appState.images.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "window.pageYOffset: ", window.pageYOffset), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "appState.height: ", this.props.appState.height), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "app height: ", this.props.appState.height + 55 + 52), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "bodyRect.y: ", bodyRect.y), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "window.availHeight: ", window.screen.availHeight)));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.boundHandleClickForApp('updateApp', 'debug');
    }
  }]);

  return Debug;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./app/about/About.jsx":
/*!*****************************!*\
  !*** ./app/about/About.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _data_about_about_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/about/about.md */ "./app/data/about/about.md");
/* harmony import */ var _data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_about_about_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_linked_in_icon_80_4x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/linked-in-icon-80-@4x.png */ "./docs/assets/images/convert-to-data-uri/linked-in-icon-80-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_linked_in_icon_80_4x_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_linked_in_icon_80_4x_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_me_xnc_q90_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/me-xnc-q90.jpg */ "./docs/assets/images/convert-to-data-uri/me-xnc-q90.jpg");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_me_xnc_q90_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_me_xnc_q90_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");












var RestyledShelf = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "About__RestyledShelf",
  componentId: "cjmy33-0"
})(["justify-content:space-between;margin-bottom:10px;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "About__Hed",
  componentId: "cjmy33-1"
})(["margin-top:-8px;font-size:", ";color:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Me = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "About__Me",
  componentId: "cjmy33-2"
})(["width:100%;margin-bottom:10px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].section.withConfig({
  displayName: "About__Text",
  componentId: "cjmy33-3"
})(["overflow:auto;blockquote{margin:0px 0px 30px 0px;padding:0px 20px 0px 20px;color:", ";border-left:15px solid ", ";}li{margin-bottom:0px;}li p{margin-bottom:14px;}ul li{margin-bottom:14px;}p{margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "About__Icon",
  componentId: "cjmy33-4"
})(["height:20px;width:20px;margin-bottom:6px;margin-right:1px;background:url(", ") no-repeat;background-size:contain;"], function (p) {
  return p.src;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "About__IconContainer",
  componentId: "cjmy33-5"
})(["margin-top:6px;"]);
function About() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    saveSerifs: true
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RestyledShelf, {
    height: "32px"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hed, null, "Hi! I'm James"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].OutboundLink, {
    eventLabel: "To LinkedIn",
    target: "_blank",
    to: "https://www.linkedin.com/in/jameserikabels"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
    src: _docs_assets_images_convert_to_data_uri_linked_in_icon_80_4x_png__WEBPACK_IMPORTED_MODULE_1___default.a
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Me, {
    alt: _data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.altImageText,
    src: _docs_assets_images_convert_to_data_uri_me_xnc_q90_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_9___default()(marked__WEBPACK_IMPORTED_MODULE_5___default()(_data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default.a.body, {
    smartypants: true
  }))))));
}

/***/ }),

/***/ "./app/article-n-reverie/ArticleOrReverie.jsx":
/*!****************************************************!*\
  !*** ./app/article-n-reverie/ArticleOrReverie.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleOrReverie; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");









var Dek = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h2.withConfig({
  displayName: "ArticleOrReverie__Dek",
  componentId: "sc-1qv5lq2-0"
})(["font-size:", ";color:", ";font-weight:400;margin-left:0px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "ArticleOrReverie__Hed",
  componentId: "sc-1qv5lq2-1"
})(["font-size:", ";margin-bottom:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section.withConfig({
  displayName: "ArticleOrReverie__Text",
  componentId: "sc-1qv5lq2-2"
})(["overflow:auto;p{&:last-child{margin-bottom:0px;}}strong{font-weight:500;}img{margin-top:0px;}ul,ol{margin-top:0px;margin-bottom:", ";}li{margin-bottom:10px;&:last-child{margin-bottom:0px;}}pre{white-space:pre-wrap;}"], function (p) {
  return p.theme.bottomMargin.regular;
});
var BylineOrDate = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "ArticleOrReverie__BylineOrDate",
  componentId: "sc-1qv5lq2-3"
})(["font-size:", ";font-style:italic;margin-bottom:", ";;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
function ArticleOrReverie(props) {
  var contentState = props.contentState;
  var allContentData = contentState.allContentData,
      caller = contentState.caller,
      headlineIndex = contentState.headlineIndex,
      reverieIndex = contentState.reverieIndex;
  var _allContentData$attri = allContentData[caller !== 'reverie' ? headlineIndex : reverieIndex].attributes,
      date = _allContentData$attri.date,
      headline = _allContentData$attri.headline,
      position = _allContentData$attri.position,
      publication = _allContentData$attri.publication;
  var body = allContentData[caller !== 'reverie' ? headlineIndex : reverieIndex].body;
  var isReverie = caller === 'reverie';
  var publicationOrReverieTag = !isReverie ? publication : 'Reverie';
  var bylineOrDate = caller !== 'reverie' ? "by James Erik Abels | ".concat(position) : date;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Dek, null, publicationOrReverieTag), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Hed, null, headline), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BylineOrDate, null, bylineOrDate), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(body, {
    smartypants: true
  }))))));
}

/***/ }),

/***/ "./app/article-n-reverie/ArticleOrReverieNav.jsx":
/*!*******************************************************!*\
  !*** ./app/article-n-reverie/ArticleOrReverieNav.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleOrReverieNav; });
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");






var NavigationDek = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationDek",
  componentId: "sc-1v2admq-0"
})(["color:", ";margin-bottom:0px;font-size:", ";font-style:italic;&:first-child{margin-top:0px;}"], function (p) {
  return !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.four;
});
var NavigationHed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationHed",
  componentId: "sc-1v2admq-1"
})(["color:", ";font-size:", ";margin-top:-2px;margin-left:2px;margin-bottom:15px;font-weight:400;@media (min-width:", "){font-size:", ";}"], function (p) {
  return !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.fifteen;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.theme.fontSizes.sixteen;
});
function ArticleOrReverieNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState;
  var allContentData = contentState.allContentData,
      caller = contentState.caller,
      headlineIndex = contentState.headlineIndex,
      reverieIndex = contentState.reverieIndex;
  var isReverie = caller === 'reverie';
  var currentHed = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allContentData[!isReverie ? headlineIndex : reverieIndex].attributes.headline);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: allContentData,
    render: function render(articleOrReverie, idx) {
      var _articleOrReverie$att = articleOrReverie.attributes,
          date = _articleOrReverie$att.date,
          headline = _articleOrReverie$att.headline,
          publication = _articleOrReverie$att.publication;
      var hedFromItem = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(headline);
      var dateOrPublicationFromItem = !isReverie ? publication : date;
      var linkIsActive = currentHed === hedFromItem;
      var articleLink = isReverie ? "/reverie/".concat(hedFromItem) : "/journalism/".concat(Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateOrPublicationFromItem), "/").concat(hedFromItem);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        boundHandleClickForApp: boundHandleClickForApp,
        to: articleLink
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationDek, {
        link: linkIsActive
      }, dateOrPublicationFromItem), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationHed, {
        link: linkIsActive
      }, headline)));
    }
  }));
}

/***/ }),

/***/ "./app/classes/ClickHandling.js":
/*!**************************************!*\
  !*** ./app/classes/ClickHandling.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickHandling; });
/* harmony import */ var _Referrer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Referrer */ "./app/classes/Referrer.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ClickHandling =
/*#__PURE__*/
function () {
  function ClickHandling(component, outsideThis, props) {
    _classCallCheck(this, ClickHandling);

    if (outsideThis.props.location === undefined) {
      throw new Error('Caller must carry location.');
    }

    var referrer = new _Referrer__WEBPACK_IMPORTED_MODULE_0__["default"](outsideThis.props);
    this._props = props;
    this._component = component;
    this._referrer = referrer;
    this.boundHandleClick = this._selectHandleClick(outsideThis);
  } // Binds a handleClick function to boundHandleClick; this
  // function will be invoked directly or passed as an arg.


  _createClass(ClickHandling, [{
    key: "_selectHandleClick",
    value: function _selectHandleClick(outerThis) {
      var selectedHandler;

      switch (this._component) {
        case 'app':
          selectedHandler = this._handleClickForApp;
          break;

        case 'body':
          selectedHandler = this._handleClickForBody;
          break;

        case 'home':
          selectedHandler = this._handleClickForHome;
          break;

        case 'charm':
          selectedHandler = this._handleCharm;
          break;

        case 'contentLoader':
          selectedHandler = this._handleClickForContentLoader;

        default:
          break;
      }

      return selectedHandler.call(outerThis, this);
    } // Handles onClicks on App (top-level state).

  }, {
    key: "_handleClickForApp",
    value: function _handleClickForApp() {
      var _this = this;

      return function (updateValue, valueOne, valueTwo) {
        var _this$state = _this.state,
            currentCaller = _this$state.currentCaller,
            illustrationDelay = _this$state.illustrationDelay,
            illustrationDirection = _this$state.illustrationDirection,
            illustrationLevel = _this$state.illustrationLevel,
            illustrationState = _this$state.illustrationState,
            heartbeat = _this$state.heartbeat,
            showBusinessCard = _this$state.showBusinessCard,
            showLegalTerms = _this$state.showLegalTerms,
            tempContent = _this$state.tempContent,
            inCity = _this$state.inCity,
            isMenu = _this$state.isMenu;
        var stateToUpdate = {};

        var toggleStoryTextSequence = function toggleStoryTextSequence() {
          if (illustrationDelay) {
            stateToUpdate.illustrationDelay = !illustrationDelay;
          }

          if (illustrationLevel === 0) {
            // Already 'enter' (default or reset to 'enter' by 'updateApp')
            stateToUpdate.illustrationLevel = 1; // 0 --> 1
          } else {
            stateToUpdate.illustrationLevel = 2; // 3 --> 2

            stateToUpdate.illustrationDirection = 'exit';
          }

          if (tempContent > 0) {
            stateToUpdate.tempContent = 0;
          }
        };

        var category = '';
        var action = '';
        var label = '';

        switch (updateValue) {
          case 'updateTempContent':
            if (tempContent > 0 && tempContent - valueOne === 0) {
              stateToUpdate.tempContent = 0;
            } else {
              stateToUpdate.tempContent = valueOne;
            }

            if (tempContent < 3 && valueOne === 3) {
              // Disable setTimeout to suspend auto-close
              _this.headerMenuTimeoutId = setTimeout(function () {
                _this.setState({
                  tempContent: 0
                }, function () {
                  // Reset timeout after timeout successfully runs
                  _this.headerMenuTimeoutId = undefined;
                });
              }, 5000);
            } else {
              // Clear timeout if closing via the icon (img))
              clearTimeout(_this.headerMenuTimeoutId);
              _this.headerMenuTimeoutId = undefined;
            } // Legal terms and business card are tracked in TempContent.cDU. Is his really needed here?
            // What about header menu?


            category = 'App state';
            action = tempContent - valueOne === 0 ? "Close ".concat(tempContent === 1 ? 'business card' : tempContent === 2 ? 'legal terms' : 'header menu') : "Open ".concat(valueOne === 1 ? 'business card' : valueOne === 2 ? 'legal terms' : 'header menu');
            label = tempContent - valueOne === 0 ? 'Toggled off' : "Swapped from ".concat(tempContent === 1 ? 'business card' : tempContent === 2 ? 'legal terms' : 'header menu');
            break;

          case 'toggleStoryText':
            toggleStoryTextSequence();
            category = 'App state';
            action = illustrationLevel > 0 ? 'Hide story text' : 'Close story text';
            label = showBusinessCard ? 'Business card was open' : showLegalTerms ? 'Legal notice was open' : '';
            break;

          case 'updateIllustrationLevel':
            // Tracked by app so header/footer can respond
            stateToUpdate.illustrationLevel = valueOne;

            if (valueOne === 0) {
              stateToUpdate.illustrationDirection = 'enter';
            }

            category = 'App state';
            action = "Update illustration state: ".concat(valueOne);
            label = valueOne !== 0 ? illustrationDirection : 'enter';
            break;

          case 'updateIllustrationState':
            stateToUpdate.illustrationState = valueOne;

            if (valueTwo) {
              toggleStoryTextSequence();
            }

            category = 'App state';
            action = "Update chapter illustration status: ".concat(valueOne);
            label = valueOne > 0 ? 'loaded' : 'not-loaded';
            break;

          case 'toggleIllustrationDelay':
            stateToUpdate.illustrationDelay = !illustrationDelay;
            category = 'App state';
            action = "Delay illustration until loaded";
            break;

          case 'swapBackground':
            stateToUpdate.inCity = !inCity;
            category = 'App state';
            action = !inCity ? 'Enter city' : 'Enter fantasy';
            break;

          case 'updateSpacerHeight':
            stateToUpdate.spacerHeight = _this.calculateSpacerHeight();
            category = 'App state';
            action = 'Updated spacer height for /home';
            break;

          case 'updateNameTagWidth':
            console.log('updateNameTagWidth');
            stateToUpdate.nameTagWidth = _this.calculateNameTagWidth();
            category = 'App state';
            action = 'Updated name tag width for /home';
            break;

          case 'toggleMenu':
            stateToUpdate.isMenu = !isMenu;
            category = 'App state';
            action = !isMenu ? "Enter: ".concat(currentCaller, " menu") : "Leave: ".concat(currentCaller, " menu");
            break;

          case 'updateHeartbeat':
            stateToUpdate.homePageLoaded = true;

            if (heartbeat < 1) {
              stateToUpdate.heartbeat = 1;
            } else {
              stateToUpdate.heartbeat = 2;
            }

            category = 'App state';
            action = 'Update Heartbeat';
            label = stateToUpdate.homePageLoaded ? 'Finished home page load' : 'Finished heartbeat';
            break;

          case 'updateApp':
            if (valueOne !== undefined) {
              stateToUpdate.currentCaller = valueOne;
              stateToUpdate.lastCaller = currentCaller;
            } // Clear timeout when clicking a link in the headerMenu


            if (_this.headerMenuTimeoutId) {
              clearTimeout(_this.headerMenuTimeoutId);
              _this.headerMenuTimeoutId = undefined;
            }

            stateToUpdate.tempContent = 0;

            if (heartbeat === 1) {
              stateToUpdate.heartbeat = 2;
            } // 1. If any link is clicked, other than a MenuButton,
            // we'll rebuild the state and toggle the menu
            // (this will turn it off if it's on, i.e., a header
            // link was clicked instead of the MenuButton).
            // 2. If the back or forward button is clicked,
            // we'll rebuild the state and toggle the menu
            // (this will turn it on/off based on the
            // window.location).


            if (isMenu || valueTwo) {
              stateToUpdate.isMenu = !isMenu;
            } // Reset illustrationDelay when leaving /chapter


            if (illustrationDelay && valueOne !== 'chapter') {
              stateToUpdate.illustrationDelay = !illustrationDelay;
            } // We'll always hide the illustration when switching sections,
            // but not if going to, leaving, or changing the /reverie.


            if (currentCaller === 'chapter' && valueOne !== 'reverie' || currentCaller === 'reverie' && valueOne !== 'chapter' && valueOne !== undefined) {
              if (illustrationLevel > 0) {
                if (illustrationDirection !== 'enter') {
                  stateToUpdate.illustrationDirection = 'enter';
                }

                stateToUpdate.illustrationLevel = 0;
              }

              if (illustrationState !== 0) {
                stateToUpdate.illustrationState = 0;
              }
            }

            category = 'App state';
            action = 'Reset app';
            break;

          default:
            break;
        }

        if (updateValue !== 'updateApp') {
          if (false) {}
        }

        return _this.setState(function () {
          return stateToUpdate;
        });
      };
    } // Handles onClicks on Body (updates state for reloads).

  }, {
    key: "_handleClickForBody",
    value: function _handleClickForBody(self) {
      var _this2 = this;

      return function (valueOne, valueTwo) {
        var stateToUpdate = {};

        switch (self._referrer.location) {
          case 'chapter':
            stateToUpdate.indexForChapterData = valueOne;
            break;

          case 'projects':
            stateToUpdate.indexForProjectData = valueOne;
            stateToUpdate.indexForProjectPics = valueTwo;
            break;

          case 'journalism':
            stateToUpdate.indexForPublication = valueOne;
            stateToUpdate.indexForArticleData = valueTwo;
            break;

          case 'reverie':
            stateToUpdate.indexForReverieData = valueOne;
            break;

          default:
            break;
        }

        return _this2.setState(stateToUpdate);
      };
    } // Handles onClicks for ContentLoader (/projects only)

  }, {
    key: "_handleClickForContentLoader",
    value: function _handleClickForContentLoader() {
      var _this3 = this;

      return function (type, valueOne, valueTwo) {
        var stateToUpdate = {};
        var caller = _this3.state.caller;

        switch (type) {
          case 'imageLoader':
            stateToUpdate.imageLoaded = valueOne;
            break;

          case 'updateState':
            if (caller === 'chapter') {
              var blurredIllustrationState = _this3.props.appState.images["chapter-".concat(valueOne + 1, "-blurred")].complete ? 2 : 0;
              stateToUpdate.chapterIndex = valueOne;
              stateToUpdate.imageLoaded = blurredIllustrationState;
            }

            if (caller === 'projects') {
              stateToUpdate.projectIndex = valueOne;
              stateToUpdate.thumbnailIndex = valueTwo;
              stateToUpdate.imageLoaded = 0;
            }

            if (caller === 'journalism') {
              stateToUpdate.headlineIndex = valueTwo;
            }

            if (caller === 'reverie') {
              stateToUpdate.reverieIndex = valueOne;
            }

            break;
        }

        _this3.setState(stateToUpdate);
      };
    } // Handles onClicks on Home (spell, part one).

  }, {
    key: "_handleClickForHome",
    value: function _handleClickForHome() {
      var _this4 = this;

      return function (updateValue, propName) {
        var _this4$state = _this4.state,
            eventType = _this4$state.eventType,
            movement = _this4$state.movement,
            spellLevel = _this4$state.spellLevel;
        var stateToUpdate = {};

        switch (updateValue) {
          case 'toggleSpell':
            // Note: We toggleSpell after the spell
            // is cast in order to reset its state.
            stateToUpdate.movement = movement === 'enter' ? 'exit' : 'enter';

            if (spellLevel < 1) {
              // i.e., 0
              stateToUpdate.spellLevel = 1;
            } else {
              // i.e., 4
              stateToUpdate.spellLevel = 3;
            } // Reset spell after it's cast (background = 'transform')


            if (propName === 'transform') {
              stateToUpdate.score = 0;
              stateToUpdate.movement = '';
              stateToUpdate.spellLevel = 0;
            }

            break;

          case 'cast':
            // Note, the score never equals the goal 
            // b/c we cast at score + 1.
            stateToUpdate.spellLevel = 5;
            stateToUpdate.pattern = _this4.createSpellPattern();
            stateToUpdate.activeCharm = stateToUpdate.pattern[0];
            stateToUpdate.score = 0; // Reset the eventType to 'click' if it was
            // 'touch'-ed. This prevents unexpected
            // and unwanted propagation.

            if (eventType === 'touch') {
              stateToUpdate.eventType = 'click';
            }

            break;

          case 'resetEventType':
            stateToUpdate.eventType = 'click';
            break;
        }

        _this4.setState(stateToUpdate);
      };
    } // Handles onClicks on Charms (spell, part two).

  }, {
    key: "_handleCharm",
    value: function _handleCharm() {
      var _this5 = this;

      return function (isActive) {
        var _this5$state = _this5.state,
            goal = _this5$state.goal,
            score = _this5$state.score;
        var abracadabra = score + 1 === goal; // Magic!

        var boundHandleClickForApp = _this5.props.boundHandleClickForApp; // Either the Charm's inactive, or it's time for magic.

        if (!isActive || isActive && abracadabra) {
          // We can invoke ClickHandling with the proper 'this' b/c
          // we invoked it w/Home's 'this' value via .call()
          var hcForHome = new ClickHandling('home', _this5);
          var boundHandleClickForHome = hcForHome.boundHandleClick;

          if (isActive && abracadabra) {
            // We store the background value in App so it's remembered
            // as the user travels through the site.
            if (false) {}

            boundHandleClickForHome('cast');
            boundHandleClickForApp('swapBackground');
          } else {
            if (false) {}

            boundHandleClickForHome('toggleSpell');
          }

          return null;
        } //  The Charm is active, and the user isn't done yet.


        _this5.setState(function (state) {
          var newScore = state.score += 1;
          return {
            score: newScore,
            activeCharm: state.pattern[newScore]
          };
        });
      };
    }
  }]);

  return ClickHandling;
}();



/***/ }),

/***/ "./app/classes/Content.js":
/*!********************************!*\
  !*** ./app/classes/Content.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/clips/index.js */ "./app/data/clips/index.js");
/* harmony import */ var _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects/index.js */ "./app/data/projects/index.js");
/* harmony import */ var _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/reveries/index.js */ "./app/data/reveries/index.js");
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/the-story/index.js */ "./app/data/the-story/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Content =
/*#__PURE__*/
function () {
  function Content(caller) {
    _classCallCheck(this, Content);

    this.caller = caller;
  }

  _createClass(Content, [{
    key: "getContentData",
    value: function getContentData() {
      var caller = this.caller;

      switch (caller) {
        case 'chapter':
          return _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__["default"];

        case 'projects':
          return _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        case 'journalism':
          return _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

        case 'reverie':
          return _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

        default:
          return;
      }
    }
  }]);

  return Content;
}();



/***/ }),

/***/ "./app/classes/JournalismParams.js":
/*!*****************************************!*\
  !*** ./app/classes/JournalismParams.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JournalismParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var JournalismParams =
/*#__PURE__*/
function (_Params) {
  _inherits(JournalismParams, _Params);

  function JournalismParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, JournalismParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JournalismParams).call(this, type, params, ['publication', 'headline']));
    _this.lastHeadline = prevProps && prevProps.match.params.headline;
    _this.lastPublication = prevProps && prevProps.match.params.publication;
    return _this;
  }

  _createClass(JournalismParams, [{
    key: "publicationToIndex",
    value: function publicationToIndex() {
      if (!this.publication) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "headlineToIndex",
    value: function headlineToIndex() {
      if (!this.headline) return -1;
      return this._twoToIndex();
    }
  }, {
    key: "publication",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }, {
    key: "headline",
    get: function get() {
      return this._validateParam(this._two, this._paramNames[1]);
    }
  }, {
    key: "firstArticleToMatchPublication",
    get: function get() {
      var _this2 = this;

      var headlineParamIsUndefined = this._two === undefined;

      if (this.publication && headlineParamIsUndefined) {
        var firstHedToMatchPublication = this._searchData.find(function (a) {
          return _this2._normalizeParam(a.attributes.publication) === _this2.publication;
        }).attributes.headline;

        return this._searchData.findIndex(function (a) {
          return a.attributes.headline === firstHedToMatchPublication;
        });
      }

      return -1;
    }
  }]);

  return JournalismParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/Location.js":
/*!*********************************!*\
  !*** ./app/classes/Location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _JournalismParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JournalismParams */ "./app/classes/JournalismParams.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
/* harmony import */ var _ProjectsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsParams */ "./app/classes/ProjectsParams.js");
/* harmony import */ var _Referrer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _ReverieParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReverieParams */ "./app/classes/ReverieParams.js");
/* harmony import */ var _StoryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StoryParams */ "./app/classes/StoryParams.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Location =
/*#__PURE__*/
function () {
  function Location(pathToMatch, props, prevProps) {
    _classCallCheck(this, Location);

    if (props.location === undefined) {
      throw new Error('The Location class requires props.location.');
    }

    var referrer = new _Referrer_js__WEBPACK_IMPORTED_MODULE_4__["default"](props);
    this._pathToMatch = pathToMatch;
    this._currentPath = props.location.pathname;
    this._lastPath = prevProps && prevProps.location.pathname;
    this._actualLengthOfPath = this._currentPath.split('/').length;
    this._expectedLengthOfPath = this._pathToMatch.split('/').length;
    this._matchPath = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(this._currentPath, {
      path: this._pathToMatch
    }); // Normalizes params within class

    this.caller = referrer.location;
    this.lastCaller = this._lastPath && referrer.getLocation(prevProps);
    this.isExact = this._matchPath && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _createClass(Location, [{
    key: "_loadParams",
    value: function _loadParams(prevProps) {
      var caller = this.caller;
      var paramValues = this._matchPath.params;
      var ParamsClass;

      switch (caller) {
        case 'chapter':
          ParamsClass = _StoryParams__WEBPACK_IMPORTED_MODULE_6__["default"];
          break;

        case 'journalism':
          ParamsClass = _JournalismParams__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        case 'projects':
          ParamsClass = _ProjectsParams__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;

        case 'reverie':
          ParamsClass = _ReverieParams__WEBPACK_IMPORTED_MODULE_5__["default"];
          break;

        default:
          ParamsClass = _Params__WEBPACK_IMPORTED_MODULE_2__["default"];
          break;
      }

      return new ParamsClass(caller, paramValues, prevProps);
    }
  }, {
    key: "_pathIsShort",
    get: function get() {
      return this._actualLengthOfPath < this._expectedLengthOfPath;
    }
  }, {
    key: "_pathIsLong",
    get: function get() {
      return this._actualLengthOfPath > this._expectedLengthOfPath;
    }
  }, {
    key: "pathIsValid",
    get: function get() {
      // Return statement:
      // 1. The path is a menu and the length is exactly 3
      // 2. The path is of the right caller (e.g. /chapter)
      // 3. The path isn't too long (isExact doesn't check)
      // 4. The path has the proper number of params after
      // eliminating invalid entries (isExact can't know,
      // it only checks for fulfilled values)
      return this.params.isMenu ? this._actualLengthOfPath === 3 : this.isExact && !this._pathIsLong && this.params.hasExpectedNumber;
    }
  }, {
    key: "needsRedirect",
    get: function get() {
      if (this.pathIsValid) return false; // Return statement:
      // 1. The first param is literally undefined
      // 2. Two first param is validated but the
      // second param is literally undefined

      var paramOneIsUndefined = this.params.areUndefined.includes(this.params._paramNames[0]);
      var paramTwoIsUndefined = this.params.areUndefined.includes(this.params._paramNames[1]);
      return paramOneIsUndefined || this.params.oneIsValid && paramTwoIsUndefined;
    }
  }, {
    key: "isSwappingContent",
    get: function get() {
      var contentMismatch;
      var isMenu = this.params.isMenu;

      switch (this.caller) {
        case 'chapter':
          var currentChapter = this.params.title;
          var lastChapter = this.params.lastChapter;
          contentMismatch = currentChapter !== lastChapter;
          break;

        case 'projects':
          var currentProjectPicture = this.params.projectThumbnail;
          var lastProjectPicture = this.params.lastProjectPicture;
          var currentProjectName = this.params.projectName;
          var lastProjectName = this.params.lastProject;
          contentMismatch = currentProjectName !== lastProjectName || currentProjectPicture !== lastProjectPicture;
          break;

        case 'journalism':
          var currentHeadline = this.params.headline;
          var lastHeadline = this.params.lastHeadline;
          contentMismatch = currentHeadline !== lastHeadline;
          break;

        case 'reverie':
          var currentReverie = this.params.headline;
          var lastReverie = this.params.lastHeadline;
          contentMismatch = currentReverie !== lastReverie;
          break;

        default:
          contentMismatch = false;
          break;
      }

      return contentMismatch && !isMenu;
    }
  }, {
    key: "justChanged",
    get: function get() {
      if (!this._lastPath) {
        throw new Error('Location.justChanged() requires prevProps');
      }

      return this._currentPath !== this._lastPath;
    }
  }, {
    key: "_isCalledAfterReload",
    get: function get() {
      return this.lastCaller === 'i';
    }
  }, {
    key: "recordPageview",
    get: function get() {
      return this.justChanged && !this._isTopLevel && !this._isCalledAfterReload && window.location.pathname !== '/i';
    }
  }, {
    key: "_isTopLevel",
    get: function get() {
      var topLevels = ['/chapter', '/journalism', '/projects', '/reverie'];
      return topLevels.includes(this._currentPath);
    }
  }]);

  return Location;
}();



/***/ }),

/***/ "./app/classes/Params.js":
/*!*******************************!*\
  !*** ./app/classes/Params.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Params; });
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.js */ "./app/classes/Content.js");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Params =
/*#__PURE__*/
function () {
  function Params(type, params, paramNames) {
    var _this = this;

    _classCallCheck(this, Params);

    // Array.isArray() ensures nothing breaks when
    // Params() is called by location._loadParams
    // (super's not called, so the {} is empty)
    this._type = type;
    this._paramNames = Array.isArray(paramNames) ? paramNames : [];
    this._one = params[this._paramNames[0]];
    this._two = params[this._paramNames[1]];
    this._expectedNumber = this._paramNames.length;
    this._validatedNumber = this._paramNames.filter( // Check this to assess their validity;
    // invalid params come back false
    function (p) {
      return _this[p] !== false;
    }).length;
    this.oneIsValid = this[this._paramNames[0]] !== false;
    this.twoIsValid = this[this._paramNames[1]] !== false;
    this.areUndefined = this._paramNames.filter( // Check params, not 'this' b/c this[param]
    // is defined by matchPath(); we want to
    // tet the real-true original URL.
    function (p) {
      return params[p] === undefined;
    });
    this.originalData = params;
  }

  _createClass(Params, [{
    key: "_normalizeParam",
    value: function _normalizeParam(param) {
      return Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(param);
    }
  }, {
    key: "_validateParam",
    value: function _validateParam(param, paramName) {
      var _this2 = this;

      // This function has to stand on its own in
      // order to avoid an infinit loop. Remember,
      // any call to this[param] runs through this
      // method (validate), including ._toIndex()
      if (!param) return false;
      var searchData = this._searchData;
      var paramIsValid;

      switch (_typeof(param)) {
        case 'string':
          var paramTestResults = searchData.filter(function (project) {
            var valueFromData = _this2._normalizeParam(project.attributes[paramName]);

            var paramToTest = _this2._normalizeParam(param);

            return valueFromData === paramToTest;
          });
          paramIsValid = paramTestResults.length > 0;
          break;

        case 'number':
          var paramAsIndex = parseInt(param) - 1;
          var projectIndex = searchData.findIndex(function (project) {
            return _this2._normalizeParam(project.attributes.projectName) === _this2._one;
          });

          if (projectIndex >= 0) {
            paramIsValid = paramAsIndex < searchData[projectIndex].attributes[paramName].length;
          }

          break;

        default:
          paramIsValid = false;
          break;
      } // Return original to avoid problems
      // with falsy should index be 0.


      return paramIsValid && param;
    }
  }, {
    key: "_toIndex",
    value: function _toIndex(paramName) {
      var _this3 = this;

      // The next two rely on ._validateParam(). As a,
      // result, it can't be used in ._validateParam()
      // to avoid an infinite loop.
      if (!this[paramName]) return -1; // this[paramName] access convenience methods
      // on each subclass, e.g., .projectThumbnail
      // or .headline. parseInt() is run whenever
      // the param corresponds to a number.

      var param = this[paramName];

      switch (_typeof(param)) {
        case 'string':
          return this._searchData.findIndex(function (d) {
            var normalizedData = _this3._normalizeParam(d.attributes[paramName]);

            return normalizedData === param;
          });

        case 'number':
          return parseInt(param) - 1;

        default:
          return;
      }
    }
  }, {
    key: "_oneToIndex",
    value: function _oneToIndex() {
      if (this._paramNames.length < 1) return -1;
      return this._toIndex(this._paramNames[0]);
    }
  }, {
    key: "_twoToIndex",
    value: function _twoToIndex() {
      if (this._paramNames.length < 2) return -1;
      return this._toIndex(this._paramNames[1]);
    }
  }, {
    key: "_searchData",
    get: function get() {
      var content = new _Content_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._type);
      return content.getContentData();
    }
  }, {
    key: "hasExpectedNumber",
    get: function get() {
      return this._expectedNumber === this._validatedNumber;
    }
  }, {
    key: "isMenu",
    get: function get() {
      return this._one === 'menu';
    }
  }]);

  return Params;
}();



/***/ }),

/***/ "./app/classes/ProjectsParams.js":
/*!***************************************!*\
  !*** ./app/classes/ProjectsParams.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProjectsParams =
/*#__PURE__*/
function (_Params) {
  _inherits(ProjectsParams, _Params);

  function ProjectsParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, ProjectsParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectsParams).call(this, type, params, ['projectName', 'projectThumbnail']));
    _this.lastProject = prevProps && prevProps.match.params.projectName;
    _this.lastProjectPicture = prevProps && parseInt(prevProps.match.params.projectThumbnail);
    return _this;
  }

  _createClass(ProjectsParams, [{
    key: "projectNameToIndex",
    value: function projectNameToIndex() {
      if (!this.projectName) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "projectThumbnailToIndex",
    value: function projectThumbnailToIndex() {
      if (!this.projectThumbnail) return -1;
      return this._twoToIndex();
    }
  }, {
    key: "projectName",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }, {
    key: "projectThumbnail",
    get: function get() {
      var paramIsValid = this._validateParam(parseInt(this._two), this._paramNames[1]);

      return paramIsValid && parseInt(paramIsValid);
    }
  }]);

  return ProjectsParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/Referrer.js":
/*!*********************************!*\
  !*** ./app/classes/Referrer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Referrer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Referrer =
/*#__PURE__*/
function () {
  function Referrer(props) {
    _classCallCheck(this, Referrer);

    if (props.location === undefined) {
      throw new Error('Caller must offer props.location.');
    }

    this.path = props.location.pathname;
    this.location = this.getLocation(props);
    this.finalPath = this._loadFinalPath();
    this.pathToMatch = this._loadPathToMatch();
  }

  _createClass(Referrer, [{
    key: "_loadPathToMatch",
    value: function _loadPathToMatch() {
      switch (this.location) {
        case 'about':
          return '/about';

        case 'chapter':
          return '/chapter/:title?';

        case 'home':
          return '/';

        case 'journalism':
          return '/journalism/:publication?/:headline?';

        case 'projects':
          return '/projects/:projectName?/:projectThumbnail?';

        case 'i':
          return '/i';

        case 'not-found':
          return '/not-found';

        case 'reverie':
          return '/reverie/:headline?';

        default:
          return '/';
      }
    }
  }, {
    key: "_loadFinalPath",
    value: function _loadFinalPath() {
      switch (this.location) {
        case 'chapter':
          return '/chapter/:title';

        case 'projects':
          return '/projects/:projectName/:projectThumbnail';

        case 'journalism':
          return '/journalism/:publication/:headline';

        case 'reverie':
          return '/reverie/:headline';

        default:
          return;
      }
    }
  }, {
    key: "getLocation",
    value: function getLocation(props) {
      var locationArray = props.location.pathname.split('/');
      var isHome = locationArray[1] === '';
      return !isHome ? locationArray[1] : 'home';
    }
  }, {
    key: "isMenu",
    value: function isMenu(props) {
      var locationArray = props.location.pathname.split('/');
      var indexOfMenu = locationArray.indexOf('menu');
      return indexOfMenu === 2;
    }
  }]);

  return Referrer;
}();



/***/ }),

/***/ "./app/classes/Reload.js":
/*!*******************************!*\
  !*** ./app/classes/Reload.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reload; });
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.js */ "./app/classes/Content.js");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Reload =
/*#__PURE__*/
function () {
  function Reload(props) {
    _classCallCheck(this, Reload);

    var currentCaller = props.appState.currentCaller;
    this._props = props;
    this._caller = currentCaller;
    this.path = this._buildPath();
  }

  _createClass(Reload, [{
    key: "_buildPath",
    value: function _buildPath() {
      var section = this._caller;

      switch (section) {
        case 'chapter':
          return this._storyPath(section);

        case 'projects':
          return this._projectsPath(section);

        case 'journalism':
          return this._articlePath(section);

        case 'reverie':
          return this._reveriePath(section);

        default:
          return '/';
      }
    }
  }, {
    key: "_normalize",
    value: function _normalize(text) {
      return Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(text);
    }
  }, {
    key: "_getContentData",
    value: function _getContentData() {
      var caller = this._caller;
      var content = new _Content_js__WEBPACK_IMPORTED_MODULE_0__["default"](caller);
      return content.getContentData();
    }
  }, {
    key: "_storyPath",
    value: function _storyPath(section) {
      var storyData = this._getContentData();

      var indexForChapterData = this._props.bodyState.indexForChapterData;
      var title = storyData[indexForChapterData].attributes.title;

      var normalizedTitle = this._normalize(title);

      return "/".concat(section, "/").concat(normalizedTitle);
    }
  }, {
    key: "_projectsPath",
    value: function _projectsPath(section) {
      var projectData = this._getContentData();

      var _this$_props$bodyStat = this._props.bodyState,
          indexForProjectData = _this$_props$bodyStat.indexForProjectData,
          indexForProjectPics = _this$_props$bodyStat.indexForProjectPics;
      var projectName = projectData[indexForProjectData].attributes.projectName;

      var normalizedProjectName = this._normalize(projectName);

      var thumbnailNumber = indexForProjectPics + 1;
      return "/".concat(section, "/").concat(normalizedProjectName, "/").concat(thumbnailNumber);
    }
  }, {
    key: "_articlePath",
    value: function _articlePath(section) {
      var articleData = this._getContentData();

      var indexForArticleData = this._props.bodyState.indexForArticleData;
      var article = articleData[indexForArticleData];
      var _article$attributes = article.attributes,
          publication = _article$attributes.publication,
          headline = _article$attributes.headline;

      var normalizedPublication = this._normalize(publication);

      var normalizedHeadline = this._normalize(headline);

      return "/".concat(section, "/").concat(normalizedPublication, "/").concat(normalizedHeadline);
    }
  }, {
    key: "_reveriePath",
    value: function _reveriePath(section) {
      var reverieData = this._getContentData();

      var indexForReverieData = this._props.bodyState.indexForReverieData;
      var headline = reverieData[indexForReverieData].attributes.headline;

      var normalizedHeadline = this._normalize(headline);

      return "/".concat(section, "/").concat(normalizedHeadline);
    }
  }]);

  return Reload;
}();



/***/ }),

/***/ "./app/classes/ReverieParams.js":
/*!**************************************!*\
  !*** ./app/classes/ReverieParams.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReverieParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReverieParams =
/*#__PURE__*/
function (_Params) {
  _inherits(ReverieParams, _Params);

  function ReverieParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, ReverieParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReverieParams).call(this, type, params, ['headline']));
    _this.lastHeadline = prevProps && prevProps.match.params.headline;
    return _this;
  }

  _createClass(ReverieParams, [{
    key: "headlineToIndex",
    value: function headlineToIndex() {
      if (!this.headline) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "headline",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }]);

  return ReverieParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/ScrollHandling.js":
/*!***************************************!*\
  !*** ./app/classes/ScrollHandling.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollHandling; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ScrollHandling =
/*#__PURE__*/
function () {
  function ScrollHandling(currentCaller) {
    _classCallCheck(this, ScrollHandling);

    this._caller = currentCaller;
  } // Only used by '/chapter' at present


  _createClass(ScrollHandling, [{
    key: "resetElementTop",
    value: function resetElementTop(overflowRef, prevProps) {
      // B/c it doesn't exist on first render of this.state.needsRedirect
      var overflowRefExists = overflowRef.current !== null;

      if (overflowRefExists) {
        if (overflowRef.current.scrollTop !== 0) {
          if (false) {}

          overflowRef.current.scrollTop = 0;
        }
      }
    }
  }, {
    key: "resetWindowTop",
    value: function resetWindowTop() {
      // Useing pageYOffset instead of scrollY
      // for cross-browser support, per MDN
      if (window.pageYOffset > 0) {
        if (false) {}

        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }]);

  return ScrollHandling;
}();



/***/ }),

/***/ "./app/classes/State.js":
/*!******************************!*\
  !*** ./app/classes/State.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var _Referrer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Referrer.js */ "./app/classes/Referrer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var State =
/*#__PURE__*/
function () {
  function State(props, location) {
    _classCallCheck(this, State);

    var referrer = new _Referrer_js__WEBPACK_IMPORTED_MODULE_0__["default"](props);
    this._props = props;
    this._referrer = referrer;
    this._params = location.params;
  } // A convenience method for the constructor in
  // Body and ContentLoader for initial state


  _createClass(State, [{
    key: "getIndex",
    value: function getIndex(type) {
      var params = this._params;
      var referrer = this._referrer.location;
      var index;

      switch (type) {
        case 'article':
          if (referrer === 'journalism') {
            index = this._params.headlineToIndex() !== -1 ? this._params.headlineToIndex() : this._params.firstArticleToMatchPublication;
          }

          break;

        case 'chapter':
          if (referrer === 'chapter') {
            index = params.titleToIndex();
          }

          break;

        case 'project':
          if (referrer === 'projects') {
            index = params.projectNameToIndex();
          }

          break;

        case 'projectPics':
          if (referrer === 'projects') {
            index = params.projectThumbnailToIndex();
          }

          break;

        case 'publication':
          if (referrer === 'journalism') {
            index = params.publicationToIndex();
          }

          break;

        case 'reverie':
          if (referrer === 'reverie') {
            index = this._params.headlineToIndex();
          }

          break;

        default:
          break;
      }

      return index && index > -1 ? index : 0;
    } // Filters out naked calls to, e.g., /chapter

  }, {
    key: "_indicesAreGreaterThanOrEqualToZero",
    value: function _indicesAreGreaterThanOrEqualToZero(indices) {
      return indices.one !== -1 && indices.two !== -1;
    }
  }, {
    key: "rebuildBody",
    value: function rebuildBody(setState) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
        setState(indices.one, indices.two);
      }
    }
  }, {
    key: "rebuildContentLoader",
    value: function rebuildContentLoader(setState) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
        setState('updateState', indices.one, indices.two);
      }
    }
  }, {
    key: "_illustrationState",
    value: function _illustrationState(images) {
      var chapterIndex = this._convertParamsToIndices().one > -1 ? this._convertParamsToIndices().one : 0;
      var isComplete = images["chapter-".concat(chapterIndex + 1, "-main")].complete;
      return !isComplete ? (chapterIndex + 1) * -1 : chapterIndex + 1;
    }
  }, {
    key: "checkIllustrationState",
    value: function checkIllustrationState(images) {
      if (!!images) {
        // Can only be called if /chapter...
        return this._illustrationState(images);
      } else {
        var _this$_props$appState = this._props.appState,
            currentCaller = _this$_props$appState.currentCaller,
            _images = _this$_props$appState.images;

        if (currentCaller === 'chapter') {
          return this._illustrationState(_images);
        }

        return 0;
      }
    }
  }, {
    key: "resetIllustrationState",
    value: function resetIllustrationState(setState) {
      setState('updateIllustrationState', this.checkIllustrationState());
    } // Returns: { one: val, two: val }

  }, {
    key: "_convertParamsToIndices",
    value: function _convertParamsToIndices() {
      var params = this._params;
      var referrer = this._referrer.location; // Variables will only be -1 if explicitly set by a params method
      // Thus, single param routes will pass the rebuild test w/o fuss

      var indexOne;
      var indexTwo;

      switch (referrer) {
        case 'chapter':
          indexOne = params.titleToIndex();
          break;

        case 'journalism':
          indexOne = params.publicationToIndex();
          indexTwo = params.headlineToIndex();
          break;

        case 'projects':
          indexOne = params.projectNameToIndex();
          indexTwo = params.projectThumbnailToIndex();
          break;

        case 'reverie':
          indexOne = params.headlineToIndex();
          break;
      }

      return {
        one: indexOne,
        two: indexTwo
      };
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./app/classes/StoryParams.js":
/*!************************************!*\
  !*** ./app/classes/StoryParams.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoryParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StoryParams =
/*#__PURE__*/
function (_Params) {
  _inherits(StoryParams, _Params);

  function StoryParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, StoryParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoryParams).call(this, type, params, ['title']));
    _this.lastChapter = prevProps && prevProps.match.params.title;
    return _this;
  }

  _createClass(StoryParams, [{
    key: "titleToIndex",
    value: function titleToIndex() {
      if (!this.title) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "title",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }]);

  return StoryParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/data/about/about.md":
/*!*********************************!*\
  !*** ./app/data/about/about.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"about","altImageText":"A young teenage boy with big brown eyes stands in front of a textured yellow background. His left hand on hip, the young man wears a mint-green sweatshirt with dark circles ringing the upper part of each arm, dark blue jeans, and light green 3/4-top Converse sneakers. A magical fairy floats by his left shoulder, fairy dust sparkling around her.","updated":"11-11-18"},"body":"\nI write code for Web sites and software. I tell stories, too.\n\nThat's important. It means I don't just mechanically code software. I try to figure out — and keep sight of — the stories that drive it. I always have.\n\nAs a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And, as a lawyer, I crafted stories that made legal arguments. \n\nSee that — all stories, all the time. \n\nSo. What's yours?\n\n-j\n","frontmatter":"page: about\naltImageText: \"A young teenage boy with big brown eyes stands in front of a textured yellow background. His left hand on hip, the young man wears a mint-green sweatshirt with dark circles ringing the upper part of each arm, dark blue jeans, and light green 3/4-top Converse sneakers. A magical fairy floats by his left shoulder, fairy dust sparkling around her.\"\nupdated: 11-11-18"}

/***/ }),

/***/ "./app/data/clips sync recursive \\.md$":
/*!***********************************!*\
  !*** ./app/data/clips sync \.md$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blouin-news-a-huge-tech-v-startup-battle-simmers.md": "./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md",
	"./blouin-news-can-apple-be-out-appled.md": "./app/data/clips/blouin-news-can-apple-be-out-appled.md",
	"./blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md": "./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md",
	"./forbes-all-things-considered.md": "./app/data/clips/forbes-all-things-considered.md",
	"./forbes-boxee-wants-to-kill-your-television.md": "./app/data/clips/forbes-boxee-wants-to-kill-your-television.md",
	"./forbes-godtube.md": "./app/data/clips/forbes-godtube.md",
	"./forbes-how-to-make-readers-really-want-you.md": "./app/data/clips/forbes-how-to-make-readers-really-want-you.md",
	"./forbes-live-from-the-internet.md": "./app/data/clips/forbes-live-from-the-internet.md",
	"./forbes-owning-the-news.md": "./app/data/clips/forbes-owning-the-news.md",
	"./forbes-putting-newspapers-on-trial.md": "./app/data/clips/forbes-putting-newspapers-on-trial.md",
	"./forbes-rupert-murdoch-big-man-on-campus.md": "./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md",
	"./forbes-slowing-fast-company.md": "./app/data/clips/forbes-slowing-fast-company.md",
	"./forbes-strapped-local-stations-look-to-web-for-cash.md": "./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md",
	"./forbes-the-paperless-town.md": "./app/data/clips/forbes-the-paperless-town.md",
	"./ft-electronic-arts-standing-firm-on-usd-26-offer.md": "./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md",
	"./shu-breaking-news-online.md": "./app/data/clips/shu-breaking-news-online.md",
	"./shu-cracking-the-college-code.md": "./app/data/clips/shu-cracking-the-college-code.md",
	"./shu-giving-physics-a-good-name.md": "./app/data/clips/shu-giving-physics-a-good-name.md",
	"./shu-the-bone-doctors-knees.md": "./app/data/clips/shu-the-bone-doctors-knees.md",
	"./shu-the-clean-air-catalyst.md": "./app/data/clips/shu-the-clean-air-catalyst.md",
	"./slate-adventures-in-state-bailouts.md": "./app/data/clips/slate-adventures-in-state-bailouts.md",
	"./uva-charting-an-east-west-passage.md": "./app/data/clips/uva-charting-an-east-west-passage.md",
	"./uva-is-the-wine-trade-recession-proof.md": "./app/data/clips/uva-is-the-wine-trade-recession-proof.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/clips sync recursive \\.md$";

/***/ }),

/***/ "./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md":
/*!****************************************************************************!*\
  !*** ./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"A huge Tech vs. Start-up Battle Simmers","publication":"Blouin News","position":"Freelance"},"body":"\nA new battle in the war between lithe start-ups and huge tech is\nsimmering.\n\nIt’s been bubbling for some time. But Intel brought the next major round\ncloser to a head last week when it said it would buy start-up Mashery for\na reported \\$180 million. The seven-year-old business helps people manage\ntheir application programming interfaces, or APIs.\n\nAn API is like the connector on a Lego block. Developers use it to connect\nsites and apps to a variety of technologies. Thus, they don’t have to\ncreate these technologies on their own.\n\nIntel’s move is simultaneously important and ironic. It was once a part of\nthe same start-up scene it is now trying to penetrate by buying Mashery.\nSo, on one hand, Intel wants to be at the center of an Internet-focused\ndeveloper ecosystem. But, on the other, the need to buy into it shows huge\ntech firms like Intel need help relating to a lot of these start-up\ntechnologists.\n\nAs an example, take its new foray into media. Intel is developing a\nsubscription-based online TV service. It wants to compete with cable\ncarriers by selling a high-end package of highly interactive video\nprogramming delivered via its own set-top box.\n\nForget the merits of the strategy. What’s interesting is that the start-up\necosystem is loaded with companies pursuing similar businesses. These\nrange from helping producers sell video to audiences directly, to using\nsocial media to aggregate video into personal channels.\n\nIn other words, Intel wants to use Mashery to help these smaller players\nshape markets, and it also wants to compete with them by dominating the\nsame markets they are trying to shape.\n\nClearly, the relationship between huge tech and newer Internet-based\ndevelopers is complicated.\n\nMost of these developers want to build software quickly using self-serve,\nplug-and-play technologies, such as APIs. By contrast, huge tech often\nworks more slowly, jumps into big markets directly, and prefers software\nthat relies on high-cost components and services.\n\nThe problem is that the start-up approach is less profitable, which is\nunsettling for huge tech.\n\nTake Oracle. When it bought Sun Microsystems in 2009, the famed MySQL\ndatabase came with it. MySQL is free-to-use, so is relied on by a lot of\nInternet-era developers. But, in 2011, Oracle added some extensions to it\nthat aren’t as free-to-use as many of these developers would like.\n\nThat decision helped encourage a group of them to create a new,\nindependent version named MariaDB. Now, talk is bubbling up online about\nswitching between the two databases.\n\nThe example shows how hard it can be for huge tech to work with developers\nwho were formed in the Internet age. In other words, can Intel buy Mashery\nand satisfy this part of the start-up’s clientele, or will it set policies\nthat push them toward rivals like Apigee, MuleSoft, or 3scale?\n\nMicrosoft, the poster child of huge tech, is the canary in this coal mine.\nIt followed Amazon online to offer a “cloud” services platform roughly\nthree years ago. Its Windows Azure is reportedly pretty good, but hasn’t\nstoked the same fire online as Amazon’s Web Services division.\n\nThat’s one reason Microsoft recently said it will match some of Amazon’s\nWeb Services pricing. It’s also been adding features to woo more\nInternet-oriented developers.\n\nMoves like these could establish whether huge tech can co-exist with\nnew-era software firms – or if these start-ups will shrink the technology\nbusiness as much as they’ve shrunk everyone else’s.\n","frontmatter":"headline: 'A huge Tech vs. Start-up Battle Simmers'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/blouin-news-can-apple-be-out-appled.md":
/*!***************************************************************!*\
  !*** ./app/data/clips/blouin-news-can-apple-be-out-appled.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Can Apple Be Out-Appled?","publication":"Blouin News","position":"Freelance"},"body":"\nCan Apple wow the world a third time? It certainly seems to think so.\n\nTim Cook, Apple’s chief executive, gave a long interview to the Wall\nStreet Journal this month. The top executive used the conversation to\naddress persistent concerns among investors that Apple is fresh out of\ninnovative new ideas. He assured it that Apple is working on new product\ncategories.\n\nIn other words, it’s working on products that are different from the\ncomputers, smartphones and tablets, it sells today. But, that doesn’t mean\nApple is working on products that no one has ever seen before. That’s what\npeople expect from it these days. After all, its most recent successes\nstemmed from its uncanny ability to release products that no one’s ever\nseen before.\n\nFor instance, Google built a phone prior to the iPhone’s arrival. But, it\nwasn’t anything like the all-glass, futuristic smartphone Apple imagined.\nAs a result, Google reportedly scrapped its project to start again. The\niPad offers a similar story. Microsoft called tablets the future of\ncomputing for years. And yet, people ignored the message.\n\nWhy? They didn’t really like Microsoft’s Windows-centric vision of tablet\ncomputing. But, they liked Apple’s. So, as far as anyone is concerned, it\ninvented both markets from whole cloth.\n\nBut, things have changed. The world watched Apple’s incredible magic trick\ntwice now. So, a lot of equally wealthy and intelligent companies have\ninvested a lot of money in following suit. This is especially clear in \nthe arena of “wearable computers.”\n\nIn 2012, a lot of people decided these devices were the best way to\nout-Apple Apple.\n\nThe idea was arguably jump-started by a small startup named inPusle (now\nPebble). The company shattered records in mid-2012 when people gave it\nover \\$10 million on Kickstarter to help it build its Pebble smartwatch.\nThe Pebble moment made it famous, and suggested a huge untapped market for\nwearable computers.\n\nGoogle reinforced the point by showing off a Google Glass prototype around\nthe same time. Glass is a monocle that people wear over one eye to project\na digital landscape on the world around them.\n\nThen, the floodgates seemed to open.\n\nNike released the Fuelband in 2012, helping to kick off a genre of\nhigh-tech bracelets that track telemetry about the human body. A year\nlater, Samsung released its Galaxy Gear smartwatch. And, companies like\nGoPro released a new generation of small wearable video cameras to help\npeople record themselves 24/7. They must be somewhat popular. GoPro is now\ngoing public.\n\nNot enough? Oculus VR also blew people’s minds in 2012 when it\nsuccessfully Kickstarted its new take on virtual reality goggles. Like the\nPebble, the Oculus Rift inspired the imagination. Since then, several\ncompetitors have appeared with their own take on Oculus’s inspired idea.\n\nThe point here is that new product categories have exploded.\n\nNew ones could still come along, but that’s probably less likely than\never. Let’s consider this in the context of some of biggest and brightest\nrumors about Apple’s new technologies. The next version of iOS is said to\nbe focused on tracking health stats about its users. This would put it in\ndirect competition with a limitless universe of Apple-compatible health\ngadgets.\n\nSimilarly, Apple is said to be working on some sort computer-based TV or\nset-top box. This market is already flooded with entrants. And, a new\nrumor surfaced just this month that Apple has 200 people working on a new\nsmartwatch.\n\nApple has a better shot than anyone at getting these products just right.\nBut, for the first time in years, its new technologies could also just get\nlost in a sea of gadgets — like tears in rain.\n","frontmatter":"headline: 'Can Apple Be Out-Appled?'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md":
/*!***********************************************************************************************!*\
  !*** ./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Commodity Beckons New TV Services from Comcast, Microsoft, and More","publication":"Blouin News","position":"Freelance"},"body":"\nGracenote offered an important lesson about internet technology last week.\n\nThe company, best known for technology that identifies music, released a\ntool that helps developers build apps that know what is playing on nearby\ntelevision sets. The tool, named eyeQ, uses a mobile device’s built-in\nmicrophone to compare a show’s audio with an online database about TV.\nThis means the device can be turned into a second screen featuring\ninteractive content about the show.\n\nTelevision networks thought this kind of “audio fingerprinting” would help\nthem stave off new online media rivals just a few years ago. For instance,\nThe Nielsen Company, which tracks TV ratings, introduced a similar\ntechnology in 2010 for its partners named Media-Sync. The ABC TV network\ngot an Emmy nomination by using it with some shows, including “Grey’s\nAnatomy.”\n\nNow, thanks to Gracenote, anyone can do the same thing.\n\nThe new reality is a powerful reminder that media isn’t the only thing\nturning into a commodity online. Technology is too. The lesson comes at an\nimportant moment for big TV firms and huge tech companies. Both groups are\nreadying a new generation of TV services that will add internet-style\ninteractivity to traditional video programming.\n\nThe biggest splash is coming from Microsoft right now. It unveiled the\nXbox One last month. The next generation game-turned-entertainment box is\nbilled as an entertainment extravaganza. The top of Microsoft’s newly\nformed entertainment studios says the device will merge high-end\nstory-telling with incredible interactivity.\n\nBig media execs are excited. Steven Spielberg is developing a TV show for\nthe Xbox One that’s set in the Halo video-game universe. And both the NFL\nand ESPN sports network are planning content for the box too.\n\nMicrosoft isn’t the only one betting on a new closed, but highly\ninteractive TV service.\n\nIntel is developing its own set-top box and service with similar\naspirations. Comcast is preparing new internet-based technology to more\neasily combine its video with interactive features. And Time Warner Cable\nplans to send video directly to internet TVs from Samsung through an app\nthat will make its video very interactive.\n\nThese companies all hope their sophisticated new services will beat back a\nsea of internet rivals.\n\nGlenn Britt, the chief executive of Time Warner Cable, puts it like this:\n“I think all this over-the-top stuff [internet media] is largely about\nfunctionality that’s enabled by technology that people haven’t been able\nto get with our traditional technology.”\n\nThat is true. The problem is that the “traditional technology” operated in\na vacuum. Only a few companies could afford to build and run broadcast,\ncable, or satellite transmission systems.\n\nNow, the internet lets anyone build their online equivalent. In other\nwords, Britt and company are creating technology that won’t stay unique\nfor long. It’s only a matter of time before someone offers a cheaper,\neasier, more advanced internet version that anyone can use.\n\nThis “Gracenote problem” is just a fact-of-life today.\n\nMedia-tech executives are sure to say they still have the advantage. After\nall, they have the professional TV shows that people love. They’d be right\nif their lock on this type of content hadn’t just officially slipped.\n\nThis month, DreamWorks Animation – a major Hollywood studio – said it\nwould produce 300 hours of serialized TV programming for Netflix. The\nstudio has struggled to find hits of late, so wants to exploit the biggest\nunexploited opportunity it can find. Apparently, that’s internet-only\nvideo. The big studio’s embrace of Netflix is huge.\n\nIt means broadcast and cable companies are no longer seen as the masters\nof the market’s best video. Thus, their new systems – and huge tech’s too\n– are destined to compete with smaller online rivals that pair equally\ngreat technology with equally great video.\n\nDon’t worry, though. Gracenote will still know what you’re watching.\n","frontmatter":"headline: 'Commodity Beckons New TV Services from Comcast, Microsoft, and More'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/forbes-all-things-considered.md":
/*!********************************************************!*\
  !*** ./app/data/clips/forbes-all-things-considered.md ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"All Things Considered Digitally","publication":"Forbes","position":"Staff reporter"},"body":"\nNational Public Radio has seen its share of shake-ups lately, including\nthe departure of chief executive Ken Stern in March. Soon after, an NPR\njournalist reported the reason was a failure \"to convince the board where\nlocal stations fit into the digital age, when listeners can bypass\nold-fashioned FM stations.\" Like all media, NPR — which supplies\nprogramming to over 860 local radio stations — is struggling with the\nresults of the Internet's ability to cheaply distribute content.\n\nLate last month, Kinsey Wilson joined NPR as senior vice president and\ngeneral manager of NPR Digital Media from Gannet-owned USA Today, where\nhe was executive editor. One early goal: to boost NPR's traffic, which\ncomScore estimates at some 2.2 million unique visitors in September.\nForbes.com talked with him about the future of public radio and the role\nof its 38-year old affiliate network. Here's an edited version of what he\nhad to say:\n\n**Forbes.com: What attracted you to the NPR job after running Internet\noperations at USA Today?**\n\nKinsey Wilson: I think NPR is at a point where it's really poised to take\nadvantage of digital. I don't think, in the long term, we can think of\nourselves as a radio or purely as an audio news organization.\n\n**Do you have any examples of how that's coming along?**\n\nWe're in the process of integrating our editorial digital staff and the\nrest of the editorial staff. Dick Meyer, who heads the Digital Editorial\nStaff, reports to me and to Ellen Weiss, who is the VP for news.\n\n**Increasing the unique visitors to NPR content is a priority online, how\ndo you accomplish that?**\n\nWe've moved from being primarily destination sites to moving into an arena\nwhere it is all about distributed media. We've got an architecture that\nsupports open distribution of our content. So you try to create a virtual\ncircle between high-quality content, ease of distribution and a connection\nwith audiences that inspires them to distribute links, etc. ... I think\nthat's where the real opportunity for traffic growth is.\n\n**So you are trying to work with the local affiliates digitally and not\nsupplant them?**\n\nDeepening and improving our relationships with our member stations is a\nbig priority. It's difficult to say exactly how technology will change the\nways in which the content is distributed and the relationship between the\nmember stations and NPR in Washington.\n\n**If you're looking at consumer preference, the answer may not be the\nlocal affiliate's site. What then?**\n\nIn this environment you cannot ultimately fight the tide of consumer\npreference. I think the good news is that that's the subject of open,\ntransparent, healthy conversation within the organization at this point.\n\n**But you think there's time to figure it out?**\n\nThe speed in which our business is being challenged is very different than\nthat of most of our commercial brethren. It does so far have the advantage\nof not being forced to react to things in quite the same kind of time\nframe. [One reason is] our audience is growing. There is a tremendous\nopportunity for the local stations, particularly with newspapers suffering\nthe kind of staff cuts and reductions that they have, to become an even\nmore robust provider of news to their communities.\n\n**Does NPR offer something particularly valuable to digital news\nconsumers?**\n\n[People] want analysis. I think they also want a connection with\nindividuals; they want to understand something about the person that\nstands behind the news report. I think the mix of authority and\nfamiliarity that NPR has managed to combine on air is something that\ntranslates very nicely to the Web, where the traditional, formal voice of\nauthority of a newspaper or even a traditional network television\nbroadcast does not meet the expectations of Web readers.\n","frontmatter":"headline: 'All Things Considered Digitally'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-boxee-wants-to-kill-your-television.md":
/*!**********************************************************************!*\
  !*** ./app/data/clips/forbes-boxee-wants-to-kill-your-television.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Boxee Wants to Kill Your Television","publication":"Forbes","position":"Staff reporter"},"body":"\nAvner Ronen thinks he can kill cable television. How? With software that\naggregates all the Web's video, music and media into a slick interface.\n\nWhat's more, Ronen thinks he can convince broadcasters and others to\nencourage cable's death by paying him a $.05 to $.10 fee every time\nsomeone watches or listens to something his software recommends.\n\n\"We think it becomes a cable replacement for a lot of young people,\" says\nRonen, who has raised $1 to $3 million for his New York-based start-up,\nBoxee.\n\nCrazy? Maybe. Gutsy? You bet. While there's no shortage of people looking\nto steal a television advertising market worth some \\$65 billion, Boxee's\nfive founders — who learned their trade working in the Israeli army —\nthink they can take advantage of content producers' need to find audiences\nby creating what is essentially a television with limitless channels and\nofferings that's easy to use. Kind of a personalized YouTube on your\ndesktop.\n\nBoxee's server makes recommendations to people based on their past\npreferences, the media stored on their hard drives and what friends from\nsocial networks prefer. Essentially, it \"moves\" content, creating an\nadvertising incentive for media to give him a cut of ad sales. Ronen\nargues, people — particularly kids — will instantly give up cable service\nif Internet media were easily aggregated in one place.\n\nAt the moment, there is little data to support his idea. But there is\nplenty that shows Web video is exploding. According to a study by\nForrester Research earlier this month, 40% of Internet users watch more\nthan an hour of online video a week, and some 55% of them are 13 to 34\nyears old. ABI Research reported the number of consumers watching video in\nan Internet browser doubled in the last year to some 63% in a study of 985\nhouseholds; comScore said in July that 75% of all Internet users are\nwatching video online; and Cisco Systems recently reported its expectation\nthat Internet traffic for video seen on a computer will account for some\n25% of all Internet traffic this year. It was 11% in 2006.\n\nStill, Howard Horowitz, whose Horowitz Associates researches the cable and\nInternet industries, says there are no real studies investigating a link\nbetween increasing Web video consumption and canceled cable subscriptions.\n\"In a linear sense, it's very hard to make a prediction,\" he says of how\nthe field develops. His data show cable subscriptions for the 18 to 34 set\nhave only decreased 10% since 2005, usually in favor of technologies such\nas digital cable. But a representative notes it's still in its early days,\nand Horowitz is continuing to study the topic in greater depth.\n\nRonen says the future is clear. And, he says, he's already found the\npeople who prove the point: Apple users (he is one). The famously young,\nhip group is ready to turn their iBooks and iMacs into televisions and\nstereos that tap all Internet media, he says. While Apple's Front Row\ntries to do it, Ronen says it fails by being tightly tied to the company's\niTunes media store. Boxee's first version has been written for the Mac.\n\nEarlier this month, they released instructions to easily upgrade (or hack)\nan AppleTV with their software. (They've also hacked Apple's remote to\nwork with it.) The company claims far more than 10,000 people are already\nusing Boxee in a private test and says a similarly sized group has signed\nonto a waiting list to join them. The software goes public later this\nyear.\n\nIf it sounds a bit grand, it is. Despite a novel business model, Boxee's\ngot its share of challenges ahead. The first is that, despite its claims,\nit doesn't currently aggregate all the Web's video — but it is getting\nbetter. This week it added CBS, Comedy Central, MySpaceTV and Hulu to its\nrepertoire. Ronen also says Boxee's in talks with all the major networks\nand content aggregators like Netflix to fix that. Why shouldn't they work\nwith him, argues Ronen, if he can find them viewers to increase the volume\nof ad sales.\n\nAnother equally thorny problem: To access all the media stored on a hard\ndrive, Boxee does not run inside a Web browser. Forcing people to download\nsoftware is increasingly impossible in an Internet world that accesses\ninformation and programs via the Web. The strategy just about killed off\nJoost — a high profile Web video portal that raised \\$40 million from the\nlikes of CBS and Viacom — earlier this year. Boxee is now working with\nJoost, which recently launched a browser version, on a new partnership.\n\nOne thing is for sure, Horowitz says. The stakes are as big as Ronen\nthinks. \"If big media is going to be complacent, they'll lose going\nforward.\"\n","frontmatter":"headline: 'Boxee Wants to Kill Your Television'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-godtube.md":
/*!******************************************!*\
  !*** ./app/data/clips/forbes-godtube.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"GodTube","publication":"Forbes","position":"Staff reporter"},"body":"\nWhen Bobby Gruenewald joined LifeChurch.tv as a pastor in 2001, he turned\nto an obvious place to build membership: the Internet. A former technology\nexecutive, the daily tools of his trade are social media forums like\nFacebook and Twitter and a free iPhone application with a Bible translated\ninto 22 languages.\n\n\"The church, the broader church, is finally seeing ways to engage with\npeople,\" says Gruenewald, who oversees all of his church's Web operations.\nWhile his 13-year-old evangelical organization has attendance of some\n23,000 people at 13 physical churches around the country, its online tools\nare a key element in attracting new members. And particularly important\nthese days are the 1,800 Web video streams it serves up on average for its\n11 weekly sermons.\n\nSome of the same forces destroying major media are changing the face of\neven the world's oldest media formats like sermons. From News Corp.'s\nrecently acquired Beliefnet to the user-generated video start-up GodTube,\nthe Web is becoming an online hub for religious communication. As a\nresult, churches are using Web video to attract the next generation of\nparishioners.\n\n\"I see a lot of people expecting it or asking for it,\" says Alex Hood, the\nCrossing Church's director of media and technology. Today, his Tampa,\nFla.-based evangelical church streams services to some 500 to 600 people\nevery weekend. Just 18 months ago, when Hood started, it was far smaller\nat only 150.\n\nThose numbers may be set to jump this month as churches capitalize on the\nChristmas season. Multicast Media, which negotiates discounted rates from\nthe content delivery network Akamai to stream these services for some 800\nmostly evangelical churches around the U.S., predicts it will serve up\nwell over 5,000 live streams this month.\n\nMost months average 4,000 — a number that already represents tremendous\nrecent growth. Alan Riley, director of Web operations, says the\neight-year-old company was averaging just 2,000 monthly streams 18 months\nago.\n\n\"The growth has continued in spite of the economic slowdown,\" he says. No\nwonder. Religious groups are looking for younger parishioners, says\nQuentin Schultze, a communications professor focusing on religion at\nCalvin College in Michigan. The Internet has made competing for their\nattention harder than ever he says. The Internet is teaching people —\nparticularly younger ones — that they can demand convenience in how they\nconsume all types of messages, including religious ones.\n\n\"I think that goes to the cultural shift of the younger generations coming\nup, and getting used to an on-demand lifestyle,\" says Greg Stielstra, who\njust co-wrote a book called Faith-Based Marketing: The Guide To Reaching\n140 Million Christian Consumers.\n\nOne big difference between media sites and religious ones: how long\nviewers stay tuned. Consider the Crossing Church where Hood reports\nviewers watch his streams for an average of 60 to 80 minutes. At\nLifeChurch.tv, the time is less at 25 to 35 minutes, but Gruenewald says\nthey are thrown off by massive accidental Web traffic of people he doesn't\naverage into his stream totals because they leave so quickly.\n\nThough it depends on the type of content in a broadcast, Dan Rayburn,\nexecutive vice president of StreamingMedia.com, says people often watch\nlive events online for 10 minutes or less.\n\nIt isn't all good news. Streaming Web video gets more expensive the more\npopular it becomes, so in the early days Rayburn says the cost of\ndelivering thousands of gigabytes per show to hundreds of people over the\nInternet can be relatively inexpensive based on rates that range as high\nas \\$0.50 per gigabyte. But the more people start tuning in, the bigger the\ncost becomes.\n\nAnd online viewers tend to donate less as well. At LifeChurch.tv people\ngive an average of $8 to$10 per week online — far lower than the $25-$35\nthey donate in person. Perhaps it's not surprising then that the church\nsees the format as a way to help drive people to physical locations,\nrather than a destination in itself.\n\n\"We're not viewing it as how can we make it be the big revenue stream for\nthe church,\" says Gruenewald.\n","frontmatter":"headline: 'GodTube'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-how-to-make-readers-really-want-you.md":
/*!**********************************************************************!*\
  !*** ./app/data/clips/forbes-how-to-make-readers-really-want-you.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"How to Get Readers to Really Want You","publication":"Forbes","position":"Staff reporter"},"body":"\nForget Anna Wintour, famed editrix of Vogue. Just like New York's Fashion\nWeek, which ended last Friday, she's so over. The big ideas for keeping\nVogue hot are coming from the business department down the hall — and it\nis betting big on the appeal of Web television.\n\nAt the top of the list: Model.Live, a 12-episode Web video series now\nplaying on Vogue.TV that follows three young women as they try to break\ninto the business while journeying to Fashion Weeks around the world. The\nshow has been viewed over a million times across the Internet since\nlaunching in late August.\n\nNot only is there original content under the Vogue name, but there's money\nbehind the effort too: The show is sponsored by EXPRESS.com and produced\nby IMG Sports & Entertainment. Vogue is coy about the numbers, but some\nreports place production costs at $3 million. With single magazine ad\n  pages going for as much as$121,000, show sponsors may be getting\nexclusive access toVogue's name — in full motion video — on the cheap.\n\nThat's quite a powerful advertising pitch for the magazine industry. Faced\nwith declining circulation and stagnant Web strategies, print products\nlike Vogue are becoming online television networks. Last week, Vogue-owner\nConde Nast launched Glamour.TV for Vogue's sister magazine.\n\n\"The advertisers are pursuing what's trendy,\" says Rebecca McPheters, a\nmagazine industry consultant. \"This way, the magazine publishers can say\nwe're aggressively growing and developing new media as well.\"\n\n\"Branded\" shows like Model.Live are an increasingly popular route into the\nWeb TV business. Unlike video ads sold against editorially created Web\nshows, advertisers work directly with business departments to create and\nunderwrite branded programs. It's a cost effective model because it\ndoesn't steal editors away from focusing on the print publication.\n\nThat is, after all, where Vogue still makes its money. Last year, the\nPublisher's Information Bureau reported it had roughly \\$419 million in\nsales from some 3,201 ad pages.\n\nPutting Vogue's business chief, publisher Tom Florio, in charge of content\nnamed afterVogue is a powerful example of how far magazines will go to\nreinvent themselves as powerhouse digital properties.\n\nTinkering with an editorial model that has kept Vogue printing for 116\nyears may be necessary. In the first six months of 2008, Vogue's paid\nsubscriptions fell 2.1% by dropping year-over-year to 782,397. More\ntroubling, Compete.com reports its Style.com Web site only had some\n565,000 unique visitors in August. That's not much compared to the almost\n4.8 million visitors at Glam.com, an Internet media upstart that caters to\nwomen about topics like fashion.\n\nA Vogue spokesperson counters that Compete’s numbers are unreliable and\nsays Conde Nast’s internal figures show some 1,474,340 unique visitors to\nStyle.com last month.\n\nStill, what seem clear is that dangerous fault lines are forming beneath\nsome of the industry's biggest names. Though Florio saysVogue is set to\nhave its second-best year of ad sales ever, he's worried about keeping the\nbrand relevant for the next generation of readers. So he — not Wintour —\nis creating Web shows like Model.Live with his 16-year-old daughter in\nmind.\n\n\"I'm comfortable with it, because I feel that the principals of what we're\ndoing are based on the same principals as the brand,\" he says. If Wintour\nobjected to the content, he says he would kill it. A Conde Nast\nspokesperson said that Wintour understands Vogue.TV is run by the business\ndepartment and stays informed about its programs. Wintour is attending\nFashion Weeks in Paris and Milan and was unavailable for comment.\n\nAt the helm of Vogue.TV, Florio is able to experiment with the medium in\nways Wintour can't by offering advertisers like Express a value the\nmagazin can't provide.\n\nFor instance, the clothing company sells clothes directly to the Vogue.TV\naudience in an e-commerce store that sits beside eachModel.Live video.\nExpress keeps the sales in an effort to avoid diluting Wintour's\nfashion-setting tastes. \"What we're doing is a cost-effective business\nmodel,\" says Florio.\n\nIf he can build a business off of these Web shows, the upside for Vogue\ncould be compelling. Web video portals are hungry to find fresh content\nthey can syndicate that isn't tangled up in the complex licensing rights\nthat often gum up deals with network or cable shows.\n\n\"I can assure you that Vogue did not give us their content for free,\" says\nTidalTV CEO Scott Ferber. His site is one of five Web video sites on which\nModel.Live is also being distributed. \"They are making money on it.\" That\ncould wind up being a sweet new source of revenue forVogue.\n\nStill, syndication fees like these are based on the reputation of Vogue\nand its editors — not partners like Express. That highlights the risk:\nThese new efforts could dilute the Vogue brand.\n\n\"I talk about the 'elasticity of content' — how far out can you take it to\nsatisfy advertisers is something of a concern for sure,\" says Tom Hartle,\nowner of the influential music magazine Spin. Also facing circulation\ndecline, his magazine is about to announce its own branded show about\ninternational music that will run in 63 markets worldwide. \"I think a lot\nof this innovation is coming out of the business departments and that can\nbe problematic to the healt of the brand,\" he says.\n\nFor now, the point may be moot. Florio says Vogue.TV's shows couldn't\nsurvive without the magazine's support. So, on second thought, don't\nforget about Wintour just yet.\n","frontmatter":"headline: 'How to Get Readers to Really Want You'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-live-from-the-internet.md":
/*!*********************************************************!*\
  !*** ./app/data/clips/forbes-live-from-the-internet.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Live, from the Internet","publication":"Forbes","position":"Staff reporter"},"body":"\nSome 63.2 million television viewers tuned into the presidential debate\nTuesday night. News Corp.'s MySpace broadcast it as well. The results were\nsomewhat different.\n\n\"We think with over 100,000 views, which we've gotten every time, it's\npretty good considering it's on every television network,\" says Lee\nBrenner, MySpace's executive producer of political programming.\n\nOptimistic spin? Sure. But while watching live news on the Web remains in\nits infancy, it is gaining ground. An ABI Research study of 985 people\nfound last month that video from news sites was the second most popular\ncategory of Web video, with just under 70% viewing it.\n\nConverting that interest into live news viewership via the Internet seems\nonly natural, particularly given its presence outside the home at places\nlike work. And live news coverage may be a real boon to Web sites because\nthe events have an instantaneous value that draws people immediately to\nthem.\n\n\"In the back of everyone's head is the thought that there's a new way to\nmake money here,\" says Joey Faust, a software solutions consultant for\nNational TeleConsultants, which builds production facilities for big media\nnetworks like the Fox Business Network. He says his clients are heavily\ninvesting in production facilities that can quickly, easily — and\nsimultaneously — distribute video content via traditional networks and the\nInternet.\n\nNews Corp. and General Electric's NBC Universal both show signs they agree\n— and that they want more online viewers than MySpace has delivered to\ndate. The two networks agreed this week to feed live video coverage of the\ndebates to their Hulu joint venture. Brenner says MySpace had no\ninvolvement in sister site Hulu's deal to showcase the debates live.\n\nHulu's broadcast was a first for the site, which in July was one of\ncomScore's top 10 Web video servers (it trailed MySpace umbrella Fox\nInteractive Media in the ranking). Citing company policy, a spokesperson\ndeclined to say how many viewers tuned in to the show. \"This is an\nexperiment in thinking about if live streaming is something people truly\nwant,\" says Hulu's Christina Lee.\n\nWhile MySpace is using the debate coverage to help raise its profile and\nattract more users, Hulu showed a 15- or 30-second paid ad before the\nstream started. The same will be done during next week's final debate.\nCuriously, NBC News provided the video feed this week and Fox News — also\nsupplying MySpace's feed — will provide it next week. Lee would only say\nboth investors offered their video feed to Hulu.\n\nHer company pushed the news value of the live video stream one step\nfurther than MySpace. It played roughly 10 minutes of NBC News' live\neditorial wrap-up after Tuesday's debate and may do the same with Fox News\nnext Wednesday. For now, that may be good news for news networks looking\nto expand audiences. Hulu expects to syndicate next week's debate across\nthe Internet by giving people a video player to embed on their own Web\nsites that will show it live.\n\nBut National TeleConsultants' Faust warns there is a flip side to the\nWeb-based video syndication model these moves represent. \"In this new\nmedia distribution model the brand is what brings you revenue,\" he says.\nAs a result, he says media businesses like Fox News may not ultimately be\nthrilled to have its identity wrapped inside a third-party entity, even\nthat of a sister company like MySpace. But with these ratings, who's\nreally counting?\n","frontmatter":"headline: 'Live, from the Internet'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-owning-the-news.md":
/*!**************************************************!*\
  !*** ./app/data/clips/forbes-owning-the-news.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Owning the News","publication":"Forbes","position":"Staff reporter"},"body":"\nPhilip Balboni thinks he can build the next great global news organization\nwith the help of an unlikely ally: Capitalism.\n\nThe chief of Boston-based Global News Enterprises, Balboni is preparing to\nlaunch a test version of his international news site later this fall, with\na full-scale debut in January. He's signed roughly 40 correspondents and\nfive regional editors with pedigrees ranging from Time Magazine to the\nAssociated Press. Reporters in Asia and Eastern Europe are up next.\nEarlier this month, GNE stole Politico's Barbara Martinez as one of its\nmanaging editors.\n\n\"We are journalist entrepreneurs, and we have to find new models for\njournalism in the digital age,\" says Balboni.\n\nHe isn't alone. From Politico to Breaking Views to the Huffington Post to\nthousands upon thousands of blogs, droves of journalists have fled\ntraditional newsrooms in the past decade looking for a way to make a\nliving from the exploding world of digital media. So far, precious few\nhave replicated the quality or impact — or profits — of the name-brand\ncompanies they left behind.\n\nBut Balboni thinks he can, using the lure of ownership. His site is hiring\nthe five regional editors — for the Americas, Asia, Africa, Europe and the\nMiddle East — and some 72 correspondents located around the world. None of\nthem will be full-time employees. Instead, each is being lured by sizable\nequity stakes (not stock options) and a five-year guarantee of monthly\nfees of about \\$1,000. Correspondents will report to regional editors, who\nwill report to the 15-person GNE.\n\n\"Foreign correspondents used to be the stars of journalism,\" he says. Now\ncutbacks have left them starved for an outlet to fund — and market — their\nreporting. He thinks he can turn it around and doesn't shy away from the\nchallenge. It isn't his first long shot. Previously, Balboni founded and\nran New England Cable News, a joint venture between Hearst Corporation and\nComcast that provides some 3.6 million homes with 24/7 regional news\nprogramming.\n\nBut finding a large enough audience interested in international news to\nsupport these journalists could be even more difficult. comScore reports\nthat U.S.-based traffic accounted for 1.8 million unique visitors to the\nU.K. newspaper the Guardian in July. The numbers are far smaller in more\nfar-flung locales. For instance, Gurgaon, India-based the Times of India\nhad 321,000 unique U.S. visitors to its site in July. Moscow-based\nRussiaToday.com had 183,000 and the site for Tel Aviv, Israel-based\nHaaretz newspaper had 167,000.\n\nBalboni knows that growing the audience — and advertising base — to the\nsize needed to pay for all this is risky, especially because he's focused\non coverage outside of popular locations like England. So, similar to the\nmodel Politico is increasingly moving toward, GNE's multimedia content\nwill be sold to newspaper sites and other English-based sites around the\nworld. Balboni will only say syndicated content will be priced based on\ncirculation size and affordable to even his \"distressed colleagues.\" One\nlarge customer has already signed up, but Balboni won't identify it yet.\n\nBeyond that, Balboni expects to experiment with \"custom reporting\" — an\non-demand service where clients can hire GNE correspondents to generate\ncustom news reports.\n\nIt may be awhile before any of these businesses return any money though,\nand he knows it. Balboni is coasting on $8 million raised from private\n  investors such as Amos Hostetter Jr., chairman of Pilot House Associates\n  and the 147th richest American by our estimates, and Paul Sagan, president\n  of Akamai Technologies. Balboni says he's hoping to hit the originally\n  projected$10 million mark in funding, but he's been too busy hiring to\nraise money lately, he says.\n\nThe media entrepreneur thinks he has time. Balboni claims he isn't angling\nto quickly build and sell the company — another Silicon Valley mantra — to\nTime Warner or The New York Times Company or News Corp. or anyone else.\nBut with all the stock he's been printing to acquire journalistic talent,\nhe says he knows his reporters and editors will be keenly focused on the\nbottom line. Actually, he's counting on it.\n","frontmatter":"headline: 'Owning the News'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-putting-newspapers-on-trial.md":
/*!**************************************************************!*\
  !*** ./app/data/clips/forbes-putting-newspapers-on-trial.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Putting Newspapers on Trial","publication":"Forbes","position":"Staff reporter"},"body":"\nSam Zell was sued in Federal Court in California yesterday by a group of\ncurrent and former Tribune Company employees. They did a lot more than go\nafter the billionaire they say ruined their company — you could make the\ncase that they've put the fast-changing newspaper business on trial, too.\n\nThe group says Zell, the Chicago real estate mogul-turned-newspaper-titan,\nhas done nothing but run down Tribune since buying it last year. But the\nsuit is so much more than an angry lashing by frustrated journalists. To\nthe group of well-known reporters that include two Pulitzer Prize winners,\nthe indictment of Zell is an angry answer to Wall Street's pessimism about\ntheir industry.\n\n\"The problem is not with the product, the problem is monetizing the\nproduct online,\" says Dan Neil, a five-year employee of the\nTribune-ownedLos Angeles Times. \"It's not journalism's problem, it might\nbe publishing's problem.\" Neil won the Pulitzer Prize for criticism in 2004.\n\nLeading the charge from the LA Times newsroom, Neil and his cadre of\nplaintiffs are claiming various violations of the Employee Retirement\nIncome Security Act (ERISA). Essentially, they allege that as members of\nTribune's Employee Stock Ownership Plan (ESOP) — which became the legal\nowne of Tribune during a complicated buyout in April of 2007 — Zell has\nbreached his duty of loyalty to Tribune's employees. The group has asked\nthe court to certify the case as a class action.\n\nZell took over Tribune last year by taking it private in an $8.2 billion\ndollar deal that left the company with more than$13 billion dollars in\ndebt. In a statement Wednesday, Zell said the lawsuit \"is filled with\nfrivolous and unfounded allegations, and I hope every partner in this\ncompany is as outraged as I am at having to spend the time and money\nrequired to defend ourselves against it.\"\n\nA case like this seems inevitable. Zell has been something of a lighting\nrod for all that journalists fear about the future of newspapers since\ntaking over Tribune. He has evaluated reporters by how many column inches\nthey produce, turned editorial publications like the Los Angeles Times\nMagazine over to advertiser control and laid off at least 1,000 employees.\n\nAnd by all accounts, he has done it with little humility, famously cursing\nat a South FloridaSun-Sentinel staff member who challenged him in January\nduring an open question and answer session with employees. \"Zell has a\nreputation of being a very, very difficult person to deal with,\" says\nNeil. Yet, the long-time reporter admits he has never tried to contact\nZell about his grievances, saying such an effort would be futile.\n\nInstead, Neil was sucked into this case in July when the law firm that\nfiled it, Cotchett, Pitre & McCarthy, quietly approached him about\njoining. The firm had been working on the suit for some months along with\nplaintiff Henry Weinstein, a lawyer and 30-year veteran of theLA Times who\ncovered the legal beat before accepting a Tribune buyout this year.\nCotchett is no stranger to big class action cases. The 27-lawyer firm\nchampions its history of working on filing big claims, such as class\nactions alleging price fixing among ocean liners and complaints against\nMerrill Lynch for hiding subprim loan losses.\n\nIf all goes well, this case could be a major talking point for the firm.\nToluca Lake, Calif.-based Dish Communications, which describes itself as a\nboutique PR firm, was distributing copies of the complaint and\ncoordinating interviews with Neil earlier this week. There is quite a lot\nto talk about.\n\nThe ramifications of Zell's — and Tribune's — actions are defined by the\nCotchett firm as nothing short of the destruction of American democracy.\n\"Sam Zell exacted a severe, long-lasting damage to an institution that\ncitizens in a democracy rely on and require to effectively speak truth to\npower,\" writes lead lawyer Joseph Cotchett.\n\nZell himself is only named in two of the complaint's eight counts. Most\ncounts focus on Tribune's existing and past board of directors, as well as\nvarious trustees for the ESOP. The complicated structure of the multi-part\nbuyout deal may be the reason why. Zell was only personally involved in it\nduring an early stage loan to Tribune that funded the repurchase of some\nof its stock.\n\nAt that time, he allegedly convinced the ESOP to pay too much for Tribune\nin acquiring the rest of its public stock — $38 per share versus a more\nreasonable value of something under$10.\n\n\"The factual scenario is something of a novel one,\" says Ian Downes, an\nERISA litigator with the law firm Dechert. He says cases like this one\ncould drag on for years and can result in millions of dollars in\nattorney's fees for a plaintiff's firm involved in the suit.\n\nNewspapers have been under siege since the technology bubble popped in the\nlate 1990s, with problems ranging from declining circulation, advertiser\nconsolidation, classified ads migrating online, rising newsprint costs,\nbloated debt structures and, yes, over-staffing. Not to mention the rise\nof Internet news.\n\n\"The industry's got enough problems not to need bad management on top of\nit,\" says Neil. Or, Zell might say, lawsuits.\n","frontmatter":"headline: Putting Newspapers on Trial\npublication: Forbes\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md":
/*!*******************************************************************!*\
  !*** ./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Rupert Murdoch: Big Man on Campus","publication":"Forbes","position":"Staff reporter"},"body":"\nHeading back to college this fall? Rupert Murdoch will be waiting.\n\nIn May, his Fox News subsidiary bought a minority stake in a Web\nvideo-based college news network featuring student reporters called\nPalestra.net. This fall, he'll be ramping up the partnership.\n\nIt's the latest — and boldest — move by a major media company to\ncapitalize on America's some 6.1 million undergrads. While outlets such\nasViacom's MTVU network and privately owned Zilo Networks have gone after\nuniversity students for years, Palestra's at the front of a new wave led\nby news outlets desperate to connect with young viewers.\n\nIn May, Disney's ABC News said it would open digital bureaus at some top\njournalism schools. And General Electric-owned NBC News recently announced\nit would be working with the New York Film Academy to train students in\ndigital journalism.\n\nPalestra.net goes further. Focusing on news, sports, business and\nentertainment features, it pays student reporters $240 to$300 to produce\nthree news packages a week for the Web site — and Fox's cable networks.\n\nMore than 10 pieces of student-reported Palestra content a week should be\nrunning on both the Fox News Channel and Fox Business Network by the fall\nas the school year restarts and the presidential campaigns swing into high\ngear. And founder Joe Weasel — a former on-air journalist for NBC\naffiliate WCMH-TV in Columbus, Ohio — says he began talking with Fox's\nlocal affiliates last week about placing Palestra content on their Web\nsites around the country, which could lead to on-air spots.\n\nFox does not editorially preselect his network's coverage, says Weasel.\nLike most news organizations, reporters dig up stories that are pitched to\nPalestra producers, some of which are further pitched to Fox. And coverage\ndiverges from the stilted accounts that older, professional reporters\noften get from students when they arrive on campus for stories about the\nstudent vote.\n\nPalestra's reporters aren't just telling the stories — they are the story.\nWhen Weasel hired student reporters Sarah Barga, Sarah Jane Dugger and\nChri Kaechele as summer interns to create a marketing campaign for\nPalestra, Fox Business Anchor Alexis Glick had them brought to New York\nfor a segment on the internship. And while there, Weasel says the three\nhad a meeting with senior Fox officials about how they saw digital media\ndeveloping.\n\nThe relationship with Fox evolved in November 2007 partially from the\nsite's content — and partially from luck. When the campus of Pepperdine\nUniversity was burning along with Malibu, Calif., wildfires in October\n2007, Palestra reporter Stephan Holt (son of broadcast journalist Lester\nHolt) dispatched a 30-second news spot about where, and how, he and fellow\nstudents were being sequestered on campus for their safety.\n\nWeasel says the coverage helped catch the attention of Joel Cheatwood,\nnewly minted Fox News senior vice president of development. He had already\nbeen introduced to Palestra while working for CNN, as the site was\nproviding CNN.com free music coverage in 2006. While Weasel says the Cable\nNews Network hadn't seen his student demographic as important, Fox did,\nand after the wildfire coverage, a content partnership with the News Corp.\nentity began.\n\nFor his part, Cheatwood says advertisers want the news business to learn\nhow to reach young audiences not tuning into traditional broadcast and\ncable news programs — and to develop stories they value. Palestra's\nalready wide reach should help with that, as well as provide Fox a new\npipeline for talent.\n\nToday, Palestra fields a staff of 125 reporters at 101 schools around the\ncountry, placing News Corp. right at the heart of the nation's student\npopulation Weasel says that's a huge advertising market. Palestra viewers\nare growing quickly, with over two million people seeing it between Fox's\nvarious channels and online distribution. He would not provide any numbers\nbut says viewer growth online is accelerating quickly following the deal.\n\nAnd though Weasel says it's too early to see the results, Murdoch's\norganization has wasted no time in taking advantage of that access. Fox\nNews too over Palestra's ad sales around June, giving it access to new\naudiences and likely a slew of new sponsors who are attracted to them.\nWeasel declined to say how ad revenues would be split and said he could\nnot predict whether a full acquisition by Fox was in his company's future.\n\nWhile Palestra incorporated software-based video ad-serving technology\nfollowing the Fox investment, the student network previously focused on\nsponsorships over ad insertions based on automatic placement. For\ninstance, Pepsi has sponsored the show \"Music at the Palestra\" via a title\nscreen.\n\nThis isn't quite network news, though, as Weasel also says a sponsor like\nPepsi may have its products placed within the show, with reporters often\nwearing clothing with a Pepsi logo. Weasel acknowledges that the technique\ndoesn't work for every type of program — for instance, hard news — but the\none-time Ohio State University journalism professor says the tactic is\nfine for others.\n\nThere's another likely reason for News Corp.'s interest in Palestra:\nFacebook. The news network gives Murdoch a direct path to his MySpace\nrival. With student reporters using their own Facebook pages — and a\nPalestra.net company page — to post links and information about their\nonline and offline news reports, News Corp. gains a pathway to Facebook's\nwell-to-do, upwardly mobile college and university student users. Not bad\nfor a freshman.\n","frontmatter":"headline: 'Rupert Murdoch: Big Man on Campus'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-slowing-fast-company.md":
/*!*******************************************************!*\
  !*** ./app/data/clips/forbes-slowing-fast-company.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Slowing Fast Company","publication":"Forbes","position":"Staff reporter"},"body":"\nWhile layoffs and hiring freezes are the topic du jour at media companies\nacross New York City, Mansueto Ventures remains a bright spot in the\nindustry. According to the Publisher's Information Bureau, magazine Fast\nCompany sold roughly $29 million in ad pages between January and\n  September, a change of 37.3% over last year. Another Mansueto title, Inc.,\n  sold roughly$64 million in ad pages, a change of 10% over last year.\n\nSo it was a surprise in early October when Mansueto Ventures closed its\nMansueto Digital division (funded by a \\$10 million war chest announced\nlast year) and laid off 20 employees. Responsibilities for its five Web\nsites have been given to the print magazines. Yet Chief Executive John\nKoten says digital remains imperative for the future. He started as editor\nof Inc. in 2002 and became CEO of Mansueto Ventures when it was formed by\nthe purchase of his magazine and Fast Company in 2005.\n\nWhat gives? Forbes.com sat down with Koten in his office on the 29th floor\nof Seven World Trade Center to ask. Here's an edited version of what he\nhad to say.\n\n**Forbes.com: The 2008 Inc. 500 winners reported total sales of $13.7\n  billion, 14% below last year's$16 billion. Seems like that gave you early\ninsight into the weakening market?**\n\nJohn Koten: We had the Inc. 500 conference in Washington about a month\nago. It was interesting to be with those people at that time. It did have\nan impact on me because these are all very successful people and they were\nthere to celebrate the growth of their companies and yet there was a\nsomberness at the conference that I haven't seen in the time I've been at\nInc.\n\n**Are your magazines particularly sensitive to the credit crunch of recent\nmonths?**\n\nWe're writing for fast-growth companies, and fast-growth companies need\ncredit to maintain their growth, so if there's no credit and they can't\nexpand, the people we're writing for are going to be hurt.\n\n**How has that played out for your businesses this year?**\n\nWe expected revenues to grow 20% to 25%, and they ended up growing across\nthe company between 8% and 12%. Because we put a lot of investment in\ndigital we expected our online revenues to grow faster than the rest of\nthe digital media industry. We decided to turn back now because the future\nis more uncertain over the next six months to a year than it [has been].\n\n**Across New York City, media is cutting jobs and tightening budgets, how\nmuch of it is cleaning up the ranks and how much of it is about lower\nrevenue expectations?**\n\nI'd say half the people that no longer have jobs here were just redundant\nin the reorganization and about half are things we decided we're going to\nstop doing until our business grows more.\n\n**What does the goal for three-year-old Mansueto Ventures become then?**\n\nOur goal is to increase market share when times are difficult, so I think\nas long as we're showing progress we'll be OK.\n\n**Combining print with digital will help you with that? Why?**\n\nThere's an incentive if you're in the digital department to keep what\nyou're doing close to your vest because it makes you the expert. I want\neveryone to know what our top 10 stories that generated the most traffic\nare each month, and I want the editors of the Web sites to share this\ninformation.\n\nI want the editor of Fastcompany.com and the editor of Inc.com — neither\nof whom have been named yet and the Fast Company job is still up for grabs\n— I want them to put out a weekly or monthly report saying here's what\ndrove our traffic this month.\n\nWe have these big video screens to help layout the magazine, but I'm\nthinking of converting them over to something we can use to report\ndigitally ... what's happening with traffic.\n\n**So in your mind the combination is a response to tougher economic times\nand a way to fuel digital growth?**\n\nIf anything, you could view this as a shift of resources from the print\nmagazines to the online department because they're [reporters and editors]\nnow going to be working 20% to 30% online. They do a lot of reporting, but\n[right now] they're thinking about just what they're going do for the\nmagazine and they're not thinking about how they might leverage that\nonline.\n\nI've told every employee here that at the end of the year I want a memo\nexplaining if [they] were an online employee how [they're] going to\ncontribute to print and if [they're] a print employee, I want to know how\n[they're] going to contribute to online.\n\nIf I'm a journalist, I need to be able to do online, print, video, audio —\nwhatever the heck is out there. I wanted to start a super- reporter\nprogram here, where we took two reporters from digital, two reporters from\nFast Company and two reporters from Inc. and have them cross-train like\nhell to create a super-reporter who could wear all nine hats. Then I\nthought: Why shouldn't everybody be doing that?\n\n**The story is bigger than just what the journalists do as storytellers\nthough, isn't it?**\n\nI think social publishing is going to play a bigger and bigger role in\njournalism whether we professional journalists like it or not.\n\nThe professional journalist becomes a coach and a mentor to people who are\ndoing this [blogging and writing] for free. Our strength is trying to be\nthe spokesman into communities and trying to build a business that works\naround that.\n\n**Then, the future of media/digital is about highlighting ideas and\nopinions, not flat factual reporting?**\n\nI think people with strong intelligent voices will find a way to monetize\nthose voices in the future, but I don't know that people who are just\nfollowing the traditional journalistic approach of gathering information\nand then presenting it in a stylistically pleasing way [are] going to\nsurvive. It's too dull.\n\n**And that will help you grow revenues through a recession?**\n\nHaving regularly updated, fresh content is different than having people\nwho are trying to break stories five or six times a day. I don't really\nsee us as a news-oriented media company at all. With social publishing,\nyou could invest in technology in a way that can help to boost your\ntraffic and on a dollar-for-dollar basis that may be a better investment\nthan investing in originally created content.\n","frontmatter":"headline: 'Slowing Fast Company'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md":
/*!*******************************************************************************!*\
  !*** ./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Strapped Local Sations Look to Web for Cash","publication":"Forbes","position":"Staff reporter"},"body":"\nLocal television stations need some good news. Just this month, the\nTelevision Bureau of Advertising announced spot TV advertising would fall\nthis year roughly 7% — despite the lucrative presidential election. Next\nyear looks bleak too: It predicted 7% to 11% declines. Those are big\nnumbers in an industry that's used to clearing roughly \\$65 billion in\nadvertising.\n\nWhile the decline is due in part to a recession, the bigger reason is more\nsystemic. Advertisers have more outlets than ever to choose from. So what\nare local stations to do? Increasingly, they're turning for salvation in\nthe usual direction: the Internet.\n\nThere are reasons for stations' emboldened outlook. Ion Puspurica, who has\nspent a decade helping build and manage hundreds of local television Web\nsites, says some 30% of TV stations have managed to increase online\nrevenues to a point where they matter.\n\n\"If you get to the point where they can generate 5% or above on their\nbottom line, then they really pay attention to you,\" Puspurica says. As\ngeneral manager of Critical Media's broadcast services group, he is now\nselling a service to stations that simplifies their ability to post\nbroadcast video feeds on the Internet.\n\nDriven by increased consumer use of online video over the last year and a\nhalf, stations are pushing hard to turn it into a moneymaker. \"We're\ngetting a lot of pressure from our clients to sell their Web sites, and to\nsell them uniquely,\" says Garnett Losak, who's company, Petry Media, sells\nadvertising and builds programming schedules for local stations.\n\nMany local stations not only compete with other stations, but also fight\nwith local newspapers for ad dollars. Every day a station doesn't push\nmore of its resources online is another day a competitor might. With fewer\nand fewer viewers tuning in to local newscasts, Adam Symson, vice\npresident of interactive for E.W. Scripps' television division, which owns\n10 stations, says building online audiences is imperative.\n\nConsider ABC affiliate KCRG in Cedar Rapids, Iowa. While it internally\ntracks an average of seven million unique visitors per month, and streams\nits noon newscast to an average of 9,000 people per day, the two-year-old\nsite only earned some \\$500,000 last year. \"It's got to grow. It just\nabsolutely has to grow,\" says the station's general manager John Phelan,\nnoting there will be no real political ads next year.\n\nHe hopes to double revenue in 2009, and for several years thereafter, with\na new sales program. He's finalizing a system where his nine sales people\nwill be penalized if they do not meet monthly Web revenue goals. \"At this\npoint, you have to try something different,\" he says.\n\nGiving sales staff incentives to sell the Web remains a huge problem, says\nSteve Ridge, president of media strategy at television consultancy Frank\nN. Magid Associates. And there is no consistency on how to approach the\nissue — whether via separate sales reps or a unified sales force.\n\nBut Web sites continue to be a bet on the future for most stations, rather\nthan a quick fix for flagging ad sales. \"[Stations] don't realize how much\neffort, resources and time it takes for that business to develop,\" says\nScott Blumenthal, executive vice president of television at Lin TV. His\ncompany, which owns 29 local television stations, is very focused on the\nInternet. While the company has struggled this year, digital has been a\nbright spot, growing in the first nine months of the year to $19.7\n  million, from$10.1 million last year.\n\nThose are results other stations are likely looking to emulate. For\ninstance, Robert Forsyth, director of Internet operations at Albritton\nCommunications, says the company has spent the last year rebuilding the\ntechnology system underlying its 12 Web properties, including eight\ntelevision stations. With 70,000 to 80,000 videos streaming from his sites\nper month — many of which will soon be in high definition — and 75 to 100\nnew videos published per day, Forsyth says increasing online ad dollars\nremains a priority for 2009.\n\nBut local advertising consultant Gordon Borrell of Borrell Associates says\nhe's worried some stations have a mismatched expectation for how quickly\nthe Internet can become a significant piece of their business.\n\nHis firm surveyed 647 television stations, and many are setting Web\nbudgets for next year based on massive increases in online revenue\nexpectations. In one case, the number is seven times greater than 2008\nrevenue. Borrell says, \"I'm kinda wondering how they're going to do that.\"\n","frontmatter":"headline: 'Strapped Local Sations Look to Web for Cash'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-the-paperless-town.md":
/*!*****************************************************!*\
  !*** ./app/data/clips/forbes-the-paperless-town.md ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Paperless Town","publication":"Forbes","position":"Staff reporter"},"body":"\nAn odor of death clings to the newspaper industry. According to Editor &\nPublisher, seven American newspapers shut down between 2003 and 2007. With\nover 13,000 jobs lost from the industry over the past year, according to\nonline layoff tracker Paper Cuts, that number is poised to grow.\n\nAcademics and journalists predict the worst. Government will run amok,\ninformation will not be traded and the \"nagging conscience of a community\"\nwill be lost, says Conrad Fink, the Morris chair of Newspaper Strategy and\nManagement at the University of Georgia.\n\nBut looking at some of the big and small communities where those seven\npapers shut down shows there may be less impact than you might expect.\nMany readers turned away from newspapers long ago. In the Internet age,\ninformation overload, rather than starvation, is the main lament of most\nnews consumers. \"What you've seen as to closures recently has been simply\nmarginal operation falling prey against combined competitive threats,\"\nsays Fink.\n\nJohn Leone, a former mayor of Bristol, Conn., and the president of the\nGreater Bristol Chamber of Commerce, knows the feeling. His town faces the\nclosure of The Bristol Press, circulation 8,285. The imploding Journal\nRegister Company said in early November that it may close the paper, and\nThe Herald, circulation 9,646, of New Britain if it can't sell them.\n\n\"There's so many other ways to get your message out, I can understand the\nproblem of keeping [it] open,\" he says, though he doesn't like it — some\n50 years ago, he was a paperboy for the Press. \"The reality is that some\nof the other newspapers in the area will probably step it up.\"\n\nThat's what happened to the Post-Herald in Birmingham, Ala. Owned by E.W.\nScripps Company, the 7,500 circulation afternoon daily closed in September \n2005.\n\n\"Certainly, losing a voice in the community has an impact, but that\nvoice had become less influential as the paper had shrunk,\" says Tom\nScarritt, editor of the rival Birmingham News, which has a circulation of\n137,220. His paper was handling most of the Post-Herald's non-editorial\noperations, including ad sales under a Joint Operating Agreement at the\ntime.\n\nAnd how did local businesses react to the closure? Maggie Krost, the News'\nvice president of sales and marketing says they didn't. \"I think it had no\nimpact on the business community at all from the perspective of being able\nto reach the marketplace with advertising,\" she says.\n\nIn De Queen, Ark., the De Queen Daily Citizen was shut down by new owner\nLancaster Management in 1997. With a circulation of roughly 2,650, Mayor\nBilly Ray McKelvey says the paper had been a labor of love of local scion\nRay Kimball for years.\n\nDe Queen's 5,765-person community loved the paper too. McKelvey, who was\nonce its editor and worked there for 18 years, says people used to pick it\nup in the morning and sit around the local courthouse discussing the day's\nevents. \"I can tell you the community did not like losing the daily\nnewspaper. There were lots of howls,\" he says.\n\nBut not as much changed in the aftermath as one would have thought. True,\nthere are no more courthouse news gatherings. And local flower shop owner\nJoanie Paterson says her funeral business was cut in half by some \\$10,000\nbecause the elderly stopped learning of deaths soon enough to send\nflowers. But she says she can't think of any other local businesses\nsimilarly impacted, although folks living in the town's rural outskirts —\nlike her father — have trouble getting the news.\n\nThe local radio station's Web site has become a major spot for community\nnews, a weekly newspaper (the daily's sister paper) still operates, and\nthe Texarcana Gazette has stepped up its coverage in the area. And\nPaterson is putting up a new marquee outside her store with a spot on it\nto advertise store promotions. \"I think life has gone on,\" says McKelvey.\n\"We've changed our habits some.\"\n","frontmatter":"headline: 'The Paperless Town'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md":
/*!****************************************************************************!*\
  !*** ./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"EA standing firm on USD 26 offer","publication":"FT.com","position":"Staff reporter"},"body":"\nElectronic Arts (EA) is standing firm on its offer of USD 26 per share to\nacquire rival Take Two Interactive Software, CFO Warren Jenson said in an\ninterview, dealReporter reported. Calling the number \"hugely pre-emptive,\"\nhe said Take Two’s demand for a higher bid was unrealistic.\n\nJenson declined to comment on whether management has discussed offering\nmore. Take Two’s stock price was USD 17.36 last Friday, the last trading\nday before the offer was publicly disclosed.\n\nLast week, a top Take Two shareholder told this news service that USD 30\nper share was a more realistic price. He cited the upcoming 29 April\nrelease of Grand Theft Auto 4 and other cost-cutting measures that Take\nTwo has said have not yet been recognized by the market.\n\n\"It’s a dance, right,\" said EA’s Jenson of Take Two’s rejection of the\noffer. \"There’s not a shred of historical evidence to show that is the\ncase,\" he said of assertions that Grand Theft Auto 4 sales would\ndramatically change Take Two’s value.\n\nAs the seventh version of the game, Jenson said there is plenty of data to\npredict sales. While he said EA may not dramatically increase its US and\nUK sales, it could in more far-flung markets such as Spain or Russia.\n\n\"They’re [EA] very serious here,\" said Kaufman Brothers analyst Todd\nMitchell. \"They took some money out of short term investments and put it\ninto cash.\" Still Mitchell said he remains unconvinced a deal will close\nas the Take Two acquisition is not an imperative for EA.\n\n\"If they overpay for this thing, people are going to smell desperation,\"\nhe said.\n<br /> EA’s Jenson said it may drop the size of its bid if Take Two does\nnot act quickly enough.\n\nHe warned that the pressure is on to finish a deal in order to integrate\nTake Two’s management into EA in time for this year’s holiday season. The\nperiod can account for some 40% of video game sales, he said.\n\n\"We just don’t need both,\" he said in reference to overlap in EA’s and\nTake Two’s management. Creative personnel may be a different story.\n\nRockstar Games – the Take Two publisher of the Grand Theft Auto series –\nis a \"significant part of this transaction,\" said Jenson. Yet the value of\nRockstar is said by some to be tightly aligned with Sam Houser, its\npresident, and his brother, Dan Houser, vp creative.\n\n\"Everyone acknowledges the Housers are the glue that keeps this [Grand\nTheft Auto] together,\" said Michael Pachter, an analyst with Wedbush\nMorgan Securities.\n\nBut it is unclear whether the two would be willing to move to EA –\nparticularly with a contract that is said to\n\ngive them a cut of gross revenues from Take Two’s Grand Theft Auto sales.\n\"The myth is they get 15% of revenues,\" said Pachter, \"I think that’s\nprobably right.\"\n\nWith that standard dangling before employees – and a history of building\ncontroversial themes such as sex into Grand Theft Auto – Pachter\nquestioned whether EA would want the two in-house. Earlier this week,\nPachter publicly suggested that EA split Rockstar off into a separate\ncompany to avoid some of these issues.\n\n\"The analysts see Rockstar and they see risk,\" said EA’s Jenson. \"We see\nRockstar and we see opportunity.\"\n\nWhile he said he had some understanding of the Housers’ contracts, he\ndeclined to specify what that was.\n\nInstead, he said he believed that the Housers would be comfortable working\nwithin EA.\n","frontmatter":"headline: 'EA standing firm on USD 26 offer'\npublication: 'FT.com'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/index.js":
/*!*********************************!*\
  !*** ./app/data/clips/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/clips sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    if (b.attributes.position > a.attributes.position) {
      return 1;
    }

    if (b.attributes.position < a.attributes.position) {
      return -1;
    }

    return 0;
  });
})());

/***/ }),

/***/ "./app/data/clips/shu-breaking-news-online.md":
/*!****************************************************!*\
  !*** ./app/data/clips/shu-breaking-news-online.md ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Breaking News Online","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\n“When I started, I was told this is 24 hours a day, seven days a week. And\nI laughed. Now I’m not too sure it was a joke.”\n\nAdam Desiderio ’05 laughs again. The 29-year-old associate producer with\nthe “NBC Nightly News” is like a lot of journalists. He disarms quickly by\npoking fun at himself and speaking plainly about almost anything. Being a\nbit over 6 foot 3 inches tall with a handsome face and thoughtful demeanor\ndoesn’t hurt either. The package seems just right for NBC’s flagship news\nshow.\n\nDesiderio is one of some six young Seton Hall University alumni working\nacross NBC’s news outlets at a time of incredible tumult. Like most media,\nthe fabled “peacock network” is remaking itself for the digital age. This\nsummer alone, it launched NBCLatino.com, used mobile apps to supplement\nits London Olympics coverage, and bought Microsoft’s 50 percent stake in\nMSNBC.com.\n\nThe result is a constant if soft drumbeat for these new alumni to reinvent\nthemselves just as swiftly.\n\n“You have to be really nimble,” says Robert Windrem ’68, a senior\ninvestigative producer who covers terrorism for the “NBC Nightly News.”\n\nWhen Windrem started in 1980, he could only tell a story by airing a piece\non the evening news, the early morning “Today” show, or a prime-time news\nmagazine. Now he also regularly produces Web news videos, writes for\nMSNBC.com (now NBCnews.com), and discusses international security as a\nguest on NBC’s various cable news networks.\n\n“Everyone understands these opportunities exist,” says Windrem, 67.\n\nBrian Wisowaty ’11 agrees. In June, after just a year at MSNBC as a\ngraphics production assistant, the 23-year-old was asked to oversee\nvisuals for the prime-time show, “PoliticsNation.” That means he\ncoordinates the senior producers who decide what information to illustrate\nand the artists who make it look good. Wisowaty ensures they both hit the\nmark.\n\n“This is no longer something that just flashes up on-screen,” he says.\nShow producers are now posting his images to Facebook in order to connect\nwith the social network’s 950 million members.\n\nThe move offers a tangible reminder that digital media is changing TV.\n\nBy the early 2000s, many predicted the Internet would put an end to it.\nThat never happened. But the Internet’s popularity also never stopped\ngrowing. Each spurt pushes TV news to change just a little bit more. The\nresults can be quite dramatic.\n\nBetty Nevins ’77, senior production manager for “Meet the Press,” offers a\ngood example. The famed Sunday morning political program has developed an\noriginal Web video series named “PRESS Pass.” It only takes six or so\npeople to create each segment. That’s a far cry from the roughly 28 people\nNevins, 56, leads each week to broadcast the main program nationally.\n\n“They’re breaking the mold,” says the 27-year NBC veteran.\n\nBy redefining what qualifies as professional- grade video, “Meet the\nPress” can afford to recruit new viewers online with stories it normally\ncouldn’t do. For instance, host David Gregory was able to interview\nactress Sigourney Weaver in July about her new cable mini-series,\n“Political Animals.”\n\nIt’s an evolution that Erin Ganley ’09 navigates daily. As a line\nproducer for MSNBC’s “The Ed Schultz Show,” her days begin with the\ncreation of a show schedule and end in a rush to get people to stick to it\nduring broadcast. That doesn’t always leave the 25-year-old as much time\nto focus on the Internet as she’d like.\n\n“I don’t think it has as much of a role with the job I have right now,”\nshe says. But she’s sure it will in the future, so she keeps up with\ndigital media on her own.\n\nTake her use of Twitter, the online social network that relays news in 140\ncharacter bursts. Ganley frequently scans it to filter through the day’s\ntop stories.\n\nShe may be on to something. In July, corporate parent Comcast reorganized\nNBC by creating the NBCUniversal News Group to house all of its broadcast,\ncable, and Internet news outlets under one chairman. The goal: increase\ncollaboration.\n\nIt’s the type of step forward that keeps Stephanie Wightman ’08 excited\nabout TV. Like all her young alumni-colleagues, the 26-year-old tape\nproducer for “1st Look,” an early morning NBC news show, is always keen to\nadapt to change gracefully.\n\nAs she says: “You’ve got to go where the future is.”\n","frontmatter":"headline: 'Breaking News Online'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-cracking-the-college-code.md":
/*!*********************************************************!*\
  !*** ./app/data/clips/shu-cracking-the-college-code.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Cracking the College Code","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nLast winter, 15 students from Newark’s Technology High School took part in\na six-month pilot program from Seton Hall’s Center for Mobile Research and\nInnovation. The “Young Developers Program” had a simple, yet important\ngoal: prepare the students — who hail from a traditionally underprivileged\ncommunity — to design and build mobile apps for smartphones and tablet\ncomputers on their own.\n\n“That’s of value no matter what you decide to do,” says associate\nprofessor of political science Michael Taylor, the CMRI’s academic\ndirector.\n\nThat’s probably true. Mobile devices are booming. In 2007, smartphones\nwere relatively rare and tablet computers were non-existent. Today, just\nsix years later, the United States has amassed 140 million smartphone and\n123 million tablet users, reports eMarketer, a tech consultant. As a\nresult, these devices have penetrated nearly every walk of life.\n\nBut not all teens are being given the skills and confidence needed to\nharness these forces.\n\nThe Young Developers program was designed to help by teaching students\nfrom disadvantaged areas to build mobile apps — a form of software — for\nsmartphones and tablets. Each of its 12 lessons, which range from computer\nlogic to user interfaces, includes a video lecture, in-class coding problem and\ntake-home lab. A \\$250,000 corporate gift from AT&T paid for the\ncurriculum, as well as smartphones and laptop-tablet hybrids running\nMicrosoft Windows.\n\nThe Newark Tech teens were also responsible for building their own mobile\napps. All told, it was a lot of work.\n\nTo keep them on track, the students were paired with mentors from Seton\nHall who had a similar socio-economic background. “I’ve lived in poverty,\nand I’ve seen poverty,” says Franck Nelson ’13, one of the six\nundergraduate mentors.\n\nA biology major, Nelson immigrated from Haiti to Trenton, N.J., when he\nwas 14. He joined the Young Developers pilot to offer tangible proof that\nnothing is out of reach. While the program’s focus is on coding, Nelson,\nwho just started a graduate program at Seton Hall’s College of Nursing,\nsays mentors spent as much time talking about college.\n\n“We had people believe in us to get here,” he says. “We believe we can\nreturn the favor.”\n\nTaylor, who is now running a second pilot project in Newark and trying to\nraise more money from AT&T to expand to two more cities in the next year,\nsays the program’s first run ended with an unexpected surprise. He wasn’t\nsure if all the teens would finish their software. But they did, on their\nown or in a small group, building 12 apps. “A lot of them weren’t\nsatisfied by what they created,” he adds.\n\nThat’s just fine. Now they know how to do better.\n","frontmatter":"headline: 'Cracking the College Code'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-giving-physics-a-good-name.md":
/*!**********************************************************!*\
  !*** ./app/data/clips/shu-giving-physics-a-good-name.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Giving Physics a Good Name","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThere’s a bolt of pure lightning that plays music in the basement of\nMcNulty Hall.\n\nAt least, it looks like lightning. It pulses, and music plays out of the\nthin air above it. Jose Lopez, the newest addition to Seton Hall’s\nDepartment of Physics, shows visitors his plasma speaker with a smile. The\n34-year-old assistant professor of physics likes a good attention-grabber.\n\n“In physics, we have very bad PR. We make it seem that it’s not\naccessible,” he says.\n\nIn a field forever dominated by Albert Einstein’s loopy personal style,\nLopez is an unexpected twist on the age-old vision of a brainy physicist.\nThe chatty Newark native is warm, amiable and plainspoken. And yet, one of\nthe 20 biggest brains in the state, according to Inside Jersey magazine,\nis also an expert in a little-known, but potentially up-and-coming field\nof study called microplasmas. Lopez creates these tiny plasma reactions in\norder to assemble chemicals as if they were made of Lego blocks.\n\nThat’s not as crazy as it sounds. Most people know there are three states\nof matter: solid, liquid and gas. Each is defined by the density and\narrangement of the atoms within it. Plasma is a fourth state that occurs\nwhen gases destabilize. That means their atoms break up into a mixture of\ncharged ions and electrons.\n\nOnce free, these ions and electrons can be recombined into something new.\nLopez studies ways to control them. “That’s the whole thing,” says Alfred\nFreilich, a longtime Lopez collaborator who joined Seton Hall with him in\n2011\n\nas a visiting research professor. It’s hard to reliably control plasma.\nIt’s hot — the sun and stars are made of it. And atoms like stability. On\nEarth, they don’t shift to plasma easily. Generally, a vacuum is needed to\ncoax them. They shift to it more easily in miniature. At scales of a millimeter or less, chemical\nelements will become plasma in the open air and at a temperature cool\nenough to touch.\n\nAs a result, there may be a lot of ways to put these tiny plasmas to work.\nLopez and Freilich look for them.\n\nFor instance, Degrémont Technologies uses their research to increase the\namount of oxygen it can turn into ozone inside of school bus-sized\nmicroplasma reactors. Municipalities and other groups buy the reactors so\nthey can kill bacteria with ozone rather than chlorine at their\nwater-treatment plants. The ozone is produced on-site because it breaks\ndown soon after it’s created.\n\nThe oxygen alchemy is cool, but Lopez uses the reactors to connect more\nthan just electrons and ions.\n\nHe also uses them to connect with people. By forcing a lot of tiny oxygen\nplasmas to create ozone, the reactors remind people that physics doesn’t\njust explain how the universe works. It also offers keys for controlling\nit.\n\nSo, when Degrémont asked for help on its microplasma reactors in 2005,\nLopez opted to make the field a long-term focus. At the time, he was\njoining the physics faculty at his alma mater, Saint Peter’s University in\nJersey City, N.J.\n\nThat found the newly minted academic looking for a way to connect with\nstudents directly.\n\nLopez already knew something about drawing students into science. Kurt\nBecker, his doctoral adviser at the Stevens Institute of Technology in\nHoboken, N.J., noticed that shortly after Lopez arrived in 2000. Becker\noften opened his lab to local high school and college students looking for\nhands-on research experience. They all flocked to Lopez.\n\n“It was almost his natural instinct to take them under his wing,” says\nBecker.\n\nThat’s not surprising. By then, Lopez had been teaching science for years\n— he tutored the entire women’s varsity basketball team in math and\nscience while a sophomore at Saint Peter’s.\n\nBut he did learn some new tricks under Becker, now the associate provost\nfor research and technology initiatives at the Polytechnic Institute of\nNew York University. Becker treated doctoral students like colleagues, not\nemployees. He encouraged them to story their own interests, and tried to\nget them whatever they needed to do it.\n\n“If someone had a good idea, my attitude was: Go try it out,” he says.\n\nBecker’s stance had a long-term effect on Lopez. Nothing is out of reach.\nLast spring, he applied the theory to one of his first courses at Seton\nHall. Rather than limiting his class on waves and oscillations to the\nuniversity’s labs, he added a set of online video lectures from the\nMassachusetts Institute of Technology.\n\nThe result really stood out to junior Stacie Ballou. The lectures gave her\na first-hand look at the type of experiments normally confined to big\nresearch universities. “It was a different experience,” she says.\n\nFor Lopez, that was the point. Students aren’t unlike the chemicals he\nassembles in microplasma.\n\nThey’re ready to become something new — if you can connect with them.\n","frontmatter":"headline: 'Giving Physics a Good Name'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-bone-doctors-knees.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-bone-doctors-knees.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Bone Doctor's Knees","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nIt all started in the mid-’70s on scrap paper: cocktail napkins, lined\nyellow paper, whatever was near. Frederick Buechel ’67, M.D., and Michael\nPappas, Ph.D., were designing artificial joints. They worked on schematics\nwherever they were, sometimes even at a bar near their homes in northern\nNew Jersey. For Buechel, the work has never been far from his mind.\n\n“To this day, you’ll see a piece of paper on his desk with a drawing on\nit,” says his son, Frederick Buechel Jr., M.D. That’s no surprise. His\nfather is the co-inventor of one of the world’s best-known artificial knees. It was one of the first to\ntruly simulate the real thing — bending up and down while also twisting a\nlittle left and right as people walk. A version of it has been sold by\nDePuy Orthopaedics for more than 30 years. First known as the New Jersey\nKnee, it’s now called the N.J. LCS Mobile Bearing Total Knee System.\n\n“You should allow the ligaments and muscles to act in their own normal\nway,” says Buechel Sr., 67.\n\nWhile DePuy, now part of Johnson & Johnson, doesn’t discuss market share,\nit has been reported that the LCS Knee has been chosen by a million people\nworldwide. That’s a number that could grow rapidly. Knee replacements are\nincreasingly common. Between 2000 and 2011, the number of operations grew\nalmost 130 percent, the American Academy of Orthopaedic Surgeons says,\nwith more than 600,000 done each year in the U.S. alone.\n\n“It’s a hot topic,” says Daniel Brown, an orthopedic devices analyst at\nMillennium Research Group.\n\nThere are at least two reasons. People younger than 65 increasingly want\nto temper sport and other high-impact injuries, and those who are older\nare staying active longer.\n\nBut, in 1974, none of that was true yet.\n\nBuechel, then a 28-year-old orthopedic resident at New Jersey Medical\nSchool (now a part of Rutgers University) was overseeing a research\nproject on an ankle-replacement device. “Many of these were developed in\npersonal labs, almost in garages,” says Stuart Hirsch, M.D., a clinical\nprofessor of orthopedics at Seton Hall’s School of Health and Medical\nSciences.\n\nThe orthopedic surgeon has known Buechel since organizing a panel of knee\ndesigners for the New Jersey Orthopaedic Society about 30 years ago. Other\npresenters had more elite credentials, but Buechel’s dynamic,\ndata-driven presentation stood out. “I immediately switched over to the\nNew Jersey Knee,” says Hirsch.\n\nWhen Buechel first began work on his ankle replacement he sought help from\nPappas, at the time a 41-year-old mechanical engineer teaching at New\nJersey Medical School. “Any problem that I’m capable of solving is of\ninterest,” says Pappas, now 80.\n\nBuechel’s decision to ask for help wasn’t entirely surprising. The young\ndoctor, who won four New Jersey Amateur Athletic Union and three\nMetropolitan Intercollegiate Wrestling Championships while at Seton\nHall, liked a challenge — if evenly matched. Once he started working on\nthe replacement ankle, he realized he wasn’t well matched; he hadn’t\nthought about the technical aspects of building the device.\n\nPappas’s engineering know-how evened the odds.\n\nBy 1976, the two men were building joints on their own time. Their focus\nshifted to shoulders, and they were also considering the knee. Then, good\nluck struck. Buechel presented a paper about their shoulder at a\nconference, and caught the attention of an executive from DePuy, who\nwanted to license it.\n\nBuechel saw his shot, and made DePuy promise to sign a contract to sell\nhis artificial knee too. Bold move, as there was no knee yet.\n\nBut DePuy agreed.\n“You can’t live without being a business person,” says Buechel.\n\nDevelopment began. Buechel defined problems, Pappas designed solutions. At\nthe time, artificial knees had two major components. One attached to the\nfemur, a hip-to-knee bone; the other to the tibia, a knee-to-ankle bone.\nThese “fixed-bearing knees” bent like a hinge, but Bueche and Pappas\nweren’t satisfied by the results. Then a new idea arrived from a group\nfrom Oxford in the United Kingdom. It offered a way to make a knee that\ncould both bend and turn a bit. Buechel and Pappas quickly adopted this\n“mobile-bearing” design, and worked to improve it.\n\nBy 1977, their mobile-bearing knees were a lot like the real thing, and in\ntheory, would last longer than the fixed-bearing kind. DePuy, which sells\nboth types, says one independent study found that, after 15 years of use,\nBuechel’s LCS Knee still was in good shape 97 percent of the time.\n\n(The Buechel-Pappas partnership with DePuy ended some time ago, but the\nmen still work together on their own.)\n\nStill, knees are big business, and the technology keeps improving. Debates\nabout which type is best remain some of the hottest at orthopedic\nconferences today, says Millennium’s Brown, the device analyst.\n\nBuechel, always ready for a good challenge, is prepared to defend the\nmerits of his knee.\n\nThe doctor clearly likes his odds.\n","frontmatter":"headline: The Bone Doctor's Knees\npublication: Seton Hall Magazine\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-clean-air-catalyst.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-clean-air-catalyst.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Clean Air Catalyst","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThe FedEx package from John Mooney ’55 arrives less than a week after our\nfirst meeting. Mooney — an 83-year-old man with a nimble step — has sent\ntwo reports.\n\nHe wrote the first paper for the United Nations in 2004 to convince a few\nholdout countries to eliminate lead from their gasoline. The other is a\nnew paper out of the University of Michigan asking if the 230 million or\nso automobiles in the United States represent a peak. (Unlikely.)\n\nMooney, a chemical engineer, chose the reports to illustrate how\ndangerous internal combustion engines can be. But something else is\npresent in the reports: Mooney’s passion for tough problems — and\ninnovative solutions.\n\n“If you don’t think there’s a solution, then you just haven’t asked the\nright question,” says daughter Elizabeth Convery, quoting a mantra her\nfather often tells his five children and 14 grandchildren to live by.\n\nThat fits. Mooney is the co-inventor of the three-way catalytic converter,\na small exhaust-cleaning device that hangs beneath about 80 percent of\nautomobiles. Each converter destroys about 98 percent of a car’s three\nmost noxious emissions — simultaneously.\n\n“That was a phenomenon that no one else thought was possible,” says\nMooney.\n\nNot for lack of interest. By the late ’60s, thick smog around Los Angeles\nsparked public demand for cleaner air, says Joseph Kubsh, executive\ndirector of the Manufacturers of Emission Controls Association (MECA). An\nextension of the 1963 Clean Air Act was on its way in 1970, with the\nEnvironmental Protection Agency and emissions standards in tow.\n\nThe standards would force most automakers to add a catalytic converter to\ntheir cars. A lot of companies wanted to sell it to them. That included\nEngelhard, Mooney’s then employer, a chemical company based in Iselin,\nN.J., now part of BASF.\n\nBut a good device wasn’t so easy to build.\n\nThe chemical reactions that clean up a car’s most noxious pollutants are\nvery different. Oxygen has to be stripped away from nitrous oxide, but\nmust also be added to carbon monoxide and unburnt hydrocarbons. Most\nthought this would require a bulky, two-stage system.\n\nMooney thought he could do it in one. He proved it by doing something\nunexpected.\n\nRather than looking at the exhaust, he focused on the gasoline being fed\ninto the engine. If it was mixed with the right amount of air, the exhaust\nwould offer a one-stage converter just enough oxygen to simultaneously\nrender all three pollutants harmless.\n\nMooney’s discovery seemed like magic. “No one really believed me,” he\nsays. “Probably our competitors didn’t either.” But Mooney was never one\nto give up easily. Take his first car, a 1941 Ford convertible he bought\nin 1949 to carry him to Seton Hall University, where he was starting work\non an undergraduate degree in chemistry. The car worked — but not\nwellenough. So Mooney, 19, took its engine apart, leaving more than 100\npieces scattered across a friend’s garage. Problem was, he didn’t know\nwhat they did.\n\nThat was no problem. Mooney talked to some mechanics, and soon knew what\nhe had to do. The big V8 was rebuilt in time to roar north fora summer\nroad trip to points unknown. A faint smile spreads across Mooney’s face as\nhe remembers the old car. “It had a nice noise to it,” he says. “It\npurred.”\n\nThat can-do spirit carried the day with the three-way catalytic converter\ntoo.\n\nIt inspired his boss and co-inventor at Engelhard, a scientist named Carl\nKeith, to send him around the world in the early ’70s to convince\nautomakers to add an oxygen sensor to their engines. The sensor would\nmonitor the fuel-to-air ratio so each engine could be tuned to the sweet\nspot where Mooney’s one-stage converter would work.\n\nVolvo listened first, and by 1976, the device was rolling off some of its\nassembly lines. Just about every automaker would soon follow suit.\n\nThe results are legendary. BASF says the three-way catalytic converter has\ndestroyed more than a billion tons of nitrous oxide, carbon monoxide, and\nhydrocarbons since it was released. More impressive: To protect the device\nfrom damage, highly poisonous lead has been removed from gasoline in\nnearly every country.\n\n“It’s really an amazing thing that’s been created,” says MECA’s Kubsh.\n\nMooney breathes, sucking in fresh, clean air. He couldn’t agree more.\n","frontmatter":"headline: 'The Clean Air Catalyst'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/slate-adventures-in-state-bailouts.md":
/*!**************************************************************!*\
  !*** ./app/data/clips/slate-adventures-in-state-bailouts.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Adventures in State Bailouts","publication":"Slate","position":"Freelance"},"body":"\nTwo months after being laid off by Forbes, I discovered New York's Self\nEmployment Assistance Program. The problem was getting the state itself to\ndiscover it.\n\nThe program is offered by New York to help entrepreneurs launch new\nbusinesses while refunding tax dollars (the state calls them unemployment\nbenefits). I learned of it on the 14th page of an instruction manual that\nwas sent to me when I applied for unemployment.\n\nThe SEAP program sounded like a good deal to help me launch myself as a\nWeb video news anchor covering media news. It's been my beat for a while.\nI felt good about it. This is the era of government bailouts and stimulus\npackages, after all. I couldn't know that my first significant interaction\nwith government would lead me on a series of adventures involving baffled\nstate employees and a constant sense of amazement.\n\nI had my first adventure with New York on a Thursday afternoon in\nmid-March. I called the number listed for SEAP and learned the state had\ncreated the world's premier choose-your-own-adventure series using a voice\nmail messaging system. There was a dizzying array of options to choose\nfrom, each one leading to more options. It had no end. I cycled past level\nafter level about filing new claims, frequently asked questions, and how\npart-time work affects benefits.\n\nI hung up once, redialed, and started again (I had gotten lost), and just\nwhen I had lost hope, I met Charles. He had to go ask his manager about\nSEAP. I waited on the phone until he came back to explain I had to go to\nan unemployment office to apply. Once there, I would be given a quiz, and\nmy answers would be scored to see if I qualified. Charles then gave me two\naddresses, one in Midtown Manhattan and the other in Harlem.\n\nThe next day, I set off for 247 W. 54th St. to take my quiz. That's when I\nexperienced my second adventure. Charles had sent me to a hole in the\nground. It was a massive two-story pit that stretched along one-third of\nthe block. To clarify, that's three full-length buildings. I did the only\nthing I could. I tried calling a new number in the instruction manual for\nhelp.\n\nA man at Manhattan's Board of Elections picked up and promptly hung up on\nme when I insisted he not give me the automated phone number for the\nDepartment of Labor that I'd tried on Thursday. He didn't seem to know or\ncare about SEAP.\n\nThen I tried a police station near the hole. The precinct gave me a\ntelephone number that was disconnected. The automated message instructed\nme to call a third number, which is how I came to talk to someone at the\nDepartment of Labor's fraud division. It was early afternoon.\n\nUnemployment: That building was knocked down two years ago.\nMe: So it seems.\n\nUnemployment: Who sent you there? Me: Your office—the Department of Labor\nin Albany—yesterday afternoon.\n\nUnemployment: Who?\nMe: Charles.\nUnemployment: Charles? What was his last name?\nMe: I didn't ask.\nUnemployment: Why not?\nMe: I didn't think he'd send me to an empty lot.\n\nThere was a pause. Not only had the woman never heard of SEAP, but she\nclearly doubted it existed. Apparently, no one ever used it to defraud New\nYork state. That would have made me feel good if I hadn't begun doubting\nwhether anyone ever used it. Eventually, she gave me some more Department\nof Labor offices and phone numbers in New York City. None of them matched\nCharles'.\n\nFor some reason, I decided to give him another shot. What were the chances\nof being sent to two holes? On Monday morning, prepared for my third\nadventure, I trekked back to the West Side and up to 215 W. 125th St.\nWorkforce (that's what New York calls the unemployment division) was on\nthe sixth floor. The receptionist behind the counter was very friendly. I\nasked for SEAP, prepared to explain what it was. \"Oh, SEAP! You have to\ncome back on Friday at 10. That's when we do that.\"\n\nI looked at her. Then I told her I'd just been sent to an empty lot on\nFriday. \"Would you like to talk to someone about that?\" she asked. Why,\nyes, I would. \"Just have a seat and wait for the next Workforce\norientation session. Afterward you can talk to a manager.\" I left.\n\nI was back on Friday at 9:30 a.m. The receptionist was delighted that I\nwas so early. At a quarter to 10, Simone emerged from the back and called\nmy name. I could just feel that this was to be my final adventure with New\nYork state. Surely, victory was at hand. As we walked to her desk, she\nexplained she only did SEAP at 10 and didn't normally start early. I\nthanked her. The office was a beehive of activity—it looked like the\ntrading floor of the New York Stock Exchange. Workers were everywhere,\ntalking with one another excitedly about how to get people back to work. I\nfelt really good about my taxes.\n\nSimone explained SEAP as we walked. It sounded nothing like Charles'\ndescription. I would fill out a paper form at her desk that she would\nsubmit to Albany. If I was lucky, that form would trigger an invitation\nthat would be mailed to me within the next two weeks. I should then attend\none of the regular orientation meetings for SEAP, where I would be given a\nfolder. In the folder would be an application, which I should fill out and\nsubmit to Albany. At some point—Simone didn't know when—I'd receive word\nif I qualified. I'd have to wait to start my media business until after\nthis process was complete. I smiled and thanked her. I left and prepared\nto go it alone.\n\nPostscript: Two weeks later, I got a letter in the mail about SEAP. I was\ninvited to attend an orientation meeting on April 27. Following the\ninvitation was a note: \"One of the criteria to qualify for SEAP is a\nworker re-employment score of 70 or higher. Your score is 66.\"\n","frontmatter":"headline: 'Adventures in State Bailouts'\npublication: 'Slate'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/uva-charting-an-east-west-passage.md":
/*!*************************************************************!*\
  !*** ./app/data/clips/uva-charting-an-east-west-passage.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Charting an East/West Passage","publication":"The Darden Report","position":"Freelance"},"body":"\nIn both the East and the West, it was hard to believe the story.\n\nAt a factory in Shenzen, China, at least 14 workers killed themselves in 2010. The factory, owned by Foxconn, produces iPads and iPhones for Apple and computers for Dell and Hewlett-Packard. By most accounts, the manufacturers’ unrelenting production demands had triggered the spate of\nsuicides.\n\nSo, who’s responsible? The Western companies, who rely increasingly on\nEastern contractors to produce their products for low wages and low\nprices? Or the Eastern manufacturer, whose plant managers and workers face\nincredible pressure to meet ambitious deadlines?\n\nIn his strategic management course “Strategic Thinking: Integrating East\nand West” this past spring, Darden School of Business Professor Ming-Jer\nChen asked his students to opine on the issue.\n\n“Chinese managers are shifting to the Western culture of produce,\nproduce, produce,” said Kristyn Kelly of the Class of 2011. “It’s the sort\nof hyper-productivity that only works if people are ready, willing and\nable to say ‘no.’” But Kelly says many Asians — long accustomed to rigid\nhierarchies — simply won’t say no. This time, the cultural clash appeared to have contributed to the tragedy.\n\nThe Foxconn case spotlights the challenges Eastern and Western managers\nface as they blend their businesses.\n\nAnd Chen is the perfect person to steer the conversation.\n\n**A New Discipline**\n\nChen’s work and life focus on balance. He grew up in Taitung on the\nsoutheast coast of Taiwan. As a youth, he studied philosophy and the\nChinese classics with a cousin of Puyi, “The Last Emperor” of China. In\n1981, Chen emigrated to the United States with a visionary quest: to “make\nthe world smaller.”\n\nBefore joining the Darden faculty in 2001, he was a professor at Columbia\nBusiness School and was founding director of the Global Chinese Business\nInitiative at the Wharton School of the University of Pennsylvania.\n\nChen focuses on ways to help managers combine the cultures, to narrow the\nEast-West divide. “I very much consider myself an academic entrepreneur,”\nsays Chen. And he’s a rather bold one. This summer, the management\nprofessor will blaze a new trail.\n\nAs vice president and program chair of the Academy of Management, Chen —\nwho will assume presidency of the group in 2012 — at this year’s annual\nconference intends to ask business scholars from around the world to study\nEastern and Western management techniques. His goal: find ways to\ncharacterize and quantify their di erences so executives can incorporate\nthe best — and avoid the worst — of each.\n\n“Ming-Jer has put his finger on a very important question,” says Jan\nRivkin, the Bruce V. Rauner professor and chair of Harvard Business\nSchool’s strategy unit. “Can a superior model of management emerge from\ncombining the best of both worlds?”\n\nThe academy conference should help Chen and his colleagues around the\nglobe find an answer. In August, the meeting will host more than 11,000 of\nthe organization’s 19,000 members. Among its ranks, the 75-year-old group\ncounts some of the world’s top scholars. For five days, they’ll meet in\nSan Antonio, Texas, to discuss the theme “West Meets East: Enlightening,\nBalancing and Transcending.”\n\nThe topic’s timing may be just right. “The United States still has the\nbest business system, but the system has also shown its vulnerability,”\nexplains Chen.\n\nIn 2008, a period of financial chicanery abruptly ended when the bubble it\ncreated in the U.S. housing market popped. Many still feel the e ects of\nthe recession that followed its explosion.\n\n“Because the economies in the West are soft, there are Westerners moving\nhere,” says Darden alumnus Peabody Hutton (MBA/JD ’77), general counsel of\nAjia Partners, a Hong Kong investment firm. Hutton says that for American\nAsians to set up shop on Eastern shores is not uncommon.\n\nThat’s one reason Chen thinks the market is ready to formally expand its\nhorizons.\n\nHe may be right. Harvard’s Rivkin leads the academy committee that\ndecides which sessions to feature during the annual meeting’s full-day\n“All-Academy Theme” program. Proposals have ranged from whether Asian\nbusiness schools should follow a Western model to yoga’s impact on an\norganization’s e ectiveness.\n\nThe variety of the proposed topics suggests that people may be ready for\nnew ideas. “For a long time, there was an assumption that Western\nmanagement was good management,” Rivkin says.\n\nThat may be changing, but can still be a hard sell.\n\n**Defining the Eastern Paradox**\n\nEasterners and Westerners think differently.\nThe Foxconn suicides were a somber reminder of that. Yet these differences are often expressed more subtly than through questions\nabout workers’ rights.\n\n“Business [here] tends to be conducted less on the basis of merit and\nprice than on the basis of relationships,” says Ajia’s Hutton. The results\ncan be unpredictable.\n\nTo help explain the cultural nuances, Chen has lately been publishing\nabout an idea he calls “transparadox.”\n\nIt’s designed to o er Westerners a new way to think about ideas that\nappear to contradict each other but which may be two sides of the same\ncoin. In essence, transparadox proposes that notions that appear to be\noppositional — such as competition and cooperation — are interrelated or\neven interdependent, connected by a series of implicit links. Chen seeks\nto bridge a fundamental philosophical difference between the way\nEasterners and Westerners regard paradox. “By making these links\nexplicit,” says Chen, “we can enhance a mutual understanding that di\nerences are not irreconcilable.”\n\n“The Chinese are used to ambiguity,” says Hutton. Chen says there are\nplenty of reasons for Westerners to get used to it, and\n\nmoney is a big one.\nTraditionally, a corporation’s finances were managed at its\n\nWestern headquarters, says Leslie Grayson, professor emeritus of\ninternational business at Darden for whom Chen’s academic chair is named.\nToday, funds may move between foreign territories without passing\nthrough the West.\n\nAs a result, Easterners and Westerners have good reason to adapt to one\nanother.\n\n“If you don’t learn, there’s a penalty,” says Grayson. “You fail.”\n\n**Measuring Ambiculturality**\n\nGiven their philosophical di erences, how do Easterners and Westerners\nsuccessfully combine their management strategies?\n\nThe answer could become one of Chen’s biggest hits. Last November, he\npublicly coined a term that may ultimately define not only this summer’s\nacademy conference but also the study of Eastern and Western management as\na whole: ambicultural.\n\nIt reads like intellectual popcorn. Say it aloud and ideas like\nambidexterity and cultural sensitivity come easily to mind. “The basic\npremise is that each culture in society has its own strengths and\nweaknesses when they’re applied to business practices,” Chen explains.\nCombining the best parts of each approach is ambicultural.\n\nBut this involves a trick. Strengths cannot be combined and weaknesses\navoided until they’ve been defined. So the professor is creating a survey\nto be sent to Eastern and Western managers later this year that he thinks\nwill do just that.\n\nFor instance, the survey may ask executives to rate the importance they\nplace on personal connections, and to numerically prioritize their\ninterest in employees, stakeholders and society.\n\n“I think there will be many di erent ways we can quantify the variables\nthat can reveal how ambicultural a company is,” Chen says. Already, he\nhopes to create a scale for companies to rate their use of cross-cultural\nmanagement strategies.\n\nThis wouldn’t be the first time Chen has developed a way to quantify the\nseemingly unquantifiable. In the mid-1980s, he spent months analyzing a\ndatabase of airline industry events that were covered by the trade\nnewspaper Aviation Daily. Thousands of articles were scored against\nvariables, such as “event visibility” or “response announcement speed,”\nthat Chen helped pioneer as a way to study airline competition over an\neight-year period.\n\nThe database made the competitive patterns that businesses fall into clear\nenough to study — and often, to predict.\n\nThe result: A popular new area of strategic theory named competitive\ndynamics emerged over the past 25 years in the management field and\ncontinues to thrive today. Competitive dynamics is the analysis of\ncompetition at the action and response level to predict how a firm will\nact or react toward opponents.\n\n**An Eastern or Western Face?**\n\nAll the signs suggest “ambicultural” will be as big a hit.\n\nThe concept is not even a year old, yet management expertsare already\nstarting to buzz about it.\n\nIn March, an Asian edition of the Harvard Business Review translated the word into Chinese. Now, the editors of the U.S. edition are\ntalking to Chen about producing their own story on it. And next year, many\nbusiness students will study the term in the new edition of a well-known\ntextbook on strategic management.\n\nThe word’s surging popularity isn’t surprising. People are hungry for ways\nto sail between the East and West more easily.\n\n“Right now, what we need to do is to compare management systems from one\ncountry [against those of] another country,” says Grayson.\n\nThe hard part is doing that without judging the results harshly. Consider\njob interviews. Grayson says that rather than just examining competence,\nAsian companies focus on learning “who” they are considering hiring. This\nmay entail asking questions some Western countries deem illegal, such as\nwhether the candidate is married or plans on having children.\n\nChen’s ideas can’t solve legal problems like those, but they may help\nmanagers bridge the cultural chasm underlying them. Still, it’s a big task\n— certainly too big for one man to perform alone, and the strategy expert\nhas no intention of trying to do so single-handedly. Rather, his plan is\nto work through the Academy of Management to expose his colleagues to a\nframework they can use to study it on their own. The approach already\nseems to be working.\n\nDarden student Kelly — who worked for the U.S. Navy before coming to\nDarden and studying Foxconn with Chen — says he opened her eyes to the\nEast.\n\n“We’re still viewing China through a Western lens,” she says. “We’re not\nviewing the Chinese as partners.”\n","frontmatter":"headline: 'Charting an East/West Passage'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/uva-is-the-wine-trade-recession-proof.md":
/*!*****************************************************************!*\
  !*** ./app/data/clips/uva-is-the-wine-trade-recession-proof.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Is the Wine Trade Recession-Proof?","publication":"The Darden Report","position":"Freelance"},"body":"\nNO ONE GOT A CHANCE to put away the crate of Tignanello when it first\narrived at Young’s Fine Wines. Its six \\$109 bottles of wine barely had a\nchance to rest on the Manhasset, New York storeroom floor. Two hours\nlater, every bottle had been bought. That was two years ago, long before\nthe pain of recession set into people’s minds.\n\nThese days, Young’s wealthy Long Island clientele of Wall Street bankers\nand Madison Avenue advertising executives aren’t so quick to spend so big.\nThat’s why the store is pushing wines ranging in price from $15 to \\$25\nfrom a huge stock that regularly runs over 3,000 bottles. “At some point,\npeople are going to buy less,” said Young’s President Edward Wassmer (TEP\n’95).\n\nWithout a doubt, the recession has sharpened the senses and tightened the\nwallets of almost everyone. Like Wassmer, people throughout the wine trade\nare struggling to find ways to maintain sales without just slashing\nprices. While some markets, such as luxury clothing, have already moved to\nmassive discounts in the face of an economizing public, the wine industry\nhopes it can buck the trend—or at least embrace it slowly.\n\n“People are going to continue to drink. I think it’s one of our national\npastimes, isn’t it?” asked Gene Meoni, general manager of hospitality for\nthe Darden School Foundation, which includes a pub and a 300-seat dining\nroom. Recent sales at wine retailers suggest he’s right. They increased by 4.9 percent year-over-year to $8.2 billion for the 52 weeks ending January 10 (which includes the lucrative holiday season), according to Nielsen Scantrak. Indeed, for the four weeks ending January 10—just after the recession became official—retail sales grew 7.6 percent to \\$810 million.\n\nStill, pressure remains high to retain a big cut of those numbers.\n“Everybody can dance around it, but retailers want sharply reduced\nprices,” said Jack Kennard (MBA ’73), a senior vice president at Brown-Forman, one of the largest producers of wine and spirits in the world.\nKennard argues that giving into widespread and deep price reductions is a\nmistake that will permanently undermine a business’s product and a brand’s\nhealth. “Deep discounting is highly destructive to brand equity over the\nlong term,” he said.\n\nAs of early February, Brown-Forman was resisting deep price cuts. Instead,\nthe company was enticing sales by developing limited-time marketing\nprograms geared toward adding value at the point of purchase. For example,\nsome wines now include stemware boxed in gift sets, and the company is\ncreating more attractive gift cards and packaging to encourage sales.\nWhether people will buy the strategy for long is hard to say, as no one\nknows just how bad the economy will get—or when it will get better.\n\nOne thing is already clear, though— cheaper is better as far as consumers\nare concerned. Nielsen reports that the $3.00 – \\$5.99 category of wine\nbottles saw the strongest year-over-year growth at 12.9 percent to \\$189\nmillion for the four weeks ending January 10. Yet wines costing \\$15 or\nmore grew only 3.7 percent to \\$120 million during the same period. Indeed,\nthat was the only price range to shrink last fall as the economic strength\nof the U.S. plummeted, dropping 0.5 percent to \\$311 million over the 13\nweeks ending January 10.\n\nWithout a doubt, premium wines are in a tough spot. Judith Fowler (MBA\n’81), owner of the Clevedon, New Zealand– based winery Puriri Hills, knows\nthat only too well. With just 12,000 bottles of wine coming out of her\nwinery a year, Fowler agrees that cutting the price of her three labels,\nwhich range from $25 to \\$150 in the U.S., is a bad idea. “The price point\nhas to say something about quality,” she said. A strategy of massive price\ndiscounting is incompatible with the small volumes produced.\n\nThough the pressure is on, the 13-year- old winery is standing behind its\nconviction that “handmade, estate-bottled wines such as ours are becoming\nmore desirable as people shift from industrially produced foods to\nartisanal foods, even in the current tough market environment.” Puriri\nHills views the recession as an opportunity to grow within its market\nsegment, and the winery has found some palatable ways to inspire sales.\nLate last year, Fowler began giving some distributors price breaks or\ncredits for local taxes to help keep them in business to sell her cases.\n\n“You have to encourage your middle men in this kind of a time,” she said.\nFor instance, Fowler did not raise prices on a distributor in one Asian\nmarket whose native currency strengthened as much as 50 percent in the\nlast year against the New Zealand dollar. Though the distributor is e\nectively paying half as much for the same goods, keeping him on has helped\nPuriri Hills maintain and create sales in a tough environment.\n\nThose same currency fluctuations may also help Puriri Hills increase its\ndistribution. The New Zealand dollar has weakened by as much as 40 percent\nagainst the U.S. dollar in the last year, so Fowler is now looking into\nselling her wines in the U.S., in states beyond her native Virginia. As of\nFebruary, she was talking with her son—who distributes Puriri Hills in the\nU.S.—about selling them in New York City and Chicago. “You look for the\nspecific place where the customers want something unusual,” she said.\n\nShe may be on to something at a time when bars and restaurants are already\nstruggling to keep business up, said Darden’s Meoni. Wine sales are often\nan important component of their revenues because of what can be an\nextremely high markup on each bottle. But with people spending carefully,\nMeoni said both groups are thirsty for unusual labels from places such as\nNew Zealand that can sustain a similar markup at a lower price than super-high premium wines. “There’s a lot of stu that isn’t mainstream that is a very, very good value,” he said.\n\nStill, there is a strong demand for cheaper wines. That’s a big reason\nPleasant Valley Wine Company President Mike Doyle (MBA ’66) said business\nis booming right now. While the winery sells some of its own labels, much\nof its business comes from producing wines for third parties whose bottles\ngenerally run less than $20. “This is usually a slow time of year, and we’re pretty busy,” said Doyle. In fact, there are more opportunities than he can keep up with at the moment. And why not—he said most people can’t tell the difference between a \\$25 and a \\$125 bottle of Merlot.\n\nBrown-Forman’s Kennard doesn’t entirely agree. The “trade-down” effect,\nas the industry likes to call it, is only temporary, he said. By shying\naway from expensive wines and spirits, people aren’t casting a vote\nagainst the premium brands they’ve been loyal to for many years. “They\njust simply feel it’s not right for them right now as they attempt to\neconomize,” he said. “Luxury brands are ‘worn’ by consumers like badges,\nand premium sector wine and spirits consumers look forward rather\nhopefully to better times when they will confidently express themselves\nthrough luxury brands again.”\n\nWassmer of Young’s Fine Wines echoes the sentiment, but said these days he\nneeds to go with the flow. Despite strong sales in 2007, he decided it was\ntime to plan for a recession two years ago. Wall Street’s violent\nreactions to small slips in sales were one reason why. “You could see\npeople with just a little bit of softness were in a scramble,” he said. So\nhe cut back buying some popular—and pricey—vintages.\n\nAnd he did something curious: he started hiring. With some wine\ndiscounters nearby, competing on price alone was unlikely without a lot of\nattention to service and selection. “There’s really no way to e ectively\nsell that many items [over 3,000 bottles], but put out ‘shelf talkers’ to\nget the job done,” said Wassmer. Last year, he boosted the sales sta from\none full time person and two part-timers to three full time people and one\npart-timer, and developed a nine-week training course for them known as\n“Young’s U.”\n\nThere are early signs it’s working. An increase in customer count in\nJanuary—a traditionally weak month—of 11 percent to 7,684 people helped\ncushion a drop in sales of roughly one percent. In fairness, the recession\nmay be supercharging the strategy, driving people into retailers like\nYoung’s as they limit visits to bars and restaurants. Still, Wassmer said\nthe increase in count is a big reason he’s cautiously optimistic about 2009. But just in case, Wassmer may have hit upon a new way to ultimately\nlower some of the costs involved in educating his clientele—Internet\nvideo.\n\nThe store just launched a web-based video series named “Wine in a Minute.”\nEach short spot—which takes a day and a half to prepare—encourages\ncustomers to try new wines by educating them about new options. Right now,\nWassmer is not measuring the return on investment, but he’s already\noptimistic about the low-cost video programming based on anecdotal\nfeedback from customers. “It’s constantly a game of keeping your consumer\nexcited and educated,” he said. \n\nAnd coming back for more.\n","frontmatter":"headline: 'Is the Wine Trade Recession-Proof?'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/home/home.md":
/*!*******************************!*\
  !*** ./app/data/home/home.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"home","type":"home","name":"James Abels","motto":"Coder ∙ Founder ∙ Storyteller","updated":"11-12-19","altTextBoy":"This image represents the real world where we all live. It depicts an illustrated young man at center, his hands resting on translucent keyboards, looking up into the largest of of several floating monitors. A fairy floats in the air above his left shoulder, pixie dust trailing behind her. The nine translucent monitors before them are of different sizes. The main monitor is large and occupies most of the screen. The other eight are smaller, and mostly float off to the sides. Four of the nine monitors have some computer code on them. Another world can be seen within these monitors. The young man is creating it through a mixture of imagination, code, and magic. The amount seen in this image is a function of each devices screen width. The main action is at center, with fun details revealed as the Browser window is made progressively wider, or by turning mobile devices to their landscape view.","altTextForrest":"A magical forrest illustration can be seen within the monitors into which the young man and pixie look. This background illustration is the first world users see when loading the site. It's seen beneath the monitors into which the young man and pixie look. Glowing crystals float besie the blue-purple trees that frame the left and right sides of the scene. In the center sits a large tree trunk. It splits in two, growing upwards in a great U shape, like a tuning fork. A great old magical stone portal is held aloft between them, its inner circle divided into individual stone blocks. Each block has a rune of code carved into it. Glowing balls of light fill the air, while the space immediately inside the portal glows a hazy yellow-ish green.","altTextNyc":"A reddish-yellow illustration of the New York City skyline can be seen within the boy's foreground monitors after users successfully cast a spell by clicking five active Charms. These Charms are accessed by clicking the name on the home page. The image showcases the Empire State Building just off-center toward teh right side of the image. The sun casts a bright yellow ball of light behind 34th Street's famous anchor point. New York's skyscrapters are drawn into place through a variety of textures. Some have smooth sides, some have verticle or horizontal lines on them, and still others are given form in the image via diagonal screens of pink and yellow dots. Many of the buildings include glowing windows. It's dusk, and the sun if casting the sky in crimson-yellow hues.","altTextBoyBlurred":"This image is a blurred version of the normal foreground image. It featuers an illustrated young man, working on two translucent keyboards, a fairy floating above his left shoulder. Both characters are looking up into a set of nine translucent monitors. They show a background image beneath them. By default, the background illustration shows an old magical forrest. A second background image, a crimson-yellow NYC skyline, is seen after users cast a spell on the home page by clicking five active Charms in a row. Charms are accessed by clicking the name on the home page. This blurred image is used to occupy user attention while the site loads, and to mask the foreground image on very short or narrow screens. When shown on load, it reveals the unblurred version beneath it by fading out of view.","altTextForrestBlurred":"This image is a blurred version of the normal forrest image. It features a blurred version of the magical old forrest, which is made up of blue-purple trees, a magical sone portal with runes of code adorning its inner circle's edges, and crystals, floating in the air beside small glowing orbs. This image is used for two reasons. First, it occupies user attention while the site loads, fading out of view to reveal the unblurred version of it as it goes. Second, it's shown while users are casting spells in order to focus attention on the Charms they must select, as opposed to the magical forrest beneath them.","altTextNycBlurred":"This image is a blurred version of the normal New York City skyline image. It features a blurred version of the city's skyline, which is made up of artistically illustrated buildings. Each building's walls are smooth, or full of horizontal or vertical lines. Some buildings are given shape by diagonal screens of dots. Many have glowing windows. The sky is a yellow-pink hue, cast from a bright sun that has begun to set behind the Empire State Building, which is found at center left. This image is shown while users are casting a spell to return to the magical forrest. It focuses attention on the Charms that are used to cast spells, not the skyline that otherwise sits beneath the foreground monitors.","altTextForrestFallback":"This image is a very blurred version of the old magical forrest. It is stored in Browser memory and is shown on mobile devices to hide the fact that mobile Browsers may not instantly load the home page images when users navigate to home from any other page of the site.","altTextNycFallback":"This image is a very blurred version of the New York City skyline. It is stored in Browser memory and is shown on mobile devices to hide the fact that mobile Browsers may not instantly load the home page images when users navigate to home from any other page of the site. This image is only used after the user has cast a first spell, leaving the old magical forrest for home on the home page.","preloadUrls":["home-boy","home-boy/blurred","home-forrest","home-forrest/blurred","home-nyc","home-nyc/blurred"],"imageNames":["bigBoy","blurredBoy","bigForrest","blurredForrest","bigNYC","blurredNYC"]},"body":"\nI write code that tells clear and compelling stories. Let's talk about yours.","frontmatter":"page: home\ntype: home\nname: James Abels\nmotto: Coder ∙ Founder ∙ Storyteller\nupdated: 11-12-19\naltTextBoy: \"This image represents the real world where we all live. It depicts an illustrated young man at center, his hands resting on translucent keyboards, looking up into the largest of of several floating monitors. A fairy floats in the air above his left shoulder, pixie dust trailing behind her. The nine translucent monitors before them are of different sizes. The main monitor is large and occupies most of the screen. The other eight are smaller, and mostly float off to the sides. Four of the nine monitors have some computer code on them. Another world can be seen within these monitors. The young man is creating it through a mixture of imagination, code, and magic. The amount seen in this image is a function of each devices screen width. The main action is at center, with fun details revealed as the Browser window is made progressively wider, or by turning mobile devices to their landscape view.\"\naltTextForrest: \"A magical forrest illustration can be seen within the monitors into which the young man and pixie look. This background illustration is the first world users see when loading the site. It's seen beneath the monitors into which the young man and pixie look. Glowing crystals float besie the blue-purple trees that frame the left and right sides of the scene. In the center sits a large tree trunk. It splits in two, growing upwards in a great U shape, like a tuning fork. A great old magical stone portal is held aloft between them, its inner circle divided into individual stone blocks. Each block has a rune of code carved into it. Glowing balls of light fill the air, while the space immediately inside the portal glows a hazy yellow-ish green.\"\naltTextNyc: \"A reddish-yellow illustration of the New York City skyline can be seen within the boy's foreground monitors after users successfully cast a spell by clicking five active Charms. These Charms are accessed by clicking the name on the home page. The image showcases the Empire State Building just off-center toward teh right side of the image. The sun casts a bright yellow ball of light behind 34th Street's famous anchor point. New York's skyscrapters are drawn into place through a variety of textures. Some have smooth sides, some have verticle or horizontal lines on them, and still others are given form in the image via diagonal screens of pink and yellow dots. Many of the buildings include glowing windows. It's dusk, and the sun if casting the sky in crimson-yellow hues.\"\naltTextBoyBlurred: \"This image is a blurred version of the normal foreground image. It featuers an illustrated young man, working on two translucent keyboards, a fairy floating above his left shoulder. Both characters are looking up into a set of nine translucent monitors. They show a background image beneath them. By default, the background illustration shows an old magical forrest. A second background image, a crimson-yellow NYC skyline, is seen after users cast a spell on the home page by clicking five active Charms in a row. Charms are accessed by clicking the name on the home page. This blurred image is used to occupy user attention while the site loads, and to mask the foreground image on very short or narrow screens. When shown on load, it reveals the unblurred version beneath it by fading out of view.\"\naltTextForrestBlurred: \"This image is a blurred version of the normal forrest image. It features a blurred version of the magical old forrest, which is made up of blue-purple trees, a magical sone portal with runes of code adorning its inner circle's edges, and crystals, floating in the air beside small glowing orbs. This image is used for two reasons. First, it occupies user attention while the site loads, fading out of view to reveal the unblurred version of it as it goes. Second, it's shown while users are casting spells in order to focus attention on the Charms they must select, as opposed to the magical forrest beneath them.\"\naltTextNycBlurred: \"This image is a blurred version of the normal New York City skyline image. It features a blurred version of the city's skyline, which is made up of artistically illustrated buildings. Each building's walls are smooth, or full of horizontal or vertical lines. Some buildings are given shape by diagonal screens of dots. Many have glowing windows. The sky is a yellow-pink hue, cast from a bright sun that has begun to set behind the Empire State Building, which is found at center left. This image is shown while users are casting a spell to return to the magical forrest. It focuses attention on the Charms that are used to cast spells, not the skyline that otherwise sits beneath the foreground monitors.\"\naltTextForrestFallback: \"This image is a very blurred version of the old magical forrest. It is stored in Browser memory and is shown on mobile devices to hide the fact that mobile Browsers may not instantly load the home page images when users navigate to home from any other page of the site.\"\naltTextNycFallback: \"This image is a very blurred version of the New York City skyline. It is stored in Browser memory and is shown on mobile devices to hide the fact that mobile Browsers may not instantly load the home page images when users navigate to home from any other page of the site. This image is only used after the user has cast a first spell, leaving the old magical forrest for home on the home page.\"\npreloadUrls: [\n  'home-boy',\n  'home-boy/blurred',\n  'home-forrest',\n  'home-forrest/blurred',\n  'home-nyc',\n  'home-nyc/blurred',\n]\nimageNames: [\n  bigBoy,\n  blurredBoy,\n  bigForrest,\n  blurredForrest,\n  bigNYC,\n  blurredNYC\n]"}

/***/ }),

/***/ "./app/data/projects sync recursive \\.md$":
/*!**************************************!*\
  !*** ./app/data/projects sync \.md$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alexa.md": "./app/data/projects/alexa.md",
	"./arrow.md": "./app/data/projects/arrow.md",
	"./jamesabels.md": "./app/data/projects/jamesabels.md",
	"./slingshot.md": "./app/data/projects/slingshot.md",
	"./tmmnews.md": "./app/data/projects/tmmnews.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/projects sync recursive \\.md$";

/***/ }),

/***/ "./app/data/projects/alexa.md":
/*!************************************!*\
  !*** ./app/data/projects/alexa.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":1,"projectName":"Alexa skills","pitch":"Start-up ideas and fun toys","type":"Coding","technologies":"Cloud: AWS Lambda ∙ Language: Node.js, Javascript","responsibility":"Inventor and lead developer","story":"With smart speaker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.","captions":["Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.","G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.","Take on G picks up where G's Rules of Funny left off. This trivia game asks players nonsensical, irrelevant, and perplexing questions. Can you get beat G as easily as he beat Ninja Gaidan?"],"mainImages":["/alexa/alexa-wsq-xnc","/alexa/alexa-gs-rules-of-funny-xnc","/alexa/alexa-take-on-g-xnc"],"projectThumbnail":["/alexa/thumbs/alexa-wsq-xnc-q90","/alexa/thumbs/alexa-gs-rules-of-funny-xnc-q90","/alexa/thumbs/alexa-take-on-g-xnc-q90"],"showTheseAttributes":["story","responsibility","technologies"],"imageHolderHeight":["2500 1875","2500 1875","2500 1875"]},"body":"","frontmatter":"number: \n  1\nprojectName: \n  'Alexa skills'\npitch: \n  'Start-up ideas and fun toys'\ntype:\n  'Coding'\ntechnologies: \n  'Cloud: AWS Lambda ∙ Language: Node.js, Javascript'\nresponsibility: \n  'Inventor and lead developer'\nstory: \n  'With smart speaker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.'\ncaptions: [\n  'Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.',\n  \"G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.\",\n  \"Take on G picks up where G's Rules of Funny left off. This trivia game asks players nonsensical, irrelevant, and perplexing questions. Can you get beat G as easily as he beat Ninja Gaidan?\"\n]\nmainImages: [\n  '/alexa/alexa-wsq-xnc',\n  '/alexa/alexa-gs-rules-of-funny-xnc',\n  '/alexa/alexa-take-on-g-xnc'\n]\nprojectThumbnail: [\n  '/alexa/thumbs/alexa-wsq-xnc-q90',\n  '/alexa/thumbs/alexa-gs-rules-of-funny-xnc-q90',\n  '/alexa/thumbs/alexa-take-on-g-xnc-q90'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]\nimageHolderHeight: [\n  '2500 1875',\n  '2500 1875',\n  '2500 1875'\n]"}

/***/ }),

/***/ "./app/data/projects/arrow.md":
/*!************************************!*\
  !*** ./app/data/projects/arrow.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":3,"projectName":"Arrow","pitch":"Personalizing interactive video at scale","type":"Founder","technologies":"Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.","story":"Internet video has exploded. Arrow, our self-serve platform, made it easy to personalize its interactive features at scale with first- or third-party data.","captions":["This is the Editor. It was used to prepare video for publication by adding them to a Stack, then selecting personalization criteria via dynamically generated settings. It syndicated video, too.","This is the Developer Module. It allowed Arrow to be extended for use with custom media formats, settings, and live control. Arrow could publish any code-based media package.","This is the Encapsulated Presentation Module (\"EPM\"). Developers used it to extend Arrow by mixing their source code with PubML, our proprietary domain-specific programming language.","These are Stack Settings. They were used by editors to add personalization criteria to their videos. These settings were dynamically generated from code found within each active EPM.","These are Live Controls. They were used by editors to modify media in real time, after publication. Like Settings, they were dynamically generated from code found within each active EPM."],"mainImages":["/arrow/arrow-editor-xnc","/arrow/arrow-dev-module-xnc","/arrow/arrow-epm-xnc","/arrow/arrow-settings-xnc","/arrow/arrow-control-xnc"],"projectThumbnail":["/arrow/thumbs/arrow-editor-xnc-q90","/arrow/thumbs/arrow-dev-module-xnc-q90","/arrow/thumbs/arrow-epm-xnc-q90","/arrow/thumbs/arrow-settings-xnc-q90","/arrow/thumbs/arrow-control-xnc-q90"],"showTheseAttributes":["story","responsibility","technologies"],"imageHolderHeight":["2500 2540","2500 2540","2500 2540","2500 2540","2500 2540"]},"body":"","frontmatter":"number: \n  3\nprojectName: \n  'Arrow'\npitch: \n  'Personalizing interactive video at scale'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg'\nresponsibility: \n  'As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.'\nstory: \n  'Internet video has exploded. Arrow, our self-serve platform, made it easy to personalize its interactive features at scale with first- or third-party data.'\ncaptions: [\n  'This is the Editor. It was used to prepare video for publication by adding them to a Stack, then selecting personalization criteria via dynamically generated settings. It syndicated video, too.',\n  'This is the Developer Module. It allowed Arrow to be extended for use with custom media formats, settings, and live control. Arrow could publish any code-based media package.',\n  'This is the Encapsulated Presentation Module (\"EPM\"). Developers used it to extend Arrow by mixing their source code with PubML, our proprietary domain-specific programming language.',\n  'These are Stack Settings. They were used by editors to add personalization criteria to their videos. These settings were dynamically generated from code found within each active EPM.',\n  'These are Live Controls. They were used by editors to modify media in real time, after publication. Like Settings, they were dynamically generated from code found within each active EPM.'\n]\nmainImages: [\n  '/arrow/arrow-editor-xnc',\n  '/arrow/arrow-dev-module-xnc',\n  '/arrow/arrow-epm-xnc',\n  '/arrow/arrow-settings-xnc',\n  '/arrow/arrow-control-xnc'\n]\nprojectThumbnail: [\n  '/arrow/thumbs/arrow-editor-xnc-q90',\n  '/arrow/thumbs/arrow-dev-module-xnc-q90',\n  '/arrow/thumbs/arrow-epm-xnc-q90',\n  '/arrow/thumbs/arrow-settings-xnc-q90',\n  '/arrow/thumbs/arrow-control-xnc-q90'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]\nimageHolderHeight: [\n  '2500 2540',\n  '2500 2540',\n  '2500 2540',\n  '2500 2540',\n  '2500 2540'\n]"}

/***/ }),

/***/ "./app/data/projects/index.js":
/*!************************************!*\
  !*** ./app/data/projects/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/projects sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    return a.attributes.number - b.attributes.number;
  });
})());

/***/ }),

/***/ "./app/data/projects/jamesabels.md":
/*!*****************************************!*\
  !*** ./app/data/projects/jamesabels.md ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":2,"projectName":"My personal site","pitch":"An illustrated site about stories and code","type":"Coding","technologies":"Cloud: Github Pages | Language: Javascript, HTML, CSS | Framework: React","responsibility":"Creator and developer","story":"This portfolio site explores what happens when a creative codes.","captions":["Full-screen illustrations and a secret magic spell bring my imagination to life.","I came to N.Y.C. after law school to write professionally. Here are some of my stories.","This children's book for adults let me experiment with traditional storytelling methods online.","This digital business card tells you who I am and how you can contact me."],"mainImages":["/jea/ja-home-page-xnc","/jea/ja-journalism-xnc","/jea/ja-chapter-1-xnc","/jea/ja-business-card-xnc"],"projectThumbnail":["/jea/thumbs/ja-home-page-xnc-q90","/jea/thumbs/ja-journalism-xnc-q90","/jea/thumbs/ja-chapter-1-xnc-q90","/jea/thumbs/ja-business-card-xnc-q90"],"showTheseAttributes":["story","responsibility","technologies"],"imageHolderHeight":["2500 2629","2500 2629","2500 2629","2500 2629"]},"body":"","frontmatter":"number: \n  2\nprojectName: \n  'My personal site'\npitch: \n  'An illustrated site about stories and code'\ntype:\n  'Coding'\ntechnologies: \n  'Cloud: Github Pages | Language: Javascript, HTML, CSS | Framework: React'\nresponsibility: \n  'Creator and developer'\nstory: \n  'This portfolio site explores what happens when a creative codes.'\ncaptions: [\n  \"Full-screen illustrations and a secret magic spell bring my imagination to life.\",\n  \"I came to N.Y.C. after law school to write professionally. Here are some of my stories.\",\n  \"This children's book for adults let me experiment with traditional storytelling methods online.\",\n  \"This digital business card tells you who I am and how you can contact me.\"\n]\nmainImages: [\n  '/jea/ja-home-page-xnc',\n  '/jea/ja-journalism-xnc',\n  '/jea/ja-chapter-1-xnc',\n  '/jea/ja-business-card-xnc'\n]\nprojectThumbnail: [\n  '/jea/thumbs/ja-home-page-xnc-q90',\n  '/jea/thumbs/ja-journalism-xnc-q90',\n  '/jea/thumbs/ja-chapter-1-xnc-q90',\n  '/jea/thumbs/ja-business-card-xnc-q90'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]\nimageHolderHeight: [\n  '2500 2629',\n  '2500 2629',\n  '2500 2629',\n  '2500 2629'\n]"}

/***/ }),

/***/ "./app/data/projects/slingshot.md":
/*!****************************************!*\
  !*** ./app/data/projects/slingshot.md ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":4,"projectName":"Slingshot","pitch":"Directing global software demos","type":"Founder","technologies":"Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.","story":"Live software demos are hard. Slingshot made them much easier by offering simple tools to remotely choregraph what viewers saw on their own screens.","captions":["This is the Remote. It offered hands-free control over slides and software. Presenters could use it to run global software demos or to wander the room during in-person meetings.","The Remote controlled interactivity. A presenter could use it to refresh a viewer's screen, to start and stop a live video, and more. In this case, it was used to add a live YouTube video to screen.","Once logged in, viewers saw a plain white Web page. Presenters then used the Remote to decide what appeared on it. In this case, a slide is being shown.","Once logged in, viewers saw a plain white Web page. Presenters then used the Remote to decide what appeared on it. In this case, a live YouTube video and its embed code are being shown.","The remote helped presenters make important points with a little drama. In this case, the live YouTube video's embed code is being highlighted in yellow."],"mainImages":["/slingshot/slingshot-remote-slides-xnc","/slingshot/slingshot-remote-stage-xnc","/slingshot/slingshot-guest-slides-xnc","/slingshot/slingshot-guest-stage-no-highlight-xnc","/slingshot/slingshot-guest-stage-highlight-xnc"],"projectThumbnail":["/slingshot/thumbs/slingshot-remote-slides-xnc-q90","/slingshot/thumbs/slingshot-remote-stage-xnc-q90","/slingshot/thumbs/slingshot-guest-slides-xnc-q90","/slingshot/thumbs/slingshot-guest-stage-no-highlight-xnc-q90","/slingshot/thumbs/slingshot-guest-stage-highlight-xnc-q90"],"showTheseAttributes":["story","responsibility","technologies"],"imageHolderHeight":["2500 1875","2500 1875","2500 1875","2500 1875","2500 1875"]},"body":"","frontmatter":"number: \n  4\nprojectName: \n  'Slingshot'\npitch: \n  'Directing global software demos'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets'\nresponsibility:\n  'As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.'\nstory:\n  \"Live software demos are hard. Slingshot made them much easier by offering simple tools to remotely choregraph what viewers saw on their own screens.\"\ncaptions: [\n  \"This is the Remote. It offered hands-free control over slides and software. Presenters could use it to run global software demos or to wander the room during in-person meetings.\",\n  \"The Remote controlled interactivity. A presenter could use it to refresh a viewer's screen, to start and stop a live video, and more. In this case, it was used to add a live YouTube video to screen.\",\n  \"Once logged in, viewers saw a plain white Web page. Presenters then used the Remote to decide what appeared on it. In this case, a slide is being shown.\",\n  \"Once logged in, viewers saw a plain white Web page. Presenters then used the Remote to decide what appeared on it. In this case, a live YouTube video and its embed code are being shown.\",\n  \"The remote helped presenters make important points with a little drama. In this case, the live YouTube video's embed code is being highlighted in yellow.\"\n]\nmainImages: [\n  '/slingshot/slingshot-remote-slides-xnc',\n  '/slingshot/slingshot-remote-stage-xnc',\n  '/slingshot/slingshot-guest-slides-xnc',\n  '/slingshot/slingshot-guest-stage-no-highlight-xnc',\n  '/slingshot/slingshot-guest-stage-highlight-xnc'\n]\nprojectThumbnail: [\n  '/slingshot/thumbs/slingshot-remote-slides-xnc-q90',\n  '/slingshot/thumbs/slingshot-remote-stage-xnc-q90',\n  '/slingshot/thumbs/slingshot-guest-slides-xnc-q90',\n  '/slingshot/thumbs/slingshot-guest-stage-no-highlight-xnc-q90',\n  '/slingshot/thumbs/slingshot-guest-stage-highlight-xnc-q90'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]\nimageHolderHeight: [\n  '2500 1875',\n  '2500 1875',\n  '2500 1875',\n  '2500 1875',\n  '2500 1875'\n]"}

/***/ }),

/***/ "./app/data/projects/tmmnews.md":
/*!**************************************!*\
  !*** ./app/data/projects/tmmnews.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":5,"projectName":"TMMnews","pitch":"Internet video news about media-tech","type":"Founder","technologies":"Cloud: WordPress ∙ Language: JavaScript, HTML, CSS","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.","story":"TMMnews was built to earn money from high-priced video ads by placing them in video news stores that would then run within lower cost IAB display ad boxes.","captions":["The TMMnews Web site marketed the company's original video news stories. It featured news videos, reporter's notes, and aggregated headlines from Daylife, a New York-based start-up.","Original news stories were anchored by James Erik Abels, a former media reporter from Forbes and Mergermarket. Over 100 stories were produced, ranging from exclusives to news analyses.","In 2011, TMM was asked to contribute to New York City's FIRST Robotics Competition. A team of ten media professionals volunteered to run a three-hour live Internet broadcast of the event."],"mainImages":["/tmmnews/tmmnews-home-page-xnc","/tmmnews/tmmnews-anchoring-xnc","/tmmnews/tmmnews-first-live-xnc"],"projectThumbnail":["/tmmnews/thumbs/tmmnews-home-page-xnc-q90","/tmmnews/thumbs/tmmnews-anchoring-xnc-q90","/tmmnews/thumbs/tmmnews-first-live-xnc-q90"],"showTheseAttributes":["story","responsibility","technologies"],"imageHolderHeight":["2500 1875","2500 1406","2500 1406"]},"body":"","frontmatter":"number: \n  5\nprojectName: \n  'TMMnews'\npitch: \n  'Internet video news about media-tech'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: WordPress ∙ Language: JavaScript, HTML, CSS'\nresponsibility:\n  'As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including our lead developer, budget, and investor outreach.'\nstory:\n  'TMMnews was built to earn money from high-priced video ads by placing them in video news stores that would then run within lower cost IAB display ad boxes.'\ncaptions: [\n  \"The TMMnews Web site marketed the company's original video news stories. It featured news videos, reporter's notes, and aggregated headlines from Daylife, a New York-based start-up.\",\n  'Original news stories were anchored by James Erik Abels, a former media reporter from Forbes and Mergermarket. Over 100 stories were produced, ranging from exclusives to news analyses.',\n  \"In 2011, TMM was asked to contribute to New York City's FIRST Robotics Competition. A team of ten media professionals volunteered to run a three-hour live Internet broadcast of the event.\"\n]\nmainImages: [\n  '/tmmnews/tmmnews-home-page-xnc',\n  '/tmmnews/tmmnews-anchoring-xnc',\n  '/tmmnews/tmmnews-first-live-xnc'\n]\nprojectThumbnail: [\n  '/tmmnews/thumbs/tmmnews-home-page-xnc-q90',\n  '/tmmnews/thumbs/tmmnews-anchoring-xnc-q90',\n  '/tmmnews/thumbs/tmmnews-first-live-xnc-q90'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]\nimageHolderHeight: [\n  '2500 1875',\n  '2500 1406',\n  '2500 1406'\n]"}

/***/ }),

/***/ "./app/data/reveries sync recursive \\.md$":
/*!**************************************!*\
  !*** ./app/data/reveries sync \.md$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./02-02-2019-welcome-to-reverie.md": "./app/data/reveries/02-02-2019-welcome-to-reverie.md",
	"./02-03-2019-pedestal-sink.md": "./app/data/reveries/02-03-2019-pedestal-sink.md",
	"./03-19-2019-wherefore-im-forced-into-browser-testing.md": "./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md",
	"./03-30-2019-randomly-choosing-web-image-formats.md": "./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md",
	"./04-13-2019-when-css-styles-break.md": "./app/data/reveries/04-13-2019-when-css-styles-break.md",
	"./04-17-19-the-imperfections-of-browser-testing-one.md": "./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md",
	"./04-18-19-the-imperfections-of-browser-testing-two.md": "./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md",
	"./06-17-19-private-methods.md": "./app/data/reveries/06-17-19-private-methods.md",
	"./06-19-19-netflix-survey.md": "./app/data/reveries/06-19-19-netflix-survey.md",
	"./06-23-19-alexa-off.md": "./app/data/reveries/06-23-19-alexa-off.md",
	"./08-05-19-netflix-chromecast.md": "./app/data/reveries/08-05-19-netflix-chromecast.md",
	"./11-03-19-magic-artistry-and-image-fallbacks-1.md": "./app/data/reveries/11-03-19-magic-artistry-and-image-fallbacks-1.md",
	"./11-03-19-my-best-worst-decision.md": "./app/data/reveries/11-03-19-my-best-worst-decision.md",
	"./11-03-19-react-transition-group-and-why-i-hate.md": "./app/data/reveries/11-03-19-react-transition-group-and-why-i-hate.md",
	"./11-03-19-surf-click-sync.md": "./app/data/reveries/11-03-19-surf-click-sync.md",
	"./11-03-19-tracking-pinch-zoom.md": "./app/data/reveries/11-03-19-tracking-pinch-zoom.md",
	"./11-04-19-adventures-in-the-resize-event.md": "./app/data/reveries/11-04-19-adventures-in-the-resize-event.md",
	"./11-04-19-extra-flair-for-new-users.md": "./app/data/reveries/11-04-19-extra-flair-for-new-users.md",
	"./11-04-19-image-compression-an-art-not-a-science.md": "./app/data/reveries/11-04-19-image-compression-an-art-not-a-science.md",
	"./11-04-19-magic-artistry-and-image-fallbacks-2.md": "./app/data/reveries/11-04-19-magic-artistry-and-image-fallbacks-2.md",
	"./11-07-19-broken-browsers-width-is-height.md": "./app/data/reveries/11-07-19-broken-browsers-width-is-height.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/reveries sync recursive \\.md$";

/***/ }),

/***/ "./app/data/reveries/02-02-2019-welcome-to-reverie.md":
/*!************************************************************!*\
  !*** ./app/data/reveries/02-02-2019-welcome-to-reverie.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Welcome to Reverie","date":"March 2, 2019","slug":"Let's slip away"},"body":"\nHi. Welcome to Reverie.\n\nI'm not entirely sure what this is, but here's what it's not:\n\n* A click-bait machine\n* Something terribly serious\n* A place for regular commentary\n\nHere's what it may be:\n\nA spot for a few thoughts about whatever momentarily inspires me. That should keep it light, although, I have a couple longer pieces I'd like to do about things like:  \n\n* The state of broadcast TV Web sites\n* Some thoughts on Netflix and Amazon Prime\n* A question about privacy options on smartphones\n\nHere's how it works:\n\n* Reverie is accessed through the footer, not header, because it's like a daydream — irregular and ancillary to the site.\n* Clicking Reverie from Reverie will take you back to whereever you were before it. If you came directly here, you'll go home.\n* I built this from scratch. It's an actual, real-life, home-grown blog. Half the point was to figure out how to do it. I'll write about that soon-ish.\n\nWhat about social sharing and the like?\n\nWell, let's see if I keep this up and if anyone reads, then I can explore. \n\nWhat about Medium, where all the cool kids write these days?\n\nMeh. Something to be said for going old school, for now.\n\nThat's it. Look around. Email me. Enjoy.\n\n-j","frontmatter":"type: reverie\nheadline: Welcome to Reverie\ndate: March 2, 2019\nslug: Let's slip away"}

/***/ }),

/***/ "./app/data/reveries/02-03-2019-pedestal-sink.md":
/*!*******************************************************!*\
  !*** ./app/data/reveries/02-03-2019-pedestal-sink.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Pedestal sinks","date":"March 3, 2019","slug":"Pedestal stinks"},"body":"\nSad to say, I have a pedestal sink. \n\nIt's got a wide, flat bottom. I'm sure I thought these things looked great in pictures once. Then I got one. Three problems:\n\n1. Don't lean too low if you spit after brushing your teeth. It often bounces back at you because the bottom's flat.\n\n2. The sink gets dirty very quickly. Flat bottoms don't drain well.\n\n3. There's almost nowhere to put anything because the pedestal's bezel is thin-n-narrow. \n   \nI know these things look great on Instagram, but they make lousy roommates.\n\n-j\n\n<!-- <iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/XSpw22HPdHU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\n","frontmatter":"type: reverie\nheadline: Pedestal sinks\ndate: March 3, 2019\nslug: Pedestal stinks"}

/***/ }),

/***/ "./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md":
/*!**********************************************************************************!*\
  !*** ./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Wherefore I'm forced to browser test","date":"March 19, 2019","slug":"Browser testi"},"body":"\nI was forced into browser testing today. Why?\n\nI tried to run the site on an old iPad Mini (iOs 8, Safari 8) around 8 last night. Disaster. It wouldn't load. I eventually realized the problem — Safari 8 didn't understand some of my code (something like: 'meMyselfAndI'.includes('me')). \n\nSo I polyfilled it (meaning I used a plugin to add the missing method) via Bowser and Webpack. And I learned my lesson — with this much work in, browser testing is not optional.\n\nSo there I am talking to myself at all hours of the night, running my first test with Endtest. It's a browser-testing platform. You give it a URL, it takes a screenshot on whatever machine and browser you specify. I got a test running — one of their free ones. I liked the results, but Endtest wants $138 per month for the platform. Not for me. \n\nSo I Googled competitors and settled on BrowserStack because I've heard of them, their product's comprehensive, and, frankly, I found the $39 a month (if you go monthly) palatable. I think I only need a month's testing. \n\n(BrowserStack has a freelancer rate, but you can't do screenshots with it. Worthless.)\n\nA review's next, but I'll say this now — love what they're trying to do.\n\n-j\n\n\n\n\n\n\n","frontmatter":"type: reverie\nheadline: Wherefore I'm forced to browser test\ndate: March 19, 2019\nslug: Browser testi"}

/***/ }),

/***/ "./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md":
/*!*****************************************************************************!*\
  !*** ./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"3ype":"reverie","headline":"A groan about Web image formats","date":"March 30, 2019","slug":"Randomly choosing Web images"},"body":"\nFile Web images under life's great mysteries.\n\nI wanted my icon files — which I use for chapter and menu buttons — to be as small as possible. According to Google's guide to Web images, the best format for them is JPG. See the picture under [\"Selecting the right image format\"](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).\n\nGoogle says that among rasters (files that encode color values for every pixel), JPG is great for images with few details and small color palettes.\n\nNow, let's look at practical reality. \n\nThe chapter icon (a filled-in circle image) is eight pixels by eight pixels and uses one color. This results in the following file sizes:\n\n* SVG (Inkscape): 2 kilobytes\n* SVG (Optimized): 722 bytes (Inkscape-specific data is stripped out)\n* JPG: 966 bytes (Exported from a PNG using the worst quality setting in a Mac's \"Preview\" app)\n* PNG: 674 bytes\n\nI went with PNG, obviously. \n\nSo, firstly, knowing what's best upfront may be clearer with more knowledge and experience. \n\nSecondly, look at the SVG. It uses plain English to describe how images should look (like HTML does for Web pages). Its two kilobytes no matter the image's size. If it got bigger, this format would be great becuse the file would still be two kilobytes. In this case, the image is fixed at eight pixels, so I don't think it matters. \n\nAnyway, point is that it all basically came down to guessing. Who needs the article?\n\n-j\n","frontmatter":"3ype: reverie\nheadline: A groan about Web image formats\ndate: March 30, 2019\nslug: Randomly choosing Web images"}

/***/ }),

/***/ "./app/data/reveries/04-13-2019-when-css-styles-break.md":
/*!***************************************************************!*\
  !*** ./app/data/reveries/04-13-2019-when-css-styles-break.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"When CSS styles break","date":"April 13, 2019","slug":"Styled components are unchangeable"},"body":"\nLost four hours last night.\n\nFor some reason, I stopped being able to modify the site's CSS. I was fixing some overflowing header text on my iPhone SE. I practically screamed in public, banged some keys, and felt marginally better. \n\n\nThing was, I was almost done. I was tweaking design and getting production and development 'builds' in order. Basically, this means telling Webpack to generate different types of code based on the build type. Webpack 'bundles' javascript files together so a user's machine can run them.\n\nAnyway, in the middle of all this, my CSS stopped working. Or at least my ability to edit it on the fly did. Chrome just greyed out all the rules. Googling the problem was heartbreaking. Most commentary called it a stylesheet error. There's a workaround, but it's a hack. And, anyway, a portfolio site can't be broken.\n\nSo I started futzing about. First I created a bunch of new branches from old code (a branch is a complete set of folders, files, and code that represent my entire project at a given point in time). I hoped to find one where the CSS worked. \n\nDidn't. \n\nSo then I disabled most of my code and threw a plain box of text on screen. That worked, sorta, so I got suspicous of Styled Components.\n\nStyled Components is an open-source javascript project. It lets me write CSS rules directly inside my javascript, as opposed to putting them in a separate stylesheet. I started the site with one of these stylesheets. I spent half my time maintaining it — debugging it, making stuff work, getting lost inside it at some later date.\n\nI'd like to say I'll never do that again, but I'm sure lots of people still use stylesheets. And suffer. Anyway, I began Googling again for greyed out CSS rules in Chrome when using Styled Components. And I [found my diagnosis](https://stackoverflow.com/questions/51544215/styled-component-styles-are-disabled-in-chrome-devtools).\n\nWhen in production mode, Styled Components create a type of CSS that can't be edited in Chrome. It can only be edited when in development mode. Remember what I said earlier, I'd been messing around with this very thing the last couple days. So, I changed some code — no joy. \n\nI changed more code — no joy.\n\nA lot of painful time went by before I had another brainstorm. I'm doing something really smart with my production build. I'm using a \"content delivery network\" (CDN) to deliver some of the site's dependencies, rather than bundling them all together into a package that I deliver. I'll explain why later (hint: bandwidth usage limits). \n\nPoint is, I told the CDN to deliver a production version of Styled Components. I hard coded it (which devs don't like for a reason). And that's my problem! \n\nLessons learned:\n\n1. Managing production and development builds requires thoughtfulness.\n2. Clever ideas may not be so clever (remember that scene at the end of \"Miracle on 34th Street\" when Fred Gailey sees Santa's cane?)\n3. Documentation tends to fall down when it comes to the fundamentals — I can't find this issue on the Styled Components site. If it's there, it's hard to find. I think it should be front-and-center in a \"Gotchas\" section.\n\nAnyway, there's more to say...but I think I've milked this for all it's worth.\n\n-j","frontmatter":"type: reverie\nheadline: When CSS styles break\ndate: April 13, 2019\nslug: Styled components are unchangeable"}

/***/ }),

/***/ "./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md":
/*!********************************************************************************!*\
  !*** ./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"The imperfections of browser testing 1","date":"April 17, 2019","slug":"Virtual machines may lie, really"},"body":"\nWhite flag!\n\nBrowserStack says my design is breaking on some old machines. It took a long time, but I finally realized that a second, hidden scrollbar is being added to the right side of the screen. This element allows users to scroll content when it's too long for the page. \n\nThe hidden scrollbar creates an ugly gap, and brings up two questions: \n\n1. Are virtual machines always true to reality?\n2. Does React always understand what browsers are doing?\n\nNow, I don't know anything much about anything much. Worse, sometimes I find out that I'm wrong. But I'm pretty sure the answer is no, no, it depends, and, at least occasionally, no. Always cover your bets.\n\nI. Are virtual machines always true to reality?\n\nA virtual machine allows you to run an entire computer that isn't yours on top of your computer. So, for example, I can run Windows XP in a virtual machine while also running OS X on my Mac.\n\nThis allows me to test a lot of browsers without spending bazillions on equipment. I'm not doing this directly. BrowserStack has made a whole bunch of virtual machines for me (or, at least, this is my understanding of what's going on). That's what $39/month gets you.\n\nSo the question is, can I trust what these machines are telling me about my site's design? Most of the time, \"yes,\" but not always.\n\nProof, right? \n\nAfter seeing the hidden scrollbar on a whole bunch of virtual machines running Mac OS and Windows, I tried one running Chrome 73 on Mac OS X High Sierra. \n\nSure enough, the hidden scrollbar appeared.\n\nExcept— my real-life computer is a Macbook Air running OS X High Sierra and Chrome 73. There's no hidden scrollbar on it.\n\nNONE. ZERO. ZILCH!\n\nMethinks the virtual machine doth protest too much. Hard to tell because I can't buy all these machines to test them. Still, the world's funny: I had the original Macbook Air and I read once that Apple built a special version of OS X for it. This version had its own quirks (sadly — it was a lousy machine).\n\nMaybe I'm confronting the same situation here, my 13'ers little quirk.\n\nBut...I've a feeling it's a nonexistent problem.\n\nTime'll tell.\n\n-j\n","frontmatter":"type: reverie\nheadline: The imperfections of browser testing 1\ndate: April 17, 2019\nslug: Virtual machines may lie, really"}

/***/ }),

/***/ "./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md":
/*!********************************************************************************!*\
  !*** ./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"The imperfections of browser testing 2","date":"April 18, 2019","slug":"React lies too sometimes"},"body":"\nNow it's React's turn. This was a mind-boggling trip through \"The Twilight Zone.\"\n\nII. Does React always understand what browsers are doing?\n\nReact is a free javascript framework from Facebook that makes it easy for Web developers to build slick software. It makes it easy to use javascript to generate HTML and update it in real time as users interact with a program. This makes it feel less like CNN.com more like Microsoft Word.\n\nReact has a lot of opinions about how to program software.\n\n(It also has an army of followers who have equally strong opinions about it. I'll belabor the whole thing as soon as I know enough to have an opinion about why it's so horrible to have an opinion.)\n\nAnyway, people refer to React's opinions as \"the React way.\" \n\nSticking to it seems to be a good idea. Fighting it often leads to trouble. \n\nStill, the React way isn't always good enough. That's where \"refs\" come in. \n\nReact's official documentation calls them an \"escape hatch.\" They give you a way to reach under React's hood and work with HTML directly. The general idea is that React sits between your code and the Web page. React calculates values, imagines the result, and then paints the completed picture to screen when done.\n\nUnfortunately, I ran into weird and bizarre problems with this. Remember my problem:\n\nAccording to my eyes, there's a 17px gap between page content and the on-screen scroll bar. This gap shouldn't be there. I believe it represents a second hidden scrollbar that only shows up on BrowserStack's virtual machines. My initial idea was to identify these \"narrow\" elements and force them to widen by dynamically calculating the missing width so I could add it back into the element.\n\nSo I added \"refs\" to my elements, and examined their .offsetWidth and .getBoundingClientRect() properties to determine their width. \n\nHere's the problem — both properties reported that the offending element was correctly sized. My eyes tell me this isn't true. Sigh.\n\nSo what gives?! I'm not entirely sure.\n\nI think it's a painting problem. React generates HTML behind the scenes, imagines the results, then paints it to screen. The width is right at the time of generation. Unfortunately, React doesn't seem to see what happens AFTER the paint.\n\nI'm pretty sure because someone on StackOverflow lead me to this [issue on the React development site](https://github.com/facebook/react/issues/2659). \n\nSomeone suggested trying to use requestAnimationFrame() as an alternative. It runs after HTML has been painted to screen by the browser. \n\nSuffice it to say, this didn't work. Neither did any of the other things I tried over the course of, what, a two week period of time?\n\nGiven the last post's conclusion on virtual machines, I've decided to chalk this up to a ghost in the machine.\n\nIn other words, I give up. Who you gonna call?\n\n-j\n","frontmatter":"type: reverie\nheadline: The imperfections of browser testing 2\ndate: April 18, 2019\nslug: React lies too sometimes"}

/***/ }),

/***/ "./app/data/reveries/06-17-19-private-methods.md":
/*!*******************************************************!*\
  !*** ./app/data/reveries/06-17-19-private-methods.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"JavaScript bullies and private methods","date":"June 17, 2019","slug":"It's my code, I can do what I want to"},"body":"\nIn \"developer world,\" how do you ebb and flow between your natural predisposition and the realities of what others want?\n\nThis question hit me in the face recently. I'd done something with my JavaScript that I liked. Then I read that other people don't. \n\nBasically, I wanted to make some of my code's methods and properties \"private,\" meaning limit them to certain places. For instance, my Location class has a \"path\" property that should only be used inside of it. So, I took some Stack Overflow advice and put an underscore in front of \"path\", creating \"_path\", to remind myself not to use it outside the Location class. Works for me.\n\nBut not for everyone. \n\nI recently [ran into a discussion](https://www.crockford.com/code.html) that said JavaScript developers shouldn't use the underscore because it looks amateurish. The reason is that it doesn't work. Not really. JavaScript doesn't care if I break the promise and use \"_path\" outside the Location class. Apparently, some langauges do.\n\nTo be clear, JavaScript's loosy goosy nature doesn't really bother me.\n\nBut, what if most developers are underscore haters? \n\nI figured I should check myself before I wreck my site fixing something that isn't broken. So I emailed Omri Bernstein, my Fullstack instructor, to get his take. His response was so good I'm including an edited version here:\n\n>The Web site you sent me [about \"underscore prefixing\" doesn't seem](https://www.crockford.com/code.html) to be talking about ES5 JavaScript....\n\n>Anyways, I think that using closures instead of prefixed underscores is a viable option in some circumstances, but classes in particular (e.g. a \"private\" class methods) don’t really lend themself to such a solution, including ES5 classses. I mean you can, but it either doesn’t [involve prototype methods at all](https://stackoverflow.com/a/55637), [looks kinda yucky](https://modernweb.com/private-variables-in-javascript-with-es6-weakmaps/), or is [not-yet-fully-agreed-upon](https://github.com/tc39/proposal-private-methods)....\n\n>My feeling is that \"underscore prefixing\" is a reasonable convention for class methods. And if you’re going to break the \"no-underscore prefixing\" rule for classes, my feeling is you might as well not have the rule at all. That being said, a \"better\" (in my opinion) version of underscore prefixing is to [use symbols for private methods](http://2ality.com/2016/01/private-data-classes.html) (number four). It’s technically not private, but is difficult to accidentally access outside the class definition....\n\nMore homework — symbols. Oh well. Thanks Omri!\n\n-j","frontmatter":"type: reverie\nheadline: JavaScript bullies and private methods\ndate: June 17, 2019\nslug: It's my code, I can do what I want to"}

/***/ }),

/***/ "./app/data/reveries/06-19-19-netflix-survey.md":
/*!******************************************************!*\
  !*** ./app/data/reveries/06-19-19-netflix-survey.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Say it ain't so, Netflix","date":"June 19, 2019","slug":"Netflix wouldn't let me take its survey"},"body":"\nNetflix rejected me today.\n\nThe company had just sent me a survey request. I'd get a free month for every survey I take. I qualified for three daily surveys and would get a bonus month if I did them all. COOL!\n\nLet's do it.\n\nNetflix asked me my name, rank, and serial number.\n\nThen it asked what I do. I clicked software development.\n\nThe survey ended on the next screen. \n\nWhere's the collegiality, the intellectual curiosity, the trust? \n\nSay it ain't so, Netflix! Say it ain't so!\n\n-j\n","frontmatter":"type: reverie\nheadline: Say it ain't so, Netflix\ndate: June 19, 2019\nslug: Netflix wouldn't let me take its survey"}

/***/ }),

/***/ "./app/data/reveries/06-23-19-alexa-off.md":
/*!*************************************************!*\
  !*** ./app/data/reveries/06-23-19-alexa-off.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Alexa, turn yourself off","date":"June 23, 2019","slug":"Make Alexa to turn herself off"},"body":"\nI taught Alexa to turn herself off last night. \n\nThe idea comes courtesy of my friend John Loconsolo.\n\nI have an Echo Show 2. I got it as a freebie from Amazon because I published a second Alexa skill just after the Show 2 launched. \n\nLike a lot of people, I think Alexa's cool, but I don't like wondering if she's listening even when she's not supposed to be. So here's what I did. I got a smartplug and named it \"yourself.\" Then I plugged the Echo Show into it. Then I paired it with Alexa. It took about ten minutes. \n\nNow I can say \"Alexa, turn yourself off.\" And she does! Thanks, John!\n\n-j\n","frontmatter":"type: reverie\nheadline: Alexa, turn yourself off\ndate: June 23, 2019\nslug: Make Alexa to turn herself off"}

/***/ }),

/***/ "./app/data/reveries/08-05-19-netflix-chromecast.md":
/*!**********************************************************!*\
  !*** ./app/data/reveries/08-05-19-netflix-chromecast.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Netflix, meet Chromecast","date":"August 5, 2019","slug":"Silence the trailers when using Chromecast"},"body":"\nDear Netflix,\n\nI know you lead the industry when it comes to software development.\n\nUnfortunately, I have several problems with your platform. This one involves your autoplaying trailers. You can reproduce the problem via the following steps: \n\n1. Load the Netflix site.\n2. Start a show or movie. \n3. Cast it to a television via a Google Chromecast. \n4. (It does not matter if you use Chrome's internal menu or the Chromecast icon that appears in your video player.)\n5. Sit down to enjoy the show.\n6. Cringe when it's interrupted by the sound of a trailer.\n7. Look around wildly to find the computer where Netflix.com is loaded. \n8. Groan. \n9. Ask the Gods why Netflix's developers don't disable these trailers when a video is being Cast.\n10. Futz with the Netflix site to silence the trailers, probably by slamming the spacebar twice to skip both of them.\n\nThe whole thing is very annoying. \n\nI've begun to wonder if I should switch to Disney+ or CBS All Access. Well, no, not really...but \"Star Trek: Picard.\" Can't say no to that...\n\nAll the best.\n\n-j\n","frontmatter":"type: reverie\nheadline: Netflix, meet Chromecast\ndate: August 5, 2019\nslug: Silence the trailers when using Chromecast"}

/***/ }),

/***/ "./app/data/reveries/11-03-19-magic-artistry-and-image-fallbacks-1.md":
/*!****************************************************************************!*\
  !*** ./app/data/reveries/11-03-19-magic-artistry-and-image-fallbacks-1.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Magic, artistry, and image fallbacks 1","date":"November 3, 2019","slug":"Loading story text and illustrations"},"body":"\nI’ve been told software is like a magic trick. \n\n“My job is to get you to look over here while I’m doing something over there,” Daniel, my co-founder on TMM, would always say. I kept hearing him as I built this site, particularly when I dealt with illustrations. \n\nThere are at least two issues with large, high-quality illustrations. \n\n- First, you may not want to show them at all times.\n- Second, they may take some time to load.\n\nHow do you handle these situations? With care. You’ve got to distract users by hiding the image. And the distraction’s got to be interesting — like magic. There’s no right way to do this, although, I’m sure there are wrong ways. They’ll be obvious from the get go.\n\nLet’s talk specifics.\n\n*Story illustrations when the text is on.*\n\nEach chapter contains three separate images (bottom to top): \n\n1. The main illustration (bottom layer)\n2. A blurred version of it (middle layer)\n3. A more highly blurred fallback (top layer)\n\nThis is how it works — pages that require a lot of data, such as Story, are loaded by the ContentLoader. It can track the state of an image via a local state property on state named imageLoaded. I use this property to keep watch over the state of the blurredImage. If it isn’t loaded, the fallback image — which lives inside the site as a Data URI — is shown. If it is loaded, the fallback image won’t be shown. \n\nFun fact: The fallback is almost always shown when switching site sections on mobile devices, but is almost never shown when switching between them on desktops and laptops. Mobile’s weird.\n\n*Story illustrations when the main illustration hasn’t loaded yet.*\n\nI use a property on App state to track the state of the main chapter illustrations.\n\nThis property, illustrationState, has one of three values:\n\n1. Loaded: > 0 \n2. Not loaded: < 0 \n3. Not applicable: 0 \n\nFor instance, -2 means illustration 2 isn't loaded and 2 means it is. The value is determined by checking the image element’s .complete property. \n\nIf the illustrationState is negative when “Text off” is activated, then illustrationDelay, another property on App state, becomes true. This causes a small loading animation to appear beside the “Text off” button, which is temporarily renamed “Cancel.”\n\nWhen the main illustration loads, the image element’s onLoad handler will update illustrationState to be a positive number. If illustrationDelay is true when onLoad fires, it becomes false, the loader will be removed, the button renamed “Text on,” and the animation to show the main image starts.\n\nMagic. \n\n-j","frontmatter":"type: reverie\nheadline: Magic, artistry, and image fallbacks 1\ndate: November 3, 2019\nslug: Loading story text and illustrations"}

/***/ }),

/***/ "./app/data/reveries/11-03-19-my-best-worst-decision.md":
/*!**************************************************************!*\
  !*** ./app/data/reveries/11-03-19-my-best-worst-decision.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"My best worst design decision","date":"November 3, 2019","slug":"Two Redirects in a row..."},"body":"\nI officially did something with code that I’m sure is bad. \n\nOr, at least, not great. And I don’t care. I may change it some day. But it works, it’s easy to understand, it’s predictable, and it’s so integral to the site that changing it will be a pain. \n\nSome people will call this technical debt, but that’s kind of judgmental. Me? \n\nI'll call it personality. Here it is:\n\nSite sections that contain dynamic content, such as journalism, projects, and the story, are loaded through a component named ContentLoader. \n\nIt decodes the content the user wants by breaking down his url and looking through its parameters. Great. Thing is, if the url is short, meaning the user is requesting a section without specifying parameters, then the ContentLoader will set a property on its local state called needsRedirect. \n\nWhen this property is true, the ContentLoader activates a Redirect component. This component sends users to a fictitious route called /i, which invokes the ReloadRoute component. It looks at the Body component’s local state (it sits between the Header and Footer) in order to build a new URL with parameters before redirecting the user back to ContentLoader. \n\nCatch that? Two Redirects, one after the other. \n\nThey’re used when a user loads the site via a naked url, i.e., www.jamesabels.net/chapter, or when the user clicks on certain links in the Header and Footer. Both rely on this feature. \n\nThe good: This means the App component doesn’t have to track this content and the Header and Footer use naked links for navigation (e.g., www.jamesabels.net/chapter). \n\nThe bad: This means that it’s harder to think about what React is doing at any given time. The reason is that the user may be going to-or-fro /i. That’s a lot of hard-to-understand re-rendering.\n\nI dealt with it by watching the results in the console and debugging the problems by hand. I know this isn’t the best way to control React, but it’s in place and fully functional. I now think there may be a better way to do it with keys — food for thought another day.\n\nBottom line, personality. \n\n -j","frontmatter":"type: reverie\nheadline: My best worst design decision\ndate: November 3, 2019\nslug: Two Redirects in a row..."}

/***/ }),

/***/ "./app/data/reveries/11-03-19-react-transition-group-and-why-i-hate.md":
/*!*****************************************************************************!*\
  !*** ./app/data/reveries/11-03-19-react-transition-group-and-why-i-hate.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"React Transition Group and why I hate it","date":"November 3, 2019","slug":"Working across sibling components"},"body":"\nLet’s keep this short. \n\nI never managed to get React Transition Group to work right.  I tried repeatedly. I lost a lot of time on the thing. I made several studies of its documentation. \n\nBut, no matter what I did, I found it to be nothing but annoying. \n\nMaybe I was using it wrong. \n\nThe best examples I found had to do with adding an item to a list of items, often a to-do list or grocery list. This meant adding an item to a list of similar items, which is accomplished is accomplished with logic that runs within one Component or in one of its children.\n\nIn other words, this example doesn’t cover transitions that run across sibling Components. For instance, the story illustrations occupy space controlled by the Body, Header, and Footer. They’re functionally unrelated siblings who need to run simultaneous animations.\n\nSomeone else may call this is a poor use case. Whatever. It's what I'm doing.\n\nFrom what I can tell, you’d need to have separate React Transition Group components in each of these Components to coordinate animated transitions between all of them. Number one, at no time was this obvious to me. Number two, this sounds like an absolutely horrible time.\n\nSo, I handled animations on my own by triggering CSS transitions via changes to App state.\n\nYou can see an example of the result in the story when you turn the text on and off. \n\n-j","frontmatter":"type: reverie\nheadline: React Transition Group and why I hate it\ndate: November 3, 2019\nslug: Working across sibling components"}

/***/ }),

/***/ "./app/data/reveries/11-03-19-surf-click-sync.md":
/*!*******************************************************!*\
  !*** ./app/data/reveries/11-03-19-surf-click-sync.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Surf. Click. Sync.","date":"November 3, 2019","slug":"Updating state with internal links"},"body":"\nHow do you keep state in sync in React?\n\nBit of a trick question, right? After all, you often split state between many components. This can be nice, as it’s often easier to understand what’s going on when you only have to think of a few things at a time. But, there’s inevitably some app-wide state that needs to be tracked.\n\nIt’s often handled in React’s componentDidUpdate lifestyle hook. Nothing wrong with that, that’s what it’s there for. Still, for my purposes (this site) I found it to be a bit of a drag. \n\nAvoiding infinite loops in componentDidMount by constantly adding conditionals to it eventually became confusing.\n\nSo I came up with an alternate approach. My users navigate the site via React Router’s Link component. (It’s actually a custom version of it, but let’s leave that for another day.)\n\nI took advantage of this. \n\nI [modified](https://github.com/abelsj60/jamesabels.net/blob/master/app/shared/CustomLink.jsx#L68) the Link component to accept an update function via props. It's added to the Link’s onClick handler. The end result is that App state stays in sync as users surf the site. \n\nThere isn’t too much more to say about this. I think it’s a fairly clean idea, although, it took some work at the outset to debug some bizarre behavior. I can’t even remember what it was. \n\n-j","frontmatter":"type: reverie\nheadline: Surf. Click. Sync.\ndate: November 3, 2019\nslug: Updating state with internal links"}

/***/ }),

/***/ "./app/data/reveries/11-03-19-tracking-pinch-zoom.md":
/*!***********************************************************!*\
  !*** ./app/data/reveries/11-03-19-tracking-pinch-zoom.md ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Tracking pinch zoom","date":"November 3, 2019","slug":"Touch events + App state"},"body":"\nA lot of Stack Overflow posts talk about how to track pinch zoom. \n\nIt isn’t easy. \n\nHere’s my solution. I did it with onTouchMove. \n\nIf [onTouchMove](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L456) receives an event that says two fingers are on screen, a property on App state named isZooming is set to true. This lets me reject resize events in the time it takes to identify zooming and log the pinch zoomed state, which I'll now explain.  \n\nIf the page’s X and Y coordinates become >= 0, the pinchZoomed property on App state is set to true. It will be set back to false should they become <= 0. This works because it’s hard to pinch zoom without changing the X, Y offsets. It’s equally hard not to blow past them when undoing pinch zoom. \n\nNow, if isZooming was true when pinchZoom becomes false, isZooming is [reset to false](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L497), too. \n\nThis seems as good as I saw on Stack Overflow.\n\n-j","frontmatter":"type: reverie\nheadline: Tracking pinch zoom\ndate: November 3, 2019\nslug: Touch events + App state"}

/***/ }),

/***/ "./app/data/reveries/11-04-19-adventures-in-the-resize-event.md":
/*!**********************************************************************!*\
  !*** ./app/data/reveries/11-04-19-adventures-in-the-resize-event.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Adventures in the resize event","date":"November 4, 2019","slug":"Haphazard firings are just one browser annoyance"},"body":"\nBrowsers break a lot. \n\nI discovered this during early site development. I was working to make the Web site look like an app. I wanted the header, footer, and body to stay on screen at all times — a compact little package.\n\nIt’s tremendously difficult. \n\nOne problem is the menu bar in iOS Safari. It’s really hard to work with — if your site stretches to the bottom of the screen and the user touches this area, the menu bar will jump into view and stay there, throwing everything off. \n\n(You may see this behavior if you use the site in landscape mode.)\n\nThere were other problems, too. \n\nI can’t remember half of them. Anyway, I ultimately decided to use JavaScript to explicitly set the height of the site's main body element. I grabbed hold of the browser’s resize event to [help me](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L516) and never let go. \n\nIf only it had been that easy. The resize event is very pokey. \n\nIt fires randomly and inconsistently. It can fire when you change orientation, scroll fast to the top or bottom of the page, or pinch, zoom, and drag the site. There are \"hidden fires,\" too. In iOS Safari, resize fires after the page loads because it paints the screen without the menu bar, then repaints it with the menu bar. \n\nThere's no rhyme or reason here. I hope to never think about any of it again.\n\nBut I did. The site can now calculate and re-calculate height on load, orientation change, and changes to window size. I block the calculation when the site is pinch-zoomed, and I added an extra little bit of CSS for a few milliseconds when the user changes orientation in iOS Safari because of some mobile nuttiness.\n\nAlso, turns out that height is just as maddening as the resize event. \n\nDifferent browsers and devices implement height values differently, seemingly at random — window.innerHeight, document.documentElement.clientHeight, test it all and hope you get it right! Who knew height would give you such grief...?\n\nAnyway, my algorithm almost always seems to work. \n\nAll’s well that ends well...\n\n-j","frontmatter":"type: reverie\nheadline: Adventures in the resize event\ndate: November 4, 2019\nslug: Haphazard firings are just one browser annoyance"}

/***/ }),

/***/ "./app/data/reveries/11-04-19-extra-flair-for-new-users.md":
/*!*****************************************************************!*\
  !*** ./app/data/reveries/11-04-19-extra-flair-for-new-users.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Extra flair for new users, not old ones","date":"November 4, 2019","slug":"Two Redirects in a row"},"body":"\nAlways go the extra mile. It makes things stand out. Consider this: \n\n1. An event serves cupcakes from the Little Sunshine Bakery or Shop Right? \n2. A date shows up with wild flowers from a flower store or a rose from a deli? \n3. A new flashlight comes with batteries or it doesn’t. \n\nEasy — Little Sunshine, wild flowers, and batteries. \n\nThat how I knew I needed a little extra oomph. New users see my name and bio beat three times on the home page — a heartbeat.\n\nIt’s cute — like the lamp from a Pixar film, a low-budget one.\n\nNot enough sites do this sort of thing,  right? They don’t acknowledge Christmas or New Year’s or Halloween or the World Cup. They just sorta pretend there’s no world outside their walls.\n\nThere just aren’t enough extra flourishes on the Web. It’s very workmanlike out there. \n\nWe all know why — it’s hard to go the extra mile.\n\nIt requires commitment. In our personal lives, you’ve got to add time and emotional energy to whatever you’re doing. In our professional lives, you’ve got to add resources — time and money — in order to create, maintain, and oversee whatever it is. \n\nThese are real stakes. Why bother?\n\nBecause it’s so good! \n\nOf all Google’s enterprises, the Google Doodle screams “quality” the most. \n\nSo I created the aforementioned heartbeat in the name of the Google Doodle. \n\nThe problem with my heartbeat is that it’s great to see once, not twice. So I decided to limit it to the first load. At first, I tried to do it with the browser’s image cache, but that was complicated and surprisingly imprecise. Then I stumbled on localStorage. It’s tied to a domain, meaning it persists between user visits. It’s like a poor man’s database.\n\nMy current solution is to add a timestamp to localStorage named “lastHeartbeat.” It’s updated whenever the user hits the site, no matter the section. The heartbeat runs for new users or if the site finds a two-week gap between a user's visits.\n\nI really like [this feature](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L243) because it’s unusual. It shouldn’t be, but it is. \n\nNow about that cupcake...\n\n-j","frontmatter":"type: reverie\nheadline: Extra flair for new users, not old ones\ndate: November 4, 2019\nslug: Two Redirects in a row"}

/***/ }),

/***/ "./app/data/reveries/11-04-19-image-compression-an-art-not-a-science.md":
/*!******************************************************************************!*\
  !*** ./app/data/reveries/11-04-19-image-compression-an-art-not-a-science.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Image compression, an art, not a science","date":"November 4, 2019","slug":"Recompressing a compressed image"},"body":"\n[Image compression](https://github.com/abelsj60/jamesabels.net/blob/master/image-scripts.txt) is maddening. \n\nThe problem is this — the only way to really understand compression is to sit around staring at the renditions that your settings produce. Every variation, or rendition, has to be compared to every other variation in the set, as well as the original. And, as it turns out, there’s really no single answer. Your settings may be stellar for image A, but less than stellar for image B.\n\nI’m not surprised. I remember that the quality of video compression varied by the type of video. At the same settings, a tranquil field could compress differently than a fast-paced football play.\n\nFew image compression discussions talk about subjective quality these days. They instead seem to focus on how to run the compression process. It all sounds very scientific. The underlying algorithms may be, their use is not.\n\nIf you're using them right — with care — you'lll always have to use your eyes to get a good result.\n\nI’ll give you an example. \n\nMany people tell you not to compress a compressed image, particularly a .jpg. The .jpg format is “lossy” meaning it deletes details like mad, so a recompression can be really really ugly.\n\nMy site’s chapter illustrations need to be at least as wide as each user’s device. At the narrowest widths, 640 px to, say, 1366 px, a quality level of >= 90 was needed for good quality renditions at a reasonable file size when going from a lossless .tiff to a .jpg. At wider widths, though, say 2880 px, the same quality level, 90, resulted in unreasonably large file sizes. \n\nSo I decreased the quality level by ten again and again: 80, 70, 60, 50. All the results were poor in terms of quality when making the wide-sized files. How so? Well, for example, the veins in the fairy’s lower wings in the chapter one illustration were always obliterated. No good.\n\nThe .png format, a generally lossless format, didn’t work either. Too big!\n\nMy next move was a Hail Mary. I compressed the original .tiff to a .jpg at full size and a quality level of 100. Then I resized the big .jpg and compressed it at a quality level of 50. \n\nThe result was inexplicable. \n\nAt larger widths, the recompressed and resized .jpg was of much higher quality and similar file size as the rendition produced by the same settings on the original .tiff. I know what you’re thinking. I tried it with a .png, too, but .jpg re-compression seemed better.\n\nSomeone smarter than me can sort out why, if indeed there’s even a reason mere humans can understand. My best guess is that compression is just a step in the “artistic process,” and the tools of an artist — in this case compression algorithms — simply do not produce objective results. And why should they? Every image is different.\n\nTo me, compression is analogous to Rembrandt mixing paint. \n\nDon’t let anyone tell you it’s science — including the people who write the algorithms. A lot of people design cars, but they don’t race them. If you care about your images, you’ll have to use your peepers and stare at a lot of renditions to get a sense of what works and what doesn’t. \n\n-j","frontmatter":"type: reverie\nheadline: Image compression, an art, not a science\ndate: November 4, 2019\nslug: Recompressing a compressed image"}

/***/ }),

/***/ "./app/data/reveries/11-04-19-magic-artistry-and-image-fallbacks-2.md":
/*!****************************************************************************!*\
  !*** ./app/data/reveries/11-04-19-magic-artistry-and-image-fallbacks-2.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Magic, artistry, and image fallbacks 2","date":"November 4, 2019","slug":"Loading home-page illustrations"},"body":"\nRemember what I said, software is like a magic trick. \n\nYou’ve got to get users to look over here while you’re doing something over there. I’ve already explained how I did that with the story illustrations. Now I’ll talk a little about the home-page illustrations.\n\nThe home page loads with two major illustrations in view: the boy foreground and forrest background.\n\nLike all high-quality, full-page illustrations, they can take a little while to load. So I needed to do something to hide that fact. Whatever I did had to look good and hold interest for, say, a minute.\n\nMy current solution is to allow the site to load with a white screen. A loading animation sits center stage. As soon as blurred versions of the foreground boy and forrest background load, I fade them into place by transitioning opacity from 0 to 1. When the un-blurred versions load, I transition opacity back to 0, leaving the full versions on screen in all their glory. \n\nThe drama of going from white screen to blurred image (which is fast) should hold user attention. Now that we have blurred images, users should be willing to wait a little to see whatps up. \n\nHere’s how I did it. \n\nI added a local property to the Home component’s state named loadLevel. This property holds an array, length four. Each index stands for a different illustration: [blurredBoy, blurredForrest, boy, forrest]. \n\nIndices start at 0. The first two indices are incremented by one when each blurred image loads. When their sum is 2, I fade them into view. These indices are then incremented to 2 when the fade’s done. \n\nMeanwhile, indices three and four will increment to 1 as soon as the boy and forrest illustrations are loaded. When all four indices add up to 6, I fade the main illustrations into view.\n\nBonus points:\n\nI noticed that, after the initial load on mobile browsers, I would see an unpleasant white screen when navigating back to the home page from another section. Why? The images weren’t instantly loaded. \n\nDesktop and laptop browsers don’t do this. Something weird about mobile browsers again. \n\nBut, as it turns out, the Home component’s onLoad image handlers run every time a user navigates back to the home page. So I created a white sheet that covers the screen when users navigate home on mobile devices (after the initial load). And I transition it off as soon as the sum of the array elements hit the magic number (4). It works well, especially as I didn’t want to repeat the initial loading sequence.\n\nThere may be a sleeker, cooler way to distract users while the home-page illustrations load. But I think what I’ve got works nicely, it’s quick and easy to maintain, and it isn’t outright boring or ugly. \n\nAbracadabra...\n\n-j","frontmatter":"type: reverie\nheadline: Magic, artistry, and image fallbacks 2\ndate: November 4, 2019\nslug: Loading home-page illustrations"}

/***/ }),

/***/ "./app/data/reveries/11-07-19-broken-browsers-width-is-height.md":
/*!***********************************************************************!*\
  !*** ./app/data/reveries/11-07-19-broken-browsers-width-is-height.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Broken browsers: width is height","date":"November 7, 2019","slug":"Breaking pixel ratios in mobile"},"body":"\nLike I said, browsers break a lot.\n\nHere's an example from last night. I was jiggering with the [algorithm](https://github.com/abelsj60/jamesabels.net/blob/master/app/helpers/preloadBigImages.js#L13) that preloads images. It wasn't working. \n\nFor instance, it selected an image with width 2880px on a 5k monitor. It should have selected the image with width of 5120px. \n\nProblem was, I'd stopped factoring window.devicePixelRatio into the algorithm. This number tells you how many pixels are packed into every inch of the screen. Standard screens are one, retina screens are 2+, and some screens report back decimals, which is hard to understand.\n\nThe theory here is that you'll get the proper resolution from: \n\n- width * devicePixelRatio\n- height * devicePixelRatio \n\nUnfortunately, this doesn't totally work in practice.\n\nOn iOS, the width is the height and the height is the width. Not so on Android.\n\nCome again? Hold onto your hats, kids. \n\nIf you hold an iPhone upright (\"portrait\" mode), window.screen.width refers to the longest edge, which is currently the device's height. Now, hold an Android phone upright, and window.screen.width will refer to its actual width. OK, rotate them. On iOS, width is still the longest edge, but Android swaps the values.\n\nGreat— ready for the \"new hotness\"? \n\niPadOS. That's the OS  Apple just split off from iOS. Guess what, it's different. iPadOS acts like Android. It reports the device's actual width, and it swaps the values when you switch orientation. \n\nNeat, huh? Yeah, I didn't really think so either.\n\n-j","frontmatter":"type: reverie\nheadline: 'Broken browsers: width is height'\ndate: November 7, 2019\nslug: Breaking pixel ratios in mobile"}

/***/ }),

/***/ "./app/data/reveries/index.js":
/*!************************************!*\
  !*** ./app/data/reveries/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/reveries sync recursive \\.md$");

  return context.keys().map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    var dateA = new Date(a.attributes.date);
    var dateB = new Date(b.attributes.date);
    return dateB - dateA;
  });
})());

/***/ }),

/***/ "./app/data/the-story sync recursive \\.md$":
/*!***************************************!*\
  !*** ./app/data/the-story sync \.md$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./story-chapter-four.md": "./app/data/the-story/story-chapter-four.md",
	"./story-chapter-one.md": "./app/data/the-story/story-chapter-one.md",
	"./story-chapter-three.md": "./app/data/the-story/story-chapter-three.md",
	"./story-chapter-two.md": "./app/data/the-story/story-chapter-two.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/the-story sync recursive \\.md$";

/***/ }),

/***/ "./app/data/the-story/index.js":
/*!*************************************!*\
  !*** ./app/data/the-story/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/the-story sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    return a.attributes.number - b.attributes.number;
  });
})());

/***/ }),

/***/ "./app/data/the-story/story-chapter-four.md":
/*!**************************************************!*\
  !*** ./app/data/the-story/story-chapter-four.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Practical magic","description":"xyz 4","number":4},"body":"\nThe Six train sped through darkness.\n\nThe young man climbed out at Wall Street. Financial magicians thronged the way as he snaked through back alleys toward Hanover Square. \n\nA white tower soared skyward. \n\n\"Coding school,\" he said. \n\nEleven flights up, the young man logged into practical magic. \n\nComputer code covered screens across the floor. It was smart and austere, but lacked something important. \n\n\"Purpose,\" he said, leaning toward the logic on screen.\n\nWhen he looked up, he stared out at a city drenched in warm autumn light. A small blur zipped across the horizon, neon trailing behind it. The young man smiled to himself. \n\n\"Software is a story,\" he said. \"Code the way to tell it.\"\n\nMemories of impractical magic washed over him as code filled his screen in pixelated color. \n\nTime melted away. Hours later, as the young man slept, the fairy hung over her old friend. She peeked into his dreams and spied far-off lands. There were Jinns, and fairies, and desert sands— all within reach of his outstretched hands.\n\nDelighted, she flit to the gold lamp beside him. It bathed the room in purple light. \"Yoo-hoo,\" she sang inside, a mischievious smile spreading across her face.\n\nTime again for adventure.\n","frontmatter":"title: 'Practical magic'\ndescription: 'xyz 4'\nnumber: 4"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-one.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-one.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"A magic quest","description":"xyz 1","number":1},"body":"\nThe cardboard fort crumbled.\n\nA small fairy destroyed it after zipping through the wide-eyed boy's window with all the force of a cannonball. A neon streak twinkled behind her as she hovered amidst the mess. She looked the boy up and down, then nodded.\n\n\"Want to find a magic lamp,\" she asked, floating eye-level. \n\nThe boy burst with delight.\n\n\"Of course,\" he shrieked. \"What do I do?\"\n\nA coy grin spread across the fairy's bright face, filling the room with magic. \n\nIt worked wonders. The boy began to float. The sprite then raced to grab his hand before he could settle back to the floor. Out the window they went, flying high over the moon toward her home — a magical land of grand adventure. \n\nBy day, they searched for the magic lamp, soaring over pirate ships and chasing Jinns across sun-drenched sands. By night, they told amazing stories about the day's big adventures, each competing to tell taller tales. It was wonderful.\n\nThen, one night, when it was already late, the fairy sighed. \n\n\"You're growing up,\" she said. \"Time to go back.\" \n\nThe boy began to sniffle.\n\nShe smiled kindly, then knocked twice on the floor between them. A secret door opened. She dove in, disappearing for what seemed like hours. The boy's eyes were heavy when she flew out, clutching the very thing they'd sought — a glowing gold lamp that was etched by purple incantations. \n\n\"The adventure,\" she said, \"matters most.\" \n\nShe gazed fondly at her young friend, then read one aloud. \"In bright day or black night, through tall tale and purple light, rub me twice and release my might, if...\" \n\nToo late. He was out.\n","frontmatter":"title: 'A magic quest'\ndescription: 'xyz 1'\nnumber: 1"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-three.md":
/*!***************************************************!*\
  !*** ./app/data/the-story/story-chapter-three.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"The reality glitch","description":"xyz 3","number":3},"body":"\nThe young man's room twinkled one morning.\n\nDust, scattered high by a broom, was catching the sun's pale winter light. The quiet was soon pierced by the hollow ring of the broom brushing metal. \n\nThe young man knelt to grab it.\n\n\"I forgot about you,\" he said, twice tracing the lamp's dusty etchings with a finger. Something about the motion made him feel light and excited.\n\nHe was right to be giddy. \n\nReality began to glitch. Clear red rays shot between particles of dust, drawing a giant Jinn into view. \"You've forgotten my secret,\" it boomed. \n\nMenace filled the room. Impulse pulled the young man toward bedsheets while pride kept him still. \n\n\"I have not,\" he said, memory stirring. \"I've rubbed you twice, I've released your might!\" \n\nThe logic seemed sound, but the Jinn was unmoved. Blue sparks began dancing around the mysterious creature. So the young man raised his fists, ready for a fight he couldn't win, but wouldn't duck.\n\nAll seemed lost. And then— \n\nA little fairy blurred to an unexpected stop between them.\n\nShe yelled at the Jinn, banging its nose with a tiny fist. The Jinn, at first amazed, roared with laughter. The young man stared slack jawed at the impossible sight. \n\nA strong purple glow suddenly lit the lamp, which lay forgotton on the floor. \n\nIt charged the room with possibility, filling the young man with hopes and dreams of anything and everything. This was magic.\n\nThe Jinn drank it in — slaking an almost unquenchable thirst — then struck hands together. Sleep came to the young man as time shattered and crashed to the floor. He was startled awake hours later by the rumble of thunder. \n\nA coding school Web site glowed on the computer beside him. \n\nFate, ever changing, was sealed anew.\n","frontmatter":"title: 'The reality glitch'\ndescription: 'xyz 3'\nnumber: 3"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-two.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-two.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"True adventure","description":"xyz 2","number":2},"body":"\nThe boy woke at home the next day. \n\nThe gold lamp sat on his bedside table. He looked at it. \n\n\"Why do you glow purple,\" he asked, hoping for a sign. There was none. \n\nSo he got on with life. He became a lawyer, then a journalist. He covered media, technology, and venture capital as a staff reporter for Forbes and others.\n\nBut — no matter what he did — he kept the lamp nearby. \n\n\"Why do you get brighter when I tell stories,\" he'd ask aloud sometimes.\n\nThe lamp never answered. It was, after all, just a lamp. That was fine. The mystery of its glow promised adventure. And the boy loved adventure. \n\nSo it's no surprise that he got to work the day he befriended a software developer. They were soon building their own software platforms. \n\nOne ran interactive video networks, the other, silky smooth global software demos. The boy pitched them tirelessly and in many different ways. \n\nBut neither took, and he slowly grew tired of the tale. \n\nAs he did, the lamp's purple glow grew dim. \n\nOne night, as the boy tossed and turned, he knocked the lamp to the floor. It rolled beneath its table, dark and forgotten.\n","frontmatter":"title: 'True adventure'\ndescription: 'xyz 2'\nnumber: 2"}

/***/ }),

/***/ "./app/header-footer/Button.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Button.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Structure = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__Structure",
  componentId: "sc-87ov54-0"
})(["display:", ";filter:", ";margin-left:25px;width:69px;padding:7px 0px;text-align:center;cursor:pointer;position:relative;background-color:unset;border:1px rgba(255,255,255,.6) solid;box-shadow:", ";transition:", ";user-select:none;z-index:0;:focus{outline:0;}"], function (p) {
  return !p.isStory ? 'none' : '';
}, function (p) {
  return p.theme.blurForTempContent && p.tempContent < 3 && p.theme.blur;
}, function (p) {
  return p.tempContent < 1 && (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2 || p.illustrationDirection === 'exit' && p.illustrationLevel > 2) && '2px 2px 2.5px rgba(0, 0, 0, .3)';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .5s' : '';
});
var Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Button__Cover",
  componentId: "sc-87ov54-1"
})(["background-color:", ";opacity:", ";transition:", ";position:absolute;height:100%;width:100%;top:0px;left:0px;z-index:-1;"], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.illustrationLevel >= 2 ? '.2' : '.125';
}, function (p) {
  return p.illustrationLevel > 0 && 'opacity .35s';
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Button__Text",
  componentId: "sc-87ov54-2"
})(["color:", ";font-size:", ";font-weight:400;margin-bottom:0px;"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.one;
});
function Button(props) {
  var className = props.className,
      clickFunction = props.clickFunction,
      illustrationDirection = props.illustrationDirection,
      illustrationLevel = props.illustrationLevel,
      isStory = props.isStory,
      tempContent = props.tempContent,
      text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Structure, {
    className: className,
    illustrationDirection: illustrationDirection,
    illustrationLevel: illustrationLevel,
    isStory: isStory,
    onClick: clickFunction,
    tempContent: tempContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cover, {
    illustrationLevel: illustrationLevel
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, text));
}

/***/ }),

/***/ "./app/header-footer/Footer.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterContainer; });
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.jsx */ "./app/header-footer/Button.jsx");
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1xhovih-0"
})(["filter:", ";flex-shrink:0;display:flex;justify-content:", ";align-items:center;height:55px;font-size:", ";position:relative;width:100%;max-width:70rem;padding-bottom:env(safe-area-inset-bottom);padding-bottom:cover(safe-area-inset-bottom);@media (min-width:", "){filter:unset;}"], function (p) {
  return p.tempContent === 3 && p.theme.blur;
}, function (p) {
  return !p.story ? 'flex-end' : 'space-between';
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
});
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Footer__InnerContainer",
  componentId: "sc-1xhovih-1"
})(["position:relative;"]);
var Line = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Footer__Line",
  componentId: "sc-1xhovih-2"
})(["display:", ";position:absolute;z-index:1;left:25px;right:25px;top:0px;margin:0px;height:1px;background-color:", ";opacity:", ";transition:", ";@media (min-width:", "){left:5px;right:5px;}"], function (p) {
  return p.home ? 'none' : '';
}, function (p) {
  return !p.isNotFound ? p.theme.colors.pink : p.theme.colors.white;
}, function (p) {
  return p.isReverie || p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1 ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
}, function (p) {
  return p.theme.mediaQueries.desktop;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var isStory = _ref.isStory,
      rest = _objectWithoutProperties(_ref, ["isStory"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], rest);
}).withConfig({
  displayName: "Footer__RestyledLink",
  componentId: "sc-1xhovih-3"
})(["margin-right:20px;"]);
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Footer__Graf",
  componentId: "sc-1xhovih-4"
})(["cursor:pointer;margin-right:", ";margin-bottom:0px;color:", ";padding-top:5px;padding-bottom:5px;font-weight:400;font-size:", ";user-select:none;text-shadow:", ";transition:", ";@media (min-width:", "){font-size:", ";margin-right:", ";padding-right:5px;}"], function (p) {
  return !p.isLink && p.marginRight !== 'none' && '20px';
}, function (p) {
  return p.active ? !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.zero;
}, function (p) {
  return !p.isReverie && p.tempContent < 1 && (p.home && p.coverValY < 0 || p.illustrationDirection === 'enter' && p.illustrationLevel >= 2 || p.illustrationDirection === 'exit' && p.illustrationLevel > 2) && '2px 2px 2.5px rgba(0, 0, 0, .4)';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.marginRight !== 'never' ? '20px' : '';
});
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Footer__TextBox",
  componentId: "sc-1xhovih-5"
})(["display:flex;z-index:1;margin-right:25px;flex:1;justify-content:flex-end;@media (min-width:", "){margin-right:0px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
});
function FooterContainer(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp;
  var currentCaller = appState.currentCaller,
      illustrationDelay = appState.illustrationDelay,
      illustrationDirection = appState.illustrationDirection,
      illustrationLevel = appState.illustrationLevel,
      illustrationState = appState.illustrationState,
      lastCaller = appState.lastCaller,
      tempContent = appState.tempContent;

  var onClickContactHandler = function onClickContactHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateTempContent', 1);
  };

  var onClickLegalHandler = function onClickLegalHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateTempContent', 2);
  };

  var eventHandlerForStoryButton = function eventHandlerForStoryButton(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (illustrationState < 0) {
      boundHandleClickForApp('toggleIllustrationDelay');
    } else if (illustrationLevel === 0 || illustrationLevel === 3) {
      boundHandleClickForApp('toggleStoryText');
    }
  };

  var isReverie = currentCaller === 'reverie';
  var isStory = currentCaller === 'chapter';
  var isHome = currentCaller === 'home';
  var isNotFound = currentCaller === 'not-found';
  var reverieLink = isReverie ? "/".concat(lastCaller !== 'home' ? lastCaller : '') // No text b/c 'home' is '/'
  : '/reverie';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    story: isStory,
    tempContent: tempContent
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Line, {
    home: isHome,
    hide: illustrationLevel,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    isNotFound: isNotFound,
    isReverie: isReverie
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    clickFunction: eventHandlerForStoryButton,
    illustrationDirection: illustrationDirection,
    illustrationLevel: illustrationLevel,
    isReverie: isReverie,
    isStory: isStory,
    tempContent: tempContent,
    text: illustrationDelay ? 'Cancel' : illustrationDirection === 'enter' && illustrationLevel > 0 ? 'Text on' : 'Text off'
  }), isStory && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"] // done={!illustrationDelay} // Snappier when disabled...
  , {
    fontSize: "small",
    marginBottom: "2",
    marginLeft: "20",
    maxWidth: "33",
    smallMarginLeft: "12",
    smallMarginRight: "17",
    show: illustrationDelay,
    smallFont: true,
    white: true
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextBox, {
    isStory: isStory
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RestyledLink, {
    boundHandleClickForApp: boundHandleClickForApp,
    isStory: isStory,
    to: reverieLink
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Graf, {
    active: isReverie,
    home: isHome,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    isLink: true,
    isNotFound: isNotFound,
    isReverie: isReverie,
    isStory: isStory,
    marginRight: "never",
    tempContent: tempContent
  }, "Reverie")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Graf, {
    active: tempContent === 1,
    home: isHome,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    isNotFound: isNotFound,
    isReverie: isReverie,
    isStory: isStory,
    onClick: onClickContactHandler,
    tempContent: tempContent
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Graf, {
    active: tempContent === 2,
    home: isHome,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    isReverie: isReverie,
    isStory: isStory,
    isNotFound: isNotFound,
    marginRight: "none",
    onClick: onClickLegalHandler,
    tempContent: tempContent
  }, "Legal")));
}

/***/ }),

/***/ "./app/header-footer/Header.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_eventManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement */ "./app/helpers/eventManagement.js");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_header_nav_open_88_4x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/header-nav-open-88-@4x.png */ "./docs/assets/images/convert-to-data-uri/header-nav-open-88-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_header_nav_open_88_4x_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_header_nav_open_88_4x_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_header_nav_closed_88_4x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png */ "./docs/assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_header_nav_closed_88_4x_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_header_nav_closed_88_4x_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! intrinsic-scale */ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(intrinsic_scale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var headerLinks = [{
  name: 'About',
  path: '/about'
}, {
  name: 'Projects',
  path: '/projects'
}, {
  name: 'Journalism',
  path: '/journalism'
}, {
  name: 'A not-so-true story',
  path: '/chapter'
}];
var fontWeight = '500';
var initialShadow = '2px 2px 2.5px';
var textShadow = initialShadow + ' rgba(0, 0, 0, .4)';
var iconShadow = initialShadow + ' rgba(0, 0, 0, .9)';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].header.withConfig({
  displayName: "Header__Container",
  componentId: "bxp0mg-0"
})(["color:", ";flex-shrink:0;z-index:2;height:52px;display:flex;justify-content:", ";align-items:center;width:100%;max-width:75rem;margin-top:env(safe-area-inset-top);margin-top:cover(safe-area-inset-top);"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.isHome && 'center';
});
var HeaderBackground = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Header__HeaderBackground",
  componentId: "bxp0mg-1"
})(["position:absolute;width:100%;height:52px;top:0px;bottom:", ";width:", ";left:0px;background-color:", ";opacity:", ";transition:", ";z-index:-1;@media (min-width:", "){opacity:", ";}"], function (p) {
  return p.tempContent === 3 && '0px';
}, function (p) {
  return p.tempContent === 3 && '100%';
}, function (p) {
  return p.isHome || p.tempContent === 3 && p.illustrationLevel === 3 ? '' : p.theme.colors.darkPink;
}, function (p) {
  return p.tempContent === 3 || p.isReverie || p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1 ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["opacity .35s"]);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.illustrationLevel > 0 && p.theme.blurForTempContent && '0';
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])( // Filter out isHome and isActive from StyledLink
// eslint-disable-next-line
function (_ref) {
  var illustrationDirection = _ref.illustrationDirection,
      illustrationLevel = _ref.illustrationLevel,
      isHome = _ref.isHome,
      isActive = _ref.isActive,
      isReverie = _ref.isReverie,
      menu = _ref.menu,
      nameAsLink = _ref.nameAsLink,
      tempContent = _ref.tempContent,
      textShadow = _ref.textShadow,
      rest = _objectWithoutProperties(_ref, ["illustrationDirection", "illustrationLevel", "isHome", "isActive", "isReverie", "menu", "nameAsLink", "tempContent", "textShadow"]);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], rest);
}).withConfig({
  displayName: "Header__RestyledLink",
  componentId: "bxp0mg-2"
})(["font-size:", ";font-weight:", ";margin-left:", ";color:", ";text-shadow:", ";transition:", ";&&{text-decoration:", ";}@media (min-width:", "){margin-left:", ";font-size:", ";}@media (min-width:0px) and (max-width:", "){font-size:", ";margin-left:", ";}@media (min-width:", ") and (max-width:", "){font-size:", ";margin-left:", ";}"], function (p) {
  return p.theme.fontSizes.twentyOne;
}, function (p) {
  return p.isHome ? '400' : fontWeight;
}, function (p) {
  return p.num === 0 ? '0px' : '10px';
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return !p.isReverie && p.tempContent < 1 && (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2 || p.illustrationDirection === 'exit' && p.illustrationLevel > 2) ? textShadow : '';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s';
}, function (p) {
  return p.isActive ? 'underline' : undefined;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.num === 0 ? '0px' : '15px';
}, function (p) {
  return p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.eighteen;
}, function (p) {
  return !p.nameAsLink && p.tempContent === 3 && '0px';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.twenty;
}, function (p) {
  return !p.nameAsLink && p.tempContent === 3 && '0px';
});
var NameAsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(RestyledLink).withConfig({
  displayName: "Header__NameAsLink",
  componentId: "bxp0mg-3"
})(["display:", ";font-size:", ";margin-left:15px;@media (max-width:", "){z-index:", ";}"], function (p) {
  return p.isHome && 'none';
}, function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.tempContent === 3 && '1';
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "Header__Motto",
  componentId: "bxp0mg-4"
})(["font-weight:", ";flex:1;display:", ";font-style:italic;font-size:", ";margin:1px 10px 0px 13px;min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:", ";transition:", ";@media (min-width:", "){font-size:", ";margin-right:0px;}@media (max-width:", "){z-index:", ";}"], fontWeight, function (p) {
  return p.isHome && 'none';
}, function (p) {
  return p.theme.fontSizes.two;
}, function (p) {
  return !p.isReverie && p.tempContent < 1 && (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2 || p.illustrationDirection === 'exit' && p.illustrationLevel > 2) ? textShadow : '';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s';
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.four;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.tempContent === 3 && '1';
});
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "bxp0mg-5"
})(["display:", ";margin-top:-2px;padding:", ";background-color:", ";max-width:", ";position:relative;@media (min-width:", "){display:block;margin-right:", ";max-width:", ";}@media (max-width:", "){", ";}"], function (p) {
  return !p.isHome && 'none';
}, function (p) {
  return p.isHome && '6px 12px';
}, function (p) {
  return p.isHome && p.tempContent < 1 && 'rgba(0, 0, 0, .125)';
}, function (p) {
  return p.isHome && '350px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.isHome && '15px';
}, function (p) {
  return p.isHome && '350px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.tempContent === 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["background-color:rgba(175,18,90,.8);position:fixed;padding-top:54px;top:0px;left:0px;bottom:0px;width:100%;display:flex;justify-content:center;"]);
});
var NavList = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "Header__NavList",
  componentId: "bxp0mg-6"
})(["display:flex;justify-content:center;margin:", ";@media (max-width:", "){", ";}"], function (p) {
  return p.tempContent !== 3 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["", " 0px ", " 0px}"], !p.isHome && 'auto', !p.isHome && 'auto') : '';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.tempContent === 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["flex-direction:column;margin-bottom:55px;"]);
});
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "Header__NavItem",
  componentId: "bxp0mg-7"
})(["@media (max-width:", "){", ";@media (max-height:", "){", ";}}"], function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.tempContent === 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["margin:20px 0px;"]);
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.tempContent === 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["margin:5px 0px;"]);
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "Header__Icon",
  componentId: "bxp0mg-8"
})(["display:", ";height:22px;margin-left:auto;margin-right:10px;cursor:pointer;padding:5px;filter:", ";transition:", ";z-index:1;@media (min-width:", "){display:none;}"], function (p) {
  return p.isHome && 'none';
}, function (p) {
  return !p.isReverie && p.tempContent < 1 && (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2 || p.illustrationDirection === 'exit' && p.illustrationLevel > 2) && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["drop-shadow(", ")"], iconShadow);
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["filter .35s"]);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwoB;
});

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appState = _this$props.appState,
          boundHandleClickForApp = _this$props.boundHandleClickForApp;
      var currentCaller = appState.currentCaller,
          height = appState.height,
          illustrationDirection = appState.illustrationDirection,
          illustrationLevel = appState.illustrationLevel,
          images = appState.images,
          tempContent = appState.tempContent;
      var isHome = currentCaller === 'home';
      var isReverie = currentCaller === 'reverie';
      var menuIcon = tempContent === 3 ? _docs_assets_images_convert_to_data_uri_header_nav_open_88_4x_png__WEBPACK_IMPORTED_MODULE_2___default.a : _docs_assets_images_convert_to_data_uri_header_nav_closed_88_4x_png__WEBPACK_IMPORTED_MODULE_3___default.a;
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_4__["cover"])(window.innerWidth, height, images.width, images.height);
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.props);

      var onClickMenuHandler = function onClickMenuHandler(event) {
        Object(_helpers_eventManagement__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
        boundHandleClickForApp('updateTempContent', 3);
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        isHome: isHome
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderBackground, {
        isHome: isHome,
        isReverie: isReverie,
        illustrationDirection: illustrationDirection,
        illustrationLevel: illustrationLevel,
        tempContent: tempContent
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NameAsLink, {
        boundHandleClickForApp: boundHandleClickForApp,
        illustrationDirection: illustrationDirection,
        illustrationLevel: illustrationLevel,
        isHome: isHome,
        isReverie: isReverie,
        nameAsLink: true,
        tempContent: tempContent,
        to: '/'
      }, "James Abels"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Motto, {
        hide: isHome,
        illustrationDirection: illustrationDirection,
        illustrationLevel: illustrationLevel,
        isHome: isHome,
        isReverie: isReverie,
        tempContent: tempContent
      }, _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.motto), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Nav, {
        coverValY: coverVals.y < 0 // Add frost to text
        ,
        isHome: isHome,
        tempContent: tempContent
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavList, {
        isHome: isHome,
        tempContent: tempContent
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        mapData: headerLinks,
        render: function render(link, idx) {
          var isActive = link.path.includes(referrer.location);
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavItem, {
            key: idx,
            tempContent: tempContent
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(RestyledLink, {
            boundHandleClickForApp: boundHandleClickForApp,
            illustrationDirection: illustrationDirection,
            illustrationLevel: illustrationLevel,
            isActive: isActive,
            isHome: isHome,
            isReverie: isReverie,
            num: idx,
            tempContent: tempContent,
            to: link.path
          }, link.name));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
        illustrationDirection: illustrationDirection,
        illustrationLevel: illustrationLevel,
        isHome: isHome,
        src: menuIcon,
        onClick: onClickMenuHandler,
        tempContent: tempContent
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./app/helpers/eventManagement.js":
/*!****************************************!*\
  !*** ./app/helpers/eventManagement.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (event) {
  event.preventDefault();
  event.stopPropagation();
});

/***/ }),

/***/ "./app/helpers/getFontSize.js":
/*!************************************!*\
  !*** ./app/helpers/getFontSize.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFontSize; });
// This algorithm comes courtesy of https://github.com/kennethormandy/react-fittext
// It's cribbed from his source. Kenneth's component didn't like to re-render when 
// pinchZoomed was turned off after an orientation change. This simplified ver.
// has no such problems because it works directly off appState.width.
// Note: The result of the Math.min/.max equation is multiplied by two for 
// unknown reasons other than it's necessary. Kenneth set font-size to a 
// div/parent that read 1/2 of the current equation's result. I took 
// the simple approach and multiplied it by two to produce the 
// expected result (albeit w/different compressor values).
function getFontSize(width, compressor) {
  return Math.max(Math.min(width / (compressor * 10))) * 2;
}

/***/ }),

/***/ "./app/helpers/normalize.js":
/*!**********************************!*\
  !*** ./app/helpers/normalize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalize; });
function normalize(text) {
  return text.replace(/\s+/g, '-').replace(/\./g, '').replace(/'+/g, '').replace(/,+/g, '').replace(/:/g, '').replace(/\//g, '-').replace(/\?/g, '').toLowerCase();
}

/***/ }),

/***/ "./app/helpers/preloadBigImages.js":
/*!*****************************************!*\
  !*** ./app/helpers/preloadBigImages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloadBigImages; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/the-story/index.js */ "./app/data/the-story/index.js");
/* harmony import */ var _urlPrefix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlPrefix */ "./app/helpers/urlPrefix.js");



 // On images: https://images.guide
// WebP support: https://stackoverflow.com/a/54631141
// Google's detection method: https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp

function preloadBigImages() {
  var images = {};
  var devicePixelRatio = react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isIOS"] ? Math.floor(window.devicePixelRatio) : window.devicePixelRatio;

  var timesPixelRatio = function timesPixelRatio(dimension) {
    return Math.floor(devicePixelRatio * dimension);
  }; // Desktops get it right, mobile may not — check if height is bigger than width
  // Note, 11/9/19: We need the customMobileTest to catch the new iPadOS. Remember, we need
  // to know the widest possible width in order to select an image that always looks great.


  var widthType = window.screen.height > window.screen.width ? 'widthIsHeight' : 'widthIsWidth';
  var screenWidth = widthType === 'widthIsHeight' ? window.screen.height : window.screen.width;
  var screenHeight = widthType === 'widthIsHeight' ? window.screen.width : window.screen.height;
  var resWidth = timesPixelRatio(screenWidth);
  var resHeight = timesPixelRatio(screenHeight);
  var imageWidth = [640, 768, 960, 1024, 1080, 1136, 1200, 1280, 1334, 1366, 2880, 3000, 3840, 4096, 5120 // 7680 // Huge files, currently unused
  ].find(function (imgWidth, idx, arr) {
    if (idx < arr.length - 1) {
      // Equation: (originalHeight / originalWidth) * imgWidth = imgHeight
      var imgHeight = Math.ceil(2985 / 5116 * imgWidth);
      return imgWidth >= resWidth && imgHeight >= resHeight;
    }

    return true; // default size when nothing fits (5120)
  });
  images.width = imageWidth;
  images.height = Math.ceil(2985 / 5116 * imageWidth);
  _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(function (chapter) {
    var number = chapter.attributes.number;
    var imageA = new Image();
    var imageB = new Image();
    var illSource = "".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/chapter-").concat(number, "/chapter-").concat(number, "-imc-main-101419-q").concat(imageWidth < 2880 ? '90' : '50', "-").concat(imageWidth, ".jpg");
    var blurredSource = "".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/chapter-").concat(number, "/blurred/chapter-").concat(number, "-ink-blur-0x15-160.jpg");
    imageA.src = illSource;
    imageB.src = blurredSource;
    images["chapter-".concat(number, "-main")] = imageA;
    images["chapter-".concat(number, "-blurred")] = imageB;
  });
  _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.preloadUrls.forEach(function (path, idx) {
    var image = new Image();
    var filePrefix = path.includes('boy') ? 'boy' : path.includes('forrest') ? 'forrest' : 'nyc';
    var source;

    if (path.includes('boy') && !path.includes('blur') && imageWidth >= 2880 && imageWidth <= 3000) {
      // Manually skip boy-...-2880.png b/c the next level seems to look a lot nicer on screen
      // File size is roughly comparable, so only wasting compute cycles. I'm OK with that.
      source = "".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/").concat(path, "/").concat(filePrefix, "-imc-main-101419-3000.png");
    } else {
      if (path.includes('blur')) {
        source = "".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/").concat(path, "/").concat(filePrefix, "-ink-blur-0x15-160.").concat(path.includes('boy') ? 'png' : 'jpg');
      } else {
        source = "".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/").concat(path, "/").concat(filePrefix, "-imc-main-101419-").concat(!path.includes('boy') ? imageWidth < 2880 ? 'q90-' : 'q50-' : '').concat(imageWidth, ".").concat(path.includes('boy') ? 'png' : 'jpg');
      }
    }

    image.src = source;
    images[_data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.imageNames[idx]] = image;
  });
  ["".concat(_urlPrefix__WEBPACK_IMPORTED_MODULE_3__["default"], "/not-found/jinni-img-q90-1240-4x.jpg")].forEach(function (src) {
    var image = new Image();
    image.src = src;
    images['notFoundImage'] = image;
  });
  return images;
}

/***/ }),

/***/ "./app/helpers/urlPrefix.js":
/*!**********************************!*\
  !*** ./app/helpers/urlPrefix.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : '');

/***/ }),

/***/ "./app/home/BlurredBoyForeground.jsx":
/*!*******************************************!*\
  !*** ./app/home/BlurredBoyForeground.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredBoyForeground",
  componentId: "k0jn67-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:3;@media (orientation:landscape) and (max-height:", "){opacity:", ";}"], function (p) {
  return !p.homePageLoaded && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6 ? '1' : '0';
}, function (p) {
  return !p.theme.blurForTempContent && (!p.homePageLoaded || p.spellLevel > 0 && p.spellLevel < 4) && "opacity ".concat(p.spellLevel > 0 ? '.65s' : '1s', " ease-in");
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return !p.homePageLoaded && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6 ? 1 : !p.theme.blurForTempContent && p.enter && p.spellLevel >= 2 && p.spellLevel < 5 || p.exit && p.spellLevel > 2 ? '.75' : '0';
}));

/***/ }),

/***/ "./app/home/BlurredForrestBackground.jsx":
/*!***********************************************!*\
  !*** ./app/home/BlurredForrestBackground.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredForrestBackground",
  componentId: "sc-14ln9zo-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:", ";", ";"], function (p) {
  return !p.homePageLoaded && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6 || p.theme.blurForTempContent || p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2 ? '1' : '0';
}, function (p) {
  return !p.homePageLoaded || p.spellLevel > 0 ? "opacity ".concat(p.spellLevel > 0 ? '.65s' : '1s', " ease-in") : '';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '1' : '-1';
}, function (p) {
  return (p.spellLevel === 5 || p.inCity) && 'display: none';
}));

/***/ }),

/***/ "./app/home/BlurredNycBackground.jsx":
/*!*******************************************!*\
  !*** ./app/home/BlurredNycBackground.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredNycBackground",
  componentId: "sc-13jwmpq-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:", ";", ""], function (p) {
  return p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2 || p.theme.blurForTempContent ? '1' : '0';
}, function (p) {
  return p.spellLevel > 0 ? 'opacity .55s ease-in' : '';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '-1' : '1';
}, function (p) {
  return (p.spellLevel === 5 || !p.inCity) && 'display: none;';
}));

/***/ }),

/***/ "./app/home/BoyForeground.jsx":
/*!************************************!*\
  !*** ./app/home/BoyForeground.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BoyForeground",
  componentId: "eozenx-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:2;@media (min-width:", "){opacity:", ";transition:", ";}"], function (p) {
  return !p.homePageLoaded && p.loadLevelAll < 6 ? '0' : '1';
}, function (p) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["opacity ", ""], !p.homePageLoaded ? '.7s ease-in' : p.enter ? '1.1s ease-in' : '.9s ease-out');
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.spellLevel > 0 ? '1' : '';
}, function (p) {
  return p.spellLevel > 0 && 'unset';
}));

/***/ }),

/***/ "./app/home/Charms.jsx":
/*!*****************************!*\
  !*** ./app/home/Charms.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Charms; });
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getFontSize.js */ "./app/helpers/getFontSize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubHed_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubHed.jsx */ "./app/home/SubHed.jsx");






var bigPinkPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(253,17,114,1);}75%{box-shadow:0 0 0 15px rgba(253,17,114,0);}100%{transform:rotate(1turn);box-shadow:0 0 0 0 rgba(253,17,114,0);}"]);
var pinkPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(253,17,114,1);}75%{box-shadow:0 0 0 15px rgba(253,17,114,0);}100%{box-shadow:0 0 0 0 rgba(253,17,114,0);}"]);
var yellowPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(255,231,76,1);}75%{box-shadow:0 0 0 15px rgba(255,231,76,0);}100%{box-shadow:0 0 0 0 rgba(255,231,76,0);}"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__OuterContainer",
  componentId: "mfqrbl-0"
})(["display:", ";flex-direction:column;justify-content:space-between;z-index:2;opacity:", ";transition:opacity ", " ease-in;", ";"], function (p) {
  return p.spellLevel < 5 && p.tempContent < 1 ? 'flex' : 'none';
}, function (p) {
  return p.enter && p.spellLevel >= 3 || p.exit && p.spellLevel > 3 ? '1' : '0';
}, function (p) {
  return p.enter ? '.65s' : '.45s';
}, function (p) {
  return p.nameTagWidth && "width: ".concat(p.nameTagWidth, "px");
});
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__InnerContainer",
  componentId: "mfqrbl-1"
})(["display:flex;flex-direction:column;margin-top:10px;width:194px;align-self:center;margin-left:1.17em;@media (min-width:335px){width:200px;}@media (min-width:", "){margin-top:17px;width:240px;margin-left:1.6em;}@media (min-width:", "),(min-height:950px){margin-top:25px;width:330px;}@media (orientation:landscape) and (max-height:", "){margin-left:1em;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var CharmBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__CharmBox",
  componentId: "mfqrbl-2"
})(["display:flex;justify-content:space-between;"]);
var Charm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Charm",
  componentId: "mfqrbl-3"
})(["animation:", ";will-change:box-shadow,transform;border:2px dotted ", ";width:45px;height:45px;border-radius:50%;z-index:3;user-select:none;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;@media (min-width:", "){width:50px;height:50px;}@media (min-width:", "),(min-height:950px){width:75px;height:75px;}"], function (p) {
  return (p.enter && p.spellLevel > 3 || p.exit && p.spellLevel >= 3) && p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["1.5s -.15s ", " infinite"], p.isReady ? bigPinkPulse : bigPinkPulse);
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var CharmShadow = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__CharmShadow",
  componentId: "mfqrbl-4"
})(["background-color:", ";box-shadow:0px 0px 22px -8px rgba(0,0,0,.8);border-radius:50%;position:absolute;top:0px;left:0px;height:100%;width:100%;"], function (p) {
  return p.isReady && p.isActive ? 'rgba(255, 231, 76, .6)' : 'rgba(253, 17, 114, .6)';
});
var Eye = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Eye",
  componentId: "mfqrbl-5"
})(["animation:", ";will-change:box-shadow,transform;background-color:", ";height:18px;width:5px;border-radius:50%;z-index:1;@media (min-width:", "){height:23px;width:6px;}@media (min-width:", "),(min-height:950px){height:35px;width:8px;}"], function (p) {
  return (p.enter && p.spellLevel > 3 || p.exit && p.spellLevel >= 3) && p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["1.5s -.15s ", " infinite"], p.isReady ? pinkPulse : yellowPulse);
}, function (p) {
  return p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var EyeShadow = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__EyeShadow",
  componentId: "mfqrbl-6"
})(["border-radius:50%;box-shadow:inset 0px 0px 2px 1px rgba(0,0,0,.15);height:100%;width:100%;z-index:1;"]);
var Dashboard = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Dashboard",
  componentId: "mfqrbl-7"
})(["margin-top:18px;display:flex;flex-direction:column;align-self:center;width:100px;@media (min-width:", "){margin-top:32px;}@media (min-width:", "),(min-height:950px){margin-top:40px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var Score = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Charms__Score",
  componentId: "mfqrbl-8"
})(["font-size:", ";font-weight:400;color:", ";margin-bottom:5px;@media (orientation:landscape) and (max-height:", "){color:", ";text-shadow:1px 1px 0px ", ";}"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.colors.black;
});
var OuterBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__OuterBar",
  componentId: "mfqrbl-9"
})(["height:1px;width:100%;align-self:center;background-color:", ";@media (orientation:landscape) and (max-height:", "){background-color:", ";}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.theme.colors.black;
});
var InnerBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__InnerBar",
  componentId: "mfqrbl-10"
})(["width:", "%;height:100%;background-color:", ";transition:width .5s ease-out;@media (orientation:landscape) and (max-height:", "){background-color:", ";}"], function (p) {
  return p.barWidth;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.theme.colors.white;
});
function Charms(props) {
  if (props.homeState.spellLevel < 2) {
    return null;
  }

  var appState = props.appState,
      charmRefs = props.charmRefs,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels;
  var inCity = appState.inCity,
      nameTagWidth = appState.nameTagWidth,
      tempContent = appState.tempContent;
  var activeCharm = homeState.activeCharm,
      goal = homeState.goal,
      movement = homeState.movement,
      score = homeState.score,
      spellLevel = homeState.spellLevel;

  var onTransitionEndForOuterContainer = function onTransitionEndForOuterContainer(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event); // Filter, it's also called by 'width'.

    if (event.propertyName === 'opacity') {
      setSpellLevels.two(movement === 'exit', 'OuterContainer');
      setSpellLevels.four(movement === 'enter', 'OuterContainer');
    }
  }; // Let's set up a progress bar.


  var barWidth = score * (100 / (goal - 1));
  var isReady = score === goal - 1;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OuterContainer, {
    enter: movement === 'enter',
    exit: movement === 'exit',
    nameTagWidth: nameTagWidth,
    onTransitionEnd: onTransitionEndForOuterContainer,
    spellLevel: spellLevel,
    tempContent: tempContent
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SubHed_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    marginLeft: "1.05em",
    setFontSize: Object(_helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nameTagWidth, 3.05)
  }, !inCity ? "Tap the pulses to travel home" : "Tap the pulses for adventure"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CharmBox, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mapData: ['one', 'two', 'three'],
    render: function render(_, idx) {
      var isActive = activeCharm === idx + 1;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Charm, {
        enter: movement === 'enter',
        exit: movement === 'exit',
        isActive: isActive,
        isReady: isReady,
        key: idx,
        ref: charmRefs[idx] // Add a ref to each Charm when mounted
        ,
        spellLevel: spellLevel
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CharmShadow, {
        isActive: isActive,
        isReady: isReady,
        spellLevel: spellLevel
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Eye, {
        enter: movement === 'enter',
        exit: movement === 'exit',
        isActive: isActive,
        isReady: isReady,
        spellLevel: spellLevel
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EyeShadow, {
        isActive: isActive,
        isReady: isReady,
        spellLevel: spellLevel
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dashboard, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Score, {
    isReady: isReady
  }, "Cast spell in ", goal - score, "..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OuterBar, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerBar, {
    barWidth: barWidth,
    isReady: isReady
  })))));
}

/***/ }),

/***/ "./app/home/ForrestBackground.jsx":
/*!****************************************!*\
  !*** ./app/home/ForrestBackground.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ForrestBackground",
  componentId: "sc-1wj59ty-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transform:", ";transform-origin:50% 5%;transition:", ";z-index:", ";"], function (p) {
  return !p.homePageLoaded && p.loadLevelAll < 6 || p.inCity ? '0' : '1';
}, function (p) {
  return p.inCity ? 'scale(1.35)' : 'scale(1)';
}, function (p) {
  return !p.homePageLoaded && p.loadLevelAll < 6 || p.spellLevel > 0 && 'transform 1.75s, opacity 1.35s cubic-bezier(0.77, 0, 0.175, 1)';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '0' : '-2';
}));

/***/ }),

/***/ "./app/home/Home.jsx":
/*!***************************!*\
  !*** ./app/home/Home.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _Charms_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charms.jsx */ "./app/home/Charms.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _NameTag_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NameTag.jsx */ "./app/home/NameTag.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PictureBox_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PictureBox.jsx */ "./app/home/PictureBox.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var RestyledMain = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Home__RestyledMain",
  componentId: "khsa41-0"
})(["justify-content:flex-start;align-items:center;overflow:hidden;flex-direction:column;position:relative;"]);

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.charmRefs = [react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()]; // Create an initial spell pattern.

    var initialPattern = _this.createSpellPattern(); // The h1 takes additonal space above its top, all of which is included in the onlick region
    // This spacer lets us limit the height of the clickable region to the actual text area...
    // Also occupies space in document flow, putting NameTag / Charms at intended position


    _this.props.boundHandleClickForApp('updateSpacerHeight');

    _this.state = {
      activeCharm: initialPattern[0],
      eventType: 'click',
      // Type of event triggered Charm
      goal: 5,
      // [blurredBoy, blurredForrest, boy, forrest]
      //  - [2, 2, 1, 1] for initial load (blurred versions 
      // to give new viewers something interesting to see)
      //  - [1, 1, 1, 1] after traveling (transitions are off, keep it quick!)
      loadLevel: [0, 0, 0, 0],
      movement: '',
      // 'enter' = Goto Charms, 'exit' = Goto NameTag
      pattern: initialPattern,
      // arr
      score: 0,
      // Used to select an active Charm and cast spell
      spellLevel: 0 // Used to control transition, animation use

    };
    _this.eventHandlerForMouseDown = _this.eventHandlerForMouseDown.bind(_assertThisInitialized(_this));
    _this.eventHandlerForTouchStart = _this.eventHandlerForTouchStart.bind(_assertThisInitialized(_this));
    _this.setLoadLevelOne = _this.setLoadLevelOne.bind(_assertThisInitialized(_this));
    _this.setLoadLevelTwo = _this.setLoadLevelTwo.bind(_assertThisInitialized(_this));
    _this.setLoadLevelThree = _this.setLoadLevelThree.bind(_assertThisInitialized(_this));
    _this.setLoadLevelFour = _this.setLoadLevelFour.bind(_assertThisInitialized(_this));
    _this.setLoadLevelFive = _this.setLoadLevelFive.bind(_assertThisInitialized(_this));
    _this.setLoadLevelSix = _this.setLoadLevelSix.bind(_assertThisInitialized(_this));
    _this.sumLoadLevels = _this.sumLoadLevels.bind(_assertThisInitialized(_this));
    _this.setSpellLevelOne = _this.setSpellLevelOne.bind(_assertThisInitialized(_this));
    _this.setSpellLevelTwo = _this.setSpellLevelTwo.bind(_assertThisInitialized(_this));
    _this.setSpellLevelThree = _this.setSpellLevelThree.bind(_assertThisInitialized(_this));
    _this.setSpellLevelFour = _this.setSpellLevelFour.bind(_assertThisInitialized(_this));
    _this.resetSpell = _this.resetSpell.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hcForHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', this);
      var boundHandleClickForHome = hcForHome.boundHandleClick;
      var setSpellLevels = {
        // v = isValid, c = caller
        one: function one(v, c) {
          return _this2.setSpellLevelOne(v, c);
        },
        two: function two(v, c) {
          return _this2.setSpellLevelTwo(v, c);
        },
        three: function three(v, c) {
          return _this2.setSpellLevelThree(v, c);
        },
        four: function four(v, c) {
          return _this2.setSpellLevelFour(v, c);
        },
        reset: function reset(v, c) {
          return _this2.resetSpell(v, c);
        }
      };
      var setLoadLevels = {
        one: function one() {
          return _this2.setLoadLevelOne();
        },
        two: function two() {
          return _this2.setLoadLevelTwo();
        },
        three: function three() {
          return _this2.setLoadLevelThree();
        },
        four: function four() {
          return _this2.setLoadLevelFour();
        },
        five: function five() {
          return _this2.setLoadLevelFive();
        },
        six: function six() {
          return _this2.setLoadLevelSix();
        },
        sum: function sum() {
          return _this2.sumLoadLevels();
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledMain, {
        home: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NameTag_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        boundHandleClickForHome: boundHandleClickForHome,
        homeState: this.state,
        setLoadLevels: setLoadLevels,
        setSpellLevels: setSpellLevels
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Charms_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        charmRefs: this.charmRefs,
        homeState: this.state,
        setSpellLevels: setSpellLevels
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PictureBox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        boundHandleClickForHome: boundHandleClickForHome,
        homeState: this.state,
        setLoadLevels: setLoadLevels,
        setSpellLevels: setSpellLevels
      })));
    }
  }, {
    key: "createSpellPattern",
    value: function createSpellPattern() {
      var pattern = [];

      for (var i = 0; i < 5; i++) {
        var randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1; // Let's ensure our Charm order isn't redundant.

        if (i > 0) {
          while (pattern[i - 1] === randomNum) {
            randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          }
        }

        pattern.push(randomNum);
      }

      return pattern;
    }
  }, {
    key: "setLoadLevel",
    value: function setLoadLevel(idx) {
      // Doesn't need to be bound in constructor b/c the
      // calling values are bound (creating a closure)
      if (this.state.loadLevel[idx] < 2) {
        var newArr = [].concat(this.state.loadLevel);
        var lastValue = newArr[idx];
        newArr[idx] = lastValue + 1;
        this.setState({
          loadLevel: newArr
        });
      }
    }
  }, {
    key: "setLoadLevelOne",
    value: function setLoadLevelOne() {
      // onLoad/blurredBoy
      this.setLoadLevel(0);
    }
  }, {
    key: "setLoadLevelTwo",
    value: function setLoadLevelTwo() {
      // onLoad/blurredFantasy
      this.setLoadLevel(1);
    }
  }, {
    key: "setLoadLevelThree",
    value: function setLoadLevelThree() {
      // onTransitionEnd/blurredBoy
      this.setLoadLevel(0);
    }
  }, {
    key: "setLoadLevelFour",
    value: function setLoadLevelFour() {
      // onTransitionEnd/blurredFantasy
      this.setLoadLevel(1);
    }
  }, {
    key: "setLoadLevelFive",
    value: function setLoadLevelFive() {
      // onLoad/boy
      this.setLoadLevel(2);
    }
  }, {
    key: "setLoadLevelSix",
    value: function setLoadLevelSix() {
      // onLoad/fantasy
      this.setLoadLevel(3);
    }
  }, {
    key: "sumLoadLevels",
    value: function sumLoadLevels() {
      var blurs = this.state.loadLevel[0] + this.state.loadLevel[1];
      var full = this.state.loadLevel[2] + this.state.loadLevel[3];
      return {
        all: blurs + full,
        blurs: blurs,
        full: full
      };
    }
  }, {
    key: "setSpellLevel",
    value: function setSpellLevel(val) {
      // Doesn't need to be bound in constructor b/c the
      // calling values are bound (creating a closure)
      this.setState({
        spellLevel: val
      });
    }
  }, {
    key: "setSpellLevelOne",
    value: function setSpellLevelOne(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'BlurredForrest' || caller === 'BlurredNyc') {
        // onTransitionEnd
        this.setSpellLevel(1);
      }
    }
  }, {
    key: "setSpellLevelTwo",
    value: function setSpellLevelTwo(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'OuterContainer' || caller === 'InnerContainer') {
        // a. Charms/OuterContainer, b. NameTag/InnerContainer --> onTransitionEnd
        this.setSpellLevel(2);
      }

      ;
    }
  }, {
    key: "setSpellLevelThree",
    value: function setSpellLevelThree(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'BlurredForrest' || caller === 'BlurredNyc') {
        // onTransitionEnd
        this.setSpellLevel(3);
      }
    }
  }, {
    key: "setSpellLevelFour",
    value: function setSpellLevelFour(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'OuterContainer') {
        // Charms --> onTransitionEnd
        this.setSpellLevel(4);
      }
    }
  }, {
    key: "resetSpell",
    value: function resetSpell(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'InnerContainer') {
        // NameTag --> onTransitionEnd
        // Only called when exiting the spell early. The spell
        // should typically be reset when the spell's cast.
        var newPattern = this.createSpellPattern();
        this.setState({
          activeCharm: newPattern[0],
          movement: '',
          pattern: newPattern,
          score: 0,
          spellLevel: 0
        });
      }
    }
  }, {
    key: "eventHandlerForMouseDown",
    value: function eventHandlerForMouseDown(num) {
      var _this3 = this;

      return function () {
        var _this3$state = _this3.state,
            activeCharm = _this3$state.activeCharm,
            eventType = _this3$state.eventType;

        if (eventType === 'click') {
          var hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this3);
          var boundHandleCharm = hcCharm.boundHandleClick;
          boundHandleCharm(activeCharm === num);
        } else if (eventType === 'touch') {
          // Resets event type to 'click' if a mouse suddenly works
          var hcHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', _this3);
          var boundHandleClick = hcHome.boundHandleClick;
          boundHandleClick('resetEventType');
        }
      };
    }
  }, {
    key: "eventHandlerForTouchStart",
    value: function eventHandlerForTouchStart(num) {
      var _this4 = this;

      return function () {
        var hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this4);
        var boundHandleCharm = hcCharm.boundHandleClick; // Update the eventType on State if the Charm was
        // touched. This allows our onMouseDown listener
        // to reject its call due to event propagation.
        // There is a bug in React that prevents us from
        // simply calling event.stopPropagation() here.
        // Dan Abramov offers a solution, however, it
        // does not seem to work cleanly here. I've
        // come up w/my own hybridized approach.
        // I add handlers as he suggests so as to avoid
        // React's own propagation, then use State to
        // reject calls to mouseDown handler touch.
        // https://github.com/facebook/react/issues/9809#issuecomment-413978405

        _this4.setState({
          eventType: 'touch'
        });

        boundHandleCharm(_this4.state.activeCharm === num);
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this5 = this;

      // Let's add our eventHandler whenever cDU runs as a result of toggling
      // the NameTag. This causes refs to be added to our charms (an array)
      // as they mount. See also handleTouchStart.
      if (this.charmRefs[0].current) {
        this.charmRefs.forEach(function (ref, idx) {
          if (!ref.current.onclick) {
            ref.current.onmousedown = _this5.eventHandlerForMouseDown(idx + 1);
            ref.current.ontouchstart = _this5.eventHandlerForTouchStart(idx + 1);
          }
        });
      }
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
/* SPELL PROCESS

  1. Movement is '' on initial load
  2. Movement becomes 'enter' and spellLevel is 1 on first click
  3. spellLevel 1 transitions NameTag Bio to 0 (previously 1)
  4. spellLevel 1 becomes 2 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
  5. spellLevel 2 sets display: none for Home/NameTag/InnerContainer
  6. spellLevel 2 transitions opacity to 1 for BlurredForrestImage
  7. spellLevel 2 becomes 3 onTransitionEnd for PictureBox/BlurredForrestImage (opacity)
  8. spellLevel 3 transitions opacity to 1 for Charms/OuterContainer (previously: 0)
  9. spellLevel 3 becomes 4 onTransitionEnd for Charms/OuterContainer (opacity)

  --

  10. Movement becomes 'exit' and spellLevel 4 becomes 3 on click
  11. spellLevel 3 transitions Charms to 0 (previously 1)
  12. spellLevel 3 becomes 2 onTransitionEnd for Charms/OuterContainer (opacity)
  13. spellLevel 2 sets display: block for Home/NameTag/InnerContainer
  14. spellLevel 2 transitions opacity to 0 for PictureBox/BlurredForrestImage
  15. spellLevel 2 becomes 1 onTransitionEnd for PictureBox/BlurredForrestImage (opacity)
  16. spellLevel 1 transitions opacity to 1 for Home/NameTag/InnerContainer
  17. spellLevel becomes 0 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
  18. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage or PictureBox/CityImage (opacity)

  --

  19. spellLevel becomes 5 when the spell is cast
  20. spellLevel is reset to 0 onTransitionEnd in PictureBox/CityImage (transform)
  21. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage (transform)

*/




/***/ }),

/***/ "./app/home/NameTag.jsx":
/*!******************************!*\
  !*** ./app/home/NameTag.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameTag; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getFontSize.js */ "./app/helpers/getFontSize.js");
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubHed_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SubHed.jsx */ "./app/home/SubHed.jsx");











var blurInKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(["0%{filter:blur(12px);opacity:0;}100%{filter:blur(0px);opacity:1;}"]);
var heartbeatKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(["from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out;}20%{transform:scale(1.04);animation-timing-function:ease-in;}29%{transform:scale(0.97);animation-timing-function:ease-out;}45%{transform:scale(1.05);animation-timing-function:ease-in;}55%{transform:scale(1);animation-timing-function:ease-out;}"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "NameTag__OuterContainer",
  componentId: "sc-1d003v7-0"
})(["display:", ";will-change:", ";", ";", ";transform:translate3d(1,1,1);pointer-events:", ";text-align:center;z-index:2;margin-top:", "px;", ";"], function (p) {
  return p.tempContent > 0 ? 'none' : 'block';
}, function (p) {
  return p.heartbeat < 3 ? 'transform' : p.spellLevel === 5 ? 'filter, opacity' : '';
}, function (p) {
  return p.heartbeat > 0 && p.heartbeat < 2 && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(["animation:1.15s .85s ease-in-out ", " 3 both"], heartbeatKeyframes);
}, function (p) {
  return p.spellLevel === 5 && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(["animation:", " ", " cubic-bezier(0.550,0.085,0.680,0.530) both"], blurInKeyframes, !p.inCity ? '1.52s' : '1.5s');
}, function (p) {
  return p.spellLevel === 5 && 'none';
}, function (p) {
  return p.spacerHeight;
}, function (p) {
  return p.nameTagWidth && "width: ".concat(p.nameTagWidth, "px");
});
var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "NameTag__Spacer",
  componentId: "sc-1d003v7-1"
})(["position:absolute;height:", "px;width:100%;z-index:3;"], function (p) {
  return p.spacerHeight;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "NameTag__Hed",
  componentId: "sc-1d003v7-2"
})(["font-family:'Aref Ruqaa',serif;font-size:", "px;text-shadow:2px 1.5px 5px black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;line-height:1;margin-top:-9px;margin-bottom:10px;margin-left:0px;cursor:pointer;user-select:none;opacity:", ";transition:", ";@media (min-width:", "){margin-top:-17px;}"], function (p) {
  return p.setFontSize;
}, function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return !p.homePageLoaded && p.loadLevelBlurs < 2 ? '0' : '1';
}, function (p) {
  return p.loadLevelAll < 6 && 'opacity 1s ease-in';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "NameTag__InnerContainer",
  componentId: "sc-1d003v7-3"
})(["display:", ";", ";opacity:", ";transition:opacity ", " ease-in;"], function (p) {
  return p.spellLevel < 5 && (p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2) ? 'none' : 'block';
}, function (p) {
  return p.nameTagWidth && "width: ".concat(p.nameTagWidth, "px");
}, function (p) {
  return !p.homePageLoaded && p.loadLevelAll < 6 || p.spellLevel < 5 && p.enter && p.spellLevel >= 1 || p.exit && p.spellLevel > 1 ? '0' : '1';
}, function (p) {
  return p.loadLevelAll < 6 ? '.55s' : p.enter ? '.45s' : '.65s';
});
var Pitch = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "NameTag__Pitch",
  componentId: "sc-1d003v7-4"
})(["overflow:auto;margin:10px 0px;z-index:2;p{font-size:", "px;font-weight:500;margin-left:1.8em;margin-bottom:0px;color:", ";text-shadow:1.5px 1px 2px white;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"], function (p) {
  return p.setFontSize;
}, function (p) {
  return p.theme.colors.black;
});
function NameTag(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp,
      boundHandleClickForHome = props.boundHandleClickForHome,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels,
      setLoadLevels = props.setLoadLevels;
  var homePageLoaded = appState.homePageLoaded,
      heartbeat = appState.heartbeat,
      nameTagWidth = appState.nameTagWidth,
      spacerHeight = appState.spacerHeight,
      tempContent = appState.tempContent;
  var eventType = homeState.eventType,
      movement = homeState.movement,
      score = homeState.score,
      spellLevel = homeState.spellLevel;
  var attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      body = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.body;
  var motto = attributes.motto,
      name = attributes.name;

  var onClickForHed = function onClickForHed(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event); // Heartbeat ends at 3, set in PictureBox.onTransitionEndForBlurredBoy

    if (homePageLoaded && heartbeat > 1 && (spellLevel === 0 || spellLevel === 4)) {
      if (eventType === 'touch') {
        boundHandleClickForHome('resetEventType');
        return false;
      }

      if (false) {}

      boundHandleClickForHome('toggleSpell');
    }
  };

  var onAnimationEndForHeartbeat = function onAnimationEndForHeartbeat(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event); // ClickHandling, set to 2

    boundHandleClickForApp('updateHeartbeat'); // Only runs if heartbeat = 0, so no check is needed!

    localStorage.lastHeartbeat = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format();
  };

  var onTransitionEndForInnerContainer = function onTransitionEndForInnerContainer(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event); // Use conditional if InnerContainer set to position: absolute
    // Don't need it when dispaly: none is used instead.

    if (spellLevel === 1) {
      setSpellLevels.two(movement === 'enter', 'InnerContainer');
      setSpellLevels.reset(movement === 'exit', 'InnerContainer');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Spacer, {
    spacerHeight: spacerHeight
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OuterContainer, {
    heartbeat: heartbeat,
    nameTagWidth: nameTagWidth,
    loadLevelAll: setLoadLevels.sum().all,
    onAnimationEnd: onAnimationEndForHeartbeat,
    spacerHeight: spacerHeight,
    spellLevel: spellLevel,
    tempContent: tempContent
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hed, {
    setFontSize: Object(_helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nameTagWidth, 1.154),
    homePageLoaded: homePageLoaded,
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelAll: setLoadLevels.sum().all,
    onClick: onClickForHed
  }, name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(InnerContainer, {
    enter: movement === 'enter',
    exit: movement === 'exit',
    homePageLoaded: homePageLoaded,
    loadLevelAll: setLoadLevels.sum().all,
    nameTagWidth: nameTagWidth,
    onTransitionEnd: onTransitionEndForInnerContainer,
    spellLevel: spellLevel
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SubHed_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    marginLeft: "1em",
    setFontSize: Object(_helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nameTagWidth, 3.15)
  }, motto), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pitch, {
    setFontSize: Object(_helpers_getFontSize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nameTagWidth, 5)
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(marked__WEBPACK_IMPORTED_MODULE_5___default()(body, {
    smartypants: true
  }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    done: homePageLoaded,
    marginBottom: "7",
    show: setLoadLevels.sum().all < 6
  })));
}

/***/ }),

/***/ "./app/home/NycBackground.jsx":
/*!************************************!*\
  !*** ./app/home/NycBackground.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "NycBackground",
  componentId: "nxnph6-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transform:", ";transition:transform 1.75s,opacity 1.35s cubic-bezier(0.77,0,0.175,1);z-index:", ";"], function (p) {
  return p.inCity ? '1' : '0';
}, function (p) {
  return p.inCity ? 'scale(1)' : 'scale(1.35)';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '-2' : '0';
}));

/***/ }),

/***/ "./app/home/PictureBox.jsx":
/*!*********************************!*\
  !*** ./app/home/PictureBox.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PictureBox; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlurredNycBackground_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlurredNycBackground.jsx */ "./app/home/BlurredNycBackground.jsx");
/* harmony import */ var _BoyForeground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoyForeground.jsx */ "./app/home/BoyForeground.jsx");
/* harmony import */ var _BlurredBoyForeground_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlurredBoyForeground.jsx */ "./app/home/BlurredBoyForeground.jsx");
/* harmony import */ var _BlurredForrestBackground_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlurredForrestBackground.jsx */ "./app/home/BlurredForrestBackground.jsx");
/* harmony import */ var _NycBackground_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NycBackground.jsx */ "./app/home/NycBackground.jsx");
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _ForrestBackground_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForrestBackground.jsx */ "./app/home/ForrestBackground.jsx");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_forrest_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_forrest_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_forrest_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_nyc_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_nyc_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_nyc_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");












var mobileTransitionValues = 'opacity .15s ease-out';
var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "PictureBox__PictureHolder",
  componentId: "y5kiua-0"
})(["position:fixed;top:0px;left:0px;height:100%;width:100%;overflow:hidden;filter:", ";z-index:1;"], function (p) {
  return p.theme.blurForTempContent && p.theme.blur;
});
var Portal = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "PictureBox__Portal",
  componentId: "y5kiua-1"
})(["", " position:absolute;background-color:rgba(115,192,232,.2);z-index:", ";height:100%;width:100%;opacity:", ";transition:", ";"], function (p) {
  return !p.isMobile && 'display: none;';
}, function (p) {
  return p.zIndex;
}, function (p) {
  return p.homePageLoaded && p.loadLevelFull <= 1 ? 1 : 0;
}, mobileTransitionValues);
var FallbackImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "PictureBox__FallbackImage",
  componentId: "y5kiua-2"
})(["", " position:absolute;object-fit:cover;font-family:'object-fit: cover;';z-index:", ";height:100%;width:100%;opacity:", ";transition:", ";"], function (p) {
  return !p.isMobile && 'display: none;';
}, function (p) {
  return p.zIndex;
}, function (p) {
  return p.homePageLoaded && p.loadLevelFull <= 1 ? 1 : 0;
}, mobileTransitionValues);
function PictureBox(props) {
  var _bio$attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      altTextBoy = _bio$attributes.altTextBoy,
      altTextBoyBlurred = _bio$attributes.altTextBoyBlurred,
      altTextForrestFallback = _bio$attributes.altTextForrestFallback,
      altTextForrest = _bio$attributes.altTextForrest,
      altTextForrestBlurred = _bio$attributes.altTextForrestBlurred,
      altTextNyc = _bio$attributes.altTextNyc,
      altTextNycBlurred = _bio$attributes.altTextNycBlurred,
      altTextNycFallback = _bio$attributes.altTextNycFallback,
      imageNames = _bio$attributes.imageNames;
  var appState = props.appState,
      boundHandleClickForHome = props.boundHandleClickForHome,
      boundHandleClickForApp = props.boundHandleClickForApp,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels,
      setLoadLevels = props.setLoadLevels;
  var homePageLoaded = appState.homePageLoaded,
      images = appState.images,
      inCity = appState.inCity,
      type = appState.type;
  var spellLevel = homeState.spellLevel,
      loadLevel = homeState.loadLevel,
      movement = homeState.movement;
  var bigBoySrc = images[imageNames[0]].src;
  var blurredBoySrc = images[imageNames[1]].src;
  var bigForrestSrc = images[imageNames[2]].src;
  var blurredForrestSrc = images[imageNames[3]].src;
  var bigNycSrc = images[imageNames[4]].src;
  var blurredNycSrc = images[imageNames[5]].src;
  var fallbackSource = !inCity ? _docs_assets_images_convert_to_data_uri_forrest_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_8___default.a : _docs_assets_images_convert_to_data_uri_nyc_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_9___default.a;
  var altTextForFallback = !inCity ? altTextForrestFallback : altTextNycFallback;

  var onLoadTwo = function onLoadTwo(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.two();
  };

  var onLoadSix = function onLoadSix(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.six();
  };

  var onLoadForBlurredBoy = function onLoadForBlurredBoy(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.one();
  };

  var onLoadForBoy = function onLoadForBoy(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event); // Delay ensures (?!) full paint-to-screen ???

    setTimeout(function () {
      return setLoadLevels.five();
    }, 500);
  };

  var onLoadForBlurredForrest = function onLoadForBlurredForrest(event) {
    if (spellLevel < 1) {
      onLoadTwo(event);
    }
  };

  var onLoadForFantasy = function onLoadForFantasy(event) {
    if (spellLevel < 1) {
      onLoadSix(event);
    }
  };

  var onLoadForBlurredNyc = function onLoadForBlurredNyc(event) {
    if (spellLevel < 1) {
      onLoadTwo(event);
    }
  };

  var onLoadForCity = function onLoadForCity(event) {
    if (spellLevel < 1) {
      onLoadSix(event);
    }
  };

  var onTransitionEndForBlurredBoy = function onTransitionEndForBlurredBoy(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.three();

    if (setLoadLevels.sum().all === 6) {
      // ClickHandling, set to 2 and homePageLoaded = true
      boundHandleClickForApp('updateHeartbeat');
    }
  };

  var onTransitionEndForBlurredForrest = function onTransitionEndForBlurredForrest(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.four();
    setSpellLevels.three(movement === 'enter', 'BlurredForrest');
    setSpellLevels.one(movement === 'exit', 'BlurredForrest');
  };

  var onTransitionEndForBlurredNyc = function onTransitionEndForBlurredNyc(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setSpellLevels.three(movement === 'enter', 'BlurredNyc');
    setSpellLevels.one(movement === 'exit', 'BlurredNyc');
  }; // Trigger toggle after we swap backgrounds
  // Requires a closure to pass all params


  var onTransitionEndForBackgroundImages = function onTransitionEndForBackgroundImages(penultimateSpellLevel, activeBackground) {
    return function (event) {
      Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);

      if (penultimateSpellLevel && activeBackground && event.propertyName === 'transform') {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PictureHolder, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Portal, {
    alt: "",
    homePageLoaded: homePageLoaded,
    isMobile: type === 'mobile' // See above note
    ,
    loadLevelFull: setLoadLevels.sum().full,
    zIndex: "5"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FallbackImage, {
    alt: altTextForFallback,
    src: fallbackSource,
    homePageLoaded: homePageLoaded,
    isMobile: type === 'mobile' // See above note
    ,
    loadLevelFull: setLoadLevels.sum().full,
    zIndex: "4"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_BlurredBoyForeground_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    alt: altTextBoyBlurred,
    enter: movement === 'enter',
    exit: movement === 'exit',
    homePageLoaded: homePageLoaded,
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelAll: setLoadLevels.sum().all,
    onLoad: onLoadForBlurredBoy,
    onTransitionEnd: onTransitionEndForBlurredBoy,
    spellLevel: spellLevel,
    src: blurredBoySrc
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_BoyForeground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alt: altTextBoy,
    enter: movement === 'enter',
    exit: movement === 'exit',
    homePageLoaded: homePageLoaded,
    loadLevelAll: setLoadLevels.sum().all,
    onLoad: onLoadForBoy,
    spellLevel: spellLevel,
    src: bigBoySrc
  }), (!inCity || inCity && spellLevel > 0) && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_BlurredForrestBackground_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    alt: altTextForrestBlurred,
    enter: movement === 'enter',
    exit: movement === 'exit',
    homePageLoaded: homePageLoaded,
    inCity: inCity,
    loadLevelAll: setLoadLevels.sum().all,
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelFantasy: loadLevel[3] > 0,
    onLoad: onLoadForBlurredForrest,
    onTransitionEnd: onTransitionEndForBlurredForrest,
    spellLevel: spellLevel,
    src: blurredForrestSrc
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ForrestBackground_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alt: altTextForrest,
    homePageLoaded: homePageLoaded,
    inCity: inCity,
    loadLevelAll: setLoadLevels.sum().all,
    onLoad: onLoadForFantasy // Trigger toggle after backgrounds are swapped
    ,
    onTransitionEnd: onTransitionEndForBackgroundImages(spellLevel > 4, inCity),
    spellLevel: spellLevel,
    src: bigForrestSrc
  })), (inCity || !inCity && spellLevel > 0) && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_BlurredNycBackground_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    alt: altTextNycBlurred,
    enter: movement === 'enter',
    exit: movement === 'exit',
    inCity: inCity,
    onLoad: onLoadForBlurredNyc,
    onTransitionEnd: onTransitionEndForBlurredNyc,
    spellLevel: spellLevel,
    src: blurredNycSrc
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_NycBackground_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alt: altTextNyc,
    inCity: inCity,
    onLoad: onLoadForCity // Trigger toggle after backgrounds are swapped
    ,
    onTransitionEnd: onTransitionEndForBackgroundImages(spellLevel > 4, !inCity),
    spellLevel: spellLevel,
    src: bigNycSrc
  })));
}

/***/ }),

/***/ "./app/home/SubHed.jsx":
/*!*****************************!*\
  !*** ./app/home/SubHed.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "SubHed",
  componentId: "sc-1r7opha-0"
})(["font-family:'Aref Ruqaa',serif;font-size:", "px;text-shadow:1.5px 1px 2px white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;margin-left:", ";margin-bottom:5px;text-align:center;@media (min-width:", " and min-height:640px){margin-bottom:17px;}"], function (p) {
  return p.setFontSize;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.marginLeft;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}));

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./app/App.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ErrorBoundary.jsx */ "./app/shared/ErrorBoundary.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);





react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null))), document.getElementById('app'));

/***/ }),

/***/ "./app/menu/Menu.jsx":
/*!***************************!*\
  !*** ./app/menu/Menu.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");






function Menu(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: "19px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, children)));
}

/***/ }),

/***/ "./app/not-found/NotFound.jsx":
/*!************************************!*\
  !*** ./app/not-found/NotFound.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "NotFound__RestyledContentHolder",
  componentId: "ngq4b8-0"
})(["flex:1;flex-direction:column;justify-content:center;align-items:center;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "NotFound__Hed",
  componentId: "ngq4b8-1"
})(["color:", ";font-size:", ";margin-top:5px;margin-right:20px;"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.twenty;
});
var Jinn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "NotFound__Jinn",
  componentId: "ngq4b8-2"
})(["pointer-events:none;"]);
var altImageText = "Uh-oh, page not found. A Jinni, drawn in shades of blue, blocks your way. He floats atop a vibrant pink background, conjuring mystery with an all-knowing smile and an otherworldly goatee — three balls of light-blue light. The Jinni floats in mid air, fading downward into streaks of Arabic calligraphy, oft-called Hat Sanati.";

var NotFound =
/*#__PURE__*/
function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      var src = this.props.appState.images.notFoundImage.src;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestyledContentHolder, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Jinn, {
        alt: altImageText,
        style: {
          height: 'auto',
          maxWidth: '310px',
          width: '100%'
        },
        src: src
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hed, null, "Not found")));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.boundHandleClickForApp('updateApp', 'not-found');
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./app/primitives/ContentHolder.jsx":
/*!******************************************!*\
  !*** ./app/primitives/ContentHolder.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "ContentHolder",
  componentId: "umzt8g-0"
})(["margin:18px 0px 18px ", ";display:flex;flex-direction:column;filter:", ";", ";@media (min-width:", "){margin:25px 0px 25px ", ";}@media (min-width:", "){filter:", "}"], function (p) {
  return !p.saveSerifs ? '25px' : '23px';
}, function (p) {
  return p.theme.blurForTempContent && p.theme.blur;
}, react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isIE"] && 'overflow: auto;', function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return !p.saveSerifs ? '25px' : '23px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.theme.isHeaderMenu && 'unset';
}));

/***/ }),

/***/ "./app/primitives/Main.jsx":
/*!*********************************!*\
  !*** ./app/primitives/Main.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main.withConfig({
  displayName: "Main",
  componentId: "sc-4ss8f1-0"
})(["height:0px;display:flex;height:", "px;flex-grow:1;flex-shrink:0;flex-basis:auto;width:100%;max-width:", ";"], function (p) {
  return parseInt(p.theme.pageHeight) - 107;
}, function (p) {
  return !p.home ? '70rem' : '';
}));

/***/ }),

/***/ "./app/primitives/Overflow.jsx":
/*!*************************************!*\
  !*** ./app/primitives/Overflow.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Overflow",
  componentId: "sc-197c2vt-0"
})(["overflow:auto;padding-right:25px;"]));

/***/ }),

/***/ "./app/primitives/StyledLink.jsx":
/*!***************************************!*\
  !*** ./app/primitives/StyledLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_CustomLink_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/CustomLink.jsx */ "./app/shared/CustomLink.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_shared_CustomLink_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "StyledLink",
  componentId: "ujazr7-0"
})(["&:focus,&:visited,&:link{text-decoration:none;}"]));

/***/ }),

/***/ "./app/primitives/UnorderedList.jsx":
/*!******************************************!*\
  !*** ./app/primitives/UnorderedList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "UnorderedList",
  componentId: "aj1l5o-0"
})(["padding:0px;list-style-type:none;"]));

/***/ }),

/***/ "./app/projects/MultiProjectNav.jsx":
/*!******************************************!*\
  !*** ./app/projects/MultiProjectNav.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopProjectNav; });
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var RestyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "MultiProjectNav__RestyledList",
  componentId: "hzu680-0"
})(["height:100%;"]);
var Type = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MultiProjectNav__Type",
  componentId: "hzu680-1"
})(["font-size:", ";color:", ";margin-bottom:2px;font-style:italic;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.pink;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MultiProjectNav__Graf",
  componentId: "hzu680-2"
})(["font-size:", ";color:", ";margin-bottom:13px;font-weight:400;"], function (p) {
  return p.theme.fontSizes.ten;
}, function (p) {
  return p.theme.colors.black;
});
function DesktopProjectNav(props) {
  var contentState = props.contentState;
  var allContentData = contentState.allContentData;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledList, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: allContentData,
    render: function render(mappedProject, idx) {
      var _mappedProject$attrib = mappedProject.attributes,
          pitch = _mappedProject$attrib.pitch,
          projectName = _mappedProject$attrib.projectName,
          type = _mappedProject$attrib.type;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Type, null, type), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, null, "".concat(projectName, " | ").concat(pitch)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
        mappedProject: mappedProject,
        mappedProjectIndex: idx
      })));
    }
  }));
}

/***/ }),

/***/ "./app/projects/ProjectNav.jsx":
/*!*************************************!*\
  !*** ./app/projects/ProjectNav.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectNav; });
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
/* harmony import */ var _helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/urlPrefix */ "./app/helpers/urlPrefix.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var Group = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "ProjectNav__Group",
  componentId: "sc-7eckuh-0"
})(["flex:", ";justify-content:", ";margin-left:", ";display:flex;", "  ", ";"], function (p) {
  return p.imageLoaded > 1 && !p.isMenu && '1';
}, function (p) {
  return p.imageLoaded > 1 && !p.isMenu && 'flex-end';
}, function (p) {
  return !p.isMenu && '15px';
}, react_device_detect__WEBPACK_IMPORTED_MODULE_0__["isIE"] && 'flex-shrink: 0;', function (p) {
  return p.isMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["margin-bottom:", ";max-width:100%;"], !p.finalGroup && '30px');
});
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "ProjectNav__ListItem",
  componentId: "sc-7eckuh-1"
})(["height:100%;margin-right:", ";", "  &:first-child{margin-left:", ";}@media (min-width:", "){margin-right:", ";}"], function (p) {
  return !p.finalThumbnail && '15px';
}, function (p) {
  return react_device_detect__WEBPACK_IMPORTED_MODULE_0__["isIE"] && p.finalThumbnail && 'flex-shrink: 1.0275;';
}, function (p) {
  return p.isMenu && '0px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return !p.finalThumbnail && p.isMenu && '20px';
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])( // Filter out highlightThis, isMenu from StyledLink
// eslint-disable-next-line
function (_ref) {
  var highlightThis = _ref.highlightThis,
      isMenu = _ref.isMenu,
      rest = _objectWithoutProperties(_ref, ["highlightThis", "isMenu"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], rest);
}).withConfig({
  displayName: "ProjectNav__RestyledLink",
  componentId: "sc-7eckuh-2"
})(["display:flex;height:", ";border:1px solid ", ";align-items:center;@media (min-width:", "){height:", ";}"], function (p) {
  return !p.isMenu && '15px';
}, function (p) {
  return p.highlightThis ? p.theme.colors.darkPinkTwo : p.theme.colors.blueTwo;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.isMenu && '30px';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img.withConfig({
  displayName: "ProjectNav__Image",
  componentId: "sc-7eckuh-3"
})(["vertical-align:top;height:", ";width:", ";"], function (p) {
  return !p.isMenu && '100%';
}, function (p) {
  return p.isMenu && '100%';
});
function ProjectNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState,
      imageLoaded = props.imageLoaded,
      mappedProject = props.mappedProject,
      mappedProjectIndex = props.mappedProjectIndex;
  var allContentData = contentState.allContentData,
      projectIndex = contentState.projectIndex,
      thumbnailIndex = contentState.thumbnailIndex;
  var _allContentData$proje = allContentData[projectIndex].attributes,
      projectThumbnail = _allContentData$proje.projectThumbnail,
      projectName = _allContentData$proje.projectName;
  var isMenu = mappedProjectIndex !== undefined;
  var finalGroup = isMenu && mappedProjectIndex === allContentData.length - 1;
  var useThisData = !isMenu ? projectThumbnail : mappedProject.attributes.projectThumbnail;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Group, {
    finalGroup: finalGroup,
    imageLoaded: imageLoaded,
    isMenu: isMenu
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mapData: useThisData,
    render: function render(thumb, idx) {
      var isActive = isMenu && projectName === mappedProject.attributes.projectName;
      var highlightThis = !isMenu && thumbnailIndex === idx || isActive && thumbnailIndex === idx;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ListItem, {
        finalThumbnail: idx === useThisData.length - 1,
        isMenu: isMenu,
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RestyledLink, {
        highlightThis: highlightThis,
        isMenu: isMenu,
        to: "/projects/".concat(Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_2__["default"])(!isMenu ? projectName : mappedProject.attributes.projectName), "/").concat(idx + 1),
        boundHandleClickForApp: boundHandleClickForApp
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Image, {
        alt: "Thumbnail ".concat(idx + 1),
        isMenu: isMenu,
        src: "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_7__["default"]).concat(thumb, "-1x.jpg"),
        srcSet: ("".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_7__["default"]).concat(thumb, "-2x.jpg 2x"), "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_7__["default"]).concat(thumb, "-3x.jpg 3x"), "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_7__["default"]).concat(thumb, "-4x.jpg 4x"))
      })));
    }
  }));
}

/***/ }),

/***/ "./app/projects/Projects.jsx":
/*!***********************************!*\
  !*** ./app/projects/Projects.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/urlPrefix */ "./app/helpers/urlPrefix.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













var Type = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "Projects__Type",
  componentId: "sc-1bozu5p-0"
})(["font-size:", ";color:", ";margin-bottom:4px;font-style:italic;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "Projects__ProjectName",
  componentId: "sc-1bozu5p-1"
})(["font-size:", ";color:", ";margin-top:-8px;margin-bottom:4px;"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h3.withConfig({
  displayName: "Projects__Hed",
  componentId: "sc-1bozu5p-2"
})(["font-size:", ";font-weight:400;color:", ";margin-bottom:8px;margin-left:2px;"], function (p) {
  return p.theme.fontSizes.eight;
}, function (p) {
  return p.theme.colors.blue;
});
var Dek = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h2.withConfig({
  displayName: "Projects__Dek",
  componentId: "sc-1bozu5p-3"
})(["font-size:", ";margin-bottom:", ";font-weight:300;color:", ";"], function (p) {
  return p.theme.fontSizes.thirteen;
}, function (p) {
  return p.theme.bottomMargin.regular;
}, function (p) {
  return p.theme.colors.pink;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "Projects__Graf",
  componentId: "sc-1bozu5p-4"
})(["margin-right:0px;margin-bottom:", ";margin-left:2px;"], function (p) {
  return !p.lastItem ? p.theme.bottomMargin.regular : '15px';
});
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].figure.withConfig({
  displayName: "Projects__Figure",
  componentId: "sc-1bozu5p-5"
})(["margin:0px;padding-top:15px;border-top:1px solid lightgrey;"]);
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].figcaption.withConfig({
  displayName: "Projects__Caption",
  componentId: "sc-1bozu5p-6"
})(["margin-bottom:10px;font-size:", ";line-height:1.5;color:", ";"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "Projects__ImageHolder",
  componentId: "sc-1bozu5p-7"
})(["padding:15px;background-color:", ";"], function (p) {
  return p.theme.colors.reverieBlue;
});
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].img.withConfig({
  displayName: "Projects__MainImage",
  componentId: "sc-1bozu5p-8"
})(["opacity:", ";width:100%;height:auto;vertical-align:top;box-shadow:2px 4px 12px rgba(0,0,0,.3);", ""], function (p) {
  return p.imageLoaded ? '1' : '0';
}, function (p) {
  return p.imageLoaded > 0 && 'transition: opacity .25s ease-in;';
});
function Projects(props) {
  var boundHandleClickForContentLoader = props.boundHandleClickForContentLoader,
      contentState = props.contentState;
  var allContentData = contentState.allContentData,
      imageLoaded = contentState.imageLoaded,
      projectIndex = contentState.projectIndex,
      thumbnailIndex = contentState.thumbnailIndex;
  var _allContentData$proje = allContentData[projectIndex].attributes,
      captions = _allContentData$proje.captions,
      imageHolderHeight = _allContentData$proje.imageHolderHeight,
      mainImages = _allContentData$proje.mainImages,
      pitch = _allContentData$proje.pitch,
      projectName = _allContentData$proje.projectName,
      showTheseAttributes = _allContentData$proje.showTheseAttributes,
      type = _allContentData$proje.type;
  var caption = captions[thumbnailIndex];
  var filePrefix = mainImages[thumbnailIndex];
  var holderHeight = imageHolderHeight[thumbnailIndex].split(' ');
  var ratio = 100 / (holderHeight[0] / holderHeight[1]);
  var attributeArray = showTheseAttributes.map(function (name) {
    return allContentData[projectIndex].attributes[name];
  });

  var onLoadMainImage = function onLoadMainImage(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForContentLoader('imageLoader', 1);
  };

  var onTransitionEndForLoader = function onTransitionEndForLoader(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForContentLoader('imageLoader', 2);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    height: "32px",
    tinyHeight: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    done: imageLoaded > 1,
    forTransition: onTransitionEndForLoader,
    marginLeft: "auto",
    show: imageLoaded < 1,
    smallMarginLeft: "auto",
    spinner: true
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    imageLoaded: imageLoaded
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Type, null, type), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectName, null, projectName), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dek, null, pitch), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mapData: attributeArray,
    render: function render(text, idx) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Hed, null, showTheseAttributes[idx][0].toUpperCase() + showTheseAttributes[idx].slice(1)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Graf, null, text));
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Figure, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Caption, null, caption), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ImageHolder, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    // Take up space for image before it loads
    // https://stackoverflow.com/a/51485719
    style: {
      paddingBottom: "".concat(ratio, "%"),
      height: '0px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainImage, {
    alt: "mainPic",
    imageLoaded: imageLoaded,
    onLoad: onLoadMainImage,
    sizes: "620px",
    src: "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_11__["default"]).concat(filePrefix, "-q95-625-1x.jpg"),
    srcSet: ("".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_11__["default"]).concat(filePrefix, "-q50-1250-2x.jpg 1250w"), "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_11__["default"]).concat(filePrefix, "-q50-1875-3x.jpg 1875w"), "".concat(_helpers_urlPrefix__WEBPACK_IMPORTED_MODULE_11__["default"]).concat(filePrefix, "-q50-2500-4x.jpg 2500w"))
  })))))));
}

/***/ }),

/***/ "./app/reload/ReloadRoute.jsx":
/*!************************************!*\
  !*** ./app/reload/ReloadRoute.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReloadRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Reload.js */ "./app/classes/Reload.js");



/** Redirect users via bodyState */

function ReloadRoute(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp;
  var _props$appState = props.appState,
      currentCaller = _props$appState.currentCaller,
      type = _props$appState.type;
  var indexForChapterData = props.bodyState.indexForChapterData;
  var reload = new _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__["default"](props); // Update appState.illustrationState when link points to /chapter

  if (currentCaller === 'chapter') {
    var number = indexForChapterData + 1;

    if (type === 'mobile' || !props.appState.images["chapter-".concat(number, "-main")].complete) {
      number = number * -1;
    } // Note: Duplicated by State.rebuildApp, but breaks w/o this.


    boundHandleClickForApp('updateIllustrationState', number);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: reload.path
  });
}

/***/ }),

/***/ "./app/shared/ContentLoader.jsx":
/*!**************************************!*\
  !*** ./app/shared/ContentLoader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentLoader; });
/* harmony import */ var _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverie.jsx */ "./app/article-n-reverie/ArticleOrReverie.jsx");
/* harmony import */ var _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverieNav.jsx */ "./app/article-n-reverie/ArticleOrReverieNav.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _classes_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Content.js */ "./app/classes/Content.js");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/Menu.jsx */ "./app/menu/Menu.jsx");
/* harmony import */ var _projects_MultiProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/MultiProjectNav.jsx */ "./app/projects/MultiProjectNav.jsx");
/* harmony import */ var _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/Projects.jsx */ "./app/projects/Projects.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../classes/State.js */ "./app/classes/State.js");
/* harmony import */ var _story_Story_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../story/Story.jsx */ "./app/story/Story.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














 // For future refactoring: https://stackoverflow.com/a/51753410

var ContentLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentLoader, _Component);

  function ContentLoader(props) {
    var _this;

    _classCallCheck(this, ContentLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentLoader).call(this, props)); // Note: DO NOT USE props.currentCaller or props.isMenu to avoid problems
    // w/BACK/FORWARD. Both are out-of-date b/c the eventListener for
    // BACK/FORWARD runs AFTER ContentLoader runs.

    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, props);
    var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_12__["default"](props, location);
    var content = new _classes_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"](location.caller);
    var allContentData = content.getContentData();
    _this.overflowRef = location.caller === 'chapter' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef() : {}; // Prevents errors
    // Don't need to store publication. The Clip list is one dimensional, meaning that 
    // we don't sort by publication. Instead, publication will show the first
    // matching index item when needed as a default.

    var imageLoaded = -1;

    if (location.caller === 'chapter' || location.caller === 'projects') {
      if (location.caller === 'chapter') {
        imageLoaded = _this.props.appState.images["chapter-".concat(state.getIndex('chapter') + 1, "-blurred")].complete ? 2 : 0;
      } else {
        imageLoaded = 0;
      }
    }

    _this.state = {
      allContentData: allContentData,
      caller: location.caller,
      chapterIndex: state.getIndex('chapter'),
      headlineIndex: state.getIndex('article'),
      // -1 = n/a, 0 = not loaded, 1 = loaded, 2 = done
      imageLoaded: imageLoaded,
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      projectIndex: state.getIndex('project'),
      reverieIndex: state.getIndex('reverie'),
      thumbnailIndex: state.getIndex('projectPics')
    };
    return _this;
  }

  _createClass(ContentLoader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          caller = _this$state.caller,
          isNotFound = _this$state.isNotFound,
          needsRedirect = _this$state.needsRedirect;
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.props);
      return needsRedirect ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/i"
      }) : isNotFound ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/not-found"
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/".concat(caller, "/menu"),
        render: function render() {
          if (caller === 'chapter') {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
              to: "/not-found"
            });
          } // Components must be Capitalized!, so use variable...


          var MenuContent = _this2.getMenuContent(caller);

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _this2.props, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuContent, _extends({}, _this2.props, {
            contentState: _this2.state
          })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        path: referrer.finalPath,
        render: function render() {
          var PageContent = _this2.getPage(caller);

          var boundHandleClickForContentLoader;

          if (caller === 'projects' || caller === 'chapter') {
            var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__["default"]('contentLoader', _this2);
            boundHandleClickForContentLoader = clickHandling.boundHandleClick;
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageContent, _extends({}, _this2.props, {
            boundHandleClickForContentLoader: boundHandleClickForContentLoader,
            contentState: _this2.state,
            overflowRef: _this2.overflowRef
          }));
        }
      }));
    }
  }, {
    key: "getMenuContent",
    value: function getMenuContent(caller) {
      switch (caller) {
        case 'journalism':
          return _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];

        case 'projects':
          return _projects_MultiProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__["default"];

        case 'reverie':
          return _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
    }
  }, {
    key: "getPage",
    value: function getPage(caller) {
      switch (caller) {
        case 'chapter':
          return _story_Story_jsx__WEBPACK_IMPORTED_MODULE_13__["default"];

        case 'journalism':
          return _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];

        case 'projects':
          return _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_7__["default"];

        case 'reverie':
          return _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.props);
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, this.props, prevProps);

      if (location.needsRedirect) {
        this.setState({
          needsRedirect: true
        });
      } else if (location.isSwappingContent) {
        var _this$props = this.props,
            appState = _this$props.appState,
            boundHandleClickForApp = _this$props.boundHandleClickForApp,
            boundHandleClickForBody = _this$props.boundHandleClickForBody;
        var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.props, location);
        var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__["default"]('contentLoader', this);
        var boundHandleClickForContentLoader = clickHandling.boundHandleClick;
        state.rebuildBody(boundHandleClickForBody);
        state.resetIllustrationState(boundHandleClickForApp);
        state.rebuildContentLoader(boundHandleClickForContentLoader); // The scrollTop reset is not currently applied to
        // the /projects, and /journalism routes b/c
        // they can only be changed via /menu.
        // If you want to expand this to include the
        // /projects and /journalism, remember to 
        // filter /menu paths, as they don't have an
        // overflowRef, and so will kick an error.

        if (location.caller === 'chapter') {
          var currentCaller = appState.currentCaller;
          var scrollHandler = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_11__["default"](currentCaller);
          scrollHandler.resetElementTop(this.overflowRef, prevProps);
        }
      }
    }
  }]);

  return ContentLoader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./app/shared/CustomLink.jsx":
/*!***********************************!*\
  !*** ./app/shared/CustomLink.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // This code comes courtesy of: https://stackoverflow.com/a/51580782
// See also: https://github.com/ReactTraining/history/issues/470
// It keeps history tidy for the user.
// iSayNoMatch is a custom test. It tries to account for the
// vagaries of this site. Consider an example.
// If we were to click /chapter in the header menu while we're on
// /chapter/practical-magic, we'll add /chapter to the history
// stack (whch will then call subroutes of /chapter, adding
// them, too). Bottom line, this causes the back button
// to feel like quicksand, we'll keep ending up in
// the same place.
// Note 1: /XYZ/menu is an exception to this rule. We DO want to
// save /menu button toggles to history, meaning that /projects
// and /projects/menu should be on the stack, sequentially.
// Note 2: Home has its own quirks. Because it's a single '/',
// it's found w/n every string with a '/'. We can deal w/this
// by checking the length of 'to' --> iSayNoMatch if > 1 in
// the context of multiple checks (see code).
// *** ASIDE ***
// When the user clicks a link:
// a. window.location.pathname updates instantly, meaning it will show
// the new location, not the one we were on when it was clicked
// b. props.to will carry the actual current location, the one we
// want to ADD to the history stack (one time, not multiple).
// Yes. This use of 'to' (or its name) is confusing.
// *** END ASIDE ***
// This component updates all of appState when navigating between
// sections. Here's a rundown of how this works:
// a. It does not update appState if called by a Menu button,
//    it just toggles the isMenu property on appState.
// b. It does update appState if called by a header link or
//    the reverie link because it must be 'reset'.
// c. It will also toggle the header menu off if called by
//    a header link (but not the reverie link).
// d. Worth noting, appState is updated when the back or forth
//    buttons are used via an event listener that is added
//    to 'pop' in the App Component.

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var boundHandleClickForApp = _ref.boundHandleClickForApp,
      isCalledByMenu = _ref.isCalledByMenu,
      replace = _ref.replace,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["boundHandleClickForApp", "isCalledByMenu", "replace", "to"]);

  var pathname = window.location.pathname;
  var splitTheCaller = to.split('/'); // Word length, array length, i.e., 'chapter'

  var callerWillBe = splitTheCaller[1].length > 0 ? splitTheCaller[1] : 'home'; // Checks length of string value, not array

  var isMenu = pathname.includes('menu') && pathname.split('/')[2] === 'menu'; // Ensures this is a /menu.

  var iSayNoMatch = window.location.pathname.includes(to) && !isMenu && to.length > 1;

  var onClickHandler = function onClickHandler(event) {
    event.stopPropagation();

    if (!boundHandleClickForApp) {
      return null;
    }

    if (isCalledByMenu) {
      boundHandleClickForApp('toggleMenu');
    } else {
      // This will identify a section change, as opposed to a content swap.
      // Only section changes get a valueOne for update b/c the callers aren't changing.
      boundHandleClickForApp('updateApp', splitTheCaller.length === 2 ? callerWillBe : undefined); // Array length, i.e., ["", "chapter"]
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: typeof to === 'string' ? to : Object(history__WEBPACK_IMPORTED_MODULE_0__["createPath"])(to)
  }, function (_ref2) {
    var match = _ref2.match;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({}, props, {
      onClick: onClickHandler,
      replace: iSayNoMatch || replace || !!match,
      to: to
    }));
  });
});

/***/ }),

/***/ "./app/shared/ErrorBoundary.jsx":
/*!**************************************!*\
  !*** ./app/shared/ErrorBoundary.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
      initialLoad: true
    };
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          initialLoad = _this$state.initialLoad;
      var children = this.props.children;
      var errorText = initialLoad ? "We may have a browser problem. Please use Chrome, Firefox, or Safari. In the meantime, here's my 411." : "There's been a really confusing error. You might want to reload and try that again. In the meantime, contact me here:";

      if (hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: '#fd1172'
          }
        }, "Uh-oh! ", errorText)), initialLoad && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            paddingLeft: '25px',
            paddingRight: '25px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          style: {
            marginTop: '0px',
            marginBottom: '20px'
          }
        }, "Hi! I'm James"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: '0px',
            marginBottom: '10px',
            paddingBottom: '39%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "",
          style: {
            width: '100%'
          },
          src: "/convert-to-data-uri/me-xnc-q90.jpg"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I write code for Web sites and software. I tell stories, too."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "That's important. It means I don't just mechanically code software. I try to figure out \u2014 and keep sight of \u2014\xA0the stories that drive it. I always have."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And, as a lawyer, I crafted stories that made legal arguments."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See that \u2014 all stories, all the time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "So. What's yours?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "-j")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          style: {
            marginTop: '25px',
            marginBottom: '25px',
            paddingLeft: '25px',
            paddingRight: '25px',
            color: 'slategrey'
          }
        }, "Contact: hello@jamesabels.net"));
      }

      return children;
    } // Catch errors re-render

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var initialLoad = this.state.initialLoad;
      this.setState({
        error: error,
        errorInfo: errorInfo,
        hasError: true
      }); // We set body margin to 0 in App.GlobalStyle. That can effect 
      // the errorBoundary, so we'll check and set it to 8px here.

      var body = document.getElementsByTagName('body');

      if (body[0].style.margin === '') {
        body[0].style.margin = '8px';
      }

      ;

      if (false) {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Must be done onload to avoid React's re-render
      window.addEventListener('load', this.handleLoad);
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      var _this$state2 = this.state,
          hasError = _this$state2.hasError,
          initialLoad = _this$state2.initialLoad;

      if (initialLoad && !hasError) {
        this.setState({
          initialLoad: false
        });
        window.removeEventListener('load', this.handleLoad);
      }
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/shared/Loader.jsx":
/*!*******************************!*\
  !*** ./app/shared/Loader.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/spinner.gif */ "./docs/assets/images/convert-to-data-uri/spinner.gif");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var loaderKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{transform:scaleX(0);}100%{transform:scaleX(-1);}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__Container",
  componentId: "sc-1uhg1zs-0"
})(["display:flex;justify-content:center;margin-left:", ";margin-right:", ";opacity:", ";transition:opacity .2s;width:", ";max-width:", ";@media (min-width:", "){margin-left:", ";}"], function (p) {
  return p.smallMarginLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.smallMarginLeft.includes('auto') ? p.smallMarginLeft : p.smallMarginLeft + 'px');
}, function (p) {
  return p.smallMarginRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.smallMarginRight.includes('auto') ? p.smallMarginRight : p.smallMarginRight + 'px');
}, function (p) {
  return p.show ? '1' : '0';
}, function (p) {
  return p.cWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "px"], p.cWidth);
}, function (p) {
  return p.maxWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "px"], p.maxWidth);
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.marginLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.marginLeft.includes('auto') ? p.marginLeft : p.marginLeft + 'px');
});
var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ImgContainer",
  componentId: "sc-1uhg1zs-1"
})(["height:16px;width:16px;"]);
var ImgLoader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ImgLoader",
  componentId: "sc-1uhg1zs-2"
})(["width:100%;height:100%;background-image:url(", ");background-size:cover;"], function (p) {
  return p.spinner;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Loader__Text",
  componentId: "sc-1uhg1zs-3"
})(["color:", ";margin-bottom:", ";font-size:", ";"], function (p) {
  return !p.white ? p.theme.colors.black : p.theme.colors.white;
}, function (p) {
  return p.marginBottom + 'px';
}, function (p) {
  return p.smallFont ? p.theme.fontSizes.zero : p.theme.fontSizes.six;
});
var LoadingBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__LoadingBar",
  componentId: "sc-1uhg1zs-4"
})(["position:relative;height:1px;background-color:", ";"], function (p) {
  return !p.white ? p.theme.colors.white : p.theme.colors.black;
});
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ProgressBar",
  componentId: "sc-1uhg1zs-5"
})(["position:absolute;width:100%;height:1px;will-change:transform;background-color:", ";animation:", ";"], function (p) {
  return !p.white ? p.theme.colors.black : p.theme.colors.white;
}, function (p) {
  return p.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["1.25s ", " infinite"], loaderKeyframes);
});
function Loader(props) {
  if (props.done) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    cWidth: props.cWidth,
    maxWidth: props.maxWidth,
    marginLeft: props.marginLeft,
    onTransitionEnd: props.forTransition,
    show: props.show,
    smallMarginLeft: props.smallMarginLeft,
    smallMarginRight: props.smallMarginRight
  }, props.spinner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgLoader, {
    spinner: _docs_assets_images_convert_to_data_uri_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    marginBottom: props.marginBottom,
    smallFont: props.smallFont,
    white: props.white
  }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingBar, {
    white: props.white
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar, {
    show: props.show,
    white: props.white
  }))));
}

/***/ }),

/***/ "./app/shared/Mapper.jsx":
/*!*******************************!*\
  !*** ./app/shared/Mapper.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mapper; });
function Mapper(props) {
  return props.mapData.map(function (d, index) {
    return props.render(d, index);
  });
}

/***/ }),

/***/ "./app/shared/MenuButton.jsx":
/*!***********************************!*\
  !*** ./app/shared/MenuButton.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuButton; });
/* harmony import */ var _docs_assets_images_convert_to_data_uri_arrow_up_28_4x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/arrow-up-28-@4x.png */ "./docs/assets/images/convert-to-data-uri/arrow-up-28-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_arrow_up_28_4x_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_arrow_up_28_4x_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_arrow_down_28_4x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/arrow-down-28-@4x.png */ "./docs/assets/images/convert-to-data-uri/arrow-down-28-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_arrow_down_28_4x_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_arrow_down_28_4x_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");





var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Container",
  componentId: "sc-1g6aqi4-0"
})(["min-width:50px;width:50px;"]);
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "MenuButton__RestyledLink",
  componentId: "sc-1g6aqi4-1"
})(["display:flex;flex-shrink:0;margin-right:auto;position:relative;padding-bottom:3px;justify-content:space-between;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MenuButton__Label",
  componentId: "sc-1g6aqi4-2"
})(["font-size:", ";color:", ";margin:0px;cursor:pointer;margin-top:-2px;font-weight:300;"], function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__IconContainer",
  componentId: "sc-1g6aqi4-3"
})(["margin-top:2px;margin-bottom:5px;display:flex;align-items:center;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Icon",
  componentId: "sc-1g6aqi4-4"
})(["height:3px;width:7px;background:", " no-repeat;background-size:contain;"], function (p) {
  return "url(".concat(p.image, ")");
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Line",
  componentId: "sc-1g6aqi4-5"
})(["position:absolute;width:100%;left:0px;bottom:0px;margin:0px;height:1px;background-color:", ";"], function (p) {
  return !p.reverie ? p.theme.colors.blueTwo : p.theme.colors.white;
});
function MenuButton(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp;
  var _props$appState = props.appState,
      isMenu = _props$appState.isMenu,
      currentCaller = _props$appState.currentCaller;
  var isReverie = currentCaller === 'reverie';
  var link = isReverie && isMenu ? '/reverie' : isMenu ? "/".concat(currentCaller) : "/".concat(currentCaller, "/menu");
  var arrowIcon = !isMenu ? _docs_assets_images_convert_to_data_uri_arrow_down_28_4x_png__WEBPACK_IMPORTED_MODULE_1___default.a : _docs_assets_images_convert_to_data_uri_arrow_up_28_4x_png__WEBPACK_IMPORTED_MODULE_0___default.a;
  var menuIsActive = isMenu && 'active';
  var text = !isMenu ? 'See all' : 'Close';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    menu: menuIsActive
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledLink, {
    boundHandleClickForApp: boundHandleClickForApp,
    isCalledByMenu: "menu",
    to: link
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, null, text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
    image: arrowIcon
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Line, {
    menu: isMenu,
    reverie: isReverie ? 'active' : ''
  })));
}

/***/ }),

/***/ "./app/shared/PasswordLogin.jsx":
/*!**************************************!*\
  !*** ./app/shared/PasswordLogin.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var FormHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__FormHolder",
  componentId: "sc-13pp482-0"
})(["position:absolute;top:0px;bottom:0px;left:0px;right:0px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fd1172;"]);
var Feedback = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "PasswordLogin__Feedback",
  componentId: "sc-13pp482-1"
})(["position:absolute;font-size:50px;top:10%;"]);
var ExplanationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__ExplanationContainer",
  componentId: "sc-13pp482-2"
})(["max-height:300px;max-width:200px;overflow:scroll;margin-bottom:25px;@media (min-width:425px){max-width:300px;}"]);
var ExplanationText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "PasswordLogin__ExplanationText",
  componentId: "sc-13pp482-3"
})(["color:yellow;margin-top:0px;margin-bottom:0px;text-align:center;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "PasswordLogin__Form",
  componentId: "sc-13pp482-4"
})(["display:flex;flex-direction:column;align-items:center;"]);
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__InputContainer",
  componentId: "sc-13pp482-5"
})(["display:flex;flex-direction:column;align-items:center;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "PasswordLogin__Label",
  componentId: "sc-13pp482-6"
})(["margin-bottom:15px;font-size:20px;color:white;"]);
var PasswordInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "PasswordLogin__PasswordInput",
  componentId: "sc-13pp482-7"
})(["font-size:16px;"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__Submit",
  componentId: "sc-13pp482-8"
})(["margin-top:15px;"]);
var Enter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "PasswordLogin__Enter",
  componentId: "sc-13pp482-9"
})([""]);
function PasswordLogin(props) {
  // Excellent primer on form use in React:
  // https://stackoverflow.com/a/36683831
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormHolder, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, null, props.appState.wrongPassword), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExplanationContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExplanationText, null, "Hi! Welcome to my prototype site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " As of 7/4/19, it's in the final stages of development! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " A fantastically talented illustrator is hard at work on custom art. In the meantime, it relies on placeholder images from Shutterstock (on the home and chapter pages). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " If you've got the password, check it out, but be sure to come back later this summer when the final artwork's done!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
    action: "",
    onSubmit: props.handlePasswordSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PasswordInput, {
    autoFocus: true,
    required: true,
    type: "text",
    value: props.appState.password,
    onChange: props.handlePasswordEntry
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submit, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Enter, {
    type: "submit",
    value: "Enter"
  }))));
}

/***/ }),

/***/ "./app/shared/Shelf.jsx":
/*!******************************!*\
  !*** ./app/shared/Shelf.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])( // Filter out height from div
// eslint-disable-next-line
function (_ref) {
  var height = _ref.height,
      tinyHeight = _ref.tinyHeight,
      rest = _objectWithoutProperties(_ref, ["height", "tinyHeight"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", rest);
}).withConfig({
  displayName: "Shelf",
  componentId: "fycikx-0"
})(["height:", ";display:flex;flex-shrink:0;margin-right:25px;margin-bottom:18px;@media (min-width:", "){height:", ";}"], function (p) {
  return p.tinyHeight ? p.tinyHeight : p.height;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.height;
}));

/***/ }),

/***/ "./app/story/ChapterNav.jsx":
/*!**********************************!*\
  !*** ./app/story/ChapterNav.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChapterNav; });
/* harmony import */ var _docs_assets_images_convert_to_data_uri_dot_full_32_4x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/dot-full-32-@4x.png */ "./docs/assets/images/convert-to-data-uri/dot-full-32-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_dot_full_32_4x_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_dot_full_32_4x_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_dot_empty_32_4x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/dot-empty-32-@4x.png */ "./docs/assets/images/convert-to-data-uri/dot-empty-32-@4x.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_dot_empty_32_4x_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_dot_empty_32_4x_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");








var Nav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "ChapterNav__Nav",
  componentId: "sc-15gutkp-0"
})(["max-width:200px;display:flex;flex-shrink:0;position:relative;@media (min-width:", "){max-width:225px;}@media (min-width:", "){max-width:250px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var StyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "ChapterNav__StyledList",
  componentId: "sc-15gutkp-1"
})(["width:250px;height:25px;display:flex;flex:1;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "ChapterNav__ListItem",
  componentId: "sc-15gutkp-2"
})(["flex:1;"]);
var SelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "ChapterNav__SelectorContainer",
  componentId: "sc-15gutkp-3"
})(["padding-top:8px;padding-bottom:8px;"]);
var Selector = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "ChapterNav__Selector",
  componentId: "sc-15gutkp-4"
})(["height:7px;background:", " center no-repeat;background-size:contain;"], function (p) {
  return "url(".concat(p.image, ")");
});
function ChapterNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState;
  var allContentData = contentState.allContentData,
      chapterIndex = contentState.chapterIndex;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledList, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mapData: allContentData,
    render: function render(_chapter, idx) {
      var normalizedTitle = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allContentData[idx].attributes.title);
      var dotType = chapterIndex === idx ? _docs_assets_images_convert_to_data_uri_dot_full_32_4x_png__WEBPACK_IMPORTED_MODULE_0___default.a : _docs_assets_images_convert_to_data_uri_dot_empty_32_4x_png__WEBPACK_IMPORTED_MODULE_1___default.a;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ListItem, {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        boundHandleClickForApp: boundHandleClickForApp,
        to: "/chapter/".concat(normalizedTitle)
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SelectorContainer, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Selector, {
        image: dotType,
        num: idx
      }))));
    }
  })));
}

/***/ }),

/***/ "./app/story/Story.jsx":
/*!*****************************!*\
  !*** ./app/story/Story.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Story; });
/* harmony import */ var _ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChapterNav.jsx */ "./app/story/ChapterNav.jsx");
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_1_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_1_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_chapter_1_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_2_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_2_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_chapter_2_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_3_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_3_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_chapter_3_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_4_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png */ "./docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_chapter_4_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_chapter_4_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");














var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "Story__RestyledContentHolder",
  componentId: "sc-15j4rzd-0"
})(["opacity:", ";transition:", ";pointer-events:", ";flex-direction:column;"], function (p) {
  return p.tempContent !== 3 && (p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1) ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
}, function (p) {
  return p.illustrationLevel > 0 && 'none';
});
var RestyledShelf = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]).withConfig({
  displayName: "Story__RestyledShelf",
  componentId: "sc-15j4rzd-1"
})(["flex-direction:column;align-items:center;"]);
var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].section.withConfig({
  displayName: "Story__PictureHolder",
  componentId: "sc-15j4rzd-2"
})(["z-index:-1;"]);
var Chapter = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].h2.withConfig({
  displayName: "Story__Chapter",
  componentId: "sc-15j4rzd-3"
})(["color:#fff7c9;font-weight:400;font-size:", ";font-style:italic;margin-bottom:2px;text-decoration:underline;"], function (p) {
  return p.theme.fontSizes.nine;
});
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].h1.withConfig({
  displayName: "Story__BookTitle",
  componentId: "sc-15j4rzd-4"
})(["font-family:'Playfair Display',serif;margin:0px auto 39px;font-size:2rem;font-weight:700;color:", ";text-align:center;text-shadow:1px 1px 3px rgba(0,0,0,.6);max-width:500px;@media (min-width:", "){font-size:2.5rem;}@media (min-width:", "){font-size:3.3rem;}"], function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var TagLine = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "Story__TagLine",
  componentId: "sc-15j4rzd-5"
})(["font-style:italic;font-size:", ";color:#fff093;text-shadow:1px 1px 3px rgba(0,0,0,.6);text-align:center;margin-top:-4px;margin-bottom:4px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.twentyTwo;
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.six;
});
var ChapterTitle = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].h2.withConfig({
  displayName: "Story__ChapterTitle",
  componentId: "sc-15j4rzd-6"
})(["font-family:'Aref Ruqaa',serif;font-size:3.3rem;font-weight:600;margin-top:-8px;margin-bottom:15px;color:", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"], function (p) {
  return p.theme.colors.yellow;
});
var Portal = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "Story__Portal",
  componentId: "sc-15j4rzd-7"
})(["position:absolute;top:0px;left:0px;height:100%;width:100%;z-index:0;background-color:navy;opacity:", ";transition:", ";"], function (p) {
  return p.illustrationDirection === 'exit' && p.illustrationLevel > 2 || p.illustrationDirection === 'enter' && p.illustrationLevel >= 1 ? '0' : '.5';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].img.withConfig({
  displayName: "Story__Image",
  componentId: "sc-15j4rzd-8"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-3;height:100%;width:100%;"]);
var FallbackBlur = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].img.withConfig({
  displayName: "Story__FallbackBlur",
  componentId: "sc-15j4rzd-9"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-1;height:100%;width:100%;opacity:", ";transition:opacity .5s;"], function (p) {
  return p.imageLoaded < 1 || p.illustrationState < 0 ? '1' : '0';
});
var BlurredImage = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].img.withConfig({
  displayName: "Story__BlurredImage",
  componentId: "sc-15j4rzd-10"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-2;height:100%;width:100%;opacity:", ";transition:", ";@media (min-width:", "){opacity:", ";}"], function (p) {
  return p.tempContent < 1 && (p.illustrationDirection === 'exit' && p.illustrationLevel > 2 || p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) ? '0' : '1';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s ease-in';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.illustrationLevel > 0 && p.theme.blurForTempContent && p.tempContent === 3 ? '0' : '';
});
var StoryText = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].section.withConfig({
  displayName: "Story__StoryText",
  componentId: "sc-15j4rzd-11"
})(["font-size:", ";p{color:", ";margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
function Story(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp,
      boundHandleClickForContentLoader = props.boundHandleClickForContentLoader,
      contentState = props.contentState,
      overflowRef = props.overflowRef;
  var illustrationDelay = appState.illustrationDelay,
      illustrationDirection = appState.illustrationDirection,
      illustrationLevel = appState.illustrationLevel,
      illustrationState = appState.illustrationState,
      images = appState.images,
      tempContent = appState.tempContent;
  var allContentData = contentState.allContentData,
      chapterIndex = contentState.chapterIndex,
      imageLoaded = contentState.imageLoaded;
  var _allContentData$chapt = allContentData[chapterIndex].attributes,
      description = _allContentData$chapt.description,
      number = _allContentData$chapt.number,
      title = _allContentData$chapt.title;
  var bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  var dek = 'An experiment in digital + traditional storytelling';
  var bigImageSrc = images["chapter-".concat(number, "-main")].src;
  var blurredImageSrc = images["chapter-".concat(number, "-blurred")].src;

  var onLoadForBlurredImage = function onLoadForBlurredImage(event) {
    // 0 --> 1
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (imageLoaded < 1) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 1);
    }
  };

  var onLoadForMainImage = function onLoadForMainImage(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (illustrationState < 0) {
      boundHandleClickForApp('updateIllustrationState', number, illustrationDelay);
    }
  };

  var onTransitionEndForRestyledContentHolder = function onTransitionEndForRestyledContentHolder(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateIllustrationLevel', illustrationDirection === 'enter' ? 2 : 0);
  };

  var onTransitionEndForFallbackBlur = function onTransitionEndForFallbackBlur(event) {
    // 1 --> 2
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (imageLoaded < 2) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 2);
    }
  };

  var onTransitionEndForBlurredImage = function onTransitionEndForBlurredImage(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateIllustrationLevel', illustrationDirection === 'enter' ? 3 : 1);
  };

  var fallbackBlur;

  switch (number) {
    case 1:
      fallbackBlur = _docs_assets_images_convert_to_data_uri_chapter_1_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_2___default.a;
      break;

    case 2:
      fallbackBlur = _docs_assets_images_convert_to_data_uri_chapter_2_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_3___default.a;
      break;

    case 3:
      fallbackBlur = _docs_assets_images_convert_to_data_uri_chapter_3_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_4___default.a;
      break;

    default:
      fallbackBlur = _docs_assets_images_convert_to_data_uri_chapter_4_ink_50x50_53_png__WEBPACK_IMPORTED_MODULE_5___default.a;
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RestyledContentHolder, {
    illustrationDirection: illustrationDirection,
    illustrationLevel: illustrationLevel,
    saveSerifs: true,
    onTransitionEnd: onTransitionEndForRestyledContentHolder
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RestyledShelf, {
    height: "18px"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], props)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: overflowRef
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TagLine, null, dek), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(BookTitle, null, bookTitle), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Chapter, null, "Chapter ", number), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ChapterTitle, null, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StoryText, null, react_html_parser__WEBPACK_IMPORTED_MODULE_10___default()(marked__WEBPACK_IMPORTED_MODULE_6___default()(allContentData[chapterIndex].body, {
    smartypants: true
  }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PictureHolder, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Portal // z-index: 0
  , {
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    imageLoaded: imageLoaded
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(FallbackBlur // z-index: -1
  , {
    alt: "blurred fallback",
    illustrationDirection: illustrationDirection,
    illustrationLevel: illustrationLevel,
    illustrationState: illustrationState,
    imageLoaded: imageLoaded,
    onTransitionEnd: onTransitionEndForFallbackBlur,
    src: fallbackBlur,
    tempContent: tempContent
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(BlurredImage // z-index: -2
  , {
    alt: description,
    imageLoaded: imageLoaded,
    illustrationDirection: illustrationDirection,
    illustrationLevel: illustrationLevel,
    onLoad: onLoadForBlurredImage,
    onTransitionEnd: onTransitionEndForBlurredImage,
    src: blurredImageSrc,
    tempContent: tempContent
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Image // z-index -3
  , {
    alt: description,
    onLoad: onLoadForMainImage,
    src: bigImageSrc
  })));
}

/***/ }),

/***/ "./app/temp-content/BusinessCard.jsx":
/*!*******************************************!*\
  !*** ./app/temp-content/BusinessCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_teen_fairy_img_q90_640_4x_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/assets/images/convert-to-data-uri/teen-fairy-img-q90-640-4x.jpg */ "./docs/assets/images/convert-to-data-uri/teen-fairy-img-q90-640-4x.jpg");
/* harmony import */ var _docs_assets_images_convert_to_data_uri_teen_fairy_img_q90_640_4x_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docs_assets_images_convert_to_data_uri_teen_fairy_img_q90_640_4x_jpg__WEBPACK_IMPORTED_MODULE_2__);



var BoyImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BusinessCard__BoyImage",
  componentId: "sc-1eagsgc-0"
})(["position:absolute;top:0px;left:0px;height:100%;pointer-events:none;"]);
var InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BusinessCard__InfoContainer",
  componentId: "sc-1eagsgc-1"
})(["position:absolute;top:4.5rem;right:1.25rem;color:", ";@media (min-width:", "){right:1.85rem;}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "BusinessCard__Name",
  componentId: "sc-1eagsgc-2"
})(["border-bottom:1px solid white;padding-bottom:6px;font-size:", ";@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.fifteen;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.twentyFour;
});
var Pitch = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BusinessCard__Pitch",
  componentId: "sc-1eagsgc-3"
})(["padding-top:5px;font-size:", ";font-weight:500;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.two;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.twentySix;
});
var Email = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BusinessCard__Email",
  componentId: "sc-1eagsgc-4"
})(["position:absolute;bottom:0rem;right:1.25rem;color:", ";font-weight:500;font-size:", ";@media (min-width:", "){margin-bottom:25px;font-size:", ";font-weight:unset;right:1.85rem;}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.twentyFive;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.six;
});
function BusinessCard() {
  var altImageText = "A young teenage boy with big brown eyes and left hand on hip grins from the vibrant pink business card. He's wearing a mint-green sweatshirt. Dark circles ring the upper part of each arm. A magical fairy floats by his left shoulder, fairy dust sparkling around her.";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoyImage, {
    alt: altImageText,
    src: _docs_assets_images_convert_to_data_uri_teen_fairy_img_q90_640_4x_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, null, "James Abels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pitch, null, "Let's code your story")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Email, null, "hello@jamesabels.net"));
}

/***/ }),

/***/ "./app/temp-content/LegalTerms.jsx":
/*!*****************************************!*\
  !*** ./app/temp-content/LegalTerms.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");



var VerticleLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LegalTerms__VerticleLine",
  componentId: "sc-1ckhd69-0"
})(["width:", ";height:100%;position:absolute;left:", ";top:0px;background-color:", ";"], function (p) {
  return p.width;
}, function (p) {
  return p.left;
}, function (p) {
  return p.theme.colors.yellow;
});
var HorizontalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LegalTerms__HorizontalLine",
  componentId: "sc-1ckhd69-1"
})(["width:100%;height:", ";position:absolute;bottom:", ";left:0px;background-color:", ";"], function (p) {
  return p.height;
}, function (p) {
  return p.bottom;
}, function (p) {
  return p.theme.colors.yellow;
});
var Legal = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "LegalTerms__Legal",
  componentId: "sc-1ckhd69-2"
})(["position:absolute;right:2rem;bottom:1rem;color:", ";font-size:2.25rem;"], function (p) {
  return p.theme.colors.yellow;
});
var MyCopyright = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "LegalTerms__MyCopyright",
  componentId: "sc-1ckhd69-3"
})(["display:block;margin-top:18%;margin-bottom:6px;font-size:", ";font-weight:400;text-align:center;@media (min-width:", "){margin-bottom:12px;font-weight:500;font-size:", ";}"], function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.eight;
});
var ClipCopyright = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "LegalTerms__ClipCopyright",
  componentId: "sc-1ckhd69-4"
})(["display:block;font-size:", ";text-align:center;@media (min-width:", "){font-size:", ";;}"], function (p) {
  return p.theme.fontSizes.zero;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.one;
});
function LegalTerms(props) {
  // Styled as attribute for simplicity,
  // breaking it out above's a headache
  var linkOrTextForClips = props.appState.currentCaller !== 'journalism' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    boundHandleClickForApp: props.boundHandleClickForApp,
    style: {
      color: 'white',
      textDecoration: 'underline'
    },
    to: "/journalism"
  }, "clips") : 'clips'; // The following HTML is span, not a <p>, b/c it's nested in
  // a <p> (React doesn't allow <p> nesting, kicks a warning).

  var legalNotice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      position: 'absolute',
      color: 'white',
      height: '100%',
      width: '100%',
      paddingLeft: '2.25rem',
      boxSizing: 'border-box'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyCopyright, null, "\xA9 ", new Date().getFullYear(), ", James Abels. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClipCopyright, null, "All ", linkOrTextForClips, " owned by their respective publisher."));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    left: "1.25rem",
    width: "1px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    left: "1.75rem",
    width: "1px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    left: "2.25rem",
    width: "1px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalLine, {
    bottom: "5.5rem",
    height: "1px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalLine, {
    bottom: "4.85rem",
    height: "1px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Legal, null, "Legal"), legalNotice);
}

/***/ }),

/***/ "./app/temp-content/LegalTermsOrBizCard.jsx":
/*!**************************************************!*\
  !*** ./app/temp-content/LegalTermsOrBizCard.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalTermsOrBizCard; });
/* harmony import */ var _BusinessCard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessCard.jsx */ "./app/temp-content/BusinessCard.jsx");
/* harmony import */ var _LegalTerms_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LegalTerms.jsx */ "./app/temp-content/LegalTerms.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Container",
  componentId: "sc-4oyab8-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:", ";left:0px;bottom:0px;width:100%;background-color:rgba(115,192,232,.7);z-index:1;"], function (p) {
  return p.homeIsActive || p.illustrationLevel > 2 ? '0px' : '52px';
});
var CardHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__CardHolder",
  componentId: "sc-4oyab8-1"
})(["width:100%;display:flex;justify-content:center;align-items:center;position:absolute;top:0px;left:0px;bottom:55px;", " @media (orientation:landscape) and (max-height:", "){margin-top:", ";}"], function (p) {
  return p.illustrationLevel > 2 && 'margin-top: 52px;';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.homeIsActive && '52px';
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Card",
  componentId: "sc-4oyab8-2"
})(["height:160px;width:275px;background-color:", ";box-shadow:7px 7px 5px -1px rgba(0,0,0,0.3);position:relative;@media (min-width:", "){height:200px;width:350px;}"], function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});

var LegalTermsOrBizCard =
/*#__PURE__*/
function (_Component) {
  _inherits(LegalTermsOrBizCard, _Component);

  function LegalTermsOrBizCard() {
    _classCallCheck(this, LegalTermsOrBizCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(LegalTermsOrBizCard).apply(this, arguments));
  }

  _createClass(LegalTermsOrBizCard, [{
    key: "render",
    value: function render() {
      if (this.props.appState.tempContent < 1 || this.props.appState.tempContent > 2) {
        return null;
      }

      var appState = this.props.appState;
      var currentCaller = appState.currentCaller,
          illustrationLevel = appState.illustrationLevel,
          tempContent = appState.tempContent;
      var homeIsActive = currentCaller === 'home';
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        homeIsActive: homeIsActive,
        illustrationLevel: illustrationLevel
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CardHolder, {
        homeIsActive: homeIsActive,
        illustrationLevel: illustrationLevel
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
        tempContent: tempContent
      }, tempContent === 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BusinessCard_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], this.props) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LegalTerms_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], this.props))));
    }
  }]);

  return LegalTermsOrBizCard;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff":
/*!****************************************************************************!*\
  !*** ./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2":
/*!*****************************************************************************!*\
  !*** ./docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff":
/*!******************************************************************************!*\
  !*** ./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff":
/*!******************************************************************************!*\
  !*** ./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff":
/*!**********************************************************************************!*\
  !*** ./docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff":
/*!******************************************************************************************!*\
  !*** ./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2":
/*!*******************************************************************************************!*\
  !*** ./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAGjMABEAAAAA8VQAAGhoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjQb0Voci0wGYACEfAiBEgmabREICoK/PIKVewuEVgABNgIkA4kYBCAFhTgHi10MgTEbD9klnBOrux0A7m/1V4oid6sCNCQwCrgxzm4HJBWvnx38/xnHiQyFdEBqq7r5Q5XjMhALllmwejaClumAoyzsIGzIokN84tzXHfQqpUpQJaiSSu16Tj1fU7BijoUfT9xsnAuTjtEHc2S9xuadBXGzWHXQcO3PJK1iiprjobfIb334D69Kqej/sBH4Vt3nhRSXya3R98D9paR4oFqqrMIa0JQHfGJhEdiUcVcnyfZM8uX5/x/7/821zn3vi2NVxCOeRLyJhU4XzTSSe6hkko1O5O6f+Dl9d19iivgnJMGDScCDyxhDxKrqM6gxRpEKFactFdH40thvT7aTr4LEdDESUqJ0Kjz/sB/u3Df1aF7X1jbEtIpXs0zy5lmsBRKdROdDBNv8Ay+RpSBpkZkZMyGtpv18bvZ/bnLjN0oItFBF2+ISpIZVJm1hjIrRcd2+2X3b7PtXb/sGa5pJSV9Sy/YEaCFAC+gsAGtGBYJn+dv9GkLg4YRNlA2BvYlmVEC8G+DX5sORR9/de3dcZMEBl1wkHEfFwVEnaVClAkahziFOjEYdmBi1cmtcqyv1TxzOb81turmhuUpvXqkXFsuyQrfuECEEA5yhDf0jJ963pkkrXIQyDHAKE5rIM1K1qgFSZmQJgCApUhyJMASN5MfYO+qcn7rsMvfpR5t99B9mcybI3v9/Vct7X/gBAKUJKYmEwnJjIPQ3aBzpxMUkGlPZueOBg+Ycd+2W05SGCHXlrLRiH6GfyB8iVKgo6kBYNv29YwOS7CD3yqQsY4+2flaUH08z4eEriH3R7An4neehyVlRU9TpqsniZvn75b46YkFucl+yTcXOVZRU+NPpoSm50qW3AtvZ08+kAmq/aFN0KSq9mcK0m3R34y7I+iBXDPd6I2sSE5mwpheb2EfMF1lXGFHe2E4R+1UN/P+3mbZzfecb+EUhkgErVWmRdJwqLVDldmc0C19vxzLQX5lozoRtlgNaI1SYdEAVUAeoEHPRpE7RpkyVoijSJ/9nqlVa1U1JILm7R62l1ussd89xboJE0noTnU+ixu/qRnUVbAPQNBoABQIkBwRlYKgdEhiDhqFADMTH4ThyjbcQIGkoUCPHsdQaZzOdMy4zNjQ+uyi9IHQmSGOrm4Q1yiqDHnxwoR/kfDf8qrFLu/fvIFJEgkgQEQnh4Tmfx5hQoaC7XKTorf1/7Of4ThwNbdmJFyIiS+rZG/uv+bOfVquD2WktiQUUFPRRmqAm+303pwAHXf5Oi0aIhyTKgxRogrSYCHnsMeSFFxAE7OcqEt58c3w6CC8/2VIHpkjA6AGEFkfwpWeb6kDoFfIV4bY7un1/jI3sr6ViZ+mut6Yy/Lc7w1p/u+JHLBOSqszP2hxOdwbzKl/yq2wsxPKa1rXezW1RZ3dlz7Svb/qpPxYm+IThUi7vFQBRIhSQxZZYapnlVlhpldXWWGejTbbY6qC/dDmnR68+/c674KKnnnnupVdee+NtOpalacvSlldan7SxxrasQ0m05Wm9Rfp7daHYpZr1XnAsy1iR1JXRW6o/6kLW67w349ez2IiUrhwXAKR1JiwzWEjEyMFhICTCXVhaFrYqYccvfHT2laoboJAEJyG68mkEPDw8qPMIA0hlcGEKUW15p/OeXE+sTFnGhJrCvrFiqlR8tMmCSJ4QNjiVGxE25eCg3TJ0CPGG4kokG3uHjIUh5HAEumRTlCV26bbLIl1eYFV6nbhghmNxoQcLiMLNW5HJyoA12vU0MsEycPEG7IDlaVe+MfuqKqurne1je/4e1gCFMmlhOhJ4CFiUUHCAYOMRXFWHsKemMS62afDqS4s84pBFl5ekPICjskHk1mUtmFUgLXkCCWWPPaXVkHcs+zBAgUD/67zns7IPa3qB9yABeuPGIgf6kpL319f3F/qZJpqLpQMFtitC/2/8t9zfgWio5+5DcScjgkAv+6cyEuyhu1HuULgq80ea34278oweEqoj9149/ECoNESuXYdeAy674qrrbrjpltvuGHTfA0Nrdu2GcVM0VJt7UQY4fWqopNJwSaURJZWGC+BOdxDDkCU3wpkgSIQWi8QSkVkqUsuEZbmIrBDSShFbJbQ1SpXgYMJ2GsLWo4JCyCWbBBEJh9yFcNxTTlHDcP5UAD8YYeAVCFSZjASeMVanx8M8qlj8xPe+j5hvp7s5ouJ39/GLfdXX4S2CrcXhEWyLLmUulvkoFT1+gzCISCKxYnEkFBf+4AieOQwkOO0EMIQQeecYCCNlR4IjkY3C3kg2mnTR4r1mt1iD9VeC5CKBcx3U4Y4hP3zyIzTi0wGl8UxmRmdq/7NzMH/n/hP7UNNGN6fze61ru7k7+3f7VB1w56sx1FcQewQ+IUOmLFhhKKlouHDlwZMXbz58+fGnFSBQghwNmo3W4awhtZx3UXx4LBiEMBCUq18yVxs1OoWFMonU1V5ipD/KdeutRvJ4kIhyPYVj2SQO6WcIy4pqjkLGFULh0GbSlF8N+4I9vesPuoDgFZSqIqFRuBWjleusHsAgXxjjIBMoBg0W2OCAW4sXYCUTJaEPDStFmqtN6c4YXRui2pK97rwuZXRST3RYKdNwRN2MRrH8hRdmLUrrTjcI+Rf0y/KFZ2GSrhVRrc3RQt+9X9e0vRod0WnbwAAgzq/dPhqeThLd2C6g3SJ2h9gDYkPEayTbEm9HvD0xkl9XOg3eimGZRWDGWb8+aO9sdMDCuEUx2zW6FXptP89+IbWKZLfEGMK+Gs5DQkPvqZwhWZDJ4ZWLMzqXO9FicFcslaPwTTaHCrlaSKnPpZK2KlyJ6A7nBwm43wOcMd8xHU61Rn8vHBW14Cuu7+S9v9kooW+AWJ4Y3/S4m0y2NjW+M2Wiundv3JXGbpoXUtFO7rvsVBd41acwV5N9eCb0TWqPmtxNTftbIZf3qfX3oUTFdQmVHSIcUnYJcNhkpYSI1friJhU1g4LVhuh6ajbgBQD6136YOIgrALgwYl+IgmaqzQulONDs0pfdmcf1odLko9eUEwlVuLH8gLrT1LIxtazXN4Kj9BMjsnpHUUVVHFucdtLa6shiYNc1Ys110215r923taF1BRkUj5M3phRIWMYHHfKeXm5dEwwXz4C+Ku+xVxfS+2Q21Rwo9GJSX1AUVEG671s7Vhn20BrA3OoGjNSiPCnjWVfeVjj28+JJAb3TFAt6QklEZ0oowcyL1W7yFgfNQvtfnarXfLZL+HXEPZrHnvtX+VO/zDCL3W3X23pBpxHkzgDQFzXQ+GTLSpN3LhtMKewm92NIQYOzUklcVaZEXvxyq+W+0TXzVTZeW91e/c3dfP/bH7rygBbKMr4o6aqz0k0mFkBoO0B1bPqtO+iP+o0ueK+ysdo6HertyjPZXCjZZEVvbeSlouut9Uh5h7WoVYJjDkz7vfqaHMrOjNY60qsfCVlBnIB8eiZY+wCccoTV7ojewmkxEz2bOJO6TULRk/4hjjsVZDzYISjOuTSvGLTqL+R3UK+PyGH/s8j2zrg9Ltw8Fig6uGCg/OpFEl3jwZ+hsMO6kk62q4ZT3Zhhmq/Px+JWC33FS6HZTD34NtCWwXcCzg37lZ0R96ir0Gv7XGydn/vMKH34slNHk1KnweqJawqnDdDZLTcIuFYIrePxDkgVRZWIh6wMidqFRmVpLGyhcA7KfSyCnAEuHj4B4da/IREj4koJsB+WmgUOCRcbD8LBV5TuMNEUyBopMWaZa8UKF8P67myoIGrO8JTnEFcSzE0Qd/HhkUvw5IvHT1j8haRV2QzoKEEQvmBBQnKxUNEEYnLNxUplKU2E0kUkI1ciUy6lP4SWV1uhQBGJYqVUytSObR3EWr2INYilRlFpEhPNItZSi9FqBNpIo5gavXKNjTGOmfFiY4IoTcy1NMkCQgvFxSJ1ndtnl3Lwk07xmt6dVGeIkS5x0y22esRCr2j0i6ELIndJDaZ9Wql0hUEnOtKJjk5tMMTbPVG7vyr3nvi58zpD9DQ8ltHPbtXPfs3PfR2AHFc4fkjA/u97w5CHgay+CHbSbq6l0vJUTdvJPvUatFNDJAmt1le8djmEHpUFOmwrlMqT0dG0H24NlEblwF2tdDXI0tFe+sxMJX49k7Xrvov0XKB5Mm+BDAUH3AJKZDOjCrJK85bmIFR7VWsg3MWwdQspqUuuf+DNuZxIkXYOX7Zpm5wgdVi0Z4yi3ZGGJXFgxotkBnyrx8mV44w43nlZTSWMvYWaRdTqVthRUkvgBhABQAOOcFGxaMEe2nX5GMliFhJVU5ABajanxll2BLblPFpVVgpT3KE617+xALqAAIhIDYlw4LZ04XPJRm0C8waNCwX2aRUJHEKQILk4AJdF2Fzw83BV34nP4oKgwwpL92Qjcp0Nw8SqUmWLogX9zfNlnfMaoTv6zklVh/IRLipReWIjVdAoJpBEAeY50jhScpWdU1zdgbawpSW/PNXx9dHnVhVoeHO0xyxCq9N4tGelqVielUS0JO5jPpIk+UN2Aq8KgIRvOkh1PceRW4d+gDrKzVz6HJYEE+jS2+5KwNcuoWe1RUdSCgBBqOhcuRB4g8pXJJ/krAzYuVBaBUuS2UnlwEoW59VUtwA9SJSng/BJK68+2GfYgebkZYgmPFesIuwOOO0pak7UfOlL79pcex8SESHlcWbprCQe6K5jpscdOrryGcbIw9MqVLl0QWzuysPbw56RyUPPdsHMrrOI0jxuSR8pjVTEQCuqefmk5cyDtQRni47HtqyY2YiOz4HSYsV7UzFCqKcACpxZVOxfxFyAoOM1igand5yC/wC/l9aIZIFIir0MjOmgjRiop+EYZxsZClA9PkQA15VDNHBEVI9h6tk1EnLeQqAsKOjNs7zIS7zM88wYMyNhxowxM8bMuCKld+DJgXMumXHBI55yn2d5Rjvc5i477uk+aPOE+9zjMU/0AmIzc4tF7+Caa57ZYFO3WO22+D/p2qlwnHLHGTkTztnnlgMOOeBQDVCrQWlesdVdiOaZ2c+RwYy75KWO+v8W/4QrWAmxVNNiCdDr36UwHBsCcaSnjbcJiLpga5c9ibtQVdPeluoK2bH5KqH6XwG9kgh1oX2MaHB1W2bhJVcDebTwXkpj2lu/3+iSDH0IWAC1rrLK3vP2GqkuP66tvlhp9JK1b8duW9Sstevof+l6PW4zWu/JS5Fo8VRPsC1OVNJOypVGk3DNX3TT9UtzrF5bCMTaJnvl39sSrly3NM+LOtE0MAIm0KEurC7C1BAU5/CP0QimFwwrqvDb9cOxCOPq8c3aXuTf7lmrvVeYGpuzZoSgV702VbfqTeNwwK4tF5q+6hriIlvtmsir/5whOZW7A7+TkLqKlNZ0QCd9WM5DuC4qT1/ALw8R64JnPoKBYinBQx4FHisoFWqVY+sj5XOSQ66KHAmSpEiSUjT7ExMRK13I7VMQ0lzUQ5bGJz4Yfus3KjxKEFW9NyaGtldCrn8SxkOoIG51RjRocNJZS8kYMBnYlAQ4keatJjtwQnPmjGuiBdMd7AwXp8WMSZ6lpyeLxSOB+5QhcMFcmf0Rr2OqcGf0vAz+0qDIIz0nGkIEIYw4gD8iaUIqOkcQWDuRYvNWtgEry3qVNldSJJS0VeVYqVImqpQpkkoJmLL8nufRQPZ6uXJeCSI7NDEUJkQdXVVGtIALiaRSVq60iSttzWQp25SbOR84njQY/9tOgXT7yaXnE3Hlib3+UAQDuk2h6Qxkbkptu1fsCs3ZfeTeeN3us/fHxw1ff5jkDh5OVfEZWaGWqQErbvi9F4zPEMOOexHG19xGrNnzgHsjCRlTcOC5uDuKiAkbjrwWttW9iZlScuLNn3xvLBJmVJz5JPfGJmVOTcN38WeAQ8aCLRd+tE8X1rSgktpg8ExdfS2quvTTvJ4AqGGweK6yvBCN7FlfXIPGcypncyGXcy03Dw47X2itbUL77/aVmspydBQIwQKceP22OsRVlJAkRZqYLBIEIrJTIanJB1YNG7LPv9wTnQbgPgNoe7ryqQvbIVq4ZlIsxEQ1ZVvlKkOuKlVlS06j8kKPKo0LCWrKXdkUtKtWslYSGqAUm5iJ5FnLN8h1pGClVjkmIO/qmJlsSVvZ4crt1LxetUeVyGFZbE2DGZ4iSEgznkCPlaW/+O3MgdO1tgFEtjtwKb3HV6CvmjREurzS+zoiPOZ9n+wj4tydkNw32Ds/ePqFemcYTRiAZcDALx0Qx0/tQaBHr9LgnyAnA977GEtRt3am7f5Y1aTKOtdXkaJUuvIVIlryq4KnVqRCnRYjjTcDIU2MmS6TYXIm06xMntmZAlOSQtPhkUyC7ZwjGaZKprmSY1451/zCsKD/AtNghTuCpAmCgl0oYpdap0a0MKYkstAitlk1+1rrrLfhs23dfOq2kUlJaqHG9vZst8NOu+y2x1777HcAWb/3bxRYC30CPOrfoHwhj/d/Pg+y5y26+XA0A+vBaceR/kMBbD77PgW9ALQNnwFOQewKrucJCEjIqri7azBIxsAhbX3rxzpMj9yS1r/b2Ru9dQqHOYExZSwZBaNmPBh/RsfsdhTWC5xFAaleLxhyGa78rXf0wKk9j2eMGfNBuTN+ClM3z/yl1WB7cOvbmrbGP29/OgGAPz8Nrhm88ak2OGww6O7DT564W3nnFkAAVwB3uBYAeeZyKvI0Mz3UcsYD5zz1ORiGPqK/u24vdRjQrue10Kz33nq3HyIISHwCIhKG87012bMzrNlQ2lLqyo37R5INH0e+9CAX9boUHlyLhVAxYsVLlCZdhkx5i4+HLlaiTJ0GjZq0aLV2jP4lj3c+HLjgo4fOeuy5J16Ei0hkHgoWuuuTy6GRZdjwwSGHYxICumLqoEUG/eNv//oPG4XGxcLBI2RASkbOkhlzFsRUHNiy48Tea458P/T8h0IgF80ihAkXRSdStDipkiRLkSvbb3IkKFWlXIUald6oNkKbYYYbq944zmrddsd1N91yw8W++yJoDiSHyG3aVoCJ68VhleXh0VmvkDStBaBXJxaRsdWDuYWdI5WDdj9z6HP0jY4QA+HIdxV4+w/cw7dkXz955m4YfQsbpCNPyuJ/XkbqpSyMtYQJoSOdFhAGVxGBy8WmIgWswH/uIE6f2mgYs7vsks3ekjYdffZWrEljcH/wZthqGKG0s/SmyELDccWoUlBJJqRYSgD9k4YN0p84QqIWJmyZwkREKKCCEVR3OpAyilwSDj2hX2iWp0YLi9mLL/GfJkti03+MVKqrqESeDCEkuoamFWmgC2KLKxNjOPAYi44shoy1O+lFRQyxKRurzFQOBDDVaXSHmkFc+GHSJ7t044m0/H+/7TnVt8Rp6MPAxJF6UaugPfbIjFWIHnY8PwNyLFqgXIxYyqmYgGCTkVS1Ia32BpmTNzlgyOmEy39YKq8BmnbQtv7QYVfFo+Vmwq57YIOGBGsQnaK0EHKZx4gtsLtSoMTK0Tr4giFxUuuxnSUZakJnp69GpG58DB5jKJsiAiNr3kqTbvbWiNUHFqfIyFQn81I8XFGBpwBT5ptu7AMjOp0Cig+xEquoInPNNs3wD0udAiVVHtPkpV5aRLKshrcTn3HT0VuUW/kxQfrI0L8dr3zGetE10EAGrZlSrcsjKh1V15GlKHNZXmNlCtG5gLQllq2YTWwu/UH/w8rJyr6KOQ0NUfZaLtOVMvtUwD4t4bNKPLliBphIh4iERotC2CzvwlZG3TTx1KJDl6R7e1OKxIVDICp/G5ttLD27dJqNQcu/ipubWtFEBldR0Y2MCmQJFPIINPIKGM0JDJoXWOQTOOQXeLQgCENrEPe3JFu8nXhBTfR1oUiudr0VXjvL/z3wRruw/3eLXsQWD7mZWMIilqFYgWIVigAUQShCUIShiEARhU6NAcfT1YtvkRloFGhkzBufUpRZLGa9CYioe3piXipJAH0EMy5xX+bSyonMOAGlyDKeyThHXDsmT5kJZ13/SI3laTtVQU1kgOcGRLPYgovJqk0i16k8vyNYvwCAp6eynzNBmvxSyQHH6JthEDpWkr6O8qivHlcsnOMlEtj3phaRKTm/jdqYhMDVknyd/vSlSkX4hfmCOzW6thDI2aUHOrMEgkUdfNhKub2RRRk3FVisUyICx6kE2ygHUMsdI45OyARP55Sp9tD/pB5216ZLpd1U3Tw7wRMpIOiVXlgQ83JlYa4jN6IDUAwrIc24CpRqNcOxMM+VFD2pKABxkl7cN0KePVKmZWWXGpA6ZUal+AavhBiLdcnWJnEyjttgbBbITFqkkurtrrhEwzTIJDDkeH9lQ9VPnkZ7AL1DMN01ijwq4nBpchbH1zgWa9QVg34u3NLHGjvr9bcLxJtlo14JGotT313fQRDUkoXvKUqOXfW10YDIwZlSvbxOPzAj9TjWOidCWIi2bj7kyAwu3pZRseBz3SpZ8p7T2yXLnpYjxNplTKVzMohZM3GIOn6w4tSZAmBEioHYACoqu6OoZV9NbrfMfM8czPDU/hvRj2YwDeazZz6WfWPjJmhVX7Q5BKXCOdoWK8WglQyMstgCbzvdl7/ewpVO9+a23Onu2UnulhnQ0Mc80p5UK7aofziwuoIavRQonaYPyontY3+UMSxbugrcaLArIBTtAXBMQCi+UeAmnBAQSvYAOCWgzLTTIQHXEc6ICGV7AZwTEcrfXCC4ICJU7AVwSUSsrBrfIFQgQdUeANcEhOobBW7GDQGhZg+AWwLibf3w9WIHGOr2ArgnIt4HADwQERr2Angkoj1jpwPi70k+QVkP2x90/hSh4sz6hQThpvlCDNVbGLg0eKsxopWOta/FxtfqFgpb7Oq33t7gHQz2eLcLgOcH4OQH4OwH4FIP3tXg3Qz2Du0C8fAD8fQD8fID8a4H72PwvoZ5fKdDNom/s20KC/NapR/RyjuG36rfdmdAUKN3AGQF0MMgM+DkVwHOfgBgZz9Y58HVfwG2d+Q2UxAhK+R2g6fdiYNiuoITViSrl9QDhMpWhFdKg1sKBlYMhDsLAtXosU4iKl+oRTGrxeJd2CpP4QNZlWkxpBy9PKdII1VcNVwVKaKRw25gdZyioQcxrqqhDFf1VV3VgyqdiGgJYSyw+RajCFidWd5wcvCPkuIg7TABIqUX1HqhZi/6uuFCXNO8othSAyQqlLUCaURSwUonsZiVSpzuI+FF4iduLtMlGYuQoqtmjTKEmAK/RLgQCZAVKVXqzK0H4s2cpyc9Fg+ErXqHnAjklXArfBYetsnQuYxLhGiKJxgz6IBHWfUT4lFWogatEOs4PWAqC14io539PIVMwcTrIsS1lJovajd+jJUAjzH2FqJ6JD3mVzZ5jmdb4wbBxE7BmPWyWBFREsQUv7HaNU3N15Wfy9rA0LSIHo6J4YJcQk3dm05Ml0qIF3s43bLS94nHcsuEk0+xzLiJj0QlmEbqKHymEhdLyDeAomNgI1UJZ+gDW7AuuE8qzH+1dpJOYKCeEEhREgUFZRnV7D7jVRRO4Rzpp44GnmCAipAtUcy/g3g52fRJjNuBIBFdvoZQUMeVSM2pP0o5sHDnHxbEkKq2dck+IZs7ryfd0sAAJUJAc4cGh7zM2o6ItGUjq+zBej1mAEO7Ytg4zABZ8uUa4pxiEtHpVlaOCNPSWhZizqWZbqXxAms/9NkqiOWaf5z072B1T7Z8xOxicqkxCqsgX5/KQ/O0rBufoccHbsegl3qVGTHrEm1+1sfgcLLB10awju7QlOkCfrtk4elOVk0mklQx4pwxqJaCJxqINzgg4Np4AjxeJGJQsnVVQ1a3F4OcyXLk4mlnCdrMmDiiWzCHPIDR42IYOnjBM36ATkCOTX26CzBCCoInA19EsRg5zUIpPPX+zygKx9xCrH+z9TyiEKoMmhfdkGzSu4qGfq3teqydwokXzb2ux0a23icUDNf8YEmKAzj6JyZZUIFsSOSaqbdTIgy6XDdLi5ROPm9uiE/MBNb2ZkiPTp8SxfEESF4OvUNJHs35zrdKr2YgqJTMhzUAKq8vPUxcZ+1PxXworbej/JbxfeasJoCmkhLTan+AlUKMj7ojvMen2vZUiJios3bnwl8pWntcMzz58wth29iUnO1Ne500WYWaylRc+hCvfEXs0OWEan+v67ujuTWPrBHsMv6L5ACNfJ+rW1qmFvUKUs0O6oMSAQpKy9Q6lNDjcE7CePiGXCYzHHQGsrTLKUCSFpF+ppZcTtmcIrCUyRfJyJR/Kv7M5nu9tNtxf2fM4uk4qOiueyJLyTVbaCquCd59ZwdBkUtGkdxx43xJAoo6jRM3Am1zBYlcAZQsMishp7Tw8AfQrzpH4AMqB52iMqGpZA3ws0Y6z581IoQIXtyeA/kPETzpjAPRu+i3KrjArlqdW7wOFZeaWDbiCd5fWED94BSrWnkAlMhKEQ81VXkw6/QezZWM3lB0PT9iKL0JNjdFmE/ICK2aLX1r5kcVBL37sumaAu8oIGtJamYOTtti7kPIJW6t+BjR8e4PrqLV/hCrFdqgy4OswDkn8u5x3AqcNLVYmhfF60MheWSQc9OVN+QY+Ca2CExSIwNjcR2YcAVRYMUNcWfcYLJL+YPnNpEp/Ssq0KHOvkwwdEUqsUSKJi9eySAY5pweikpPadHCvrdHvprKq7AqdHdDSIEWJUXEl+AUtUk2gmR+wOR4wCBc4tecgY8JfA4I64wyUGj1hPONQD+wjIrAGZuGkz1nLmCdBGlsxgiPshoGjUiBgG9YtB26iH4Zj7bENYd4Z9G39bb3/0sPWkTLi7O44ZyrSFQ0jWlRkFZ4+vgEhNvLdm5rL8Gjnwb0Sj0fJB88klp7s705NKLL/plPE55yq6KAzUfJC1SbprUg5gKTBK2sb3BLjv1y5krFsd5mACKmXjb2PdnSAysazl0PHoskBfFzmQS55ROXR88TBl3AYUontixj7T2dKW7yO9bdaWmTZ6OMzReHgMY7CRJJdw6AjrgxCSPT1QBkpWmzag7WiYKVaLfe3Vae6994aSXx9Fwr7B16ri7IG5zNwAmzS/nKsT0ahz/bYxDDAQaAH1CCtStNXySaCwVBuNsujSdA44afoNHdiuBFEqJ01uDbIpX6ooIvNPR3LR44JBIlcYI4COqPMS+xj/VVZa3kEokf4BjKgqtDZDPHJVpJdZm+rYorfqO33AP6zAv9NqMaqc75oQb4E4Hp33N3p8Fgr/uL7qI7n1mCT/BM3XIt9jjvukfuauXpUQlBnbc34RSSarpLJZpvwZPtyGXiYFBN9CLx0bV4uFbjjNB/mWgFmzzHL5CTdk82Ea9rPAf/mDHgZGmzhhrAZfC2n9+s+z7lPmMeqQwQUj/tH2UOokTpJZa9UhxwJ8QSEYM/PlurMUBxV973dLBtMdPl+vrdEeexEFL0XA7d/JyvQN8RdBLR4SOpARa0OkqCpBk19tYUCfzJIF4ax8u/iSglnRVH4aCq3v99I6ufpf0NEPHJJtV1+dCq8VYvtNlmX+7/gps1NmQ1lrR6JvYvXqn+zz3PCt81TzrbG+5u3xnzXLTJjBSEK9qUugJ4l5VH1oAqgEM0pMtwqcKx7Xthl3aK6KJj4tq29aqd1wzL0f7/Iu1hvmk1iFFDM6pgJEPa9eWcT5LX50KI4j1ZO7yQa3z0NPe0uNYWR2pZUKqVkI40aqCHypW0eikorbLVLmj1fKx88VILFgjKu0x2JpAyvEScFaccwsylVco6KGJYzCBnL+BUk9YP33WJBhhsbJksuaoNPM/V4qsVq/BxqlOHd+OOYZlXscZyA1b7NFW3Pn5rrYI8OHHg1E702lGUNVZHN37CB4EHIGvsdPtFJmR1pJDayG3oGB2iRwIIHtRIC3OzMgn6A2sVhP5PUHCJHyUXDxTCPevgMdPH34xCRsZJ0Sy32xniuNGcsPYxxWpOElZEYfX7EgUdvkttQ/6N7/hXDnp7nYxjA9dF4acrRJUUdPL7CZB1ydxc0lYpvDLKRTBy25hTvMBNjcbHJ2rKLnVFXqfWsgSUOxtx4KuqX8VKvQghqAkzqKFHGoUhXjNwdIakDtOicamojFIdMixm86kQQhVn13yQPIGAUCAFXkrUrIgL1giSFcAPPUXbs+IE3HonxMtV/ISpe0bH3Vw3q6O95HIChkA9uM/u7jURP1gQnWPW7EjNmc9M/OkAeeZ+yFx3sjHDVt5CpGHDoJuQ28up7lvvwXjIqqY3tmKftFg8aUdAybnZpQmsKfwznxZCSKQsld4tRngW2iZS8cz3ijJ/l8cxxyp8+bNXaM+8bzfjVW6Yh9MbPB2n8ZPF6kT9oKBd1xfGNQjyKWZoHyvI4gnc1t5i20earKMeFwDxunc9L0mwMUYAgt7PM+ayArOzBLeMAnmGz0Nhez6mDZxcHM98Ci2GXEm8ZGyO5sNUe41GSmgp6ugQ5dSueJtWqyUMNxyp2Au5wReehguUnaGQtbRsQRvWVZ6Buqdua2cnsQkH1UHtgbvZOWKatt9ZHaBKd2AUcHh2BIPmEyR2GRPM+dq7UrqlD9clypEJXCc7ps2FU5ZU8Ixf+zkPbCcs/RZUhfZgiaAMhv6ncOB1mCEFZsoKD2Kb6qdq32J425w0oq/fPR1N1xlWS1qiw7aPYV7gRPydfjPyA8NydzNVh5WlSNT5oBEsfkZ70L8Gdf4MoU/eM9vE9DJoTirN0LxJr1w8CqjxEsk+i9Tui5J3BvKmyzTrPNa7riw/y25qhI9ohPgZXkVKAAiuh3Qj8Nyj/CXHfmHF90wQiye7thIljPfyjjk3EdOGHUA/l49HMgOP0N+PthoY253nwU9icAF+SZa4fzM0E4E8DrmkZWnPUXNKYsk0YL5DbiA69p6E+pXBeEbRUH13jElfpXYoYZusq41DAAT5lR5Js3ZhRYozFz30CXK0x4vsYGOaYx0cy8GUN5qaFOT4oCl8teb6yADaEqoo58dqXjjWX43c5kGsIIdNRJZEOFTi/hCNLpARiktC4jdRGtngebxNE/XBd5VW8B5+5NZcOTqHdXYiNr87Nk99pJqHNiFIwZDM/tQ2EgSokb7r7QYk8MASQWhnhu2mPwu/6ycWzBw1ZCmVPBQAQ2nJn9bPzk+BixERPmyS+gZr0RHewDbdXgUWoM3tV5acJHMNhi7REw3pFx8GJIWj71/1mPMTbAj+GmU71kVy9rvwDVKnRwARgUMuZ6W5tbiKS9SpaoMl/eajgM2Uwqwbh6A3DV4I7oFcMpxlzE+6FVdddzYDCksVKylrARCriTQnAp0U8hM6PtjwRQ/IAvtaGbWFWrEDSQqUsjWtjWmfd1+Yzi+D3KwUnR0Ihh2VTr4LK66CmthbF0NRF3cxV+PI5MpsmZEoZh8Wa3By/ijuAtrpa+dyxkRThSG5I2NXkupZp3MUNEh0VY+Ovi12a7QrNfZL7LI00LonMN0MEb5mj+x6/eLRuDW06v7vFOqZnRxp5AlNQxFNsFYT9+dVsZL4PG37HASvnnMyUvdLrenAWjwmOO6HnvARsNeCHpyjASWWwagreqJ69r61YNo382iHAl2DPS9nGaQkVXVLtuIZxNYdLTzb5/b6V2gYycX8S0jpqkxx67XClMIn0mbW/zccUY5f5+svwhWUwEWyAG2Zha4csIaOabuisaNClmfxPTUxucPutrbhXO18prd2ftWVPK/ErFZ93Wr+Byp0R4rFvcIYbWuzTaydHw8ibk/+7zqUe+gKxlZxcpHrX8I6O3AZzUc7Wda3Ofk8KNZQFFYHhVyp2IOYH6RmsFLTSqQsnrXzV9I6Dc1T3FLvrp9zxGxBCVlef+71qeR00n5gQJrhDhRu1iRkr9w7//f7ymGL4bFc4Eksmt5xrtOD/fP1RkjYPM9/piUKCgvI4Z3XZ4Mdbq2WaBS6+uJdts/UhK+rhJHYLKRC2/////2kLz2+OuKvt16nN0nwj4GZ4mo4kPUaAb+Yuucm2og1M+mfTMsNEJXgBhBNK7trmUxO3vC05e+P/fE18ekyj7ZJB9l+uRwCzB1ZwHh8YO0TAhxGJAM30ritQMirrV5t6fdPgI00hi6ZocsMCc6ZibRreExUbGWaR0Em/7ZL/VBOlO8fQdGFXH5ENmqEJ5A/Zuz6jSxW6opiFqFI0plfHgJR41FdUXUdlcaSjVWDeJEuNKOGAoQu7FI/ZuxaCAUogcYQEaa912dOqar0wyC5qWvHaHe4Omm+zS6wSjduO+52Z+Vy/qVt/ISgvT7nJfcejAaKUGGGY6hoK96pGdYl0wIV744tDLwToOiTa+w4b5QHdSosEyU8HBP9wedZpJT6t3x5u1saCw5NltRko9+5+vaOhtLdMwXdX2w0HdIvxk1uYnNWKPXJ7yeUz2knfid1BA4eOVI72RaAmlKDBsium0GI0MdBEHJz7GJkto7HRCXUO31mNnF2gvQXSa5w7kOxZSJpRCEKGAqQ/iFNzBLF5txy2GIUSbpN3GgQ8lCIZneRhby6b/9Qvxupv7LCj/yM7IRoJPbQx2rbjVycyyGvOxsdc0Fgiw9slIHg1SwzoemZxaXc7SWFV3h7rh+Q+YUv108DNxoKrgFibAXjfSD8bjzMmCt2Hj1z4Uhz8aE9JXXFt4/eVDD5FgyA1ARae3RCG5ZmVwR9NR6syAZge+GH0IdJXmugBgIYco+vKhMspCIPjNXiSrNpGYJzv6yf9RvT1sYAlpGCRvK4+tUoYILk6q8B08Mx0ZMbfsvYV/FyIB+EX1p03J0pmV+xkoNkhAViT5Eg3HCto3vzfL2t+Lg4dprxD2liFCc2+jsSqlBkRXmD/6wyJ1f7eVD5tWMmbF4IBfzVIGOVsY9bk+KHfko93f4u4DcpnwLh9/d4XNs1eaos1kE+/PXMA3OOA6aTxwkvBUHz5DS9X2iXRDJ4W715ZtWdtBdzU9EyLc98lzeft7OmVrIj1ydXYpN4e6st26qpactyZNlLneXIj/otfk6bRq/QXMvLrE3inNuug5JP/mBTtIKTdr585/XRC8gfbo5Vc/Upj7VNWsjEW2Uhfc61Ez7f7pbG/EM7SgK842Uh29ftvqyPGVep9aSD5Jszqodsqm/X0cWhA6/LaezH9JmbZLzWkf3I/1Jq4YkU7nzuzppa0Q6vT8Yx83m1sfhjk1e9yg84vLa+UKmsWm5ohG28vpezuFlpNQUVqiJDSuxGlud/69H6iatW+UsqRwZ2kzf2Jmel1ZcUpxdYjaKfo5KaU7L0AEtRS3aQmdfOtbE/AsCJeKyS3oD2+M/tKY5eVWjbXmv7H/713v1vlJWHtRaN//udJ7I3RkXP+cbMaOcs+IFgPxJ1H3CP3eSl6EXjsMo4C83I1f06aGLqx+eqVQU55ppgW3xBVF7ap8jqNjfibeiRVW1rx2gvuNmaXHe22qt3uL/48um+qEjoZgYqXL8LJWdV2DQS8ftC6peFS/7Yb1BzHFKtLreZa1JZET+XxNE/AdM/R0U2+VYVKExqhcrsdopPm9V8l0yjyQ4w07I7q+xCHgrVmV1pQaVyIqZ+Bnog2ow2CPDzFMVJRYr0bGF5khfFE9ojSwshN28WQARvRfHRoOtZxiMBkW3Jk6+IzdUpBoXrav1XxDuko07jd1ZlreyOTvm2fS+Qnam6Ixy+cgMY+Zt6I2UyGTX5uuXK1x1bDeQI/4Kwi8cvd9qxDj5rzwAm1dJUyFW/eXT+2fGU1OSmi2MX62/fn1rexocAMwU5foBGSVqzcX8VWzI+sR8GtOb5bwCi1yB8YmRXKR9pY3P377p9fbKnbWIvFoE1YWRSENIcD9K+iYmqO/DCvegHLvFaCzAY0DwFjKC9cvnMt5q0VhEY11wGwebpwkDKdzHRnZu/t1b+zkQXkYFBk+Yp8JdW+UHvoQc+k+3qDeCGuHzpgwdevUVV8OlaDl2puo8FT9pKSsNB6hoYdNEbNOd2hotPOdpi2n8Py+Ad922rdbXXxDajyIrioBVy/Fw2BMjdtii7tiSuEcUTGiJzdJCd7+VBUooi03UK/m96otgvwLo4jWzR8Ox9LOVbMrWIjNv/9nEXTCg2I9p8/1cmJQ/FJ2o3vKtTng8XeyoWZ1z/9ER5bYuQjcTl9xp4bhCuLS206CtSJgResVTb/T+eZftMjpkfwxNIenJeHtE6y8oPLx4JdeJrCJ92hWfimGtaNXWDAnYkDr2TVnEZXrm8d6xvVcC0W2IGdfO1xIDgQyp4h5h3tNDpFslQsfKuvi5+PZfkGm6KYTu1cF1iyc4reOoFKvUNCqHoTGccQqMfrA/aS9QUI/VCBEJbWeyuGRhemZ/R1ZRuUYdlzNLAO8SCtbnkgvLSxpEQP1/VXqXRWX2He7Q9Jfzna9cHHqGldEAkV3eEtEOHa1Dg3R2su9L11orJxtb+/tECdU+1Vq96lVyyfqdzYNwms1Oby8lm4TrTwHJt6CH56I4amLOeXf+qT9zNUq83iN0gQltd6KzvXrl8eMW6pgs/ohNIelreAYpzVpAfUbwj1EWppqaBdxOuLDCSce1EyhYy5tsP6MwExt/HOlKKgkBwVHBXCL7dCCETKsNA2iX2mBEw5mFLyT4rlp35w94/0clnO+Z3D6W6F7kL4cN4Eqshv1ZrkGqzh8TlFUtEAmJzw/o0JsfOM2TmKqXkiLR0rZnDo6tt5miv0yS8fJWL04cnUHC4R+CTi587nZ8zcu1t5r9zyql4mesF5IUknn2JBtaE4ShlYSChl61kH6JyVFoJit1LAMveUc0Y9TO22p5t9feL2Z9RwcowMjE4+OFUwSxN0LZgLSO2MiqaRovmcGq1Bdi7w7V/bc26frWBQsfsZlJ/wIKfDI+PE9gMfaVZIrUd+fSh5N+4uPBbnFEqW6kXR/Z83mPIQzCV3RbOd9FMDilYua+dSRUpnoPuMDS5LAxM+JtDWf0zG4pCp9hvUcDKMMLw16eczjPxx0firCE41DgZ8Kd74cCULiNDdyDZdbfYDWUEJ9jR0isyg/tIuLLlsU6OkjNCpTc44PHsdWSwDORmm4vdNJ/EUunFSLYLC+Zd9QjuaVrILW5yIKl5W7w8VX/wJz9I4j3fwpGQW9J4dj8QBUoAfGz1xwN49EVhJFiWV9xmXAMfGFy3bmBgcevgQL/M4GDrHkl3f7+ki8sTd04BzITt47QW+ct1ZRp9uUc/Tk4WLNGX8VjfZ4Sj6aYle1GX12G4fx2+KzOX7kUnlyj0nxpYbjpCW1JolnrYByXZjY3dA+vWdQ82Nkl8h7K5ktkfoWpB/l6wpok6+wdE3Wwmr2tggNfJxP/Jzg8vXhfiWlWTi2bgHiW/KWt997YgwS2s4k0LwEnfRyCUjZGnmM9FfIOKnW6RAhuh7O3s5NVwKM6Ruk5m3iW4v799fddHSNN5AryrfLxzEELGVI5RJphPRTFe7PKI5bCpr6OTW1g6UlPEyYEMTi3L77yERsgkKJjm7YzT8QVFLaOjy5eNVnF2B0jmZMn9WpLoenvc0uZPRfWvusT1AscE/GsG/RiV0ooXXRRFx2T5ZG4OVPCOGEzoD0Ao2DJIc9w8/BtewjHL+Pow+NPYpdHQazBQ0gNG6zT5KYQKAuULyLufqs0KnsTgo8qUVf+xhfcloGo9iDizGD9Iw63OKnlnIZaurbRaVmKeJdRm6UWa7HJ1UUncSrO5NkOjyQvwU9PcYjmtiEwMEAmphz7B8KU+R7Cs25ysSYw+Ew2djU1EwRm5+vUFxByYz25cm4fcBNJmuAeGevs78u6ELwOWbSZYUNzV0fTqSj3M+EiZnQPkLPd+LoMuMrmPgV+8WOnunaV6q+t+Dt0EmCLnN66eRIKT07Nz7yWCpnBLhj4cpFwHorUtAvN7rylWSwRwQ9L5d+jEk1uAHy5//wy3NrZuQCInd8zOfJUEaiOcEncESP4QEe8swCyq1YoGetKv/4h3uSKAOyrd/4VtT0F3GFYD3hGJ7JhIc804N4aO80OATbnsa0DN2Ib6wU3fc3J+AfPCiJii2k2iTSWrs/hEcH7usik5LXYQilonHpj/F7qb8s+0mU/S1uspHD2LSTxJo/QTwE3t5UnpONd/q/eefJ0E6iLMqe4IkDSPiC3vYBgvvyZbrZHAHUn/1QSZNi8nqgRcp/SENfkbwv/+plofN/P700UU/cvPVlw/NWZS0jy5EBSlibzMR5MVbYBNQcpb+NCLl7D06Pz3LfwbkX5FMgO1HomwkqWvTZZTB1QbZI+YYDCMSLVEP1JTBQ+YbWPsRja4wQ9JpgfDQMZr9tjVXt4bcnLuvz8UEZUl+4whGY0UQ8lJaDaSFs3nJVMxjPkV3gjGROREYpavLasgfP+J29F8bQ6+uCkqg0N/9Uz/3zvMQvF4LAyn/QKMNepS6oA6WsBwlXu+Rrndqx/G+tACxIkvseK6E7dB+wtDj1dx1IyaYIVNYypBCptsUQN5LOuDWIf52lkYvvUEmyLiWFQx9PaydpOKIeXxg34zdLnswiAlw6ssbtvBLKCMx8Kx2i/kMQaTcgrl8cQd5GoPtQcHxp7hhHUm8QzCP9QXnnRTLN/rqqiLBZTxWzCM8At6jNGgxtjJSQ54YrwYPnB1w3u8/DuztoA8OZYZbc2cQQQ/N83clL2YLx2/BUMP8hhNZhmvxfMPTzCM0OplDoaPmJu8hJf91ft3UdZQZn9hUMoNDv153z9sPM0LdpLMwdeYWduo16VVIYHVvHgKo4sdIj8SCubXMwQQ1zrjxQVpo05smgB7h47Zy6D+iKH9EgU7CfmjMMysGJz/b6XruZN8cLIWgqVyZoCMkvvo90KzdKtJKiZSLLCrMVLmgL+/gFFMWl8u0BLtfHox/3t2hEjyIofuSfuL+RkdrAkjieUFSYsxGtVLNfZcfP589JHdmpYlAT75D+0Q+Tnzp38qjMi4My6AQimshbWoMUP1kZKZKXu8+JVSZXtj7OiKx0cCDpOSTbxFIJ4nYtDL6Wg+OVQLq1Rbwzj+ydz4mEDyTyfCJ8StPbxzjOiyhKQCMrYblky4DSSsWTX16DOcdfKg97akVMjFAmwJ3pTf1/4NGA8CKuS4uRB7A1MGzkXFf0n9X/k6Zf/bPLD/MeBwZbYk64gySWK+B4v5+MpAUi3IuKxCf6SYTAr+POpESesOhy781+FHR7V2zpxqOJiwOibpo2Mf9Mw/ka8t3DYm8x8byo0mwLm/EkmNpiYEthFHSMegrq0ydCXtQZV7USg7DJM95kqfayjNzW3FOujz1ZPTJLfXCyEcjgxEXo69Fd6lM7a5PJl9/Ravi+s3tbndU/osOVd7CEs8kOpU0xqJWV6Hmocu5z5mTed/SsiNkLdB4V3Bc1FcLxuZG9qEPEQtgxfoNWyB6Y82s/jT77AHNlLAZZKcPiri06zNjmzVolT5zwKOlrEPau2eTNPCy9Lk6oaCYlht2AqP3drT+m5aANCF9iqyApmpKvuzbw5yEQmxmIRIfbND7uHf5LL0zEDyvN/g+fweOS90esk0DFzyfdJIdI//pNSnfxt8cPJJVf8piXHZeOLhN0rK/XmZtsWtp9Mq4D+3yEzVmRkpehV2h+s7okpK2Ycvp4Onl5/Jl8r8Ops+2KI0NnZvGV7dffV0eWGC9Fl5hmVFbKPOSGSHT4ur66sFJQyM739YzKiigyl/79F5pYFpFgdpo3YYGyQWUGluVrq839aY6nr7xL2YgX1stUty+jDCbY0PhdkiZbqvSZiZUcdIdyp0eWU20leGUo1MbS2jpeQ2ODLERoeBWoldxJCk+05wYA56msDIFpwvFPO59tne/HqHbPSP6RC8e8NQT9exEyX5cdLpQnnmooR8lwHPVOTLZBV6m76+RWmMPai/JxKvUC5l0sXV9QFBKUMKhd5Le49Gk3k/uTVsmNAKiTfEzGCeA8KyzwwOMfolXvX/+5JMnkJ2O/0PCvWL+hanmCvwaPuoRggsO6rGqiJCp/X10UlxMVXaqVoEGo/Hfn//PtcdMPvrd7NmMJil1qXvgC+SwIcJyITWFeTtq8eroHsrqh7X+swikb2Am5Jd77MIkQs+kziMZrmRw81/TnV99BL3FR2cNpufgHQjbgB/M5oCfuGMJ1LuPR38IzHv9rOHZ4mfeKI7F3xaCVPkMfXSTWEwD7TSqCGGUVDvWS+A9+6gWgfjPY3Ej7PxmFrXboqOesGtz9BX2Rye3Pxsd87ifr0ummSB+XPjyiIPkEL+UlNUrSTU9Vk6yc03kGUpX/w2todfHh/HjUKcRSLrUOrMer3lzgXptgtJn4L/8JlDqQa6pCLNYciXCjkfbltZROV6pRlqB5dJIkYa9/KSKf8OJ71Gk5/iqevvkbHXu0fF9yyMMpYKeJrn85i8Nb2pL0ja+DJzgj1iKTFlmO1in149ywadPC2ZNLS/VQVun4Fo+HNQCDKBu1zamJ/HhZFHV39Ho33HZBZvffSJ1dlvnU+WybzKgY93+XFjY1h5NOpZGuUmjQ6FxlITnjtT4hyJLkQhuDLUDA81kzSSxq80zkHhf0VjDEhcLJyGo78TQGFgC+C9GW/ACD6n077go+N0C0AO2IqDc8CxhKFyb/ZIy1L0JmC7kywvNhTp8tS4hxcaVMSzVGIbHv/d5MaihF4e3GJHJGMKnST5qeHVuq3tt3M20gc3pAavWNdf3DBYku0cqVuKHABM0cRTTj7PIRDUXifPBhw87L3s4AtQx+aw8d1nMYnQ+0fmRLS3bXtwVor7EABmcfDZr2mhPQDtu3kY+n5DLGZuvrb6/WfSlabx+auY+OB36N3z//2m+1KX6r0zkrQJbN/VlKmcye4j30J6fFpBdzz2JzqRZfdn3u8/oJqXH50m7h+TjmE3AiU/sLJL6S1tE3UMNwZofoAlx6gHDxD3lvFo48mJP5ER2z/ufTY5mX6fs7NgQV+Xem9soea+rmYhMvXl41uxueVddYsKEYWIuobOqti8j0La3mIWO1BcHlf18k4EPOKXl3ElFQVsfwknW4B7rB5TIz6c/Z+4916dty6ZfPu3yt+SZc0/JFYmJkPD39B/LV5qUigUemBu2ryXNQlIh2uso925FeW8l+ZbPugRx7vFy4fSfV/jEZmGFXS6YRhhvqd0drRZePFWXnu70hltubx8uUcS55G0UY33j44yt6Bcz9dWt/+fxnnpaLHK9T85DUarmxTZdWloyI2mp+XcQzqdm9YNxxaU/jVN5ND3UkLyoauCKwmb5F+eNyXIsOgLntIiG+QA8oA/rGN4sKtjrT96BjkdQf99bnMT77Nz7Sr1pcM5OYdf9fkL4xk5b84oVJ/j787bKap/zt3oNFilUoNFRNTNk8kPdEQ9uipQnh3XBbRPJ6Im24DO5+u2//hnjBsQ3WZdao9jkDdbU/kemStQ5IJ2Au3NiWTD2eI+ZubfRf7hi8lW1VUgvoUNmVLZTik04tnAoHssHGjr2sG/fHOBsCqH+gt6CrsBWEmwEC73fbLN+q13icj9wZ8sidT+Hbtjx2yAFQrCiDbAEVuYtarX5vC5EzjEkzTqAAn5zfDx+mSje2vU8Bd7OhMI1PETa2NpG5PrDw6/jyQNUCvYT20GRZrDamPoEM92z58xwB1yP0lGJiWF50+E6/UkphNwevjDiGT/Y87DC4kjRNISPGb/yLK/EKKoxLpiUQfQoUmI6AS6K7iuWwObLFgK5o3o+23JRFEyoQqZca3+DxDjtG6g24M6zj9EfGt29gK9FmUn0DRt+YPEmqpELfOE+QXawgPCg4c0ttL7B+GP5D/bp6Z8U0eOjjR19Kjv6NSxY75ILzsRhdrov+FE5Kuvfd+9mt8ohD1ehSqVb360w5ykIMjbLpm+sF/v3KBI6N+TX+w/tZxsx5gQkaa8nFTar/u2nCJbcaawMcpN06TvpR2f2x4isJ/Nu8170/NzHRK23coWWAuYfjHbYWumh22xUK1k7WYrpbtc44eIJ7CicFNRaE9DboGRALNT8n1FRUnqKYyVJss19BSF5rJgNnJhFWAGzN2EjQzbdysrFiDtxhjQuC9OEyFH+8ZLOpb4EsO4scwJWVpGFv68CZ3mzGQyM51paNN5fFZG2oplGr0Td381NOm3CvJ/L6G0nUYp+TG/4GK65tcNxDn1muHjbz7x5VPsMIKxIPebntAiVi6MbKsqNAOV1EkMhfGx0KKebySSjMLE0oF5agt4npVKWlwz+W2SXtM+rNHjnOfRJg3ndJidWYf0JxoYgSk6neGjfTlTBtMEfT7AMCQGORoT3L6OaQ97dD2329Q3EDUs0vxfUuFttCmp6IhJxlek6bRmw9bGSg2xuX6t+3dXbREUCYvWfVKRp19XOLSve6jzu1UT51cs2rdmzZIC+aL6BqJu67Gtb64cfPLz5inrjg+vDhbuHy02DArldtBM2gHNQZLSc1jLjXwT8LuS/Ko6uxIA3xHmpWT6Gicyqhv3pxY2O4zm4kJhRzMvK22pMYv+N2cKhcO/SyKtJ6BVJ4fVoNJkyEgJmhFwQVzMS77oop2tcKRWjJePmnpZLpei2E550hfilTrZNJqex45dIW3bmEy8RqUtJ/Ld/HRtji7d3pLXABzWJqx1wK08KtMo5SE2125CEK5SqbuJTANPbcm16f977PRdXWhBiHQAsesi7eyF+zF/o6WBAmzc9YIu++Xj61NlxTuO5bcbgeykgZBI3HCULwYScSahJcQiHgDcEeVuykO1R0/x0AxsicpewzIY6DpiGn6ETNlCRB9sK3iIVtAY5LkX/1kvjWq6liNRZY16qHpUfR+Zf9gKF74swKDMRYaIM+teGYHGh+qkD8zCfYmnmhgphoTT9fWnFy2qpV4yxdiUcuJef9mBykot6fkVFUmuplgHa+j77OaAtr1VbR+M14L4ll9IgcASW7XaK6xEIrRVRa7a/pXD+eldzemWOvRQQp/N1udwaElLphiboo1fpE9vNhi0pOfrdMkNOhj8hU56bkqwiDe099egun5J/FkXkhh2oW6huq8/Zr4Q+UI6k7C3Ry9ZixK0vMLISNNJwjisIc5ooG7C9Z9fzyFRUVHaUSyNi3/z+hPgqTNnE/Dk+psWXBp2NEqLIlM4lYOjI4NKRIsigA5BBxQtwKA2AwLAonLQMYOFSWuL49A5UTBAT2T5AeqJQvRUSOBlyZ86DWVL3F1Zpk6hyNRLJdqeJ6+TaA+IxFsYjH1i0Rm68vC1fHw+4khf/s31ToHmE4Vf1TXO9Txq42d+U8FP75mra1iAoxUb0eLjXWwY8s/bhF/aPDHhAhHyW5olsrCxv80ZbV5m7OJ0IH7iFzA/nJuzzjFTd4FkAipkiIYG705x+bM3D67HWT97NGWLA2+j9r4qq2/u2bGIFb43l327p7m0dhaOjliMf87j/cHn/4/Hu8e/B6XSooikKBoVSlImGuAtA30/gPzn3yRm6gwcXMu0+zXIi5Ce/q3WxB3zoD2k9doFFlmDZrlZGjlW9yzO4gSIIaMiiTXYAKKsH+gnwRZv+YFAuD2uPT4lJHwafAP1uSHyYhbv2JoLRgef2BAVVd33/8Ikxhc0HE+CfZsUceIYLOl4Q0F8Iuav+91VFTbEk2A0mLt1PjFmT98i70uXNraXqv25lmp3vfQ3yT9wWMTiQ+P5Dbvh1AnqL2+vQ8u//ipOZzaIyJCnHcdNpC++itdZjELZW1osl7YIzSpgGdWpukzHQ6i628BUY/yIqTJLQ4s+ZYuEMY/YguSDf4oBLbs0flyjmHfmKLa55Iv4cN4j/rt/g2f6/WXu8YUDUsGko6BAAis2FQGg+coy+dbl5iuyOV+VCxl1fSnI2FbtiXLSgYyzevuyWaK2U34YycoC2MU6nyPggjYm01mlFSJpK0+EXZRZFAHHGBMaedY56YD2lKU1VmrPsljtECYYNfOMmtFGXbrPQsY240lb40lf40mF8eTfDJhoUz6LTzfznNNZZThp5VeKM3Z5w9AtpZmF5svSmy9CXfmSxOfLMz1jkG7GZowyIU5UxFUmkbdNIq+ZRM01Q8R+lisL4ixpVJoslpms5kLxow+dkXjI/IzYh7gwrCLxMS4xhXqWbSnNJjRflof5IjSYL0lJbBDkuFUat5tWPjOtfGhaWRmPES/NYKEAO5EVn+6Qs0+XH201uml61EwHss8aRFhwBGx3dXPQHDXHzHFzos2f09n4K9gdDg7NZn2qANfPbTOwy8aYc2rnw2OIvcuzteNmWjC0d1dJRy+gjuMJ21MUxEe25+qc1l5uSLVIN4TrSQP4SQi1W3+CdjufhJ0vJuxNRNtcQfx//VrwvQuwDpABuJEbTfgJUAfcaEQjI4KO8DlT4TRDqqcM2UBe5n3lhJpnXzXpdmz4yxAm6vFupbv8qh3FgXJ4DSV2DD9oc74D6k4wRvl5DcQmIY+PhTA+GGbl1jOGmTdeHkHceFvucM+f74JUT1hTfpTc/waOOP3EeUWT4PD11/ZvicHuJaCNuw9g3oK+XXvB7F7dEr7ZcWerOY6uM3oRe2V/9wzF+D1rL5jdKy2BYNbcSW+f6+2nap/n7afTIY887ugckxMgtZlfPaLOveuriOpm9+qW8GU1mV0XUWJ2D1mSzDUG9II+pVviY9tZCKYXEUF133Nz+EvpW9QkpJSjy0BlVPMuVzJKfM8ADWxuY5ClxUokaO5lTixPe8pvoBlh8nS+eKEhb/m7RDClJ5ZUboeKorrvGaqr5ouUoCkW6pnvGaCe1ZkZoytioR4BSnFyagVi5nM2JoAFSD8+GKPZFudkMp+vackhvGZLtPFiOp9Skn0MZntqE0Qz/3fv8uU0a7pzwRkDTQH6TjwqmcBp8wJN7vlLtQQwm7cegyljNe+S3ItsJjZOS00yugQsIagmzqsWErSTVtXs4jZtBs3mlJPZ0atU+TsbexHv4OYb5ZCBxPSGSOMrqJFUoOPNM4F3MTomQELNz+mF/EUHqbOw4T0jr4OBWu7N8rEliPvoYgAjLcrO5VlPdvcLD8/7FETuvkxsF4vm/G+0YNTmLL/Dhk79rPpQ5QrhTMEIVoAdvlNn0eKpZtAb56WrWtICS0uCh2uCRSRCEXWNDzuKjQBk5SCnrANjSlOWRynZRb8al6X77CczsCwEjQU5TEI1Gek1YdJs6MtJsz/5DyPCk/xMON1uU7YaGYhpphIhxFUixh3VelISvQLs8N1Xxxk744P9UX97s9Ouvzzenw+7bW1ZIbmSIbuYV1/S1QtSxoIi0MIQvYjoCqs7KkQhx/1vcmGv9f5x/3Bz0ju9bX/1sA9ivijdHuCJQkaMq/gGF9XjhmAabYNwR8Fq7jM57yv4MFVQSz0xHaQFOGCvFZfGcqbH46r8dd9W9+Z++vSnHQJ1unBEzPingLuuPDqeDWr4MZ/adnMD7evbbISBB662medA3uZNabBEzBejz+hffD4v7+Tb/5e8L769XwzGdhV+DNHCSMkp12kkMidu8Mh1yIODO7NBiK2KfTXQ8YesYyAm0UY0iIUNtlVFWr8FzY2nx/ubw05ycwov5iovJF+Vb++jwdjOcTmuHvx5RQM38SFBVity9RJulYcDBX90nMbVdgV4BBUjUEI2RKwYWlVbuz0e9uzNLFjSxVhONk8iJINjsVFA4VjRzZONeHgKPvy9i6ovVFVviCjfNuWDPP0ZT7dnFV28diPXk5/czoYMRaXrfrXOFmNaNaS0o6wT1ZsOgI/x8UdPjw835/1OUIYZspbNcZ3ysg+gt8L5jtKQssLI1KzGSU/QH5fc4RdBFCwGgKwojr1n1yrEvP64gO++7SaxfyHRToKYREAr90l2BKNFjjGIma8SvUWwMqpm3nuKGZK8ufipWB1tDRSEcHQA/ZUNCEPOvz61zL0fPjPug8G4LO/gW/zz/7no2qlIeOE3xxSQcoZUt7OkWKQk7mEVwEZGMaRWODP1FrenU1pJZozRuKLfGRUHKnqrPe1GOVUjqOVslXvqMEoVjqo/txdONatTaWV7uuxb68Ue9nzf1OEe3bw/hgEQrILrJMIcW/fCOCtds3LXeRyOe1JhmUuKLmfBQhFhDyEgqr4ss6eSRLWqSYpk3ViFznW4AvXoFkdC8ChTd851TvVEqXJdqQ1O02ga6TESQf05KJAr9Ul8C73JoJ0OWO/6m53G6/PDzUkKTdoULi7KdeuK6Cc6gg8piqqtUBMo5xTf14BVa1c7KBS/etibadt2tsDXpOZbOFaMSHFwELKdVG2rQ7VvaziUNwykbGLaD93ICK3tTeQiBR6FAyFqj1WD2G09O5ikzDX0kH/kXLTVlRku7OntbhCkd2iUQqAwykgEY+KQM0QUmN1ExKmCp9eLrEuhi2a/0qRbpcwWY40iWGnkYLNRaiSVgZgoZa4wXvGCuULsNOeGcOZGH6CQQFllS2JhqY1dT12GXUwlptQ+1oBSWC60lJ26st4qEnOuSExOV7KLt9ZcX4oK2aWeJoogHfwnZOW9tJVBnA7QKFIwTTeYu2UqJqUSbRersSHnaBXRzruHeIymf7cjcPQ94n7i+3RonBs+1XadZPj80irww68AaLlLqmvdOY8C1xOVk/bmXZp55yFlv3qPDddtQNsahdqdpewZyoZgG1WtrshPe8AWbcpOEbvMsfKmFUHUtymQgirVOCJQYoNVQzcEABlPDVXyoljjkQrxzs3BKz5CQcsZIh4iCGAYu+Kez01+nvXBi9l03tVzp+TWlTNwfj2/4ISjrly5ueLtxqexLP3LaGgxYCesJNE0kiNjRVCi0BfWzflFrHeYzc3MmESMi3vKNx+A79+UPnp4fX7CPe6YcuXGmOnYV98L6thLqwmXMueUXQYLhJSzGUh07X27PtcQQMXduc2ArMxssUKKhUqNYy/sCjOAl0eUkwpEEQ4K7QH36KAVwMJY41zfC6T2V9ZiGAYcQUUoZSOh2aGubTrqPlMLGUfuXAGQfqyYl5mNHZi1VRTW15VTodUqrAOWwEhK+ZCLJJKCs2CEjrcHnyumG0XSLUtdKNYzkfEKhRDIQyFqsh6/0nlL9qgzCchMpkmMEIIZQXR35FnkAlHs0Ey5j9FWVhGRVlnMYKVPvUDaHnFggr25mHSlgt+IKSb5B5Ex7RH5xpzKrBQyUEPsOc17nM9VRBpGNh9kfruQLlk46L3VPe0Cn33ojno78ITH+81NY8+thWTNbh1ZLm3p6IgZOWGEXtUo5Nx9y3lV1eeAPv3iTrKL29Z+T6FyhQHJqDus9j+71TBtb4cb3u0o8t/rxpM/sENmkhJZFhTQiyH4Xzpm9307UTKYzk8p9w05t64mJ/aEeGCq8bOs99xquyKGp2f0MFapagcnW1WI7e50WnSKjw/HfePUeplOHpV7K8AY1Z26fw0FJ/2ehgiEGBG1NkBiltvNlQwG9Auk+7trTx8cmIeoxUAeHmtaHS6k4GnEh5lCVEXBRKvYRPN+S6VfSjkV97FPBY6uC2cYTDH6uz2DoEX/6Q+1GNYf6Xby1X3uGbtCSt30NE0raR0mfZ/JZK5iCiZOLJy8/G35cqvVfHl6uD8dD5v51Kya62FcXivR0J5nEAXaxd7hk+rOQ0IiuW4FCygsUcxWcxB/sbBJeTZVLBIRXFX3mN1HjFvPV9jMwzA3uQ6XYVbpP8bYINAqCdVNChHhMNjCQSFIbxHhos3yCaSYRL9Qxc60q5U9qfbYHnbbVbOqrcY1cqaNtuji1TnLS5pheimunKKUcAmMEWpB68AdwTCBlCgtinzRXvahBezBhiQtDLSS7M1tx36i7UGsXQ2cIstWauMk4v17daRLBUpQ9Jqm4+4CKbuzniq6lA1iEKKII4lv+NxUEtNbJFtoj+4W52+LpuXGsjerecxm62iGiuZPCNNCKWptQAyWGP/qAHvslGT//b41HJdSJj0DaQinJJUJDjJRdCHgg/WDyasBzlDb5QMkC5bquvdVWwevVlDwaKM416F4cyem+lK7RMUPngwSew5HZcAr6IoKpemA89QnUvIxfCq7Xc+mAD7h0dgWiag0W/w03YEmH6QsSXV4hOM091kcwMG9FYyY1JoFgyA05wquyRxbYWcX0nfn8fwMu1nkz4bAOcrbk0bFWvHAjRhN3VhhGnypT4NSJvPHYF17MSJdbRed92DFuBuM2DIlVa6xas1zUiNQ7cOYkTVXoVvWG3XslrizGCucMySRMhWxOxMYQxD5WGy1jeryN2hKrsKzA8VKXbdCrB9fXc9Mu9RZEQ3eIxZSDm+luhWJBZtk08Ae4dltjKTBvq0ZmZeDrAOl2uNDSC/T9JWDtTtkKLJ7UKNp1SMyEUKrMHllVtlDMSvc/CkaZVOBMLDad8YxIW9NPZ5G4tGg2HZNvf/uqq2vtI3l1P9x7pelbiFJSEaDNgWq78PwlYFzqpFBUpmC0sfWoA7kKci9bF/iqBghpBGKwIQz+k0XUAXuz0HivDIq8uCGVOWvdn0t/M6D/dHOlt0ol4qFbCYdc4UbPUH9qOoQydqTCqUaDxFR6d52zKAazMfEUMl2LaD5PgyeIk9cOuV5ynibHT67gscr0+6QjRt81WFpN7FXry7PppPjgz3qwWdNJGMb66E38FuCeVDpsEthA/X2kLZDe6oMjCXfqHb3agFSbeqAyckaxaAr1LxrJJLyZhKHigaG/9S5IVUVAaB6+cn46MFo0NvptGrVSrmQzxFKgKC3W5GS7YfGC60RWolMZURIsi8ilqWeSMFhQuAYOmHhKC1oDSAZunazUa+U33AhZeYiEeWpoF1D0g6Qhmkk2aSiCwjpIkJ2I9AuLlU6f7mYTyUTcf0Nez2GPPnVoN+kMYn/Iw0koISYk/3YtS6gMwTSSFMFSVIhit3dV5Es++vWnQ4AR53h7ja0IdwKF3TX0GYsqJ2mzo23KE2f3T54BNcX2N4hUshs9g9AHRTryX3RWZfxzQAuoU3dSNMKwN/Tt5BppinfDHYPZPRA1m/wzzjWU5/YsdNTgOLZ6d315fTpowkcw9HB3rC39UFrFC4WMpIKYxY8uerrCWV5riOr6BUypXXTFrhlHxfMbjPs88Qum0scQpcpQeCfeA0qAktaU7AiHNYUIj4CN6pKDA3dQV1wIY5cHivmmcMHo1vzp4/v3sxuLs9Pn4yPD/b3Rv3ebrfTbjaqlXIum0kmpIa51Y/PlVczRYo+G1CaQSPQvKDe2wc+ATyA7GQOTb0GnamgrIwy7yUYQHgKY0jKJg1AcUng6JU9FuV1ywXRKSApoYEPEBbczyiWon9WUJbGqynjHYpxg39msHaeTOwkBa9fPb+7OHs4Ptjri2241ajX/p+Fl1+E8WgkHFjxWoYmCXBD3bgFc8P2fXl7QrPWO8SxHy/ThugFMgCyqQ5C9DHO6DZ4nxXpNp21NFWJ5jj2icet0c4rWyEijynWbY7KAk3791enCgxRX7duyFVLBGS82frvcd7XNy9fPD8/xcJjZ280HOzubE8vUSmXssYDVi2C1zlNHxMTpO3YzVsBH3MVJIrCEzUZK1pN+mTJCoyNsFAdbHzscH44GPR7u1ubXR3afuvSS4FfWHxkbn0mqXKho2mMa8MUk6mqRx9QgZEiW9bbbENtl5Tat8bSVjUQqbgjuEz6SWEM24Nc0Hx5uDvsmsqIgRLIxWEkYZO/vUV7Td/LfB2jXB0PEmm7aKuXfkadcj1Q9MLNb7Y7rcyBEmHqEf2JooCemlt5KWlyt794FxerUTne9OuzNS0cm1jwPN2S+VjZ1XXxAviZz++Hg/7O9htXbazzU2d68RQF7yWGFx9hP/IBVTv73utcYky1LDA1hxMiOAkmoSjfmb8PJ+PRoLfdbtnNl+cniRT036b6i8Q6TwyWSWi5QbzFIIeoBrUwQp8BHPFCBr7EqvcB9y/tL9yesUFbNlrb4bwoXRgUoHi5nl34S7uKRbOiFS/J13+9PFjGMrUcEXcrDwxLan+7UcTeCrpKsabQM8ubMSRcIFEn1kSOzbP5YPWVq6FqLariKshhT+0XO1TSgcKbfTVoBCrpjrqOUzfB+J7FxfP6gU7MSEfNy9bMt5mrsIfqSQfqJOo+e4vGiYpJmS+2SQ2EjQorcwE9z9z5Lwj4pgUxIWh4vQYBWWaLzZ6yuo0VRPa0VdCQckTBGQvKNgQSlxY96WDYGcvoQzz8CQn6D2oDFqLyEnBihSBwZSyhv373H+9/jbc6gsCnArH1aJlUKh3qy6zEd0lYBrBTCFHKsFVylEUMxCbWeYYIUgrfpBgINRIiZYuowxAUjID/ORTLbVn7om6zW1npXZHNPFglh0l5J9VyWZ2rU9bUvykLMzXGOw/rugsq4OElRrTEY5jrWeXCdtp7mLf/dp4HXfzUdul8OdkY5BSAlD5cKAqBykDWPmeNVVW6A//VdkOGhl1oU2JCihYLTGyXpZ8mPG3hf4tu5kuPu/Wo2xHAobSilnLnIlttF9S0IiHbEgI/wwsP+PGrrXyXoTd43DpLdZ4I8Jd1JxmOqq1ADxDTQ6nTLSeAR/cetg4JC+qbNonNpF6bZ5iLXVatKOjSCjHa/4rGbA/MLtaeHY4pmrtv3UtStj9D4PMNW33fmqGuS319CQgt3Nra0DQ5Z6v0OOCg5R5ziYovP5pqk49taMBhnF3s8mJpYYRen7lVe/UzCuKu8kOcwpKxmI6P4hF7orV15kteulnjIZkKcSxcJ3CQ9yQ/gNbrzWBgUMoqoeyA4A0DNdG1w0hbOszYI8YjgEJR3payr6fmMqCnJ9/ATunQzlGmIRAW4TpNIMA3XAvWQSjne7RvD0FxUn6Fo8UKEX5/VDbe7E3kmzweGwKgQzU1Y4C3tAYrezg6MEliDmaf6EQ1BsWlXomFxyd0Hk/pnG2jAyZZdB63FbNcH6q2MYmeZdrgBsbrv7zH54ZP745uW929ZN6LPkXzT44F+HO31KX/JbKVTg+B9Hx+iP+67fCvznf45B2LUk2TMSIeED9j4XvwPyd+AWeMMELoyCbQom75rjQRgLgW+SIGB0t4GYgApmMjINgke3o5cJ1LwZbg8zZ1QiYXN1/k4uM9wmWP7N2KMzVzDscfRQcf4bKMHg7QjkyofhbqNcBB4cosK+JmvZfxoffaQF2pdbYQjCoUYfr6T7+Tbm9SEDyOAh8gHhbs1WR+3Wtus0lBWRw7XiRkcyhT6323vjvbm+X7zdb0KWTDu0DWlo9NobzZVpK2TlQVkeIfB0FA4lc/IYFiFufQ9/Cf3mwiw8Gv+r9f42GfIG0Y00B4A0P+KKDjnPy187m3bQymKwsWhCo/GLPsANUd1Yl5zZaB50z4AcRQpJlyVENHBdkj3NsNApBfWZkwwfd9zuh1Eivgjaku5eYEoHdnZZFB4AtvfkN1kGUCJPtk11TSKPb7zVt+T34Rv+FcKSHN8jxjU2e/yPzn68qsSdtvvDwr+hfL+MqDnsjKLXcWSASYny+P2ZYIdo0Mj0+0uZYjKXLrkGNnigIqowA+nmWPdeBcEcm3qpxeM41CTzxdT5roVpOCQbS0kqLrsU7spKgIvbWH+Dn1snKbOgL5ePzfrjDejE9fb9X90RxJOf/m1XZj2cv62XfK+vNvPm+nTXYxWiyREMNx5KZucj1SvKl9g9PGdYOdNDrZGEYu366XUGiaXWa071fLgjrugzqdr87mpvPImWwONvuVx/u7mxM/5lxIrkShPw0fTL1j2U6k4KPFYGOfCRtOmjFimSqm64zU5ES4JsRjOLQ/v2lsTk7Hg4e72026dO6sZiFr+bw4/B09L79TNV0I238GbUPMIafw7uzrtm5tj8g2tokxE2p6E3xNY9r8Cp1Qt0zXpDzVcwbb8vY4tF2bILbL0YDNrPZ87syOqJn+/HR3YxUrIgttt4nbnlHUzcFtT6hv7vrEO8KmaJtJAdcRifRi37z9qtR1sxrO2TQ7N1V0fMXz0+N+t20qZ41W7F5bygoeGYPsMHrw4zAtftOY6ArSLUi2GXDfYmX6qf+10QkSFjC/zUYON4qAd695aTdZkQ7bmRcKeMTQHOKBrQK3tg8KsyCNwvl+0phWnCLdEoigdbaI/gqrNmdI5Xu0869UtgYDT017r1dP7fSwbb2wM20KSAl5oMJLAG0EPFJ6agrQHOkc4eJ9LvvmIxbs/Iu0RYLUYQ0U6AmGjNfUc/+QVBJFzh3VosNdLTLz5OClVOeiDnCc0qFplkvOfT+6b077rVp30AXPeBpL/+SOx4lYbIF4LV1XWrW6ztJQBNNtDi4niy8F4MN4npxnDZ5wzhls05/EIUMTa/SrlrRL7a4jSbdo17rsSja0BuH+MYtkzyrlwm66NXR717k3fTxlFheRuIY4Sh/Yq1FTCWMBPtW8qTuqKsuj4ZDoUW40xFUNEVqLnL9LafXaCWVlapVNnYk1g5ckJFwiC4gcMglC/BFR4Q/zSPCIC25c3z7hymmPnCJRmmq5IKh4uLvOPHRzOd83KcagCufOxSNVhVr/a9a6jBMDAd2UyO6u4wNVm1ykqUuzyh90Nh6bU0664+FSSaSNjZ9L9etkdJqnKj8+0YSUyfahujs5gDJT8mkEGKMNCHLFPDRUFfqSBMjZO87J204U1PfCcuF1ozlSWYpqiX16ElcMJK6ortx+NARfvqzRw1Gd2HOvr8DrN/Wvu224i2drbCWFtdMZenta/0a2usdG37/fcT/ta2uSW3lzP376096EolLVf8GYit3zjSKKWLG1Ccgh5tfk6i4ge1Zco+x1Fc8BAsATtoX1Gau1jNXfkCmNfyKYg3X3Ksz/fPnw7sWzp4+juTPWubbOnq96kCRFFgUdnpEhjgRnjJWzsYoAW8DUHNw9i/ZOzRaPaqsXSSj4bNcEx3XvO1uNvFaN2Fdfo0EEP+eqclCn2x0G2GGjHPd89tzVt3nYuL897Jyt+mYXvTrs0wSxf/ROy6T8e8BP4wQraqIOhQS35AMeUUJM/fSdtfM44/UXy5/bjaeH06F294njCth2uce1fqiQJl+Iz3tXa6+Slltk8hCfLAUbS5IkxGseJqxyrAYSPGUfiDBNNjSJ2RYNf5vx/k5/923gHOz1dhrPx31T64KNdbV30cPgW5gifvxGg0sx6B7n975k8SR34L2hXn4fUrHLXiv3M6/8F5LmN6ZUSTSLDrc3D/dNWSzDtzhufK68AxymHPmX8dGDrW7tefOZYfgxVOIii9BgLKkumflXpxTUsL5xn1KIYOe/5PXQ9FlRSzpAepxQclCNt4c+bBKcYcXykrYN5A294mvh/RMDZBnnN0a25K5hP8VJWZXCu5q2WupHSCYt4k7pyxsuVET7vuCeIzARgSQHKLEMTzArLYBERaGYo1me1ClTtGIfEJmBE+v3AR9hE8hxjbAUerno82GVNMuuf3PRpvC41VIzc4sX7WQvdnPKiUm5BKnPT2nxkwOKWvd7oN0F3Ji9f7aFytEx48tRTszbMoEH9bCdG/O4XJ1i4UZDBNxliOcj1SgOC5LTAgRk9XIf47pfZUcC/mOziCeAP8aT4v0bPv1h7f/aEZAfNzMhLBggYLM2FMBOLNv20VLIJSczdRewO/99/Gr1zdCWa8S863qKnuS4bVpsUHzj7BpJgZO1uy5ifBke7L4Pe/c8Qz+n4aZmnrbbcRbTl1nr2PTiV2+ZcEQPfJ0wxbWaicKHv7mj+XQ1kx4gc3dePWJ1na2HEFU/X3flsO0Qz2NHgwXhh3cdi84bym/2ZlLVhzpfqLYpBeS1R1Z/Jlm0jKl37pFwvrCSCGI/T8nXmMlgH/J8JF8zgi2jh8uL6pfFpaFuNnmjkRVDlUuM00fTBWQpGH3zCLZj5sd8XrL5WmOcYunfbXvlBquW5B3fRrJuAt3t7iw017Y2d28+ar8UPoce+9feOOLQSNta+odWcp8mA2w7hXPGsSsP7POERcXYOceyblzyH6O6caw9i5zCxIxF8pkllnGacBLOKNOYJxQvo5lmBoN4SyyklqX3kYDtu56n6VlOfcM5QnCPCNyiEBA7gSuIexjaGPDOD5b5zCKG6kgPxeYej9awSwOGN1sliM0XSJNAsjFM+mZV7gkYCD3Jd41LtIA2l3Yb4+c55ZxLcbf5OVw/prHZK1VM71KTRg4uwEiiC99u+YdpuYAGce84Vl3MuluZNIiyo4TnJY+OoAsNV47IyDRvOFVXT6dPFFvXWOdV7NxtQu3wlTAOxSbvv521iclq4bwmsu8t1o2gXI0cuoLXxltIfCj8lBaAe0rCN+nUjaSWcUSwvQ8mDIw9GC/gW5o4tZusvVPYJPNy7LgnCvgWuiMq0OKRwxe+zaIMI75vwPbZ9r/t/SPe+mx/zbipg0BWzMTSioS505kFfNhXi4SAvcoQUCsHIHNg740wUfbG2NH1JgQlvjfJITN7U8JyuDfNLp9euJBnLYWr12CEJpXKVWjBcOfKjc+26ReUJslqFNquTGHZprC6Pr5Zw30YWdmkXpVSxVwuVGu6CvVpm7Xa5XAtGo7z50It5SojAz8polFcaS0Xxcy21XalyreW8qzepZCDc57bnhPGMG7HSI2QS5q02ZLMRqpX5xiJ0Fp566Y4L5uCJtaFqd9pCTeaGmZdaUWebDSGtrWj5MyyjLVuSIgzq6OVwlZl8itT7ZArbIOtL60UH5K2JVw+3uxLa2hddJSbFfeLa9CiVFNIuYam1bbcq0gSKR5W6N4pzVZyn1lWQAowgtL//lNkj2J7zaeiVsLWU3ZKdel2jj0HjpxCvNTR7M40XELGarmM+0se/f5ylyywz34eXr6Uy/wDLqtw5TEUZ38uMBSizbbVu7JKnVrrRURJEuWZaIQu1sZHVLRxZa/mBKfXZlhY0Bo2JIQDiZLChWQphks1IjnUSBuMcUCaV4+0+MbNkCXbWONNMM5vcvwu1wt/+iO8F895jyARdDgZcSSRRhZ5DGIYoxjHxBprycgZPGIjM2X/ZY9pzGIei1jGKkyso4hNlFFFHdvYxT4OcYxTnKOJS1zjFvd4xDNe8fa3Dz76RELEgqVdSJsobHTaNAI0qWA8fHkKBAkhjo+DDglzxlmHHXHUMTvs9K92FG5842eyf7Dib4qlhF574ziGNSuLFNqMHW0CEpigBCckoQlLOBsc0001y0yzTZLvidDoEpHIRCU6MYlNXOKTkMQkJdkcd1wzV7gbbruelKQmLenJSGaykp3lmeDR0WBA7fbw4PLVe2337OLD+6tpL/H81cXz0aCr7DXI+cT+oC/MkI7OYZ+a3XEfXs5SmWwRP5fQNdtwt/Wrcfp6es2wfzorbM95/Tzx+KlUfKzFFrdb3InP3Hw7pD3p7HJ29YE15QYsW9+5q/uKLt65eQlMeGNO8JitI/yrl1cnAu8/cbj4LFpywYRX1FKQ4Owj/ZbvZp/lF/IiG/kJu8gm+HLWMVEFj7kKQE4AABCQKwKAEAAAIHQCAATkDQAB2fXRVLtcX5dxZnVIvPvw+l3nMgIgrwmQigAAAUAIBFvdUkjBy6Qx/PT3Bnf21tFPYrkxkS4XRZy97U7Z9ZYEeJYuJe0qw/N1dXFdBXhFLyf77GNO9vW/yGTytzv1W2VTJX9RCKr1Y75yIZ4AUSiuTPkiWsL72fPLsisXyBQhms0T6fBuYD3Kkpwm8lVwkV4spdjyKP0RirKVwQOMYWfqhJebty05CsT9gq6D2QcQmvvgfnR/d62vHwDWxudb3mC5AQfskNdytXsd99psDPaQ7Iazhe967NrWfOdIvI3vVeDhoO4jcT5IFICQAwLNVdB9DqLpd2bvt6ePWVQihNP+5MdDrdG8SM9uy0/819wJBe4676pqtEPyHb5CP+Ujcs7HWJL9lSnZBd1mAAA="

/***/ }),

/***/ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff":
/*!******************************************************************************************!*\
  !*** ./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2":
/*!*******************************************************************************************!*\
  !*** ./docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/arrow-down-28-@4x.png":
/*!**********************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/arrow-down-28-@4x.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAA8E3wEAAAAU0lEQVR4AbzNoRGAUAzA0A5HsVRBN0HC5nDV0fm5i36RR99Z17firc4nJqAiNgHVMaI+RtTHiDqYgBITUWIOCkxEiYkoMRElpqHA7Pbqd/5Hjl4ATrmEWr+4ok8AAAAASUVORK5CYII="

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/arrow-up-28-@4x.png":
/*!********************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/arrow-up-28-@4x.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAA8E3wEAAAAS0lEQVR4AWIgB7gFRDS4BoZ1kKqPfMsCwv+DMaC2ORYAAAAAGORvPYDdJdBSmT312VOfPfXZU5CB9BlMn8H0GUyfwfQZTGW2FGdLA2vvhX61k2VgAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png":
/*!***************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png":
/*!***************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png":
/*!***************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAfCAIAAADIsxJ3AAAI5klEQVR4AW2Xh3LrupJFdweQlGXfPDmnP5n//47JM+f5mCTQaUSF8pXr0atQLcflDaABKf7lX8EMFoge6MG9ZoEIaZNlnn98++HPfv6Lv/7tH/7yl3/85e2vX/Rn1OKjhU9VM1Ojogwf+9g/xvbR94+t73/o9q3Hf+/xX/tlzP/r+d1rC7LiABcoqtLDbfi++b76usXes/calm7wUFT9jjzIBF0Bgagi09333t/Xb//z/u9NW5X3+ZvinD67LRknyqmC3LJv3j9i7OnDMlAljLnxC2gIaoIGLcU3vyh4lruPLkNq0F2jMi9QRnHpsxwjE5zIABOKkASKMop97O/ru6oQZeS6n35e5I3zNe01/bX8lEOto68YG2IQkpiUeGkcyjUTh0zJZ2iHGtjBlhiRffi+79skpFyMw+P4iMoEIPj570AEAohB9MT9IbrWVciqyLKqnrkfY3gGEFqu2cV3se0yarpSqZBMqk10vjBNp2k+n06vLy8X3l5Or6f5vEynWeZGqiVUQFZlZsUhV1VACX66+AF8c+LP8RPg5nehKgpeMBwEEwnNjc5aZ80XslPZXD5TTUpt0naYNZ21LdP0sizn0/L6sryeL+N0PrXTieeGpsWchciMiPDI8LwrQlGJIlQBz9TvisrKhHsMrq2nSAinMISn1n4k8ZmYc7rIlHAycYIISmisEzfV1trU5tFOBzLv3CaIRFV3FxmR+xi6NZmUlUkEd/J5f+AC7iPhXlM9sitkpLnvA02pKTc5zfK+yPfileTEAiJGIQ4/ytBSJojy1JTmJvMk10jBLYvNSgsyTJRZiJmI6gAHIFzQz5xuD9VjTr9QoJtiRgS69W3wpN8meZnoLNRaDoulO++OPgiYIhaiRUWnAjGJsDZpKqoC4STioNt+QKAuOCIOMlCJPNC72Wdgz3JfFyKKCnVVHE67va8yNVKQqf2v+bw6fwzuvaFO3t7Ab6KnYwEWigucxLfWlZURHmHpI+2GlRvcyx0Hh6s+yX3RYnqAA8KjOCwzw8y33f5PUcWr2Nl93kO3nEYslW+JweI6DfVJU1qiVUoZ0lBmYWNY3y9436PvOXpdsAEzmMONzPUeGOhrVPyp+BUhEBUqIvowbPDAyrFUzEaTySnkDUgv6pnqXXwmUzZhAzQCO7DbxaqPfbNt8wv7nvtWvWMMMrtyBKn4KoeH3COzw5IvPGXJj4n26HuFYVBuyLl4qRZIgbUsGQiKHTbVmGg0GgzJlqOwmu1779s+9v1SxbblvqN3uvm5UwRl6NfYbiN+P8t4BPn8PwBVdWtUiYrK4EgmkrZQOZFl7oZEDcpJYp6iNRe2jDLUZr5127uNbtaHj5F93MJjd46k+/4gfpZ7jJ9BPps9OvVn04nDEhFMlVqYiFSZAYpMRIqn8AFVFHkl5SBsXrujx4Uyz/CoCERQJGdRJVdWln6V+9wuBHwqPvgUBHB/eSgmeXKl5qG3sJyETqIzo01Tm5c2zSqNSAJsxR00gI7oJaPYDm3KQuGxwpmSDvTxZ+h3Zl/mlyGPgnBQuP8UgZg4i4EjuKo56Vz0RvSj6g8TLZNOc5Nl4WWBNiPJ4oQ48SAaFB2H3zj8EPdfx6wioZkokH7O5udTuD1MEDlQBfHn6fyYdGJiIYG0qhlYAmepM9Ob6E+T/vTSXo7gJp5aShssVOzFgBQ4UJY0orrnBYusKhCgwq1JUZIUy9UPXy8sILrLqWBqEAXzY8b59nlS4UlF5DBrchp2cjqjTkKzyKTtNE3nZZ6v1xOHENiLpIiLqagS7mHDRh8XfFi5UxaDIELtlqTok9mtINw9mKGKdqGBGACKQARVTErLxKepTW0hOnucuy77mNyJy0G9qJOcWEsaszBYiK+3BTGQRrF59R7bZutq1/5XfZCZRFDdliKBoE+7FXiK86YocnDL77aA2yFH50VeT9NpWpjP5i/rrgxstUfAcYGcUJzghQUkRKyiE4kXJg/dB617fay5HsS2575TH2HBkUhk5AV9Wnn0vHkfl6ujoMeKZEFTXPxeT/zTq7wsTUj7YKY0t25hsXr2UW7IoCpJyERCzEysQDvkunys8v1Dvq+ybrx36gN9RO8YTh6IzKzK1KdjF/isCsiCByxAjgKEAQYBQpgUpwnnBa+nYgrh0S1UOmhEIdA14TU5lsAUxACjqhIRZUYfK71/yB8+2sc+byOHk/nw8GHRR5pXRB2Kz/k99ZcqxIWA+aPPMUSBvDdF4RIOlUFgol7wrJ5lkZQorZdRY5SPdLgxMcMJljH2bu/f89s7v69t3ZfuZMlZFIXIMnez9EPxll9d+dT6bMCZiATF/TiGHnUyIm4xxDDbxwbYNmi36G4jylIKaQELGo4umWlSSWnI7r6t28e37/3be3z/4LW34eWZ17w8Dsid7n6hTxf6u9zj5W2KM+EJvooSEAx39F4fWwqPYVngbeB9zXXkMPaQIolUCzXnwQnqmYbYK/YxtnX9WL9f2NfV9h5maVYeuBA38lGEgvD13QbwcC5kfSoSDgxg1Aqg0qymKYtoBD722vpRRIHBKEFSZSBGISo7fE/f4voO2fbV+m67WY/h4dc+6O4RmVEHWRG4rz/CQ+7rFB9EgRIIoFCJDNR9frHtpRORIAoj4ElErLeurjWJNxpapXDOUblndFyh3Ck2ilHuaX44mqfb433bbagq/XrwV920Prcw8upWKEIQBDCGDOxarUGnkgZRQEiVWoMwVPKkdm79rOtMKpkoizJKowpGKmXjaGyNhh+OXhH1kEOB7goK/mwtT2YHdZAJXOUSoAv1eTTrhCmxEJaG04RlqbkdyV3/ts+0T6UcWllZEenIQCYXlGgSnoVM4JyGIAQqqOqhcyv06VZA1zEBLmSBrnLMR110U36061ujBiCYClPDj2/4+Qe8vWBpJSgKh1n1Hj0NiIzKyIMsgEmUpalMyoNJmRhFd4/63e1JkQkQiIGHU32RS9Cn3JVbhIUStAIxlvmQ+4tf6TK+NCDL9+rrdccaWaHy5nboVQIgIhZWvSDO7ESEP9KJ/x+7zro0yNimiQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png":
/*!***************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/dot-empty-32-@4x.png":
/*!*********************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/dot-empty-32-@4x.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABuUlEQVR4AZ3BzUpUcRwA0N/KUZhKXU20E6ZdQo8QUj1BpX28SUFtCsRNKqamRm1alNAyspY1zkSS9QZJC8dlIzjXxYk/l0hpknvnnOjFaVOeamnLZNpalk06FUU4b9W+XvatqMdJDJlxKNfV8Nqsx15pyOQy0wajN3Xf5d6adCaOMGzSO7mGs/EvF7UlX1yK/zBhS7JjPI5T15asGogTqHgm2VGLvwz5LrkXBbgraajEH2Yka1GQNcmDyDnvEFsGoiAVW/ilFolVyUSUYEKyEBFO28e7KMkGOqphSnIzSjIluRGeIjMcJRmRYSm00Iw+aGIz7GE9+uA1dkMXc9EHszgIXcxHH8zjIOxhPfpgHbuhiWb0QQuNsIzMSJRkRIbFMCm5FSW5LbkWTtnHRpTkPTqqEWFFcjlKcEWyHIm6DF8NRkEGbaNrLHKmJS+iIM8lj+IPgxqS+1GA+5KPKvGXmh+Sl4biBCqeSX46F8cZtyPZdjX+w1XfJD9ciH+pach9cMdoHGHUHR/kPqlFbyoe6Mgd+uyNOXPeaDmU63qoEidRs6Cjl44lY1GEqhsWbdrV1bVr0xPXVaOH31ukNYn11WWcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/dot-full-32-@4x.png":
/*!********************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/dot-full-32-@4x.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABDElEQVR4AaXBvWrCYACG0XdTIboVUroJcavgxbTq5bi0IM7W34vpYiR0KPQOlA6JYyOYODxFREQMIfm+c5SFBn3mBESkpEQEzOhRVxG0WLIny54FnvJQY8SRPClDqsqGxw9F+DzqHh0iitrS1i08IsrY4uqKKt+U9UVNF4wwMdAZLY6Y+MPVCUtMjSXRYI+pmLroY6Mr5tiYigAbvthhIxQJNg4iwcZB7LARigAbvphhYyJ62HgRDjGmYhxJLDA10wkeKSYSmjpjiIl3XVDFp6wVFV3hsqGMX550izZbitrwrHs88EkRK1xlo8KAmDwJb1SUB5cxMVlipjRVBA5dJqwJSUgIWfPBK44y/AMi7HQu60eyUQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png":
/*!*************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png":
/*!*****************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAQAAADbnPi/AAAC9klEQVR42u2azUtUURiHHWkMhKCPsYWNIVGTRrSZyYiIFiPZshDJovVki3QjTGObdk0bhVaNf0Heyha2yaEssE0WBBGGgbRxE1QYZOR8PG4mG8dzZ+7HuV9wfvt53t+9c+573vOet6lJSUlJSUlJSckB0UzIs9ghmq387D5JT+yeYdzSy+IckCfhqtnjaGD5RTELlNGIuWK2kxwl4Ll1RJwyACU0Oh01e4AcBQDKnLIDmuKf/pKjzRGze8iythnnoT3YEdb5r19k2SXVbCtpflRFKNJlF5ljq76RZqcUs2FSrNTQH9jHtvObWn0lZSlTVmfaAZa2cdeIyngTWUT6yIBlYi/vhMy7ctbZbr4j1hvOmqb18EKH9pO9sj6NDPrKc8IwpwutkihFuiXzW16pY7lIr8GFUKxDWaFVZvoZqmvYUH5mX2VrEOu63OS+g0XdUC8NU+Z0GUuEZe9Hg7rBbhpmDOsyLjtRo4pTUZmDhhlRnU/ug72srheuTxjsrSnGgpBx3qmaSpRBM6YIYwLCa+eKwJOCv9RUsUJMYPi0k3XrdFWgT9zhmGnCIUaYr3rwJ86eCo5SoMQ8aQ7b4nSQYoZ1iuYf2WyoJBFprIg3x1wlpYbJb4JnPGZU3mp3zmwLk1Upa5V+vxuerNkUCr7OA8KdcNG7pmJjw+PC0ibhX8MzQsNX/Wv4kdDwJf8aHhUW+FH/Gm5jdZthzd9prb/mZLzMfr9n4iSfNxeD5nu7leNqnGtcpF2VKUo+/aiCdEQK3CGUpzXH/LjtY/60k3Z7bDdSul1tpAhbVWOmCLddbFVxQViLLZhiiDugfc7sX+8D1W7lim4zetgwY0SXMSjbbpgvusHmDFNe6TKWaZFr+IaES5lI3UuZIZl2g3btJeyby79YzMiyG7SrW+65djmelWHXzfGDP3TI75Y5O+CRswuNbUlFbozQdNsDaq4PKU3ZQSUCNgZG3pNBu1mrgGCNMhLycFh0wkITPIDjuEpKSkpKSkpKDbUBHeR766SGDegAAAAASUVORK5CYII="

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/header-nav-open-88-@4x.png":
/*!***************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/header-nav-open-88-@4x.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/linked-in-icon-80-@4x.png":
/*!**************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/linked-in-icon-80-@4x.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/me-xnc-q90.jpg":
/*!***************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/me-xnc-q90.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png":
/*!*********************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/spinner.gif":
/*!************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/spinner.gif ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./docs/assets/images/convert-to-data-uri/teen-fairy-img-q90-640-4x.jpg":
/*!******************************************************************************!*\
  !*** ./docs/assets/images/convert-to-data-uri/teen-fairy-img-q90-640-4x.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./app/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./app/index.js */"./app/index.js");


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.e59e61b2e4e7b32018b2.js.map