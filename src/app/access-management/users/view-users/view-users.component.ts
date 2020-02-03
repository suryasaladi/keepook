import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  usersList: any;
  editRecord: any;
  constructor(
    private accessService: EntityService,
    private _location: Location
    ) { }

  ngOnInit() {
    this.getusers();
  }
  goBack() {
    this._location.back();
  }

  getusers() {
    // this.entityService.getAllUsers().subscribe(res => {
    //   if (res['statusCode'] == 202) {
    //     this.usersList = res['data']['companies'];
    //   }
    // }, err => {

    // });
  }
}