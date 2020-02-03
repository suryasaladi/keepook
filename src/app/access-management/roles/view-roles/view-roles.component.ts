import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {
  RolesList: any;
  editRecord: any;
  constructor(private entityService: EntityService,
    private _location: Location) { }

  ngOnInit() {
    this.getRoles();
  }
  goBack() {
    this._location.back();
  }

  getRoles() {
    // this.entityService.getAllRoles().subscribe(res => {
    //   if (res['statusCode'] == 202) {
    //     this.RolesList = res['data']['companies'];
    //   }
    // }, err => {

    // });
  }
}