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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/webtrends-today/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/webtrends-today/details.js":
/*!**************************************************!*\
  !*** ./lib/portfolio/webtrends-today/details.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/webtrends-today/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Overview dashboard',\n      image: __webpack_require__(/*! ./overview.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-today/overview.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Webtrends dashboard',\n      image: __webpack_require__(/*! ./webtrends.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-today/webtrends.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Facebook dashboard',\n      image: __webpack_require__(/*! ./facebook.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-today/facebook.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Twitter dashboard',\n      image: __webpack_require__(/*! ./twitter.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-today/twitter.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Youtube dashboard',\n      image: __webpack_require__(/*! ./youtube.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-today/youtube.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/details.js?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/facebook.jpg?&sizes[]=720&sizes[]=1440":
/*!******************************************************************************!*\
  !*** ./lib/portfolio/webtrends-today/facebook.jpg?&sizes[]=720&sizes[]=1440 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg\"+\" 637w\",images:[{path:\"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg\",width:637,height:478}],src:\"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg\",toString:function(){return \"/static/portfolio/facebook-637-b9d9cf8aca57277522949fb0f57bcc94.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQb/xAAqEAACAQMDAgYBBQAAAAAAAAABAgMABBEFEiETMQYUQVFhcYEikaHR8P/EABkBAAMAAwAAAAAAAAAAAAAAAAABAwIFBv/EACERAAICAAYDAQAAAAAAAAAAAAABAhESITFRgfADE6HR/9oADAMBAAIRAxEAPwDjW0rw6+niSTS7JrggZJt1LFs++O2KVfaN4e8wxtNKsOjgY3QJnOOfSlLKcDmqbmVjdM4cMS5IbGGb5xXb+uCenxfhoLluRSabowXpSWNnFE2SQLdME/WKml0Pwy0gYxWinjjy6f1V26dpj0QhYAluoPSlyedbnfbAEejqKj5IQxaLvBSLlWpBFp2jwyEwWVqNudrCJM5z7gUU6V5VlZZShYJ3ByMZ+KKWCOy7wFvcFk7VozSzPLHKXucRnO/YAVbk8c/H8VgW85dAxXBDEEZzyDiujsdd0yCCSKfT5Z2fvlgAD+scfYYftVHNSipRzDBTaZn3TILgGSeaMMGJZgMk5/35pMjWoUlbyXIHACLzS9du7W4lQ2iToo3ZEpBPJ9xWbvNYtXmNZFW5N7HL4xxnGSfxRUu80UUB/9k=\",width:637,height:478};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/facebook.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/meta.js":
/*!***********************************************!*\
  !*** ./lib/portfolio/webtrends-today/meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'webtrends-today',\n  title: 'Webtrends Today App',\n  year: 2012,\n  company: 'Webtrends',\n  companyHref: 'https://www.webtrends.com/',\n  projectHref: undefined,\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/meta.js?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/overview.jpg?&sizes[]=720&sizes[]=1440":
/*!******************************************************************************!*\
  !*** ./lib/portfolio/webtrends-today/overview.jpg?&sizes[]=720&sizes[]=1440 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg\"+\" 637w\",images:[{path:\"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg\",width:637,height:478}],src:\"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg\",toString:function(){return \"/static/portfolio/overview-637-a65fa6ac2800c57959943900c712ec57.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYEBQcDAf/EADAQAAEDAgUBBQcFAAAAAAAAAAECAwQAEQUSEyExFAYHIkFRFSQyQmFxgSNykcLR/8QAGQEAAgMBAAAAAAAAAAAAAAAABgcCBAUI/8QAKxEAAQIDBQYHAAAAAAAAAAAAAQACAxFRBBITQWEFBiGhssEHFDFScpHR/9oADAMBAAIRAxEAPwDCXIeDLwjVVGaVLPzKQSrNf14y2rtNgdmBBX08JHV75AAVJ2I3/i5tUQRpew6eRa/Gmr/KvGTIhYkiZGmS2DoOtqcYjZ1jOlQKcpNiFZiCfIG9SuOooYsP3D7H6ve7uBhTsuS1MhR3GLJORTQIvvY2tTc5g3Zf3kJwqCFhKNL9BITf5uRxSb2RUYj0hL6VMFSUhOcFI2ubXP0pqjzGS04kyY/iKdlrFjz53ol2eIfl23pT40qs20te6IS0EjSfZcxhWEsrCkYbh4UOFIZRt+QKKFy2gnJ1DVr3slYIorQGFpyVbDi0PNav1TPssNZDqW9Bzf4r88bWqWxeRKQ2xhjjy0oUpTYTYqSN7n8Uvg1MU+ylxJVrnZVyFgHjw728jz6/SiKJCOWtUk4Lx6ulwlkO4Kz3vlcjdfhUvpm05tUEWBsLJtueQCSd6Q234zomJ9nl9aw3kKE7gi5J2+G/n9qbe+tXu+F/ud/rWcR5T0cksryE8mwpR71NDdqxB8ekLrTwsJO61nOc39ZorbF5Dc6MJcPCBCjtOaa1t3KSpVykE22NgbD0H3NFU+u7pKa1FhtSsxQD4SfW3FFDhE0xmPuiS//Z\",width:637,height:478};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/overview.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/twitter.jpg?&sizes[]=720&sizes[]=1440":
/*!*****************************************************************************!*\
  !*** ./lib/portfolio/webtrends-today/twitter.jpg?&sizes[]=720&sizes[]=1440 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg\"+\" 637w\",images:[{path:\"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg\",width:637,height:478}],src:\"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg\",toString:function(){return \"/static/portfolio/twitter-637-f2a3308bad8407761b892cea2c9fbe48.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAIDBAUGAf/EACkQAAEDAgUCBgMAAAAAAAAAAAECAxEABAUGEiExE0EUFSJRcYFCYZH/xAAaAQEAAQUAAAAAAAAAAAAAAAAEAgMFBgcI/8QAJhEAAQMCAwkBAAAAAAAAAAAAAQACAwQREjFBBRMhMlFh0dLwof/aAAwDAQACEQMRAD8Amcy5lFeHBxeA4Uq4I3Uq1SVap+IiKYZaySXkAZew9SYOsJs0En42rwKPEmK0mL11i5DrWIPNLKFpK0I3jTx9wAfatqSUrBk3roPC58hrJXczjpqfYLnr7L2Vy4ptrB8NatiCQlVs3ztztzVF7K2UUevyvDlK7BNsg8cfjWytSuonS0hwwdlHjcUiy6AR4NkIiDFGmgjD7WH54TqWondFfEeN9Xey5u4y7gTzS2xhFmxqEBbLKELSZmQrTRWkU9J3ZITIkTxHtvRVGWhppSC9gP3ZIptp19O0tjlcB91JWkFfup/GXGoKD6wRMQYiRB/oqnqomr+WA5hY8MTcih50IUk9VbYg7o57VC6404QV3T64G3pFJfq2R91V1UWWMF902F5bGG2TEy4Z1FPaYmil1UVHdqeLsF//2Q==\",width:637,height:478};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/twitter.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/webtrends.jpg?&sizes[]=720&sizes[]=1440":
/*!*******************************************************************************!*\
  !*** ./lib/portfolio/webtrends-today/webtrends.jpg?&sizes[]=720&sizes[]=1440 ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg\"+\" 637w\",images:[{path:\"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg\",width:637,height:478}],src:\"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg\",toString:function(){return \"/static/portfolio/webtrends-637-8c4ba02db705a0f1e49bcc885d1e733c.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeACgDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAMEBQYIBwH/xAAwEAABAwMBBgQEBwAAAAAAAAABAgMEAAUREgYHExQhMSJBUWEVM3GBCCMkUpGiwf/EABgBAAMBAQAAAAAAAAAAAAAAAAADBAEC/8QAJBEAAQMCBAcAAAAAAAAAAAAAAQADEQIhEhNhsSIxMlFxkcH/2gAMAwEAAhEDEQA/AOErh2Vdp4i4zS5Z7koyonPr2xindwg7HiIsQoTipOg6DpyNX+D6+9PXVbFfD1JaXtFzPC8IUWuHxMefTOnP3xSLU5MS5Myo15fbKWHGy60wCtOpKgUhJPUK1EE56A5pTTuZPCR5EfShVzlo2jhiO1oJzp0DGfpXggxTnENk4GThodB/FO4SuHJZWV8LSoHVjOmpMznmVTUs3R1Lb8ZTCuEMcZClAlCx+0lIP2FNWqCRGjNrC0R2kKHYpQARRStFCErEQlyWw2sZSt1CSPYqANadvW4LYo7xrZZosy7RIcuJLlutJfCz+W40lKUqUnwpHEPfJPTr3rMkE4nRz6PIP9hW3515Yc3lWi7hpwMR7bNjqScaipbrCgR5Y8B8/SuaptCcyKSTi7H3FlRp24LYu2fAWA9cn+cfEKWtx1OpziAK1p6YQpOkgYHZRznpVlb3C7tuTltJtL6ebZSErMlSlxyAMqaKs6Sc9c57DtU/eb5HmyLEWmXU8tPafXqx1SE4IHv4hUsjaWIG0fp3/lj09E+9KbBzK55W2U4mSuFb7t0WyWyOxMm/2ZuSh1mIiIWnVBaFqI+cemQ54epHQ57Cirh+Iq7M3TdXcozDTiFhTRysgDzT5e6hRVLkYKY13Qz11Tpsv//Z\",width:637,height:478};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/webtrends.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-today/youtube.jpg?&sizes[]=720&sizes[]=1440":
/*!*****************************************************************************!*\
  !*** ./lib/portfolio/webtrends-today/youtube.jpg?&sizes[]=720&sizes[]=1440 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg\"+\" 637w\",images:[{path:\"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg\",width:637,height:478}],src:\"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg\",toString:function(){return \"/static/portfolio/youtube-637-df8f6bb63a5719c4d1a3da7ece0993de.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAQGBwEDBQj/xAAsEAABAwMEAQMDBAMAAAAAAAABAgMEAAURBhIhMQciQXETUWEUIzNCgZHB/8QAGAEAAwEBAAAAAAAAAAAAAAAABAYHAwX/xAAnEQABAwIEBQUAAAAAAAAAAAABAAIDESEEEhNBBQYxsdFRYZGhwf/aAAwDAQACEQMRAD8AoRyNanYBdditLkKGSso9W7PxjGKbMTRqJMkKiOqQf4AlCcJ4/sezzgn8dVxQs4AycfamnbhIccacKgFMq3IOM4OQff4pdzuNyVZRhYWgNa0AD2HgqceGNKad1Au6sXa1oktsobLaASkAndk8e/Aq3Lf4U8cS7aqW5Y0oXnoOqCU4+/NeZZuor5CkvTYN3mw5EtalPrjulsuEnPO3HuT/ALqS2y/aileI75e03zUJuNvnx2/1SLivADh4SU56wCes5HddHDikYc69bfNqqecwGY8QkbG/KAAaDpYAkC26491tlogznUsMtIX9ZxLYQ4nLW1RA3cZHFFIrdYfiR1rcCpDoy+4reVBXB3H2JPPVFBkmvVOkTIywEt29B4S26s7q07qN1Z5UZqpK/LAQzkgcns/FWZoTQUe5+NbjGmXnSEW43RLciAuVdEIdYKCCErwfTuG7g5xkZqp9UnLcf5V/yrS8eeK2r344ub6J0cTJMJuUFOx8hlIWDhKs5yfSD+Cr/J2o2OBuY0v+pHx+GlxXEpdNtaNH2AO5HdRB5bbTbMNSUpU0n6b5ShCiVA49Kh2OO6K1OyG1wYUUrc2NNAOftjIV1xzyPnFFDkXTJG6jBbZf/9k=\",width:637,height:478};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-today/youtube.jpg?");

/***/ })

/******/ })));