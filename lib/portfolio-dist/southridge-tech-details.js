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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/southridge-tech/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/southridge-tech/details.js":
/*!**************************************************!*\
  !*** ./lib/portfolio/southridge-tech/details.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/southridge-tech/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Southridge Tech Dashboard',\n      image: __webpack_require__(/*! ./southridge-tech-1.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/southridge-tech/southridge-tech-1.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n\n      alt: 'Southridge Tech Mentions',\n      image: __webpack_require__(/*! ./southridge-tech-2.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/southridge-tech/southridge-tech-2.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/details.js?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/meta.js":
/*!***********************************************!*\
  !*** ./lib/portfolio/southridge-tech/meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'southridge-tech',\n  title: 'Southridge Tech Data Visualization',\n  year: 2012,\n  company: 'Webtrends',\n  companyHref: 'https://www.webtrends.com/',\n  projectHref: undefined,\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/meta.js?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/southridge-tech-1.jpg?&sizes[]=720&sizes[]=1440":
/*!***************************************************************************************!*\
  !*** ./lib/portfolio/southridge-tech/southridge-tech-1.jpg?&sizes[]=720&sizes[]=1440 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/southridge-tech-1-720-75dad6974ede77ba3ccb90a24a4dd584.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/southridge-tech-1-1440-77aa62a69294aa7670bf5477dace0eb1.jpg\"+\" 1440w\",images:[{path:\"/static/portfolio/southridge-tech-1-720-75dad6974ede77ba3ccb90a24a4dd584.jpg\",width:720,height:400},{path:\"/static/portfolio/southridge-tech-1-1440-77aa62a69294aa7670bf5477dace0eb1.jpg\",width:1440,height:800}],src:\"/static/portfolio/southridge-tech-1-720-75dad6974ede77ba3ccb90a24a4dd584.jpg\",toString:function(){return \"/static/portfolio/southridge-tech-1-720-75dad6974ede77ba3ccb90a24a4dd584.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAWACgDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAYDBQcI/8QALxAAAQMDAgQEBAcAAAAAAAAAAQIDBAAFEQYhEhNBUQciIzEUFmFxMnKBkaLB0f/EABgBAQADAQAAAAAAAAAAAAAAAAABAwUE/8QAJREAAQMCBQQDAAAAAAAAAAAAAQACAxExBBIUIVEFIzJhkaGx/9oADAMBAAIRAxEAPwDzvar5ohpuKq42+4yOXESl5tE1YU495OJQVgcI2XgAHAV1wKj7tMUqW45ClOlhS1FtBBy2nOwJPvtXVmtXKhRmmGbNaJfLYDRccaKgvygFXCQBn236EE9TmWmRVxpDjC91IUUnYgj7hQB/eiLZ6J0Dc5XLkaluHwsE4cEZt9JccyNskfhGP1+lXLegNFvT9Rx1CW01EjW8w1pnHIUtDZdOTsoklWe2TjFQaETA2jDLeCkYJQ37Y+prDJbmoaUVFIbx5s8v+qvlfE7JkbTKd9618b24PyVn6XEOLy6a4oKCgF/Z5+lXfIVljOyHE3eYYQi7MiRha3QFedSu2CAAB3pUK4dj6nFsO1K5+oDVPDoe2ALD9VcGBxEYo+YuWw0XrjRlgu7VzmWG5Xd1lHpsvrbS2h3Gzm25wdwD96pvEHxi0XrctvXfSVzZltFQbkxpbaV8KlFRCspIV03IyOlKVK1FztWpIBQhPwCyR1UonO35tqxr1DBUkgQSkke4G4/lSlEWM32IQfRcGeyR/tKUoi//2Q==\",width:720,height:400};\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/southridge-tech-1.jpg?");

/***/ }),

/***/ "./lib/portfolio/southridge-tech/southridge-tech-2.jpg?&sizes[]=720&sizes[]=1440":
/*!***************************************************************************************!*\
  !*** ./lib/portfolio/southridge-tech/southridge-tech-2.jpg?&sizes[]=720&sizes[]=1440 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/southridge-tech-2-1440-bbcaa0ebd87d71e1fe89b39edba9117f.jpg\"+\" 1440w\",images:[{path:\"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg\",width:720,height:386},{path:\"/static/portfolio/southridge-tech-2-1440-bbcaa0ebd87d71e1fe89b39edba9117f.jpg\",width:1440,height:772}],src:\"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg\",toString:function(){return \"/static/portfolio/southridge-tech-2-720-f514792f84a9b52b1dbd3ba734c73daf.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAVACgDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECBAUGAwj/xAArEAABAwMCAwgDAQAAAAAAAAABAgMRAAQhBTEGEkEHExQVIlFhsSOBoXH/xAAXAQEBAQEAAAAAAAAAAAAAAAAABAID/8QAKBEAAQEFBQkAAAAAAAAAAAAAAQACAxEhUQQiIzFBEhMUQmGBocHh/9oADAMBAAIRAxEAPwDzla6xwsxZNG6026unjbtoWEXJRDgQQpYk9TBjIkDEYNOwhriHjBiz0w3GlWNytCEeJd70tQgcxKoEyQo7DfpVpevuPgqOqtPrJ3Ugg/7k1xDzvhA2dTahJMNkY3z1/e1aZIBBIistglkhkwKmaxwTrWm6Ap3zLxlyq8S21b2ygschkd4r2nGOk5qVrfZ3qduxbHS9ZTfvvOBLjZUlCWRyySpXNBE4xVPavuJWs+YNsYEkI339jSMEG8QTqLDYBMOchMYMYGfj91VvrPPD8/NVFw9qljZR5ROgz0W5f7OkWvBLirfiRJ1MPKWszyoWA1hA9W3NPqjrtRWJurl6CjzFDqSPn6k0VG+vGLobIn1pWi6OnNoYF55HsPSjXWoquDKra3SfdLYT/AAKRvUXUMBkMsFImJaTOfmJoooq0+wuPzLV3TeBgcoI/opHrkIu57hreT6R9RFFFETHb9LiipdqySREgR9UUUURf//Z\",width:720,height:386};\n\n//# sourceURL=webpack:///./lib/portfolio/southridge-tech/southridge-tech-2.jpg?");

/***/ })

/******/ })));