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
var document_type_1 = require('../document-type');
var DocumentTypeItemComponent = (function () {
    function DocumentTypeItemComponent() {
    }
    DocumentTypeItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', document_type_1.DocumentType)
    ], DocumentTypeItemComponent.prototype, "documentType", void 0);
    DocumentTypeItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 't-document-type-item',
            templateUrl: 'document-type-item.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentTypeItemComponent);
    return DocumentTypeItemComponent;
}());
exports.DocumentTypeItemComponent = DocumentTypeItemComponent;
//# sourceMappingURL=document-type-item.component.js.map