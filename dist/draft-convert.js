(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOMServer"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOMServer"], factory);
	else if(typeof exports === 'object')
		exports["DraftConvert"] = factory(require("React"), require("ReactDOMServer"));
	else
		root["DraftConvert"] = factory(root["React"], root["ReactDOMServer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://DraftConvert/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://DraftConvert/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://DraftConvert/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://DraftConvert/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://DraftConvert/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright 2013-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack://DraftConvert/./node_modules/invariant/browser.js?");

/***/ }),

/***/ "./src/blockEntities.js":
/*!******************************!*\
  !*** ./src/blockEntities.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_updateMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/updateMutation */ \"./src/util/updateMutation.js\");\n/* harmony import */ var _util_rangeSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/rangeSort */ \"./src/util/rangeSort.js\");\n/* harmony import */ var _util_getElementHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/getElementHTML */ \"./src/util/getElementHTML.js\");\n/* harmony import */ var _util_getElementTagLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/getElementTagLength */ \"./src/util/getElementTagLength.js\");\n\n\n\n\n\n\nvar converter = function converter() {\n  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var originalText = arguments.length > 1 ? arguments[1] : undefined;\n  return originalText;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (block, entityMap) {\n  var entityConverter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : converter;\n\n  var resultText = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(block.text);\n\n  var getEntityHTML = entityConverter;\n\n  if (entityConverter.__isMiddleware) {\n    getEntityHTML = entityConverter(converter);\n  }\n\n  if (Object.prototype.hasOwnProperty.call(block, 'entityRanges') && block.entityRanges.length > 0) {\n    var entities = block.entityRanges.sort(_util_rangeSort__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var styles = block.inlineStyleRanges;\n\n    var _loop = function _loop(index) {\n      var entityRange = entities[index];\n      var entity = entityMap[entityRange.key];\n      var originalText = resultText.slice(entityRange.offset, entityRange.offset + entityRange.length).join('');\n      var entityHTML = getEntityHTML(entity, originalText);\n      var elementHTML = Object(_util_getElementHTML__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(entityHTML, originalText);\n      var converted = void 0;\n\n      if (!!elementHTML || elementHTML === '') {\n        converted = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(elementHTML);\n      } else {\n        converted = originalText;\n      }\n\n      var prefixLength = Object(_util_getElementTagLength__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(entityHTML, 'start');\n      var suffixLength = Object(_util_getElementTagLength__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(entityHTML, 'end');\n\n      var updateLaterMutation = function updateLaterMutation(mutation, mutationIndex) {\n        if (mutationIndex > index || Object.prototype.hasOwnProperty.call(mutation, 'style')) {\n          return Object(_util_updateMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mutation, entityRange.offset, entityRange.length, converted.length, prefixLength, suffixLength);\n        }\n\n        return mutation;\n      };\n\n      var updateLaterMutations = function updateLaterMutations(mutationList) {\n        return mutationList.reduce(function (acc, mutation, mutationIndex) {\n          var updatedMutation = updateLaterMutation(mutation, mutationIndex);\n\n          if (Array.isArray(updatedMutation)) {\n            return acc.concat(updatedMutation);\n          }\n\n          return acc.concat([updatedMutation]);\n        }, []);\n      };\n\n      entities = updateLaterMutations(entities);\n      styles = updateLaterMutations(styles);\n      resultText = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(resultText.slice(0, entityRange.offset)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(converted), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(resultText.slice(entityRange.offset + entityRange.length)));\n    };\n\n    for (var index = 0; index < entities.length; index++) {\n      _loop(index);\n    }\n\n    return Object.assign({}, block, {\n      text: resultText.join(''),\n      inlineStyleRanges: styles,\n      entityRanges: entities\n    });\n  }\n\n  return block;\n});\n\n//# sourceURL=webpack://DraftConvert/./src/blockEntities.js?");

/***/ }),

/***/ "./src/blockInlineStyles.js":
/*!**********************************!*\
  !*** ./src/blockInlineStyles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_styleObjectFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/styleObjectFunction */ \"./src/util/styleObjectFunction.js\");\n/* harmony import */ var _util_accumulateFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/accumulateFunction */ \"./src/util/accumulateFunction.js\");\n/* harmony import */ var _util_getElementHTML__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/getElementHTML */ \"./src/util/getElementHTML.js\");\n/* harmony import */ var _util_rangeSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/rangeSort */ \"./src/util/rangeSort.js\");\n/* harmony import */ var _default_defaultInlineHTML__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/defaultInlineHTML */ \"./src/default/defaultInlineHTML.js\");\n\n\n\n\n\n\n\n\nvar subtractStyles = function subtractStyles(original, toRemove) {\n  return original.filter(function (el) {\n    return !toRemove.some(function (elToRemove) {\n      return elToRemove.style === el.style;\n    });\n  });\n};\n\nvar popEndingStyles = function popEndingStyles(styleStack, endingStyles) {\n  return endingStyles.reduceRight(function (stack, style) {\n    var styleToRemove = stack[stack.length - 1];\n    invariant__WEBPACK_IMPORTED_MODULE_1___default()(styleToRemove.style === style.style, \"Style \".concat(styleToRemove.style, \" to be removed doesn't match expected \").concat(style.style));\n    return stack.slice(0, -1);\n  }, styleStack);\n};\n\nvar characterStyles = function characterStyles(offset, ranges) {\n  return ranges.filter(function (range) {\n    return offset >= range.offset && offset < range.offset + range.length;\n  });\n};\n\nvar rangeIsSubset = function rangeIsSubset(firstRange, secondRange) {\n  // returns true if the second range is a subset of the first\n  var secondStartWithinFirst = firstRange.offset <= secondRange.offset;\n  var secondEndWithinFirst = firstRange.offset + firstRange.length >= secondRange.offset + secondRange.length;\n  return secondStartWithinFirst && secondEndWithinFirst;\n};\n\nvar latestStyleLast = function latestStyleLast(s1, s2) {\n  // make sure longer-lasting styles are added first\n  var s2endIndex = s2.offset + s2.length;\n  var s1endIndex = s1.offset + s1.length;\n  return s2endIndex - s1endIndex;\n};\n\nvar getStylesToReset = function getStylesToReset(remainingStyles, newStyles) {\n  var i = 0;\n\n  while (i < remainingStyles.length) {\n    if (newStyles.every(rangeIsSubset.bind(null, remainingStyles[i]))) {\n      i++;\n    } else {\n      return remainingStyles.slice(i);\n    }\n  }\n\n  return [];\n};\n\nvar appendStartMarkup = function appendStartMarkup(inlineHTML, string, styleRange) {\n  return string + Object(_util_getElementHTML__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inlineHTML(styleRange.style)).start;\n};\n\nvar prependEndMarkup = function prependEndMarkup(inlineHTML, string, styleRange) {\n  return Object(_util_getElementHTML__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inlineHTML(styleRange.style)).end + string;\n};\n\nvar defaultCustomInlineHTML = function defaultCustomInlineHTML(next) {\n  return function (style) {\n    return next(style);\n  };\n};\n\ndefaultCustomInlineHTML.__isMiddleware = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (rawBlock) {\n  var customInlineHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCustomInlineHTML;\n  invariant__WEBPACK_IMPORTED_MODULE_1___default()(rawBlock !== null && rawBlock !== undefined, 'Expected raw block to be non-null');\n  var inlineHTML;\n\n  if (customInlineHTML.__isMiddleware === true) {\n    inlineHTML = customInlineHTML(_default_defaultInlineHTML__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  } else {\n    inlineHTML = Object(_util_accumulateFunction__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_util_styleObjectFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(customInlineHTML), Object(_util_styleObjectFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_default_defaultInlineHTML__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n  }\n\n  var result = '';\n  var styleStack = [];\n  var sortedRanges = rawBlock.inlineStyleRanges.sort(_util_rangeSort__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n  var originalTextArray = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rawBlock.text);\n\n  for (var i = 0; i < originalTextArray.length; i++) {\n    var styles = characterStyles(i, sortedRanges);\n    var endingStyles = subtractStyles(styleStack, styles);\n    var newStyles = subtractStyles(styles, styleStack);\n    var remainingStyles = subtractStyles(styleStack, endingStyles); // reset styles: look for any already existing styles that will need to\n    // end before styles that are being added on this character. to solve this\n    // close out those current tags and all nested children,\n    // then open new ones nested within the new styles.\n\n    var resetStyles = getStylesToReset(remainingStyles, newStyles);\n    var openingStyles = resetStyles.concat(newStyles).sort(latestStyleLast);\n    var openingStyleTags = openingStyles.reduce(appendStartMarkup.bind(null, inlineHTML), '');\n    var endingStyleTags = endingStyles.concat(resetStyles).reduce(prependEndMarkup.bind(null, inlineHTML), '');\n    result += endingStyleTags + openingStyleTags + originalTextArray[i];\n    styleStack = popEndingStyles(styleStack, resetStyles.concat(endingStyles));\n    styleStack = styleStack.concat(openingStyles);\n    invariant__WEBPACK_IMPORTED_MODULE_1___default()(styleStack.length === styles.length, \"Character \".concat(i, \": \").concat(styleStack.length - styles.length, \" styles left on stack that should no longer be there\"));\n  }\n\n  result = styleStack.reduceRight(function (res, openStyle) {\n    return res + Object(_util_getElementHTML__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inlineHTML(openStyle.style)).end;\n  }, result);\n  return result;\n});\n\n//# sourceURL=webpack://DraftConvert/./src/blockInlineStyles.js?");

/***/ }),

/***/ "./src/convertToHTML.js":
/*!******************************!*\
  !*** ./src/convertToHTML.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _encodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encodeBlock */ \"./src/encodeBlock.js\");\n/* harmony import */ var _blockEntities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockEntities */ \"./src/blockEntities.js\");\n/* harmony import */ var _blockInlineStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blockInlineStyles */ \"./src/blockInlineStyles.js\");\n/* harmony import */ var _util_accumulateFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/accumulateFunction */ \"./src/util/accumulateFunction.js\");\n/* harmony import */ var _util_blockTypeObjectFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/blockTypeObjectFunction */ \"./src/util/blockTypeObjectFunction.js\");\n/* harmony import */ var _util_getBlockTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/getBlockTags */ \"./src/util/getBlockTags.js\");\n/* harmony import */ var _util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/getNestedBlockTags */ \"./src/util/getNestedBlockTags.js\");\n/* harmony import */ var _default_defaultBlockHTML__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/defaultBlockHTML */ \"./src/default/defaultBlockHTML.js\");\n// import Immutable from 'immutable'; // eslint-disable-line no-unused-vars\n\n\n\n\n\n\n\n\n\n\n\n\nvar defaultEntityToHTML = function defaultEntityToHTML(entity, originalText) {\n  return originalText;\n};\n\nvar convertToHTML = function convertToHTML(_ref) {\n  var _ref$styleToHTML = _ref.styleToHTML,\n      styleToHTML = _ref$styleToHTML === void 0 ? {} : _ref$styleToHTML,\n      _ref$blockToHTML = _ref.blockToHTML,\n      blockToHTML = _ref$blockToHTML === void 0 ? {} : _ref$blockToHTML,\n      _ref$entityToHTML = _ref.entityToHTML,\n      entityToHTML = _ref$entityToHTML === void 0 ? defaultEntityToHTML : _ref$entityToHTML;\n  return function (rawState) {\n    invariant__WEBPACK_IMPORTED_MODULE_0___default()(rawState !== null && rawState !== undefined, 'Expected rawState to be non-null');\n    var getBlockHTML;\n\n    if (blockToHTML.__isMiddleware === true) {\n      getBlockHTML = blockToHTML(Object(_util_blockTypeObjectFunction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_default_defaultBlockHTML__WEBPACK_IMPORTED_MODULE_10__[\"default\"]));\n    } else {\n      getBlockHTML = Object(_util_accumulateFunction__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_util_blockTypeObjectFunction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(blockToHTML), Object(_util_blockTypeObjectFunction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_default_defaultBlockHTML__WEBPACK_IMPORTED_MODULE_10__[\"default\"]));\n    }\n\n    var listStack = [];\n    var result = rawState.blocks.map(function (block) {\n      var type = block.type,\n          depth = block.depth;\n      var closeNestTags = '';\n      var openNestTags = '';\n      var blockHTMLResult = getBlockHTML(block);\n\n      if (!blockHTMLResult) {\n        throw new Error(\"convertToHTML: missing HTML definition for block with type \".concat(block.type));\n      }\n\n      if (!blockHTMLResult.nest) {\n        // this block can't be nested, so reset all nesting if necessary\n        closeNestTags = listStack.reduceRight(function (string, nestedBlock) {\n          return string + Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(nestedBlock), depth).nestEnd;\n        }, '');\n        listStack = [];\n      } else {\n        while (depth + 1 !== listStack.length || type !== listStack[depth].type) {\n          if (depth + 1 === listStack.length) {\n            // depth is right but doesn't match type\n            var blockToClose = listStack[depth];\n            closeNestTags += Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(blockToClose), depth).nestEnd;\n            openNestTags += Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(block), depth).nestStart;\n            listStack[depth] = block;\n          } else if (depth + 1 < listStack.length) {\n            var _blockToClose = listStack[listStack.length - 1];\n            closeNestTags += Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(_blockToClose), depth).nestEnd;\n            listStack = listStack.slice(0, -1);\n          } else {\n            openNestTags += Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(block), depth).nestStart;\n            listStack.push(block);\n          }\n        }\n      }\n\n      var innerHTML = Object(_blockInlineStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_blockEntities__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_encodeBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(block), rawState.entityMap, entityToHTML), styleToHTML);\n      var blockHTML = Object(_util_getBlockTags__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(getBlockHTML(block));\n      var html;\n\n      if (typeof blockHTML === 'string') {\n        html = blockHTML;\n      } else {\n        html = blockHTML.start + innerHTML + blockHTML.end;\n      }\n\n      if (innerHTML.length === 0 && Object.prototype.hasOwnProperty.call(blockHTML, 'empty')) {\n        if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(blockHTML.empty)) {\n          html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(blockHTML.empty);\n        } else {\n          html = blockHTML.empty;\n        }\n      }\n\n      return closeNestTags + openNestTags + html;\n    }).join('');\n    result = listStack.reduce(function (res, nestBlock) {\n      return res + Object(_util_getNestedBlockTags__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(getBlockHTML(nestBlock), nestBlock.depth).nestEnd;\n    }, result);\n    return result;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  if (args.length === 1 && Object.prototype.hasOwnProperty.call(args[0], '_map') && args[0].getBlockMap != null) {\n    // skip higher-order function and use defaults\n    return convertToHTML({}).apply(void 0, args);\n  }\n\n  return convertToHTML.apply(void 0, args);\n});\n\n//# sourceURL=webpack://DraftConvert/./src/convertToHTML.js?");

/***/ }),

/***/ "./src/default/defaultBlockHTML.js":
/*!*****************************************!*\
  !*** ./src/default/defaultBlockHTML.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // based on Draft.js' custom list depth styling\n\nvar ORDERED_LIST_TYPES = ['1', 'a', 'i'];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  unstyled: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null),\n  paragraph: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null),\n  'header-one': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null),\n  'header-two': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null),\n  'header-three': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null),\n  'header-four': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null),\n  'header-five': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null),\n  'header-six': react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null),\n  blockquote: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", null),\n  'unordered-list-item': {\n    element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null),\n    nest: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null)\n  },\n  'ordered-list-item': {\n    element: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null),\n    nest: function nest(depth) {\n      var type = ORDERED_LIST_TYPES[depth % 3];\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", {\n        type: type\n      });\n    }\n  },\n  media: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null),\n  atomic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null)\n});\n\n//# sourceURL=webpack://DraftConvert/./src/default/defaultBlockHTML.js?");

/***/ }),

/***/ "./src/default/defaultInlineHTML.js":
/*!******************************************!*\
  !*** ./src/default/defaultInlineHTML.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defaultInlineHTML; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction defaultInlineHTML(style) {\n  switch (style) {\n    case 'BOLD':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null);\n\n    case 'ITALIC':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null);\n\n    case 'UNDERLINE':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"u\", null);\n\n    case 'CODE':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null);\n\n    default:\n      return {\n        start: '',\n        end: ''\n      };\n  }\n}\n\n//# sourceURL=webpack://DraftConvert/./src/default/defaultInlineHTML.js?");

/***/ }),

/***/ "./src/encodeBlock.js":
/*!****************************!*\
  !*** ./src/encodeBlock.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_updateMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/updateMutation */ \"./src/util/updateMutation.js\");\n/* harmony import */ var _util_rangeSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/rangeSort */ \"./src/util/rangeSort.js\");\n\n\n\nvar ENTITY_MAP = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#x27;',\n  '`': '&#x60;',\n  '\\n': '<br/>'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (block) {\n  var blockText = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(block.text);\n\n  var entities = block.entityRanges.sort(_util_rangeSort__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  var styles = block.inlineStyleRanges.sort(_util_rangeSort__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  var resultText = '';\n\n  var _loop = function _loop(index) {\n    var _char = blockText[index];\n\n    if (ENTITY_MAP[_char] !== undefined) {\n      var encoded = ENTITY_MAP[_char];\n\n      var resultIndex = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(resultText).length;\n\n      resultText += encoded;\n\n      var updateForChar = function updateForChar(mutation) {\n        return Object(_util_updateMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mutation, resultIndex, _char.length, encoded.length, 0, 0);\n      };\n\n      entities = entities.map(updateForChar);\n      styles = styles.map(updateForChar);\n    } else {\n      resultText += _char;\n    }\n  };\n\n  for (var index = 0; index < blockText.length; index++) {\n    _loop(index);\n  }\n\n  return Object.assign({}, block, {\n    text: resultText,\n    inlineStyleRanges: styles,\n    entityRanges: entities\n  });\n});\n\n//# sourceURL=webpack://DraftConvert/./src/encodeBlock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: convertToHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convertToHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToHTML */ \"./src/convertToHTML.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"convertToHTML\", function() { return _convertToHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://DraftConvert/./src/index.js?");

/***/ }),

/***/ "./src/util/accumulateFunction.js":
/*!****************************************!*\
  !*** ./src/util/accumulateFunction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (newFn, rest) {\n  return function () {\n    var newResult = newFn.apply(void 0, arguments);\n\n    if (newResult !== undefined && newResult !== null) {\n      return newResult;\n    }\n\n    return rest.apply(void 0, arguments);\n  };\n});\n\n//# sourceURL=webpack://DraftConvert/./src/util/accumulateFunction.js?");

/***/ }),

/***/ "./src/util/blockTypeObjectFunction.js":
/*!*********************************************!*\
  !*** ./src/util/blockTypeObjectFunction.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (typeObject) {\n  return function (block) {\n    if (typeof typeObject === 'function') {\n      // handle case where typeObject is already a function\n      return typeObject(block);\n    }\n\n    return typeObject[block.type];\n  };\n});\n\n//# sourceURL=webpack://DraftConvert/./src/util/blockTypeObjectFunction.js?");

/***/ }),

/***/ "./src/util/getBlockTags.js":
/*!**********************************!*\
  !*** ./src/util/getBlockTags.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getBlockTags; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _splitReactElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitReactElement */ \"./src/util/splitReactElement.js\");\n\n\n\n\n\nfunction hasChildren(element) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(element) && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(element.props.children) > 0;\n}\n\nfunction getBlockTags(blockHTML) {\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');\n\n  if (typeof blockHTML === 'string') {\n    return blockHTML;\n  }\n\n  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(blockHTML)) {\n    if (hasChildren(blockHTML)) {\n      return react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(blockHTML);\n    }\n\n    return Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(blockHTML);\n  }\n\n  if (Object.prototype.hasOwnProperty.call(blockHTML, 'element') && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(blockHTML.element)) {\n    return Object.assign({}, blockHTML, Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(blockHTML.element));\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object.prototype.hasOwnProperty.call(blockHTML, 'start') && Object.prototype.hasOwnProperty.call(blockHTML, 'end'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');\n  return blockHTML;\n}\n\n//# sourceURL=webpack://DraftConvert/./src/util/getBlockTags.js?");

/***/ }),

/***/ "./src/util/getElementHTML.js":
/*!************************************!*\
  !*** ./src/util/getElementHTML.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getElementHTML; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _splitReactElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splitReactElement */ \"./src/util/splitReactElement.js\");\n\n\n\n\n\n\nfunction hasChildren(element) {\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(element) && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(element.props.children) > 0;\n}\n\nfunction getElementHTML(element) {\n  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (element === undefined || element === null) {\n    return element;\n  }\n\n  if (typeof element === 'string') {\n    return element;\n  }\n\n  if (react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(element)) {\n    if (hasChildren(element)) {\n      return react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToStaticMarkup(element);\n    }\n\n    var tags = Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element);\n\n    if (text !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(tags) === 'object') {\n      var start = tags.start,\n          end = tags.end;\n      return start + text + end;\n    }\n\n    return tags;\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_1___default()(Object.prototype.hasOwnProperty.call(element, 'start') && Object.prototype.hasOwnProperty.call(element, 'end'), 'convertToHTML: received conversion data without either an HTML string, ReactElement or an object with start/end tags');\n\n  if (text !== null) {\n    var _start = element.start,\n        _end = element.end;\n    return _start + text + _end;\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://DraftConvert/./src/util/getElementHTML.js?");

/***/ }),

/***/ "./src/util/getElementTagLength.js":
/*!*****************************************!*\
  !*** ./src/util/getElementTagLength.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _splitReactElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitReactElement */ \"./src/util/splitReactElement.js\");\n\n\n\n\nvar getElementTagLength = function getElementTagLength(element) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';\n\n  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(element)) {\n    var splitElement = Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element);\n\n    if (typeof splitElement === 'string') {\n      return 0;\n    }\n\n    var length = splitElement[type].length;\n    var child = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(element.props.children)[0];\n    return length + (child && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child) ? getElementTagLength(child, type) : 0);\n  }\n\n  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(element) === 'object') {\n    return element[type] ? element[type].length : 0;\n  }\n\n  return 0;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getElementTagLength);\n\n//# sourceURL=webpack://DraftConvert/./src/util/getElementTagLength.js?");

/***/ }),

/***/ "./src/util/getNestedBlockTags.js":
/*!****************************************!*\
  !*** ./src/util/getNestedBlockTags.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getNestedBlockTags; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _splitReactElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitReactElement */ \"./src/util/splitReactElement.js\");\n\n\n\nfunction getNestedBlockTags(blockHTML, depth) {\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');\n\n  if (typeof blockHTML.nest === 'function') {\n    var _splitReactElement = Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(blockHTML.nest(depth)),\n        start = _splitReactElement.start,\n        end = _splitReactElement.end;\n\n    return Object.assign({}, blockHTML, {\n      nestStart: start,\n      nestEnd: end\n    });\n  }\n\n  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(blockHTML.nest)) {\n    var _splitReactElement2 = Object(_splitReactElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(blockHTML.nest),\n        _start = _splitReactElement2.start,\n        _end = _splitReactElement2.end;\n\n    return Object.assign({}, blockHTML, {\n      nestStart: _start,\n      nestEnd: _end\n    });\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object.prototype.hasOwnProperty.call(blockHTML, 'nestStart') && Object.prototype.hasOwnProperty.call(blockHTML, 'nestEnd'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');\n  return blockHTML;\n}\n\n//# sourceURL=webpack://DraftConvert/./src/util/getNestedBlockTags.js?");

/***/ }),

/***/ "./src/util/rangeSort.js":
/*!*******************************!*\
  !*** ./src/util/rangeSort.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (r1, r2) {\n  if (r1.offset === r2.offset) {\n    return r2.length - r1.length;\n  }\n\n  return r1.offset - r2.offset;\n});\n\n//# sourceURL=webpack://DraftConvert/./src/util/rangeSort.js?");

/***/ }),

/***/ "./src/util/splitReactElement.js":
/*!***************************************!*\
  !*** ./src/util/splitReactElement.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return splitReactElement; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // see http://w3c.github.io/html/syntax.html#writing-html-documents-elements\n\nvar VOID_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];\nfunction splitReactElement(element) {\n  if (VOID_TAGS.indexOf(element.type) !== -1) {\n    return react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(element);\n  }\n\n  var tags = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {}, '\\r')).split('\\r');\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(tags.length > 1, \"convertToHTML: Element of type \".concat(element.type, \" must render children\"));\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(tags.length < 3, \"convertToHTML: Element of type \".concat(element.type, \" cannot use carriage return character\"));\n  return {\n    start: tags[0],\n    end: tags[1]\n  };\n}\n\n//# sourceURL=webpack://DraftConvert/./src/util/splitReactElement.js?");

/***/ }),

/***/ "./src/util/styleObjectFunction.js":
/*!*****************************************!*\
  !*** ./src/util/styleObjectFunction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (object) {\n  return function (style) {\n    if (typeof object === 'function') {\n      return object(style);\n    }\n\n    return object[style];\n  };\n});\n\n//# sourceURL=webpack://DraftConvert/./src/util/styleObjectFunction.js?");

/***/ }),

/***/ "./src/util/updateMutation.js":
/*!************************************!*\
  !*** ./src/util/updateMutation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateMutation; });\nfunction updateMutation(mutation, originalOffset, originalLength, newLength, prefixLength, suffixLength) {\n  // three cases we can reasonably adjust - disjoint mutations that\n  // happen later on where the offset will need to be changed,\n  // mutations that completely contain the new one where we can adjust\n  // the length, and mutations that occur partially within the new one.\n  var lengthDiff = newLength - originalLength;\n  var mutationAfterChange = originalOffset + originalLength <= mutation.offset;\n\n  if (mutationAfterChange) {\n    return Object.assign({}, mutation, {\n      offset: mutation.offset + lengthDiff\n    });\n  }\n\n  var mutationContainsChange = originalOffset >= mutation.offset && originalOffset + originalLength <= mutation.offset + mutation.length;\n\n  if (mutationContainsChange) {\n    return Object.assign({}, mutation, {\n      length: mutation.length + lengthDiff\n    });\n  }\n\n  var mutationWithinPrefixChange = mutation.offset >= originalOffset && mutation.offset + mutation.length <= originalOffset + originalLength && prefixLength > 0;\n\n  if (mutationWithinPrefixChange) {\n    return Object.assign({}, mutation, {\n      offset: mutation.offset + prefixLength\n    });\n  }\n\n  var mutationContainsPrefix = mutation.offset < originalOffset && mutation.offset + mutation.length <= originalOffset + originalLength && mutation.offset + mutation.length > originalOffset && prefixLength > 0;\n\n  if (mutationContainsPrefix) {\n    return [Object.assign({}, mutation, {\n      length: originalOffset - mutation.offset\n    }), Object.assign({}, mutation, {\n      offset: originalOffset + prefixLength,\n      length: mutation.offset - originalOffset + mutation.length\n    })];\n  }\n\n  var mutationContainsSuffix = mutation.offset >= originalOffset && mutation.offset + mutation.length > originalOffset + originalLength && originalOffset + originalLength > mutation.offset && suffixLength > 0;\n\n  if (mutationContainsSuffix) {\n    return [Object.assign({}, mutation, {\n      offset: mutation.offset + prefixLength,\n      length: originalOffset + originalLength - mutation.offset\n    }), Object.assign({}, mutation, {\n      offset: originalOffset + originalLength + prefixLength + suffixLength,\n      length: mutation.offset + mutation.length - (originalOffset + originalLength)\n    })];\n  }\n\n  return mutation;\n}\n\n//# sourceURL=webpack://DraftConvert/./src/util/updateMutation.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://DraftConvert/external_%22React%22?");

/***/ }),

/***/ "react-dom/server":
/*!*********************************!*\
  !*** external "ReactDOMServer" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack://DraftConvert/external_%22ReactDOMServer%22?");

/***/ })

/******/ });
});