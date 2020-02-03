import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {
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
