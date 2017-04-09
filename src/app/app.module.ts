import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';
import {GetFilteredDataPipe} from "app/components/contacts-component/dataFilter";
@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactItemComponent,
    ContactSearchComponent,
    ContactDetailsComponent,
    ContactsComponentComponent,
    GetFilteredDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
