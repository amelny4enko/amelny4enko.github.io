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

    function AppComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r4);
      }
    }

    function AppComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var quarter_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", quarter_r5.val);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quarter_r5.val);
      }
    }

    function AppComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.companyFull);
      }
    }

    function AppComponent_tr_22_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 19);
      }

      if (rf & 2) {
        var cell_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "mark": a0
      };
    };

    function AppComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_22_td_1_Template, 1, 1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r6[0] === ctx_r3.markQuarter));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r6);
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
                return quarter.min <= time && time <= quarter.max;
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
              var clearText = _this5.clearText(response || '');

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
        key: "clearText",
        value: function clearText(text) {
          return text.replace(/[^\S ]/gi, '').replace(/ style="text-align:(\w+);?"/gi, '').replace(/ {2}/gi, ' ').replace(/> </gi, '><');
        }
      }, {
        key: "parseTable",
        value: function parseTable(text, name) {
          var _this6 = this;

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
        value: function parseDatabase(text, names) {
          var _this7 = this;

          var dataArr = text.match(/var originalData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(19);
          var dataObj = this.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          var head = ['Date'];
          var body = [];
          names.forEach(function (name) {
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
        value: function parseChart(text, name) {
          var _this8 = this;

          var dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(16);
          var dataObj = this.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          var head = ['Date', name];
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
        value: function parseDiscoverci(text, name) {
          var dataArr = text.match(/var metricData = anychart.data.set\((.*?)\)/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(35, -1);
          var dataObj = this.parseJSON(dataStr);

          if (!dataObj) {
            return [];
          }

          return [['Date', name]].concat(_toConsumableArray(dataObj));
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
      decls: 23,
      vars: 9,
      consts: [[1, "panel"], [1, "search"], [1, "field", "main"], ["placeholder", "https://www.macrotrends.net/...", 3, "ngModel", "ngModelChange"], [3, "disabled", "click"], [1, "field"], ["placeholder", "https://www.discoverci.com/...", 3, "ngModel", "ngModelChange"], [1, "config"], [1, "label"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "info"], ["class", "field", 4, "ngIf"], [1, "table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "value"], [1, "data"], [3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.macrotrendsInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.discoverciInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Since Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_12_listener($event) {
            return ctx.minYear = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_option_13_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mark Quarter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_17_listener($event) {
            return ctx.markQuarter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_option_18_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 4, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_tr_22_Template, 2, 4, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.macrotrendsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.discoverciInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minYearList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.markQuarter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quarters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.table);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: ["* {\n  box-sizing: border-box;\n  font: 400 11px system-ui;\n}\n\n.panel {\n  display: flex;\n  margin-bottom: 8px;\n}\n\n.panel .search, .panel .config, .panel .info {\n  margin-right: 50px;\n}\n\n.panel .search .field, .panel .config .field, .panel .info .field {\n  display: flex;\n  align-items: center;\n  width: 500px;\n  height: 24px;\n}\n\n.panel .search .field:not(:last-child), .panel .config .field:not(:last-child), .panel .info .field:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.panel .search .field.main input, .panel .config .field.main input, .panel .info .field.main input {\n  border-color: #000000;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.panel .search .field.main button, .panel .config .field.main button, .panel .info .field.main button {\n  background-color: #000000;\n  border: none;\n  border-radius: 0 10px 10px 0;\n  color: #ffffff;\n  height: 100%;\n  line-height: 0;\n  padding: 0 8px;\n  outline: none;\n}\n\n.panel .search .field input, .panel .search .field select, .panel .config .field input, .panel .config .field select, .panel .info .field input, .panel .info .field select {\n  display: block;\n  border: 1px solid #cccccc;\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  padding: 0 8px;\n  outline: none;\n}\n\n.panel .config .field {\n  justify-content: space-between;\n  width: 200px;\n}\n\n.panel .config .field .label {\n  text-align: right;\n  width: 48%;\n  margin-right: 8px;\n}\n\n.panel .config .field select, .panel .config .field .data {\n  width: 48%;\n}\n\n.panel .info .field .data {\n  font-weight: 800;\n  text-transform: uppercase;\n  margin-left: 8px;\n}\n\n.table tr:first-child td {\n  vertical-align: top;\n  white-space: normal;\n}\n\n.table tr:nth-child(even) {\n  background-color: #ebebeb;\n}\n\n.table tr.mark {\n  background-color: yellow !important;\n}\n\n.table td {\n  font-size: 8px;\n  white-space: nowrap;\n  text-align: right;\n}\n\n.table td:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ007RUFDRSxrQkFBQTtBQ0NSOztBREdRO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDRFY7O0FESVE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRlY7O0FETU07RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNKUjs7QURVSTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ1JOOztBRFVNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNSUjs7QURXTTtFQUNFLFVBQUE7QUNUUjs7QURnQk07RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNkUjs7QUR1Qk07RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDcEJSOztBRHdCSTtFQUNFLHlCQUFBO0FDdEJOOztBRHlCSTtFQUNFLG1DQUFBO0FDdkJOOztBRDJCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDekJKOztBRDJCSTtFQUNFLGdCQUFBO0FDekJOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IDQwMCAxMXB4IHN5c3RlbS11aTtcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIC5zZWFyY2gsIC5jb25maWcsIC5pbmZvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG5cbiAgICAuZmllbGQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgJi5tYWluIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maWcge1xuICAgIC5maWVsZCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LCAuZGF0YSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmluZm8ge1xuICAgIC5maWVsZCB7XG4gICAgICAuZGF0YSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YWJsZSB7XG4gIHRyIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHRkIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICAgIH1cblxuICAgICYubWFyayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICB0ZCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250OiA0MDAgMTFweCBzeXN0ZW0tdWk7XG59XG5cbi5wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wYW5lbCAuc2VhcmNoLCAucGFuZWwgLmNvbmZpZywgLnBhbmVsIC5pbmZvIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnBhbmVsIC5zZWFyY2ggLmZpZWxkLCAucGFuZWwgLmNvbmZpZyAuZmllbGQsIC5wYW5lbCAuaW5mbyAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5wYW5lbCAuc2VhcmNoIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpLCAucGFuZWwgLmNvbmZpZyAuZmllbGQ6bm90KDpsYXN0LWNoaWxkKSwgLnBhbmVsIC5pbmZvIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnBhbmVsIC5zZWFyY2ggLmZpZWxkLm1haW4gaW5wdXQsIC5wYW5lbCAuY29uZmlnIC5maWVsZC5tYWluIGlucHV0LCAucGFuZWwgLmluZm8gLmZpZWxkLm1haW4gaW5wdXQge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5wYW5lbCAuc2VhcmNoIC5maWVsZC5tYWluIGJ1dHRvbiwgLnBhbmVsIC5jb25maWcgLmZpZWxkLm1haW4gYnV0dG9uLCAucGFuZWwgLmluZm8gLmZpZWxkLm1haW4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFuZWwgLnNlYXJjaCAuZmllbGQgaW5wdXQsIC5wYW5lbCAuc2VhcmNoIC5maWVsZCBzZWxlY3QsIC5wYW5lbCAuY29uZmlnIC5maWVsZCBpbnB1dCwgLnBhbmVsIC5jb25maWcgLmZpZWxkIHNlbGVjdCwgLnBhbmVsIC5pbmZvIC5maWVsZCBpbnB1dCwgLnBhbmVsIC5pbmZvIC5maWVsZCBzZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFuZWwgLmNvbmZpZyAuZmllbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5wYW5lbCAuY29uZmlnIC5maWVsZCAubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ucGFuZWwgLmNvbmZpZyAuZmllbGQgc2VsZWN0LCAucGFuZWwgLmNvbmZpZyAuZmllbGQgLmRhdGEge1xuICB3aWR0aDogNDglO1xufVxuLnBhbmVsIC5pbmZvIC5maWVsZCAuZGF0YSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4udGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cbi50YWJsZSB0ci5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"],
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