/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Color */\r\n:root {\r\n  --primary-color: rgba(137, 43, 226, 0.322);\r\n  --secondary-color: rgba(137, 43, 226, 0.555);\r\n  --tertiary-color: rgba(137, 43, 226, 0.747);\r\n  --quaternary-color: #fff;\r\n}\r\n\r\n/* CSS Reset */\r\nbody {\r\n  margin: 0;\r\n  font-size: 25px;\r\n  background-color: var(--primary-color);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* Navigation Bar */\r\n.nav__bar {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px;\r\n  height: 60px;\r\n  font-weight: bold;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n/* Layout */\r\n.outer__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 650px;\r\n}\r\n\r\n.container__width {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 1200px;\r\n}\r\n\r\n.container__center__counter {\r\n  margin: auto;\r\n  padding: 10px;\r\n  width: 30%;\r\n  margin-right: 20px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  background-color: var(--quaternary-color);\r\n}\r\n\r\n.container__center__message {\r\n  margin: auto;\r\n  width: 70%;\r\n  padding: 15px;\r\n  border-radius: 5px;\r\n  font-size: 25px;\r\n  background-color: var(--quaternary-color);\r\n}\r\n\r\n/* Counter */\r\n.counter__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.counter__message__container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.minus__click__btn,\r\n.plus__click__btn {\r\n  width: 30px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: var(--tertiary-color);\r\n}\r\n\r\n.minus__click__btn:hover,\r\n.plus__click__btn:hover {\r\n  opacity: 70%;\r\n}\r\n\r\n.container__total {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  color: var(--tertiary-color);\r\n}\r\n\r\n.container__reset__clear__btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.container__reset__btn,\r\n.container__clear__btn {\r\n  padding: 5px;\r\n  width: 100px;\r\n  margin: 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--tertiary-color);\r\n}\r\n\r\n.container__reset__btn:hover,\r\n.container__clear__btn:hover {\r\n  opacity: 80%;\r\n}\r\n\r\n/* Message */\r\n.container__message__content {\r\n  overflow-y: auto;\r\n  height: 500px;\r\n}\r\n\r\n.container__message__content::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.container__message__content::-webkit-scrollbar-track {\r\n  background: var(--quaternary-color);\r\n}\r\n\r\n.container__message__content::-webkit-scrollbar-thumb {\r\n  background: var(--secondary-color);\r\n  border-radius: 10px;\r\n}\r\n\r\n.message__content__container {\r\n  display: flex;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius: 5px;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.message__content__text {\r\n  width: 90%;\r\n}\r\n\r\n.message__content__copy__btn__container {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  width: 10%;\r\n}\r\n\r\n.message__content__copy__btn {\r\n  padding: 5px;\r\n  width: 50px;\r\n  height: 20px;\r\n  margin-left: 15px;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--tertiary-color);\r\n}\r\n\r\n.message__content__copy__btn:hover {\r\n  opacity: 80%;\r\n}\r\n\r\n/* Footer */\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  height: 159px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: var(--quaternary-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/css-loader/dist/runtime/api.js?");
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
  /*!**************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
    \**************************************************************/
  /***/ ((module) => {
  
  eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/style.css?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-for-typescript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
  
  /***/ }),
  
  /***/ "./src/classes/counterClass.ts":
  /*!*************************************!*\
    !*** ./src/classes/counterClass.ts ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Counter: () => (/* binding */ Counter)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\nclass Counter {\n    constructor(container, user, index) {\n        this.container = container;\n        this.user = user;\n        this.index = index;\n    }\n    render() {\n        this.container.innerHTML += `\r\n      <div class=\"counter__container\">\r\n        <div>${this.user.name}</div>\r\n\r\n        <div class=\"counter__message__container\">\r\n          <div class=\"minus__click__btn\" onclick=\"users[${this.index}].handleMinusClick(${this.index})\">-</div>\r\n          <div id=\"id_${this.index}\">${localStorage.getItem(this.user.name) || 0}</div>\r\n          <div class=\"plus__click__btn\" onclick=\"users[${this.index}].handlePlusClick(${this.index})\">+</div>\r\n        </div>\r\n      </div>\r\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/classes/counterClass.ts?");
  
  /***/ }),
  
  /***/ "./src/classes/messageClass.ts":
  /*!*************************************!*\
    !*** ./src/classes/messageClass.ts ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Messages: () => (/* binding */ Messages)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass Messages {\n    constructor(content) {\n        this.content = content;\n    }\n    copyReply() {\n        return __awaiter(this, void 0, void 0, function* () {\n            // const firstCopyData = await navigator.clipboard.readText();\n            // if (firstCopyData === '') {\n            //   const secondCopyData = this.content;\n            //   await navigator.clipboard.writeText(secondCopyData);\n            //   return;\n            // }\n            // const secondCopyData = `${firstCopyData} ${firstCopyData.split(',')[0]}, ${\n            //   this.content\n            // }`;\n            // await navigator.clipboard.writeText(secondCopyData);\n            const secondCopyData = this.content;\n            yield navigator.clipboard.writeText(secondCopyData);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/classes/messageClass.ts?");
  
  /***/ }),
  
  /***/ "./src/classes/messageContentClass.ts":
  /*!********************************************!*\
    !*** ./src/classes/messageContentClass.ts ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageContentClass: () => (/* binding */ MessageContentClass)\n/* harmony export */ });\nclass MessageContentClass {\n    constructor(messageContainer, message, index) {\n        this.messageContainer = messageContainer;\n        this.message = message;\n        this.index = index;\n    }\n    render() {\n        this.messageContainer.innerHTML += `\r\n      <div class=\"message__content__container\">\r\n        <div class=\"message__content__text\">${this.message.content}</div>\r\n        <div class=\"message__content__copy__btn__container\">\r\n          <div class=\"message__content__copy__btn\" onclick=\"messages[${this.index}].copyReply()\">Copy</div>\r\n        </div>\r\n      </div>\r\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/classes/messageContentClass.ts?");
  
  /***/ }),
  
  /***/ "./src/classes/userClass.ts":
  /*!**********************************!*\
    !*** ./src/classes/userClass.ts ***!
    \**********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _states_userState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/userState */ \"./src/states/userState.ts\");\n/* harmony import */ var _data_reply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/reply */ \"./src/data/reply.ts\");\n\n\nlet total = (0,_states_userState__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nclass User {\n    constructor(name) {\n        this.name = name;\n        const getCount = Number(localStorage.getItem(this.name));\n        this.count = getCount;\n    }\n    handlePlusClick(id) {\n        this.count++;\n        total += 1;\n        this.calTotal(id);\n        // this.copyReply();\n    }\n    handleMinusClick(id) {\n        if (this.count === 0) {\n            this.count = 0;\n        }\n        else {\n            this.count--;\n            total -= 1;\n            this.calTotal(id);\n        }\n        // this.copyReply();\n    }\n    calTotal(id) {\n        // Update individual count\n        const countContent = document.querySelector(`#id_${id}`);\n        countContent.textContent = this.count.toString();\n        localStorage.setItem(this.name, countContent.textContent);\n        // Update total amount\n        const totalContainer = document.querySelector('#totalContainer');\n        totalContainer.textContent = `Total: HK$${total.toString()}`;\n        localStorage.setItem('total', total.toString());\n    }\n    reset(users) {\n        // Reset all counts\n        users.forEach((user, index) => {\n            const countContent = document.querySelector(`#id_${index}`);\n            countContent.textContent = '0';\n            localStorage.setItem(user.name, '0');\n            user.count = 0;\n        });\n        // Reset total\n        const totalContainer = document.querySelector('#totalContainer');\n        totalContainer.textContent = 'Total: HK$0';\n        localStorage.setItem('total', '0');\n        total = 0;\n    }\n    copyReply() {\n        const replies = (0,_data_reply__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const copyContent = `${this.name}, ${replies[this.count]}`;\n        navigator.clipboard.writeText(copyContent);\n    }\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/classes/userClass.ts?");
  
  /***/ }),
  
  /***/ "./src/data/message.ts":
  /*!*****************************!*\
    !*** ./src/data/message.ts ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ message)\n/* harmony export */ });\nfunction message() {\n    const contentList = [\n        {\n            content: 'Milk is a staple in many households and is commonly found in the dairy section of the supermarket. It is available in various forms, such as whole milk, skim milk, and lactose-free milk.',\n        },\n        {\n            content: 'Bread is a basic food item that is widely consumed. It is typically located in the bakery section and comes in different varieties, including white, whole wheat, and multigrain.',\n        },\n        {\n            content: 'Eggs are a versatile ingredient used in many recipes and are often found in the refrigerated section of the supermarket. They are a common breakfast food and are available in different sizes.',\n        },\n        {\n            content: 'Supermarkets typically have a dedicated section for fresh produce, offering a variety of fruits and vegetables. The selection may vary based on seasonal availability.',\n        },\n        {\n            content: 'Cereal is a popular breakfast option for many people. It is usually located in the breakfast aisle and comes in different flavors and types, such as flakes, granola, and oatmeal.',\n        },\n        {\n            content: 'Pasta is a pantry staple that is widely used in various dishes. It can be found in the pasta aisle and is available in different shapes, such as spaghetti, penne, and macaroni.',\n        },\n        {\n            content: 'Bottled water is a commonly purchased item, especially for those on the go or looking for a convenient source of hydration. It is typically available in the beverage aisle and comes in various sizes.',\n        },\n    ];\n    return contentList;\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/data/message.ts?");
  
  /***/ }),
  
  /***/ "./src/data/reply.ts":
  /*!***************************!*\
    !*** ./src/data/reply.ts ***!
    \***************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reply)\n/* harmony export */ });\nfunction reply() {\n    const replies = {\n        1: '',\n    };\n    return replies;\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/data/reply.ts?");
  
  /***/ }),
  
  /***/ "./src/data/user.ts":
  /*!**************************!*\
    !*** ./src/data/user.ts ***!
    \**************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ user)\n/* harmony export */ });\nfunction user() {\n    const userList = [\n        { name: 'Milk' },\n        { name: 'Bread' },\n        { name: 'Eggs' },\n        { name: 'Fruits' },\n        { name: 'Cereal' },\n        { name: 'Pasta' },\n        { name: 'Water' },\n    ];\n    return userList;\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/data/user.ts?");
  
  /***/ }),
  
  /***/ "./src/index.ts":
  /*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_userClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/userClass */ \"./src/classes/userClass.ts\");\n/* harmony import */ var _classes_messageClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/messageClass */ \"./src/classes/messageClass.ts\");\n/* harmony import */ var _classes_messageContentClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/messageContentClass */ \"./src/classes/messageContentClass.ts\");\n/* harmony import */ var _classes_counterClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/counterClass */ \"./src/classes/counterClass.ts\");\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/user */ \"./src/data/user.ts\");\n/* harmony import */ var _data_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/message */ \"./src/data/message.ts\");\n\n\n\n\n\n\n// User object\nconst users = [];\nwindow.users = users;\nconst userList = (0,_data_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nuserList.forEach((user) => {\n    users.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User(user.name));\n});\n// HTML DOM\nusers.forEach((user, index) => {\n    const container = document.querySelector('#container');\n    const counter = new _classes_counterClass__WEBPACK_IMPORTED_MODULE_3__.Counter(container, user, index);\n    counter.render();\n});\n// Reset all\nconst reset = document.querySelector('#reset');\nreset.addEventListener('click', () => {\n    const user = new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User();\n    user.reset(users);\n});\n// Clear copied content\nconst clear = document.querySelector('#clear');\nclear.addEventListener('click', () => {\n    navigator.clipboard.writeText('');\n});\n// Messages object\nconst messages = [];\nwindow.messages = messages;\nconst messageList = (0,_data_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nmessageList.forEach((message) => {\n    messages.push(new _classes_messageClass__WEBPACK_IMPORTED_MODULE_1__.Messages(message.content));\n});\n// HTML DOM\nmessages.forEach((message, index) => {\n    const messageContainer = document.querySelector('#messageContainer');\n    const messageContentClass = new _classes_messageContentClass__WEBPACK_IMPORTED_MODULE_2__.MessageContentClass(messageContainer, message, index);\n    messageContentClass.render();\n});\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/index.ts?");
  
  /***/ }),
  
  /***/ "./src/states/userState.ts":
  /*!*********************************!*\
    !*** ./src/states/userState.ts ***!
    \*********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userState)\n/* harmony export */ });\nfunction userState() {\n    let total = Number(localStorage.getItem('total'));\n    const totalContainer = document.querySelector('#totalContainer');\n    totalContainer.textContent = `Total: HK$${localStorage.getItem('total') || 0}`;\n    return total;\n}\n\n\n//# sourceURL=webpack://webpack-for-typescript/./src/states/userState.ts?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/nonce */
  /******/ 	(() => {
  /******/ 		__webpack_require__.nc = undefined;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/ 	
  /******/ })()
  ;