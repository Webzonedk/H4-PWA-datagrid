import { Component, OnInit } from '@angular/core';
import { ImageObj } from 'src/app/models/image-obj';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatahandlerService } from 'src/app/services/datahandler.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {


  editForm!: FormGroup;
  selectedImage: ImageObj = new ImageObj;
  properties: string[] = [];

  constructor(private datagrid: DatagridComponent, private formBuilder: FormBuilder, private dataHandlerService: DatahandlerService) {

    this.dataHandlerService.selectedImage$.subscribe((selectedImageData: ImageObj) => {
      next:
      if (this.selectedImage.name != selectedImageData.name) {
        this.selectedImage = selectedImageData;
      }
    });


    this.properties = [
      this.selectedImage.size!,
      this.selectedImage.type!
    ]
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group(
      {
        fileName: [''],
        fileType: [''],
        fileSize: [''],
      });
  }

  editImage(event: any) {
    this.selectedImage.name = this.editForm.get('fileName')?.value;
    this.dataHandlerService.updateSelectedImage(this.selectedImage);
    this.datagrid.ngOnDestroy();
  }

}
