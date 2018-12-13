import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  notebookItem:string;
  dataItem:string;

  constructor() {
    this.notebookItem="nav-item active";
    this.dataItem="nav-item";
   }

  onClickNotebook()
  {
    this.notebookItem="nav-item active";
    this.dataItem="nav-item";
  }

  onClickData()
  {
    this.notebookItem="nav-item";
    this.dataItem="nav-item active";
  }

  ngOnInit() {
  }

}
