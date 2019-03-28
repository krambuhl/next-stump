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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

module.exports = {
  slug: 'juniper-deception-force',
  title: 'Juniper Deception Force',
  year: 2014,
  company: 'John McNeil Studio',
  companyHref: 'http://www.johnmcneilstudio.com/',
  projectHref: null
}


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(4),
  projectImages: [
    {
      alt: 'Landing page',
      image: __webpack_require__(60)
    },
    {
      alt: 'Create an id mini app',
      image: __webpack_require__(61)
    }
  ]
}


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/website-720-dff2bb1bdcab55ba92c2ed291381a8b1.jpg"+" 720w"+","+"/static/portfolio/website-1425-442a0f1c5bb9a72dfee5066f0105a0ef.jpg"+" 1425w",images:[{path:"/static/portfolio/website-720-dff2bb1bdcab55ba92c2ed291381a8b1.jpg",width:720,height:1572},{path:"/static/portfolio/website-1425-442a0f1c5bb9a72dfee5066f0105a0ef.jpg",width:1425,height:3111}],src:"/static/portfolio/website-720-dff2bb1bdcab55ba92c2ed291381a8b1.jpg",toString:function(){return "/static/portfolio/website-720-dff2bb1bdcab55ba92c2ed291381a8b1.jpg"},placeholder: undefined,width:720,height:1572};

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/id-photo-720-396ed2157b13f679e63642b6079e4002.jpg"+" 720w"+","+"/static/portfolio/id-photo-768-74a408da3ccd5ec67bc1dd9b3494f890.jpg"+" 768w",images:[{path:"/static/portfolio/id-photo-720-396ed2157b13f679e63642b6079e4002.jpg",width:720,height:454},{path:"/static/portfolio/id-photo-768-74a408da3ccd5ec67bc1dd9b3494f890.jpg",width:768,height:484}],src:"/static/portfolio/id-photo-720-396ed2157b13f679e63642b6079e4002.jpg",toString:function(){return "/static/portfolio/id-photo-720-396ed2157b13f679e63642b6079e4002.jpg"},placeholder: undefined,width:720,height:454};

/***/ })

/******/ })));