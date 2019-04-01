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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(71),
  projectImages: [
    {
      alt: 'Southridge Tech Dashboard',
      image: __webpack_require__(72)
    },
    {

      alt: 'Southridge Tech Mentions',
      image: __webpack_require__(73)
    },
  ]
}


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  slug: 'southridge-tech',
  title: 'Southridge Tech Data Visualization',
  year: 2012,
  company: 'Webtrends',
  companyHref: 'https://www.webtrends.com/',
  projectHref: undefined,
}


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/southridge-tech-1-720-37fd1f9a40a5337399b908d5a626e534.jpg"+" 720w"+","+"/static/portfolio/southridge-tech-1-1440-8586eab2c74fdd833fb3282257e9dd83.jpg"+" 1440w",images:[{path:"/static/portfolio/southridge-tech-1-720-37fd1f9a40a5337399b908d5a626e534.jpg",width:720,height:382},{path:"/static/portfolio/southridge-tech-1-1440-8586eab2c74fdd833fb3282257e9dd83.jpg",width:1440,height:764}],src:"/static/portfolio/southridge-tech-1-720-37fd1f9a40a5337399b908d5a626e534.jpg",toString:function(){return "/static/portfolio/southridge-tech-1-720-37fd1f9a40a5337399b908d5a626e534.jpg"},placeholder: undefined,width:720,height:382};

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg"+" 720w"+","+"/static/portfolio/southridge-tech-2-1440-bbcaa0ebd87d71e1fe89b39edba9117f.jpg"+" 1440w",images:[{path:"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg",width:720,height:386},{path:"/static/portfolio/southridge-tech-2-1440-bbcaa0ebd87d71e1fe89b39edba9117f.jpg",width:1440,height:772}],src:"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg",toString:function(){return "/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg"},placeholder: undefined,width:720,height:386};

/***/ })

/******/ })));