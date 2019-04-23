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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _comps_order_details_form_order_details_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/order-details-form/order-details-form.component */ "./src/app/comps/order-details-form/order-details-form.component.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/categories/categories.component */ "./src/app/comps/categories/categories.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    { path: "categories", component: _comps_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: "", component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "order-details", component: _comps_order_details_form_order_details_form_component__WEBPACK_IMPORTED_MODULE_1__["OrderDetailsFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webApp';
    }
    AppComponent.prototype.log = function (x) {
        console.log(x);
    };
    AppComponent.prototype.test = function (f) {
        console.log(f.value.firstName);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _fav_fav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fav/fav.component */ "./src/app/fav/fav.component.ts");
/* harmony import */ var _custom_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-input.directive */ "./src/app/custom-input.directive.ts");
/* harmony import */ var _comps_order_details_form_order_details_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/order-details-form/order-details-form.component */ "./src/app/comps/order-details-form/order-details-form.component.ts");
/* harmony import */ var _comps_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/categories/categories.component */ "./src/app/comps/categories/categories.component.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/navbar/navbar.component */ "./src/app/comps/navbar/navbar.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_6__["mySummary"],
                _fav_fav_component__WEBPACK_IMPORTED_MODULE_7__["FavComponent"],
                _custom_input_directive__WEBPACK_IMPORTED_MODULE_8__["CustomInputDirective"],
                _comps_order_details_form_order_details_form_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsFormComponent"],
                _comps_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
                _comps_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comps/categories/categories.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/categories/categories.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comps/categories/categories.component.html":
/*!************************************************************!*\
  !*** ./src/app/comps/categories/categories.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start selcted category products-->\n<div class=\"selected-product text-center\" style=\"background-image: url(assets/img/bg-img/breadcumb.jpg);\">\n  <div class=\"overlay\"></div>\n  <h2>category</h2>\n</div>\n\n<div class=\"products container section-padding-80\">\n  <div class=\"row\">\n    <!--start categories side bar-->\n    <div class=\"col-md-3\">\n      <h3 class=\"widget-title mb-30\">categories</h3>\n      <ul class=\"list-group list-group-flush categories-list\">\n        <li class=\"list-group-item\"><a>Cras justo odio</a></li>\n        <li class=\"list-group-item\"><a>Dapibus ac facilisis in</a></li>\n        <li class=\"list-group-item\"><a>Morbi leo risus</a></li>\n        <li class=\"list-group-item\"><a>Porta ac consectetur ac</a></li>\n        <li class=\"list-group-item\"><a>Vestibulum at eros</a></li>\n        <li class=\"list-group-item\"><a>Cras justo odio</a></li>\n        <li class=\"list-group-item\"><a>Dapibus ac facilisis in</a></li>\n        <li class=\"list-group-item\"><a>Morbi leo risus</a></li>\n        <li class=\"list-group-item\"><a>Porta ac consectetur ac</a></li>\n        <li class=\"list-group-item\"><a>Vestibulum at eros</a></li>\n      </ul>\n    </div>\n    <!--end categories side bar-->\n\n    <!--start products list-->\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <!--start product box-->\n        <div class=\"product-box col-md-4\">\n          <img src=\"assets/img/product-img/product-2.jpg\">\n          <div class=\"product-info\">\n            <p class=\"cat\">category</p>\n            <h4>product name</h4>\n            <p class=\"price\">$55.00</p>\n          </div>\n        </div>\n        <!--end product box-->\n\n        <!--start product box-->\n        <div class=\"product-box col-md-4\">\n          <img src=\"assets/img/product-img/product-2.jpg\">\n          <div class=\"product-info\">\n            <p class=\"cat\">category</p>\n            <h4>product name</h4>\n            <p class=\"price\">$55.00</p>\n          </div>\n        </div>\n        <!--end product box-->\n\n        <!--start product box-->\n        <div class=\"product-box col-md-4\">\n          <img src=\"assets/img/product-img/product-2.jpg\">\n          <div class=\"product-info\">\n            <p class=\"cat\">category</p>\n            <h4>product name</h4>\n            <p class=\"price\">$55.00</p>\n          </div>\n        </div>\n        <!--end product box-->\n\n      </div>\n    </div>\n    <!--end products list-->\n  </div>\n</div>\n<!--end selcted category products-->"

/***/ }),

/***/ "./src/app/comps/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/comps/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/comps/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/comps/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/comps/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comps/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/comps/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start header-->\n<section class=\"welcome_area bg-img background-overlay\" style=\"background-image: url(assets/img/bg-img/casual-cute-elegant-428338.jpg);background-size: contain;background-position:right;\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12\">\n        <div class=\"hero-content\">\n          <h6>asoss</h6>\n          <h2>New Collection</h2>\n          <a href=\"#\" class=\"btn essence-btn\">view collection</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--start header-->\n\n<!--start categories-->\n<div class=\"top_catagory_area section-padding-80 clearfix\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\" style=\"background-image: url(assets/img/bg-img/bg-2.jpg);\">\n          <div class=\"catagory-content\">\n            <a href=\"#\">Clothing</a>\n          </div>\n        </div>\n      </div>\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\" style=\"background-image: url(assets/img/bg-img/bg-3.jpg);\">\n          <div class=\"catagory-content\">\n            <a href=\"#\">Shoes</a>\n          </div>\n        </div>\n      </div>\n      <!-- Single Catagory -->\n      <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"single_catagory_area d-flex align-items-center justify-content-center bg-img\" style=\"background-image: url(assets/img/bg-img/bg-4.jpg);\">\n          <div class=\"catagory-content\">\n            <a href=\"#\">Accessories</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--end categories-->\n\n<!--start new sale-->\n<div class=\"cta-area\">\n  <div class=\"container\">\n    <div class=\"row cta-content\">\n      <div class=\"col-md-6\">\n        <img src=\"assets/img/bg-img/bg-5.jpg\" />\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"cta--text\">\n          <h6>-60%</h6>\n          <h2>Global Sale</h2>\n          <a href=\"#\" class=\"btn essence-btn\">Buy Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--end new sale-->\n\n<!--start parteners-->\n<div class=\"brands-area d-flex align-items-center justify-content-between\">\n  <!-- Brand Logo -->\n  <div class=\"row\">\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand1.png\" alt=\"\">\n    </div>\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand2.png\" alt=\"\">\n    </div>\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand3.png\" alt=\"\">\n    </div>\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand4.png\" alt=\"\">\n    </div>\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand5.png\" alt=\"\">\n    </div>\n    <div class=\"single-brands-logo col-md-2\">\n      <img src=\"assets/img/core-img/brand6.png\" alt=\"\">\n    </div>\n  </div>\n</div>\n<!--end parteners-->\n\n\n\n<!--start products details-->\n<div class=\"product-details section-padding-80\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"assets/img/product-img/product-big-2.jpg\">\n    </div>\n\n    <div class=\"col-md-6 product-info\">\n      <p>MANGO</p>\n      <h2>One Shoulder Glitter Midi Dress</h2>\n      <p class=\"price\">$49.00</p>\n      <p class=\"desc\">\n        Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula,\n        nec maximus est sollicitudin.\n      </p>\n      <button type=\"submit\" name=\"addtocart\" value=\"5\" class=\"btn essence-btn\">Add to cart</button>\n    </div>\n  </div>\n</div>\n<!--end products details-->\n\n<!--start footer-->\n<footer class=\"footer_area clearfix\">\n  <div class=\"container\">\n\n\n\n  </div>\n</footer>\n<!--end footer-->"

/***/ }),

/***/ "./src/app/comps/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/comps/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/comps/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/comps/navbar/navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/navbar/navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comps/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/comps/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start nav bar-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Beauty Fashion</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n\n      <!-- <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Shop\n          <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Shoes</a></li>\n          <li><a href=\"#\">Clothing</a></li>\n          <li><a href=\"#\">Accessories</a></li>\n        </ul>\n      </li> -->\n      <li><a routerLink=\"/categories\">Categories</a></li>\n      <li><a routerLink=\"/order-details\">Order Details</a></li>\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\"><i class=\"fas fa-cart-plus\"></i></a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span></a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span></a></li>\n    </ul>\n  </div>\n</nav>\n<!--start nav bar-->"

/***/ }),

/***/ "./src/app/comps/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/comps/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/comps/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/comps/order-details-form/order-details-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/comps/order-details-form/order-details-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL29yZGVyLWRldGFpbHMtZm9ybS9vcmRlci1kZXRhaWxzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comps/order-details-form/order-details-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/comps/order-details-form/order-details-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start checkout-->\n<div class=\"checkout text-center\" style=\"background-image: url(assets/img/bg-img/breadcumb.jpg);\">\n  <div class=\"overlay\"></div>\n  <h2>checkout</h2>\n</div>\n\n<div class=\"container section-padding-80\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h4>Billing Address</h4>\n      <form class=\"checkout-form\" #f=\"ngForm\" (ngSubmit)=\"test(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" name=\"firstName\" required minlength=\"3\" pattern=\"ahmed\" class=\"form-control\" ngModel #firstName=\"ngModel\" placeholder=\"First name\">\n            <div *ngIf=\"firstName.touched && ! firstName.valid\">\n                <div class=\"alert alert-danger\" *ngIf=\" firstName.errors.required \" >first name is required</div>\n                <div class=\"alert alert-danger\" *ngIf=\" firstName.errors.minlength \" >first name should be more than {{ firstName.errors.minlength.requiredLength }} characters </div>\n                <div class=\"alert alert-danger\" *ngIf=\" firstName.errors.pattern \" >first name does not match the pattern</div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <input type=\"text\" name=\"lastName\" class=\"form-control\" ngModel #lastName=\"ngModel\" placeholder=\"Last name\">\n          </div>\n          <div class=\"col-md-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Company name\">\n          </div>\n          <div class=\"col-md-12\">\n            <label for=\"exampleFormControlSelect1\">contacts</label>\n            <select ngModel name=\"contacts\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option *ngFor=\" let item of method  \" [value]=\"item.id\"> {{item.name}} </option>\n            </select>\n          </div>\n          <div class=\"radio\" *ngFor=\" let item of method \">\n            <label>\n              <input type=\"radio\" ngModel name=\"contactMethod\" [value]=\"item.id\">\n              {{item.name}}\n            </label>\n          </div>\n          \n          <div class=\"col-md-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Address\">\n          </div>\n          <div class=\"col-md-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\">\n          </div>\n          <div class=\"col-md-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Phone\">\n          </div>\n        \n\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-default\"  [disabled]=\"!f.valid\" type=\"submit\">Submit</button>\n          </div>\n\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-6 col-lg-5 ml-lg-auto order-box-container\">\n      <div class=\"order-details-confirmation\">\n        <ul class=\"order-details-form\">\n          <h3>Your Order</h3>\n          <p class=\"the-details\">The Details</p>\n          <li><span>Product</span> <span>Total</span></li>\n          <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>\n          <li><span>Subtotal</span> <span>$59.90</span></li>\n          <li><span>Shipping</span> <span>Free</span></li>\n          <li><span>Total</span> <span>$59.90</span></li>\n          <a href=\"#\" class=\"btn essence-btn\">Place Order</a>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--start checkout-->\n"

/***/ }),

/***/ "./src/app/comps/order-details-form/order-details-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/comps/order-details-form/order-details-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsFormComponent", function() { return OrderDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderDetailsFormComponent = /** @class */ (function () {
    function OrderDetailsFormComponent() {
        this.method = [
            { id: "1", name: "phone" },
            { id: "2", name: "mobile" },
        ];
    }
    OrderDetailsFormComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'order-details-form',
            template: __webpack_require__(/*! ./order-details-form.component.html */ "./src/app/comps/order-details-form/order-details-form.component.html"),
            styles: [__webpack_require__(/*! ./order-details-form.component.css */ "./src/app/comps/order-details-form/order-details-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderDetailsFormComponent);
    return OrderDetailsFormComponent;
}());



/***/ }),

/***/ "./src/app/custom-input.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-input.directive.ts ***!
  \*******************************************/
/*! exports provided: CustomInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInputDirective", function() { return CustomInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomInputDirective = /** @class */ (function () {
    function CustomInputDirective(el) {
        this.el = el;
    }
    CustomInputDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        if (this.format == 'uppercase') {
            this.el.nativeElement.value = value.toLowerCase();
        }
        else {
            this.el.nativeElement.value = value.toUpperCase();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCustomInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomInputDirective.prototype, "format", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CustomInputDirective.prototype, "onBlur", null);
    CustomInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCustomInput]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CustomInputDirective);
    return CustomInputDirective;
}());



/***/ }),

/***/ "./src/app/fav/fav.component.css":
/*!***************************************!*\
  !*** ./src/app/fav/fav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdi9mYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fav/fav.component.html":
/*!****************************************!*\
  !*** ./src/app/fav/fav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\"><ng-content select=\".head\"></ng-content></div>\n  <div class=\"panel-body\"><ng-content select=\".body\"></ng-content></div>\n</div>"

/***/ }),

/***/ "./src/app/fav/fav.component.ts":
/*!**************************************!*\
  !*** ./src/app/fav/fav.component.ts ***!
  \**************************************/
/*! exports provided: FavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavComponent", function() { return FavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavComponent = /** @class */ (function () {
    function FavComponent() {
        this.isTrue = true;
    }
    FavComponent.prototype.ngOnInit = function () {
    };
    FavComponent.prototype.onclick = function () {
        this.isTrue = !this.isTrue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isSelected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FavComponent.prototype, "isTrue", void 0);
    FavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fav',
            template: __webpack_require__(/*! ./fav.component.html */ "./src/app/fav/fav.component.html"),
            styles: [__webpack_require__(/*! ./fav.component.css */ "./src/app/fav/fav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavComponent);
    return FavComponent;
}());



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: mySummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySummary", function() { return mySummary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var mySummary = /** @class */ (function () {
    function mySummary() {
    }
    mySummary.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        else {
            var actualLimit = (limit) ? limit : 10;
            return value.substr(0, actualLimit) + " ....";
        }
    };
    mySummary = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'summary'
        })
    ], mySummary);
    return mySummary;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ahmed/normal-1/angular english course/webApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map