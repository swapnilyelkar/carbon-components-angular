(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframe"],{

/***/ "./.storybook/bootstrap.module.ts":
/*!****************************************!*\
  !*** ./.storybook/bootstrap.module.ts ***!
  \****************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    ], BootstrapModule);
    return BootstrapModule;
}());



/***/ }),

/***/ "./.storybook/config.js":
/*!******************************!*\
  !*** ./.storybook/config.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_16__);
// load global styles
__webpack_require__(/*! style-loader!css-loader!sass-loader!./preview.scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss"),__webpack_require__(/*! style-loader!css-loader!sass-loader!./preview-experimental.scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss"),__webpack_require__(/*! ../src/index.stories */ "./src/index.stories.ts");// automatically import all files ending in *.stories.ts
var req=__webpack_require__("./src sync recursive .stories.ts$");function loadStories(){req.keys().sort(function(path1,path2){return path1.split("/").slice(-1)[0]>path2.split("/").slice(-1)[0]?1:-1}).forEach(function(filename){filename.includes("index")||req(filename)})}Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_16__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@storybook/angular/dist lazy recursive":
/*!********************************************************************!*\
  !*** ./node_modules/@storybook/angular/dist lazy namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@storybook/angular/dist lazy recursive";

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./preview-experimental.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview-experimental.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./preview.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src sync recursive .stories.ts$":
/*!*******************************!*\
  !*** ./src sync .stories.ts$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accordion/accordion.stories.ts": "./src/accordion/accordion.stories.ts",
	"./button/button.stories.ts": "./src/button/button.stories.ts",
	"./checkbox/checkbox.stories.ts": "./src/checkbox/checkbox.stories.ts",
	"./code-snippet/code-snippet.stories.ts": "./src/code-snippet/code-snippet.stories.ts",
	"./combobox/combobox.stories.ts": "./src/combobox/combobox.stories.ts",
	"./content-switcher/content-switcher.stories.ts": "./src/content-switcher/content-switcher.stories.ts",
	"./dialog/overflow-menu/overflow-menu.stories.ts": "./src/dialog/overflow-menu/overflow-menu.stories.ts",
	"./dialog/tooltip/tooltip.stories.ts": "./src/dialog/tooltip/tooltip.stories.ts",
	"./dropdown/dropdown.stories.ts": "./src/dropdown/dropdown.stories.ts",
	"./index.stories.ts": "./src/index.stories.ts",
	"./inline-loading/inline-loading.stories.ts": "./src/inline-loading/inline-loading.stories.ts",
	"./input/input.stories.ts": "./src/input/input.stories.ts",
	"./link/link.stories.ts": "./src/link/link.stories.ts",
	"./loading/loading.stories.ts": "./src/loading/loading.stories.ts",
	"./modal/modal.stories.ts": "./src/modal/modal.stories.ts",
	"./notification/notification.stories.ts": "./src/notification/notification.stories.ts",
	"./number-input/number.stories.ts": "./src/number-input/number.stories.ts",
	"./pagination/pagination.stories.ts": "./src/pagination/pagination.stories.ts",
	"./progress-indicator/progrss-indicator.stories.ts": "./src/progress-indicator/progrss-indicator.stories.ts",
	"./radio/radio.stories.ts": "./src/radio/radio.stories.ts",
	"./search/search.stories.ts": "./src/search/search.stories.ts",
	"./select/select.stories.ts": "./src/select/select.stories.ts",
	"./table/table.stories.ts": "./src/table/table.stories.ts",
	"./tabs/tabs.stories.ts": "./src/tabs/tabs.stories.ts",
	"./tiles/tiles.stories.ts": "./src/tiles/tiles.stories.ts",
	"./toggle/toggle.stories.ts": "./src/toggle/toggle.stories.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive .stories.ts$";

/***/ }),

/***/ "./src/accordion/accordion-item.component.ts":
/*!***************************************************!*\
  !*** ./src/accordion/accordion-item.component.ts ***!
  \***************************************************/
/*! exports provided: AccordionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionItem = /** @class */ (function () {
    function AccordionItem() {
        this.title = "Title " + AccordionItem_1.accordionItemCount;
        this.id = "accordion-item-" + AccordionItem_1.accordionItemCount;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemClass = true;
        this.expanded = false;
        this.itemType = "list-item";
        this.role = "heading";
        this.ariaLevel = 3;
        AccordionItem_1.accordionItemCount++;
    }
    AccordionItem_1 = AccordionItem;
    AccordionItem.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
        this.selected.emit({ id: this.id, expanded: this.expanded });
    };
    var AccordionItem_1;
    AccordionItem.accordionItemCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--accordion__item"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "itemClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--accordion__item--active"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.display"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "itemType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-level"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "ariaLevel", void 0);
    AccordionItem = AccordionItem_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-accordion-item",
            template: "\n\t\t<button\n\t\t\t[attr.aria-expanded]=\"expanded\"\n\t\t\t[attr.aria-controls]=\"id\"\n\t\t\t(click)=\"toggleExpanded()\"\n\t\t\tclass=\"bx--accordion__heading\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--accordion__arrow\"\n\t\t\t\twidth=\"7\"\n\t\t\t\theight=\"12\"\n\t\t\t\tviewBox=\"0 0 7 12\">\n          \t\t<path fill-rule=\"nonzero\" d=\"M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z\"/>\n\t\t\t</svg>\n\t\t\t <p class=\"bx--accordion__title\">{{title}}</p>\n\t\t</button>\n\t\t<div [id]=\"id\" class=\"bx--accordion__content\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], AccordionItem);
    return AccordionItem;
}());



/***/ }),

/***/ "./src/accordion/accordion.component.ts":
/*!**********************************************!*\
  !*** ./src/accordion/accordion.component.ts ***!
  \**********************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    Accordion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-accordion",
            template: "\n\t\t<ul class=\"bx--accordion\">\n\t\t\t<ng-content></ng-content>\n\t\t</ul>\n\t"
        })
    ], Accordion);
    return Accordion;
}());



/***/ }),

/***/ "./src/accordion/accordion.module.ts":
/*!*******************************************!*\
  !*** ./src/accordion/accordion.module.ts ***!
  \*******************************************/
/*! exports provided: Accordion, AccordionItem, AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.component */ "./src/accordion/accordion.component.ts");
/* harmony import */ var _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-item.component */ "./src/accordion/accordion-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"],
                _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]
            ],
            exports: [
                _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"],
                _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ }),

/***/ "./src/accordion/accordion.stories.ts":
/*!********************************************!*\
  !*** ./src/accordion/accordion.stories.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Accordion", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-accordion>\n\t\t\t\t<ibm-accordion-item title=\"Section 1 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 2 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 3 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 4 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t</ibm-accordion>\n\t\t",
    props: {
        items: [
            {
                content: "one"
            },
            {
                content: "two"
            },
            {
                content: "three"
            },
            {
                content: "four"
            }
        ],
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("item expanded")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/banner/banner-content.interface.ts":
/*!************************************************!*\
  !*** ./src/banner/banner-content.interface.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/banner/banner.component.ts":
/*!****************************************!*\
  !*** ./src/banner/banner.component.ts ***!
  \****************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-content.interface */ "./src/banner/banner-content.interface.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_content_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Deprecated in favour of `InlineNotification` (to be removed in v3.0).
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 * @deprecated
 */
var Banner = /** @class */ (function () {
    function Banner(bannerService, i18n) {
        this.bannerService = bannerService;
        this.i18n = i18n;
        /**
         * Emits on close.
         *
         * @type {EventEmitter<any>}
         * @memberof Banner
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.warn("`ibm-banner` has been deprecated in favour of `ibm-inline-notification`");
    }
    Banner.prototype.ngOnInit = function () {
        if (!this.bannerObj.closeLabel) {
            this.bannerObj.closeLabel = this.i18n.get().BANNER.CLOSE_BUTTON;
        }
    };
    /**
     * Emits close event.
     *
     * @memberof Banner
     */
    Banner.prototype.onClose = function () {
        this.close.emit();
    };
    Banner.prototype.destroy = function () {
        this.bannerService.close(this);
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["NotificationContent"] !== "undefined" && _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["NotificationContent"]) === "function" && _a || Object)
    ], Banner.prototype, "bannerObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], Banner.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("banner"),
        __metadata("design:type", Object)
    ], Banner.prototype, "banner", void 0);
    Banner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-banner",
            template: "\n\t<div\n\t\t#banner\n\t\tclass=\"bx--inline-notification bx--inline-notification--{{bannerObj.type}}\"\n\t\trole=\"alert\">\n\t\t<div class=\"bx--inline-notification__details\">\n\t\t\t<svg class=\"bx--inline-notification__icon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z\" fill-rule=\"evenodd\"/>\n\t\t\t</svg>\n\t\t\t<div class=\"bx--inline-notification__text-wrapper\">\n\t\t\t\t<p [innerHTML]=\"bannerObj.title\" class=\"bx--inline-notification__title\"></p>\n\t\t\t\t<p [innerHTML]=\"bannerObj.message\" class=\"bx--inline-notification__subtitle\"></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<button\n\t\t\t(click)=\"onClose()\"\n\t\t\tclass=\"bx--inline-notification__close-button\"\n\t\t\t[attr.aria-label]=\"bannerObj.closeLabel\"\n\t\t\ttype=\"button\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--inline-notification__close-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n\t",
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"] !== "undefined" && _banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]) === "function" && _c || Object, typeof (_d = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"]) === "function" && _d || Object])
    ], Banner);
    return Banner;
}());



/***/ }),

/***/ "./src/banner/banner.module.ts":
/*!*************************************!*\
  !*** ./src/banner/banner.module.ts ***!
  \*************************************/
/*! exports provided: BannerService, Banner, BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.component */ "./src/banner/toast.component.ts");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.component */ "./src/banner/banner.component.ts");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Deprecated in favour of `NotificationModule` (to be removed in v3.0).
 *
 * @deprecated
 */
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"],
                _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"]
            ],
            exports: [
                _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"],
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]
            ],
            entryComponents: [_banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"], _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"], _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__["I18nModule"]],
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"]]
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/banner/banner.service.ts":
/*!**************************************!*\
  !*** ./src/banner/banner.service.ts ***!
  \**************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.module */ "./src/banner/banner.module.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component */ "./src/banner/toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Deprecated in favour of `NotificationService` (to be removed in v3.0).
 * Provides a way to use the banner component.
 *
 * Banners are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class BannerService
 * @deprecated
 */
var BannerService = /** @class */ (function () {
    /**
     * Constructs BannerService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     * @memberof BannerService
     */
    function BannerService(injector, componentFactoryResolver, applicationRef) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        /**
         * An array containing `ComponentRef`s to all the banners this service instance
         * is responsible for.
         *
         * @memberof BannerService
         */
        this.bannerRefs = new Array();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.warn("`BannerService` has been deprecated in favour of `NotificationService`");
    }
    /**
     * Shows the banner based on the `bannerObj`.
     *
     * @param {any} bannerObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for banner to display
     * * `target` is css selector defining an element to append banner to. If not provided,
     * `showBanner()` creates a place for the banner in `body`
     * * `duration` is number of ms to close the banner after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart banner.
     *
     * **Example:**
     * ```typescript
     * // Info banner, saying "Sample message." added to the element with id banner-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#banner-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [bannerComp=Banner] If provided, used to resolve component factory
     * @memberof BannerService
     */
    BannerService.prototype.showBanner = function (bannerObj, bannerComp) {
        var _this = this;
        if (bannerComp === void 0) { bannerComp = _banner_module__WEBPACK_IMPORTED_MODULE_1__["Banner"]; }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(bannerComp);
        var bannerRef = componentFactory.create(this.injector);
        bannerRef.instance.bannerObj = bannerObj; // typescript isn't being very smart here, so we type to any
        this.bannerRefs.push(bannerRef);
        this.onClose = bannerRef.instance.close;
        this.applicationRef.attachView(bannerRef.hostView);
        if (bannerObj.target) {
            document.querySelector(bannerObj.target).appendChild(bannerRef.location.nativeElement);
        }
        else {
            var body = document.querySelector("body");
            // get or create a container for alert list
            var bannerClassName = "banner-overlay";
            var bannerList = body.querySelector("." + bannerClassName);
            if (!bannerList) {
                bannerList = document.createElement("div");
                bannerList.className = bannerClassName;
                body.appendChild(bannerList);
            }
            // add the banner to the top of the list
            if (bannerList.firstChild) {
                bannerList.insertBefore(bannerRef.location.nativeElement, bannerList.firstChild);
            }
            else {
                bannerList.appendChild(bannerRef.location.nativeElement);
            }
        }
        if (bannerObj.duration && bannerObj.duration > 0) {
            setTimeout(function () {
                _this.close(bannerRef);
            }, bannerObj.duration);
        }
        if (bannerObj.smart) {
            // let it disappear after calculated timeout
            setTimeout(function () {
                _this.close(bannerRef);
            }, this.getSmartTimeout(bannerObj));
        }
        this.onClose.subscribe(function () {
            _this.close(bannerRef);
        });
        bannerRef.instance.componentRef = bannerRef;
        return bannerRef.instance;
    };
    BannerService.prototype.showToast = function (bannerObj, bannerComp) {
        if (bannerComp === void 0) { bannerComp = _toast_component__WEBPACK_IMPORTED_MODULE_2__["Toast"]; }
        return this.showBanner(bannerObj, bannerComp);
    };
    /**
     * Programatically closes banner based on `bannerRef`.
     *
     * @param bannerRef `ComponentRef` of a banner or `Banner` component you wish to close
     * @memberof BannerService
     */
    BannerService.prototype.close = function (bannerRef) {
        var _this = this;
        if (bannerRef) {
            if (bannerRef instanceof _banner_module__WEBPACK_IMPORTED_MODULE_1__["Banner"]) {
                this.close(bannerRef.componentRef);
            }
            else {
                setTimeout(function () {
                    _this.applicationRef.detachView(bannerRef.hostView);
                    bannerRef.destroy();
                }, 200);
            }
        }
    };
    /**
     * Calculates the amount of time user needs to read the message in the banner.
     *
     * @param {any} bannerObj Same object used to instantiate banner.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart banner
     * @memberof BannerService
     */
    BannerService.prototype.getSmartTimeout = function (bannerObj) {
        // calculate timeout
        var timeout = 600; // start with reaction time
        // custom duration
        timeout += bannerObj.duration || 0;
        // message type
        switch (bannerObj.type) {
            case "info":
            case "success":
            default: {
                break;
            }
            case "danger": {
                timeout += 3000;
                break;
            }
            case "warning": {
                timeout += 1500;
                break;
            }
        }
        // message length
        // average reader reads around 200 words per minute, or it takes them ~0.3s per word
        // let's use 1.5 factor for below average speed readers and have 0.45s per word
        var wordCount = bannerObj.message.trim().split(/\s+/).length;
        timeout += wordCount * 450;
        return timeout;
    };
    /**
     * OnDestroy hook.
     *
     * Destroys all living banners it is responsible for.
     *
     * @memberof BannerService
     */
    BannerService.prototype.ngOnDestroy = function () {
        if (this.bannerRefs.length > 0) {
            for (var i = 0; i < this.bannerRefs.length; i++) {
                var bannerRef = this.bannerRefs[i];
                this.applicationRef.detachView(bannerRef.hostView);
                bannerRef.destroy();
            }
            this.bannerRefs.length = 0;
        }
    };
    var _a, _b, _c;
    BannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]) === "function" && _c || Object])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/banner/toast.component.ts":
/*!***************************************!*\
  !*** ./src/banner/toast.component.ts ***!
  \***************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-content.interface */ "./src/banner/banner-content.interface.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_content_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/banner/banner.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Deprecated in favour of `ToastNotification` (to be removed in v3.0).
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 * @deprecated
 */
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.ngOnInit = function () {
        console.warn("`ibm-toast` has been deprecated in favour of `ibm-toast-notification`");
        if (!this.bannerObj.closeLabel) {
            this.bannerObj.closeLabel = this.i18n.get().BANNER.CLOSE_BUTTON;
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["ToastContent"] !== "undefined" && _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["ToastContent"]) === "function" && _a || Object)
    ], Toast.prototype, "bannerObj", void 0);
    Toast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-toast",
            template: "\n\t<div\n\t\t#banner\n\t\tclass=\"bx--toast-notification bx--toast-notification--{{bannerObj['type']}}\"\n\t\trole=\"alert\">\n\t\t<div class=\"bx--toast-notification__details\">\n\t\t\t<h3 class=\"bx--toast-notification__title\" [innerHTML]=\"bannerObj.title\"></h3>\n\t\t\t<p class=\"bx--toast-notification__subtitle\" [innerHTML]=\"bannerObj.subtitle\"></p>\n\t\t\t<p class=\"bx--toast-notification__caption\" [innerHTML]=\"bannerObj.caption\"></p>\n\t\t</div>\n\t\t<button\n\t\t\tclass=\"bx--toast-notification__close-button\"\n\t\t\ttype=\"button\"\n\t\t\t[attr.aria-label]=\"bannerObj.closeLabel\"\n\t\t\t(click)=\"onClose()\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--toast-notification-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n\t",
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]]
        })
    ], Toast);
    return Toast;
}(_banner_component__WEBPACK_IMPORTED_MODULE_3__["Banner"]));



/***/ }),

/***/ "./src/button/button.directive.ts":
/*!****************************************!*\
  !*** ./src/button/button.directive.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A convinence directive for applying styling to a button.
 *
 * Example:
 *
 * ```hmtl
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 */
var Button = /** @class */ (function () {
    function Button() {
        /**
         * sets the button type
         */
        this.ibmButton = "primary";
        /**
         * Specify the size of the button
         */
        this.size = "normal";
        // a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
        this.baseClass = true;
        this.primary = true;
        this.secondary = false;
        this.tertiary = false;
        this.ghost = false;
        this.danger = false;
        this.dangerPrimary = false;
        this.smallSize = false;
    }
    Button.prototype.ngOnInit = function () {
        if (this.size === "sm") {
            this.smallSize = true;
        }
        this.primary = false;
        switch (this.ibmButton) {
            case "primary":
                this.primary = true;
                break;
            case "secondary":
                this.secondary = true;
                break;
            case "tertiary":
                this.tertiary = true;
                break;
            case "ghost":
                this.ghost = true;
                break;
            case "danger":
                this.danger = true;
                break;
            case "danger--primary":
                this.dangerPrimary = true;
                break;
            default:
                this.primary = true;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "ibmButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn"),
        __metadata("design:type", Object)
    ], Button.prototype, "baseClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--primary"),
        __metadata("design:type", Object)
    ], Button.prototype, "primary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--secondary"),
        __metadata("design:type", Object)
    ], Button.prototype, "secondary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--tertiary"),
        __metadata("design:type", Object)
    ], Button.prototype, "tertiary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--ghost"),
        __metadata("design:type", Object)
    ], Button.prototype, "ghost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--danger"),
        __metadata("design:type", Object)
    ], Button.prototype, "danger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--danger--primary"),
        __metadata("design:type", Object)
    ], Button.prototype, "dangerPrimary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--sm"),
        __metadata("design:type", Object)
    ], Button.prototype, "smallSize", void 0);
    Button = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmButton]"
        })
    ], Button);
    return Button;
}());



/***/ }),

/***/ "./src/button/button.module.ts":
/*!*************************************!*\
  !*** ./src/button/button.module.ts ***!
  \*************************************/
/*! exports provided: Button, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.directive */ "./src/button/button.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]],
            exports: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ButtonModule);
    return ButtonModule;
}());



/***/ }),

/***/ "./src/button/button.stories.ts":
/*!**************************************!*\
  !*** ./src/button/button.stories.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Button", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["ButtonModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<button ibmButton>A button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"secondary\">A secondary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"tertiary\">A tertiary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"ghost\">A ghost button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger\">A danger button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger--primary\">A primary danger button</button>\n\t\t"
}); })
    .add("Small", function () { return ({
    template: "\n\t\t\t<button ibmButton size=\"sm\">A button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"secondary\" size=\"sm\">A secondary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"tertiary\" size=\"sm\">A tertiary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"ghost\" size=\"sm\">A ghost button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger\" size=\"sm\">A danger button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger--primary\" size=\"sm\">A primary danger button</button>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/calendar/calendar-header.component.ts":
/*!***************************************************!*\
  !*** ./src/calendar/calendar-header.component.ts ***!
  \***************************************************/
/*! exports provided: CalendarHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeader", function() { return CalendarHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarHeader = /** @class */ (function () {
    function CalendarHeader() {
        this.currentView = new Date();
        this.monthCount = 1;
    }
    CalendarHeader.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    CalendarHeader.prototype.nextYear = function () {
        this.currentView.setFullYear(this.currentView.getFullYear() + 1);
    };
    CalendarHeader.prototype.nextMonth = function () {
        this.currentView.setMonth(this.currentView.getMonth() + 1);
    };
    CalendarHeader.prototype.previousYear = function () {
        this.currentView.setFullYear(this.currentView.getFullYear() - 1);
    };
    CalendarHeader.prototype.previousMonth = function () {
        this.currentView.setMonth(this.currentView.getMonth() - 1);
    };
    CalendarHeader.prototype.getYear = function () {
        return this.currentView.getFullYear();
    };
    CalendarHeader.prototype.getMonth = function (position) {
        if (position === void 0) { position = 0; }
        var currentMonthInView = (this.currentView.getMonth() + position) % 12;
        return _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"].monthsTranslateKeys[currentMonthInView];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "currentView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "monthCount", void 0);
    CalendarHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-header",
            template: "\n\t\t\t<nav class=\"pagination\" aria-label=\"year-pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"previousYear()\" title=\"Previous page\" aria-label=\"Previous page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_left\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"header === 'yearOnlyRange'\">{{getYear() - 5}} - {{getYear()}}</li>\n\t\t\t\t\t<li *ngIf=\"header !== 'yearOnlyRange'\">{{getYear()}}</li>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"nextYear()\" title=\"Next page\" aria-label=\"Next page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_right\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav\n\t\t\t*ngIf=\"header !== 'yearOnly' && header !== 'yearOnlyRange'\"\n\t\t\tclass=\"pagination month\"\n\t\t\taria-label=\"month-pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"previousMonth()\" title=\"Previous page\" aria-label=\"Previous page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_left\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li\n\t\t\t\t\tclass=\"month_view-month\"\n\t\t\t\t\t*ngFor=\"let month of range(monthCount)\">\n\t\t\t\t\t\t{{getMonth(month)}}\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"nextMonth()\" title=\"Next page\" aria-label=\"Next page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_right\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t"
        })
    ], CalendarHeader);
    return CalendarHeader;
}());



/***/ }),

/***/ "./src/calendar/calendar.component.ts":
/*!********************************************!*\
  !*** ./src/calendar/calendar.component.ts ***!
  \********************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Calendar = /** @class */ (function () {
    function Calendar() {
        this.monthCount = 1;
        // onKeyDown(evt, idx) {
        // 	console.log(evt, idx);
        // 	if (evt.key === "ArrowRight" && this.allButtons[idx + 1]) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx + 1].focus();
        // 	} else if (evt.key === "ArrowLeft" && idx > 0) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx - 1].focus();
        // 	} else if (evt.key === "ArrowUp" && idx - 7 >= 0) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx - 7].focus();
        // 	} else if (evt.key === "ArrowDown" && this.allButtons[idx + 7]) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx + 7].focus();
        // 	}
        // }
    }
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], Calendar.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "monthCount", void 0);
    Calendar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar",
            template: "\n\t\t<div class=\"calendar-view\">\n\t\t\t<ibm-calendar-month-view [model]=\"model\" [monthCount]=\"monthCount\" *ngIf=\"view == 'month'\"></ibm-calendar-month-view>\n\t\t\t<ibm-calendar-months-view [model]=\"model\" *ngIf=\"view == 'months'\"></ibm-calendar-months-view>\n\t\t\t<ibm-calendar-quarter-view [model]=\"model\" *ngIf=\"view == 'quarter'\"></ibm-calendar-quarter-view>\n\t\t\t<ibm-calendar-year-view [model]=\"model\" *ngIf=\"view == 'year'\"></ibm-calendar-year-view>\n\t\t</div>\n\t"
        })
    ], Calendar);
    return Calendar;
}());



/***/ }),

/***/ "./src/calendar/calendar.module.ts":
/*!*****************************************!*\
  !*** ./src/calendar/calendar.module.ts ***!
  \*****************************************/
/*! exports provided: DateTimeModel, CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/calendar/calendar.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icon/icon.module */ "./src/icon/icon.module.ts");
/* harmony import */ var _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./month-view/calendar-month.component */ "./src/calendar/month-view/calendar-month.component.ts");
/* harmony import */ var _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./months-view/calendar-months.component */ "./src/calendar/months-view/calendar-months.component.ts");
/* harmony import */ var _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quarter-view/calendar-quarter.component */ "./src/calendar/quarter-view/calendar-quarter.component.ts");
/* harmony import */ var _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./year-view/calendar-year.component */ "./src/calendar/year-view/calendar-year.component.ts");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-header.component */ "./src/calendar/calendar-header.component.ts");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return _date_time_model_class__WEBPACK_IMPORTED_MODULE_9__["DateTimeModel"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
                _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonth"],
                _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonths"],
                _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarQuarter"],
                _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__["CalendarYear"],
                _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__["CalendarHeader"]
            ],
            exports: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
                _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonth"],
                _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonths"],
                _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarQuarter"],
                _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__["CalendarYear"],
                _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__["CalendarHeader"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["IconModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["StaticIconModule"]
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/calendar/date-time-model.class.ts":
/*!***********************************************!*\
  !*** ./src/calendar/date-time-model.class.ts ***!
  \***********************************************/
/*! exports provided: DateTimeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return DateTimeModel; });
var DateTimeModel = /** @class */ (function () {
    function DateTimeModel(startDate, endDate) {
        /**
         * 0 = Sunday
         * 1 = Monday
         * 2 = Tuesday
         * 3 = Wednesday
         * 4 = Thursday
         * 5 = Friday
         * 6 = Saturday
         *
         * Defaults to 0 (Sunday)
         *
         * @memberof DateTimeModel
         */
        this.weekStart = 0;
        /**
         * An array of disabled dates and/or date ranges.
         *
         * Date is a Javascript `Date`. Range is an array with a start and end `Date`.
         * If any of those is `null`, it represents an open range.
         *
         * ```typescript
         * // dates (July 10th, 2018 and August 10th, 2018)
         * [new Date(2018, 6, 10), new Date(2018, 7, 10)]
         *
         * // date (July 10th, 2018) and a range (from August 10th, 2018 to forever)
         * [new Date(2018, 6, 10), [new Date(2018, 7, 10), null]]
         * ```
         *
         * @memberof DateTimeModel
         */
        this.disabledDates = [];
        this.startDate = startDate;
        this.endDate = endDate;
    }
    DateTimeModel.dayStart = function (day) {
        return new Date(day.getFullYear(), day.getMonth(), day.getDate());
    };
    DateTimeModel.dayEnd = function (day) {
        return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
    };
    Object.defineProperty(DateTimeModel.prototype, "daysOfWeek", {
        /**
         * An array of short week names, starting from `weekStart`.
         *
         * @readonly
         * @memberof DateTimeModel
         */
        get: function () {
            var sunday = new Date(2018, 5, 10);
            var result = [];
            for (var i = this.weekStart; i < this.weekStart + 7; i++) {
                var day = new Date(sunday);
                day.setDate(day.getDate() + i);
                result.push(DateTimeModel.shortWeekdaysTranslateKeys[day.getDay()]);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the full day that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectDay = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = DateTimeModel.dayStart(day);
        this.endDate = DateTimeModel.dayEnd(day);
    };
    /**
     * Selects the week that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectWeek = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = this.weekStartDate(day);
        this.endDate = this.weekStartDate(day);
        this.endDate.setDate(this.endDate.getDate() + 6);
        this.endDate.setHours(23);
        this.endDate.setMinutes(59);
        this.endDate.setSeconds(59);
    };
    /**
     * Convenience function that selects today.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectToday = function () {
        this.selectDay(new Date());
    };
    /**
     * Selects yesterday.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectYesterday = function () {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        this.selectDay(yesterday);
    };
    /**
     * Selects a week that `targetDate` belongs to from the beginning
     * (as set with `weekStart`) until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectWeekToDate = function (targetDate) {
        if (targetDate === void 0) { targetDate = new Date(); }
        this.startDate = this.weekStartDate(targetDate);
        this.endDate = targetDate;
    };
    /**
     * Selects a `monthCount` of months ending with the one that `targetDate` belongs to
     * from the beginning of the first until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @param {number} [monthCount=1]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonthsToDate = function (targetDate, monthCount) {
        if (targetDate === void 0) { targetDate = new Date(); }
        if (monthCount === void 0) { monthCount = 1; }
        this.startDate = new Date(targetDate.getFullYear(), targetDate.getMonth() - monthCount + 1, 1);
        this.endDate = targetDate;
    };
    /**
     * Selects month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonth = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = new Date(day.getFullYear(), day.getMonth(), 1);
        this.selectMonthEnd(day);
    };
    /**
     * Selects end of month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonthEnd = function (day) {
        if (day === void 0) { day = new Date(); }
        this.endDate = new Date(day.getFullYear(), day.getMonth() + 1, 0, 23, 59, 59); // 0 selects last day of previous month
    };
    /**
     * Selects previous month.
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectLastMonth = function () {
        var now = new Date();
        this.selectMonth(new Date(now.getFullYear(), now.getMonth() - 1, 1));
    };
    /**
     * Selects a quarter that `targetDate` belongs to from the first day of the
     * quarter to `targetDate`.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarterToDate = function (targetDate) {
        if (targetDate === void 0) { targetDate = new Date(); }
        var year = targetDate.getFullYear();
        var time = targetDate.getTime();
        var quarters = [new Date(year, 0, 1), new Date(year, 3, 1), new Date(year, 6, 1), new Date(year, 9, 1)];
        var quarterTimes = quarters.map(function (q) { return q.getTime(); });
        if (quarterTimes[0] < time && time < quarterTimes[1]) {
            // Q1
            this.startDate = quarters[0];
        }
        else if (quarterTimes[1] < time && time < quarterTimes[2]) {
            // Q2
            this.startDate = quarters[1];
        }
        else if (quarterTimes[2] < time && time < quarterTimes[3]) {
            // Q3
            this.startDate = quarters[2];
        }
        else {
            // Q4
            this.startDate = quarters[3];
        }
        this.endDate = targetDate;
    };
    /**
     * Select a `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarter = function (quarter, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.selectQuarterStart(quarter, year);
        this.selectQuarterEnd(quarter, year);
    };
    /**
     * Sets a `startDate` to start of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarterStart = function (quarter, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.startDate = new Date(year, quarter * 3, 1);
    };
    /**
     * Sets an `endDate` to end of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    };
    };
    /**
     *
     */
    };
