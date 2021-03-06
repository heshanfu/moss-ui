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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/js/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/js/components/IconList.vue":
/*!********************************************!*\
  !*** ./example/js/components/IconList.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconList.vue?vue&type=template&id=3a87218a&scoped=true */ "./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true");
/* harmony import */ var _IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconList.vue?vue&type=script&lang=js */ "./example/js/components/IconList.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true */ "./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a87218a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "example\\js\\components\\IconList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./example/js/components/IconList.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./example/js/components/IconList.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./IconList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??ref--0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/source-map-loader/index.js!./example/js/components/IconList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_IconList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--3-3!../../../node_modules/vue-loader/lib??vue-loader-options!./IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/sass-loader/lib/loader.js??ref--3-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_style_index_0_id_3a87218a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true":
/*!**************************************************************************************!*\
  !*** ./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./IconList.vue?vue&type=template&id=3a87218a&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconList_vue_vue_type_template_id_3a87218a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./example/js/data/collection.json":
/*!*****************************************!*\
  !*** ./example/js/data/collection.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, default */
/***/ (function(module) {

module.exports = [{"_id":1,"name":"Badge","category":"scss","description":"Style for small label."},{"_id":2,"name":"Button","category":"scss","description":"Style for buttons"},{"_id":3,"name":"Card","category":"scss","description":"Content container."},{"_id":4,"name":"Form","category":"scss","description":"Form control styles."},{"_id":5,"name":"Grid","category":"scss","description":"Flexbox grid to build layouts."},{"_id":6,"name":"Helper","category":"scss-helpers","description":"Helper styles"},{"_id":7,"name":"Text","category":"scss-helpers","description":"Helper styles for text contents."},{"_id":8,"name":"Flex","category":"scss-helpers","description":"Helper styles for using flexbox."},{"_id":9,"name":"HeroBanner","category":"scss","description":"A hero banner is display large image with text, often placed at top of a web page."},{"_id":10,"name":"Image","category":"scss","description":"Style decorations for <img> tag."},{"_id":11,"name":"List","category":"scss","description":"Simple style for unordered list."},{"_id":12,"name":"Loader","category":"scss","description":"Loading spinners."},{"_id":13,"name":"Pagination","category":"scss","description":"Pagination to indicate a series of related content exists across multiple pages."},{"_id":14,"name":"Scaffolding","category":"scss","description":"Scaffolding of styles such as default tags."},{"_id":15,"name":"Carousel","category":"vue","description":"A slideshow component."},{"_id":16,"name":"Chip","category":"vue","description":"Chips to represents small block of information. They are commonly used to for contacts or for tags."},{"_id":17,"name":"CloseButton","category":"vue","description":"A component used for hide or remove element that parent node or specified."},{"_id":18,"name":"Collapse","category":"vue","description":"Toggle the visibility of content."},{"_id":19,"name":"Dropdown","category":"vue","description":"Toggle contextual overlays for displaying lists of links and more."},{"_id":20,"name":"Message","category":"vue","description":"A component used for displaying contextual feedback message."},{"_id":21,"name":"Modal","category":"vue","description":"Adding dialog boxes."},{"_id":22,"name":"Navbar","category":"vue","description":"Navigation bar component."},{"_id":23,"name":"Parallax","category":"vue","description":"Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling."},{"_id":24,"name":"SimpleCRUD","category":"vue","description":"A component used for read, update or delete action to collection-item."},{"_id":26,"name":"Tab","category":"vue","description":"Tab component that toggling multiple contents."},{"_id":27,"name":"Toast","category":"vue","description":"Displaying short message."},{"_id":28,"name":"Tree","category":"vue","description":"Represents composites as tree structure."},{"_id":29,"name":"v-focus","category":"vue-directives","description":"Focus an element."},{"_id":30,"name":"v-trigger","category":"vue-directives","description":"Trigger event via event emitter of vue-model."},{"_id":31,"name":"v-modal","category":"vue-directives","description":"Toggling modal dialog."},{"_id":32,"name":"v-clipboard","category":"vue-directives","description":"Copy or cut to clipboard."},{"_id":33,"name":"v-set-value","category":"vue-directives","description":"Set value to element such as input, select, etc.."},{"_id":34,"name":"v-tooltip","category":"vue-directives","description":"Toggling tooltip content."},{"_id":35,"name":"v-ripple","category":"vue-directives","description":"Add ripple effect to element."},{"_id":36,"name":"Color","category":"js-libraries","description":"Color library powered by MooColor."},{"_id":37,"name":"ElementUtil","category":"js-libraries","description":"The javascript library for using DOM Elements conveniently."},{"_id":38,"name":"Util","category":"js-libraries","description":"Javascript util methods."},{"_id":39,"name":"InputGroup","category":"scss","description":"Extend form controls by adding text, buttons."},{"_id":40,"name":"Search","category":"vue","description":"Simple search component that fuzzy search given collection data such like json."},{"_id":41,"name":"Sizing","category":"scss-helpers","description":"Helper classes for specifying width or height of element."},{"_id":42,"name":"Spacing","category":"scss-helpers","description":"Helper classes for specifying margin or padding spacing to element."},{"_id":43,"name":"Code","category":"scss","description":"Display inline or block fragment of computer code."},{"_id":44,"name":"v-outer","category":"vue-directives","description":"Add listener for the event that occurs outer of the element."},{"_id":45,"name":"NavDrawer","category":"vue","description":"It's the navigation drawer that using horizontal-collapse."}];

/***/ }),

/***/ "./example/js/data/icons.json":
/*!************************************!*\
  !*** ./example/js/data/icons.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = [{"name":"arrow-left","keywords":["arrow","chevron","left"]},{"name":"arrow-right","keywords":["arrow","chevron","right"]},{"name":"arrow-up","keywords":["arrow","chevron","up"]},{"name":"arrow-down","keywords":["arrow","chevron","down"]},{"name":"caret-left","keywords":["caret","triangle","left"]},{"name":"caret-right","keywords":["caret","triangle","right"]},{"name":"caret-up","keywords":["caret","triangle","up"]},{"name":"caret-down","keywords":["caret","triangle","down"]},{"name":"close","keywords":["close","cross"]},{"name":"check","keywords":["check"]},{"name":"search","keywords":["search","magnifying glass"]},{"name":"menu","keywords":["menu","hamburger","bars"]},{"name":"ellipsis-vertical","keywords":["ellipsis","dots","vertical"]},{"name":"ellipsis-horizontal","keywords":["ellipsis","dots","horizontal"]}];

/***/ }),

/***/ "./example/js/data/tree.js":
/*!*********************************!*\
  !*** ./example/js/data/tree.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var treeData = exports.treeData = [{
  name: 'MOSS-UI',
  items: [{ name: 'SCSS' }, { name: 'Vue' }, {
    name: 'JS Libraries',
    items: [{ name: 'Color' }, { name: 'ElementUtil' }, { name: 'Util' }]
  }]
}];

var treeData2 = exports.treeData2 = [{
  name: '<a href="./index.html">MOSS-UI</a>',
  opened: true,
  items: [{ name: '<a href="./scss.html">SCSS</a>' }, { name: '<a href="./vue.html">Vue</a>' }, {
    name: '<a href="./js-libraries.html">JS Libraries</a>',
    items: [{ name: '<a href="./js-libraries.html#color">Color</a>' }, { name: '<a href="./js-libraries.html#element-util">ElementUtil</a>' }, { name: '<a href="./js-libraries.html#util">Util</a>' }]
  }]
}];

/***/ }),

/***/ "./example/js/example.js":
/*!*******************************!*\
  !*** ./example/js/example.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tree = __webpack_require__(/*! ./data/tree */ "./example/js/data/tree.js");

var _collection = __webpack_require__(/*! ./data/collection.json */ "./example/js/data/collection.json");

var _collection2 = _interopRequireDefault(_collection);

var _partials = __webpack_require__(/*! ./partials */ "./example/js/partials.js");

var Partials = _interopRequireWildcard(_partials);

var _IconList = __webpack_require__(/*! ./components/IconList.vue */ "./example/js/components/IconList.vue");

var _IconList2 = _interopRequireDefault(_IconList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = window.Vue;

Vue.use(window.MossUI.default);
Vue.component('icon-list', _IconList2.default);

var searchOptions = {
  keys: [{ name: 'name', weight: .5 }, { name: 'category', weight: .3 }, { name: 'description', weight: .2 }]
};

var strToKebab = window.Moss.lib.Util.strToKebab;
var Color = window.Moss.lib.Color;


window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData: _tree.treeData,
    treeData2: _tree.treeData2,
    collection: _collection2.default,
    searchOptions: searchOptions
  },
  methods: {
    test: function test(arg) {
      console.log(arg);
    },
    eventTest: function eventTest(event) {
      console.log(event);
    },
    onSearchItemClick: function onSearchItemClick(_ref) {
      var name = _ref.name,
          category = _ref.category;

      // redirect to
      window.location.href = category + '.html#' + strToKebab(name);
    },
    onSearchSubmit: function onSearchSubmit(_ref2) {
      var result = _ref2.result;

      if (result.length < 1) return;
      this.onSearchItemClick(result[0]);
    },
    onSearchInputChange: function onSearchInputChange(_ref3) {
      var input = _ref3.input,
          vnode = _ref3.vnode;

      // Set suggestions. (Ajax Simulation)
      var suggestions = [{ name: 'Tim Robbins' }, { name: 'Tim Burton' }, { name: 'Tim Tebow' }];
      if (input.toLowerCase() === 'tim') {
        setTimeout(function () {
          vnode.suggestions = suggestions;
        }, 500);
      } else {
        setTimeout(function () {
          vnode.suggestions = [];
        }, 200);
      }
    },


    // category badge style of search-result.
    getBadgeStyle: function getBadgeStyle(category) {
      // categories: scss, scss-helpers, vue, vue-directives, js-libraries
      var c = {
        scss: '#c69',
        js: '#f5da55',
        vue: '#4fc08d'
      };
      var prefix = /(^\w+)/.exec(category)[1];
      var bgColor = new Color(c[prefix]);
      return {
        marginRight: '.5rem',
        color: bgColor.brightness > 165 ? '#333' : '#fff',
        backgroundColor: bgColor.toHex(true)
      };
    },
    onOuterClick: function onOuterClick() {
      window.Moss.toast('Clicked an outer element.');
    }
  },

  beforeMount: function beforeMount() {
    this.$on('clipboard-success', function (event) {
      var msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(msg + ' on clipboard');
    });
    this.$on('scrollspy-activate', function (item) {
      console.log(item.elm);
    });
  },
  mounted: function mounted() {
    // invoke function for partial examples.
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.values(Partials)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var fn = _step.value;

        fn();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

/***/ }),

/***/ "./example/js/partials.js":
/*!********************************!*\
  !*** ./example/js/partials.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.information = information;
exports.asideMenu = asideMenu;
exports.toast = toast;
exports.messageBox = messageBox;
exports.colorLibrary = colorLibrary;
exports.elementUtil = elementUtil;
exports.arrowIcon = arrowIcon;
exports.caretIcon = caretIcon;
exports.closeIcon = closeIcon;
exports.centeringDropdownBox = centeringDropdownBox;
// information
function information() {
  var elms = document.querySelectorAll('.moss-version');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elm = _step.value;

      elm.innerHTML = window.Moss.version;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
}

// aside menu.
function asideMenu() {
  var docSize = new window.Moss.lib.ElementMeasurer();
  var asideMenu = document.querySelector('aside .menu');
  if (!asideMenu) return;

  var onScroll = function onScroll() {
    if (docSize.scrollTop > asideMenu.offsetTop) {
      asideMenu.style.position = 'fixed';
      asideMenu.style.top = '45px';
    } else {
      asideMenu.style.position = '';
      asideMenu.style.top = '';
      asideMenu.style.maxWidth = '';
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
}

// toast.
function toast() {
  var toastCount = 0;
  window.toastShow = function () {
    window.Moss.toast('toast test ' + toastCount);
    toastCount++;
  };
}

// message-box
function messageBox() {
  window.showMessage = function () {
    var text = document.querySelector('#input-msg').value || 'empty';
    var status = document.querySelector('#select-msg').value;
    window.Moss.messageBox.add(text, status);
  };
}

// Color library.
function colorLibrary() {
  var Color = window.Moss.lib.Color;

  window.convertColor = function (hexToRgb) {
    var inputHex = document.querySelector('#input-hex-color');
    var inputRgb = document.querySelector('#input-rgb-color');

    if (hexToRgb) {
      inputRgb.value = new Color(inputHex.value).toRgb();
    } else {
      inputHex.value = new Color(inputRgb.value).toHex(true);
    }
  };

  window.getBrightness = function () {
    var input = document.querySelector('#input-lightness');
    var value = new Color(input.value).brightness;
    document.querySelector('#output-lightness').innerHTML = 'lightness value: ' + value;
  };

  window.getContrast = function () {
    var input = document.querySelector('#input-contrast');
    var output = document.querySelector('#output-contrast');
    var color = new Color(input.value);
    var contrast = new Color(color.isLight ? '#333' : '#fff');

    output.style.backgroundColor = input.value;
    output.style.color = contrast.toHex(true);
    output.innerHTML = 'bg-color: ' + color.toRgb() + ' contrast-color: ' + contrast.toRgb();
  };
}

// ElementUtil
function elementUtil() {
  var eu = window.Moss.lib.ElementUtil;

  // toggle class
  eu.addListener('#btn-toggle-class', 'click', function () {
    console.log('click');
    eu.toggleClass('#toggle-class-target', 'bg-color-danger');
  });

  // toggle show
  eu.addListener('#btn-toggle-show', 'click', function () {
    eu.toggleShow('#toggle-show-target');
  });

  // filter list
  eu.addListener('#input-filter-list', 'keyup', function (e) {
    eu.filter('#filter-list li', e.currentTarget.value, { action: 'hideOthers' });
  });

  eu.addListener('#btn-sort-list', 'click', function () {
    eu.sort('#sort-list', { items: 'li' });
  });

  // sort table
  if (eu.getElement('#sort-table-target')) {
    eu.sort('#sort-table-target');
  }
}

// SVG icons.
function arrowIcon() {
  var arrowIcon = document.querySelector('#svg-arrow-example');
  if (!arrowIcon) return;

  arrowIcon.innerHTML = window.Moss.lib.Svg.arrowRight;
  arrowIcon.style.transition = 'all .5s ease-in-out';
  arrowIcon.addEventListener('click', function () {
    if (arrowIcon.style.transform == '') {
      arrowIcon.style.transform = 'rotate(3.25turn)';
      arrowIcon.style.color = '#f80';
    } else {
      arrowIcon.style.transform = '';
      arrowIcon.style.color = '';
    }
  });
}

function caretIcon() {
  var caretIcon = document.querySelector('#svg-caret-example');
  if (!caretIcon) return;

  caretIcon.innerHTML = window.Moss.lib.Svg.caretDown;
  caretIcon.style.transition = 'all .2s ease-out';
  caretIcon.addEventListener('click', function () {
    if (caretIcon.style.transform == '') {
      caretIcon.style.transform = 'scale(2, 0.5) rotate(0.5turn)';
      caretIcon.style.color = 'aqua';
    } else {
      caretIcon.style.transform = '';
      caretIcon.style.color = '';
    }
  });
}

function closeIcon() {
  var closeIcon = document.querySelector('#svg-close-example');
  if (!closeIcon) return;

  closeIcon.innerHTML = window.Moss.lib.Svg.close;
  closeIcon.style.transition = 'color .2s ease-out';
  closeIcon.style.animation = '3s linear infinite spin';
  closeIcon.addEventListener('mouseover', function () {
    closeIcon.style.animationDuration = '0.5s';
    closeIcon.style.color = '#32cd32';
  });

  closeIcon.addEventListener('mouseleave', function () {
    closeIcon.style.animationDuration = '3s';
    closeIcon.style.color = '';
  });
}

function centeringDropdownBox() {
  var scrollTo = window.Moss.lib.Util.scrollTo;
  var dropdownBox = document.querySelector('#dropdown-box-1');
  if (!dropdownBox) return;

  scrollTo([150, 150], {
    base: dropdownBox,
    duration: 0
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/source-map-loader/index.js!./example/js/components/IconList.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./example/js/components/IconList.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ../data/icons.json */ "./example/js/data/icons.json");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      icons: _icons2.default,
      input: ''
    };
  },

  watch: {
    input: function input(val) {
      var filter = window.Moss.lib.ElementUtil.filter;

      filter('.icon-list > .icon-item', val, { action: 'hideOthers' });
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/sass-loader/lib/loader.js??ref--3-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/sass-loader/lib/loader.js??ref--3-3!./node_modules/vue-loader/lib??vue-loader-options!./example/js/components/IconList.vue?vue&type=style&index=0&id=3a87218a&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./example/js/components/IconList.vue?vue&type=template&id=3a87218a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "icon-list" },
    [
      _c("div", { staticClass: "mb-3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.input,
              expression: "input"
            }
          ],
          staticClass: "inline",
          attrs: { type: "text", placeholder: "search.." },
          domProps: { value: _vm.input },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.input = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._l(_vm.icons, function(item) {
        return _c("div", { key: item.name, staticClass: "icon-item" }, [
          _c(
            "div",
            { staticClass: "icon-box" },
            [_c("icon", { attrs: { name: item.name } })],
            1
          ),
          _vm._v(" "),
          _c("div", [
            _c("h4", { staticClass: "mt-2 mb-1" }, [_vm._v(_vm._s(item.name))]),
            _vm._v(" "),
            _c("span", { staticClass: "help" }, [
              _vm._v(_vm._s(item.keywords.join(", ")))
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });
//# sourceMappingURL=example.js.map