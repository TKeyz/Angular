(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .menu-list {\n    display: flex;\n}\n.header {\n    width: 100vw;\n    height: 50px;\n    background-color: blue;\n    color: white;\n    justify-content: flex-end;\n    align-items: center;\n}\n.header nav {\n    margin-right: 10px;\n}\n.header li {\n    margin: 8px;\n    display: inline-block;\n}\n.icon-menu:before, .icon-menu:after {\n    font-family: 'Glyphicons Halflings';\n}\n#close-Menu:after {\n    content: '\\e014';\n}\n.icon-47:before, #back-47:before {\n    content: '\\e145';\n}\n.icon-54:before, #back-54:before {\n    content: '\\20ac';\n}\n.icon-33:before, #back-33:before {\n    content: '\\e227';\n}\n.sub-menu li:not(:first-child):after {\n    content: \"\\e250\";\n}\n.back-button:after {\n    content:\"\\e251\";\n}\n.menu-list {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: auto;\n    bottom: 0;\n    z-index: 7;\n    width: 100%;\n}\n.sub-menu, .sub-menu-section {\n    width: 300px;\n    box-shadow: 2px 2px 2px #aaaaaa;\n}\n.menu-list .sub-menu {\n    width: 300px;\n    height: 100vh;\n    font-size: 16px;\n    line-height: 2.5;\n    font-weight: 400;\n    padding-top: 50px;\n    list-style: none;\n    color: black;\n    \n}\n.sub-menu-section {\n    margin-left: 5px;\n    background-color: #eeeeee;\n}\n#title-section {\n    margin-left: 10px;\n    font-size: 1.6em;\n    color: #3083b8;\n}\n.sub-menu-link {\n    margin: 15px 20px;\n    line-height: 6;\n    box-sizing: border-box;\n    list-style: none;\n}\n.off, .sub-menu-section.off {\n    display: none;\n}\n.sub-menu {\n    z-index: 9;\n    background-color: #ffffff;\n}\n.sub-menu {\n    flex-direction: column;\n}\n.sub-menu li:not(:first-child) {\n    margin-right: 15px;\n    position: relative;\n}\n.sub-menu li:not(:first-child):after, .back-button:after {\n    position: absolute;\n    right: 10px;\n    font-size: 10px;\n    color: #999999;\n    padding-top: 10px;\n}\n.thumb {\n    width: 70px;\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n}\n.back-button {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    right: 0;\n    width: 100%;\n    background-color: #ffffff;\n}\n#background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000000;\n}\n.pointer {\n    cursor: pointer;\n}\n/*JUST AN EXTRA LINE TO DISPLAY PROPERLY THE DESCRIPTION*/\nh2 {\n    line-height: 1.7em;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav>\n    <li class=\"pointer glyphicon glyphicon-menu-hamburger\" (click)=\"toggleSlideMenu()\">\n      <i></i>\n    </li>\n    <li class=\"pointer\" (click)=\"openSlideMenu($event)\" *ngFor=\"let items of items\" id=\"{{items.id}}\">{{ items.name }}</li>\n  </nav>\n</header>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Hi guys,</h1>\n    <h2>{{description}}</h2>\n  </div>\n</div>\n\n<section class=\"menu-list\" [@slideInOut]=\"menuState\">\n  <ul class=\"sub-menu\">\n    <li id=\"close-Menu\" class=\"icon-menu pointer\" (click)=\"closeSliderMenu($event)\"></li>\n    <li class=\"pointer side-link icon-menu icon-{{items.id}}\" *ngFor=\"let items of items; let i = index;\" (click)=\"onSubSection($event)\" id=\"sub-menu-{{ items.id }}\">\n      {{ items.name }}\n      <div id=\"back-{{items.id}}\" class=\"icon-menu back-button off\" (click)=\"closeSubMenu($event)\">Back</div>\n    </li>\n  </ul>\n  <nav class=\"sub-menu-section {{viewItems}}\" [@swipeInOut]=\"viewItems\">\n    <h1 id=\"title-section\">{{menuTitle}}</h1>\n    <li *ngFor=\"let post of itemDisplayed\" class=\"sub-menu-link\">\n      <a href=\"{{post.href}}\">\n        <img class=\"thumb\" src=\"./assets/images/{{post.thumb}}\">\n        <span>{{post.name}}</span>\n      </a>\n    </li>\n  </nav>\n</section>\n\n<div id=\"background\" class=\"on\" [@fadeInOut]=\"menuState\"></div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.description = "I hope you're doing well, I feel so satisfy about myself!! It has been such a good test to work on this Offline tasks, it was very challenging and I think I've been able to express my skills and learnt a lot! Looking forward to discuss further about it! Have a good day!! ;) ";
        this.ROOT_URL = './assets/json/menu.json';
        this.items = [];
        this.filterData = [];
        this.viewItems = 'off';
        this.menuState = 'out';
        this.itemDisplayed = [];
        this.menuTitle = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.ROOT_URL).subscribe(function (data) {
            _this.items = data.menu;
        } /*,
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            } else {
                console.log("Server-side error occured.");
            }
        }*/);
    };
    AppComponent.prototype.onSubSection = function (event) {
        if (event.target.id != "undefined" && event.target.nodeName == "LI") {
            this.items.forEach(function (value) {
                document.getElementById("back-" + value.id).classList.remove("on");
                document.getElementById("back-" + value.id).classList.add("off");
            });
            var id_elem_1 = event.target.id.split('-');
            var filterData = this.items.filter(function (number) { return id_elem_1[2] == number.id; });
            this.menuTitle = filterData[0].name;
            this.itemDisplayed = filterData[0].sub;
            this.viewItems = (this.viewItems === 'off' || this.menuTitle != event.target.innerText) ? 'on' : 'off';
            if (this.viewItems === 'on') {
                event.currentTarget.children[0].classList.remove("off");
                event.currentTarget.children[0].classList.add("on");
            }
            return true;
        }
    };
    AppComponent.prototype.closeSubMenu = function (event) {
        event.currentTarget.classList.remove("on");
        event.currentTarget.classList.add("off");
        this.viewItems = 'off';
    };
    AppComponent.prototype.toggleSlideMenu = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.viewItems = 'off';
        this.menuTitle = '';
        this.itemDisplayed = [];
    };
    AppComponent.prototype.openSlideMenu = function (event) {
        if (event.target.nodeName == "LI") {
            this.menuState = 'in';
            var id_elem_2 = event.target.id;
            var filter = this.items.filter(function (number) { return id_elem_2 == number.id; });
            this.menuTitle = filter[0].name;
            this.itemDisplayed = filter[0].sub;
            this.viewItems = 'on';
            document.getElementById("back-" + id_elem_2).classList.remove("off");
            document.getElementById("back-" + id_elem_2).classList.add("on");
            return true;
        }
    };
    AppComponent.prototype.closeSliderMenu = function (event) {
        if (event.target.nodeName == "LI" && event.target.id == "close-Menu") {
            this.menuState = 'out';
            this.menuTitle = '';
            this.itemDisplayed = [];
            this.items.forEach(function (value) {
                document.getElementById("back-" + value.id).classList.remove("on");
                document.getElementById("back-" + value.id).classList.add("off");
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-100%, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('swipeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0) scale(1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0) scale(1.1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('off => on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('on => off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => off', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%) scale(1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('off => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%) scale(1)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0) scale(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('on => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0) scale(0)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.7, position: 'fixed' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, position: 'relative' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('10ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('30ms ease-in-out'))
                ])
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tereter/Desktop/JSWorks/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map