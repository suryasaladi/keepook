import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  createRolesForm: FormGroup;
  submitted: boolean = false;
  token: string;
  httpService: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService,
    private _location: Location
  ) { }




  ngOnInit() {
    this.token = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')) : null;
    console.log(this.token);

    this.createRolesForm = this.formBuilder.group({
      roleName: ['', Validators.required],
      website: ['', Validators.required],
      
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      contactPerson: ['', Validators.required],
    });

    this.createRolesForm.controls['companyName'].valueChanges.subscribe(val => {
      // this.createRolesForm.controls['location'].setValidators([Validators.required]);
      // this.createRolesForm.controls['location1'].setValidators([Validators.required]);

    });
    // this.fileUpload1.resetFileUpload();
  }

  goBack() {
    this._location.back();
  }


  createRolesSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createRolesForm.invalid) {
      return;
    }

    else {
      console.log(this.createRolesForm.value);

      this.httpService.saveNewRoles(this.createRolesForm.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  }

  get fConrols() { return this.createRolesForm.controls; }

  checkRolesIdExist() {
    if (this.createRolesForm.value.RolesId) {
      const RolesId = this.createRolesForm.value.RolesId;
      //  this.dashboardService.checkExist(RolesId).subscribe(data => {
      //     if (data['status']) {
      //       this.RolesIdExistError = true;
      //     } else {
      //       this.RolesIdExistError = false;
      //     }
      //     console.log("Hello "+this.RolesIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}