import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  records: any;
  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
    this.records = {
      name: "pandi",
      age: 25
    }
  }
  goBack() {
    this._location.back();
  }

}
