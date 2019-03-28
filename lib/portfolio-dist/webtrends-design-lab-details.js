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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

module.exports = {
  slug: 'webtrends-design-lab',
  title: 'Webtrends Design Lab',
  year: 2012,
  company: 'Webtrends',
  companyHref: 'https://www.webtrends.com/',
  projectHref: undefined,
}


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(8),
  projectImages: [
    {
      alt: 'Telegraph.co.uk streams demo',
      image: __webpack_require__(87)
    },
    {
      alt: 'Motorcycle USA streams demo',
      image: __webpack_require__(88)
    },
    {
      alt: 'MSN dashboard',
      image: __webpack_require__(89)
    },
    {
      alt: 'Red Bull dashboard',
      image: __webpack_require__(90)
    }
  ]
}


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg"+" 720w"+","+"/static/portfolio/stream-telegraph-730-ecfb070a4933b17e4d3767862a558aed.jpg"+" 730w",images:[{path:"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg",width:720,height:404},{path:"/static/portfolio/stream-telegraph-730-ecfb070a4933b17e4d3767862a558aed.jpg",width:730,height:410}],src:"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg",toString:function(){return "/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg"},placeholder: undefined,width:720,height:404};

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg"+" 720w"+","+"/static/portfolio/stream-musa-768-34e4a031b8a0f64afbc76df9ec7ec582.jpg"+" 768w",images:[{path:"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg",width:720,height:405},{path:"/static/portfolio/stream-musa-768-34e4a031b8a0f64afbc76df9ec7ec582.jpg",width:768,height:432}],src:"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg",toString:function(){return "/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg"},placeholder: undefined,width:720,height:405};

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg"+" 720w"+","+"/static/portfolio/msn-730-3ae9a83ec53c37884c9fa4a63e2ad94b.jpg"+" 730w",images:[{path:"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg",width:720,height:404},{path:"/static/portfolio/msn-730-3ae9a83ec53c37884c9fa4a63e2ad94b.jpg",width:730,height:410}],src:"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg",toString:function(){return "/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg"},placeholder: undefined,width:720,height:404};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg"+" 720w"+","+"/static/portfolio/redbull-730-7c4f726cc107335342a0254901a07cc9.jpg"+" 730w",images:[{path:"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg",width:720,height:404},{path:"/static/portfolio/redbull-730-7c4f726cc107335342a0254901a07cc9.jpg",width:730,height:410}],src:"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg",toString:function(){return "/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg"},placeholder: undefined,width:720,height:404};

/***/ })

/******/ })));