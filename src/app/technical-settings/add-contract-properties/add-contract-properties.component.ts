import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-contract-properties',
  templateUrl: './add-contract-properties.component.html',
  styleUrls: ['./add-contract-properties.component.css']
})
export class AddContractPropertiesComponent implements OnInit {

  constructor(private _location:Location,) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
