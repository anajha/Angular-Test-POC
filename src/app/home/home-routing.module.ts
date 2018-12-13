import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookMenuComponent } from '../notebook-menu/notebook-menu.component';
import { DataMenuComponent} from '../data-menu/data-menu.component';
import { HomeComponent } from './home.component';
import { ApplicationsComponent } from '../applications/applications.component';

const routes: Routes = [
  { path: 'home', 
    component: HomeComponent,
    children: [
        { path: 'notebookMenu', 
         component: NotebookMenuComponent 
        },
        { path: 'dataMenu', 
          component: DataMenuComponent 
        },
        { path: 'applications', 
          component: ApplicationsComponent 
        },
        { path: '', 
          component: NotebookMenuComponent 
        }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }