import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DatahandlerService } from 'src/app/services/datahandler.service';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent{
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private dataHandlerService: DatahandlerService) {}

  onUpload(event:any, form:any) {
   // this.dataHandlerService.postImage(event)
      for(let file of event.files) { 
       // console.log("fil: ", this.uploadedFiles[0]); 
          this.dataHandlerService.postImage(file);
          this.uploadedFiles.push(file);
          //console.log(this.dataHandlerService.images$)
        }
        form.clear();
        console.log(this.uploadedFiles);
      //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}