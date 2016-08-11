"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./auth.service");
var SigninComponent = (function () {
    function SigninComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.error = false;
        this.errorMessage = '';
    }
    SigninComponent.prototype.onSignin = function () {
        var _this = this;
        this.authService.signinUser(this.myForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.authService.saveToken(res.token);
                _this.router.navigate(['/']);
            }
            else {
                _this.error = res.msg;
            }
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            template: "\n        <h3>Please sign up to use all features</h3>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSignin()\">\n            <div class=\"form-group\">\n                <label for=\"email\">E-Mail</label>\n                <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password</label>\n                <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Sign In</button>\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map