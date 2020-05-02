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







function AppComponent_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r3);
} }
const _c0 = function (a0) { return { "last": a0 }; };
function AppComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_10_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.isLast(row_r1[0])));
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
            'Payables turnover',
            'Asset Turnover',
            'Annual Cash Flow from Financial Activities',
            'Annual Cash Flow from Investing Activities',
            'Annual Cash Flow from Operating Activities',
            'Quarterly Cash on Hand',
            'Annual Total Depreciation and Amortization - Cash Flow',
            'Annual Total Common and Preferred Stock Dividends Paid',
            'Quarterly EBITDA',
            'Quarterly EBIT',
            'Gross Margin',
            'Quarterly Gross Profit',
            'Inventory Turnover Ratio',
            'Annual Net Cash Flow',
            'Quarterly Net Income',
            'Net Margin',
            'Annual Number of Employees',
            'Quarterly Operating Income',
            'Operating Margin',
            'Price to Book Ratio',
            'Price to FCF Ratio',
            'Price to Sales Ratio',
            'Quick Ratio',
            'Quarterly Shares Growth',
            'Quarterly Shares Outstanding',
            'Receiveable Turnover',
            'Quarterly Revenue',
            'Return on Assets',
            'Return on Equity',
            'Return on Investment',
            'Quarterly Share Holder Equity',
            'Stock Price',
            'Total Assets',
            'Current Assets',
            'Current Liabilities',
            'Quarterly Total Liabilities',
            'Quarterly Total Long Term Liabilities',
            'Quarterly Total Long-Term Assets',
            'Tech column',
        ];
    }
    start() {
        this.company = this.userStr.slice(this.userStr.indexOf('charts/') + 7, this.userStr.lastIndexOf('/'));
        if (this.company) {
            this.data = [];
            const uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.fetchData(Types.CHART, null, ['Quarterly Shares Growth']), this.fetchData(Types.DATABASE, '/financial-ratios', ['Asset Turnover', 'Inventory Turnover Ratio', 'Receiveable Turnover']), this.fetchData(Types.TABLE, '/cash-flow-from-financial-activities', ['Annual Cash Flow from Financial Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-investing-activities', ['Annual Cash Flow from Investing Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-operating-activities', ['Annual Cash Flow from Operating Activities']), this.fetchData(Types.TABLE, '/cash-on-hand', ['Quarterly Cash on Hand']), this.fetchData(Types.TABLE, '/current-ratio', ['Current Ratio Historical Data']), this.fetchData(Types.TABLE, '/ebit', ['Quarterly EBIT']), this.fetchData(Types.TABLE, '/ebitda', ['Quarterly EBITDA']), this.fetchData(Types.TABLE, '/eps-earnings-per-share-diluted', ['Quarterly EPS']), this.fetchData(Types.TABLE, '/gross-margin', ['Gross Margin Historical Data']), this.fetchData(Types.TABLE, '/gross-profit', ['Quarterly Gross Profit']), this.fetchData(Types.TABLE, '/net-cash-flow', ['Annual Net Cash Flow']), this.fetchData(Types.TABLE, '/net-income', ['Quarterly Net Income']), this.fetchData(Types.TABLE, '/net-profit-margin', ['Net Profit Margin Historical Data']), this.fetchData(Types.TABLE, '/number-of-employees', ['Annual Number of Employees']), this.fetchData(Types.TABLE, '/operating-income', ['Quarterly Operating Income']), this.fetchData(Types.TABLE, '/operating-margin', ['Operating Margin Historical Data']), this.fetchData(Types.TABLE, '/pe-ration', ['PE Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-book', ['Price/Book Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-fcf', ['Price to Free Cash Flow Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-sales', ['P/S Ratio Historical Data']), this.fetchData(Types.TABLE, '/quick-ratio', ['Quick Ratio Historical Data']), this.fetchData(Types.TABLE, '/revenue', ['Quarterly Revenue']), this.fetchData(Types.TABLE, '/roa', ['ROA - Return on Assets Historical Data']), this.fetchData(Types.TABLE, '/roe', ['ROE - Return on Equity Historical Data']), this.fetchData(Types.TABLE, '/roi', ['ROI - Return on Investment Historical Data']), this.fetchData(Types.TABLE, '/shares-outstanding', ['Quarterly Shares Outstanding']), this.fetchData(Types.TABLE, '/total-common-preferred-stock-dividends-paid', ['Annual Total Common and Preferred Stock Dividends Paid']), this.fetchData(Types.TABLE, '/total-depreciation-amortization-cash-flow', ['Annual Total Depreciation and Amortization - Cash Flow']), this.fetchData(Types.TABLE, '/total-liabilities', ['Quarterly Total Liabilities']), this.fetchData(Types.TABLE, '/total-long-term-assets', ['Quarterly Total Long-Term Assets']), this.fetchData(Types.TABLE, '/total-long-term-liabilities', ['Quarterly Total Long Term Liabilities']), this.fetchData(Types.TABLE, '/total-share-holder-equity', ['Quarterly Share Holder Equity']), this.fetchData(Types.DISCOVERCI, null, ['Payables turnover'])).subscribe((tables) => {
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
                        if (String(lc).includes('B')) {
                            const amount = lc.slice(1, -1);
                            if (!isNaN(+amount)) {
                                lc = lc.slice(0, 1) + (+amount * 1000);
                            }
                        }
                        if (this.data[gri]) {
                            this.data[gri][headMap[lci]] = lc;
                        }
                    }
                });
            });
        }
    }
    fetchData(type, path, tableName) {
        if (this.getUrl(type, path)) {
            return this.httpClient.get(this.getUrl(type, path), { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                const clearText = this.clearText(response);
                switch (type) {
                    case Types.CHART:
                        return this.parseChart(clearText, tableName[0]);
                    case Types.DATABASE:
                        return this.parseDatabase(clearText, tableName);
                    case Types.TABLE:
                        return this.parseTable(clearText, tableName[0]);
                    case Types.DISCOVERCI:
                        return this.parseDiscoverci(clearText, tableName[0]);
                }
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
    }
    clearText(text = '') {
        return text
            .replace(/[^\S ]/gi, '')
            .replace(/ style="text-align:(\w+);?"/gi, '')
            .replace(/ {2}/gi, ' ')
            .replace(/> </gi, '><');
    }
    parseChart(text = '', tableName) {
        const dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(16);
        const dataObj = JSON.parse(dataStr);
        const head = ['Date', tableName];
        const body = [];
        dataObj.forEach((item) => {
            if ('2007' <= item.date) {
                body.push([item.date, this.getValue(item.v3) + '%']);
            }
        });
        return [head, ...body];
    }
    parseDatabase(text = '', tableName) {
        const dataArr = text.match(/var originalData = \[(.*?)]/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(19);
        const dataObj = JSON.parse(dataStr);
        const head = ['Date'];
        const body = [];
        tableName.forEach((name) => {
            dataObj.find((item) => {
                if (item.field_name.includes(name)) {
                    head.push(name);
                    for (const e in item) {
                        if (item.hasOwnProperty(e) && !isNaN(new Date(e).getTime()) && '2007' <= e) {
                            if (head.length < 3) {
                                body.push([e.slice(0, 4), this.getValue(item[e])]);
                            }
                            else {
                                body.find((row) => {
                                    if (row[0] === e.slice(0, 4)) {
                                        row.push(this.getValue(item[e]));
                                    }
                                });
                            }
                        }
                    }
                }
            });
        });
        return [head, ...body];
    }
    parseTable(text = '', tableName) {
        const tableArr = text.match(/<table(.*?)table>/gi) || [];
        const tableStr = tableArr.find((item) => item.match(new RegExp(tableName, 'i')));
        const headArr = tableStr.match(/<thead(.*?)thead>/gi);
        const head = headArr[1]
            ? headArr[1].slice(15, -18).split('</th><th>')
            : ['Date', tableName];
        const body = [];
        const rows = tableStr
            .match(/<tbody(.*?)tbody>/gi)[0]
            .slice(11, -13)
            .split('</tr><tr>');
        rows.forEach((row) => {
            const cells = row
                .slice(4, -5)
                .split('</td><td>');
            if ('2007' <= cells[0]) {
                cells.forEach((cell, cellIndex) => cells[cellIndex] = this.getValue(cell));
                body.push(cells);
            }
        });
        return [head, ...body];
    }
    parseDiscoverci(text = '', tableName) {
        const dataArr = text.match(/var metricData = anychart.data.set\((.*?)\)/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(35, -1);
        const dataObj = JSON.parse(dataStr);
        const head = ['Date', tableName];
        return [head, ...dataObj];
    }
    getValue(str) {
        return /\d/.test(str) ? str : '0';
    }
    getUrl(type, path) {
        switch (type) {
            case Types.CHART:
                const id = this.company.slice(0, this.company.indexOf('/'));
                return `https://www.macrotrends.net/assets/php/fundamental_iframe.php?t=${id}&type=shares-outstanding&statement=income-statement&freq=Q`;
            case Types.DATABASE:
            case Types.TABLE:
                return this.baseUrl + this.company + path;
            case Types.DISCOVERCI:
                return this.discoverciUrl;
        }
    }
    isLast(date) {
        return !isNaN(new Date(date).getTime()) && '2019-10-00' < date && date < '2020-00-00';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 5, consts: [[1, "nav"], ["placeholder", "https://www.macrotrends.net/...", 1, "input", 3, "ngModel", "ngModelChange"], ["placeholder", "https://www.discoverci.com/...", 1, "input", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "disabled", "click"], [1, "company"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) { return ctx.userStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) { return ctx.discoverciUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_tr_10_Template, 2, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.discoverciUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".nav {\n  display: flex;\n  margin-bottom: 20px;\n}\n.nav .input {\n  border: 1px solid #4a4a4a;\n  border-radius: 15px;\n  line-height: 2;\n  width: 250px;\n  padding: 0 10px 0 15px;\n  margin-right: 5px;\n  outline: none;\n}\n.nav .btn {\n  background-color: #4a4a4a;\n  border: none;\n  border-radius: 15px;\n  color: #ffffff;\n  padding: 0 20px 0 15px;\n  outline: none;\n}\n.nav .company {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  margin-left: 20px;\n  text-transform: uppercase;\n}\ntable tr:first-child td {\n  vertical-align: top;\n  white-space: normal;\n}\ntable tr:nth-child(even) {\n  background-color: #ebebeb;\n}\ntable tr.last {\n  background-color: yellow !important;\n}\ntable td {\n  font-family: monospace;\n  font-size: 8px;\n  white-space: nowrap;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDREo7QURRTTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRFNJO0VBQ0UseUJBQUE7QUNQTjtBRFVJO0VBQ0UsbUNBQUE7QUNSTjtBRFlFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE0YTRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMCAyMHB4IDAgMTVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmNvbXBhbnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG5cbnRhYmxlIHtcbiAgdHIge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgdGQge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gICAgfVxuXG4gICAgJi5sYXN0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIHRkIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiIsIi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm5hdiAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGE0YTRhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXYgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubmF2IC5jb21wYW55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxudGFibGUgdHIubGFzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxudGFibGUgdGQge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();
var Types;
(function (Types) {
    Types[Types["CHART"] = 0] = "CHART";
    Types[Types["DATABASE"] = 1] = "DATABASE";
    Types[Types["TABLE"] = 2] = "TABLE";
    Types[Types["DISCOVERCI"] = 3] = "DISCOVERCI";
})(Types || (Types = {}));


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