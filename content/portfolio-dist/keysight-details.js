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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(6),
  projectImages: [
    {
      alt: 'Product bundle page',
      image: __webpack_require__(59)
    },
    {
      alt: 'Product family page',
      image: __webpack_require__(60)
    },
    {
      alt: 'Product family overview page',
      image: __webpack_require__(61)
    }
  ]
}


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/bundle-720-dbe3ba6097d3d0a58f8122fab65d3af3.jpg"+" 720w"+","+"/static/portfolio/bundle-1440-1a0cc377a00a6ebda3db66adef7390d2.jpg"+" 1440w",images:[{path:"/static/portfolio/bundle-720-dbe3ba6097d3d0a58f8122fab65d3af3.jpg",width:720,height:1287},{path:"/static/portfolio/bundle-1440-1a0cc377a00a6ebda3db66adef7390d2.jpg",width:1440,height:2574}],src:"/static/portfolio/bundle-720-dbe3ba6097d3d0a58f8122fab65d3af3.jpg",toString:function(){return "/static/portfolio/bundle-720-dbe3ba6097d3d0a58f8122fab65d3af3.jpg"},placeholder: undefined,width:720,height:1287};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  slug: 'keysight',
  title: 'Keysight Technologies',
  year: 2016,
  company: 'ConnectiveDX',
  companyHref: 'https://www.connectivedx.com/',
  projectHref: 'https://www.keysight.com/us/en/software/application-sw.html',
}


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/family-720-cbd08dbf1f42096f5ede9dbe8bcb0108.jpg"+" 720w"+","+"/static/portfolio/family-1440-feb5fcc47ec62f0365e937071fa46d87.jpg"+" 1440w",images:[{path:"/static/portfolio/family-720-cbd08dbf1f42096f5ede9dbe8bcb0108.jpg",width:720,height:2080},{path:"/static/portfolio/family-1440-feb5fcc47ec62f0365e937071fa46d87.jpg",width:1440,height:4160}],src:"/static/portfolio/family-720-cbd08dbf1f42096f5ede9dbe8bcb0108.jpg",toString:function(){return "/static/portfolio/family-720-cbd08dbf1f42096f5ede9dbe8bcb0108.jpg"},placeholder: undefined,width:720,height:2080};

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/overview-720-f8d689a093753aa0a47565ac16e32a5a.jpg"+" 720w"+","+"/static/portfolio/overview-1440-8fc32a10ad6cb39e37bc42b7f99f00aa.jpg"+" 1440w",images:[{path:"/static/portfolio/overview-720-f8d689a093753aa0a47565ac16e32a5a.jpg",width:720,height:1486},{path:"/static/portfolio/overview-1440-8fc32a10ad6cb39e37bc42b7f99f00aa.jpg",width:1440,height:2972}],src:"/static/portfolio/overview-720-f8d689a093753aa0a47565ac16e32a5a.jpg",toString:function(){return "/static/portfolio/overview-720-f8d689a093753aa0a47565ac16e32a5a.jpg"},placeholder: undefined,width:720,height:1486};

/***/ })

/******/ })));