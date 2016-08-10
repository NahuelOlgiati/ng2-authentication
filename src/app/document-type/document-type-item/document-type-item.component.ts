import { Component, OnInit, Input } from '@angular/core';
import { DocumentType } from '../document-type';

@Component({
  moduleId: module.id,
  selector: 't-document-type-item',
  templateUrl: 'document-type-item.component.html'
})
export class DocumentTypeItemComponent implements OnInit {

  @Input() documentType: DocumentType;

  constructor() { }

  ngOnInit() {
  }

}