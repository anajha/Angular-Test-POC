import { DataMenuComponent} from '../data-menu/data-menu.component';
import { NotebookMenuComponent } from '../notebook-menu/notebook-menu.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AppTabComponent } from '../app-tab/app-tab.component';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { StringFormatterPipe } from '../string-formatter.pipe';
import { StringAppenderPipe } from '../string-appender.pipe';
import { NotebookService } from '../notebook-menu/notebook-service.service';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ApplicationsComponent } from '../applications/applications.component';
import { SafePipe} from '../safepipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [ApplicationsComponent,SafePipe,HomeComponent,HeaderComponent, AppTabComponent,MenuCardComponent,StringAppenderPipe,StringFormatterPipe,DataMenuComponent,NotebookMenuComponent],
  providers:[NotebookService]
})
export class HomeModule { }