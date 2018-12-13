import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit,OnChanges {

  url:string;
  width_dev:string;
  height_dev:string;
  homeOption:string;
  jupyterOption:string;
  zeppelinOption:string;
  rstudioOption:string;

  constructor(private sanitizer: DomSanitizer,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.url = params['url'];
        this.width_dev= (window.screen.width)-(((window.screen.width)*2)/100)+ "px";
        this.height_dev = (window.screen.height) + "px";
    });
    this.checkOption();
  }

  ngOnChanges()
  { 
    this.width_dev = (window.screen.width)-(((window.screen.width)*2)/100)+ "px";
    this.height_dev = (window.screen.height) + "px";
  }

  checkOption()
  {
    console.log("we are in check option");
    if(this.url=="https://jupyter.org/")
    {
      console.log("Selected is Jupyter");
      this.setJupyterActive();
    }
    if(this.url==="https://zeppelin.apache.org/")
    {
     this.setZeppelinActive();
    }
    if(this.url==="https://www.rstudio.com/")
    {
      this.setRstudioActive();
    }
  }

  clickJupyter(){
    this.url="https://jupyter.org/";
    this.setJupyterActive();
}

  clickZeppelin(){
    this.url="https://zeppelin.apache.org/";
    this.setZeppelinActive();
}

  clickRstudio(){
    this.url="https://www.rstudio.com/";
    this.setRstudioActive();
}

 clickHome(){
  this.router.navigate(['/home']);
 }

 setJupyterActive(){
  this.jupyterOption="nav-item active";
  this.zeppelinOption="nav-item";
  this.rstudioOption="nav-item";
 }

 setZeppelinActive(){
  this.jupyterOption="nav-item";
  this.zeppelinOption="nav-item active";
  this.rstudioOption="nav-item";
 }
 setRstudioActive(){
  this.jupyterOption="nav-item";
  this.zeppelinOption="nav-item";
  this.rstudioOption="nav-item active";
 }
}
