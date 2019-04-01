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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(66),
  projectImages: [
    {
      alt: 'Landing section',
      image: __webpack_require__(67)
    },
    {
      alt: 'CEO user story section',
      image: __webpack_require__(68)
    },
    {
      alt: 'IT user story section',
      image: __webpack_require__(69)
    }
  ]
}


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  slug: 'polycom',
  title: 'Polycom Defy Distance',
  year: 2014,
  company: 'John McNeil Studio',
  companyHref: 'http://www.johnmcneilstudio.com/',
  projectHref: null
}


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/defy-distance-1-720-620e4771881fd12f8a8aef70fa8ddc57.jpg"+" 720w"+","+"/static/portfolio/defy-distance-1-768-102deea731afa11f54086a121b0dd3b8.jpg"+" 768w",images:[{path:"/static/portfolio/defy-distance-1-720-620e4771881fd12f8a8aef70fa8ddc57.jpg",width:720,height:369},{path:"/static/portfolio/defy-distance-1-768-102deea731afa11f54086a121b0dd3b8.jpg",width:768,height:394}],src:"/static/portfolio/defy-distance-1-720-620e4771881fd12f8a8aef70fa8ddc57.jpg",toString:function(){return "/static/portfolio/defy-distance-1-720-620e4771881fd12f8a8aef70fa8ddc57.jpg"},placeholder: undefined,width:720,height:369};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/defy-distance-2-720-bdad7a21ef4b895f99d903773accf954.jpg"+" 720w"+","+"/static/portfolio/defy-distance-2-768-db27836ba16488c5b12b2490adf4a7ff.jpg"+" 768w",images:[{path:"/static/portfolio/defy-distance-2-720-bdad7a21ef4b895f99d903773accf954.jpg",width:720,height:600},{path:"/static/portfolio/defy-distance-2-768-db27836ba16488c5b12b2490adf4a7ff.jpg",width:768,height:640}],src:"/static/portfolio/defy-distance-2-720-bdad7a21ef4b895f99d903773accf954.jpg",toString:function(){return "/static/portfolio/defy-distance-2-720-bdad7a21ef4b895f99d903773accf954.jpg"},placeholder: undefined,width:720,height:600};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/defy-distance-3-720-4234e78f7907c7d7abf58027a9c99dee.jpg"+" 720w"+","+"/static/portfolio/defy-distance-3-768-2c156616d52df3a47062dfcbc6936633.jpg"+" 768w",images:[{path:"/static/portfolio/defy-distance-3-720-4234e78f7907c7d7abf58027a9c99dee.jpg",width:720,height:506},{path:"/static/portfolio/defy-distance-3-768-2c156616d52df3a47062dfcbc6936633.jpg",width:768,height:540}],src:"/static/portfolio/defy-distance-3-720-4234e78f7907c7d7abf58027a9c99dee.jpg",toString:function(){return "/static/portfolio/defy-distance-3-720-4234e78f7907c7d7abf58027a9c99dee.jpg"},placeholder: undefined,width:720,height:506};

/***/ })

/******/ })));