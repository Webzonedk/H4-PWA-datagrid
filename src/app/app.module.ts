import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UploadComponent } from './views/home/upload/upload.component';
import { DatagridComponent } from './views/home/datagrid/datagrid.component';
import { AddPropertiesComponent } from './views/modals/add-properties/add-properties.component';
import { ViewPropertiesComponent } from './views/modals/view-properties/view-properties.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {MatSliderModule} from '@angular/material/slider';
import {TableModule} from 'primeng/table';
import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    DatagridComponent,
    AddPropertiesComponent,
    ViewPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule,
    BrowserAnimationsModule,
    MatSliderModule,
    TableModule,
    ImageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
