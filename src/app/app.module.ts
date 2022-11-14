import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UploadComponent } from './views/upload/upload.component';
import { DatagridComponent } from './views/datagrid/datagrid.component';
import { AddPropertiesComponent } from './modals/add-properties/add-properties.component';
import { ViewPropertiesComponent } from './modals/view-properties/view-properties.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
