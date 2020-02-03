import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-template-properties',
  templateUrl: './add-template-properties.component.html',
  styleUrls: ['./add-template-properties.component.css']
})
export class AddTemplatePropertiesComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
goBack(){
  this._location.back();
}
}
