import { Component, OnInit } from '@angular/core';
import { Notebook } from '../models/notebook.model';
import { NotebookService } from './notebook-service.service';

@Component({
  selector: 'app-notebook-menu',
  templateUrl: './notebook-menu.component.html',
  styleUrls: ['./notebook-menu.component.css'],
  providers: [NotebookService]
})
export class NotebookMenuComponent implements OnInit {

  image1:string;
  image2:string;
  image3:string;
  notebooks: Notebook[];

  constructor(private notebookService: NotebookService) {
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
      this.notebookService.getNotebooks()
        .subscribe((notebook:Notebook[]) => {
          this.notebooks = notebook;
          //console.log(this.notebooks);
        });
    }
  }


