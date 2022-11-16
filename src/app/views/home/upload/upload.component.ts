import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ImageObj } from 'src/app/models/image-obj';
import { DatahandlerService } from 'src/app/services/datahandler.service';
import { Image } from '../../../interfaces/image';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent{
  uploadedFiles: any[] = [];
  image: ImageObj = new ImageObj;
  constructor(private messageService: MessageService, private dataHandlerService: DatahandlerService, private sanitizer: DomSanitizer) {}
  
  onUpload(event:any, form:any) {
   // this.dataHandlerService.postImage(event)
      for(let file of event.files) { 
        this.image.name = file.name;
        this.image.type = file.type;
        this.image.size = file.size;
        this.image.objectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(file.objectURL.changingThisBreaksApplicationSecurity);
        console.log("fil: ", file); 
       // console.log("fil: ", this.uploadedFiles[0]); 
          this.dataHandlerService.postImage(this.image);
          //this.uploadedFiles.push(file);
        }
        form.clear();
        console.log("image: ",this.image);
        console.log(this.uploadedFiles);
        console.log(this.dataHandlerService.images$)
        console.log(this.dataHandlerService.images$)
      //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}