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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  slug: 'juniper-rap-battle',
  title: 'Juniper Data Center Rap Battle',
  year: 2014,
  company: 'John McNeil Studio',
  projectHref: undefined,
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  slug: 'juniper-deception-force',
  title: 'Juniper Deception Force',
  year: 2014,
  company: 'John McNeil Studio',
  companyHref: 'http://www.johnmcneilstudio.com/',
  projectHref: null
}


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  slug: 'design-prototypes',
  title: 'Design Prototypes',
  year: 2012,
  company: 'Stumptown Bear',
  companyHref: 'http://stumptownbear.com',
  projectHref: null
}


/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  slug: 'polycom',
  title: 'Polycom Defy Distance',
  year: 2014,
  company: 'John McNeil Studio',
  companyHref: 'http://www.johnmcneilstudio.com/',
  projectHref: null
}


/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  slug: 'pm-falling-sun',
  title: 'Precision Machines\' Falling Sun',
  year: 2016,
  company: 'Stumptown Bear',
  companyHref: 'http://stumptownbear.com',
  projectHref: 'http://pmisdead.com/fallingsun/',
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// require('.//thumbnail'),

module.exports = {
  thumbnails: [
    __webpack_require__(15),
    __webpack_require__(17),
    __webpack_require__(19),
    __webpack_require__(21),
    __webpack_require__(23),
    __webpack_require__(25),
    __webpack_require__(27),
    __webpack_require__(29),
    __webpack_require__(31),
    __webpack_require__(33),
    __webpack_require__(35),
    __webpack_require__(37),

    // personal
    __webpack_require__(39),
    __webpack_require__(41),
  ]
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(0),
  thumbnail: __webpack_require__(16)
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-344505f409a301ac15412ef750c3fed0.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-2a443477914a1a6ec4fc69c5df12c484.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-344505f409a301ac15412ef750c3fed0.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-2a443477914a1a6ec4fc69c5df12c484.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-344505f409a301ac15412ef750c3fed0.jpg",toString:function(){return "/static/portfolio/thumbnail-320-344505f409a301ac15412ef750c3fed0.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(1),
  thumbnail: __webpack_require__(18)
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-6eae06576ebd5a21852e58c63f6213db.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-6eae06576ebd5a21852e58c63f6213db.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg",toString:function(){return "/static/portfolio/thumbnail-320-70b1da012868129e7eb0437b22f0b245.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(2),
  thumbnail: __webpack_require__(20)
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-7fb1052b7db4e579e3064491ad95c431.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-60ff4e205429b9706ccf581da982b25e.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-7fb1052b7db4e579e3064491ad95c431.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-60ff4e205429b9706ccf581da982b25e.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-7fb1052b7db4e579e3064491ad95c431.jpg",toString:function(){return "/static/portfolio/thumbnail-320-7fb1052b7db4e579e3064491ad95c431.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(3),
  thumbnail: __webpack_require__(22)
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-1d1dfd327b8ba57ff4d35d39897d98d5.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-f8d8499ff4140644a8b62e1497b74847.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-1d1dfd327b8ba57ff4d35d39897d98d5.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-f8d8499ff4140644a8b62e1497b74847.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-1d1dfd327b8ba57ff4d35d39897d98d5.jpg",toString:function(){return "/static/portfolio/thumbnail-320-1d1dfd327b8ba57ff4d35d39897d98d5.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(4),
  thumbnail: __webpack_require__(24)
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-d562d8f5cd6324c82131f2fcdd95ae10.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-510ea402ff21d61570d67114cb5b910b.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-d562d8f5cd6324c82131f2fcdd95ae10.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-510ea402ff21d61570d67114cb5b910b.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-d562d8f5cd6324c82131f2fcdd95ae10.jpg",toString:function(){return "/static/portfolio/thumbnail-320-d562d8f5cd6324c82131f2fcdd95ae10.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(5),
  thumbnail: __webpack_require__(26)
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-38547612a0a023cd5379a45e740da18e.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-006e290f8518ce655ae59ac0f6c27eb0.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-38547612a0a023cd5379a45e740da18e.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-006e290f8518ce655ae59ac0f6c27eb0.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-38547612a0a023cd5379a45e740da18e.jpg",toString:function(){return "/static/portfolio/thumbnail-320-38547612a0a023cd5379a45e740da18e.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(6),
  thumbnail: __webpack_require__(28)
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-d94316322c2a95b9ac6a5386649149c9.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-e84871d84b28490538bd994ee94b0444.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-d94316322c2a95b9ac6a5386649149c9.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-e84871d84b28490538bd994ee94b0444.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-d94316322c2a95b9ac6a5386649149c9.jpg",toString:function(){return "/static/portfolio/thumbnail-320-d94316322c2a95b9ac6a5386649149c9.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(7),
  thumbnail: __webpack_require__(30)
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-3eb1903eec6fae3f98577008aae9d1b9.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-139bf7073fec58a907fb8a0e019de87b.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-3eb1903eec6fae3f98577008aae9d1b9.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-139bf7073fec58a907fb8a0e019de87b.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-3eb1903eec6fae3f98577008aae9d1b9.jpg",toString:function(){return "/static/portfolio/thumbnail-320-3eb1903eec6fae3f98577008aae9d1b9.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(8),
  thumbnail: __webpack_require__(32)
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-6b83dac8d1e0a8272ee408659e96de4c.jpg"+" 320w"+","+"/static/portfolio/thumbnail-409-22870b2afbddb95f359a133bae71b2e0.jpg"+" 409w",images:[{path:"/static/portfolio/thumbnail-320-6b83dac8d1e0a8272ee408659e96de4c.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-409-22870b2afbddb95f359a133bae71b2e0.jpg",width:409,height:409}],src:"/static/portfolio/thumbnail-320-6b83dac8d1e0a8272ee408659e96de4c.jpg",toString:function(){return "/static/portfolio/thumbnail-320-6b83dac8d1e0a8272ee408659e96de4c.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(9),
  thumbnail: __webpack_require__(34)
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-e708b0e023c1d5c79f344f920b397357.jpg"+" 320w"+","+"/static/portfolio/thumbnail-463-af8ba2456b9e7feef7a4e78ccf735108.jpg"+" 463w",images:[{path:"/static/portfolio/thumbnail-320-e708b0e023c1d5c79f344f920b397357.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-463-af8ba2456b9e7feef7a4e78ccf735108.jpg",width:463,height:463}],src:"/static/portfolio/thumbnail-320-e708b0e023c1d5c79f344f920b397357.jpg",toString:function(){return "/static/portfolio/thumbnail-320-e708b0e023c1d5c79f344f920b397357.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(10),
  thumbnail: __webpack_require__(36)
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-67cc49d4011b82469fb02e550df2416b.jpg"+" 320w"+","+"/static/portfolio/thumbnail-338-80ca03a9313d6164a032e99519106625.jpg"+" 338w",images:[{path:"/static/portfolio/thumbnail-320-67cc49d4011b82469fb02e550df2416b.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-338-80ca03a9313d6164a032e99519106625.jpg",width:338,height:338}],src:"/static/portfolio/thumbnail-320-67cc49d4011b82469fb02e550df2416b.jpg",toString:function(){return "/static/portfolio/thumbnail-320-67cc49d4011b82469fb02e550df2416b.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(11),
  thumbnail: __webpack_require__(38)
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-c8d499d1dfd8625957a5067b54097340.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-b0c8893886c0265c8fab093b5643f6b5.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-c8d499d1dfd8625957a5067b54097340.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-b0c8893886c0265c8fab093b5643f6b5.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-c8d499d1dfd8625957a5067b54097340.jpg",toString:function(){return "/static/portfolio/thumbnail-320-c8d499d1dfd8625957a5067b54097340.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(12),
  thumbnail: __webpack_require__(40)
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-2d6805ee0007c05af8476a685e5b319a.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-0a326daafabfac5828071c82c3c371f4.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-2d6805ee0007c05af8476a685e5b319a.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-0a326daafabfac5828071c82c3c371f4.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-2d6805ee0007c05af8476a685e5b319a.jpg",toString:function(){return "/static/portfolio/thumbnail-320-2d6805ee0007c05af8476a685e5b319a.jpg"},placeholder: undefined,width:320,height:320};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ...__webpack_require__(13),
  thumbnail: __webpack_require__(42)
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {srcSet:"/static/portfolio/thumbnail-320-efd022e3153db279b9431826aef63b47.jpg"+" 320w"+","+"/static/portfolio/thumbnail-640-dd05a6c5e854a0e75cdcd5eb1025331b.jpg"+" 640w",images:[{path:"/static/portfolio/thumbnail-320-efd022e3153db279b9431826aef63b47.jpg",width:320,height:320},{path:"/static/portfolio/thumbnail-640-dd05a6c5e854a0e75cdcd5eb1025331b.jpg",width:640,height:640}],src:"/static/portfolio/thumbnail-320-efd022e3153db279b9431826aef63b47.jpg",toString:function(){return "/static/portfolio/thumbnail-320-efd022e3153db279b9431826aef63b47.jpg"},placeholder: undefined,width:320,height:320};

/***/ })
/******/ ])));