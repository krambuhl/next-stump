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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/spectrum-health/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/spectrum-health/details.js":
/*!**************************************************!*\
  !*** ./lib/portfolio/spectrum-health/details.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/spectrum-health/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Homepage',\n      image: __webpack_require__(/*! ./home.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/spectrum-health/home.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Search application',\n      image: __webpack_require__(/*! ./search.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/spectrum-health/search.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Events page',\n      image: __webpack_require__(/*! ./events.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/spectrum-health/events.jpg?&sizes[]=720&sizes[]=1440\")\n    }\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/spectrum-health/details.js?");

/***/ }),

/***/ "./lib/portfolio/spectrum-health/events.jpg?&sizes[]=720&sizes[]=1440":
/*!****************************************************************************!*\
  !*** ./lib/portfolio/spectrum-health/events.jpg?&sizes[]=720&sizes[]=1440 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/events-1440-aad8f179c294baa1379fdcafbc21b2d4.jpg\"+\" 1440w\",images:[{path:\"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg\",width:720,height:1789},{path:\"/static/portfolio/events-1440-aad8f179c294baa1379fdcafbc21b2d4.jpg\",width:1440,height:3578}],src:\"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg\",toString:function(){return \"/static/portfolio/events-720-1658f4c1c5f48eefb426165a98801cf8.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABjACgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIDAQQGBQj/xAAzEAACAgEBBQYEBAcAAAAAAAABAgARAxIEEyExQQUGByJRYSNxoeEVgZKxMjNCYpGywf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQF/8QAGxEBAAMBAQEBAAAAAAAAAAAAAAECETFREkH/2gAMAwEAAhEDEQA/APrXNmy6ntcuknptAAr/ABYm2MrOoa2WwDQbl9J4idtYsnaLbEuTaEy70411bBk0ki/6/wCGvc1PVxZNWNWdWDHgQV6zMW3iVtW3J1sPkDinRWr1kTuyD8FOPtI2LrrErTGNQhu2Y3fE/aJmI0xFt4uM1ZN2BZMiu+IshB7G4ybvctbaVvib63I7OcPLG2onr6wLRdcav2mMl6DpXUfTVX1kpVtS68DLvN1y811XH5yKnjLkXkQIfTVcSrZxhXIdGYOxHLWDEC19eg1pLdOExi3lecqPYD7zGTTum8zAXxNG+chiVGFXkY+tsJUX/nKtpLjCxxoMjcKUi74y0ChVSvaSowsXdsa9WXmJFRwI4cl8eJRXAqOMSvYzhLfDzZsp9WJr9qiBdk17tuOMm+F8ufWVoc/JTg+QuambtFxtx2P8H7QZN4F36ou7415ru6/LpPRRUQeWvn1iJhit4tufjKhq8xBPsKmMhIQlQCfRjQkrHqJHIqZEKOAVPMQ2hifKX0uuMD+17+kSWPHhxm0x41PqABED4pw+JfiUcKZT3p7y5AVBOkrpsi6vRPLHi34l74Ie+va9aqJ1KD/rONQ7JpGouGrjSfeRvBvFZDkB1DmBX7ztilfHny7keK3iSucpm779rqtWCMif9WF8VvEtsTsvffta1av5i0R+mcPtzhslBgQOVSlXYIUB8p5ipqaUieMxsw7nJ4ueJIClO+3a5sea8i8/0xOEiZ+K+NEkh0urVdG5GJobKPvM+V0Q2VPAAH0mvw6cpZs7Bd5ZAtCBKpZ4kdIiJFIiICIiAiIgf//Z\",width:720,height:1789};\n\n//# sourceURL=webpack:///./lib/portfolio/spectrum-health/events.jpg?");

/***/ }),

/***/ "./lib/portfolio/spectrum-health/home.jpg?&sizes[]=720&sizes[]=1440":
/*!**************************************************************************!*\
  !*** ./lib/portfolio/spectrum-health/home.jpg?&sizes[]=720&sizes[]=1440 ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/home-1440-c021c8361a5b95ef0a56304086f6dd28.jpg\"+\" 1440w\",images:[{path:\"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg\",width:720,height:2439},{path:\"/static/portfolio/home-1440-c021c8361a5b95ef0a56304086f6dd28.jpg\",width:1440,height:4878}],src:\"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg\",toString:function(){return \"/static/portfolio/home-720-79314fddec6e3c3d393091e6cd5c8681.jpg\"},placeholder: \"data:image/jpeg;base64,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\",width:720,height:2439};\n\n//# sourceURL=webpack:///./lib/portfolio/spectrum-health/home.jpg?");

/***/ }),

/***/ "./lib/portfolio/spectrum-health/meta.js":
/*!***********************************************!*\
  !*** ./lib/portfolio/spectrum-health/meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'spectrum-health',\n  title: 'Spectrum Health',\n  year: 2016,\n  company: 'ConnectiveDX',\n  companyHref: 'https://www.connectivedx.com/',\n  projectHref: 'http://www.spectrumhealth.org/',\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/spectrum-health/meta.js?");

/***/ }),

/***/ "./lib/portfolio/spectrum-health/search.jpg?&sizes[]=720&sizes[]=1440":
/*!****************************************************************************!*\
  !*** ./lib/portfolio/spectrum-health/search.jpg?&sizes[]=720&sizes[]=1440 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/search-1440-d061243d24aa35d4dc5caea55b7916ed.jpg\"+\" 1440w\",images:[{path:\"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg\",width:720,height:1097},{path:\"/static/portfolio/search-1440-d061243d24aa35d4dc5caea55b7916ed.jpg\",width:1440,height:2194}],src:\"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg\",toString:function(){return \"/static/portfolio/search-720-396e5089c7ae53721b0731819a0e6e98.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAA9ACgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAQCAwUHAQb/xAA1EAACAQMDAgMEBwkAAAAAAAABAgMABBEFITESQQYTYRQiUbEHMlJxgdHhJDRDYoKRssHC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECBP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8A5Ck08aoRaWuwHSzQqSfXfmqGSWTMxXZmO4AAz3rpWieCtBvtGsrib6RPC9lJJCjvDOH64yVBIOO4zg/dXwMkdvDPcRG6ZxHO6LLEuUcA4DDI4PNduuH0l5Un2aPKk+waukW0AJWWd2+AUClsn4mmj1GKnICnII3GeaK1AuljwuzSadqK6kZx5V2JP2Z48nqUrj6w23BP4UU0LzavqU1itjLeSvbKoURk7ADj5VLTi4tyEufL9/grntzyKz6ds8ezZaCCQF9utgDxUyT4nPM5+QzKbgjHtjHPPSgH/VJPDH1EyXB6u+VBP+VXuB0+7a2i+pcfnSzQuzE5gHfAkUD50VY+pX76VHpT3TtZRSNLHAcFUdvrEdxnvRWmxkm8EIoj0pUtrkkuuRdt1EbN2Kg8dxvRUhWDTloYxbN1tcDLfw+DtxxSdO2UgW3IN2YCW4x6VoQfyjjEd2w75P6VRKFGOhJFH8xz/qm5XUsM6jI+O+f1qmXyiuDcyyYGwxkfOoHp4LIeF7a4Wxv0vGncPct+7yIDsF+DDg/hRSb3uoNpcenvcztYpIZEhJJjVzywHYnvRSSlwrWhYGUWzCOaFB1HZxxtzWfWhpepR2MTI+k6Zelmz1XURdh6DDDal3PGerZPJqMksmw9th/pQ/lS9x72GM6ytxsCNv7VW7dTs3SFyScDgegqNVptzXcz+DreyfU4WiiuHkis/KHWhY4ZuvnfAPSfvFFYlFSTCv/Z\",width:720,height:1097};\n\n//# sourceURL=webpack:///./lib/portfolio/spectrum-health/search.jpg?");

/***/ })

/******/ })));