import { Component, OnInit } from '@angular/core';
import { DocumentType } from '../document-type';
import { DocumentTypeService } from '../document-type.service';
import { DocumentTypeItemComponent } from '../document-type-item/document-type-item.component';
import { CustomHttpService } from '../../core/custom-http/custom-http.service';

@Component({
  moduleId: module.id,
  selector: 't-document-type-list',
  templateUrl: 'document-type-list.component.html',
  directives: [DocumentTypeItemComponent],
  providers: [DocumentTypeService]
})
export class DocumentTypeListComponent implements OnInit {

  documentTypes: DocumentType[] = [];
  error: any;

  text: string;
  results: DocumentType[];

  constructor(private documentTypeService: DocumentTypeService, private customHttpService: CustomHttpService) {
    this.customHttpService.onError(err => {
      this.error = err;
      console.log("onError: " + err);
    });
  }

  ngOnInit() {
    this.documentTypeService.fetchData();
    this.documentTypes = this.documentTypeService.getDocumentTypes();
    this.documentTypeService.documentTypesChanged.subscribe(
      (documentTypes: DocumentType[]) => this.documentTypes = documentTypes
    );
  }

  search(event) {
        console.log("Begin Search...");
        this.results = this.documentTypeService.getDocumentTypes();
        console.log("End Search...");
    }

}