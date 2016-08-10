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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require("rxjs/Subject");
require('rxjs/Rx');
core_1.Injectable();
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // for change the navbar state between online and offline
        this.authenticate = new Subject_1.Subject();
        this.authenticateState$ = this.authenticate.asObservable();
    }
    AuthService.prototype.signup = function (email, password) {
        return this.http.post('/api/signup', {
            email: email,
            password: password
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw(error.json());
        });
    };
    AuthService.prototype.signin = function (email, password) {
        return this.http.post('/api/signin', {
            email: email,
            password: password
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw(error.json());
        });
    };
    // delete the token in localStorage and change the navbar state
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.authenticate.next(false);
    };
    // save the token in localStorage and change the navbar state
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
        this.authenticate.next(true);
    };
    // return if the user is authenticate
    AuthService.prototype.isAuthenticate = function () {
        var isAuth;
        if (localStorage.getItem('token')) {
            isAuth = true;
        }
        else {
            isAuth = false;
        }
        return isAuth;
    };
    AuthService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=myauth.component.js.map