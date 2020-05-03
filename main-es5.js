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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r3);
      }
    }

    function AppComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var quarter_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", quarter_r4.val);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quarter_r4.val);
      }
    }

    function AppComponent_tr_17_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 12);
      }

      if (rf & 2) {
        var cell_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "mark": a0
      };
    };

    function AppComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_17_td_1_Template, 1, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r5 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r5[0] === ctx_r2.markQuarter));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(httpClient) {
        _classCallCheck(this, AppComponent);

        this.httpClient = httpClient;
        this.minYearList = [2010, 2009, 2008, 2007, 2006];
        this.minYear = 2007;
        this.markQuarter = '2019 IV';
        this.table = [];
        this.head = ['Quarters', 'Payables turnover', 'Asset Turnover', 'Annual Cash Flow from Financial Activities', 'Annual Cash Flow from Investing Activities', 'Annual Cash Flow from Operating Activities', 'Quarterly Cash on Hand', 'Annual Total Depreciation and Amortization - Cash Flow', 'Annual Total Common and Preferred Stock Dividends Paid', 'Quarterly EBITDA', 'Quarterly EBIT', 'Gross Margin', 'Quarterly Gross Profit', 'Inventory Turnover Ratio', 'Annual Net Cash Flow', 'Quarterly Net Income', 'Net Margin', 'Annual Number of Employees', 'Quarterly Operating Income', 'Operating Margin', 'Price to Book Ratio', 'Price to FCF Ratio', 'Price to Sales Ratio', 'Quick Ratio', 'Quarterly Shares Growth', 'Quarterly Shares Outstanding', 'Receiveable Turnover', 'Quarterly Revenue', 'Return on Assets', 'Return on Equity', 'Return on Investment', 'Quarterly Share Holder Equity', 'Stock Price', 'Total Assets', 'Current Assets', 'Current Liabilities', 'Quarterly Total Liabilities', 'Quarterly Total Long Term Liabilities', 'Quarterly Total Long-Term Assets', 'Tech column'];
        this.quarters = [];
      }

      _createClass(AppComponent, [{
        key: "start",
        value: function start() {
          var _this = this;

          if (this.macrotrendsInput.includes(this.macrotrendsTableUrl)) {
            this.getCompany();
            var uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.fetchData(Types.TABLE, '/cash-flow-from-financial-activities', ['Annual Cash Flow from Financial Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-investing-activities', ['Annual Cash Flow from Investing Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-operating-activities', ['Annual Cash Flow from Operating Activities']), this.fetchData(Types.TABLE, '/cash-on-hand', ['Quarterly Cash on Hand']), this.fetchData(Types.TABLE, '/current-ratio', ['Current Ratio Historical Data']), this.fetchData(Types.TABLE, '/ebit', ['Quarterly EBIT']), this.fetchData(Types.TABLE, '/ebitda', ['Quarterly EBITDA']), this.fetchData(Types.TABLE, '/eps-earnings-per-share-diluted', ['Quarterly EPS']), this.fetchData(Types.TABLE, '/gross-margin', ['Gross Margin Historical Data']), this.fetchData(Types.TABLE, '/gross-profit', ['Quarterly Gross Profit']), this.fetchData(Types.TABLE, '/net-cash-flow', ['Annual Net Cash Flow']), this.fetchData(Types.TABLE, '/net-income', ['Quarterly Net Income']), this.fetchData(Types.TABLE, '/net-profit-margin', ['Net Profit Margin Historical Data']), this.fetchData(Types.TABLE, '/number-of-employees', ['Annual Number of Employees']), this.fetchData(Types.TABLE, '/operating-income', ['Quarterly Operating Income']), this.fetchData(Types.TABLE, '/operating-margin', ['Operating Margin Historical Data']), this.fetchData(Types.TABLE, '/pe-ration', ['PE Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-book', ['Price/Book Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-fcf', ['Price to Free Cash Flow Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-sales', ['P/S Ratio Historical Data']), this.fetchData(Types.TABLE, '/quick-ratio', ['Quick Ratio Historical Data']), this.fetchData(Types.TABLE, '/revenue', ['Quarterly Revenue']), this.fetchData(Types.TABLE, '/roa', ['ROA - Return on Assets Historical Data']), this.fetchData(Types.TABLE, '/roe', ['ROE - Return on Equity Historical Data']), this.fetchData(Types.TABLE, '/roi', ['ROI - Return on Investment Historical Data']), this.fetchData(Types.TABLE, '/shares-outstanding', ['Quarterly Shares Outstanding']), this.fetchData(Types.TABLE, '/total-common-preferred-stock-dividends-paid', ['Annual Total Common and Preferred Stock Dividends Paid']), this.fetchData(Types.TABLE, '/total-depreciation-amortization-cash-flow', ['Annual Total Depreciation and Amortization - Cash Flow']), this.fetchData(Types.TABLE, '/total-liabilities', ['Quarterly Total Liabilities']), this.fetchData(Types.TABLE, '/total-long-term-assets', ['Quarterly Total Long-Term Assets']), this.fetchData(Types.TABLE, '/total-long-term-liabilities', ['Quarterly Total Long Term Liabilities']), this.fetchData(Types.TABLE, '/total-share-holder-equity', ['Quarterly Share Holder Equity']), this.fetchData(Types.DATABASE, '/financial-ratios', ['Asset Turnover', 'Inventory Turnover Ratio', 'Receiveable Turnover']), this.fetchData(Types.CHART, null, ['Quarterly Shares Growth']), this.fetchData(Types.DISCOVERCI, null, ['Payables turnover'])).subscribe(function (tables) {
              uns.unsubscribe();

              _this.createTable();

              tables.forEach(function (table) {
                return _this.fillTable(table);
              });
            });
          }
        }
      }, {
        key: "getCompany",
        value: function getCompany() {
          this.companyFull = this.macrotrendsInput.slice(this.macrotrendsTableUrl.length, this.macrotrendsInput.lastIndexOf('/'));
          this.companyShort = this.companyFull.slice(0, this.companyFull.indexOf('/'));
        }
      }, {
        key: "createTable",
        value: function createTable() {
          var _this2 = this;

          this.getQuarters();
          this.table = [this.head];
          this.quarters.forEach(function (quarter) {
            var row = [];

            _this2.head.forEach(function () {
              return row.push(0);
            });

            row[0] = quarter.val;

            _this2.table.push(row);
          });
        }
      }, {
        key: "getQuarters",
        value: function getQuarters() {
          var _this3 = this;

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
          this.quarters = [];

          var _loop = function _loop(year) {
            quarterNames.forEach(function (quarter, index) {
              _this3.quarters.push({
                val: "".concat(year, " ").concat(quarter),
                min: new Date(year, quarterRange[index].min, 1).getTime(),
                max: new Date(index ? year : year + 1, quarterRange[index].max, 1).getTime() - 1
              });
            });
          };

          for (var year = new Date().getFullYear(); year >= this.minYear; year--) {
            _loop(year);
          }
        }
      }, {
        key: "fillTable",
        value: function fillTable(table) {
          var _this4 = this;

          if (table.length > 1) {
            var ctable = Object.assign([], table);
            var headMap = [];
            ctable.splice(0, 1)[0].forEach(function (cell) {
              return headMap.push(_this4.head.findIndex(function (globalCell) {
                return globalCell.toLowerCase() === cell.toLowerCase();
              }));
            });
            headMap[0] = -1;
            ctable.forEach(function (row) {
              var time = new Date(row[0].length === 4 ? row[0] + '-12-01' : row[0]).getTime();

              var globalRowIndex = _this4.quarters.findIndex(function (quarter) {
                return quarter.min < time && time < quarter.max;
              });

              if (globalRowIndex !== -1) {
                row.forEach(function (cell, cellIndex) {
                  if (headMap[cellIndex] !== -1) {
                    if (String(cell).includes('B')) {
                      var amount = cell.slice(1, -1);

                      if (!isNaN(+amount)) {
                        cell = cell.slice(0, 1) + +amount * 1000;
                      }
                    }

                    _this4.table[globalRowIndex + 1][headMap[cellIndex]] = cell;
                  }
                });
              }
            });
          }
        }
      }, {
        key: "fetchData",
        value: function fetchData(type, path, names) {
          var _this5 = this;

          if (this.getUrl(type, path)) {
            return this.httpClient.get(this.getUrl(type, path), {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              var clearText = _this5.clearText(response);

              switch (type) {
                case Types.TABLE:
                  return _this5.parseTable(clearText, names[0]);

                case Types.DATABASE:
                  return _this5.parseDatabase(clearText, names);

                case Types.CHART:
                  return _this5.parseChart(clearText, names[0]);

                case Types.DISCOVERCI:
                  return _this5.parseDiscoverci(clearText, names[0]);
              }
            }));
          }
        }
      }, {
        key: "getUrl",
        value: function getUrl(type, path) {
          switch (type) {
            case Types.TABLE:
            case Types.DATABASE:
              return this.macrotrendsTableUrl + this.companyFull + path;

            case Types.CHART:
              return this.macrotrendsChartUrl;

            case Types.DISCOVERCI:
              return this.discoverciInput || this.discoverciChartUrl;
          }
        }
      }, {
        key: "clearText",
        value: function clearText() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return text.replace(/[^\S ]/gi, '').replace(/ style="text-align:(\w+);?"/gi, '').replace(/ {2}/gi, ' ').replace(/> </gi, '><');
        }
      }, {
        key: "parseTable",
        value: function parseTable() {
          var _this6 = this;

          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var tableName = arguments.length > 1 ? arguments[1] : undefined;
          var tableArr = text.match(/<table(.*?)table>/gi) || [];
          var tableStr = tableArr.find(function (item) {
            return item.match(new RegExp(tableName, 'i'));
          });
          var headArr = tableStr.match(/<thead(.*?)thead>/gi);
          var head = headArr[1] ? headArr[1].slice(15, -18).split('</th><th>') : ['Date', tableName];
          var body = [];
          var rows = tableStr.match(/<tbody(.*?)tbody>/gi)[0].slice(11, -13).split('</tr><tr>');
          rows.forEach(function (row) {
            var cells = row.slice(4, -5).split('</td><td>');

            if (String(_this6.minYear) <= cells[0]) {
              cells.forEach(function (cell, cellIndex) {
                return cells[cellIndex] = _this6.getValue(cell);
              });
              body.push(cells);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "parseDatabase",
        value: function parseDatabase() {
          var _this7 = this;

          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var tableName = arguments.length > 1 ? arguments[1] : undefined;
          var dataArr = text.match(/var originalData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(19);
          var dataObj = JSON.parse(dataStr);
          var head = ['Date'];
          var body = [];
          tableName.forEach(function (name) {
            dataObj.find(function (item) {
              if (item.field_name.includes(name)) {
                head.push(name);

                var _loop2 = function _loop2(e) {
                  if (item.hasOwnProperty(e) && !isNaN(new Date(e).getTime()) && String(_this7.minYear) <= e) {
                    if (head.length < 3) {
                      body.push([e.slice(0, 4), _this7.getValue(item[e])]);
                    } else {
                      body.find(function (row) {
                        if (row[0] === e.slice(0, 4)) {
                          row.push(_this7.getValue(item[e]));
                        }
                      });
                    }
                  }
                };

                for (var e in item) {
                  _loop2(e);
                }
              }
            });
          });
          return [head].concat(body);
        }
      }, {
        key: "parseChart",
        value: function parseChart() {
          var _this8 = this;

          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var tableName = arguments.length > 1 ? arguments[1] : undefined;
          var dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(16);
          var dataObj = JSON.parse(dataStr);
          var head = ['Date', tableName];
          var body = [];
          dataObj.forEach(function (item) {
            if (String(_this8.minYear) <= item.date) {
              body.push([item.date, _this8.getValue(item.v3) + '%']);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "parseDiscoverci",
        value: function parseDiscoverci() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var tableName = arguments.length > 1 ? arguments[1] : undefined;
          var dataArr = text.match(/var metricData = anychart.data.set\((.*?)\)/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(35, -1);
          var dataObj = JSON.parse(dataStr);
          var head = ['Date', tableName];
          return [head].concat(_toConsumableArray(dataObj));
        }
      }, {
        key: "getValue",
        value: function getValue(str) {
          return /\d/.test(str) ? str : '0';
        }
      }, {
        key: "macrotrendsTableUrl",
        get: function get() {
          return "".concat(this.macrotrendsBaseUrl, "stocks/charts/");
        }
      }, {
        key: "macrotrendsChartUrl",
        get: function get() {
          return "".concat(this.macrotrendsBaseUrl, "assets/php/fundamental_iframe.php?t=").concat(this.companyShort, "&type=shares-outstanding&statement=income-statement&freq=Q");
        }
      }, {
        key: "macrotrendsBaseUrl",
        get: function get() {
          return 'https://www.macrotrends.net/';
        }
      }, {
        key: "discoverciChartUrl",
        get: function get() {
          return "https://www.discoverci.com/companies/".concat(this.companyShort, "/accounts-payable-turnover");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 8,
      consts: [[1, "panel"], [1, "column"], ["placeholder", "https://www.macrotrends.net/...", 3, "ngModel", "ngModelChange"], ["placeholder", "https://www.discoverci.com/...", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", 3, "disabled", "click"], [1, "table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.macrotrendsInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.discoverciInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Since Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mark Quarter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_10_listener($event) {
            return ctx.minYear = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_option_11_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_12_listener($event) {
            return ctx.markQuarter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_option_13_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_tr_17_Template, 2, 4, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.discoverciInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minYearList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.markQuarter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quarters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.table);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".panel {\n  display: flex;\n}\n.panel .column {\n  padding-right: 5px;\n}\n.panel .column input, .panel .column select {\n  display: block;\n  border: 1px solid #4a4a4a;\n  border-radius: 15px;\n  height: 24px;\n  width: 400px;\n  padding: 0 15px;\n  margin-right: 5px;\n  outline: none;\n  margin-bottom: 10px;\n}\n.panel .column select {\n  height: 26px;\n}\n.panel .column div {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 26px;\n  width: 125px;\n  margin-bottom: 10px;\n}\n.btn {\n  background-color: #4a4a4a;\n  border: none;\n  border-radius: 15px;\n  color: #ffffff;\n  padding: 5px 15px;\n  outline: none;\n}\n.table tr:first-child td {\n  vertical-align: top;\n  white-space: normal;\n}\n.table tr:nth-child(even) {\n  background-color: #ebebeb;\n}\n.table tr.mark {\n  background-color: yellow !important;\n}\n.table td {\n  font-family: monospace;\n  font-size: 8px;\n  white-space: nowrap;\n  text-align: right;\n}\n.table td:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0FDQU47QURHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ROO0FETUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNIRjtBRFNNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ05SO0FEVUk7RUFDRSx5QkFBQTtBQ1JOO0FEV0k7RUFDRSxtQ0FBQTtBQ1ROO0FEYUU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDWEo7QURhSTtFQUNFLGdCQUFBO0FDWE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5jb2x1bW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE0YTRhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFibGUge1xuICB0ciB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICB9XG5cbiAgICAmLm1hcmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgdGQge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cbiIsIi5wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFuZWwgLmNvbHVtbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wYW5lbCAuY29sdW1uIGlucHV0LCAucGFuZWwgLmNvbHVtbiBzZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNGE0YTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGFuZWwgLmNvbHVtbiBzZWxlY3Qge1xuICBoZWlnaHQ6IDI2cHg7XG59XG4ucGFuZWwgLmNvbHVtbiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG4udGFibGUgdHIubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuLnRhYmxlIHRkIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"],
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
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
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