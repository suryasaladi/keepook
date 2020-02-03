import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user-group',
  templateUrl: './view-user-group.component.html',
  styleUrls: ['./view-user-group.component.css']
})
export class ViewUserGroupComponent implements OnInit {
  records: any;
  constructor(private _location: Location) { }

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
