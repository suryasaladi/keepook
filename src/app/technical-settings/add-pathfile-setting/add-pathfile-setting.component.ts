import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-pathfile-setting',
  templateUrl: './add-pathfile-setting.component.html',
  styleUrls: ['./add-pathfile-setting.component.css']
})
export class AddPathfileSettingComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
goBack(){
  this._location.back();
}
}
