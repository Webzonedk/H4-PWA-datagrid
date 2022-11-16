import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Image } from 'src/app/interfaces/image'
import { ImageObj } from 'src/app/models/image-obj';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  images: Image[] = [];
  images$: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);
  tempImage: ImageObj = new ImageObj;
  selectedImage: ImageObj= new ImageObj;
  selectedImage$: BehaviorSubject<ImageObj> = new BehaviorSubject<ImageObj>(this.selectedImage);
  constructor() { }


  postImage(values: any) {
    this.images.push(values);
    next:

    complete:
    this.images$.next(this.images);
    console.log("images$ in datahandler: ", this.images$); //DEBUG
  }

  updateSelectedImage(values: ImageObj) {
    this.selectedImage= values;
    next:

    complete:
    this.selectedImage$.next(this.selectedImage);
    console.log("selectedImage$ in datahandler: ", this.selectedImage$); //DEBUG
  }

  getImages() {

  }
}
