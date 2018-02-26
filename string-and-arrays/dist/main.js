/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import TaskCollection from './TaskCollection.js'

// // Useful strings additions

// let text = 'star wars a new hope'

// console.log('Variable type string, ', text)
// console.log('text.includes(wars)', text.includes('wars'))
// console.log('text.startsWith(star)', text.startsWith('star'))
// console.log('text.endsWith(hope)', text.endsWith('hope'))

// console.log('tro', 'lo'.repeat(100) )



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// console.log(
//     [2, 3, 4, 5, 6, 10].includes(25)
// )
///
// console.log(
//     [2, 3, 4, 5, 6, 10].find(function(item){
//         return item > 5
//     })
// )
///
// console.log(
//     [2, 3, 4, 5, 6, 10].find(item => item > 5)
// )


var User = function User(name, isAdmin) {
    this.name = name
    this.isAdmin = isAdmin
};

var users = [
    new User('John', false),
    new User('Jane', true),
    new User('Joseph', false)
]

console.log(

    users.find(function (user) { return user.isAdmin; }),
    '======>',
    users.find(function (user) { return user.isAdmin; }).name

)


/***/ })
/******/ ]);