(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AppComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r3);
} }
function AppComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_8_td_1_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://www.macrotrends.net/stocks/charts/';
        this.data = [];
        this.head = [
            'Date',
            'Asset Turnover',
            'Annual Cash Flow from Financial Activities',
            'Annual Cash Flow from Investing Activities',
            'Annual Cash Flow from Operating Activities',
            'Quarterly Cash on Hand',
            'Depreciation and Amortization',
            'Dividends Paid',
            'Quarterly EBITDA',
            'Quarterly EPS',
            'Gross Margin',
            'Quarterly Gross Profit',
            'Inventory Turnover Ratio',
            'Net Cash Flow',
            'Quarterly Net Income',
            'Net Profit Margin',
            'Number of Employees',
            'Quarterly Operating Income',
            'Operating Margin Quarterly',
            'PE Ratio',
            'Price to Book Ratio',
            'Price to FCF Ratio',
            'Price to Sales Ratio',
            'Quick Ratio',
            'Quarterly Shares Growth',
            'Quarterly Shares Outstanding',
            'Receiveable Turnover',
            'Quarterly Revenue',
            'TTM Revenue',
            'Return on Assets',
            'Return on Equity',
            'Return on Investment',
            'Share Holder Equity Quarterly',
            'Stock Price',
            'Total Assets',
            'Current Assets',
            'Current Liabilities',
            'Quarterly Total Liabilities',
            'Total Long Term Liabilities',
            'Total Long-Term Assets (Q)',
        ];
    }
    start() {
        this.company = this.userStr.slice(this.userStr.indexOf('charts/') + 7, this.userStr.lastIndexOf('/'));
        if (this.company) {
            this.data = [];
            const uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.fetchData('/cash-flow-from-financial-activities', 'Annual Cash Flow from Financial Activities'), this.fetchData('/cash-flow-from-investing-activities', 'Annual Cash Flow from Investing Activities'), this.fetchData('/cash-flow-from-operating-activities', 'Annual Cash Flow from Operating Activities'), this.fetchData('/cash-on-hand', 'Quarterly Cash on Hand'), this.fetchData('/ebitda', 'Quarterly EBITDA'), this.fetchData('/eps-earnings-per-share-diluted', 'Quarterly EPS'), this.fetchData('/gross-margin', 'Gross Margin Historical Data'), this.fetchData('/gross-profit', 'Quarterly Gross Profit'), this.fetchData('/net-income', 'Quarterly Net Income'), this.fetchData('/operating-income', 'Quarterly Operating Income'), this.fetchData('/pe-ration', 'PE Ratio Historical Data'), this.fetchData('/price-book', 'Price/Book Ratio Historical Data'), this.fetchData('/price-fcf', 'Price to Free Cash Flow Ratio Historical Data'), this.fetchData('/price-sales', 'P/S Ratio Historical Data'), this.fetchData('/shares-outstanding', 'Quarterly Shares Outstanding'), this.fetchData('/revenue', 'Quarterly Revenue'), this.fetchData('/roa', 'ROA - Return on Assets Historical Data'), this.fetchData('/roe', 'ROE - Return on Equity Historical Data'), this.fetchData('/roi', 'ROI - Return on Investment Historical Data'), this.fetchData('/current-ratio', 'Current Ratio Historical Data'), this.fetchData('/total-liabilities', 'Quarterly Total Liabilities')).subscribe((tables) => {
                uns.unsubscribe();
                console.log(tables);
                this.createTable(tables);
                tables.forEach((table) => this.fillTable(table));
            });
        }
    }
    createTable(tables) {
        let maxTableLength = 0;
        let maxTableIndex;
        tables.forEach((table, index) => {
            if (maxTableLength < table.length) {
                maxTableLength = table.length;
                maxTableIndex = index;
            }
        });
        if (maxTableIndex !== undefined) {
            const table = Object.assign([], tables[maxTableIndex]);
            table.splice(0, 1);
            table.forEach((lr) => {
                const gr = [];
                this.head.forEach(() => gr.push(0));
                gr[0] = lr[0];
                this.data.push(gr);
            });
            this.data.sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime());
            this.data.unshift(this.head);
        }
    }
    fillTable(table) {
        if (table.length > 1) {
            const ctable = Object.assign([], table);
            const headMap = [];
            ctable[0].forEach((ld) => headMap.push(this.head.findIndex((gd) => gd.toLowerCase() === ld.toLowerCase())));
            ctable.splice(0, 1);
            ctable.forEach((lr) => {
                if (lr[0].length === 4) {
                    const r = this.data.find((gr) => gr[0].slice(0, 4) === lr[0]);
                    lr[0] = r && r[0];
                }
                const gri = this.data.findIndex((gr) => gr[0].toLowerCase() === lr[0].toLowerCase());
                lr.forEach((lc, lci) => {
                    if (headMap[lci] !== -1) {
                        if (lc.includes('B')) {
                            const amount = lc.slice(1, -1);
                            if (!isNaN(+amount)) {
                                lc = lc.slice(0, 1) + (+amount * 1000);
                            }
                        }
                        this.data[gri][headMap[lci]] = lc;
                    }
                });
            });
        }
    }
    fetchData(url, tableName) {
        return this.httpClient.get(this.baseUrl + this.company + url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            const clearText = this.clearText(response);
            const table = this.getTable(clearText, tableName);
            return this.parseTable(table, tableName);
        }));
    }
    clearText(text = '') {
        return text
            .replace(/[^\S ]/gi, '')
            .replace(/ style="text-align:(\w+);?"/gi, '')
            .replace(/ {2}/gi, ' ')
            .replace(/> </gi, '><');
    }
    getTable(text = '', key) {
        const tables = text.match(/<table(.*?)table>/gi) || [];
        return tables.find((item) => item.match(new RegExp(key, 'i')));
    }
    parseTable(table, tableName) {
        const heads = table.match(/<thead(.*?)thead>/gi);
        const head = heads[1]
            ? heads[1].slice(15, -18).split('</th><th>')
            : ['Date', tableName];
        const body = [];
        const rows = table
            .match(/<tbody(.*?)tbody>/gi)[0]
            .slice(11, -13)
            .split('</tr><tr>');
        rows.forEach((row) => {
            const cells = row
                .slice(4, -5)
                .split('</td><td>');
            if ('2007' <= cells[0]) {
                cells.forEach((cell, cellIndex) => {
                    if (!cell) {
                        cells[cellIndex] = '0';
                    }
                });
                body.push(cells);
            }
        });
        return [head, ...body];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "nav"], ["placeholder", "https://...", 1, "input", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "disabled", "click"], [1, "company"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) { return ctx.userStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_tr_8_Template, 2, 1, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n.nav[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #4a4a4a;\n  border-radius: 15px 0 0 15px;\n  line-height: 2;\n  width: 250px;\n  padding: 0 10px 0 15px;\n  outline: none;\n}\n.nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #4a4a4a;\n  border: none;\n  border-radius: 0 15px 15px 0;\n  color: #ffffff;\n  padding: 0 20px 0 15px;\n  outline: none;\n}\n.nav[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  margin-left: 20px;\n  text-transform: uppercase;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  white-space: normal;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ebebeb;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  white-space: nowrap;\n  padding: 0 10px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FEUU07RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDTFI7QURTSTtFQUNFLHlCQUFBO0FDUE47QURXRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAuaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTRhNGE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAxNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY29tcGFueSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxudGFibGUge1xuICB0ciB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICB9XG4gIH1cblxuICB0ZCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiIsIi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm5hdiAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0YTRhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLm5hdiAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAyMHB4IDAgMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXYgLmNvbXBhbnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG50YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiimelnychenko/Projects/robot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map