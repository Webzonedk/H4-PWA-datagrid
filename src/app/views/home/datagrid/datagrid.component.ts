import { Component, } from '@angular/core';
import { DatahandlerService } from 'src/app/services/datahandler.service';
import { Image } from '../../../interfaces/image';
import { ImageObj } from 'src/app/models/image-obj';

import { EditImageComponent } from '../edit-image/edit-image.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],

  providers: [DialogService, MessageService]
})
export class DatagridComponent {

  images: ImageObj[] = [];
  selectedImage: ImageObj = new ImageObj;

  constructor(private dataHandlerService: DatahandlerService, private dialogService: DialogService, public messageService: MessageService) {

    this.dataHandlerService.images$.subscribe((imagesData: Image[]) => {
      next:
      if (this.images.length != imagesData.length) {
        this.images = imagesData;
      }
    });

    this.dataHandlerService.selectedImage$.subscribe((selectedImageData: ImageObj) => {
      next:
      if (this.selectedImage.name != selectedImageData.name) {
        this.selectedImage = selectedImageData;
      }
    });
  }

  dialog: DynamicDialogRef | undefined;




  clickedRow(rowData: ImageObj) {
    this.updateSelectedImage(rowData);
    // console.log('row', row);
    this.dialog = this.dialogService.open(EditImageComponent, {
      header: 'Rediger billede',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.dialog.onClose.subscribe((rowData: ImageObj) => {
      if (rowData) {
        this.messageService.add({ severity: 'info', summary: 'Billedet er blevet opdateret', detail: rowData.name });
      }
    });

    this.dialog.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });


  }

  ngOnDestroy() {
    if (this.dialog) {
      this.dialog.close();
    }

  }

  updateSelectedImage(rowData: ImageObj) {
    this.dataHandlerService.updateSelectedImage(rowData);
  }
}
