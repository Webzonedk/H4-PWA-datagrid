import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UploadComponent } from './views/home/upload/upload.component';
import { DatagridComponent } from './views/home/datagrid/datagrid.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MatSliderModule } from '@angular/material/slider';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditImageComponent } from './views/home/edit-image/edit-image.component';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    DatagridComponent,
    EditImageComponent


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
    ImageModule,
    DialogModule,
    DynamicDialogModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    SplitterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
