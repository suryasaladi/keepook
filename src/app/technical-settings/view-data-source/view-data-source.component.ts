import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-data-source',
  templateUrl: './view-data-source.component.html',
  styleUrls: ['./view-data-source.component.css']
})
export class ViewDataSourceComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
