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

/***/ "./src/app/anime/anime.component.html":
/*!********************************************!*\
  !*** ./src/app/anime/anime.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"row\" *ngIf=\"anime$\">\n        <div *ngFor=\"let anime of anime$.characters\" class=\"col-6 img-row rounded\">\n              <mat-card class=\"example-card\">\n                <mat-card-header>\n                  <div mat-card-avatar class=\"example-header-image\"></div>\n                  <mat-card-title>{{ anime.name }}</mat-card-title>\n                </mat-card-header>\n                <img class=\"rounded border border-primary\" mat-card-image src=\"{{ anime.image_url }}\" alt=\"Photo of a Shiba Inu\">\n                <mat-card-content>\n\n                </mat-card-content>\n                <mat-card-actions>\n                  <button mat-button>LIKE</button>\n                </mat-card-actions>\n              </mat-card>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/anime/anime.component.less":
/*!********************************************!*\
  !*** ./src/app/anime/anime.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-row {\n  margin: 25px 0;\n}\n.img-row img {\n  max-height: 250px;\n  width: 50%;\n  height: 50%;\n  display: block;\n  margin: 0 auto;\n}\n.rounded {\n  border-radius: 2.25rem !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUvRDovYmFja3VwL2FuZ3VsYXJfcHJvamVjdC9GTUsvcHJvamVjdC9zcmMvYXBwL2FuaW1lL2FuaW1lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hbmltZS9hbmltZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREZBO0VBR1EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDQTtFQUNJLGlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hbmltZS9hbmltZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcm93e1xuICAgIG1hcmdpbjogMjVweCAwO1xuICAgIGltZ3tcbiAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG59XG4ucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMi4yNXJlbSFpbXBvcnRhbnQ7XG59IiwiLmltZy1yb3cge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbi5pbWctcm93IGltZyB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAyLjI1cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/anime/anime.component.ts":
/*!******************************************!*\
  !*** ./src/app/anime/anime.component.ts ***!
  \******************************************/
/*! exports provided: AnimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeComponent", function() { return AnimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimeComponent = /** @class */ (function () {
    function AnimeComponent(anime) {
        this.anime = anime;
    }
    AnimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.anime.getanimes().subscribe(function (anime) { return _this.anime$ = anime; });
    };
    AnimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anime',
            template: __webpack_require__(/*! ./anime.component.html */ "./src/app/anime/anime.component.html"),
            styles: [__webpack_require__(/*! ./anime.component.less */ "./src/app/anime/anime.component.less")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AnimeComponent);
    return AnimeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _anime_anime_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anime/anime.component */ "./src/app/anime/anime.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'culturebooklet',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'onlinedemo',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    },
    {
        path: 'carrier',
        component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_6__["PetsComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    },
    {
        path: 'anime',
        component: _anime_anime_component__WEBPACK_IMPORTED_MODULE_7__["AnimeComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-sidebar></app-sidebar>\n<div class=\"container\">\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-dream-app2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _anime_anime_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./anime/anime.component */ "./src/app/anime/anime.component.ts");
/* harmony import */ var _exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./exponential-strength.pipe */ "./src/app/exponential-strength.pipe.ts");
/* harmony import */ var _raectiveform_raectiveform_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./raectiveform/raectiveform.component */ "./src/app/raectiveform/raectiveform.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _confirmsnackbar_confirmsnackbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./confirmsnackbar/confirmsnackbar.component */ "./src/app/confirmsnackbar/confirmsnackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_24__["PetsComponent"],
                _anime_anime_component__WEBPACK_IMPORTED_MODULE_25__["AnimeComponent"],
                _exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_26__["ExponentialStrengthPipe"],
                _raectiveform_raectiveform_component__WEBPACK_IMPORTED_MODULE_27__["RaectiveformComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_31__["ContactComponent"],
                _confirmsnackbar_confirmsnackbar_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmsnackbarComponent"]
            ],
            entryComponents: [_confirmsnackbar_confirmsnackbar_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmsnackbarComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirmsnackbar/confirmsnackbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/confirmsnackbar/confirmsnackbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"example-pizza-party\">\n  Successfully Submitted 👍\n</span>"

/***/ }),

/***/ "./src/app/confirmsnackbar/confirmsnackbar.component.less":
/*!****************************************************************!*\
  !*** ./src/app/confirmsnackbar/confirmsnackbar.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-pizza-party {\n  color: hotpink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybXNuYWNrYmFyL0Q6L2JhY2t1cC9hbmd1bGFyX3Byb2plY3QvRk1LL3Byb2plY3Qvc3JjL2FwcC9jb25maXJtc25hY2tiYXIvY29uZmlybXNuYWNrYmFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb25maXJtc25hY2tiYXIvY29uZmlybXNuYWNrYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybXNuYWNrYmFyL2NvbmZpcm1zbmFja2Jhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICBjb2xvcjogaG90cGluaztcbiAgfSIsIi5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgY29sb3I6IGhvdHBpbms7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/confirmsnackbar/confirmsnackbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/confirmsnackbar/confirmsnackbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmsnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmsnackbarComponent", function() { return ConfirmsnackbarComponent; });
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

var ConfirmsnackbarComponent = /** @class */ (function () {
    function ConfirmsnackbarComponent() {
    }
    ConfirmsnackbarComponent.prototype.ngOnInit = function () {
    };
    ConfirmsnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmsnackbar',
            template: __webpack_require__(/*! ./confirmsnackbar.component.html */ "./src/app/confirmsnackbar/confirmsnackbar.component.html"),
            styles: [__webpack_require__(/*! ./confirmsnackbar.component.less */ "./src/app/confirmsnackbar/confirmsnackbar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmsnackbarComponent);
    return ConfirmsnackbarComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 col-md-8 offset-md-2 col-sm-10 offset-sm-1\" @myInsertRemoveTrigger>\r\n    \r\n    <mat-card>\r\n        <div class=\"contact-form\">\r\n                <mat-card-title><h2>Contact Us </h2></mat-card-title>\r\n            <app-raectiveform></app-raectiveform>\r\n        </div>\r\n    </mat-card>\r\n  </div> "

/***/ }),

/***/ "./src/app/contact/contact.component.less":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  padding: 15px;\n}\nmat-card.mat-card {\n  background: #f5f5f5;\n}\nmat-card-title h2 {\n  font-size: 20px;\n  text-transform: uppercase;\n  padding-left: 15px;\n  position: relative;\n  margin-bottom: 25px;\n}\nmat-card-title h2:after {\n  content: \"\";\n  position: absolute;\n  width: 30px;\n  height: 2px;\n  background: #000;\n  top: 27px;\n  left: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOi9iYWNrdXAvYW5ndWxhcl9wcm9qZWN0L0ZNSy9wcm9qZWN0L3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0FDQUo7QURHRTtFQUNFLG1CQUFBO0FDREo7QURLQTtFQUVJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pKO0FETUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm17XG4gIC8vICBib3JkZXI6IDFweCBzb2xpZCAjMWFhYmU5O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5tYXQtY2FyZCB7XG4gICYubWF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICB0b3A6IDI3cHg7XG4gICAgICBsZWZ0OiAxN3B4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhY3QtZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5tYXQtY2FyZC5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5tYXQtY2FyZC10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5tYXQtY2FyZC10aXRsZSBoMjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB0b3A6IDI3cHg7XG4gIGxlZnQ6IDE3cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/contact/contact.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div><img mat-card-image src=\"{{ card.image }}\" alt=\"Photo of a Shiba Inu\"></div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n  <!-- <h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div> -->\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\" (click)=\"myClickFunction(color)\" >Primary</button>\n</div>\n\n<!-- <h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  \n</div> -->\n\n<!-- <h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n</div> -->\n</div>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n      {{color}}\n    </section>\n    <button mat-raised-button color={{color}}>{{color}}</button>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-slide-toggle>Slide me!</mat-slide-toggle>\n<div><code>observable|async</code>:Time: {{ t | async }}</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dashboard-card-content {\n  text-align: center;\n}\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n.example-card {\n  max-width: 400px;\n}\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6L2JhY2t1cC9hbmd1bGFyX3Byb2plY3QvRk1LL3Byb2plY3Qvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0ZGO0FESUE7O0VBRUUsaUJBQUE7QUNGRjtBRElBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQ0hGO0FES0E7RUFDRSxZQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSIsIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
        this.t = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 2000);
        this.subscribe = this.t.subscribe(function (val) { return _this.bufferValue = val; });
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                    { title: 'Card 2', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                    { title: 'Card 3', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                    { title: 'Card 4', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                { title: 'Card 2', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                { title: 'Card 3', cols: 1, rows: 2, image: 'https://picsum.photos/900/500?random&t=' + Math.random() },
                { title: 'Card 4', cols: 1, rows: 1, image: 'https://picsum.photos/900/500?random&t=' + Math.random() }
            ];
        }));
    }
    DashboardComponent.prototype.myClickFunction = function (event) {
        this.value = 70;
        console.log(event);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.caseDetails = {
            color: '#673ab7'
        };
        this.item = {
            'items': [
                {
                    'mainImage': {
                        'src': 'assets/culture.png'
                    },
                    'content': {
                        'productName': 'Culture Booklet',
                        'productFullDescription': 'Culture Booklet is a platform that brings you astonishing stuff about various beautiful and diverse cultures from different corners of the world. Culture Booklet also allows people to share their unique culture by posting pictures or videos and in return it offers $0.4 USD per every 1000 views on the particular post. It is platform to explore, share, earn & educate people. In short it’s a place to learn & earn.'
                    },
                    'link': 'culturebooklet',
                    'isActive': true
                },
                {
                    'mainImage': {
                        'src': 'assets/demo.png',
                        'imageLabel': null,
                        'altText': '',
                        'imageUrl': 'assets/demo.png'
                    },
                    'content': {
                        'productName': 'ERP Demo',
                        'productFullDescription': 'MFK Software ERP System is the most user friendly ERP application that can help you in taking care of your student data, teacher data, academic data, employee data, payroll, registration, admission, books, fees, mark sheet, report, library, attendance, notification, etc. at one place in the most easiest & safest way. It’s a multipurpose platform built with latest technologies that can handle school/colleges to universities management in an efficient way.'
                    },
                    'link': 'onlinedemo',
                    'bundledProducts': null,
                    'isActive': true
                },
                {
                    'mainImage': {
                        'src': 'assets/carrier.png'
                    },
                    'content': {
                        'productName': 'Carrier',
                        'productFullDescription': 'Software established in 1996, MFK Software began as a dream of a few friends who wanted to create a company with a difference – a company that focused on “strategic differentiation via technology” initiatives rather than routine IT operations. Today we are more than 50 experts across 20 countries. Together we form the global services division also.'
                    },
                    'link': 'carrier',
                    'isActive': true
                }
            ]
        };
    }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["findWhere"](this.item.items, { productCode: userId });
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    DataService.prototype.getPets = function () {
        return this.http.get('https://dog.ceo/api/breed/hound/images');
    };
    DataService.prototype.getanimes = function () {
        return this.http.get('https://api.jikan.moe/v3/anime/1/characters_staff');
    };
    DataService.prototype.sendMail = function (url, data) {
        return this.http.post(url, data, { responseType: 'text' });
    };
    DataService.prototype.uploadFile = function (data) {
        this._url = 'https://utsahpaikraysteg.github.io/AngularFMK/uploadFile';
        return this.http.post(this._url, data, { responseType: 'text' });
        // .map(this.handleData);
    };
    DataService.prototype.handleData = function (res) {
        var data = res.json();
        return data;
    };
    DataService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('API failed');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/exponential-strength.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/exponential-strength.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExponentialStrengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialStrengthPipe", function() { return ExponentialStrengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    // transform(value: number, exponent: string): number {
    //   console.log(value);
    //   console.log(exponent);
    //   let exp = parseFloat(exponent);
    //   return Math.pow(value, isNaN(exp) ? 1 : exp);
    // }
    ExponentialStrengthPipe.prototype.transform = function (value) {
        console.log(typeof value);
        var exp = value.replace(/\s/g, '');
        return exp;
    };
    ExponentialStrengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'exponentialStrength'
        })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n          <div class=\"row container-links\">\n            <!-- <div class=\"col-12 col-md-4\">\n              [ngStyle]=\"{'background-color':data.caseDetails.color}\"\n                <h4 class=\"footer-nav\"><a nonehref=\"/customer-service\">Customer Service</a></h4>\n                <ul class=\"list\">\n                  <li><a nonehref=\"/user/order-status\">Order Status</a></li>\n                  <li><a nonehref=\"/100-guarantee\">Our Guarantee</a></li>\n                  <li><a nonehref=\"/faqs\">FAQs</a></li>\n                  <li><a nonehref=\"/return-policy\">Return Policy</a></li>\n                  <li><a nonehref=\"/shipping-information\">Shipping Information</a></li>\n                </ul>\n            </div>\n            <div class=\"col-12 col-md-4\">\n\n                <h4 class=\"footer-nav\"><a nonehref=\"/about-us\">About Us</a></h4>\n                <ul class=\"list\">\n                  <li><a nonehref=\"/who-we-are\">Who We Are</a></li>\n                  <li><a nonehref=\"/our-partnerships\">Our Partnerships</a></li>\n                  <li><a nonehref=\"/media-relations\">Media Relations</a></li>\n                  <li><a nonehref=\"https://www.bedbathandbeyond.com/store/static/CorporateResponsibilityReport\"\n                      target=\"_blank\">Corporate Responsibility</a></li>\n                  <li><a\n                      nonehref=\"https://business.nasdaq.com/intel/ir-management/Investor-Relations-Solutions.html\"\n                      target=\"_blank\">Investor Relations</a></li>\n                  <li><a nonehref=\"https://www.bedbathandbeyond.com/store/static/brandcareers\"\n                      target=\"_blank\">Careers</a></li>\n                  <li><a nonehref=\"/corporate-sales\">Corporate Sales</a></li>\n                </ul>\n            </div>\n            <div class=\"col-12 col-md-4\">\n\n                  <h4 class=\"footer-nav\">Shopping Tools</h4>\n                  <ul class=\"list\">\n                    <li><a nonehref=\"/monthly-ad\">Monthly Ad <i class=\"fa fa-list-alt\"></i></a></li>\n                  </ul>\n                  <h4 class=\"footer-nav\">Gift Cards</h4>\n                  <ul class=\"list\">\n                    <li><a nonehref=\"/Gift-Cards/c/1251\">Buy Gift Card</a></li>\n                  </ul>\n            </div> -->\n            <div class=\"col-12\">\n              <div class=\"mz-pagefooter-copyrighttext\">\n                Copyright <strong>@</strong> 2019 MFX Software.\n            </div>\n            </div>\n           \n          </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.less":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: #20a1ce;\n  height: 75px;\n}\nfooter .container-links {\n  text-align: center;\n  line-height: 75px;\n}\nfooter .container-links .mz-pagefooter-copyrighttext {\n  font-size: 18px;\n  font-weight: 500;\n}\nfooter .container-links .footer-nav {\n  color: #fff;\n}\nfooter .container-links .footer-nav a {\n  color: #fff;\n}\nfooter .container-links ul {\n  list-style: none;\n  padding: 0;\n}\nfooter .container-links ul li a {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6L2JhY2t1cC9hbmd1bGFyX3Byb2plY3QvRk1LL3Byb2plY3Qvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBREpBO0VBS1Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEUkE7RUFRWSxlQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBRFpBO0VBWVksV0FBQTtBQ0daO0FEZkE7RUFjZ0IsV0FBQTtBQ0loQjtBRGxCQTtFQWtCWSxnQkFBQTtFQUNBLFVBQUE7QUNHWjtBRHRCQTtFQXNCb0IsV0FBQTtBQ0dwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICMyMGExY2U7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIC5jb250YWluZXItbGlua3N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDc1cHg7XG4gICAgICAgIC5tei1wYWdlZm9vdGVyLWNvcHlyaWdodHRleHR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItbmF2e1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVse1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJmb290ZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICMyMGExY2U7XG4gIGhlaWdodDogNzVweDtcbn1cbmZvb3RlciAuY29udGFpbmVyLWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNzVweDtcbn1cbmZvb3RlciAuY29udGFpbmVyLWxpbmtzIC5tei1wYWdlZm9vdGVyLWNvcHlyaWdodHRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5mb290ZXIgLmNvbnRhaW5lci1saW5rcyAuZm9vdGVyLW5hdiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIC5jb250YWluZXItbGlua3MgLmZvb3Rlci1uYXYgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIC5jb250YWluZXItbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuZm9vdGVyIC5jb250YWluZXItbGlua3MgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(data) {
        this.data = data;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.color = this.data.caseDetails.color;
        console.log(this.color);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group  [(ngModel)]=\"data.caseDetails.color\">\n        <mat-radio-button class=\"example-margin\" value=\"#dc3545\">\n            #dc3545\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"#a535dc\">\n            #a535dc\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"#35dc98\">\n            #35dc98\n        </mat-radio-button>\n      </mat-radio-group>\n    </section> [ngStyle]=\"{'background-color':data.caseDetails.color}\"-->\n    <div class=\"\">\n        <div *ngIf=\"item\" @myInsertRemoveTrigger class=\"selectedproduct\">\n          <div>\n             <div>\n                <mat-card class=\"example-card\">\n                  <div class=\"col-12 col-md-6\">\n                    <h3>The most user friendly ERP application for academic institutions</h3>\n                    <p *ngIf=\"item.items[0].content.productFullDescription\">MFK Software ERP is a robust, easy to use, highly customize and the most secured application for educational institutions. \n                    </p>\n                    <div class=\"col-12\">\n                    <button  (click)=\"open(onlinedemoform)\" mat-raised-button matTooltip=\"ERP Demo\" aria-label=\"Button that displays a tooltip when focused or hovered over\">ERP Demo</button>\n                    <!-- <button class=\"btn btn-dark btn-md\">Demo</button> -->\n                    </div>\n                    \n                  </div>\n                <div class=\"col-12 col-md-6 cardimage\">\n                    <img class=\"rounded border\" mat-card-image src=\"assets/demo.png\" alt=\"{Photo of a Shiba Inu}\">\n                </div> \n                </mat-card>\n            </div> \n          </div>\n      </div>\n    </div>\n    <!-- <div class=\"col-12\">\n        <div class=\"row items\" *ngIf=\"item\">\n            <div *ngFor=\"let item of item.items\" class=\"col-12 col-md-4 img-row rounded\" (mouseenter)=\"productSelection=item.content.productName\">\n                <a routerLink=\"/{{item.link}}\">\n                  <mat-card class=\"example-card\" matTooltip=\"{{item.content.productName}}\">\n                  \n                      <div class=\"header-title\"> \n                        <mat-card-title>{{item.content.productName}}</mat-card-title>\n                      </div>\n                \n                    <mat-card-content>\n                        <img class=\"rounded\" mat-card-image src=\"{{item.mainImage.src}}\"\n                        alt=\"{Photo of a Shiba Inu}\">\n                    </mat-card-content>\n                    <mat-card-actions>\n                    </mat-card-actions>\n                  </mat-card>\n              </a>\n            </div>\n          </div>\n    </div> -->\n    <div class=\"col-12\">\n        <div class=\"row items\" *ngIf=\"item\">\n            <div *ngFor=\"let item of item.items\" @myInsertRemoveTrigger class=\"col-12 img-row rounded\" (mouseenter)=\"productSelection=item.content.productName\">\n                <a routerLink=\"/{{item.link}}\">\n                  <mat-card class=\"example-card\" matTooltip=\"{{item.content.productName}}\">\n                  \n                      <div class=\"header-title\"> \n                        <mat-card-title>{{item.content.productName}}</mat-card-title>\n                      </div>\n                \n                    <mat-card-content>\n                      <div class=\"col-md-6 product-card-img\">\n                          <img class=\"rounded\" mat-card-image src=\"{{item.mainImage.src}}\"\n                          alt=\"{Photo of a Shiba Inu}\">\n                      </div>\n                      <div class=\"col-md-6 product-description\">\n                        <p>{{item.content.productFullDescription}}</p>\n                      </div>\n                        \n                    </mat-card-content>\n                  </mat-card>\n              </a>\n            </div>\n          </div>\n    </div>\n  </div>\n  <!-- <div class=\"modal\" id=\"onlinedemoform\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">                     \n          <div class=\"modal-body\">\n            <h2>Online Demo Form</h2>\n              <app-raectiveform></app-raectiveform>\n          </div> \n        </div>\n      </div>\n  </div> -->\n  <ng-template #onlinedemoform let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Online Demo Form</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <app-raectiveform></app-raectiveform>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-slide .slider-image img {\n  width: 100%;\n  max-height: 400px;\n  float: right;\n}\n.selectedproduct .example-card .mat-button {\n  background-color: #23272b;\n  color: #fff;\n}\n.img-row {\n  margin: 25px 0;\n}\n.img-row img {\n  width: auto;\n  height: 100%;\n  max-height: 200px;\n  display: block;\n  margin: 0 auto;\n  opacity: 0.7;\n  max-width: 100%;\n}\n.img-row img:hover {\n  opacity: 1;\n}\n.selectedproduct {\n  background: #20a1ce;\n}\n.selectedproduct .example-card {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-align: center;\n}\n.selectedproduct .mat-card {\n  box-shadow: none;\n  border-radius: 0;\n  padding: 0;\n}\n.selectedproduct .mat-card h3 {\n  text-align: left;\n  color: #00a8ff;\n}\n.selectedproduct .mat-card p {\n  font-size: 24px;\n  text-align: left;\n}\n.selectedproduct .mat-card button {\n  width: 45%;\n  padding: 5px;\n  background: #070707;\n  color: #fafafa;\n  font-size: 20px;\n  font-weight: 400;\n}\n.selectedproduct .cardimage img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n.items {\n  display: flex;\n  justify-content: center;\n}\n.items .img-row a {\n  text-decoration: none;\n}\n.items .example-card {\n  cursor: pointer;\n  text-align: center;\n  background: #f9f9f9;\n}\n.items .example-card.mat-card .mat-card-header-text {\n  width: 100%;\n}\n.items .example-card.mat-card:hover {\n  box-shadow: 0px 1px 6px 6px #dff2f9;\n}\n.ng-slide {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: #20a1ce;\n}\n.ng-slide .slider-text {\n  text-align: center;\n  padding-top: 140px;\n  color: white;\n  font-size: 24px;\n  font-weight: 500;\n}\n.ng-slide .slider-image {\n  padding: 0;\n}\nmat-card-content.mat-card-content {\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nmat-card-content.mat-card-content .product-description {\n  font-size: 20px;\n}\nmat-card-content.mat-card-content .product-description p {\n  text-align: justify;\n  color: #00a8ff;\n  margin: 10px 0;\n}\nmat-card-content.mat-card-content .product-card-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nmat-card-content.mat-card-content:hover {\n  text-decoration: none;\n}\nmat-card-content.mat-card-content:hover img {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\nmat-card-content.mat-card-content img {\n  transition: visibility 0.25s ease-in, -webkit-transform 0.25s;\n  transition: transform 0.25s, visibility 0.25s ease-in;\n  transition: transform 0.25s, visibility 0.25s ease-in, -webkit-transform 0.25s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.cardimage {\n  height: 300px;\n  overflow: hidden;\n}\n.cardimage img {\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.cardimage:hover img {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n@media only screen and (max-width: 767px) {\n  .ng-slide {\n    flex-direction: column-reverse;\n  }\n  .ng-slide .slider-text {\n    padding-top: 0;\n  }\n  .ng-slide .slider-image img {\n    width: 100%;\n    max-height: 250px;\n    float: right;\n  }\n  .selectedproduct .example-card button {\n    width: 90%;\n    padding: 5px;\n    text-align: center;\n    margin: 10px auto;\n    display: block;\n  }\n}\n.example-card .mat-card-header .header-title {\n  width: 100%;\n}\n.items .img-row:nth-child(even) mat-card-content {\n  flex-direction: row-reverse;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOi9iYWNrdXAvYW5ndWxhcl9wcm9qZWN0L0ZNSy9wcm9qZWN0L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRE47QURNQTtFQUdNLHlCQUFBO0VBQ0EsV0FBQTtBQ05OO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURTQTtFQUlJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDVko7QURZSTtFQUNFLFVBQUE7QUNWTjtBRGVBO0VBQ0UsbUJBQUE7QUNiRjtBRFlBO0VBSUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDYko7QURNQTtFQVlJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDZko7QURDQTtFQWdCTSxnQkFBQTtFQUNBLGNBQUE7QUNkTjtBREhBO0VBcUJNLGVBQUE7RUFFRixnQkFBQTtBQ2hCSjtBRFBBO0VBMkJNLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDakJOO0FEZkE7RUFzQ00sV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3BCTjtBRDJCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ3pCRjtBRHVCQTtFQUtJLHFCQUFBO0FDekJKO0FEb0JBO0VBU0ksZUFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7QUM1Qko7QUQ2Qkk7RUFFSSxXQUFBO0FDNUJSO0FEOEJNO0VBQ0UsbUNBQUE7QUM1QlI7QURrQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNoQ0Y7QUQ0QkE7RUFPSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2hDSjtBRHFCQTtFQWVJLFVBQUE7QUNqQ0o7QURxQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbkNGO0FEOEJBO0VBT0ksZUFBQTtBQ2xDSjtBRDJCQTtFQVNNLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNqQ047QURzQkE7RUFlSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2xDSjtBRG9DRTtFQUNFLHFCQUFBO0FDbENKO0FEaUNFO0VBR0ksOEJBQUE7VUFBQSxzQkFBQTtBQ2pDTjtBRFdBO0VBMkJJLDZEQUFBO0VBQUEscURBQUE7RUFBQSw4RUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNuQ0o7QUR1Q0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNyQ0Y7QURtQ0E7RUFLSSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QUNyQ0o7QUR3Q0U7RUFFSSw2QkFBQTtVQUFBLHFCQUFBO0FDdkNOO0FENENBO0VBQ0U7SUFDRSw4QkFBQTtFQzFDRjtFRHlDQTtJQUlJLGNBQUE7RUMxQ0o7RUQ4Q0E7SUFHTSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDOUNOO0VEbURBO0lBR00sVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQ25ETjtBQUNGO0FEdURBO0VBR00sV0FBQTtBQ3ZETjtBRDZEVTtFQUVNLDJCQUFBO0FDNURoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zbGlkZSB7XG4gIC5zbGlkZXItaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0ZWRwcm9kdWN0IHtcbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgLm1hdC1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjcyYjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG5cbi5pbWctcm93IHtcbiAgbWFyZ2luOiAyNXB4IDA7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3BhY2l0eTogMC43O1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLnNlbGVjdGVkcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6ICMyMGExY2U7XG5cbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubWF0LWNhcmQge1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMCwgMTIzLCAyNTQpLCAjYjEyNWFkKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzowO1xuICAgIGgzIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogIzAwYThmZjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAvL2NvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAvLyAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDcsIDcsIDcpO1xuICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICB9XG5cbiAgfVxufVxuXG4uaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi5pbWctcm93e1xuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuICAuZXhhbXBsZS1jYXJkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDdiZmUsICNkYWQyZDkpO1xuICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzk3YjJkMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAmLm1hdC1jYXJkIHtcbiAgICAgIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggNnB4ICNkZmYyZjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uZy1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwYTFjZTtcblxuICAuc2xpZGVyLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnNsaWRlci1pbWFnZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG5tYXQtY2FyZC1jb250ZW50Lm1hdC1jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwe1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGNvbG9yOiAjMDBhOGZmO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWNhcmQtaW1ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgaW1nIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cywgdmlzaWJpbGl0eSAuMjVzIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufVxuXG4uY2FyZGltYWdlIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5nLXNsaWRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAuc2xpZGVyLXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICB9XG5cbiAgLm5nLXNsaWRlIHtcbiAgICAuc2xpZGVyLWltYWdlIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3RlZHByb2R1Y3Qge1xuICAgIC5leGFtcGxlLWNhcmQge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5leGFtcGxlLWNhcmR7XG4gIC5tYXQtY2FyZC1oZWFkZXJ7XG4gICAgLmhlYWRlci10aXRsZXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICB9XG4gIC5pdGVtc3tcbiAgICAgIC5pbWctcm93e1xuICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSIsIi5uZy1zbGlkZSAuc2xpZGVyLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlbGVjdGVkcHJvZHVjdCAuZXhhbXBsZS1jYXJkIC5tYXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjcyYjtcbiAgY29sb3I6ICNmZmY7XG59XG4uaW1nLXJvdyB7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuLmltZy1yb3cgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3BhY2l0eTogMC43O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uaW1nLXJvdyBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnNlbGVjdGVkcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6ICMyMGExY2U7XG59XG4uc2VsZWN0ZWRwcm9kdWN0IC5leGFtcGxlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWxlY3RlZHByb2R1Y3QgLm1hdC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWxlY3RlZHByb2R1Y3QgLm1hdC1jYXJkIGgzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMGE4ZmY7XG59XG4uc2VsZWN0ZWRwcm9kdWN0IC5tYXQtY2FyZCBwIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNlbGVjdGVkcHJvZHVjdCAubWF0LWNhcmQgYnV0dG9uIHtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDcwNzA3O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnNlbGVjdGVkcHJvZHVjdCAuY2FyZGltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW1zIC5pbWctcm93IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaXRlbXMgLmV4YW1wbGUtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLml0ZW1zIC5leGFtcGxlLWNhcmQubWF0LWNhcmQgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaXRlbXMgLmV4YW1wbGUtY2FyZC5tYXQtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDZweCAjZGZmMmY5O1xufVxuLm5nLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMWNlO1xufVxuLm5nLXNsaWRlIC5zbGlkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5uZy1zbGlkZSAuc2xpZGVyLWltYWdlIHtcbiAgcGFkZGluZzogMDtcbn1cbm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxubWF0LWNhcmQtY29udGVudC5tYXQtY2FyZC1jb250ZW50IC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxubWF0LWNhcmQtY29udGVudC5tYXQtY2FyZC1jb250ZW50IC5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzAwYThmZjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5tYXQtY2FyZC1jb250ZW50Lm1hdC1jYXJkLWNvbnRlbnQgLnByb2R1Y3QtY2FyZC1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxubWF0LWNhcmQtY29udGVudC5tYXQtY2FyZC1jb250ZW50IGltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgdmlzaWJpbGl0eSAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuLmNhcmRpbWFnZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZGltYWdlIGltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG4uY2FyZGltYWdlOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5nLXNsaWRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLm5nLXNsaWRlIC5zbGlkZXItdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLm5nLXNsaWRlIC5zbGlkZXItaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLnNlbGVjdGVkcHJvZHVjdCAuZXhhbXBsZS1jYXJkIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uZXhhbXBsZS1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0ZW1zIC5pbWctcm93Om50aC1jaGlsZChldmVuKSBtYXQtY2FyZC1jb250ZW50IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(config, data, modalService) {
        this.data = data;
        this.modalService = modalService;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = true;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.item = this.data.item;
        this.color = this.data.caseDetails.color;
    };
    HomeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HomeComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"  @myInsertRemoveTrigger>\n  <div class=\"col-md-12\">\n    <h1 class=\"text-center text-primary font-weight-bold\">Career at MFK Software </h1>\n    <h4 class=\"text-primary heading-2\"><span>We Believe in</span> </h4>\n    <div  @myInsertRemoveTrigger class=\"col-12 col-md-6\">\n      <ul>\n        <li>Passion</li>\n        <li>Enthusiasm </li>\n        <li>Honesty</li>\n        <li>Loyalty </li>\n        <li>Trust </li>\n      </ul>\n    </div>\n    <h4 class=\"text-primary heading-2\"><span>Open Positions</span> </h4>\n    <div class=\"open-positions\">\n      <mat-accordion class=\"example-headers-align\"  @myInsertRemoveTrigger>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h5> XYZ Specialist </h5>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div>\n              <p>Reports To: The [job title] will report to [positions title or titles this position reports to].\n                  Job Overview: Provide a brief, 4-sentence description of the role, what success in the position looks like, and\n                  how it fits into the company or organization overall.\n                  Responsibilities and Duties:</p>\n                <div class=\"col-12 col-md-6\">\n                  <ul>\n                    <li>List the essential duties required to carry out this job.</li>\n                    <li>List them in order of importance.</li>\n                    <li>Use complete sentences.</li>\n                    <li>Start sentences with verbs.</li>\n                    <li>Use the present tense.</li>\n                    <li>Use gender-neutral language.</li>\n                  </ul>\n                </div>\n                <h4 class=\"text-primary\"><span> Qualifications:</span></h4>\n                <div class=\"col-12 col-md-6\">\n                  <ul>\n                    <li>Education level.</li>\n                    <li>Experience.</li>\n                    <li>Specific skills.</li>\n                    <li>Personal characteristics.</li>\n                    <li>Certifications.</li>\n                    <li>Licenses.</li>\n                    <li>Physical abilities.</li>\n                  </ul>\n                </div>\n          </div>\n          <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n        </mat-expansion-panel>\n      \n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h5> ABC Specialist </h5>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div>\n              <p>Reports To: The [job title] will report to [positions title or titles this position reports to].\n                  Job Overview: Provide a brief, 4-sentence description of the role, what success in the position looks like, and\n                  how it fits into the company or organization overall.\n                  Responsibilities and Duties:</p>\n                <div class=\"col-12 col-md-6\">\n                  <ul>\n                    <li>List the essential duties required to carry out this job.</li>\n                    <li>List them in order of importance.</li>\n                    <li>Use complete sentences.</li>\n                    <li>Start sentences with verbs.</li>\n                    <li>Use the present tense.</li>\n                    <li>Use gender-neutral language.</li>\n                  </ul>\n                </div>\n                <h4 class=\"text-primary\"><span> Qualifications:</span></h4>\n                <div class=\"col-12 col-md-6\">\n                  <ul>\n                    <li>Education level.</li>\n                    <li>Experience.</li>\n                    <li>Specific skills.</li>\n                    <li>Personal characteristics.</li>\n                    <li>Certifications.</li>\n                    <li>Licenses.</li>\n                    <li>Physical abilities.</li>\n                  </ul>\n                </div>\n          </div>\n          <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"prevStep()\">Prev</button>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n          \n        </mat-expansion-panel>\n      \n    </mat-accordion>\n    </div>\n    <!-- <p class=\"font-weight-bold carrier-mailto\">Email:career@mfksoftware.com</p> -->\n    <div class=\"col-12 carrire-apply\">\n      <button class=\"btn btn-md\"> Apply </button>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pets/pets.component.less":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-row {\n  margin: 25px 0;\n}\n.img-row img {\n  max-height: 250px;\n  width: 100%;\n  height: 100%;\n}\n.rounded {\n  border-radius: 2.25rem !important;\n}\nul {\n  margin: 20px 0;\n  list-style: none;\n  color: #007bff;\n  font-size: 20px;\n  padding: 0;\n}\nul li {\n  border-radius: 2px;\n  padding: 7px 10px;\n  margin-bottom: 8px;\n  transition: visibility 0.25s ease-in, -webkit-transform 0.25s;\n  transition: transform 0.25s, visibility 0.25s ease-in;\n  transition: transform 0.25s, visibility 0.25s ease-in, -webkit-transform 0.25s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\nul li:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  font-weight: 400;\n}\n.carrire-apply {\n  display: flex;\n  justify-content: center;\n}\n.carrire-apply button {\n  width: 30vw;\n  padding: 6px 17px;\n  margin: 5px;\n  background: #000;\n  color: #fff;\n  font-size: 20px;\n}\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\nmat-form-field {\n  margin-right: 12px;\n}\n.open-positions h5 {\n  margin: 0;\n}\n.open-positions p {\n  font-size: 20px;\n  line-height: 30px;\n  text-align: justify;\n}\n.carrier-mailto {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9EOi9iYWNrdXAvYW5ndWxhcl9wcm9qZWN0L0ZNSy9wcm9qZWN0L3NyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wZXRzL3BldHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURGQTtFQUlJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBREdBO0VBQ0UsaUNBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDRkY7QURIQTtFQVVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQUEscURBQUE7RUFBQSw4RUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNKSjtBRE1JO0VBRUUsZUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ0xOO0FEVUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNSRjtBRE1BO0VBS0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNSSjtBRFdBOztFQUVFLGFBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtBQ1hGO0FEY0U7RUFFSSxTQUFBO0FDYk47QURXRTtFQUtJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYk47QURnQkU7RUFDRSxnQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yb3cge1xuICBtYXJnaW46IDI1cHggMDtcblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIuMjVyZW0gIWltcG9ydGFudDtcbn1cblxudWwge1xuICBtYXJnaW46IDIwcHggMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICAjMDA3YmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG5cbiAgbGkge1xuICAgLy8gYmFja2dyb3VuZDogIzAwYThmZjtcbiAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDAsIDEyMywgMjU0KSwgI2IxMjVhZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cywgdmlzaWJpbGl0eSAuMjVzIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0YWQ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG59XG5cbi5jYXJyaXJlLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBwYWRkaW5nOiA2cHggMTdweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4gIC5vcGVuLXBvc2l0aW9uc3tcbiAgICBoNXtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gIH1cbiAgLmNhcnJpZXItbWFpbHRve1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH0iLCIuaW1nLXJvdyB7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuLmltZy1yb3cgaW1nIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIuMjVyZW0gIWltcG9ydGFudDtcbn1cbnVsIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG51bCBsaSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59XG51bCBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jYXJyaXJlLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FycmlyZS1hcHBseSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgcGFkZGluZzogNnB4IDE3cHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm9wZW4tcG9zaXRpb25zIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxuLm9wZW4tcG9zaXRpb25zIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNhcnJpZXItbWFpbHRvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var PetsComponent = /** @class */ (function () {
    function PetsComponent(pet) {
        this.pet = pet;
        this.step = 0;
    }
    PetsComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    PetsComponent.prototype.nextStep = function () {
        this.step++;
    };
    PetsComponent.prototype.prevStep = function () {
        this.step--;
    };
    PetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pet.getPets().subscribe(function (pet) { return _this.pets$ = pet; });
    };
    PetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./pets.component.less */ "./src/app/pets/pets.component.less")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PetsComponent);
    return PetsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"online-demo\"  @myInsertRemoveTrigger>\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"description col-12\">\n        <p>\n            MFK Software ERP System is the most user friendly ERP application that can help you in taking care of your student data, teacher data, academic data, employee data, payroll, registration, admission, books, fees, mark sheet, report, library, attendance, notification, etc. at one place in the most easiest & safest way. It’s a multipurpose platform built with latest technologies that can handle school/colleges to universities management in an efficient way. \n        </p>\n         \n\n          <h4 class=\"text-primary heading-2\"><span> Some high performance modules include</span> </h4>\n          <div class=\"col-xs-12 col-md-6\">\n            <ul>\n            <li> Student Manager</li>\n            <li>Employee Manager </li>\n            <li>Fee Manager</li>\n            <li>Exam Manager </li>\n            <li>Library Manager</li>\n            <li>Salary Manager </li>\n            <li>Holiday Manager </li>\n            </ul>\n          \n          </div>\n          <p>\n              And many more features you will get to know when you explore. \n          </p>\n      </div>\n        <div class=\"col-12\">\n            <img class=\"rounded\"  src=\"assets/demo.png\">\n        </div>\n        <!-- <div class=\"col-xs-12 col-md-6 mt-3 mb-3\">\n            <app-raectiveform></app-raectiveform>\n         </div> -->\n         \n    </div>\n       \n      \n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.less":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online-demo img {\n  width: 100%;\n}\n.online-demo .description {\n  margin: 0 0 25px 0;\n}\n.online-demo .description p {\n  font-size: 20px;\n  text-align: justify;\n}\n.online-demo .description ul {\n  margin: 20px 0;\n  padding: 10px;\n  list-style: none;\n  color: #fff;\n  font-size: 20px;\n  padding: 0;\n}\n.online-demo .description ul li {\n  background: #00a8ff;\n  border-radius: 2px;\n  padding: 7px 25px;\n  margin-bottom: 8px;\n  transition: visibility 0.25s ease-in, -webkit-transform 0.25s;\n  transition: transform 0.25s, visibility 0.25s ease-in;\n  transition: transform 0.25s, visibility 0.25s ease-in, -webkit-transform 0.25s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.online-demo .description ul li:hover {\n  background-color: #f14ad4;\n  cursor: pointer;\n  -webkit-transform: scale(1.04);\n          transform: scale(1.04);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvRDovYmFja3VwL2FuZ3VsYXJfcHJvamVjdC9GTUsvcHJvamVjdC9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFdBQUE7QUNBUjtBREZBO0VBS1Esa0JBQUE7QUNBUjtBRExBO0VBT1ksZUFBQTtFQUNBLG1CQUFBO0FDQ1o7QURUQTtFQVdZLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDWjtBRGpCQTtFQWtCZ0IsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUFBLHFEQUFBO0VBQUEsOEVBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDQ2hCO0FEQW9CO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0V0QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm9ubGluZS1kZW1ve1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBhOGZmO1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigwLCAxMjMsIDI1NCksICNiMTI1YWQpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMsIHZpc2liaWxpdHkgLjI1cyBlYXNlLWluO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTRhZDQ7O1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59IiwiLm9ubGluZS1kZW1vIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9ubGluZS1kZW1vIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi5vbmxpbmUtZGVtbyAuZGVzY3JpcHRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5vbmxpbmUtZGVtbyAuZGVzY3JpcHRpb24gdWwge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cbi5vbmxpbmUtZGVtbyAuZGVzY3JpcHRpb24gdWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjMDBhOGZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDdweCAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgdmlzaWJpbGl0eSAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuLm9ubGluZS1kZW1vIC5kZXNjcmlwdGlvbiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTRhZDQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var PostsComponent = /** @class */ (function () {
    function PostsComponent(data) {
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPosts().subscribe(function (data) { return _this.posts$ = data; });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./posts.component.less */ "./src/app/posts/posts.component.less")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/raectiveform/raectiveform.component.html":
/*!**********************************************************!*\
  !*** ./src/app/raectiveform/raectiveform.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<div class=\"\">\r\n  <div class=\"container\">  \r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Full Name</mat-label>\r\n                  <input matInput type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" placeholder=\"First Name\">\r\n                  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n                  <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                    </div>\r\n              </mat-form-field>\r\n              \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input matInput  type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\">\r\n                  <mat-icon matSuffix>email</mat-icon>\r\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                  </div>\r\n              </mat-form-field>\r\n            </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Institute Name</mat-label>\r\n                  <input matInput  type=\"text\" formControlName=\"instituteName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.instituteName.errors }\" placeholder=\"Institute Name\">\r\n                  <mat-icon matSuffix>business</mat-icon>\r\n                  <div *ngIf=\"submitted && f.instituteName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.instituteName.errors.required\">Institute Name is required</div>\r\n                    </div>\r\n              </mat-form-field>\r\n            </div>\r\n          <div class=\"form-group\">\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Student Strength</mat-label>\r\n                <input matInput  type=\"text\" formControlName=\"studentStength\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.studentStength.errors }\" placeholder=\"Student Strength\">\r\n                <mat-icon matSuffix>group</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address</mat-label>\r\n                  <input matInput  type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" placeholder=\"Address\">\r\n                  <mat-icon matSuffix>perm_contact_calendar</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Contact Number</mat-label>\r\n                  <input matInput  type=\"text\" formControlName=\"ContactNumber\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ContactNumber.errors }\" placeholder=\"Contact Number\">\r\n                  <mat-icon matSuffix>contacts</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Preffered Contact Time</mat-label>\r\n                  <input matInput  type=\"text\" formControlName=\"PreffredContactTime\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.PreffredContactTime.errors }\" placeholder=\"Preffered Contact Time\">\r\n                  <mat-icon matSuffix>schedule</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Query</mat-label>\r\n                  <textarea matInput formControlName=\"query\" class=\"form-control\" placeholder=\"Query\"></textarea>\r\n                  <mat-icon matSuffix>question_answer</mat-icon>\r\n              </mat-form-field>\r\n          </div>    \r\n          <!-- <div class=\"form-group\">\r\n            <input type=\"file\" formControlName=\"uploadfile\" class=\"form-control\"  id=\"uploadfile\" name=\"file\" (change)=\"upload($event)\"/>\r\n          </div> -->\r\n          <div class=\"form-group button-group\">\r\n            <button  class=\"btn btn-primary\">submit</button>\r\n          </div>\r\n          \r\n        </form>\r\n        \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/raectiveform/raectiveform.component.less":
/*!**********************************************************!*\
  !*** ./src/app/raectiveform/raectiveform.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-group {\n  max-width: 200px;\n  width: 100%;\n  margin: 0 auto;\n}\n.button-group button {\n  width: 100%;\n}\n.form-group .form-control:focus {\n  box-shadow: none;\n}\n.form-group mat-form-field {\n  display: block;\n}\nmat-form-field {\n  background: #fff;\n  height: 77px;\n  border-radius: 5px;\n}\nmat-form-field mat-form-field-flex {\n  background: #fff;\n}\nmat-form-field .mat-form-field-appearance-outline .mat-form-field-outline {\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFlY3RpdmVmb3JtL0Q6L2JhY2t1cC9hbmd1bGFyX3Byb2plY3QvRk1LL3Byb2plY3Qvc3JjL2FwcC9yYWVjdGl2ZWZvcm0vcmFlY3RpdmVmb3JtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yYWVjdGl2ZWZvcm0vcmFlY3RpdmVmb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGO0FESkE7RUFNSSxXQUFBO0FDQ0o7QURLSTtFQUNFLGdCQUFBO0FDSE47QURBQTtFQVFJLGNBQUE7QUNMSjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUNQSDtBRElBO0VBS0ksZ0JBQUE7QUNOSjtBRENBO0VBUUksZ0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3JhZWN0aXZlZm9ybS9yYWVjdGl2ZWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyb3VwIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgaGVpZ2h0OiA3N3B4O1xuICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXQtZm9ybS1maWVsZC1mbGV4e1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuIiwiLmJ1dHRvbi1ncm91cCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5idXR0b24tZ3JvdXAgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtLWdyb3VwIG1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNzdweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxubWF0LWZvcm0tZmllbGQgbWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/raectiveform/raectiveform.component.ts":
/*!********************************************************!*\
  !*** ./src/app/raectiveform/raectiveform.component.ts ***!
  \********************************************************/
/*! exports provided: RaectiveformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaectiveformComponent", function() { return RaectiveformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirmsnackbar_confirmsnackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirmsnackbar/confirmsnackbar.component */ "./src/app/confirmsnackbar/confirmsnackbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'https://utsahpaikraysteg.github.io/AngularFMK/posts';
var RaectiveformComponent = /** @class */ (function () {
    function RaectiveformComponent(formBuilder, config, modalService, modal, snackBar, http, data) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.modal = modal;
        this.snackBar = snackBar;
        this.http = http;
        this.data = data;
        this.submitted = false;
        this.model = {};
    }
    RaectiveformComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instituteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            studentStength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ContactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PreffredContactTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            query: ['', ''],
            uploadfile: ['', '']
            // password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    Object.defineProperty(RaectiveformComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RaectiveformComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            name: this.registerForm.value.firstName,
            email: this.registerForm.value.email,
            instituteName: this.registerForm.value.instituteName,
            studentStength: this.registerForm.value.studentStength,
            ContactNumber: this.registerForm.value.ContactNumber,
            address: this.registerForm.value.address,
            PreffredContactTime: this.registerForm.value.PreffredContactTime,
            query: this.registerForm.value.query,
            uploadfile: this.filepath
        };
        this.submitted = true;
        if (this.registerForm.valid) {
            var mail = "mailto:career@mfksoftware.com?subject=" + this.registerForm.value.address + "&body=" + " Name: " + this.registerForm.value.firstName + "Instutute Name: " + this.registerForm.value.instituteName + " studentStength: " + this.registerForm.value.studentStength + " ContactNumber : " + this.registerForm.value.ContactNumber;
            window.open(mail, '_blank', 'height=400,width=400,resizable=yes,scrollbars=yes,status=no,titlebar=no');
            this.data.sendMail("https://utsahpaikraysteg.github.io/AngularFMK/sendmail", user).subscribe(function (data) {
                _this.snackBar.openFromComponent(_confirmsnackbar_confirmsnackbar_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmsnackbarComponent"], {
                    duration: 1000,
                });
            }, function (err) {
                console.log(err);
            });
        }
        if (this.registerForm.invalid) {
            return;
        }
    };
    RaectiveformComponent.prototype.upload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.localUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        var files = event.target.files;
        var fData = new FormData;
        this.filepath = files[0].name;
        for (var i = 0; i < files.length; i++) {
            fData.append("file[]", files[i]);
        }
        var _data = {
            filename: 'Sample File',
            id: '0001'
        };
        fData.append("data", JSON.stringify(_data));
        this.data.uploadFile(fData).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleError(error); });
    };
    RaectiveformComponent.prototype.handleResponse = function (response) {
        console.log(response);
    };
    RaectiveformComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    RaectiveformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-raectiveform',
            template: __webpack_require__(/*! ./raectiveform.component.html */ "./src/app/raectiveform/raectiveform.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]],
            styles: [__webpack_require__(/*! ./raectiveform.component.less */ "./src/app/raectiveform/raectiveform.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], RaectiveformComponent);
    return RaectiveformComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/cropped-mfk_software_logo.png\" alt=\"logo\">\n      </a>\n  <a class=\"navbar-brand company-name\" href=\"#\"><span class=\"firstpart\">MFK</span><span class=\"secondpart\">Software</span> </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [class.activated]=\"currentUrl == '/home'\">\n        <a class=\"nav-link\" routerLink=\"home\" [class.activated]=\"currentUrl == '/home'\" [class.activated]=\"currentUrl == '/'\"> <span>Home</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"onlinedemo\" [class.activated]=\"currentUrl == '/onlinedemo'\"><span>ERP Demo</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"culturebooklet\" [class.activated]=\"currentUrl == '/culturebooklet'\"><span>Culter BookLet</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"carrier\"  [class.activated]=\"currentUrl == '/carrier'\"><span>Carrier</span></a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"dashboard\" [class.activated]=\"currentUrl == '/dashboard'\"><span>Blog</span></a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"contact\" [class.activated]=\"currentUrl == '/contact'\"><span>Contact</span></a>\n      </li>\n      \n    </ul>\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.less":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .navbar-collapse {\n  justify-content: flex-end;\n}\nnav.navbar-dark .navbar-brand {\n  color: #333;\n}\nnav img {\n  width: 50px;\n}\nnav .firstpart {\n  font-weight: 700;\n  font-size: 26px;\n  color: #00a8ff;\n}\nnav .secondpart {\n  font-size: 22px;\n  padding: 0px;\n  padding-left: 4px;\n  font-weight: 600;\n  color: #ef0fd1;\n}\nnav ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nnav ul li {\n  transition: visibility 0.2s ease-in, -webkit-transform 0.2s;\n  transition: transform 0.2s, visibility 0.2s ease-in;\n  transition: transform 0.2s, visibility 0.2s ease-in, -webkit-transform 0.2s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  font-size: 17px;\n  font-weight: 500;\n}\nnav ul li.nav-item:hover {\n  background-color: #f14ad4;\n  cursor: pointer;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\nnav ul li.nav-item:hover a {\n  color: #fff;\n}\nnav ul li.nav-item .nav-link {\n  padding: 18px;\n  color: #333;\n}\nnav ul li.nav-item .nav-link.activated {\n  color: #fff;\n}\nnav ul li .activated {\n  background-color: #00a8ff;\n}\n@media only screen and (max-width: 767px) {\n  ul li.nav-item:last-child {\n    border-bottom: 1px solid #080808;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOi9iYWNrdXAvYW5ndWxhcl9wcm9qZWN0L0ZNSy9wcm9qZWN0L3NyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSx5QkFBQTtBQ0RGO0FER0E7RUFFSSxXQUFBO0FDRko7QURMQTtFQVdFLFdBQUE7QUNIRjtBRFJBO0VBY0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hGO0FEYkE7RUFtQkUsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hGO0FEcEJBO0VBMEJJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNISjtBRHpCQTtFQStCTSwyREFBQTtFQUFBLG1EQUFBO0VBQUEsMkVBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSE47QURLVTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNIWjtBREFVO0VBS0ksV0FBQTtBQ0ZkO0FESlE7RUFXUSxhQUFBO0VBQ0EsV0FBQTtBQ0poQjtBREtnQjtFQUNFLFdBQUE7QUNIbEI7QUQ5Q0E7RUFzRFEseUJBQUE7QUNMUjtBRFVBO0VBQ0U7SUFDRSxnQ0FBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAvL2JhY2tncm91bmQtY29sb3I6ICMwYzBjMGM7XG4ubmF2YmFyLWNvbGxhcHNle1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuJi5uYXZiYXItZGFyayB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG59XG5pbWd7XG4gIHdpZHRoOiA1MHB4Oztcbn1cbi5maXJzdHBhcnR7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMwMGE4ZmZcbn1cbi5zZWNvbmRwYXJ0e1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZWYwZmQxO1xufVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgbGkgeyBcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMsIHZpc2liaWxpdHkgLjJzIGVhc2UtaW47XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgJi5uYXYtaXRlbXtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTRhZDQ7O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1saW5re1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgJi5hY3RpdmF0ZWR7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC5hY3RpdmF0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICB1bCBsaS5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDgsIDgsIDgpO1xuICB9XG59IiwibmF2IC5uYXZiYXItY29sbGFwc2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxubmF2Lm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogIzMzMztcbn1cbm5hdiBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbm5hdiAuZmlyc3RwYXJ0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogIzAwYThmZjtcbn1cbm5hdiAuc2Vjb25kcGFydCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlZjBmZDE7XG59XG5uYXYgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbm5hdiB1bCBsaSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCB2aXNpYmlsaXR5IDAuMnMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxubmF2IHVsIGxpLm5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNGFkNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxubmF2IHVsIGxpLm5hdi1pdGVtOmhvdmVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbm5hdiB1bCBsaS5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbn1cbm5hdiB1bCBsaS5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZhdGVkIHtcbiAgY29sb3I6ICNmZmY7XG59XG5uYXYgdWwgbGkgLmFjdGl2YXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE4ZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIHVsIGxpLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDgwODA4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.showFiller = false;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.less */ "./src/app/sidebar/sidebar.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-12\"  @myInsertRemoveTrigger>\n    <h1 class=\"text-center font-weight-bold culture-booklet-header\">About Culture Booklet</h1>\n    <div class=\"description\">\n       <p>\n          Culture Booklet is a platform that brings you astonishing stuff about various beautiful and diverse cultures from different corners of the world. Culture Booklet also allows people to share their unique culture by posting pictures or videos and in return it offers <strong class=\"font-weight-bold\">$0.4 USD</strong> per every <strong class=\"font-weight-bold\">1000</strong> views on the particular post. It is platform to explore, share, earn & educate people. In short it’s a place to learn & earn. \n       </p>\n        <h4 class=\"text-primary heading-2\"><span>Getting Started</span> </h4>\n        <p>\n            You are just few steps away from earning dollars $ $ $ !! \n            It is even simpler than it sounds. \n        </p>\n        <div class=\"col-12 col-md-8\">\n            <ul>\n                  <li>Free Sign up at Culture Booklet to begin with your first post. </li>\n                  <li>Click on the menu button then click on My Posts.</li>\n                  <li>Click on Add Blog on the left navigation menu and make your first post. </li>\n                  <li>After you are done with your post, it will be auto saved as a draft. </li>\n                  <li>The review team will then review your post and publish it within 24 hours.</li>\n                  <li>You will get paid based on Google Analytics view report based on the payment frequency you choose. </li>\n                  <li>You can see your views under blog dashboard after you login. </li>\n                    \n                <li>Stats on how many times your theme has been downloaded</li>\n                <li>User feedback in the forums</li>\n                <li>Ratings, to see what users think of your theme</li>\n            </ul>\n        </div>\n        <h4 class=\"text-primary  heading-2\"><span>Culture Booklet Publishing Guidelines</span> </h4>\n        <p>To ensure that Culture Booklet viewers are guaranteed an amazing experience, every post is reviewed by our review team before being published. Posts that don’t meet with the review guidelines will not be approved and published. Please go through the guidelines below before uploading your post.  \t</p>\n        <div class=\"col-12 col-md-8\">\n            <ul>\n                <li>Content must be related to culture, etiquette, people, language, region, city, state or country. </li>\n                <li>Original content, images or videos are highly recommended. </li>\n                <li>Inappropriate content, picture, video will not be published and the profile will be banned forever on attempting to post them. </li>\n                <li>Content encouraging violence, hatred, social difference will not be published. </li> \n            </ul>\n        </div>\n        <p>\n            The goal of the theme directory isn’t to host every theme in the world, it’s to host the best open source WordPress themes around. Themes hosted on WordPress.org pass on the same user freedoms as WordPress itself; this means that they are 100% GPL or compatible.\n            Culture Booklet Guidelines \n            To ensure that Culture Booklet viewers are guaranteed a good experience, every post on the site is reviewed by our review team. Please review the guidelines before uploading your theme.\n            Posts that don’t meet with the review guidelines will not be approved.\n            Your theme will be reviewed using the Theme Unit Test data. Before uploading your theme please review it with this sample export data.\n        </p>\n       \n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/users/users.component.less":
/*!********************************************!*\
  !*** ./src/app/users/users.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".culture-booklet-header {\n  color: #00a8ff;\n}\n.description {\n  margin: 0 0 25px 0;\n}\n.description p {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 33px;\n  text-align: justify;\n}\n.description ul {\n  margin: 20px 0;\n  list-style: none;\n  color: #fff;\n  font-size: 20px;\n  padding: 0;\n}\n.description ul li {\n  background: #00a8ff;\n  border-radius: 2px;\n  padding: 7px 10px;\n  margin-bottom: 8px;\n  transition: visibility 0.25s ease-in, -webkit-transform 0.25s;\n  transition: transform 0.25s, visibility 0.25s ease-in;\n  transition: transform 0.25s, visibility 0.25s ease-in, -webkit-transform 0.25s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.description ul li:hover {\n  background-color: #f14ad4;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvRDovYmFja3VwL2FuZ3VsYXJfcHJvamVjdC9GTUsvcHJvamVjdC9zcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7QUNDRjtBREZBO0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEUkE7RUFXSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBSjtBRGZBO0VBbUJLLG1CQUFBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtFQUFBLDhFQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ0ROO0FER007RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VsdHVyZS1ib29rbGV0LWhlYWRlcntcbiAgY29sb3I6ICMwMGE4ZmY7XG59XG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgMCAyNXB4IDA7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIHVsIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgbGkge1xuICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDAsIDEyMywgMjU0KSwgI2IxMjVhZCk7XG4gICAgIGJhY2tncm91bmQ6ICMwMGE4ZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzLCB2aXNpYmlsaXR5IC4yNXMgZWFzZS1pbjtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0YWQ0O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmN1bHR1cmUtYm9va2xldC1oZWFkZXIge1xuICBjb2xvcjogIzAwYThmZjtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5kZXNjcmlwdGlvbiB1bCB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmRlc2NyaXB0aW9uIHVsIGxpIHtcbiAgYmFja2dyb3VuZDogIzAwYThmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIHZpc2liaWxpdHkgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbn1cbi5kZXNjcmlwdGlvbiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTRhZDQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./users.component.less */ "./src/app/users/users.component.less")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\backup\angular_project\FMK\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map