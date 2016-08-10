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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var DocumentTypeService = (function () {
    function DocumentTypeService(http) {
        this.http = http;
        this.documentTypesChanged = new core_1.EventEmitter();
        this.documentTypes = [];
    }
    DocumentTypeService.prototype.getDocumentTypes = function () {
        return this.documentTypes;
    };
    DocumentTypeService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('http://localhost:8080/villegas-tax-web/rest/documentType')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            console.log(data[0].description);
            _this.documentTypes = data;
            _this.documentTypesChanged.emit(_this.documentTypes);
        });
    };
    DocumentTypeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DocumentTypeService);
    return DocumentTypeService;
}());
exports.DocumentTypeService = DocumentTypeService;
//# sourceMappingURL=document-type.service.js.map