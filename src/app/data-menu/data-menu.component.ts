import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data.model';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-data-menu',
  templateUrl: './data-menu.component.html',
  styleUrls: ['./data-menu.component.css']
})
export class DataMenuComponent implements OnInit {

  image1:string;
  image2:string;
  image3:string;
  datas:Data[];
  
  constructor(private dataService: DataService) {
    this.image1="assets/img/collapse.png";
    this.image2="assets/img/collapse.png";
    this.image3="assets/img/collapse.png";
   }

  onClickCollapse1()
  {
    if(this.image1==="assets/img/collapse.png")
    {
      this.image1="assets/img/uncollapse.png";
    }
    else
    {
      this.image1="assets/img/collapse.png";
    }
  }
  onClickCollapse2()
  {
    if(this.image2==="assets/img/collapse.png")
    {
      this.image2="assets/img/uncollapse.png";
    }
    else
    {
      this.image2="assets/img/collapse.png";
    }
  }
  onClickCollapse3()
  {
    if(this.image3==="assets/img/collapse.png")
    {
      this.image3="assets/img/uncollapse.png";
    }
    else
    {
      this.image3="assets/img/collapse.png";
    }
  }
  ngOnInit() {
  /*   this.dataService.getData()
        .subscribe((datas:Data[]) => {
          this.datas = datas;
          console.log(this.datas);
        });
    }; */
  }

}
