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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/portfolio/webtrends-design-lab/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/portfolio/webtrends-design-lab/details.js":
/*!*******************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/details.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  ...__webpack_require__(/*! ./meta */ \"./lib/portfolio/webtrends-design-lab/meta.js\"),\n  projectImages: [\n    {\n      alt: 'Telegraph.co.uk streams demo',\n      image: __webpack_require__(/*! ./stream-telegraph.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-design-lab/stream-telegraph.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Motorcycle USA streams demo',\n      image: __webpack_require__(/*! ./stream-musa.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-design-lab/stream-musa.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'MSN dashboard',\n      image: __webpack_require__(/*! ./msn.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-design-lab/msn.jpg?&sizes[]=720&sizes[]=1440\")\n    },\n    {\n      alt: 'Red Bull dashboard',\n      image: __webpack_require__(/*! ./redbull.jpg?&sizes[]=720&sizes[]=1440 */ \"./lib/portfolio/webtrends-design-lab/redbull.jpg?&sizes[]=720&sizes[]=1440\")\n    }\n  ]\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/details.js?");

/***/ }),

/***/ "./lib/portfolio/webtrends-design-lab/meta.js":
/*!****************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/meta.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  slug: 'webtrends-design-lab',\n  title: 'Webtrends Design Lab',\n  year: 2012,\n  company: 'Webtrends',\n  companyHref: 'https://www.webtrends.com/',\n  projectHref: undefined,\n}\n\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/meta.js?");

/***/ }),

/***/ "./lib/portfolio/webtrends-design-lab/msn.jpg?&sizes[]=720&sizes[]=1440":
/*!******************************************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/msn.jpg?&sizes[]=720&sizes[]=1440 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/msn-730-3ae9a83ec53c37884c9fa4a63e2ad94b.jpg\"+\" 730w\",images:[{path:\"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg\",width:720,height:404},{path:\"/static/portfolio/msn-730-3ae9a83ec53c37884c9fa4a63e2ad94b.jpg\",width:730,height:410}],src:\"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg\",toString:function(){return \"/static/portfolio/msn-720-821216bf7f4463f30df506caf17a3a02.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAWACgDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAcIBAMG/8QALhAAAQMDAwIEBAcAAAAAAAAAAQIDBAAFEQYHIRIxExQiQRUjYZEXQlNicXKB/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwQGAAH/xAAlEQABAwIFBAMAAAAAAAAAAAABAAIRAyEFEjFBUQRhsdEicZH/2gAMAwEAAhEDEQA/AFTt1NsLN8tq7do2ZJmLhuNrLszzCHFeEQtQaLeB7kc8f5TG2/2v0zNulsauttnMIdcKJbsh5LCUq6XOkJCkHIOByO32pVbMLeY17bHxEkS0eWeAbZwFH5avqP55NU3t2VPa+jF61XLw580KUJAQWkYbcGBhROPep7EcRrU+vpdMwwDlnTc8zOg47XlN0mh1B8sEi4dmudoyyLAGdDJ5gLTN2Q2yDTKkLSqQ7Lab6Grg051JUtKf0hjIz2HH1rBdtg9p3I/nHVSGpKnkJcbbvQ9I60J4SEAdic8DGM81REKK3b21KisNIbUrK0tpx1cd+fetCZDpOAwVDH9ST9AfaqHRJqV9d7E7W2nQl/u8JxxEyFAffjJ+PF4lSW1FOUdAz6gBjPIJop+b0PK/CPV6HUpQo2WXgdXf5Sux96Ky6oE2dbbf13bGlPymMxXwpxhYCseGrgcfeqZ0FHZs+o7W5AuNwDcVxa0svYcaCQ26T6QRz3xz3ooqLxV7hjVFoNvjxy7smqdR4ouYHW4t6Pn8Tk+PXN+xxbkzKilqS6E9C4JCgkLCVHh3vzkV1N8u7lrTOjzIhCnw0ErgkfnSknh392RRRVaajgD9gePaUleS3Nv8y6bO6pfTKZLLlvmR+lULpVkR1LPPinAwO/PPtRRRRgblEeAGtI3nyv/Z\",width:720,height:404};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/msn.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-design-lab/redbull.jpg?&sizes[]=720&sizes[]=1440":
/*!**********************************************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/redbull.jpg?&sizes[]=720&sizes[]=1440 ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/redbull-730-7c4f726cc107335342a0254901a07cc9.jpg\"+\" 730w\",images:[{path:\"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg\",width:720,height:404},{path:\"/static/portfolio/redbull-730-7c4f726cc107335342a0254901a07cc9.jpg\",width:730,height:410}],src:\"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg\",toString:function(){return \"/static/portfolio/redbull-720-c7b5d6ed85ccb051b1f455acf7a937ee.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAWACgDASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYHAQIDBP/EACoQAAIBAgUEAQMFAAAAAAAAAAECAwQFAAYREiEHEzFBYRYyUSMzUoPR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAMCAf/EACERAAIBAwMFAAAAAAAAAAAAAAABAgMR0QShsRITISJB/9oADAMBAAIRAxEAPwC0vT1Vyz8LZJcK2KjNCj7ICqkHtKfOwnzhpo7A9ErLS32+QhiCwE6HXTj3FhIzZl+61t9atokTa1LAqsK2ONtRGoI0LgjwfWH7KpqJbdBRtSuJKanjR370UgYgaH7JGPkHzpjlkWjqKkVZPZYMGir9hb6ivfAJ/cj9f1YmvVaizKM00hoOpNvtMAoFDQXAEzOdz6uWWLTQ8AePGLA1FU9sgQtrtI8D/cTvqX0/s2YMywXO4ZYluFXFSRx99biYNqhn42hh+Tz84eEOupV9W+FgXsjfWzX+jjqOq9iuVqgVxPbY3HcqF7b6Km6NSTroeD6wY92T+nmVKK+R3mnynX01woHmVKlrn3I4mVGH2l9W8nwCOcGNInODg7PPAz9Q7u2WshPfqaipKiop46YlZogwcFgrAnzyCRr6w208NOiB4qeKMuoJ2IB8+sGDAs4rsKX27WyZtLGWUBH7Z3A6hQeNeRz+cc6tP10I0AEQ9H+R+cGDAhdnNUVIKkLxuWVuB+VPzgwYMDLP/9k=\",width:720,height:404};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/redbull.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-design-lab/stream-musa.jpg?&sizes[]=720&sizes[]=1440":
/*!**************************************************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/stream-musa.jpg?&sizes[]=720&sizes[]=1440 ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/stream-musa-768-34e4a031b8a0f64afbc76df9ec7ec582.jpg\"+\" 768w\",images:[{path:\"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg\",width:720,height:405},{path:\"/static/portfolio/stream-musa-768-34e4a031b8a0f64afbc76df9ec7ec582.jpg\",width:768,height:432}],src:\"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg\",toString:function(){return \"/static/portfolio/stream-musa-720-1fd2c806eef52ec4c9a6cc40ebfbf795.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAXACgDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIEAQMFCP/EAC8QAAECBAMFBwUBAAAAAAAAAAECAwAEESESIjEFE0FRYQYUJDJicaEVI1KBkfD/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAECMRH/2gAMAwEAAhEDEQA/APNU7OOhUmgBkd1QN2Nw2KVAJqMNFXNb1iqHHCwtkpRgW5vD9pNcXQ4agdNIhNDxZBSPKjh6R0EbGQm1qCOmjgStXeDRHiPPRtPOuW2XThSIMygW5NBS3All0IFNb11y9OQiypCC2Rb+RXZl21OTacLRCHQAdxUaK0qcvtf4g3jmLE9XtqSTUrs/Zq2N4VPy4W5YnMVEcEGnx7HWEb+0LYOydiDBiwyaQMhNM59KqfH71KCrgzD7JeKmlApITwP4gcveMomEil/iEIYthmkHjcxNkgzM4lSSQHhbGba/2EIyWdPtGpr6TsTEUGkokUUK0zm1wf8Ac9YQhAN//9k=\",width:720,height:405};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/stream-musa.jpg?");

/***/ }),

/***/ "./lib/portfolio/webtrends-design-lab/stream-telegraph.jpg?&sizes[]=720&sizes[]=1440":
/*!*******************************************************************************************!*\
  !*** ./lib/portfolio/webtrends-design-lab/stream-telegraph.jpg?&sizes[]=720&sizes[]=1440 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {srcSet:\"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg\"+\" 720w\"+\",\"+\"/static/portfolio/stream-telegraph-730-ecfb070a4933b17e4d3767862a558aed.jpg\"+\" 730w\",images:[{path:\"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg\",width:720,height:404},{path:\"/static/portfolio/stream-telegraph-730-ecfb070a4933b17e4d3767862a558aed.jpg\",width:730,height:410}],src:\"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg\",toString:function(){return \"/static/portfolio/stream-telegraph-720-c975ec681de0cd1d5fd3f7f6bb7e38db.jpg\"},placeholder: \"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAWACgDASIAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAwgGBwn/xAAqEAACAgEEAgIBAgcAAAAAAAABAgMEEQAFEiEGEyIxFCNhFjJBQ1Fiof/EABkBAAIDAQAAAAAAAAAAAAAAAAIEAAEFA//EACIRAAICAgEDBQAAAAAAAAAAAAECACEDERIiMTJRgZHh8P/aAAwDAQACEQMRAD8A7y3y3PtW7UW2+hUmhdn/ADWeVxKgIHDgBkHJIBJ6A76GTqD/ABDbn9+1zQ2557ETSQPtKj3xqXK9qxwnEDHsYgMc4XrVJ5jtdaPya8l2GGnW3x44YpvyGd7svqZTHx/thQQQVKZOAWwTi/8AALtCg+6004tLOkFioIiJJJ6ywJGojbJ5cWV1OCcHv+uS4MalZmtlc5CN6v8AfMLvW5PfEKNPDajj/UpW6JUcDKoEoKsWfCkrlCVB7biNXDz0932WWwiF4/SzKeXXachhh8WHY7BIzqp873epf3nx2lS9NPc455ZOMuVaCN4XjAl4nI5uyKAMEkZH8upG0VHqwbs7V6gaaMixNDISXljiEeCCSfpc5JDd4Iz2VtAdM1Sh4B23YqvSt+9/dGaPzLGlYP6ZFCgBviMZ6B+001gsyB9qEiqSkj4QlcHGR/r/AN00EEz0EVoZ2GYwxQ8l5KDg/WR/g64x5lXpWru1bA221ZUeKxZjDooRBGoyB8SVPz5ArjtQD0TppqZPHU5sBIuybZt03jO57dRqwVGgseqZo4eAmb1LkvxP6mVcjJxgnoDA1dbFWWv4q3EMvOqTw9hZUAjwFX6wAMD6GcZPZ000OMUIwjscHEmtzRPc68sW3wBzG56PLiAe8ft++mmmrXsIDgBiBP/Z\",width:720,height:404};\n\n//# sourceURL=webpack:///./lib/portfolio/webtrends-design-lab/stream-telegraph.jpg?");

/***/ })

/******/ })));