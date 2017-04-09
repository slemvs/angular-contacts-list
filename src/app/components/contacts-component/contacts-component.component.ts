import { Component, OnInit } from '@angular/core';
import { Contact } from "app/models/contact";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'cl-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.less']
})
export class ContactsComponentComponent implements OnInit {
  private data: Array<Contact> = [];
  private filteredData: Array<Contact> = [];
  private selectedContact: Contact;
  private searchText: string = '';
  constructor(private http:Http) { }

  ngOnInit() {
    this.loadData();
  }
  selectContact = function(contact: Contact){
    this.selectedContact = contact;
  }
  clearSelection = function(){
    this.selectContact = null;
  }
  loadData = function() {
    return this.http.get('data/data.json')
      .map((res) => res.json())
      .subscribe(json => {
        json.data.map(c => this.data.push(new Contact(c.name, c.lastname, c.phone)));
        this.filteredData = this.data;
        console.log(this.data);
      });
  }
  onSearchTextEntered = function(newSearchText){
    this.searchText = newSearchText;
  }
}
