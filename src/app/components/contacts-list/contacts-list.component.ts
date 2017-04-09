import { Component, OnInit, Output, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Contact } from 'app/models/Contact';
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'cl-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less']
})
export class ContactsListComponent implements OnInit {
  @Input() data: Array<Contact> = [];
  @Output() onContactSelected: EventEmitter<any> = new EventEmitter();
  
  private selectedContact: Contact;
  constructor() { }

  ngOnInit() {
    
  }
  onItemSelected(selectedContact: Contact){
    this.onContactSelected.emit(selectedContact);
    this.selectedContact = selectedContact;
  }
}