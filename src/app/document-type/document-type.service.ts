import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { DocumentType } from './document-type';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentTypeService {

  documentTypesChanged = new EventEmitter<DocumentType[]>();

  private documentTypes: DocumentType[] = [];

  constructor(private http: Http) { }

  getDocumentTypes() {
    return this.documentTypes;
  }

  fetchData() {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/villegas-tax-portal/rest/documentType', {
      headers: headers
    })
      .map((response: Response) => response.json())
      .subscribe(
      (data: DocumentType[]) => {
        console.log(data[0].description);
        this.documentTypes = data;
        this.documentTypesChanged.emit(this.documentTypes);
      }
      );
  }

}