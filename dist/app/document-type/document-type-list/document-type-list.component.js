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
var document_type_service_1 = require('../document-type.service');
var document_type_item_component_1 = require('../document-type-item/document-type-item.component');
var DocumentTypeListComponent = (function () {
    function DocumentTypeListComponent(documentTypeService) {
        this.documentTypeService = documentTypeService;
        this.documentTypes = [];
    }
    DocumentTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentTypeService.fetchData();
        this.documentTypes = this.documentTypeService.getDocumentTypes();
        this.documentTypeService.documentTypesChanged.subscribe(function (documentTypes) { return _this.documentTypes = documentTypes; });
    };
    DocumentTypeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 't-document-type-list',
            templateUrl: 'document-type-list.component.html',
            directives: [document_type_item_component_1.DocumentTypeItemComponent],
            providers: [document_type_service_1.DocumentTypeService]
        }), 
        __metadata('design:paramtypes', [document_type_service_1.DocumentTypeService])
    ], DocumentTypeListComponent);
    return DocumentTypeListComponent;
}());
exports.DocumentTypeListComponent = DocumentTypeListComponent;
//# sourceMappingURL=document-type-list.component.js.map