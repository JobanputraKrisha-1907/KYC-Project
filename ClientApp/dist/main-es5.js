function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div >\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFetchDataFetchDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<html lang=\"en\">\r\n<head>\r\n    <title>Start Your Investment journey with Fundsbazar</title>\r\n<!--<link href=\"../../assets/css/FundBazarLogin.css\" rel=\"stylesheet\" />-->\r\n    <link rel=\"icon\" type=\"image/svg\" href=\"../../../../wwwroot/fundzbazarlogo.svg\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n    <div class=\"header container\">\r\n        <div>\r\n            <img id=\"img1\" src=\"/Fundbazar_Logo.PNG\" alt=\"FundzBazar\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"section_login\">\r\n        <div class=\"grid sec_login\">\r\n            <div class=\"SignUp_section text-center\">\r\n                <p class=\"SignUp_heading\">Sign Up</p>\r\n                <p class=\"SignIn_heading_content\">\r\n                    Start Your Investment journey with Fundsbazar.<br />\r\n                    Sign Up & Join the Family of\r\n                </p>\r\n                <h2 class=\"Investor_num\">\r\n                    <span class=\"color-orange\">1495700</span><br />\r\n                    <span class=\"color-orange weightOrnage\">Happy Investors</span>\r\n                </h2>\r\n                <button class=\"join_Btn\" [routerLink]=\"['/registration']\">JOIN NOW</button>\r\n                <p class=\"join_Btn_content\">\r\n                    A single Investment Account For <br />Mutual Fund, Stock Broking, Fixed Deposit,<br />\r\n                    NPS, Bond & More...\r\n                </p>\r\n            </div>\r\n            <div class=\"SingIn_section text-center\">\r\n                <h3 class=\"SignIn_heading\">Sign In</h3>\r\n                <div class=\"form\">\r\n                    <form #frmLogin=\"ngForm\">\r\n                        <input class=\"txtBox\" type=\"text\" id=\"text\" placeholder=\"Email Id\" name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"UserEmail\" required />\r\n                        <!--<div *ngIf=\"show\" id=\"toast-container\" class=\"toast-center-center toast-container\">\r\n                            <div class=\"ng-tns-c42-9 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error\" toast-component style=\"opacity: 1;\">\r\n                                <div *ngIf=\"(frmLogin.submitted && UserName.errors?.required && UserName.touched)\">\r\n                                    {{buttonName}}\r\n                                </div>\r\n                            </div>\r\n                        </div>-->\r\n                        <input class=\"txtBox\" type=\"password\" id=\"password\" placeholder=\"Password\" name=\"UserPwd\" #UserPwd=\"ngModel\" [(ngModel)]=\"UserPassword\" required />\r\n                        <!--<div *ngIf=\"show\" id=\"toast-container\" class=\"toast-center-center toast-container\">\r\n                            <div class=\"ng-tns-c42-9 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error\" toast-component style=\"opacity: 1;\">\r\n                                <div *ngIf=\"(frmLogin.submitted && UserPwd.errors?.required && UserPwd.touched)\">\r\n                                    {{buttonName}}\r\n                                </div>\r\n                            </div>\r\n                        </div>-->\r\n                        <div class=\"SingIn_Links\">\r\n                            <a class=\"forgot_pass_link\">\r\n                                Forgot Password ?\r\n                            </a>\r\n                            <a class=\"otp_link\">\r\n                                Login with OTP\r\n                            </a>\r\n                        </div>\r\n                        <button class=\"SignIn_Btn\" (click)=\"[toggle(),LoginBtn(frmLogin)]\">Login</button>\r\n                        <!--<div *ngIf=\"show\" id=\"toast-container\" class=\"toast-center-center toast-container\">\r\n                            <div class=\"ng-tns-c42-9 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error\" toast-component style=\"opacity: 1;\">\r\n                                {{buttonName}}\r\n                            </div>\r\n                        </div>-->\r\n                    </form>\r\n                    <div class=\"SignIn_cerficate_links\">\r\n                        <a href=\"#\" class=\"img_links\">\r\n                            <img src=\"/getseal.gif\" alt=\"Verified Logo\">\r\n                        </a>\r\n                        <a href=\"#\" class=\"about_links\">ABOUT SSL CERTIFICATES</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"copyright\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2\">\r\n                <div class=\"footer_logo\">\r\n                    <img src=\"/prudent.png\" style=\"width:165px;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8\">\r\n                <div class=\"copyright_text\">\r\n                    <div class=\"copyright_content\">\r\n                        <p class=\"p\">\r\n                            *Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.\r\n                        </p>\r\n                        <p class=\"p\">\r\n                            Prudent Corporate Advisory Services Ltd. (ARN-9992) makes no warranties or representations, express or implied, on products offered through FundzBazar.com. It\r\n                            accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions\r\n                            of the website are applicable. Copyright � 2016 Prudent Corporate Advisory Services Ltd.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n                <div class=\"footer_image\">\r\n                    <span>\r\n                        <small>Designed &amp; Developed by</small>\r\n                    </span>\r\n                    <img src=\"/pruit3.png\" class=\"footer_prulogo\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/registration.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/registration.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n<style>\r\n\r\n\r\n    input[type=number]::-webkit-outer-spin-button,\r\n    input[type=number]::-webkit-inner-spin-button {\r\n        -webkit-appearance: none;\r\n    }\r\n\r\n    #li {\r\n        line-height: 2.8px;\r\n    }\r\n\r\n    ul li:hover {\r\n        color: orangered;\r\n        text-decoration: underline;\r\n    }\r\n\r\n    ul button:hover {\r\n        background-color: white;\r\n        color: black;\r\n    }\r\n\r\n    .p1 {\r\n        text-align: center;\r\n        color: gray;\r\n    }\r\n\r\n    .p2 {\r\n        text-align: center;\r\n        font-size: 10px;\r\n        color: gray;\r\n    }\r\n\r\n    .container {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding-bottom: 20px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n        .container img {\r\n            height: 56px;\r\n            width: 260px;\r\n        }\r\n\r\n        .container div ul {\r\n            display: flex;\r\n            gap: 15px;\r\n            list-style-type: none;\r\n            line-height: 1.8;\r\n        }\r\n\r\n    .footer_prulogo img {\r\n        width: 150px;\r\n    }\r\n\r\n    .footer_logo img {\r\n        width: 150px;\r\n    }\r\n\r\n    .main .active li {\r\n        display: inline-block;\r\n    }\r\n\r\n    .main .active div {\r\n        border: 1px lightgrey solid;\r\n        margin-top: 60px;\r\n        margin-left: 25px;\r\n        padding-top: 5px;\r\n        width: 80px;\r\n        border-radius: 50px;\r\n        background-color: lightgray;\r\n    }\r\n\r\n    .main {\r\n        width: 100%;\r\n        height: auto;\r\n        background-color: #EBEEF4;\r\n        padding-top: 25px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n        .main ul {\r\n            list-style-type: none;\r\n            overflow: hidden;\r\n            margin-left: 220px;\r\n        }\r\n\r\n            .main ul .active {\r\n                display: inline-block;\r\n            }\r\n\r\n    .card-body h5 {\r\n        margin-right: 750px;\r\n    }\r\n\r\n    .card-body span {\r\n        color: #f2891f;\r\n    }\r\n\r\n    .tname {\r\n        margin-left: 50px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n        .tname h6 {\r\n            float: left;\r\n        }\r\n\r\n        .tname input {\r\n            width: 955px;\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n    .temail {\r\n        margin-left: 50px;\r\n    }\r\n\r\n        .temail p {\r\n            color: lightgray;\r\n            font-size: 12px;\r\n        }\r\n\r\n    .td1 {\r\n        float: left;\r\n        margin-left: 50px;\r\n        border: 1px lightgray solid;\r\n    }\r\n\r\n        .td1 button {\r\n            width: 90px;\r\n            height: 39px;\r\n            border: none;\r\n        }\r\n\r\n        .td1 input {\r\n            border: none;\r\n            background-color: #f4f6f7;\r\n            width: 100px;\r\n            height: 38px;\r\n        }\r\n\r\n        .td1 a {\r\n            margin-left: 16px;\r\n            color: #f7b68f;\r\n        }\r\n\r\n        .td1 .cnfbtn {\r\n            width: 110px;\r\n            background-color: #f7b68f;\r\n            color: white;\r\n            height: 39px;\r\n            border: none;\r\n            margin-left: 16px;\r\n        }\r\n\r\n    .passwd {\r\n        margin-left: 50px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n        .passwd .tr1 {\r\n        }\r\n\r\n    .verifyuser {\r\n        display: flex;\r\n        width: 450px;\r\n        align-items: center;\r\n        border: 1px lightgray solid;\r\n        height: 40px\r\n    }\r\n\r\n    .verify-btn {\r\n        width: 95px;\r\n        border: none;\r\n        height: 38px\r\n    }\r\n\r\n    .otp-input {\r\n        border: none;\r\n        background-color: #f4f6f7;\r\n        width: 110px;\r\n        height: 38px\r\n    }\r\n\r\n    .resend-btn {\r\n        color: #f7b68f;\r\n        padding: 5px 13px;\r\n        height: 38px;\r\n        border: none;\r\n        background-color: #fff;\r\n        text-decoration: none\r\n    }\r\n\r\n    .resend-span {\r\n        border-bottom: 1px dashed #f7b68f;\r\n        padding-bottom: 3px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .confirm-btn {\r\n        width: 125px;\r\n        background-color: #f7b68f;\r\n        color: white;\r\n        border: none;\r\n        height: 38px\r\n    }\r\n\r\n    .for-mrg-right {\r\n        margin-right: 55px;\r\n        margin-left: 50px;\r\n    }\r\n\r\n    .form-control {\r\n        border-radius: 2px;\r\n    }\r\n\r\n    .text-danger {\r\n        text-align: left;\r\n    }\r\n\r\n    .tdpos {\r\n        padding-left: 50px;\r\n        padding-right: 50px;\r\n    }\r\n\r\n    .tdpos2 {\r\n        padding-right: 50px;\r\n    }\r\n</style>\r\n<body>\r\n\r\n    <div class=\"container\">\r\n        <div>\r\n            <img src=\"/Fundbazar_Logo.PNG\" alt=\"FundzBazar\" />\r\n        </div>\r\n        <div>\r\n            <ul style=\"\">\r\n                <li>Home</li>\r\n                <li>About Us</li>\r\n                <li>Products</li>\r\n                <li>Explorer</li>\r\n                <li><button class=\"btn btn-primary\" style=\"border-radius:20px;\" [routerLink]=\"['/']\">Login</button></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"main\">\r\n        <div class=\"card text-center shadow rounded-10\" style=\" width: 1125px; margin: auto; border-radius: 10px;\">\r\n            <ul style=\"\">\r\n                <li class=\"active\">\r\n                    <a href=\"\">\r\n                        <div style=\"margin-left:250px\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a href=\"\">\r\n                        <div></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a href=\"\">\r\n                        <div></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a href=\"\">\r\n                        <div></div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"card-body\">\r\n                <h5><span style=\"\">Individual -</span> Registration </h5>\r\n                <br />\r\n                <form #frmRegister=\"ngForm\">\r\n                    <table class=\"tname\">\r\n                        <tr>\r\n                            <td>\r\n                                <h6>Name</h6>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n\r\n                            <td>\r\n                                <input [(ngModel)]=\"name\" #txtname=\"ngModel\" type=\"text\" name=\"txtname\" placeholder=\"Name\" class=\"form-control\" [pattern]=\"NamePattern\" required [disabled]=\"disableName\" />\r\n                                <div *ngIf=\"(frmRegister.submitted && txtname.errors?.required)||(txtname.errors?.required && txtname.touched)\" class=\"text-danger\">Name is required</div>\r\n                                <div *ngIf=\"txtname.errors?.pattern\" class=\"text-danger\">\r\n                                    Enter Valid  Name\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    <table class=\"temail\">\r\n                        <tr>\r\n                            <td>\r\n                                <h6 style=\"float:left\">Email</h6>\r\n                            </td>\r\n                            <td>\r\n                                <h6 style=\"margin-left:-335px\">Mobile Number</h6>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tdpos2\">\r\n                                <input [(ngModel)]=\"email\" #txtemail=\"ngModel\" type=\"text\" name=\"txtemail\" placeholder=\"Enter your Email\" style=\"width: 450px;\" class=\"form-control\" [pattern]=\"EmailPattern\" required [disabled]=\"disableEmail\" />\r\n                                <div *ngIf=\"(frmRegister.submitted && txtemail.errors?.required)||(txtemail.errors?.required && txtemail.touched)\" class=\"text-danger\">Email is required</div>\r\n                                <div *ngIf=\"txtemail.errors?.pattern\" class=\"text-danger\">\r\n                                    Enter Valid Email\r\n                                </div>\r\n                                <p style=\"margin-left:-90px;\">*Verify authenticity of your mail by entering OTP sent on your Email</p>\r\n                            </td>\r\n                            <td>\r\n                                <input [(ngModel)]=\"mobile\" #txtmobile=\"ngModel\" type=\"number\" name=\"txtmobile\" placeholder=\"Enter your Mobile no\" style=\"width: 450px;\" class=\"form-control\" [pattern]=\"MobilePattern\" onkeypress=\"if (this.value.length == 10) return false;\" required [disabled]=\"!disbox\" />\r\n                                <div *ngIf=\"(frmRegister.submitted && txtmobile.errors?.required)||(txtmobile.errors?.required && txtmobile.touched)\" class=\"text-danger\">Mobile No is required</div>\r\n                                <div *ngIf=\"txtmobile.errors?.pattern\" class=\"text-danger\">\r\n                                    Enter Valid Mobile No.\r\n                                </div>\r\n                                <p style=\"margin-left:-20px;\">*Verify authenticity of your Mobile No by entering OTP sent on your Mobile No</p>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </table>\r\n                    <table>\r\n                        <tr>\r\n                            <td class=\"tdpos\">\r\n                                <div class=\"verifyuser\">\r\n                                    <button [(ngModel)]=\"editEmail\" #verifyEmail=\"ngModel\" name=\"verifyEmail\" class=\"verify-btn\" (click)=\"toShowField()\" [hidden]=\"showEmail\">Edit</button>\r\n                                    <button [(ngModel)]=\"btnemail\" #btnverify=\"ngModel\" name=\"btnverify\" class=\"verify-btn\" (click)=\"toEnable()\" [hidden]=\"hideEmail\">Verify</button>\r\n                                    <input [(ngModel)]=\"emailotp\" #txtemailotp=\"ngModel\" name=\"txtemailotp\" type=\"number\" placeholder=\"Enter OTP\" class=\"otp-input\" required onkeypress=\"if (this.value.length == 6) return false;\" [maxlength]=\"6\" [disabled]=\"!disabledbox\" />\r\n                                    <button class=\"resend-btn\" [disabled]=\"!disabledbox\">\r\n                                        <span class=\"resend-span\">\r\n                                            <i style=\"font-size:16px\" class=\"fa\">&#xf021;</i>\r\n                                            Resend OTP\r\n                                        </span>\r\n                                    </button>\r\n                                    <button class=\"confirm-btn\" [disabled]=\"!disabledbox\" (click)=\"toEnablemobile()\">Confirm</button>\r\n                                </div>\r\n                                <!--<div *ngIf=\"(frmRegister.submitted && txtemailotp.errors?.required)||(txtemailotp.errors?.required && txtemailotp.touched)\" class=\"text-danger\">OTP is required</div>\r\n                                <div *ngIf=\" txtemailotp.errors?.pattern\" class=\"text-danger\">\r\n                                    Enter Valid OTP\r\n                                </div>-->\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"verifyuser\">\r\n                                    <button [(ngModel)]=\"editMobile\" #verifyMobile=\"ngModel\" name=\"verifyMobile\" class=\"verify-btn\" (click)=\"toShowFieldMobile()\" [hidden]=\"showMobile\">Edit</button>\r\n                                    <button class=\"verify-btn\" [disabled]=\"!disboxverify\" (click)=\"toEnablemobverifier()\" [hidden]=\"hideMobile\">Verify</button>\r\n                                    <input [(ngModel)]=\"mobileotp\" #txtmobileotp=\"ngModel\" name=\"txtmobileotp\" type=\"number\" placeholder=\"Enter OTP\" class=\"otp-input\" required [disabled]=\"!dismobotpcntrl\" onkeypress=\"if (this.value.length == 6) return false;\" />\r\n                                    <button class=\"resend-btn\" [disabled]=\"!dismobotpcntrl\">\r\n                                        <span class=\"resend-span\">\r\n                                            <i style=\"font-size:16px\" class=\"fa\">&#xf021;</i>\r\n                                            Resend OTP\r\n                                        </span>\r\n                                    </button>\r\n                                    <button class=\"confirm-btn\" [disabled]=\"!dismobotpcntrl\" (click)=\"toEnablepassinput()\">Confirm</button>\r\n                                </div>\r\n                                <!--<div *ngIf=\"(frmRegister.submitted && txtmobileotp.errors?.required)||(txtmobileotp.errors?.required && txtmobileotp.touched)\" class=\"text-danger\">OTP is required</div>\r\n                                <div *ngIf=\" txtmobileotp.errors?.pattern\" class=\"text-danger\">\r\n                                    Enter Valid OTP\r\n                                </div>-->\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    <table class=\"passwd\" style=\"\">\r\n                        <tr class=\"tr1\">\r\n                            <td>\r\n                                <h6 style=\"float:left\">Create Password</h6>\r\n                            </td>\r\n                            <td>\r\n                                <h6 style=\"margin-left:-270px\">Confirm Password </h6>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <input [(ngModel)]=\"pass\" #txtpass=\"ngModel\" type=\"password\" name=\"txtpass\" placeholder=\"Enter password \" style=\"width: 450px;\" class=\"form-control\" pattern=\"(^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$)\" [disabled]=\"!dispassinput\" required/>\r\n                                <div *ngIf=\"(frmRegister.submitted && txtpass.errors?.required)||(txtpass.errors?.required && txtpass.touched)\" class=\"text-danger\">Password is required</div>\r\n                                <div *ngIf=\"(txtpass.errors?.pattern)\" class=\"text-danger\">Enter Valid Password</div>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"password\" [(ngModel)]=\"confirmPassword\" #cnfpass=\"ngModel\" name=\"cnfpass\" placeholder=\"Confirm password\" style=\"width: 455px;margin-left:50px\" class=\"form-control\" [disabled]=\"!dispassinput\" required/>\r\n                                <div *ngIf=\"(frmRegister.submitted && cnfpass.errors?.required)||(cnfpass.errors?.required && cnfpass.touched)\" class=\"text-danger\">Confirm Password is required</div>\r\n                                <div *ngIf=\"cnfpass.dirty && pass !== confirmPassword\" class=\"text-danger\" style=\"margin-left:50px\">Password not match</div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    <button style=\"margin: 30px 0px; margin-left: 840px;height:40px; width: 100px;color:white; background-color: #8b9ec0;border:0;border-radius:4px\" (click)=\"submitdata(frmRegister)\" [disabled]=\"!disnext\">\r\n                        Next <i style=\"font-size:15px; color:white;\" class='fa fa-arrow-right'></i>\r\n                    </button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\" style=\"margin-top:10px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2\">\r\n                <div class=\"footer_logo\">\r\n                    <img src=\"/prudent.png\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-8\">\r\n                <div classs=\"copyright_text\">\r\n                    <div>\r\n                        <p class=\"p1\">\r\n                            <small>*Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.</small>\r\n                        </p>\r\n                        <p class=\"p2\">\r\n\r\n                            Prudent Corporate Advisory Services Ltd. (ARN-9992) makes no warranties or representations, express or implied, on products offered through FundzBazar.com. It\r\n                            accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions\r\n                            of the website are applicable. Copyright © 2016 Prudent Corporate Advisory Services Ltd.\r\n\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n                <div class=\"footer_prulogo\">\r\n                    <img src=\"/pruit3.png\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">ProjectPages</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n          <ul class=\"navbar-nav flex-grow\">\r\n              <li class=\"nav-item\"\r\n                  [routerLinkActive]=\"['link-active']\"\r\n                  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/registration']\">Login</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/test']\">test</a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n-->";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    });

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
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
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./counter/counter.component */
    "./src/app/counter/counter.component.ts");
    /* harmony import */


    var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fetch-data/fetch-data.component */
    "./src/app/fetch-data/fetch-data.component.ts");
    /* harmony import */


    var _home_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/registration.component */
    "./src/app/home/registration.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"], _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"], _home_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'counter',
        component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"]
      }, {
        path: 'fetch-data',
        component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"]
      }, {
        path: 'registration',
        component: _home_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/counter/counter.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/counter/counter.component.ts ***!
    \**********************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.currentCount = 0;
      }

      _createClass(CounterComponent, [{
        key: "incrementCounter",
        value: function incrementCounter() {
          this.currentCount++;
        }
      }]);

      return CounterComponent;
    }();

    CounterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-counter-component',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html"))["default"]
    })], CounterComponent);
    /***/
  },

  /***/
  "./src/app/fetch-data/fetch-data.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/fetch-data/fetch-data.component.ts ***!
    \****************************************************/

  /*! exports provided: FetchDataComponent */

  /***/
  function srcAppFetchDataFetchDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function () {
      return FetchDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FetchDataComponent = /*#__PURE__*/_createClass(function FetchDataComponent(http, baseUrl) {
      var _this = this;

      _classCallCheck(this, FetchDataComponent);

      http.get(baseUrl + 'weatherforecast').subscribe(function (result) {
        _this.forecasts = result;
      }, function (error) {
        return console.error(error);
      });
    });

    FetchDataComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    FetchDataComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fetch-data',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fetch-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html"))["default"]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])], FetchDataComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http, tost) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.tost = tost;
        this.show = false;
      } // This For Validation Functionality


      _createClass(HomeComponent, [{
        key: "toggle",
        value: function toggle() {
          if (this.UserEmail == null || this.UserEmail == '') {
            this.buttonName = "Please enter email";
            this.tost.error(this.buttonName, "title", {
              positionClass: 'toast-top-center',
              timeOut: 3000
            });
            /* this.show = !this.show;*/
          } else if (this.UserPassword == null || this.UserPassword == '') {
            this.buttonName = "Please enter password";
            /* this.show = !this.show;*/
          }
        }
      }, {
        key: "onTextMouseEnter",
        value: function onTextMouseEnter() {
          this.show = true;
        }
      }, {
        key: "onTextMouseLeave",
        value: function onTextMouseLeave() {
          window.setTimeout(function () {
            this.show = false;
          }.bind(this), 3000);
        } //This For Login Functionality 

      }, {
        key: "LoginBtn",
        value: function LoginBtn(frmLogin) {
          var _this2 = this;

          this.frmLogin.submitted = true;

          if (frmLogin.valid) {
            var param = {
              "UserName": this.UserEmail,
              "UserPassword": this.UserPassword
            };
            this.http.post("Home/LoginData", {
              "JsonData": JSON.stringify(param)
            }).pipe().subscribe(function (data) {
              data = JSON.parse(data.data);

              if (data[0].MSG == "1") {
                alert("Login Successfully");
              } else {
                _this2.show = !_this2.show;
                _this2.buttonName = "Invalid email or password";
              }
            }, function (error) {});
          } else {
            return false;
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmLogin', {
      "static": true
    }), __metadata("design:type", Object)], HomeComponent.prototype, "frmLogin", void 0);

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ../../assets/css/FundBazarLogin.css */
      "./src/assets/css/FundBazarLogin.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/registration.component.ts":
  /*!************************************************!*\
    !*** ./src/app/home/registration.component.ts ***!
    \************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppHomeRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(http, _baseUrl) {
        _classCallCheck(this, RegistrationComponent);

        this.http = http;
        this.disabledbox = false;
        this.dismobotpcntrl = false;
        this.disbox = false;
        this.dispassinput = false;
        this.disnext = false;
        this.disableName = false;
        this.disableEmail = false;
        this.disboxverify = false;
        this.submitted = false;
        this.showEmail = true;
        this.hideEmail = false;
        this.showMobile = true;
        this.hideMobile = false;
        this.testurl = _baseUrl;
      }

      _createClass(RegistrationComponent, [{
        key: "toEnable",
        value: function toEnable(frmRegister) {
          var _this3 = this;

          this.frmRegister.submitted = true;

          if (this.frmRegister.valid) {
            var param = {
              "cemail": this.email
            };
            this.http.post("Registration/checkEmail", {
              "JsonData": JSON.stringify(param)
            }).pipe().subscribe(function (data) {
              data = JSON.parse(data.data);

              if (data[0].MSG == "1") {
                alert("Email already Exist...!!");
              } else {
                _this3.showEmail = !_this3.showEmail;
                _this3.hideEmail = !_this3.hideEmail;
                _this3.disableName = !_this3.disableName;
                _this3.disableEmail = !_this3.disableEmail;
                _this3.disabledbox = !_this3.disabledbox;
                alert("OTP Send Successfully...!!");
              }
            }, function (error) {});
          } else {
            return false;
          }
        }
      }, {
        key: "toShowField",
        value: function toShowField() {
          this.disableName = !this.disableName;
          this.disableEmail = !this.disableEmail;
          this.showEmail = !this.showEmail;
          this.hideEmail = !this.hideEmail;
          this.disabledbox = !this.disabledbox;
        }
      }, {
        key: "toEnablemobile",
        value: function toEnablemobile() {
          var otpMlen = String(this.emailotp);

          if (otpMlen.length == 6) {
            if (this.emailotp == null || this.emailotp == '') {
              this.disbox = this.disbox;
            } else {
              this.disbox = !this.disbox;
              this.disboxverify = !this.disboxverify;
            }
          }
        }
      }, {
        key: "toEnablemobverifier",
        value: function toEnablemobverifier(frmRegister) {
          var _this4 = this;

          this.frmRegister.submitted = true;

          if (this.frmRegister.valid) {
            var param = {
              "cmobile": this.mobile
            };
            this.http.post("Registration/checkMobile", {
              "JsonData": JSON.stringify(param)
            }).pipe().subscribe(function (data) {
              data = JSON.parse(data.data);

              if (data[0].MSG == "1") {
                alert("Mobile Number already Exist...!!");
              } else {
                _this4.showMobile = !_this4.showMobile;
                _this4.hideMobile = !_this4.hideMobile;
                _this4.disbox = !_this4.disbox;
                _this4.dismobotpcntrl = !_this4.dismobotpcntrl;
                alert("OTP Send Successfully...!!");
              }
            }, function (error) {});
          } else {
            return false;
          }
        }
      }, {
        key: "toShowFieldMobile",
        value: function toShowFieldMobile() {
          this.showMobile = !this.showMobile;
          this.hideMobile = !this.hideMobile;
          this.disbox = !this.disbox;
          this.dismobotpcntrl = !this.dismobotpcntrl;
        }
      }, {
        key: "toEnablepassinput",
        value: function toEnablepassinput() {
          var otpElen = String(this.mobileotp);

          if (otpElen.length == 6) {
            if (this.mobileotp == null || this.mobileotp == '') {
              this.dispassinput = this.dispassinput;
            } else {
              this.dispassinput = !this.dispassinput;
              this.disnext = !this.disnext;
            }
          }
        }
      }, {
        key: "EnableNext",
        value: function EnableNext() {
          if (this.pass == this.confirmPassword) {
            this.disnext = this.disnext;
          } else {
            this.disnext = !this.disnext;
          }
        }
      }, {
        key: "submitdata",
        value: function submitdata(frmRegister) {
          var _this5 = this;

          this.frmRegister.submitted = true;

          if (this.pass !== this.confirmPassword) {
            this.frmRegister.form.setErrors({
              invalid: true
            });
          }

          if (this.frmRegister.valid) {
            var param = {
              "cname": this.name,
              "cemail": this.email,
              "cmobile": this.mobile,
              "cpass": this.pass
            };
            this.http.post("Registration/submitData", {
              "JsonData": JSON.stringify(param)
            }).pipe().subscribe(function (data) {
              data = JSON.parse(data.data);
              _this5.sdata = data;
              alert("Data Submitted Successfully...!!");
              frmRegister.resetForm();
              window.location.reload(); //this.disableName = !this.disableName;
              //this.disableEmail = !this.disableEmail;
              //this.hideEmail = !this.hideEmail;
              //this.showEmail = !this.showEmail;
              //this.showMobile = !this.showMobile;
              //this.hideMobile = !this.hideMobile;
              //this.dispassinput = !this.dispassinput;
              //this.disnext = !this.disnext;
            }, function (error) {});
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.NamePattern = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NamePattern;
          this.MobilePattern = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MobilePattern;
          this.EmailPattern = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].EmailPattern;
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmRegister', {
      "static": true
    }), __metadata("design:type", Object)], RegistrationComponent.prototype, "frmRegister", void 0);

    RegistrationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/registration.component.html"))["default"]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], String])], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css"))["default"]]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/assets/css/FundBazarLogin.css":
  /*!*******************************************!*\
    !*** ./src/assets/css/FundBazarLogin.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsCssFundBazarLoginCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    font-family: \"Poppins\",sans-serif;\r\n}\r\nbody {\r\n}\r\n.header {\r\n    margin: 25px 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 25px;\r\n}\r\n#img1 {\r\n    height: 62px;\r\n    width: 285px;\r\n}\r\n.copyright {\r\n    padding: 20px 0;\r\n    margin: 0px 130px;\r\n}\r\n.footer_image {\r\n    width: 165px;\r\n    text-align: center;\r\n}\r\n.footer_image span {\r\n        font-size: 12px;\r\n        color: gray;\r\n    }\r\n.footer_image img {\r\n        width: 90px;\r\n        height: 45px;\r\n    }\r\n.footer_prulogo {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.p {\r\n    text-align: center;\r\n    color: gray;\r\n    font-size: 9.5px;\r\n    text-indent: 15px;\r\n}\r\n.section_login {\r\n    background-image: url('/login_new_bg_2.83a8c2b9eca713728cb3.jpg');\r\n    background-position: 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 680px;\r\n    position: relative;\r\n}\r\n.grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\nh2.Investor_num {\r\n    font-size: 25px !important;\r\n    font-weight: 300;\r\n    line-height: 0.9;\r\n}\r\n.color-orange {\r\n    font-weight: 700;\r\n    color: #ee6c1f;\r\n    font-size: 45px;\r\n}\r\n.color-orange.weightOrnage {\r\n        font-weight: 400;\r\n    }\r\n.join_Btn {\r\n    background-color: #163c81;\r\n    margin-top: 25px;\r\n    width: 170px;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n}\r\n.join_Btn_content {\r\n    color: #333;\r\n    font-size: 19px;\r\n    margin-top: 40px;\r\n}\r\n.SignUp_heading {\r\n    color: #163c81;\r\n    font-size: 27px;\r\n    font-weight: 600;\r\n}\r\n.SignIn_heading_content {\r\n    color: #333;\r\n    font-size: 19px;\r\n    margin-bottom: 0;\r\n}\r\n.sec_login {\r\n    margin: 35px 110px;\r\n    position: absolute;\r\n    width: 1280px;\r\n    height: 610px;\r\n}\r\n.SignUp_section {\r\n    padding-top: 50px;\r\n    background: #f1f1f1;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n.text-center {\r\n    text-align: center !important;\r\n}\r\n.SingIn_section {\r\n    padding-top: 50px;\r\n    background: white;\r\n    border-top-right-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n.SignIn_heading {\r\n    color: #ee6c1f;\r\n    margin-bottom: 25px;\r\n}\r\n.txtBox {\r\n    height: 45px !important;\r\n    line-height: 45px !important;\r\n    border: 1px solid #ddd;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    transition: all .3s ease;\r\n    width: 330px;\r\n    padding: .7rem !important;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    outline: none;\r\n    margin-bottom: 1rem;\r\n}\r\n.toast-container * {\r\n    box-sizing: border-box;\r\n}\r\n.toast-container {\r\n    pointer-events: none;\r\n    position: fixed;\r\n    z-index: 999999;\r\n\r\n}\r\n.toast-center-center {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate( -50%, -50%);\r\n}\r\n.toast-container .ngx-toastr {\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin: 0 0 6px;\r\n    padding: 15px 15px 15px 50px;\r\n    width: 300px;\r\n    border-radius: 3px;\r\n    background-position: 15px;\r\n    background-repeat: no-repeat;\r\n    background-size: 25px;\r\n    box-shadow: 0 0 12px #999;\r\n    color: #fff;\r\n}\r\n.ngx-toastr {\r\n    background-color: #030303;\r\n    pointer-events: auto;\r\n}\r\n.toast-error {\r\n    background-color: #bd362f;\r\n    background-image: url(/assets/img/times-circle-svgrepo-com.svg);\r\n}\r\n.toast-container .ngx-toastr:hover {\r\n    box-shadow: 0 0 12px #000;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n.SingIn_Links {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 330px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n.forgot_pass_link {\r\n    color: #163c81;\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    color: #ff7a29;\r\n}\r\n.otp_link {\r\n    color: #ff7a29;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n}\r\n.SignIn_Btn {\r\n    background-color: #ff7a29;\r\n    background: #ee6c1f;\r\n    color: #fff;\r\n    width: 170px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding: 10px;\r\n    margin-top: 30px !important;\r\n}\r\n.SignIn_Btn:hover {\r\n        opacity: 0.7;\r\n    }\r\n.SignIn_cerficate_links {\r\n    margin-top: 40px;\r\n}\r\n.img_links {\r\n    display: block;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n.about_links {\r\n    color: #000;\r\n    text-decoration: none;\r\n    font: 700 8px verdana,sans-serif;\r\n    letter-spacing: .5px;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL0Z1bmRCYXphckxvZ2luLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0FBQ0E7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFSTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7QUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBRUo7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpRUFBaUU7SUFDakUsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUVKO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZUFBZTs7QUFFbkI7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0RBQStEO0FBQ25FO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBRUk7UUFDSSxZQUFZO0lBQ2hCO0FBRUo7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL0Z1bmRCYXphckxvZ2luLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keSB7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAyNXB4IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbiNpbWcxIHtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHdpZHRoOiAyODVweDtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtYXJnaW46IDBweCAxMzBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9pbWFnZSB7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAuZm9vdGVyX2ltYWdlIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyX2ltYWdlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxuLmZvb3Rlcl9wcnVsb2dvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDkuNXB4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uX2xvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2xvZ2luX25ld19iZ18yLjgzYThjMmI5ZWNhNzEzNzI4Y2IzLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjgwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbmgyLkludmVzdG9yX251bSB7XHJcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMC45O1xyXG59XHJcblxyXG4uY29sb3Itb3JhbmdlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2VlNmMxZjtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG5cclxuICAgIC5jb2xvci1vcmFuZ2Uud2VpZ2h0T3JuYWdlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuLmpvaW5fQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjNjODE7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5qb2luX0J0bl9jb250ZW50IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLlNpZ25VcF9oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMTYzYzgxO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLlNpZ25Jbl9oZWFkaW5nX2NvbnRlbnQge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2VjX2xvZ2luIHtcclxuICAgIG1hcmdpbjogMzVweCAxMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDYxMHB4O1xyXG59XHJcblxyXG4uU2lnblVwX3NlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5TaW5nSW5fc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5TaWduSW5faGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2VlNmMxZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50eHRCb3gge1xyXG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50b2FzdC1jb250YWluZXIgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udG9hc3QtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG5cclxufVxyXG5cclxuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMCAwIDZweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5neC10b2FzdHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMzYyZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy90aW1lcy1jaXJjbGUtc3ZncmVwby1jb20uc3ZnKTtcclxufVxyXG5cclxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLlNpbmdJbl9MaW5rcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9yZ290X3Bhc3NfbGluayB7XHJcbiAgICBjb2xvcjogIzE2M2M4MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmN2EyOTtcclxufVxyXG5cclxuLm90cF9saW5rIHtcclxuICAgIGNvbG9yOiAjZmY3YTI5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLlNpZ25Jbl9CdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2EyOTtcclxuICAgIGJhY2tncm91bmQ6ICNlZTZjMWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gICAgLlNpZ25Jbl9CdG46aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuXHJcbi5TaWduSW5fY2VyZmljYXRlX2xpbmtzIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5pbWdfbGlua3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dF9saW5rcyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQ6IDcwMCA4cHggdmVyZGFuYSxzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */";
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
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      NamePattern: RegExp("[a-zA-Z]"),
      MobilePattern: new RegExp("[0-9]{10}$"),
      EmailPattern: new RegExp("^\\S+@\\S+\\.\\S+$")
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! C:\Users\trainee5\source\repos\ProjectPages\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map