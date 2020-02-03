import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  companyList: any;
  editRecord: any;
  constructor(private entityService: EntityService,
    private _location: Location) { }

  ngOnInit() {
    this.getCompany();
  }
  goBack() {
    this._location.back();
  }

  getCompany() {
    this.entityService.getAllCompany().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.companyList = res['data']['companies'];
      }
    }, err => {

    });
  }
}