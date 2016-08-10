import { Component, OnInit } from '@angular/core';
import { DocumentType } from '../document-type';
import { DocumentTypeService } from '../document-type.service';
import { DocumentTypeItemComponent } from '../document-type-item/document-type-item.component';

@Component({
  moduleId: module.id,
  selector: 't-document-type-list',
  templateUrl: 'document-type-list.component.html',
  directives: [DocumentTypeItemComponent],
  providers: [DocumentTypeService]
})
export class DocumentTypeListComponent implements OnInit {

  documentTypes: DocumentType[] = [];

  constructor(private documentTypeService: DocumentTypeService) { }

  ngOnInit() {
    this.documentTypeService.fetchData();
    this.documentTypes = this.documentTypeService.getDocumentTypes();
    this.documentTypeService.documentTypesChanged.subscribe(
      (documentTypes: DocumentType[]) => this.documentTypes = documentTypes
    );
  }

}