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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@layer reset {\r\n    *, *::before, *::after {\r\n      box-sizing: border-box;\r\n    }\r\n  \r\n    * {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n  \r\n    body {\r\n      line-height: 1.5;\r\n    }\r\n  \r\n    img, picture, video, canvas, svg {\r\n      display: block;\r\n      max-inline-size: 100%;\r\n    }\r\n  \r\n    input, button, textarea, select {\r\n      font: inherit;\r\n      letter-spacing: inherit;\r\n      word-spacing: inherit;\r\n      color: currentColor;\r\n    }\r\n  \r\n    p, h1, h2, h3, h4, h5, h6 {\r\n      overflow-wrap: break-word;\r\n    }\r\n  \r\n    ol, ul {\r\n      list-style: none;\r\n    }\r\n  \r\n    :not([class]) {\r\n      h1&, h2&, h3&, h4&, h5&, h6& {\r\n        margin-block: 0.75em;\r\n        line-height: 1.25;\r\n        text-wrap: balance;\r\n        letter-spacing: -0.05ch;\r\n      }\r\n  \r\n      p&, ol&, ul& {\r\n        margin-block: 1em;\r\n      }\r\n  \r\n      ol&, ul& {\r\n        padding-inline-start: 1.5em;\r\n        list-style: revert;\r\n      }\r\n  \r\n      li& {\r\n        margin-block: 0.5em;\r\n      }\r\n    }\r\n  }\r\n\r\n  :root {\r\n    /* Colores de Fondo */\r\n    --header-bg: #A8C3B4; /* Verde Salvia */\r\n    --footer-bg: #7D9DAC; /* Azul Grisáceo */\r\n    --main-bg: #FAF8F3; /* Blanco Cálido */\r\n    --aside-bg: #D6C1E1; /* Lila Lavanda */\r\n    --spotify-player-bg: #D6C1E1; /* Lila Lavanda */\r\n\r\n    /* Colores de Texto */\r\n    --text-primary: #4A4A4A; /* Gris Profundo */\r\n    --text-secondary: #7D9DAC; /* Azul Grisáceo */\r\n    --text-on-light: #FAF8F3; /* Blanco Cálido para contraste en fondos oscuros */\r\n\r\n    /* Botones */\r\n    --button-bg: #A8C3B4; /* Verde Salvia */\r\n    --button-text: #FAF8F3; /* Blanco Cálido */\r\n    --button-hover-bg: #91B19C; /* Verde Salvia más oscuro */\r\n\r\n\r\n    --action-button-bg: #E6B566; /* Mostaza Suave */\r\n    --action-button-text: #FAF8F3; /* Blanco Cálido */\r\n    --action-button-hover-bg: #D4A157; /* Mostaza Suave más oscuro */\r\n\r\n    /* Otros Colores */\r\n    --border-color: #E3E3E3; /* Gris Claro */\r\n    --shadow-color: rgba(0, 0, 0, 0.1); /* Sombra suave */\r\n\r\n    /*fuente*/\r\n    --font-primary: 'Poppins', sans-serif; /* Fuente principal para texto */\r\n\r\n\r\n    /* Sección Pomodoro Timer */\r\n    --pomodoro-bg: #F4E6D4; /* Beige pastel cálido */\r\n    --pomodoro-text: #4A4A4A; /* Gris profundo */\r\n\r\n    /* Botones Pomodoro Timer */\r\n    --pomodoro-start-bg: #A8C3B4; /* Verde Salvia */\r\n    --pomodoro-start-text: #FAF8F3; /* Blanco Cálido */\r\n    --pomodoro-start-hover: #91B19C; /* Verde Salvia oscuro */\r\n\r\n    --pomodoro-pause-bg: #D6C1E1; /* Lila Lavanda */\r\n    --pomodoro-pause-text: #4A4A4A; /* Gris profundo */\r\n    --pomodoro-pause-hover: #C3A8D4; /* Lavanda más oscuro */\r\n\r\n    --pomodoro-reset-bg: #E6B566; /* Mostaza Suave */\r\n    --pomodoro-reset-text: #FAF8F3; /* Blanco Cálido */\r\n    --pomodoro-reset-hover: #D4A157; /* Mostaza más oscuro */\r\n}\r\n\r\nbody{\r\n    background-color: var(--principal-BackgrounClr);\r\n    display: grid;\r\n    min-height: 100vh;\r\n    grid-template-columns: minmax(10rem, 14rem) 2fr;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-areas: \r\n    \"header header\"\r\n    \"aside main\"\r\n    \"footer footer\";\r\n    font-family: var(--font-primary);\r\n    font-size: 16px;\r\n}\r\n\r\n#header{\r\n    background-color: var(--header-bg);\r\n    grid-area: header;\r\n    padding: .6rem;\r\n    \r\n    color: var(--text-primary);\r\n  \r\n    \r\n    & .header-title{\r\n      font-size: clamp(1rem, 5vw, 2.4rem);\r\n      text-align: center;\r\n    }\r\n}\r\n#main{\r\n    background-color: var(--pomodoro-bg);\r\n    grid-area: main;\r\n    \r\n\r\n    & div{\r\n      width: 5rem;\r\n      height: 5rem;\r\n      background-color: #a0bea1;\r\n    }\r\n\r\n    & #main-todos-section{\r\n      display: grid;\r\n      grid-template-columns:minmax(20rem, 35rem);\r\n      justify-content: center;\r\n      gap: .6rem;\r\n      margin: .6rem;\r\n      grid-auto-flow: dense;\r\n    }\r\n    & #main-todos-section>div{\r\n      min-width: 100%;\r\n      border-radius: 1rem;\r\n      padding: 1rem;\r\n      \r\n    }\r\n}\r\n\r\n#aside{\r\n    background-color: var(--aside-bg);\r\n    grid-area: aside;\r\n    color: var(--text-primary);\r\n\r\n    & .project-title-icon-container{\r\n      display: flex;\r\n      justify-content: center;\r\n      gap: 1rem;\r\n    }\r\n    & .title-project{\r\n      text-align: center;\r\n      font-size: clamp(1rem, 3.2vw, 1.7rem);\r\n    }\r\n\r\n    & .add-project{\r\n      border: none;\r\n      background-color: transparent;\r\n    }\r\n\r\n    & .list-projects{\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      \r\n\r\n    }\r\n    & .project-name-input{\r\n      outline: none;\r\n      border: none;\r\n      background-color: var(--aside-bg);\r\n      max-width: 80%;\r\n      padding: 2px 10px;\r\n      margin: 5px 5px;\r\n  \r\n\r\n    }\r\n    & .project-name-input:focus{\r\n      outline: none;\r\n      border-bottom: 1px solid black;\r\n      \r\n\r\n    }\r\n    & .list-projects>li{\r\n      text-align: center;\r\n      font-size: clamp(.6rem, 2.5vw, 1rem);\r\n      padding: 8px;\r\n     \r\n    }\r\n    & .list-projects>li:focus{\r\n      background-color: black;\r\n     \r\n    }\r\n\r\n    & .list-projects>.selected{\r\n      background-color: #ad96b9a8;\r\n      border-radius: 10px;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n.pomodoro-timer {\r\n  text-align: center;\r\n  background: var(--pomodoro-bg);\r\n  padding: 1rem;\r\n\r\n\r\n  color: var(--text-primary);\r\n  \r\n  \r\n}\r\n& button{\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: clamp(.3rem, 1.3vw, 1.6rem);\r\n  padding: 5px;\r\n\r\n}\r\n& #start{\r\n  background-color: var(--pomodoro-start-bg);\r\n  color: var(--pomodoro-start-text);\r\n  \r\n}\r\n\r\n& #reset{\r\n  background-color: var(--pomodoro-reset-bg);\r\n  color: var(--pomodoro-reset-text);\r\n}\r\n\r\n& #pause{\r\n  background-color: var(--pomodoro-pause-bg);\r\n  color: var(--pomodoro-reset-text);\r\n}\r\n\r\n\r\n& .break {\r\n  background-color: #66bb7a; \r\n  color: white;\r\n}\r\n\r\n& .pomodoro {\r\n  background-color: #5ba1ec; \r\n  color: white;\r\n}\r\n\r\n#timer {\r\n  font-size: clamp(1rem, 3vw, 3rem);\r\n  margin: 1rem 0;\r\n}\r\n\r\n\r\n#footer{\r\n  background-color: var(--footer-bg);\r\n  grid-area: footer;\r\n  padding: .6rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n#project-item-container{\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-the-odin-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectDOM: () => (/* binding */ addProjectDOM)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\n\r\n\r\nconst UIlistProjects = document.querySelector(\".list-projects\");\r\n\r\nfunction addProjectDOM(){\r\n// Verificar si ya existe un input\r\nlet projectNameInput = document.querySelector(\".project-name-input\");\r\n\r\nif (!projectNameInput) {\r\n    // Crear un nuevo input si no existe\r\n    projectNameInput = document.createElement(\"input\");\r\n    projectNameInput.setAttribute(\"type\", \"text\");\r\n    projectNameInput.classList.add(\"project-name-input\");\r\n    projectNameInput.setAttribute(\"placeholder\", \"Enter project name\");\r\n    UIlistProjects.insertAdjacentElement(\"beforebegin\", projectNameInput);\r\n\r\n    // Escuchar el evento \"Enter\" en el input\r\n    projectNameInput.addEventListener(\"keydown\", (e) => {\r\n        if (e.key === \"Enter\" && projectNameInput.value.trim() !== \"\") {\r\n            const projectName = document.createElement(\"li\");\r\n            projectName.textContent = projectNameInput.value.trim();\r\n            console.log((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName));\r\n            \r\n            UIlistProjects.appendChild(projectName);\r\n\r\n            // Limpiar el input después de agregar el proyecto\r\n            projectNameInput.remove()\r\n        }\r\n    });\r\n} else {\r\n    // Si ya existe el input, enfocar\r\n    projectNameInput.focus();\r\n}};\r\n\r\nUIlistProjects.addEventListener(\"click\", (event) => {\r\n    // Verifica si el usuario hizo clic en un <li>\r\n    if (event.target.tagName === \"LI\") {\r\n      // Remueve la clase 'selected' de cualquier elemento previamente seleccionado\r\n      const selected = UIlistProjects.querySelector(\".selected\");\r\n      if (selected) {\r\n        selected.classList.remove(\"selected\");\r\n      }\r\n  \r\n      // Agrega la clase 'selected' al elemento actual\r\n      event.target.classList.add(\"selected\");\r\n    }\r\n  });\r\n  \n\n//# sourceURL=webpack://todolist-the-odin-project/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _pomodoro_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pomodoro.js */ \"./src/pomodoro.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project\");\r\nconst UIlistProjects = document.querySelector(\".list-projects\");\r\n\r\n\r\nconst todo1 = new _todo_js__WEBPACK_IMPORTED_MODULE_2__.CreateTodo(\"Pushups\", \"Do 4x20 pushups\", \"2024-11-20\", \"medium\");\r\nconst todo2 = new _todo_js__WEBPACK_IMPORTED_MODULE_2__.CreateTodo(\"Squats\", \"Complete 4x15 squats\", \"2024-11-21\", \"high\");\r\n\r\n//Pomodoro\r\nconst startButton = document.getElementById(\"start\");\r\nconst resetButton = document.getElementById(\"reset\");\r\nconst pauseButton = document.getElementById(\"pause\");\r\nconst breakButton = document.getElementById(\"break\");\r\n\r\nstartButton.addEventListener(\"click\", _pomodoro_js__WEBPACK_IMPORTED_MODULE_3__.startTimer);\r\nresetButton.addEventListener(\"click\", _pomodoro_js__WEBPACK_IMPORTED_MODULE_3__.resetTimer);\r\npauseButton.addEventListener(\"click\",_pomodoro_js__WEBPACK_IMPORTED_MODULE_3__.pauseTimer);\r\nbreakButton.addEventListener(\"click\", _pomodoro_js__WEBPACK_IMPORTED_MODULE_3__.startBreak);\r\n(0,_pomodoro_js__WEBPACK_IMPORTED_MODULE_3__.updateTimer)();\r\n\r\n\r\n\r\n\r\naddProjectBtn.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_1__.addProjectDOM);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/index.js?");

/***/ }),

/***/ "./src/pomodoro.js":
/*!*************************!*\
  !*** ./src/pomodoro.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   startBreak: () => (/* binding */ startBreak),\n/* harmony export */   startTimer: () => (/* binding */ startTimer),\n/* harmony export */   updateButton: () => (/* binding */ updateButton),\n/* harmony export */   updateTimer: () => (/* binding */ updateTimer)\n/* harmony export */ });\nlet timer;\r\nlet isRunning = false;\r\nlet minutes = 25;\r\nlet seconds = 0;\r\nlet isPaused = false;\r\nlet isBreak = false;\r\n\r\nconst timerElement = document.getElementById(\"timer\");\r\nconst pauseButton = document.getElementById(\"pause\");\r\nconst breakButton = document.getElementById(\"break\");\r\n\r\nfunction updateTimer() {\r\n  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;\r\n}\r\n\r\nfunction startTimer() {\r\n  if (!isRunning) {\r\n    isRunning = true;\r\n    isBreak = false;\r\n    updateButton();\r\n    timer = setInterval(() => {\r\n      if (!isPaused) {\r\n        if (seconds === 0) {\r\n          if (minutes === 0) {\r\n            clearInterval(timer);\r\n            isRunning = false;\r\n          } else {\r\n            minutes--;\r\n            seconds = 59;\r\n          }\r\n        } else {\r\n          seconds--;\r\n        }\r\n        updateTimer();\r\n      }\r\n    }, 1000);\r\n  }\r\n}\r\n\r\nfunction pauseTimer() {\r\n  if (isRunning) {\r\n    isPaused = !isPaused;\r\n    pauseButton.textContent = isPaused ? \"Resume\" : \"Pause\";\r\n  }\r\n}\r\n\r\nfunction resetTimer() {\r\n  clearInterval(timer);\r\n  isRunning = false;\r\n  isPaused = false;\r\n  if (isBreak) {\r\n    minutes = 5;\r\n  } else {\r\n    minutes = 25;\r\n  }\r\n  seconds = 0;\r\n  updateTimer();\r\n  pauseButton.textContent = \"Pause\";\r\n}\r\n\r\nfunction startBreak() {\r\n  clearInterval(timer);\r\n  isRunning = true;\r\n  isPaused = false;\r\n  isBreak = !isBreak;\r\n  minutes = isBreak ? 5 : 25;\r\n  seconds = 0;\r\n  updateTimer();\r\n  timer = setInterval(() => {\r\n    if (!isPaused) {\r\n      if (seconds === 0) {\r\n        if (minutes === 0) {\r\n          clearInterval(timer);\r\n          isRunning = false;\r\n        } else {\r\n          minutes--;\r\n          seconds = 59;\r\n        }\r\n      } else {\r\n        seconds--;\r\n      }\r\n      updateTimer();\r\n    }\r\n  }, 1000);\r\n  pauseButton.textContent = \"Pause\";\r\n  updateButton();\r\n}\r\n\r\nfunction updateButton() {\r\n  breakButton.textContent = isBreak ? \"Pomodoro\" : \"Break\";\r\n  breakButton.classList.toggle(\"break\", !isBreak);\r\n  breakButton.classList.toggle(\"pomodoro\", isBreak);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/pomodoro.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProject: () => (/* binding */ CreateProject),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   clearProjects: () => (/* binding */ clearProjects),\n/* harmony export */   removeProjectById: () => (/* binding */ removeProjectById)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\n\r\n\r\nlet projectList = [];\r\nlet projectIdCounter = 0;\r\n\r\nclass CreateProject {\r\n    constructor(name) {\r\n        if (!name) {\r\n            throw new Error(\"Project name is required\");\r\n        }\r\n\r\n        this.id = ++projectIdCounter;\r\n        this.projectName = name;\r\n        this.todoList = [];\r\n    }\r\n\r\n    addTodo(todo) {\r\n        if (!(todo instanceof _todo_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo)) {\r\n            throw new Error(\"Only instances of CreateTodo can be added\");\r\n        }\r\n        this.todoList.push(todo);\r\n        return todo;\r\n    }\r\n\r\n    removeTodo(id) {\r\n        const index = this.todoList.findIndex((todo) => todo.id === id);\r\n        if (index !== -1) {\r\n            this.todoList.splice(index, 1);\r\n            return true;\r\n        }\r\n        console.error(`Todo with ID ${id} not found in project ${this.projectName}`);\r\n        return false;\r\n    }\r\n\r\n    clearTodos() {\r\n        this.todoList = [];\r\n    }\r\n\r\n    toString() {\r\n        return `Project [ID: ${this.id}] ${this.projectName} (Todos: ${this.todoList.length})`;\r\n    }\r\n}\r\n\r\nfunction addProject(name) {\r\n    const project = new CreateProject(name);\r\n    projectList.push(project);\r\n    return project;\r\n}\r\n\r\nfunction removeProjectById(id) {\r\n    const index = projectList.findIndex((project) => project.id === id);\r\n    if (index !== -1) {\r\n        projectList.splice(index, 1);\r\n        return true;\r\n    }\r\n    console.error(`Project with ID ${id} not found`);\r\n    return false;\r\n}\r\n\r\nfunction clearProjects() {\r\n    projectList = [];\r\n}\r\n\r\n// Exportar funciones útiles\r\n\r\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateTodo: () => (/* binding */ CreateTodo)\n/* harmony export */ });\n\r\n\r\nlet todoIdCounter = 0;\r\n\r\nclass CreateTodo {\r\n    constructor(name, description, dueDate, priority) {\r\n        if (!name || !description || !dueDate || !priority) {\r\n            throw new Error(\"All fields are required to create a Todo\");\r\n        }\r\n\r\n        this.id = ++todoIdCounter;\r\n        this.name = name;\r\n        this.description = description;\r\n        this.dueDate = dueDate; \r\n        this.priority = priority; \r\n    }\r\n\r\n    toString() {\r\n        return `Todo [ID: ${this.id}] ${this.name} - ${this.description} (Due: ${this.dueDate}, Priority: ${this.priority})`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todolist-the-odin-project/./src/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;