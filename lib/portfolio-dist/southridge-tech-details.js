(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/southridge-tech/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/southridge-tech/details.js":
/*!**************************************************!*\
  !*** ./lib/portfolio/southridge-tech/details.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/southridge-tech/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Southridge Tech Dashboard',\n      image: __webpack_require__(/*! ./southridge-tech-1.png?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/southridge-tech/southridge-tech-1.png?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n\n      alt: 'Southridge Tech Mentions',\n      image: __webpack_require__(/*! ./southridge-tech-2.png?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/southridge-tech/southridge-tech-2.png?&sizes[]=720&sizes[]=1440\")\n    },\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/details.js?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/meta.js":
/*!***********************************************!*\
  !*** ./lib/portfolio/southridge-tech/meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'southridge-tech',\n  title: 'Southridge Tech Data Visualization',\n  year: 2012,\n  company: 'Webtrends',\n  companyHref: 'https://www.webtrends.com/',\n  projectHref: undefined,\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/meta.js?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/southridge-tech-1.png?&sizes[]=720&sizes[]=1440":
/*!***************************************************************************************!*\
  !*** ./lib/portfolio/southridge-tech/southridge-tech-1.png?&sizes[]=720&sizes[]=1440 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/southridge-tech-1-720-a89f10fbbc93efb7ac61403a8b08fcd4.png\"+\" 720w\"+\",\"+\"/static/portfolio/southridge-tech-1-1440-42c305615034b1c65d374fea4fe1fd2a.png\"+\" 1440w\",images:[{path:\"/static/portfolio/southridge-tech-1-720-a89f10fbbc93efb7ac61403a8b08fcd4.png\",width:720,height:400},{path:\"/static/portfolio/southridge-tech-1-1440-42c305615034b1c65d374fea4fe1fd2a.png\",width:1440,height:800}],src:\"/static/portfolio/southridge-tech-1-720-a89f10fbbc93efb7ac61403a8b08fcd4.png\",toString:function(){return \"/static/portfolio/southridge-tech-1-720-a89f10fbbc93efb7ac61403a8b08fcd4.png\"},placeholder: \"data:image/png;base64,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\",width:720,height:400};\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/southridge-tech-1.png?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/southridge-tech-2.png?&sizes[]=720&sizes[]=1440":
/*!***************************************************************************************!*\
  !*** ./lib/portfolio/southridge-tech/southridge-tech-2.png?&sizes[]=720&sizes[]=1440 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/southridge-tech-2-720-7ba9f47ffd80aec15d7c674cbb8b5e15.png\"+\" 720w\"+\",\"+\"/static/portfolio/southridge-tech-2-1440-18bdc5545dd8f47c88b2ed6aca456cc0.png\"+\" 1440w\",images:[{path:\"/static/portfolio/southridge-tech-2-720-7ba9f47ffd80aec15d7c674cbb8b5e15.png\",width:720,height:386},{path:\"/static/portfolio/southridge-tech-2-1440-18bdc5545dd8f47c88b2ed6aca456cc0.png\",width:1440,height:772}],src:\"/static/portfolio/southridge-tech-2-720-7ba9f47ffd80aec15d7c674cbb8b5e15.png\",toString:function(){return \"/static/portfolio/southridge-tech-2-720-7ba9f47ffd80aec15d7c674cbb8b5e15.png\"},placeholder: \"data:image/png;base64,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\",width:720,height:386};\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/southridge-tech-2.png?");

/***/ })

/******/ })));