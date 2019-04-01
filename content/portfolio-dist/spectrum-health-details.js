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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  slug: 'spectrum-health',
  title: 'Spectrum Health',
  year: 2016,
  company: 'ConnectiveDX',
  companyHref: 'https://www.connectivedx.com/',
  projectHref: 'http://www.spectrumhealth.org/',
}


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(5),
  projectImages: [
    {
      alt: 'Homepage',
      image: __webpack_require__(75)
    },
    {
      alt: 'Search application',
      image: __webpack_require__(76)
    },
    {
      alt: 'Events page',
      image: __webpack_require__(77)
    }
  ]
}


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg"+" 720w"+","+"/static/portfolio/home-1440-c021c8361a5b95ef0a56304086f6dd28.jpg"+" 1440w",images:[{path:"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg",width:720,height:2439},{path:"/static/portfolio/home-1440-c021c8361a5b95ef0a56304086f6dd28.jpg",width:1440,height:4878}],src:"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg",toString:function(){return "/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg"},placeholder: undefined,width:720,height:2439};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg"+" 720w"+","+"/static/portfolio/search-1440-d061243d24aa35d4dc5caea55b7916ed.jpg"+" 1440w",images:[{path:"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg",width:720,height:1097},{path:"/static/portfolio/search-1440-d061243d24aa35d4dc5caea55b7916ed.jpg",width:1440,height:2194}],src:"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg",toString:function(){return "/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg"},placeholder: undefined,width:720,height:1097};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg"+" 720w"+","+"/static/portfolio/events-1440-aad8f179c294baa1379fdcafbc21b2d4.jpg"+" 1440w",images:[{path:"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg",width:720,height:1789},{path:"/static/portfolio/events-1440-aad8f179c294baa1379fdcafbc21b2d4.jpg",width:1440,height:3578}],src:"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg",toString:function(){return "/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg"},placeholder: undefined,width:720,height:1789};

/***/ })

/******/ })));