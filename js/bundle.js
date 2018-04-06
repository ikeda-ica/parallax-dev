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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n\nvar init = function init() {\n  var innerList = [];\n  for (var i = 0; i < document.querySelectorAll('.para.fix .para_in').length; i++) {\n    var height = document.querySelectorAll('.para.fix .para_in')[i].clientHeight;\n    innerList.push(height);\n  }\n  var innerTotal = innerList.reduce(function (a, b) {\n    return a + b;\n  });\n\n  document.getElementById('para_wrap').style.height = innerTotal + 'px';\n  scrollEv();\n};\n\nvar scrollEv = function scrollEv() {\n  var scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n  var dom = void 0;\n\n  document.getElementById('scrY') ? dom = document.getElementById('scrY') : dom = document.createElement('div');\n  dom.id = 'scrY';\n  dom.innerHTML = '<p>' + scrollY + '</p>';\n  dom.setAttribute('style', 'position: fixed; top: 0; left: 10px; color: #ddd; z-index: 999');\n  document.body.appendChild(dom);\n\n  var palaBG = document.querySelectorAll('.para.fix');\n  for (var i = 0; i < palaBG.length; i++) {\n    var data_top = document.querySelectorAll('.para.fix')[i].dataset.parallaxTop,\n        data_bottom = document.querySelectorAll('.para.fix')[i].dataset.parallaxBottom;\n\n    if (data_top > scrollY) {\n      document.querySelectorAll('.para.fix')[i].style.top = data_top - scrollY + 'px';\n      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(0%);');\n    } else if (data_top < scrollY && data_bottom > scrollY) {\n      var per = (data_top - scrollY) / (data_top - data_bottom) * 100;\n      document.querySelectorAll('.para.fix')[i].style.top = 0;\n      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(' + -per + '%);');\n    } else if (data_bottom < scrollY) {\n      document.querySelectorAll('.para.fix')[i].style.top = data_top + 'px';\n      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(-100%);');\n    }\n  }\n};\n\nwindow.addEventListener('scroll', scrollEv);\n\nwindow.addEventListener('resize', init);\nwindow.addEventListener('load', init);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?");

/***/ })

/******/ });