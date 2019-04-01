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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

module.exports = {
  slug: 'ca-portfolio',
  title: 'CA Portfolio Application',
  year: 2014,
  company: 'John McNeil Studio',
  companyHref: 'http://www.johnmcneilstudio.com/',
  projectHref: null
}


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(2),
  projectImages: [
    {
      alt: 'Application landing page',
      image: __webpack_require__(38)
    },
    {
      alt: 'DevOps landing page',
      image: __webpack_require__(39)
    },
    {
      alt: 'Portfolio sales book',
      image: __webpack_require__(40)
    }
  ]
}


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/home-720-3574a0dafa3f129f4c513968e0d7491c.jpg"+" 720w"+","+"/static/portfolio/home-1423-251f3d67bbd9a5ea183e504863f7108f.jpg"+" 1423w",images:[{path:"/static/portfolio/home-720-3574a0dafa3f129f4c513968e0d7491c.jpg",width:720,height:398},{path:"/static/portfolio/home-1423-251f3d67bbd9a5ea183e504863f7108f.jpg",width:1423,height:786}],src:"/static/portfolio/home-720-3574a0dafa3f129f4c513968e0d7491c.jpg",toString:function(){return "/static/portfolio/home-720-3574a0dafa3f129f4c513968e0d7491c.jpg"},placeholder: undefined,width:720,height:398};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/devops-720-b0122836ef83e8b8393d20d0990055aa.jpg"+" 720w"+","+"/static/portfolio/devops-1440-39b61f691d7aaaa92552ee5e800a4549.jpg"+" 1440w",images:[{path:"/static/portfolio/devops-720-b0122836ef83e8b8393d20d0990055aa.jpg",width:720,height:401},{path:"/static/portfolio/devops-1440-39b61f691d7aaaa92552ee5e800a4549.jpg",width:1440,height:801}],src:"/static/portfolio/devops-720-b0122836ef83e8b8393d20d0990055aa.jpg",toString:function(){return "/static/portfolio/devops-720-b0122836ef83e8b8393d20d0990055aa.jpg"},placeholder: undefined,width:720,height:401};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/book-720-1c431a4c3a63f4742f6f232ea82df6fb.jpg"+" 720w"+","+"/static/portfolio/book-1440-4d7845b4189d0d7efa581e0a00485bc3.jpg"+" 1440w",images:[{path:"/static/portfolio/book-720-1c431a4c3a63f4742f6f232ea82df6fb.jpg",width:720,height:450},{path:"/static/portfolio/book-1440-4d7845b4189d0d7efa581e0a00485bc3.jpg",width:1440,height:900}],src:"/static/portfolio/book-720-1c431a4c3a63f4742f6f232ea82df6fb.jpg",toString:function(){return "/static/portfolio/book-720-1c431a4c3a63f4742f6f232ea82df6fb.jpg"},placeholder: undefined,width:720,height:450};

/***/ })

/******/ })));