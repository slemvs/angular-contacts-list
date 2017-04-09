import { Component, OnInit, Output } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'cl-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.less']
})

export class ContactSearchComponent implements OnInit {
  searchText: string;
  keypress$ = new Subject();
  @Output() onTextEntered : EventEmitter<any> = new EventEmitter();
  constructor() {
    this.keypress$.subscribe(() => {
      this.onTextEntered.emit(this.searchText);
    });
  }

  ngOnInit() {
  }

  onEnter = function (event) {
    console.log(event);
  }
}
