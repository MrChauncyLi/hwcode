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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml?entry":
/*!********************************************************************************************************!*\
  !*** c:/Users/86182/DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\86182\\AppData\\Local\\HarmonyOS\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\86182\\AppData\\Local\\HarmonyOS\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!c:/Users/86182/DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "25px",
    "color": "#ffffff",
    "backgroundColor": "#000000",
    "width": "100%",
    "paddingTop": "15px",
    "paddingRight": "15px",
    "paddingBottom": "15px",
    "paddingLeft": "15px",
    "opacity": 0.9
  },
  ".content": {
    "paddingTop": "30px",
    "paddingRight": "50px",
    "paddingBottom": "30px",
    "paddingLeft": "50px",
    "width": "100%",
    "flexDirection": "column"
  },
  ".one": {
    "paddingTop": "10px",
    "paddingRight": "0px",
    "paddingBottom": "10px",
    "paddingLeft": "0px",
    "width": "100%"
  },
  ".input": {
    "width": "100%"
  },
  ".input input": {
    "fontSize": "20px",
    "borderBottomLeftRadius": "0px",
    "borderBottomRightRadius": "0px",
    "borderTopLeftRadius": "0px",
    "borderTopRightRadius": "0px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderBottomStyle": "solid",
    "borderLeftStyle": "solid",
    "borderTopColor": "#A0A0A0",
    "borderRightColor": "#A0A0A0",
    "borderBottomColor": "#A0A0A0",
    "borderLeftColor": "#A0A0A0"
  },
  ".btn": {
    "justifyContent": "center",
    "marginTop": "20px",
    "width": "100%"
  },
  ".btn input": {
    "fontSize": "20px",
    "height": "40px",
    "lineHeight": "40px",
    "width": "80%",
    "backgroundColor": "#07BF64"
  },
  ".textcon": {
    "borderBottomLeftRadius": "10px",
    "borderBottomRightRadius": "10px",
    "borderTopLeftRadius": "10px",
    "borderTopRightRadius": "10px",
    "height": "200px",
    "width": "100%",
    "marginTop": "5px",
    "marginRight": "10px",
    "marginBottom": "5px",
    "marginLeft": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderBottomStyle": "solid",
    "borderLeftStyle": "solid",
    "color": "#ffffff",
    "backgroundColor": "#969696"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!c:/Users/86182/DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.hml ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "content"
      },
      "type": "div",
      "classList": [
        "content"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:3",
            "className": "one"
          },
          "type": "div",
          "classList": [
            "one"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:4",
                "value": function () {return this.$t('title.one')}
              },
              "type": "text",
              "classList": [
                ""
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:6",
            "className": "input"
          },
          "type": "div",
          "classList": [
            "input"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:7",
                "type": "text",
                "value": function () {return this.keyword}
              },
              "type": "input",
              "events": {
                "change": "keywordchange"
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:9",
            "className": "btn"
          },
          "type": "div",
          "classList": [
            "btn"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:10",
                "type": "button",
                "value": function () {return this.$t('btn.one')}
              },
              "type": "input",
              "onBubbleEvents": {
                "click": "getAIpoem"
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:12"
          },
          "type": "div",
          "style": {
            "marginTop": "10px",
            "height": "2px",
            "width": "100%",
            "backgroundColor": "#cdcdcd"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:13",
            "className": "one"
          },
          "type": "div",
          "classList": [
            "one"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:14",
                "value": function () {return this.$t('title.two')}
              },
              "type": "text",
              "classList": [
                ""
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:16",
            "className": "input"
          },
          "type": "div",
          "classList": [
            "input"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:17",
                "type": "text",
                "value": function () {return this.keywordpoem}
              },
              "type": "input",
              "events": {
                "change": "keywordpromchange"
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:19",
            "className": "btn"
          },
          "type": "div",
          "classList": [
            "btn"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:20",
                "type": "button",
                "value": function () {return this.$t('btn.two')}
              },
              "type": "input",
              "onBubbleEvents": {
                "click": "getpoem"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\86182\\AppData\\Local\\HarmonyOS\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\86182\\AppData\\Local\\HarmonyOS\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=C:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!c:/Users/86182/AppData/Local/HarmonyOS/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!c:/Users/86182/DevEcoStudioProjects/MyTest/entry/src/main/js/default/pages/index/index.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireModule("@system.prompt"));

var _system2 = _interopRequireDefault(requireModule("@system.fetch"));

var _default = {
  data: {
    title: "",
    keyword: "",
    keywordpoem: "",
    resshow: "none"
  },
  onInit: function onInit() {
    this.title = this.$t('strings.world');
    this.keyword = this.$t('strings.keyword');
    this.keywordpoem = this.$t('strings.keywordpoem');
  },
  keywordchange: function keywordchange(e) {
    this.keyword = e.text;
  },
  keywordpromchange: function keywordpromchange(e) {
    this.keywordpoem = e.text;
  },
  getAIpoem: function getAIpoem() {
    if (this.keyword === "") {
      this.keyword = this.$t('strings.keywordpoem');
    }

    var url = "https://py.myie9.com/cangtoutest/" + this.keyword;
    this.netserver(url, this.keyword);
  },
  getpoem: function getpoem() {
    if (this.keywordpoem === "") {
      this.keywordpoem = this.$t('strings.keywordpoem');
    }

    var url = "https://py.myie9.com/xuxietest/" + this.keywordpoem;
    this.netserver(url, this.keywordpoem);
  },
  netserver: function netserver(url, keyword) {
    _system2["default"].fetch({
      url: url,
      method: 'GET',
      responseType: 'text',
      success: function success(ret) {
        if (ret.code === 500) {
          return;
        }

        var data = ret.data;

        _system["default"].showDialog({
          title: keyword,
          message: data.toString(),
          buttons: [{
            text: "好诗",
            color: "#33dd44"
          }]
        });
      }
    });
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map