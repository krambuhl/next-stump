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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(7),
  projectImages: [
    {
      alt: 'IL7 Logo',
      image: __webpack_require__(42)
    },
    {
      alt: 'Remix the things',
      image: __webpack_require__(43)
    },
    {
      alt: 'Design Lab status board',
      image: __webpack_require__(44)
    }
  ]
}


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/il7-720-5252f58ddfe484806f599a0981ed702a.jpg"+" 720w"+","+"/static/portfolio/il7-800-3c1c4ba996c9d828fc5824d68765ea83.jpg"+" 800w",images:[{path:"/static/portfolio/il7-720-5252f58ddfe484806f599a0981ed702a.jpg",width:720,height:720},{path:"/static/portfolio/il7-800-3c1c4ba996c9d828fc5824d68765ea83.jpg",width:800,height:800}],src:"/static/portfolio/il7-720-5252f58ddfe484806f599a0981ed702a.jpg",toString:function(){return "/static/portfolio/il7-720-5252f58ddfe484806f599a0981ed702a.jpg"},placeholder: undefined,width:720,height:720};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/catharsis-720-f0544ccb9e3f91aa61ae577b636eec2a.jpg"+" 720w"+","+"/static/portfolio/catharsis-1200-f68b61fa1e364efe1bbab76be1d63d5e.jpg"+" 1200w",images:[{path:"/static/portfolio/catharsis-720-f0544ccb9e3f91aa61ae577b636eec2a.jpg",width:720,height:450},{path:"/static/portfolio/catharsis-1200-f68b61fa1e364efe1bbab76be1d63d5e.jpg",width:1200,height:750}],src:"/static/portfolio/catharsis-720-f0544ccb9e3f91aa61ae577b636eec2a.jpg",toString:function(){return "/static/portfolio/catharsis-720-f0544ccb9e3f91aa61ae577b636eec2a.jpg"},placeholder: undefined,width:720,height:450};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/design-lab-status-720-33b7b8690f076e13c0de8a6286726e45.jpg"+" 720w"+","+"/static/portfolio/design-lab-status-1440-be405aa34ad546415e5e1e74a7a11ee3.jpg"+" 1440w",images:[{path:"/static/portfolio/design-lab-status-720-33b7b8690f076e13c0de8a6286726e45.jpg",width:720,height:405},{path:"/static/portfolio/design-lab-status-1440-be405aa34ad546415e5e1e74a7a11ee3.jpg",width:1440,height:810}],src:"/static/portfolio/design-lab-status-720-33b7b8690f076e13c0de8a6286726e45.jpg",toString:function(){return "/static/portfolio/design-lab-status-720-33b7b8690f076e13c0de8a6286726e45.jpg"},placeholder: undefined,width:720,height:405};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  slug: 'design-prototypes',
  title: 'Design Prototypes',
  year: 2012,
  company: 'Stumptown Bear',
  companyHref: 'http://stumptownbear.com',
  projectHref: null
}


/***/ })

/******/ })));