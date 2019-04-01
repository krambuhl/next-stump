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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  slug: 'iounoi',
  title: 'IOUNOI',
  year: 2014,
  company: 'Stumptown Bear',
  companyHref: 'http://stumptownbear.com',
  projectHref: 'http://iounoi.com'
}


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(10),
  projectImages: [
    {
      alt: 'IOUNOI Logo',
      image: __webpack_require__(51)
    },
    {
      alt: 'Nourish and Destroy Website',
      image: __webpack_require__(52)
    }
  ]
}


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/logo-720-f1a85f4080743c7a87bb9ae5d2510c7d.jpg"+" 720w"+","+"/static/portfolio/logo-1424-d8d1b50bf5534eccaf493a347d094e33.jpg"+" 1424w",images:[{path:"/static/portfolio/logo-720-f1a85f4080743c7a87bb9ae5d2510c7d.jpg",width:720,height:397},{path:"/static/portfolio/logo-1424-d8d1b50bf5534eccaf493a347d094e33.jpg",width:1424,height:786}],src:"/static/portfolio/logo-720-f1a85f4080743c7a87bb9ae5d2510c7d.jpg",toString:function(){return "/static/portfolio/logo-720-f1a85f4080743c7a87bb9ae5d2510c7d.jpg"},placeholder: undefined,width:720,height:397};

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/nad-720-1f861b4fe1c9c28a9db76100f212356d.jpg"+" 720w"+","+"/static/portfolio/nad-1440-f3ab9ce7113706eb4af68fab9f170865.jpg"+" 1440w",images:[{path:"/static/portfolio/nad-720-1f861b4fe1c9c28a9db76100f212356d.jpg",width:720,height:390},{path:"/static/portfolio/nad-1440-f3ab9ce7113706eb4af68fab9f170865.jpg",width:1440,height:780}],src:"/static/portfolio/nad-720-1f861b4fe1c9c28a9db76100f212356d.jpg",toString:function(){return "/static/portfolio/nad-720-1f861b4fe1c9c28a9db76100f212356d.jpg"},placeholder: undefined,width:720,height:390};

/***/ })

/******/ })));