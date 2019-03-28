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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {
  slug: 'trimet',
  title: 'Trimet.org redesign',
  year: 2015,
  company: 'TriMet',
  companyHref: 'https://trimet.org/',
  projectHref: 'https://trimet.org/'
}


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(0),
  projectImages: [
    {
      alt: 'Transit Tracker',
      image: __webpack_require__(83)
    },
    {
      alt: 'Trip Planner',
      image: __webpack_require__(84)
    },
    {
      alt: 'Service Alerts',
      image: __webpack_require__(85)
    }
  ]
}


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/transit-tracker-720-3fb7aedc1d3ebe8d92be0a9e456e814e.jpg"+" 720w"+","+"/static/portfolio/transit-tracker-1440-1b12fdf372733bd039ef26416193f9ef.jpg"+" 1440w",images:[{path:"/static/portfolio/transit-tracker-720-3fb7aedc1d3ebe8d92be0a9e456e814e.jpg",width:720,height:1558},{path:"/static/portfolio/transit-tracker-1440-1b12fdf372733bd039ef26416193f9ef.jpg",width:1440,height:3116}],src:"/static/portfolio/transit-tracker-720-3fb7aedc1d3ebe8d92be0a9e456e814e.jpg",toString:function(){return "/static/portfolio/transit-tracker-720-3fb7aedc1d3ebe8d92be0a9e456e814e.jpg"},placeholder: undefined,width:720,height:1558};

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/trip-planner-720-d7887619bdbc2bb6dac55e8b942b52a2.jpg"+" 720w"+","+"/static/portfolio/trip-planner-1440-9950a7f2b05879f4ca8f9986e39c4583.jpg"+" 1440w",images:[{path:"/static/portfolio/trip-planner-720-d7887619bdbc2bb6dac55e8b942b52a2.jpg",width:720,height:1744},{path:"/static/portfolio/trip-planner-1440-9950a7f2b05879f4ca8f9986e39c4583.jpg",width:1440,height:3489}],src:"/static/portfolio/trip-planner-720-d7887619bdbc2bb6dac55e8b942b52a2.jpg",toString:function(){return "/static/portfolio/trip-planner-720-d7887619bdbc2bb6dac55e8b942b52a2.jpg"},placeholder: undefined,width:720,height:1744};

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/service-alerts-720-23f22b938a5397629eb40f99689ecb14.jpg"+" 720w"+","+"/static/portfolio/service-alerts-1440-dd13bfd00fe099af4cf7298b03ac9097.jpg"+" 1440w",images:[{path:"/static/portfolio/service-alerts-720-23f22b938a5397629eb40f99689ecb14.jpg",width:720,height:2426},{path:"/static/portfolio/service-alerts-1440-dd13bfd00fe099af4cf7298b03ac9097.jpg",width:1440,height:4852}],src:"/static/portfolio/service-alerts-720-23f22b938a5397629eb40f99689ecb14.jpg",toString:function(){return "/static/portfolio/service-alerts-720-23f22b938a5397629eb40f99689ecb14.jpg"},placeholder: undefined,width:720,height:2426};

/***/ })

/******/ })));