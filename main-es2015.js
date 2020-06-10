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
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.companyFull);
} }
function AppComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", row_r3[0], " - ", row_r3[1], "");
} }
function AppComponent_tr_18_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 19);
} if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "mark": a0 }; };
function AppComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_18_td_1_Template, 1, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r4[0] === ctx_r2.markQuarter));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4);
} }
class AppComponent {
    constructor(clipboard, httpClient) {
        this.clipboard = clipboard;
        this.httpClient = httpClient;
        this.minYear = 2007;
        this.markQuarter = '2019 IV';
        this.table = [];
        this.head = [
            'Quarters',
            'Stock Price',
            'Quarterly Revenue',
            'Quarterly Gross Profit',
            'Quarterly Operating Income',
            'Quarterly EBITDA',
            'Quarterly EBIT',
            'Quarterly Net Income',
            'Annual Net Cash Flow',
            'Annual Cash Flow from Operating Activities',
            'Annual Cash Flow from Investing Activities',
            'Annual Cash Flow from Financial Activities',
            'Quarterly Cash on Hand',
            'Gross Margin',
            'Operating Margin',
            'Net Margin',
            'Payables turnover',
            'Total Assets',
            'Current Assets',
            'Quarterly Total Long-Term Assets',
            'Quarterly Share Holder Equity',
            'Asset Turnover',
            'Inventory Turnover Ratio',
            'Quarterly Total Liabilities',
            'Current Liabilities',
            'Quarterly Total Long Term Liabilities',
            'Receiveable Turnover',
            'Annual Total Depreciation and Amortization - Cash Flow',
            'Price to Book Ratio',
            'Price to FCF Ratio',
            'Price to Sales Ratio',
            'Quick Ratio',
            'Annual Number of Employees',
            'Annual Total Common and Preferred Stock Dividends Paid',
            'Quarterly Shares Outstanding',
            'Quarterly Shares Growth',
            'Return on Investment',
            'Return on Assets',
            'Return on Equity',
        ];
        this.quarters = [];
        this.info = [];
    }
    copy() {
        let clipboardString = '';
        this.table.slice(1).forEach((row) => clipboardString += row.slice(1).join('\t') + '\n');
        this.info.forEach((row) => clipboardString += row.join('\t') + '\n');
        this.clipboard.copy(clipboardString);
    }
    start() {
        this.getCompany();
        const uns = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.fetchData(Types.TABLE, '/cash-flow-from-financial-activities', ['Annual Cash Flow from Financial Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-investing-activities', ['Annual Cash Flow from Investing Activities']), this.fetchData(Types.TABLE, '/cash-flow-from-operating-activities', ['Annual Cash Flow from Operating Activities']), this.fetchData(Types.TABLE, '/cash-on-hand', ['Quarterly Cash on Hand']), this.fetchData(Types.TABLE, '/current-ratio', ['Current Ratio Historical Data']), this.fetchData(Types.TABLE, '/ebit', ['Quarterly EBIT']), this.fetchData(Types.TABLE, '/ebitda', ['Quarterly EBITDA']), this.fetchData(Types.TABLE, '/eps-earnings-per-share-diluted', ['Quarterly EPS']), this.fetchData(Types.TABLE, '/gross-margin', ['Gross Margin Historical Data']), this.fetchData(Types.TABLE, '/gross-profit', ['Quarterly Gross Profit']), this.fetchData(Types.TABLE, '/net-cash-flow', ['Annual Net Cash Flow']), this.fetchData(Types.TABLE, '/net-income', ['Quarterly Net Income']), this.fetchData(Types.TABLE, '/net-profit-margin', ['Net Profit Margin Historical Data']), this.fetchData(Types.TABLE, '/number-of-employees', ['Annual Number of Employees']), this.fetchData(Types.TABLE, '/operating-income', ['Quarterly Operating Income']), this.fetchData(Types.TABLE, '/operating-margin', ['Operating Margin Historical Data']), this.fetchData(Types.TABLE, '/pe-ration', ['PE Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-book', ['Price/Book Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-fcf', ['Price to Free Cash Flow Ratio Historical Data']), this.fetchData(Types.TABLE, '/price-sales', ['P/S Ratio Historical Data']), this.fetchData(Types.TABLE, '/quick-ratio', ['Quick Ratio Historical Data']), this.fetchData(Types.TABLE, '/revenue', ['Quarterly Revenue']), this.fetchData(Types.TABLE, '/roa', ['ROA - Return on Assets Historical Data']), this.fetchData(Types.TABLE, '/roe', ['ROE - Return on Equity Historical Data']), this.fetchData(Types.TABLE, '/roi', ['ROI - Return on Investment Historical Data']), this.fetchData(Types.TABLE, '/shares-outstanding', ['Quarterly Shares Outstanding']), this.fetchData(Types.TABLE, '/total-common-preferred-stock-dividends-paid', ['Annual Total Common and Preferred Stock Dividends Paid']), this.fetchData(Types.TABLE, '/total-depreciation-amortization-cash-flow', ['Annual Total Depreciation and Amortization - Cash Flow']), this.fetchData(Types.TABLE, '/total-liabilities', ['Quarterly Total Liabilities']), this.fetchData(Types.TABLE, '/total-long-term-assets', ['Quarterly Total Long-Term Assets']), this.fetchData(Types.TABLE, '/total-long-term-liabilities', ['Quarterly Total Long Term Liabilities']), this.fetchData(Types.TABLE, '/total-share-holder-equity', ['Quarterly Share Holder Equity']), this.fetchData(Types.DATABASE, '/financial-ratios', ['Asset Turnover', 'Inventory Turnover Ratio', 'Receiveable Turnover']), this.fetchData(Types.CHART, null, ['Quarterly Shares Growth']), this.fetchData(Types.DISCOVERCI, null, ['Payables turnover']), this.fetchData(Types.SIMPLYWALL, null, [])).subscribe((tables) => {
            uns.unsubscribe();
            this.createTable();
            tables.forEach((table) => this.fillTable(table));
        });
    }
    getCompany() {
        if (this.macrotrendsInput.includes(this.urlMacrotrendsPart)) {
            this.companyFull = this.macrotrendsInput.slice(this.urlMacrotrendsPart.length, this.macrotrendsInput.lastIndexOf('/'));
            this.companyShort = this.companyFull.slice(0, this.companyFull.indexOf('/'));
        }
        else {
            this.companyFull = this.macrotrendsInput + '/' + this.macrotrendsInput;
            this.companyShort = this.macrotrendsInput;
        }
    }
    createTable() {
        this.getQuarters();
        this.table = [this.head];
        this.quarters.forEach((quarter) => {
            const row = [];
            this.head.forEach(() => row.push(0));
            row[0] = quarter.val;
            this.table.push(row);
        });
    }
    getQuarters() {
        const quarterNames = ['IV', 'III', 'II', 'I'];
        const quarterRange = [
            { min: 9, max: 0 },
            { min: 6, max: 9 },
            { min: 3, max: 6 },
            { min: 0, max: 3 },
        ];
        this.quarters = [];
        for (let year = new Date().getFullYear(); year >= this.minYear; year--) {
            quarterNames.forEach((quarter, index) => {
                this.quarters.push({
                    val: `${year} ${quarter}`,
                    min: new Date(year, quarterRange[index].min, 1).getTime(),
                    max: new Date(index ? year : year + 1, quarterRange[index].max, 1).getTime() - 1,
                });
            });
        }
    }
    fillTable(table) {
        if (table.length > 1) {
            const ctable = Object.assign([], table);
            const headMap = [];
            ctable.splice(0, 1)[0].forEach((cell) => headMap.push(this.head.findIndex((globalCell) => globalCell.toLowerCase() === cell.toLowerCase())));
            headMap[0] = -1;
            ctable.forEach((row) => {
                const time = new Date((row[0].length === 4) ? (row[0] + '-12-01') : row[0]).getTime();
                const globalRowIndex = this.quarters.findIndex((quarter) => quarter.min <= time && time <= quarter.max);
                if (globalRowIndex !== -1) {
                    row.forEach((cell, cellIndex) => {
                        if (headMap[cellIndex] !== -1) {
                            if (String(cell).includes('B')) {
                                const amount = cell.slice(1, -1);
                                if (!isNaN(+amount)) {
                                    cell = cell.slice(0, 1) + (+amount * 1000);
                                }
                            }
                            this.table[globalRowIndex + 1][headMap[cellIndex]] = cell;
                        }
                    });
                }
            });
        }
    }
    fetchData(type, path, names) {
        if (this.getUrl(type, path)) {
            return this.httpClient.get(this.getUrl(type, path), { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                const clearText = this.clearText(response || '');
                switch (type) {
                    case Types.TABLE:
                        return this.parseTable(clearText, names[0]);
                    case Types.DATABASE:
                        return this.parseDatabase(clearText, names);
                    case Types.CHART:
                        return this.parseChart(clearText, names[0]);
                    case Types.DISCOVERCI:
                        return this.parseDiscoverci(clearText, names[0]);
                    case Types.SIMPLYWALL:
                        return this.parseSimplywall(clearText);
                }
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
    }
    clearText(text) {
        return text
            .replace(/[^\S ]/gi, '')
            .replace(/ style="text-align:(\w+);?"/gi, '')
            .replace(/ {2}/gi, ' ')
            .replace(/> </gi, '><');
    }
    parseTable(text, name) {
        const tableArr = text.match(/<table(.*?)table>/gi) || [];
        const tableStr = tableArr.find((item) => item.match(new RegExp(name, 'i'))) || '';
        if (!tableStr) {
            return [];
        }
        const headArr = tableStr.match(/<thead(.*?)thead>/gi) || [];
        const bodyArr = tableStr.match(/<tbody(.*?)tbody>/gi) || [];
        const head = headArr[1] && headArr[1].slice(15, -18).split('</th><th>') || ['Date', name];
        const body = [];
        const rows = bodyArr[0] && bodyArr[0].slice(11, -13).split('</tr><tr>');
        rows.forEach((row) => {
            const cells = row.slice(4, -5).split('</td><td>');
            if (String(this.minYear) <= cells[0]) {
                cells.forEach((cell, cellIndex) => cells[cellIndex] = this.getValue(cell));
                body.push(cells);
            }
        });
        return [head, ...body];
    }
    parseDatabase(text, names) {
        const dataArr = text.match(/var originalData = \[(.*?)]/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(19);
        const dataObj = this.parseJSON(dataStr);
        if (!dataObj) {
            return [];
        }
        const head = ['Date'];
        const body = [];
        names.forEach((name) => {
            dataObj.find((item) => {
                if (item.field_name.includes(name)) {
                    head.push(name);
                    for (const e in item) {
                        if (item.hasOwnProperty(e) && !isNaN(new Date(e).getTime()) && String(this.minYear) <= e) {
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
    parseChart(text, name) {
        const dataArr = text.match(/var chartData = \[(.*?)]/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(16);
        const dataObj = this.parseJSON(dataStr);
        if (!dataObj) {
            return [];
        }
        const head = ['Date', name];
        const body = [];
        dataObj.forEach((item) => {
            if (String(this.minYear) <= item.date) {
                body.push([item.date, this.getValue(item.v3)]);
            }
        });
        return [head, ...body];
    }
    parseDiscoverci(text, name) {
        const dataArr = text.match(/var metricData = anychart.data.set\((.*?)\)/gi) || [];
        const dataStr = dataArr[0] && dataArr[0].slice(35, -1);
        const dataObj = this.parseJSON(dataStr);
        if (!dataObj) {
            return [];
        }
        return [['Date', name], ...dataObj];
    }
    parseSimplywall(text) {
        this.info = [];
        let infoArr = text.match(/<ul class="styled__DetailsSummary(.*?)ul>/gi) || [];
        infoArr = infoArr[0] && infoArr[0].match(/<li(.*?)li>/gi) || [];
        infoArr.forEach((item) => {
            const key = item
                .slice(4, item.indexOf(':'))
                .replace(/[<!\->]/gi, '');
            const valArr = item.match(/<span(.*?)span>|<a(.*?)a>/gi) || [];
            const valStr = valArr[0] && valArr[0].slice(valArr[0].indexOf('>') + 1, valArr[0].indexOf('</'));
            this.info.push([key, valStr]);
        });
        const descArr = text.match(/bopTyF"><p itemProp="description">(.*?)</gi) || [];
        const descStr = descArr[0] && descArr[0].slice(34, -1);
        this.info.push(['Description', descStr]);
        return [];
    }
    getValue(str) {
        let val = /\d/.test(String(str)) ? String(str) : '0';
        val = val
            .replace(/[$%]/gi, '')
            .replace('.', ',');
        return val;
    }
    parseJSON(data) {
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return null;
        }
    }
    getUrl(type, path) {
        switch (type) {
            case Types.TABLE:
            case Types.DATABASE:
                return this.urlMacrotrendsPart + this.companyFull + path;
            case Types.CHART:
                return this.urlMacrotrendsCustom1;
            case Types.DISCOVERCI:
                return this.discoverciInput || this.urlDiscoverciCustom1;
            case Types.SIMPLYWALL:
                return this.simplywallInput || '';
        }
    }
    get urlMacrotrendsHome() {
        return 'https://www.macrotrends.net/';
    }
    get urlMacrotrendsPart() {
        return `${this.urlMacrotrendsHome}stocks/charts/`;
    }
    get urlMacrotrendsCustom1() {
        return `${this.urlMacrotrendsHome}assets/php/fundamental_iframe.php?t=${this.companyShort}&type=shares-outstanding&statement=income-statement&freq=Q`;
    }
    get urlDiscoverciCustom1() {
        return `https://www.discoverci.com/companies/${this.companyShort}/accounts-payable-turnover`;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 7, consts: [[1, "panel"], [1, "search"], [1, "field", "main"], ["placeholder", "https://www.macrotrends.net/...", 3, "ngModel", "ngModelChange"], [3, "disabled", "click"], [1, "field"], ["placeholder", "https://www.discoverci.com/...", 3, "ngModel", "ngModelChange"], ["placeholder", "https://www.simplywall.st/...", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], [1, "config"], ["class", "field", 4, "ngIf"], [1, "info"], [4, "ngFor", "ngForOf"], [1, "table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "label"], [1, "data"], [3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener($event) { return ctx.macrotrendsInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_7_listener($event) { return ctx.discoverciInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_9_listener($event) { return ctx.simplywallInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Copy to clipboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_16_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_tr_18_Template, 2, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.macrotrendsInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.macrotrendsInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.discoverciInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simplywallInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyFull);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.table);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["* {\n  box-sizing: border-box;\n  font: 400 11px system-ui;\n}\n\n.panel {\n  display: flex;\n  margin-bottom: 8px;\n}\n\n.panel .search, .panel .config {\n  margin-right: 50px;\n}\n\n.panel .search .field, .panel .config .field {\n  display: flex;\n  align-items: center;\n  width: 500px;\n  height: 24px;\n}\n\n.panel .search .field:not(:last-child), .panel .config .field:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.panel .search .field.main input, .panel .config .field.main input {\n  border-color: #000000;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.panel .search .field.main button, .panel .config .field.main button {\n  background-color: #000000;\n  border: none;\n  border-radius: 0 12px 12px 0;\n  color: #ffffff;\n  height: 100%;\n  line-height: 0;\n  padding: 0 8px;\n  outline: none;\n}\n\n.panel .search .field input, .panel .search .field select, .panel .config .field input, .panel .config .field select {\n  display: block;\n  border: 1px solid #cccccc;\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  padding: 0 8px;\n  outline: none;\n}\n\n.panel .search .field .btn, .panel .config .field .btn {\n  background-color: #000000;\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  line-height: 0;\n  height: 100%;\n  width: 100%;\n  outline: none;\n}\n\n.panel .config .field {\n  justify-content: space-between;\n  width: 200px;\n}\n\n.panel .config .field .label {\n  text-align: right;\n  width: 48%;\n  margin-right: 8px;\n}\n\n.panel .config .field select, .panel .config .field .data {\n  width: 48%;\n}\n\n.panel .config .field .data {\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.info {\n  margin: 8px 0;\n}\n\n.info div {\n  font-size: 8px;\n}\n\n.table tr:first-child td {\n  vertical-align: top;\n  white-space: normal;\n}\n\n.table tr:nth-child(even) {\n  background-color: #ebebeb;\n}\n\n.table tr.mark {\n  background-color: yellow !important;\n}\n\n.table td {\n  font-size: 8px;\n  white-space: nowrap;\n  text-align: right;\n}\n\n.table td:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVrc2lpbWVsbnljaGVua28vUHJvamVjdHMvcm9ib3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ007RUFDRSxrQkFBQTtBQ0NSOztBREdRO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDRFY7O0FESVE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRlY7O0FETU07RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNKUjs7QURPTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNMUjs7QURXSTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ1ROOztBRFdNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNUUjs7QURZTTtFQUNFLFVBQUE7QUNWUjs7QURhTTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUNYUjs7QURpQkE7RUFDRSxhQUFBO0FDZEY7O0FEZ0JFO0VBQ0UsY0FBQTtBQ2RKOztBRHFCTTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNsQlI7O0FEc0JJO0VBQ0UseUJBQUE7QUNwQk47O0FEdUJJO0VBQ0UsbUNBQUE7QUNyQk47O0FEeUJFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUN2Qko7O0FEeUJJO0VBQ0UsZ0JBQUE7QUN2Qk4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogNDAwIDExcHggc3lzdGVtLXVpO1xufVxuXG4ucGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgLnNlYXJjaCwgLmNvbmZpZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuXG4gICAgLmZpZWxkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG5cbiAgICAgICYubWFpbiB7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maWcge1xuICAgIC5maWVsZCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LCAuZGF0YSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDhweCAwO1xuXG4gIGRpdiB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgdHIge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgdGQge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gICAgfVxuXG4gICAgJi5tYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIHRkIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IDQwMCAxMXB4IHN5c3RlbS11aTtcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnBhbmVsIC5zZWFyY2gsIC5wYW5lbCAuY29uZmlnIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnBhbmVsIC5zZWFyY2ggLmZpZWxkLCAucGFuZWwgLmNvbmZpZyAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5wYW5lbCAuc2VhcmNoIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpLCAucGFuZWwgLmNvbmZpZyAuZmllbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wYW5lbCAuc2VhcmNoIC5maWVsZC5tYWluIGlucHV0LCAucGFuZWwgLmNvbmZpZyAuZmllbGQubWFpbiBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLnBhbmVsIC5zZWFyY2ggLmZpZWxkLm1haW4gYnV0dG9uLCAucGFuZWwgLmNvbmZpZyAuZmllbGQubWFpbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wYW5lbCAuc2VhcmNoIC5maWVsZCBpbnB1dCwgLnBhbmVsIC5zZWFyY2ggLmZpZWxkIHNlbGVjdCwgLnBhbmVsIC5jb25maWcgLmZpZWxkIGlucHV0LCAucGFuZWwgLmNvbmZpZyAuZmllbGQgc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBhbmVsIC5zZWFyY2ggLmZpZWxkIC5idG4sIC5wYW5lbCAuY29uZmlnIC5maWVsZCAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFuZWwgLmNvbmZpZyAuZmllbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5wYW5lbCAuY29uZmlnIC5maWVsZCAubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ucGFuZWwgLmNvbmZpZyAuZmllbGQgc2VsZWN0LCAucGFuZWwgLmNvbmZpZyAuZmllbGQgLmRhdGEge1xuICB3aWR0aDogNDglO1xufVxuLnBhbmVsIC5jb25maWcgLmZpZWxkIC5kYXRhIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDhweCAwO1xufVxuLmluZm8gZGl2IHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi50YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4udGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cbi50YWJsZSB0ci5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
var Types;
(function (Types) {
    Types[Types["TABLE"] = 0] = "TABLE";
    Types[Types["DATABASE"] = 1] = "DATABASE";
    Types[Types["CHART"] = 2] = "CHART";
    Types[Types["DISCOVERCI"] = 3] = "DISCOVERCI";
    Types[Types["SIMPLYWALL"] = 4] = "SIMPLYWALL";
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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