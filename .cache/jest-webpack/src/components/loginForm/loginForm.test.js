module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/loginForm/loginForm.test.js":
/*!****************************************************!*\
  !*** ./src/components/loginForm/loginForm.test.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"undefined?c726\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginForm */ 1);\n/* harmony import */ var _loginForm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loginForm__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_test_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-test-renderer */ \"undefined?c68b\");\n/* harmony import */ var react_test_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_test_renderer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enzyme */ \"undefined?1d75\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! enzyme-adapter-react-16 */ \"undefined?adaf\");\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/button */ 2);\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_button__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nObject(enzyme__WEBPACK_IMPORTED_MODULE_3__[\"configure\"])({\n  adapter: new enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_4___default.a()\n});\ndescribe('test form', function () {\n  it('test if it render correctly', function () {\n    var tree = react_test_renderer__WEBPACK_IMPORTED_MODULE_2___default.a.create(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loginForm__WEBPACK_IMPORTED_MODULE_1___default.a, null)).toJSON();\n    expect(tree).toMatchSnapshot();\n  });\n  it('test if callback is executed when user click cancel button', function () {\n    var login = jest.fn();\n    var onCancel = jest.fn();\n    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_3__[\"mount\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loginForm__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      login: login,\n      onCancel: onCancel\n    }));\n    wrapper.find('.btn').get(0).props.onClick();\n    expect(login).toHaveBeenCalled();\n    wrapper.find('.btn').get(1).props.onClick();\n    expect(onCancel).toHaveBeenCalled();\n  });\n});\n\n//# sourceURL=webpack:///./src/components/loginForm/loginForm.test.js?");

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** entry reference ./src/components/loginForm/loginForm.test.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  \"b7781a1cbaad5d0b9e72e2e09d251b860b2e4271\": function() {return __webpack_require__('./src/components/loginForm/loginForm.test.js');}\n};\nmodule.exports[\"b7781a1cbaad5d0b9e72e2e09d251b860b2e4271\"]();\n\n\n//# sourceURL=webpack:///entry_reference_./src/components/loginForm/loginForm.test.js?");

/***/ }),

/***/ 1:
/*!**************************************************************************************************!*\
  !*** reference ./src/components/loginForm/loginForm.js.208a1698c2296787335e1c9a3105ece8bcce081f ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("module.exports = require(\"./loginForm.js\")[\"208a1698c2296787335e1c9a3105ece8bcce081f\"]();\n\n//# sourceURL=webpack:///reference_./src/components/loginForm/loginForm.js.208a1698c2296787335e1c9a3105ece8bcce081f?");

/***/ }),

/***/ 2:
/*!********************************************************************************************!*\
  !*** reference ./src/components/button/button.js.71fa5fa35087dfd56773c0a7242c3c1885eb4cb6 ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("module.exports = require(\"./../button/button.js\")[\"71fa5fa35087dfd56773c0a7242c3c1885eb4cb6\"]();\n\n//# sourceURL=webpack:///reference_./src/components/button/button.js.71fa5fa35087dfd56773c0a7242c3c1885eb4cb6?");

/***/ }),

/***/ "undefined?1d75":
/*!********************************************************************!*\
  !*** external "../../../../../node_modules/enzyme/build/index.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"../../../../../node_modules/enzyme/build/index.js\");\n\n//# sourceURL=webpack:///external_%22../../../../../node_modules/enzyme/build/index.js%22?");

/***/ }),

/***/ "undefined?adaf":
/*!*************************************************************************************!*\
  !*** external "../../../../../node_modules/enzyme-adapter-react-16/build/index.js" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"../../../../../node_modules/enzyme-adapter-react-16/build/index.js\");\n\n//# sourceURL=webpack:///external_%22../../../../../node_modules/enzyme-adapter-react-16/build/index.js%22?");

/***/ }),

/***/ "undefined?c68b":
/*!***************************************************************************!*\
  !*** external "../../../../../node_modules/react-test-renderer/index.js" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"../../../../../node_modules/react-test-renderer/index.js\");\n\n//# sourceURL=webpack:///external_%22../../../../../node_modules/react-test-renderer/index.js%22?");

/***/ }),

/***/ "undefined?c726":
/*!*************************************************************!*\
  !*** external "../../../../../node_modules/react/index.js" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"../../../../../node_modules/react/index.js\");\n\n//# sourceURL=webpack:///external_%22../../../../../node_modules/react/index.js%22?");

/***/ })

/******/ });