import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-data-source',
  templateUrl: './edit-data-source.component.html',
  styleUrls: ['./edit-data-source.component.css']
})
export class EditDataSourceComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
