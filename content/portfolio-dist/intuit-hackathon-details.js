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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  slug: 'intuit-hackathon',
  title: 'Intuit Hackathon',
  year: 2019,
  company: 'Turn',
  companyHref: 'https://turnwith.us/',
  projectHref: 'https://www.smallbizhack.com/'
}


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(1),
  projectImages: [
    {
      alt: 'Landing Page',
      image: __webpack_require__(46)
    },
    {
      alt: 'Location Information',
      image: __webpack_require__(47)
    },
    {
      alt: 'Location Getting Started',
      image: __webpack_require__(48)
    },
    {
      alt: 'Location Wrapup',
      image: __webpack_require__(49)
    }
  ]
}


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/landing-720-f4f8eb434bd3db31ad99def43d85e4c0.jpg"+" 720w"+","+"/static/portfolio/landing-1440-49cf855bbc7c8cb414ece762fc4c1580.jpg"+" 1440w",images:[{path:"/static/portfolio/landing-720-f4f8eb434bd3db31ad99def43d85e4c0.jpg",width:720,height:626},{path:"/static/portfolio/landing-1440-49cf855bbc7c8cb414ece762fc4c1580.jpg",width:1440,height:1252}],src:"/static/portfolio/landing-720-f4f8eb434bd3db31ad99def43d85e4c0.jpg",toString:function(){return "/static/portfolio/landing-720-f4f8eb434bd3db31ad99def43d85e4c0.jpg"},placeholder: undefined,width:720,height:626};

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/location-720-889e0d202ec64048b7cffbc0e56d4054.jpg"+" 720w"+","+"/static/portfolio/location-1440-992afb7a7d81fa3d45b4468dc2209ebf.jpg"+" 1440w",images:[{path:"/static/portfolio/location-720-889e0d202ec64048b7cffbc0e56d4054.jpg",width:720,height:3470},{path:"/static/portfolio/location-1440-992afb7a7d81fa3d45b4468dc2209ebf.jpg",width:1440,height:6939}],src:"/static/portfolio/location-720-889e0d202ec64048b7cffbc0e56d4054.jpg",toString:function(){return "/static/portfolio/location-720-889e0d202ec64048b7cffbc0e56d4054.jpg"},placeholder: undefined,width:720,height:3470};

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/getting-started-720-2ea1c36acf3375b85b450bb2403d1036.jpg"+" 720w"+","+"/static/portfolio/getting-started-1440-afa3fc1a594930c2e68c9b01407f5d98.jpg"+" 1440w",images:[{path:"/static/portfolio/getting-started-720-2ea1c36acf3375b85b450bb2403d1036.jpg",width:720,height:1131},{path:"/static/portfolio/getting-started-1440-afa3fc1a594930c2e68c9b01407f5d98.jpg",width:1440,height:2262}],src:"/static/portfolio/getting-started-720-2ea1c36acf3375b85b450bb2403d1036.jpg",toString:function(){return "/static/portfolio/getting-started-720-2ea1c36acf3375b85b450bb2403d1036.jpg"},placeholder: undefined,width:720,height:1131};

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/wrapup-720-e822e44245cffb85c4439f9c7d82387d.jpg"+" 720w"+","+"/static/portfolio/wrapup-1440-31a6e9606df2f861860938ee2bbc49d7.jpg"+" 1440w",images:[{path:"/static/portfolio/wrapup-720-e822e44245cffb85c4439f9c7d82387d.jpg",width:720,height:381},{path:"/static/portfolio/wrapup-1440-31a6e9606df2f861860938ee2bbc49d7.jpg",width:1440,height:763}],src:"/static/portfolio/wrapup-720-e822e44245cffb85c4439f9c7d82387d.jpg",toString:function(){return "/static/portfolio/wrapup-720-e822e44245cffb85c4439f9c7d82387d.jpg"},placeholder: undefined,width:720,height:381};

/***/ })

/******/ })));