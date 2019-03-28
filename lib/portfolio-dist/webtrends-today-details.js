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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  slug: 'webtrends-today',
  title: 'Webtrends Today App',
  year: 2012,
  company: 'Webtrends',
  companyHref: 'https://www.webtrends.com/',
  projectHref: undefined,
}


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(9),
  projectImages: [
    {
      alt: 'Overview dashboard',
      image: __webpack_require__(92)
    },
    {
      alt: 'Webtrends dashboard',
      image: __webpack_require__(93)
    },
    {
      alt: 'Facebook dashboard',
      image: __webpack_require__(94)
    },
    {
      alt: 'Twitter dashboard',
      image: __webpack_require__(95)
    },
    {
      alt: 'Youtube dashboard',
      image: __webpack_require__(96)
    },
  ]
}


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg"+" 637w",images:[{path:"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg",width:637,height:478}],src:"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg",toString:function(){return "/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg"},placeholder: undefined,width:637,height:478};

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg"+" 637w",images:[{path:"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg",width:637,height:478}],src:"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg",toString:function(){return "/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg"},placeholder: undefined,width:637,height:478};

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg"+" 637w",images:[{path:"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg",width:637,height:478}],src:"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg",toString:function(){return "/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg"},placeholder: undefined,width:637,height:478};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg"+" 637w",images:[{path:"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg",width:637,height:478}],src:"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg",toString:function(){return "/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg"},placeholder: undefined,width:637,height:478};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg"+" 637w",images:[{path:"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg",width:637,height:478}],src:"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg",toString:function(){return "/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg"},placeholder: undefined,width:637,height:478};

/***/ })

/******/ })));