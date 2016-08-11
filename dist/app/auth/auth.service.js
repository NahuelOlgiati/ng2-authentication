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
var http_1 = require("@angular/http");
var Observable_1 = require('rxjs/Observable');
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        // for change the navbar state between online and offline
        this.authenticate = new Subject_1.Subject();
        this.authenticateState$ = this.authenticate.asObservable();
    }
    AuthService.prototype.signupUser = function (user) {
        console.log('Entrando Serv signupUser');
        var body = 'email=' + user.email + '&password=' + user.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //headers.append('Authorization', 'Basic QmFzaWM6QmFzaWM=');
        return this.http.post('http://localhost:8080/villegas-tax-web/rest/user', body, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log('Falló signupUser Mapeo');
            console.log(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    AuthService.prototype.signinUser = function (user) {
        console.log('Entrando Serv signinUser');
        var body = 'email=' + user.email + '&password=' + user.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:8080/villegas-tax-web/rest/user', body, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log('Falló signinUser Mapeo');
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
        console.log('saveToken:' + token);
        localStorage.setItem('token', token);
        this.authenticate.next(true);
    };
    // return if the user is authenticate
    AuthService.prototype.isAuthenticated = function () {
        var isAuth;
        if (localStorage.getItem('token')) {
            isAuth = true;
        }
        else {
            isAuth = false;
        }
        console.log('Is Authenticated:' + isAuth);
        return isAuth;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map