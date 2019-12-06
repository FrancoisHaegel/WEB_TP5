import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {

  constructor() { }

  @Output() changeFilter: EventEmitter<string> = new EventEmitter<string>(); 
  @Output() changeType: EventEmitter<string> = new EventEmitter<string>();
  inputFilter : string = "";
  type : string = "";

  ngOnInit() {
  }

  notifyParent()
  {
    this.changeType.emit(this.type);
    this.changeFilter.emit(this.inputFilter);
  }
}