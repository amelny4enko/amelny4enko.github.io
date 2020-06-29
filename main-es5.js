function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _pages_page_1_page_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/page-1/page-1.component */
    "./src/app/pages/page-1/page-1.component.ts");
    /* harmony import */


    var _pages_page_2_page_2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/page-2/page-2.component */
    "./src/app/pages/page-2/page-2.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [["mat-align-tabs", "center"], ["label", "Page 1"], ["label", "Page 2"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-page-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _pages_page_1_page_1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"], _pages_page_2_page_2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]],
      styles: ["* {\n  box-sizing: border-box;\n  font: 400 12px system-ui;\n}\n\n.page {\n  padding: 16px;\n}\n\n.page button {\n  width: 100px;\n}\n\n.page table {\n  min-width: 100%;\n}\n\n.page table tr:nth-child(even) {\n  background-color: #ebebeb;\n}\n\n.page table tr td {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.page table tr td:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURHTTtFQUNFLHlCQUFBO0FDRFI7O0FESU07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDRSxnQkFBQTtBQ0ZWIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IDQwMCAxMnB4IHN5c3RlbS11aTtcbn1cblxuLnBhZ2Uge1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAwJTtcblxuICAgIHRyIHtcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogNDAwIDEycHggc3lzdGVtLXVpO1xufVxuXG4ucGFnZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ucGFnZSBidXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucGFnZSB0YWJsZSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5wYWdlIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG4ucGFnZSB0YWJsZSB0ciB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnBhZ2UgdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_page_1_page_1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/page-1/page-1.component */
    "./src/app/pages/page-1/page-1.component.ts");
    /* harmony import */


    var _pages_page_1_page_1_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/page-1/page-1.service */
    "./src/app/pages/page-1/page-1.service.ts");
    /* harmony import */


    var _pages_page_2_page_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/page-2/page-2.component */
    "./src/app/pages/page-2/page-2.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_pages_page_1_page_1_service__WEBPACK_IMPORTED_MODULE_11__["Page1Service"]],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_page_1_page_1_component__WEBPACK_IMPORTED_MODULE_10__["Page1Component"], _pages_page_2_page_2_component__WEBPACK_IMPORTED_MODULE_12__["Page2Component"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_page_1_page_1_component__WEBPACK_IMPORTED_MODULE_10__["Page1Component"], _pages_page_2_page_2_component__WEBPACK_IMPORTED_MODULE_12__["Page2Component"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]],
          providers: [_pages_page_1_page_1_service__WEBPACK_IMPORTED_MODULE_11__["Page1Service"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page-1/page-1.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/page-1/page-1.component.ts ***!
    \**************************************************/

  /*! exports provided: Page1Component */

  /***/
  function srcAppPagesPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
      return Page1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _page_1_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-1.constants */
    "./src/app/pages/page-1/page-1.constants.ts");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _page_1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-1.service */
    "./src/app/pages/page-1/page-1.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Page1Component_div_12_tr_2_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 13);
      }

      if (rf & 2) {
        var cell_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "mark": a0
      };
    };

    function Page1Component_div_12_tr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page1Component_div_12_tr_2_td_1_Template, 1, 1, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r2[0] === ctx_r1.markQuarter));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
      }
    }

    function Page1Component_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Page1Component_div_12_tr_2_Template, 2, 4, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
      }
    }

    var Page1Component = /*#__PURE__*/function () {
      function Page1Component(clipboard, httpClient, page1Service) {
        _classCallCheck(this, Page1Component);

        this.clipboard = clipboard;
        this.httpClient = httpClient;
        this.page1Service = page1Service;
        this.data = [];
        this.head = _page_1_constants__WEBPACK_IMPORTED_MODULE_3__["TABLE_HEAD"];
        this.markQuarter = '2019 IV';
        this.minYear = 2007;
      }

      _createClass(Page1Component, [{
        key: "onClear",
        value: function onClear() {
          this.macrotrendsInput = '';
          this.discoverciInput = '';
          this.data = [];
        }
      }, {
        key: "onCopy",
        value: function onCopy() {
          var str = '';
          this.data.slice(1).forEach(function (row) {
            return str += "".concat(row.slice(1).join('\t'), "\n");
          });
          str += "Company\t".concat(this.companyShort.toUpperCase(), "\n");
          this.clipboard.copy(str);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var _this = this;

          this.getCompany();
          var uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.fetchData(Types.TABLE, '/cash-flow-from-financial-activities', ['Annual Cash Flow from Financial Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-investing-activities', ['Annual Cash Flow from Investing Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-operating-activities', ['Annual Cash Flow from Operating Activities']), this.fetchData(Types.TABLE, '/cash-on-hand', ['Quarterly Cash on Hand']), this.fetchData(Types.TABLE, '/current-ratio', ['Current Ratio Historical Data']), this.fetchData(Types.TABLE, '/ebit', ['Quarterly EBIT']), this.fetchData(Types.TABLE, '/ebitda', ['Quarterly EBITDA']), this.fetchData(Types.TABLE, '/eps-earnings-per-share-diluted', ['Quarterly EPS']), this.fetchData(Types.TABLE, '/gross-margin', ['Gross Margin Historical Data']), this.fetchData(Types.TABLE, '/gross-profit', ['Quarterly Gross Profit']), this.fetchData(Types.TABLE, '/net-cash-flow', ['Annual Net Cash Flow']), this.fetchData(Types.TABLE, '/net-income', ['Quarterly Net Income']), this.fetchData(Types.TABLE, '/net-profit-margin', ['Net Profit Margin Historical Data']), this.fetchData(Types.TABLE, '/number-of-employees', ['Annual Number of Employees']), this.fetchData(Types.TABLE, '/operating-income', ['Quarterly Operating Income']), this.fetchData(Types.TABLE, '/operating-margin', ['Operating Margin Historical Data']), this.fetchData(Types.TABLE, '/pe-ration', ['PE Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-book', ['Price/Book Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-fcf', ['Price to Free Cash Flow Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-sales', ['P/S Ratio Historical Data']), this.fetchData(Types.TABLE, '/quick-ratio', ['Quick Ratio Historical Data']), this.fetchData(Types.TABLE, '/revenue', ['Quarterly Revenue']), this.fetchData(Types.TABLE, '/roa', ['ROA - Return on Assets Historical Data']), this.fetchData(Types.TABLE, '/roe', ['ROE - Return on Equity Historical Data']), this.fetchData(Types.TABLE, '/roi', ['ROI - Return on Investment Historical Data']), this.fetchData(Types.TABLE, '/shares-outstanding', ['Quarterly Shares Outstanding']), this.fetchData(Types.TABLE, '/total-common-preferred-stock-dividends-paid', ['Annual Total Common and Preferred Stock Dividends Paid']), this.fetchData(Types.TABLE, '/total-depreciation-amortization-cash-flow', ['Annual Total Depreciation and Amortization - Cash Flow']), this.fetchData(Types.TABLE, '/total-liabilities', ['Quarterly Total Liabilities']), this.fetchData(Types.TABLE, '/total-long-term-assets', ['Quarterly Total Long-Term Assets']), this.fetchData(Types.TABLE, '/total-long-term-liabilities', ['Quarterly Total Long Term Liabilities']), this.fetchData(Types.TABLE, '/total-share-holder-equity', ['Quarterly Share Holder Equity']), this.fetchData(Types.DATABASE, '/financial-ratios', ['Asset Turnover', 'Inventory Turnover Ratio', 'Receiveable Turnover']), this.fetchData(Types.CHART, null, ['Quarterly Shares Growth']), this.fetchData(Types.DISCOVERCI, null, ['Payables turnover'])).subscribe(function (tables) {
            uns.unsubscribe();
            _this.data = _this.page1Service.createTable(_this.minYear, _this.head);
            tables.forEach(function (table) {
              return _this.fillTable(table);
            });
          });
        }
      }, {
        key: "getCompany",
        value: function getCompany() {
          if (this.macrotrendsInput.includes(this.urlMacrotrendsPart)) {
            this.companyFull = this.macrotrendsInput.slice(this.urlMacrotrendsPart.length, this.macrotrendsInput.lastIndexOf('/'));
            this.companyShort = this.companyFull.slice(0, this.companyFull.indexOf('/'));
          } else {
            this.companyFull = this.macrotrendsInput + '/' + this.macrotrendsInput;
            this.companyShort = this.macrotrendsInput;
          }
        }
      }, {
        key: "fillTable",
        value: function fillTable(table) {
          var _this2 = this;

          if (table.length > 1) {
            var quarters = this.page1Service.quarters(this.minYear);
            var ctable = Object.assign([], table);
            var headMap = [];
            ctable.splice(0, 1)[0].forEach(function (cell) {
              return headMap.push(_this2.head.findIndex(function (globalCell) {
                return globalCell.toLowerCase() === cell.toLowerCase();
              }));
            });
            headMap[0] = -1;
            ctable.forEach(function (row) {
              var time = new Date(row[0].length === 4 ? row[0] + '-12-01' : row[0]).getTime();
              var globalRowIndex = quarters.findIndex(function (quarter) {
                return quarter.min <= time && time <= quarter.max;
              });

              if (globalRowIndex !== -1) {
                row.forEach(function (cell, cellIndex) {
                  if (headMap[cellIndex] !== -1) {
                    cell = String(cell).replace(/[,$%</]/gi, '');

                    if (String(cell).includes('B')) {
                      cell = String(cell).replace(/B/gi, '');

                      if (!isNaN(+cell)) {
                        cell = +cell * 1000000000;
                        cell = Math.floor(cell);
                      }
                    }

                    cell = Math.ceil(+cell * 100) / 100;
                    cell = String(cell).replace(/\./gi, ',');
                    _this2.data[globalRowIndex + 1][headMap[cellIndex]] = cell;
                  }
                });
              }
            });
          }
        }
      }, {
        key: "fetchData",
        value: function fetchData(type, path, names) {
          var _this3 = this;

          if (this.getUrl(type, path)) {
            return this.httpClient.get(this.getUrl(type, path), {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              var clearText = _this3.page1Service.clearText(response || '');

              switch (type) {
                case Types.TABLE:
                  return _this3.parseTable(clearText, names[0]);

                case Types.DATABASE:
                  return _this3.parseDatabase(clearText, names);

                case Types.CHART:
                  return _this3.parseChart(clearText, names[0]);

                case Types.DISCOVERCI:
                  return _this3.parseDiscoverci(clearText, names[0]);
              }
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
      }, {
        key: "parseTable",
        value: function parseTable(text, name) {
          var _this4 = this;

          var tableArr = text.match(/<table(.*?)table>/gi) || [];
          var tableStr = tableArr.find(function (item) {
            return item.match(new RegExp(name, 'i'));
          }) || '';

          if (!tableStr) {
            return [];
          }

          var headArr = tableStr.match(/<thead(.*?)thead>/gi) || [];
          var bodyArr = tableStr.match(/<tbody(.*?)tbody>/gi) || [];
          var head = headArr[1] && headArr[1].slice(15, -18).split('</th><th>') || ['Date', name];
          var body = [];
          var rows = bodyArr[0] && bodyArr[0].slice(11, -13).split('</tr><tr>');
          rows.forEach(function (row) {
            var cells = row.slice(4, -5).split('</td><td>');

            if (String(_this4.minYear) <= cells[0]) {
              cells.forEach(function (cell, cellIndex) {
                return cells[cellIndex] = _this4.page1Service.getValue(cell);
              });
              body.push(cells);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "parseDatabase",
        value: function parseDatabase(text, names) {
          var _this5 = this;

          var dataArr = text.match(/var originalData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(19);
          var dataObj = this.page1Service.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          var head = ['Date'];
          var body = [];
          names.forEach(function (name) {
            dataObj.find(function (item) {
              if (item.field_name.includes(name)) {
                head.push(name);

                var _loop = function _loop(e) {
                  if (item.hasOwnProperty(e) && !isNaN(new Date(e).getTime()) && String(_this5.minYear) <= e) {
                    if (head.length < 3) {
                      body.push([e.slice(0, 4), _this5.page1Service.getValue(item[e])]);
                    } else {
                      body.find(function (row) {
                        if (row[0] === e.slice(0, 4)) {
                          row.push(_this5.page1Service.getValue(item[e]));
                        }
                      });
                    }
                  }
                };

                for (var e in item) {
                  _loop(e);
                }
              }
            });
          });
          return [head].concat(body);
        }
      }, {
        key: "parseChart",
        value: function parseChart(text, name) {
          var _this6 = this;

          var dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(16);
          var dataObj = this.page1Service.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          var head = ['Date', name];
          var body = [];
          dataObj.forEach(function (item) {
            if (String(_this6.minYear) <= item.date) {
              body.push([item.date, _this6.page1Service.getValue(item.v3)]);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "parseDiscoverci",
        value: function parseDiscoverci(text, name) {
          var dataArr = text.match(/var metricData = anychart.data.set\((.*?)\)/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(35, -1);
          var dataObj = this.page1Service.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          return [['Date', name]].concat(_toConsumableArray(dataObj));
        }
      }, {
        key: "getUrl",
        value: function getUrl(type, path) {
          switch (type) {
            case Types.TABLE:
            case Types.DATABASE:
              return this.urlMacrotrendsPart + this.companyFull + path;

            case Types.CHART:
              return this.urlMacrotrendsCustom1;

            case Types.DISCOVERCI:
              return this.discoverciInput || this.urlDiscoverciCustom1;
          }
        }
      }, {
        key: "urlMacrotrendsHome",
        get: function get() {
          return 'https://www.macrotrends.net/';
        }
      }, {
        key: "urlMacrotrendsPart",
        get: function get() {
          return "".concat(this.urlMacrotrendsHome, "stocks/charts/");
        }
      }, {
        key: "urlMacrotrendsCustom1",
        get: function get() {
          return "".concat(this.urlMacrotrendsHome, "assets/php/fundamental_iframe.php?t=").concat(this.companyShort, "&type=shares-outstanding&statement=income-statement&freq=Q");
        }
      }, {
        key: "urlDiscoverciCustom1",
        get: function get() {
          return "https://www.discoverci.com/companies/".concat(this.companyShort, "/accounts-payable-turnover");
        }
      }]);

      return Page1Component;
    }();

    Page1Component.ɵfac = function Page1Component_Factory(t) {
      return new (t || Page1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page_1_service__WEBPACK_IMPORTED_MODULE_6__["Page1Service"]));
    };

    Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page1Component,
      selectors: [["app-page-1"]],
      decls: 13,
      vars: 5,
      consts: [[1, "page", "page-1"], [1, "head"], [1, "col"], ["placeholder", "https://www.macrotrends.net/...", 3, "ngModel", "ngModelChange"], ["placeholder", "https://www.discoverci.com/...", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], ["mat-stroked-button", "", 3, "click"], ["class", "body", 4, "ngIf"], [1, "body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function Page1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Page1Component_Template_input_ngModelChange_3_listener($event) {
            return ctx.macrotrendsInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Page1Component_Template_input_ngModelChange_4_listener($event) {
            return ctx.discoverciInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page1Component_Template_button_click_6_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page1Component_Template_button_click_8_listener() {
            return ctx.onCopy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page1Component_Template_button_click_10_listener() {
            return ctx.onClear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Page1Component_div_12_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.discoverciInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.data.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      styles: [".page-1 .head {\n  display: flex;\n  margin-bottom: 16px;\n}\n.page-1 .head .col:nth-child(1) {\n  margin-right: 16px;\n}\n.page-1 .head .col input {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  display: block;\n  height: 36px;\n  width: 400px;\n  padding: 0 16px;\n}\n.page-1 .head .col input:not(:first-child) {\n  margin-top: 8px;\n}\n.page-1 .head .col button:not(:first-child) {\n  margin-left: 8px;\n}\n.page-1 .body {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  width: 100%;\n  overflow: scroll;\n}\n.page-1 .body table tr:first-child td {\n  vertical-align: top;\n  white-space: normal;\n}\n.page-1 .body table tr.mark {\n  background-color: yellow !important;\n}\n.page-1 .body table tr td {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9wYWdlcy9wYWdlLTEvcGFnZS0xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlLTEvcGFnZS0xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUo7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURJTTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRlI7QURJUTtFQUNFLGVBQUE7QUNGVjtBRE9RO0VBQ0UsZ0JBQUE7QUNMVjtBRFdFO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEY1U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDWlo7QURnQlE7RUFDRSxtQ0FBQTtBQ2RWO0FEaUJRO0VBQ0UsY0FBQTtBQ2ZWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS0xL3BhZ2UtMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLTEge1xuICAuaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgLmNvbCB7XG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgdGFibGUge1xuICAgICAgdHIge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hcmsge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIi5wYWdlLTEgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnBhZ2UtMSAuaGVhZCAuY29sOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5wYWdlLTEgLmhlYWQgLmNvbCBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4ucGFnZS0xIC5oZWFkIC5jb2wgaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ucGFnZS0xIC5oZWFkIC5jb2wgYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5wYWdlLTEgLmJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnBhZ2UtMSAuYm9keSB0YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4ucGFnZS0xIC5ib2R5IHRhYmxlIHRyLm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cbi5wYWdlLTEgLmJvZHkgdGFibGUgdHIgdGQge1xuICBmb250LXNpemU6IDhweDtcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-1',
          templateUrl: './page-1.component.html',
          styleUrls: ['./page-1.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _page_1_service__WEBPACK_IMPORTED_MODULE_6__["Page1Service"]
        }];
      }, null);
    })();

    var Types;

    (function (Types) {
      Types[Types["TABLE"] = 0] = "TABLE";
      Types[Types["DATABASE"] = 1] = "DATABASE";
      Types[Types["CHART"] = 2] = "CHART";
      Types[Types["DISCOVERCI"] = 3] = "DISCOVERCI";
    })(Types || (Types = {}));
    /***/

  },

  /***/
  "./src/app/pages/page-1/page-1.constants.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/page-1/page-1.constants.ts ***!
    \**************************************************/

  /*! exports provided: TABLE_HEAD */

  /***/
  function srcAppPagesPage1Page1ConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TABLE_HEAD", function () {
      return TABLE_HEAD;
    });

    var TABLE_HEAD = ['Quarters', 'Stock Price', 'Quarterly Revenue', 'Quarterly Gross Profit', 'Quarterly Operating Income', 'Quarterly EBITDA', 'Quarterly EBIT', 'Quarterly Net Income', 'Annual Net Cash Flow', 'Annual Cash Flow from Operating Activities', 'Annual Cash Flow from Investing Activities', 'Annual Cash Flow from Financial Activities', 'Quarterly Cash on Hand', 'Gross Margin', 'Operating Margin', 'Net Margin', 'Payables turnover', 'Total Assets', 'Current Assets', 'Quarterly Total Long-Term Assets', 'Quarterly Share Holder Equity', 'Asset Turnover', 'Inventory Turnover Ratio', 'Quarterly Total Liabilities', 'Current Liabilities', 'Quarterly Total Long Term Liabilities', 'Receiveable Turnover', 'Annual Total Depreciation and Amortization - Cash Flow', 'Price to Book Ratio', 'Price to FCF Ratio', 'Price to Sales Ratio', 'Quick Ratio', 'Annual Number of Employees', 'Annual Total Common and Preferred Stock Dividends Paid', 'Quarterly Shares Outstanding', 'Quarterly Shares Growth', 'Return on Investment', 'Return on Assets', 'Return on Equity'];
    /***/
  },

  /***/
  "./src/app/pages/page-1/page-1.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/page-1/page-1.service.ts ***!
    \************************************************/

  /*! exports provided: Page1Service */

  /***/
  function srcAppPagesPage1Page1ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Service", function () {
      return Page1Service;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page1Service = /*#__PURE__*/function () {
      function Page1Service() {
        _classCallCheck(this, Page1Service);
      }

      _createClass(Page1Service, [{
        key: "createTable",
        value: function createTable(minYear, head) {
          var quarters = this.quarters(minYear);
          var data = [head];
          quarters.forEach(function (quarter) {
            var row = [];
            head.forEach(function () {
              return row.push(0);
            });
            row[0] = quarter.val;
            data.push(row);
          });
          return data;
        }
      }, {
        key: "quarters",
        value: function quarters(minYear) {
          var quarters = [];
          var quarterNames = ['IV', 'III', 'II', 'I'];
          var quarterRange = [{
            min: 9,
            max: 0
          }, {
            min: 6,
            max: 9
          }, {
            min: 3,
            max: 6
          }, {
            min: 0,
            max: 3
          }];

          var _loop2 = function _loop2(year) {
            quarterNames.forEach(function (quarter, index) {
              quarters.push({
                val: "".concat(year, " ").concat(quarter),
                min: new Date(year, quarterRange[index].min, 1).getTime(),
                max: new Date(index ? year : year + 1, quarterRange[index].max, 1).getTime() - 1
              });
            });
          };

          for (var year = new Date().getFullYear(); year >= minYear; year--) {
            _loop2(year);
          }

          return quarters;
        }
      }, {
        key: "clearText",
        value: function clearText(text) {
          return text.replace(/[^\S ]/gi, '').replace(/ style="text-align:(\w+);?"/gi, '').replace(/ {2}/gi, ' ').replace(/> </gi, '><');
        }
      }, {
        key: "getValue",
        value: function getValue(str) {
          return /\d/.test(String(str)) ? String(str) : '0';
        }
      }, {
        key: "parseJSON",
        value: function parseJSON(data) {
          try {
            return JSON.parse(data);
          } catch (e) {
            return null;
          }
        }
      }]);

      return Page1Service;
    }();

    Page1Service.ɵfac = function Page1Service_Factory(t) {
      return new (t || Page1Service)();
    };

    Page1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Page1Service,
      factory: Page1Service.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page-2/page-2.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/page-2/page-2.component.ts ***!
    \**************************************************/

  /*! exports provided: Page2Component */

  /***/
  function srcAppPagesPage2Page2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page2Component", function () {
      return Page2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Page2Component_tr_13_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r3);
      }
    }

    function Page2Component_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page2Component_tr_13_td_1_Template, 2, 1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
      }
    }

    var Page2Component = /*#__PURE__*/function () {
      function Page2Component(clipboard, httpClient) {
        _classCallCheck(this, Page2Component);

        this.clipboard = clipboard;
        this.httpClient = httpClient;
        this.data = [];
      }

      _createClass(Page2Component, [{
        key: "onSearch",
        value: function onSearch() {
          var _this7 = this;

          this.data = [];
          var ids = this.ids.toLowerCase().replace(/ /gi, '').split('\n');
          ids.forEach(function (id) {
            return _this7.fetchData(id);
          });
        }
      }, {
        key: "fetchData",
        value: function fetchData(id) {
          var _this8 = this;

          var sub = this.httpClient.get(this.url(id)).subscribe(function (response) {
            sub.unsubscribe();

            _this8.calc(id, response);
          });
        }
      }, {
        key: "calc",
        value: function calc(id, response) {
          var _a, _b, _c, _d, _e, _f;

          var currentPrice = (_c = (_b = (_a = response.chart) === null || _a === void 0 ? void 0 : _a.result[0]) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.regularMarketPrice;
          var previousPrice = (_f = (_e = (_d = response.chart) === null || _d === void 0 ? void 0 : _d.result[0]) === null || _e === void 0 ? void 0 : _e.meta) === null || _f === void 0 ? void 0 : _f.previousClose;

          if (!isNaN(currentPrice) && !isNaN(previousPrice)) {
            var priceDifference = Math.round((currentPrice - previousPrice) * 100) / 100;
            var percentDifference = Math.round(priceDifference / previousPrice * 10000) / 100;
            this.data.push([id.toUpperCase(), this.val(currentPrice), this.val(priceDifference), this.val(percentDifference) + '%']);
          }
        }
      }, {
        key: "val",
        value: function val(_val) {
          return String(_val).replace(/\./gi, ',');
        }
      }, {
        key: "onCopy",
        value: function onCopy() {
          var str = '';
          this.data.forEach(function (row) {
            return str += "".concat(row.join('\t'), "\n");
          });
          this.clipboard.copy(str);
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.ids = '';
          this.data = [];
        }
      }, {
        key: "url",
        value: function url(id) {
          return "https://query1.finance.yahoo.com/v8/finance/chart/".concat(id);
        }
      }]);

      return Page2Component;
    }();

    Page2Component.ɵfac = function Page2Component_Factory(t) {
      return new (t || Page2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page2Component,
      selectors: [["app-page-2"]],
      decls: 14,
      vars: 4,
      consts: [[1, "page", "page-2"], [1, "content"], [1, "col"], [3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], ["mat-stroked-button", "", 3, "click"], [4, "ngFor", "ngForOf"]],
      template: function Page2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Page2Component_Template_textarea_ngModelChange_3_listener($event) {
            return ctx.ids = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_5_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_7_listener() {
            return ctx.onCopy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_9_listener() {
            return ctx.onClear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Page2Component_tr_13_Template, 2, 1, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ids);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ids);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.data.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".page-2 {\n  display: flex;\n  justify-content: center;\n}\n.page-2 .content {\n  display: flex;\n}\n.page-2 .col:nth-child(1), .page-2 .col:nth-child(3) {\n  width: 250px;\n  height: 500px;\n  overflow: scroll;\n}\n.page-2 .col:nth-child(3) {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 8px 16px;\n}\n.page-2 .col:nth-child(2) {\n  margin: 0 16px;\n}\n.page-2 .col textarea {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  height: 100%;\n  width: 100%;\n  padding: 8px 16px;\n  resize: none;\n}\n.page-2 .col button {\n  display: block;\n}\n.page-2 .col button:not(:first-child) {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9wYWdlcy9wYWdlLTIvcGFnZS0yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlLTIvcGFnZS0yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUk7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FETUk7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNKTjtBRE9JO0VBS0UsY0FBQTtBQ1ROO0FES007RUFDRSxlQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlLTIvcGFnZS0yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbCB7XG4gICAgJjpudGgtY2hpbGQoMSksICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4iLCIucGFnZS0yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFnZS0yIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wYWdlLTIgLmNvbDpudGgtY2hpbGQoMSksIC5wYWdlLTIgLmNvbDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ucGFnZS0yIC5jb2w6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5wYWdlLTIgLmNvbDpudGgtY2hpbGQoMikge1xuICBtYXJnaW46IDAgMTZweDtcbn1cbi5wYWdlLTIgLmNvbCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5wYWdlLTIgLmNvbCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdlLTIgLmNvbCBidXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-2',
          templateUrl: './page-2.component.html',
          styleUrls: ['./page-2.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/oleksiimelnychenko/Projects/robot/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map