import { Component } from "@angular/core";

import { DocumentTypeListComponent } from '../document-type/document-type-list/document-type-list.component';

@Component({
    moduleId: module.id,
    templateUrl: 'protected.component.html',
    directives:[DocumentTypeListComponent]
})
export class ProtectedComponent {
}