import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.css']
})
export class AppTabComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickJupyter(){
      this.router.navigate(['/applications'],{queryParams: {url:"https://jupyter.org/"}}); 
  }

  clickZeppelin(){
    this.router.navigate(['/applications'],{queryParams: {url:"https://zeppelin.apache.org/"}}); 
  }

  clickRstudio(){
    this.router.navigate(['/applications'],{queryParams: {url:"https://www.rstudio.com/"}});
  }
}
