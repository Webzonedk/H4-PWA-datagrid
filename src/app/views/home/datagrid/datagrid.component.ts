import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/services/datahandler.service';
import { Image } from '../../../interfaces/image';
import { ImageObj } from 'src/app/models/image-obj';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  images: ImageObj[] = [];


  constructor(private dataHandlerService: DatahandlerService) {

    this.dataHandlerService.images$.subscribe((imagesData: Image[]) => {
      next:
      if (this.images.length != imagesData.length) {
        this.images=imagesData;
      }
})


  }
  ngOnInit(): void {
   // this.loadData();
    console.log("Grid images$ ",this.dataHandlerService.images$);
    console.log("Grid images ",this.dataHandlerService.images);
  }
  


  loadData(){
    this.dataHandlerService.getImages();
  }



  clickedRow(rowData: Image){
   // console.log('row', row);
    console.log("click says hi: ",rowData)
  }

}
