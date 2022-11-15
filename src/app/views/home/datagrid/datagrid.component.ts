import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/services/datahandler.service';
import { Image } from '../../../interfaces/image';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  images: any[] = [];


  constructor(private dataHandlerService: DatahandlerService) {

    this.dataHandlerService.images$.subscribe((imagesData: Image[]) => {
      next:
      if (this.images.length !== imagesData.length) {
        this.images=imagesData;
      }
})


  }
  ngOnInit(): void {
    this.loadData();
    console.log("images$ ",this.dataHandlerService.images$);
    console.log("images ",this.dataHandlerService.images);
  }
  


  loadData(){
    this.dataHandlerService.getImages();
  }



  clickedRow(row: Image): void {
    console.log('row', row);
  }

}
