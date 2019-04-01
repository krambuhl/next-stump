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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = {
  slug: 'pm-falling-sun',
  title: 'Precision Machines\' Falling Sun',
  year: 2016,
  company: 'Stumptown Bear',
  companyHref: 'http://stumptownbear.com',
  projectHref: 'http://pmisdead.com/fallingsun/',
}


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(11),
  projectImages: [
    {
      alt: 'Falling Sun album cover',
      image: __webpack_require__(63)
    },
    {
      alt: 'Falling Sun website',
      image: __webpack_require__(64)
    }
  ]
}


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/cover-720-e042a5302b9891fbf07bd90560c2b128.jpg"+" 720w"+","+"/static/portfolio/cover-800-22b831b626a1955c266f2f9604b77171.jpg"+" 800w",images:[{path:"/static/portfolio/cover-720-e042a5302b9891fbf07bd90560c2b128.jpg",width:720,height:720},{path:"/static/portfolio/cover-800-22b831b626a1955c266f2f9604b77171.jpg",width:800,height:800}],src:"/static/portfolio/cover-720-e042a5302b9891fbf07bd90560c2b128.jpg",toString:function(){return "/static/portfolio/cover-720-e042a5302b9891fbf07bd90560c2b128.jpg"},placeholder: undefined,width:720,height:720};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/website-720-081f949a8fc20291bb0bdba132987106.jpg"+" 720w"+","+"/static/portfolio/website-1440-9412ecc20fe942971efedb9fa86e9c6c.jpg"+" 1440w",images:[{path:"/static/portfolio/website-720-081f949a8fc20291bb0bdba132987106.jpg",width:720,height:810},{path:"/static/portfolio/website-1440-9412ecc20fe942971efedb9fa86e9c6c.jpg",width:1440,height:1620}],src:"/static/portfolio/website-720-081f949a8fc20291bb0bdba132987106.jpg",toString:function(){return "/static/portfolio/website-720-081f949a8fc20291bb0bdba132987106.jpg"},placeholder: undefined,width:720,height:810};

/***/ })

/******/ })));