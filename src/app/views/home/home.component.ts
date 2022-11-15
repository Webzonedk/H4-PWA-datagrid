import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatahandlerService } from 'src/app/services/datahandler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((response: any) => {
    //   this.items = response.items;
    // });
  }

}
