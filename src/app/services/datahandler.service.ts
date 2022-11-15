import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Image } from '../interfaces/image'

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {


  images$: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);
  images: Image[] = [];
  constructor() { }


  postImage(values: any) {
    this.images.push(values);
    next:

    complete:  
    //this.images$ = this.images;
    this.images$.next(this.images);
    console.log("in datahandler: ", this.images$);
  }

  getImages(){

  }
}
