import { Component, OnInit, Input } from '@angular/core';
import {Contact} from 'app/models/Contact';

@Component({
  selector: 'cl-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {
  }

  isInfoAvailable = () => { return this.contact !== undefined && this.contact!== null}

}
