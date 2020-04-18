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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" style=\"text-align:center\">\r\n  <app-header></app-header>\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <div class=\"outlet\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

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
        this.title = 'employeeUI';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _router_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router.items */ "./src/app/router.items.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-add/employee-add.component */ "./src/app/employee-add/employee-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
                _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeListComponent"],
                _employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _router_items__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a routerLink=\"/employeeList\">\r\n    <span class=\"badge\">EmplyeeList</span> \r\n  </a>\r\n  <a routerLink=\"/addEmployee\">\r\n    <span class=\"badge\">AddEmployee</span> \r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
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

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/employee-add/employee-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employee-add/employee-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setInput {\r\n    margin: 1px;\r\n}\r\n\r\n.input-validation {\r\n  margin: 5px 3px;\r\n  padding: 0px !important;  \r\n}"

/***/ }),

/***/ "./src/app/employee-add/employee-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employee-add/employee-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p>Employee-Add Form <a routerLink=\"/\"> <span class=\"badge\">Home</span> </a></p>\r\n\r\n<form #editForm=\"ngForm\">\r\n\t<div class=\"form-group row\">\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"userId\">User ID</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"userId\"\r\n\t\t\t\t\trequired [(ngModel)]=\"model.userId\" name=\"userId\"\r\n\t\t\t\t\t#userId=\"ngModel\">\r\n\t\t\t\r\n\t\t\t<div [hidden]=\"!userId.errors?.required || !userId.touched || !userId.pristine\" \r\n\t\t\tclass=\"alert alert-danger input-validation\"> userId is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"jobTitleName\">JobTitle Name</label>\r\n\t\t\t<input class=\"form-control\" id=\"jobTitleName\" required\r\n\t\t\t[(ngModel)]=\"model.jobTitleName\"\r\n\t\t\t\tname=\"jobTitleName\" #jobTitleName=\"ngModel\">\r\n\r\n\r\n\t\t\t<div [hidden]=\"!jobTitleName.errors?.required || !jobTitleName.touched\" \r\n\t\t\tclass=\"alert alert-danger input-validation\"> jobTitleName is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"firstName\">First Name</label>\r\n\t\t\t<input class=\"form-control\" id=\"firstName\" type=\"text\" required\r\n\t\t\t[(ngModel)]=\"model.firstName\"\r\n\t\t\t\tname=\"firstName\" #firstName=\"ngModel\">\r\n\r\n\t\t\t<div [hidden]=\"!firstName.errors?.required || !firstName.touched\" \r\n\t\t\tclass=\"alert alert-danger input-validation\"> firstName is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"form-group row\">\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"lastName\">Last Name</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\"\r\n\t\t\t\t\trequired\r\n\t\t\t\t\t[(ngModel)]=\"model.lastName\" name=\"lastName\"\r\n\t\t\t\t\t#lastName=\"ngModel\">\r\n\r\n\t\t\t<div [hidden]=\"!lastName.errors?.required || !lastName.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> LastName is required\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"preferredFullName\">Preferred FullName </label>\r\n\t\t\t<input class=\"form-control\" id=\"preferredFullName\" type=\"text\" \r\n\t\t\trequired\r\n\t\t\t[(ngModel)]=\"model.preferredFullName\"\r\n\t\t\t\tname=\"preferredFullName\" #preferredFullName=\"ngModel\">\r\n\r\n\t\t\t<div [hidden]=\"!preferredFullName.errors?.required || !preferredFullName.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> Preferred FullName is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"employeeCode\">Employee Code</label>\r\n\t\t\t<input class=\"form-control\" id=\"employeeCode\" required \r\n\t\t\t[(ngModel)]=\"model.employeeCode\"\r\n\t\t\ttype=\"text\" name=\"employeeCode\" [disabled]=\"isEdit\" #employeeCode=\"ngModel\">\r\n\r\n\t\t\t<div [hidden]=\"!employeeCode.errors?.required || !employeeCode.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> Employee Code is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"form-group row\">\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"userId\">Region</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"region\"\r\n\t\t\t\t\trequired\r\n\t\t\t\t\t[(ngModel)]=\"model.region\" name=\"region\"\r\n\t\t\t\t\t#region=\"ngModel\">\r\n\t\t\t\t\r\n\t\t\t<div [hidden]=\"!region.errors?.required || !region.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> Region is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"phoneNumber\">Phone Number</label>\r\n\t\t\t<input class=\"form-control\" id=\"phoneNumber\" type=\"text\" required\r\n\t\t\t\t[(ngModel)]=\"model.phoneNumber\" name=\"phoneNumber\"\r\n\t\t\t\t#phoneNumber=\"ngModel\">\r\n\t\t\t\r\n\t\t\t<div [hidden]=\"!phoneNumber.errors?.required || !phoneNumber.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> Phone Number is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-3 setInput\">\r\n\t\t\t<label for=\"emailAddress\">Email Address</label>\r\n\t\t\t<input class=\"form-control\" id=\"emailAddress\" type=\"text\" required\r\n\t\t\t\t[(ngModel)]=\"model.emailAddress\" name=\"emailAddress\"\r\n\t\t\t#emailAddress=\"ngModel\">\r\n\t\t\t<div [hidden]=\"!emailAddress.errors?.required || !emailAddress.touched\" \r\n\t\t\t\tclass=\"alert alert-danger input-validation\"> Email Address is required\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<button style=\"margin:0 20px;\" type=\"submit\" class=\"btn btn-success\" \r\n\t\t\t[disabled]=\"!editForm.form.valid\" (click)=\"addORUpdate(editForm)\">\r\n\t\t\t\r\n\t\t\t{{buttonText}}\r\n\t</button>\r\n\t\r\n\t<button type=\"button\" class=\"btn btn-default\" (click)=\"cancel(editForm)\">\r\n\t\tCancel\r\n\t</button>\r\n\r\n\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/employee-add/employee-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employee-add/employee-add.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function() { return EmployeeAddComponent; });
/* harmony import */ var _services_employee_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/employee-rest.service */ "./src/app/services/employee-rest.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interface_employeeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interface/employeeItem */ "./src/app/interface/employeeItem.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(router, activatedRoute, empS) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.empS = empS;
        this.isEdit = false;
        this.buttonText = "Add Employee";
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUrl = this.router.url;
        console.log(currentUrl);
        if (currentUrl === '/addEmployee') {
            // this.isEdit = false;
            // this.buttonText = "Add Employee";
            this.model = {};
        }
        else {
            this.routeP = this.activatedRoute.params.subscribe(function (params) {
                console.log(params);
                console.log(JSON.stringify(params));
                _this.empCode = params.id;
                _this.subscription = _this.empS.getEmployee(_this.empCode).subscribe(function (data) {
                    console.log(data, "get Employee::::");
                    var emp = data[0];
                    var employee = new _interface_employeeItem__WEBPACK_IMPORTED_MODULE_2__["employeeItem"](emp.userId, emp.jobTitleName, emp.firstName, emp.lastName, emp.preferredFullName, emp.employeeCode, emp.region, emp.phoneNumber, emp.emailAddress);
                    _this.model = employee;
                    _this.isEdit = true;
                    _this.buttonText = "Update";
                });
            });
        }
    };
    EmployeeAddComponent.prototype.addORUpdate = function (editForm) {
        var _this = this;
        console.log(editForm.controls);
        var formAttr = [];
        var emp = new _interface_employeeItem__WEBPACK_IMPORTED_MODULE_2__["employeeItem"](editForm.controls.userId.value, editForm.controls.jobTitleName.value, editForm.controls.firstName.value, editForm.controls.lastName.value, editForm.controls.preferredFullName.value, editForm.controls.employeeCode.value, editForm.controls.region.value, editForm.controls.phoneNumber.value, editForm.controls.emailAddress.value);
        // 			console.log(emp, ">>>>>")
        // let normalEmp = {  userId: editForm.controls.userId.value,
        // 	jobTitleName:   editForm.controls.jobTitleName.value,
        // 	  firstName: editForm.controls.firstName.value,
        //    lastName:    editForm.controls.lastName.value,
        //    preferredFullName:    editForm.controls.preferredFullName.value,
        // 	employeeCode:   editForm.controls.employeeCode.value,
        // 	 region:  editForm.controls.region.value,
        // 	phoneNumber:   editForm.controls.phoneNumber.value,
        // 	emailAddress:   editForm.controls.emailAddress.value};
        if (this.isEdit) {
            this.updatesubscription = this.empS.updateEmployee(this.empCode, emp).subscribe(function (data) {
                _this.router.navigate(["/employeeList"]);
            });
        }
        else {
            this.subscription = this.empS.addEmployee(emp).subscribe(function (data) {
                _this.router.navigate(["/employeeList"]);
            });
        }
    };
    EmployeeAddComponent.prototype.cancel = function (editForm) {
        editForm.reset();
        if (this.isEdit)
            this.router.navigate(["/employeeList"]);
        else
            this.router.navigate(["/"]);
    };
    EmployeeAddComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
        //this.routeP.unsubscribe();
    };
    EmployeeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-add',
            template: __webpack_require__(/*! ./employee-add.component.html */ "./src/app/employee-add/employee-add.component.html"),
            styles: [__webpack_require__(/*! ./employee-add.component.css */ "./src/app/employee-add/employee-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_employee_rest_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeRestService"]])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redClass {\r\n    color: red;\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-small\">\r\n  employee-list works! \r\n  <a routerLink=\"/\">\r\n    <span class=\"badge\">Home</span> \r\n  </a>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>userId</th>\r\n        <th>jobTitleName</th>\r\n        <th>firstName</th>\r\n        <th>lastName</th>\r\n        <th>preferredFullName</th>\r\n        <th>employeeCode</th>\r\n        <th>region</th>\r\n        <th>phoneNumber</th>\r\n        <th>emailAddress</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of employeeList\">\r\n        <td>{{item.userId}}</td>\r\n        <td>{{item.jobTitleName}}</td>\r\n        <td>{{item.firstName}}</td>\r\n        <td>{{item.lastName}}</td>\r\n        <td>{{item.preferredFullName}}</td>\r\n        <td>{{item.employeeCode}}</td>\r\n        <td>{{item.region}}</td>\r\n        <td>{{item.phoneNumber}}</td>\r\n        <td>{{item.emailAddress}}</td>\r\n        <td> <a routerLink=\"/employee/{{item.employeeCode}}\">\r\n          <span class=\"badge\">Edit</span> \r\n        </a> <a style=\"cursor: pointer;\" (click)=\"deleteEmployee(item.employeeCode)\">\r\n          <span class=\"badge redClass\">Delete</span> \r\n        </a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _services_employee_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/employee-rest.service */ "./src/app/services/employee-rest.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(empS) {
        this.empS = empS;
        this.employeeList = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeList = [];
        this.emListSubscibe = this.empS.getEmployeeList().subscribe(function (data) {
            _this.employeeList = data;
        });
    };
    EmployeeListComponent.prototype.deleteEmployee = function (empCode) {
        var _this = this;
        this.emDeletetSubscibe = this.empS.deleteEmployeeDetails(empCode).subscribe(function (data) {
            _this.employeeList = _this.employeeList.filter(function (item) { return item.employeeCode !== empCode; });
        });
    };
    EmployeeListComponent.prototype.ngOnDestroy = function () {
        //this.emListSubscibe.unsubscribe();
        //this.emDeletetSubscibe.unsubscribe();
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_rest_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeRestService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">A Basic Footer</div>\r\n</div>"

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
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">A Basic Header</div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interface/employeeItem.ts":
/*!*******************************************!*\
  !*** ./src/app/interface/employeeItem.ts ***!
  \*******************************************/
/*! exports provided: employeeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeItem", function() { return employeeItem; });
var employeeItem = /** @class */ (function () {
    //constructor() {}
    function employeeItem(userId, jobTitleName, firstName, lastName, preferredFullName, employeeCode, region, phoneNumber, emailAddress) {
        this.userId = userId;
        this.jobTitleName = jobTitleName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferredFullName = preferredFullName;
        this.employeeCode = employeeCode;
        this.region = region;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
    return employeeItem;
}());



/***/ }),

/***/ "./src/app/router.items.ts":
/*!*********************************!*\
  !*** ./src/app/router.items.ts ***!
  \*********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-add/employee-add.component */ "./src/app/employee-add/employee-add.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//
//import { BodyComponent } from './app.BodyComponent';
var routes = [
    { path: '', component: _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"] },
    { path: 'employeeList', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_0__["EmployeeListComponent"] },
    { path: 'employee/:id', component: _employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeAddComponent"] },
    //{ path: 'employeeDelete/:id', component: EmployeeDeleteComponent },
    { path: 'addEmployee', component: _employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeAddComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/employee-rest.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/employee-rest.service.ts ***!
  \***************************************************/
/*! exports provided: EmployeeRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRestService", function() { return EmployeeRestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeRestService = /** @class */ (function () {
    function EmployeeRestService(http) {
        this.http = http;
        // const endpoint = 'http://localhost:3000/api/v1/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    EmployeeRestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    EmployeeRestService.prototype.getEmployeeList = function () {
        return this.http.get('employeesList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    EmployeeRestService.prototype.getEmployee = function (id) {
        return this.http.get('employee/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    EmployeeRestService.prototype.addEmployee = function (employee) {
        console.log(employee);
        return this.http.post('employee', JSON.stringify(employee), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (product) { return console.log("added employee w/ id=" + employee.employeeCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addEmployee')));
    };
    EmployeeRestService.prototype.updateEmployee = function (id, employee) {
        return this.http.put('employee/' + id, JSON.stringify(employee), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated employee id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateEmployee')));
    };
    EmployeeRestService.prototype.deleteEmployeeDetails = function (id) {
        return this.http.delete('employee/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted employee id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteEmployee')));
    };
    EmployeeRestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EmployeeRestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeRestService);
    return EmployeeRestService;
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

module.exports = __webpack_require__(/*! K:\gitHubProjects\employeeUI\employeeUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map