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

    function AppComponent_tr_8_td_1_Template(rf, ctx) {
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

    function AppComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_8_td_1_Template, 2, 1, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(httpClient) {
        _classCallCheck(this, AppComponent);

        this.httpClient = httpClient;
        this.baseUrl = 'https://www.macrotrends.net/stocks/charts/';
        this.data = [];
        this.head = ['Date', 'Payables turnover', 'Asset Turnover', 'Annual Cash Flow from Financial Activities', 'Annual Cash Flow from Investing Activities', 'Annual Cash Flow from Operating Activities', 'Quarterly Cash on Hand', 'Annual Total Depreciation and Amortization - Cash Flow', 'Annual Total Common and Preferred Stock Dividends Paid', 'Quarterly EBITDA', 'Quarterly EBIT', 'Quarterly EPS', 'Gross Margin', 'Quarterly Gross Profit', 'Inventory Turnover Ratio', 'Annual Net Cash Flow', 'Quarterly Net Income', 'Net Margin', 'Annual Number of Employees', 'Quarterly Operating Income', 'Operating Margin', 'Price to Book Ratio', 'Price to FCF Ratio', 'Price to Sales Ratio', 'Quick Ratio', 'Quarterly Shares Growth', 'Quarterly Shares Outstanding', 'Receiveable Turnover', 'Quarterly Revenue', 'Return on Assets', 'Return on Equity', 'Return on Investment', 'Quarterly Share Holder Equity', 'Stock Price', 'Total Assets', 'Current Assets', 'Current Liabilities', 'Quarterly Total Liabilities', 'Quarterly Total Long Term Liabilities', 'Quarterly Total Long-Term Assets'];
      }

      _createClass(AppComponent, [{
        key: "start",
        value: function start() {
          var _this = this;

          this.company = this.userStr.slice(this.userStr.indexOf('charts/') + 7, this.userStr.lastIndexOf('/'));

          if (this.company) {
            this.data = [];
            var uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.fetchData(Types.CHART, null, ['Quarterly Shares Growth']), this.fetchData(Types.DATABASE, '/financial-ratios', ['Asset Turnover', 'Inventory Turnover Ratio', 'Receiveable Turnover']), this.fetchData(Types.TABLE, '/cash-flow-from-financial-activities', ['Annual Cash Flow from Financial Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-investing-activities', ['Annual Cash Flow from Investing Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-operating-activities', ['Annual Cash Flow from Operating Activities']), this.fetchData(Types.TABLE, '/cash-on-hand', ['Quarterly Cash on Hand']), this.fetchData(Types.TABLE, '/current-ratio', ['Current Ratio Historical Data']), this.fetchData(Types.TABLE, '/ebit', ['Quarterly EBIT']), this.fetchData(Types.TABLE, '/ebitda', ['Quarterly EBITDA']), this.fetchData(Types.TABLE, '/eps-earnings-per-share-diluted', ['Quarterly EPS']), this.fetchData(Types.TABLE, '/gross-margin', ['Gross Margin Historical Data']), this.fetchData(Types.TABLE, '/gross-profit', ['Quarterly Gross Profit']), this.fetchData(Types.TABLE, '/net-cash-flow', ['Annual Net Cash Flow']), this.fetchData(Types.TABLE, '/net-income', ['Quarterly Net Income']), this.fetchData(Types.TABLE, '/net-profit-margin', ['Net Profit Margin Historical Data']), this.fetchData(Types.TABLE, '/number-of-employees', ['Annual Number of Employees']), this.fetchData(Types.TABLE, '/operating-income', ['Quarterly Operating Income']), this.fetchData(Types.TABLE, '/operating-margin', ['Operating Margin Historical Data']), this.fetchData(Types.TABLE, '/pe-ration', ['PE Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-book', ['Price/Book Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-fcf', ['Price to Free Cash Flow Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-sales', ['P/S Ratio Historical Data']), this.fetchData(Types.TABLE, '/quick-ratio', ['Quick Ratio Historical Data']), this.fetchData(Types.TABLE, '/revenue', ['Quarterly Revenue']), this.fetchData(Types.TABLE, '/roa', ['ROA - Return on Assets Historical Data']), this.fetchData(Types.TABLE, '/roe', ['ROE - Return on Equity Historical Data']), this.fetchData(Types.TABLE, '/roi', ['ROI - Return on Investment Historical Data']), this.fetchData(Types.TABLE, '/shares-outstanding', ['Quarterly Shares Outstanding']), this.fetchData(Types.TABLE, '/total-common-preferred-stock-dividends-paid', ['Annual Total Common and Preferred Stock Dividends Paid']), this.fetchData(Types.TABLE, '/total-depreciation-amortization-cash-flow', ['Annual Total Depreciation and Amortization - Cash Flow']), this.fetchData(Types.TABLE, '/total-liabilities', ['Quarterly Total Liabilities']), this.fetchData(Types.TABLE, '/total-long-term-assets', ['Quarterly Total Long-Term Assets']), this.fetchData(Types.TABLE, '/total-long-term-liabilities', ['Quarterly Total Long Term Liabilities']), this.fetchData(Types.TABLE, '/total-share-holder-equity', ['Quarterly Share Holder Equity'])).subscribe(function (tables) {
              uns.unsubscribe();
              console.log(tables);

              _this.createTable(tables);

              tables.forEach(function (table) {
                return _this.fillTable(table);
              });
            });
          }
        }
      }, {
        key: "createTable",
        value: function createTable(tables) {
          var _this2 = this;

          var maxTableLength = 0;
          var maxTableIndex;
          tables.forEach(function (table, index) {
            if (maxTableLength < table.length) {
              maxTableLength = table.length;
              maxTableIndex = index;
            }
          });

          if (maxTableIndex !== undefined) {
            var table = Object.assign([], tables[maxTableIndex]);
            table.splice(0, 1);
            table.forEach(function (lr) {
              var gr = [];

              _this2.head.forEach(function () {
                return gr.push(0);
              });

              gr[0] = lr[0];

              _this2.data.push(gr);
            });
            this.data.sort(function (a, b) {
              return new Date(b[0]).getTime() - new Date(a[0]).getTime();
            });
            this.data.unshift(this.head);
          }
        }
      }, {
        key: "fillTable",
        value: function fillTable(table) {
          var _this3 = this;

          if (table.length > 1) {
            var ctable = Object.assign([], table);
            var headMap = [];
            ctable[0].forEach(function (ld) {
              return headMap.push(_this3.head.findIndex(function (gd) {
                return gd.toLowerCase() === ld.toLowerCase();
              }));
            });
            ctable.splice(0, 1);
            ctable.forEach(function (lr) {
              if (lr[0].length === 4) {
                var r = _this3.data.find(function (gr) {
                  return gr[0].slice(0, 4) === lr[0];
                });

                lr[0] = r && r[0];
              }

              var gri = _this3.data.findIndex(function (gr) {
                return gr[0].toLowerCase() === lr[0].toLowerCase();
              });

              lr.forEach(function (lc, lci) {
                if (headMap[lci] !== -1) {
                  if (lc.includes('B')) {
                    var amount = lc.slice(1, -1);

                    if (!isNaN(+amount)) {
                      lc = lc.slice(0, 1) + +amount * 1000;
                    }
                  }

                  _this3.data[gri][headMap[lci]] = lc;
                }
              });
            });
          }
        }
      }, {
        key: "fetchData",
        value: function fetchData(type, path, tableName) {
          var _this4 = this;

          return this.httpClient.get(this.getUrl(type, path), {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var clearText = _this4.clearText(response);

            switch (type) {
              case Types.CHART:
                return _this4.parseChart(clearText, tableName[0]);

              case Types.DATABASE:
                return _this4.parseDatabase(clearText, tableName);

              case Types.TABLE:
                return _this4.parseTable(clearText, tableName[0]);
            }
          }));
        }
      }, {
        key: "clearText",
        value: function clearText() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return text.replace(/[^\S ]/gi, '').replace(/ style="text-align:(\w+);?"/gi, '').replace(/ {2}/gi, ' ').replace(/> </gi, '><');
        }
      }, {
        key: "parseChart",
        value: function parseChart() {
          var _this5 = this;

          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var tableName = arguments.length > 1 ? arguments[1] : undefined;
          var dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
          var dataStr = dataArr[0] && dataArr[0].slice(16);
          var dataObj = JSON.parse(dataStr);
          var head = ['Date', tableName];
          var body = [];
          dataObj.forEach(function (item) {
            if ('2007' <= item.date) {
              body.push([item.date, _this5.getValue(item.v3) + '%']);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "parseDatabase",
        value: function parseDatabase() {
          var _this6 = this;

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

                var _loop = function _loop(e) {
                  if (item.hasOwnProperty(e) && !isNaN(new Date(e).getTime()) && '2007' <= e) {
                    if (head.length < 3) {
                      body.push([e.slice(0, 4), _this6.getValue(item[e])]);
                    } else {
                      body.find(function (row) {
                        if (row[0] === e.slice(0, 4)) {
                          row.push(_this6.getValue(item[e]));
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
        key: "parseTable",
        value: function parseTable() {
          var _this7 = this;

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

            if ('2007' <= cells[0]) {
              cells.forEach(function (cell, cellIndex) {
                return cells[cellIndex] = _this7.getValue(cell);
              });
              body.push(cells);
            }
          });
          return [head].concat(body);
        }
      }, {
        key: "getValue",
        value: function getValue(str) {
          return /\d/.test(str) ? str : '0';
        }
      }, {
        key: "getUrl",
        value: function getUrl(type, path) {
          switch (type) {
            case Types.CHART:
              var id = this.company.slice(0, this.company.indexOf('/'));
              return "https://www.macrotrends.net/assets/php/fundamental_iframe.php?t=".concat(id, "&type=shares-outstanding&statement=income-statement&freq=Q");

            case Types.DATABASE:
            case Types.TABLE:
              return this.baseUrl + this.company + path;
          }
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
      decls: 9,
      vars: 4,
      consts: [[1, "nav"], ["placeholder", "https://...", 1, "input", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "disabled", "click"], [1, "company"], [4, "ngFor", "ngForOf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.userStr = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_tr_8_Template, 2, 1, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userStr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userStr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n.nav[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #4a4a4a;\n  border-radius: 15px 0 0 15px;\n  line-height: 2;\n  width: 250px;\n  padding: 0 10px 0 15px;\n  outline: none;\n}\n.nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n  border: none;\n  border-radius: 0 15px 15px 0;\n  color: #ffffff;\n  padding: 0 20px 0 15px;\n  outline: none;\n}\n.nav[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  margin-left: 20px;\n  text-transform: uppercase;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  white-space: normal;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ebebeb;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  white-space: nowrap;\n  padding: 0 10px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FEUU07RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDTFI7QURTSTtFQUNFLHlCQUFBO0FDUE47QURXRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAuaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTRhNGE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAxNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY29tcGFueSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxudGFibGUge1xuICB0ciB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICB9XG4gIH1cblxuICB0ZCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiIsIi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm5hdiAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0YTRhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLm5hdiAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAyMHB4IDAgMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXYgLmNvbXBhbnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG50YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();

    var Types;

    (function (Types) {
      Types[Types["CHART"] = 0] = "CHART";
      Types[Types["DATABASE"] = 1] = "DATABASE";
      Types[Types["TABLE"] = 2] = "TABLE";
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