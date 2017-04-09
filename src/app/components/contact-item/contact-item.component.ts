import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact } from 'app/models/Contact';
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'cl-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.less']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() selectedContact: Contact;
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  private name: string;
  private lastname: string;

  ngOnInit() {
    if (this.contact) {
      this.name = this.contact.name;
      this.lastname = this.contact.lastname;
    }
  }
  onItemClicked = function () {
    if (this.isSelected()) {
      this.onItemSelected.emit(null);
    }
    else {
      this.onItemSelected.emit(this.contact);
    }
  }
  isSelected = function () {
    return this.selectedContact === this.contact;
  }
}
