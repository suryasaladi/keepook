import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  createUsersForm: FormGroup;
  submitted: boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService,
    private _location: Location
  ) { }




  ngOnInit() {

  
    this.createUsersForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      contactDetails: ['', Validators.required],
      deparment: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      validTill: ['', Validators.required],
      validFrom: ['', Validators.required],

    });

    this.createUsersForm.controls['fullName'].valueChanges.subscribe(val => {
      this.createUsersForm.controls['userName'].setValidators([Validators.required]);
      this.createUsersForm.controls['email'].setValidators([Validators.required]);
      this.createUsersForm.controls['contactDetails'].setValidators([Validators.required]);
      this.createUsersForm.controls['deparment'].setValidators([Validators.required]);
      this.createUsersForm.controls['role'].setValidators([Validators.required]);
      this.createUsersForm.controls['password'].setValidators([Validators.required]);
      this.createUsersForm.controls['confirmPassword'].setValidators([Validators.required]);
      this.createUsersForm.controls['validTill'].setValidators([Validators.required]);
      this.createUsersForm.controls['validFrom'].setValidators([Validators.required]);

   });
    //this.fileUpload1.resetFileUpload();
  }

  goBack() {
    this._location.back();
  }

  // DocUpload(e) {
  //   console.log(e);
  // }


  createUsersSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createUsersForm.invalid) {
      return;
    }

    else {
      console.log(this.createUsersForm.value);

      // this.entityService.saveNewUsers(this.createUsersForm.value).subscribe(res => {
      //   console.log(res);
      // }, err => {
      //   console.log(err);
      // })
    }

  }

  get fConrols() { return this.createUsersForm.controls; }

  checkUsersIdExist() {
    if (this.createUsersForm.value.UsersId) {
      const UsersId = this.createUsersForm.value.UsersId;
      //  this.dashboardService.checkExist(UsersId).subscribe(data => {
      //     if (data['status']) {
      //       this.UsersIdExistError = true;
      //     } else {
      //       this.UsersIdExistError = false;
      //     }
      //     console.log("Hello "+this.UsersIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}