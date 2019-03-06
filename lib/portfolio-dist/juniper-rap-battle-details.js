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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/juniper-rap-battle/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/juniper-rap-battle/details.js":
/*!*****************************************************!*\
  !*** ./lib/portfolio/juniper-rap-battle/details.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/juniper-rap-battle/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Landing page',\n      image: __webpack_require__(/*! ./website.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/juniper-rap-battle/website.jpg?&sizes[]=720&sizes[]=1440\")\n    }\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/juniper-rap-battle/details.js?");

/***/ }),

/***/ "./lib/portfolio/juniper-rap-battle/meta.js":
/*!**************************************************!*\
  !*** ./lib/portfolio/juniper-rap-battle/meta.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'juniper-rap-battle',\n  title: 'Juniper Data Center Rap Battle',\n  year: 2014,\n  company: 'John McNeil Studio',\n  projectHref: undefined,\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/juniper-rap-battle/meta.js?");

/***/ }),

/***/ "./lib/portfolio/juniper-rap-battle/website.jpg?&sizes[]=720&sizes[]=1440":
/*!********************************************************************************!*\
  !*** ./lib/portfolio/juniper-rap-battle/website.jpg?&sizes[]=720&sizes[]=1440 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/website-1421-4033f3c369f0920858be3f82a4438a12.jpg\"+\" 1421w\",images:[{path:\"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg\",width:720,height:1020},{path:\"/static/portfolio/website-1421-4033f3c369f0920858be3f82a4438a12.jpg\",width:1421,height:2013}],src:\"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg\",toString:function(){return \"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAA5ACgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABQYAAwcEAgj/xAA2EAABAwMCAwUFBgcAAAAAAAABAgMEAAUREiEGEzEHCCJRgTdBQmGzFTJxcqHBFBYzYnODkv/EABcBAQEBAQAAAAAAAAAAAAAAAAEDAgD/xAAmEQABBAAFAwUBAAAAAAAAAAABAAIDERIhMWHBE3GhIkGBsdHh/9oADAMBAAIRAxEAPwDBLItIs8JA0t5CsqKCdR1kDf8AajdpSxIU42ubHaUhOvDkZxRI8/CDjp76RYvEk6DA/gYyEEJyUlQydyCcV2Wm83CVNlOznWmCYywkujSFYGQlPz/WpuIbmdFtos0BwnpVpBfDZukVtakFzlmM6CE/84/WqLrGVFRGAcZWJSA40pMVacpPTc0MVd0ouCXVttraMYZWNBR90HGzONyD8PX3++ua78VOwoMWOEtSXFxk5UyQEp/tXj4sbedLsIIB1KG5gkffHvwvF9kOGzSY5KFtgZzysbhQ6K9alBp3EapkN6E1CDTDh2IP3ehP471KW6IKKcOxZTlsYeZ4dlzQCrD7aAQTk9Dj0olNhXCVHLLvCd1Ceo0pwR+lN/ZvxHwxG7O41rudgtjr/LeCpgYSZGSpR6nqRkAelKfF8iDF7NLdBQyqNdlXdbq1khLwY0EBKiNyM4PXFaBYTRB8KTmy5kEV8/q8/Y1ybWl/+Wp6QlAGOYjTjGNxVDNtmuEBPC10e8OACkHYZ36ZzuaXLfKt6WHPtB24vOkjRyZxbCR785Bznbyx86ItmxOOvBiRdNJ/pk3TJT81eAA/gMUSRk5Ra7/xMcgZbp9NtfNohxFYG7fw4qYIFwYdKBzA9DWgNKKh4Ss7K6DcVKV7k0+zhJuLkhB3wXSQfTNShrJGZSVe18rfVil9UV1vXFL7G7s0JqT2MWBKY8Vby+eAp1sHfnL6nGa0qNZI6pCS+9bEMndXJ06h5YynzpB7qfsj4a/M/wDWXWuxNCAVYycYwvcVxShjVgtq1gJkMqBONkJJ+Xw1U7wxIS+sstwVNAnRzEjJHz8NMseShzwAaMDzwPSrWzqUoa0EDy6j8a5CwvvIwkRexniVC2IyXkNNAqbbAGecjocZqV2d6X2S8V/ka+q3UpCSuPuvSGInYzw9JkupaZbL6lrV0SOcvetJTf7AE4N6g+ilj9qzPuy+xSwf7/rLrSa60EWi7F8sSW0hM5gnAyQg7/PpQ1/i+MH1iNerLydQ0a+Zqx784GM1zHr61ZUZYuoKxEdjXBVI34DdA9xaQO8zJYmdjfE8qK6l1lxtpSFp6KHObqVV3kPYpxJ/ha+sipVgsFf/2Q==\",width:720,height:1020};\n\n//# sourceURL=webpack:///./lib/portfolio/juniper-rap-battle/website.jpg?");

/***/ })

/******/ })));