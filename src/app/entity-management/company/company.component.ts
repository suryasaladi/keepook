import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from "angular-file-uploader";
import { Location } from '@angular/common';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  createCompanyForm: FormGroup;
  submitted: boolean = false;
  token: string;
  afuConfig: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService,
    private _location: Location
  ) { }




  ngOnInit() {
    this.token = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')) : null;
    console.log(this.token);

    this.afuConfig = {
      theme: 'attachPin',
      uploadAPI: {
        url: "http://23.96.4.235:9094/api/media/uploadFile",
        headers: {
          // "Content-Type" : "application/json;charset=UTF-8",
          "Authorization": 'Bearer ' + this.token
        }
      }
    };
    this.createCompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      website: ['', Validators.required],
      logo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', null],
      phoneNumber: ['', Validators.required],
      contactPerson: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyName'].valueChanges.subscribe(val => {
      // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
      // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);

    });
    // this.fileUpload1.resetFileUpload();
  }

  DocUpload(e) {
    console.log(e);
  }

  goBack() {
    this._location.back();
  }


  createCompanySubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
      return;
    }

    else {
      console.log(this.createCompanyForm.value);

      this.entityService.saveNewCompany(this.createCompanyForm.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  }

  get fConrols() { return this.createCompanyForm.controls; }

  checkCompanyIdExist() {
    if (this.createCompanyForm.value.CompanyId) {
      const CompanyId = this.createCompanyForm.value.CompanyId;
      //  this.dashboardService.checkExist(CompanyId).subscribe(data => {
      //     if (data['status']) {
      //       this.CompanyIdExistError = true;
      //     } else {
      //       this.CompanyIdExistError = false;
      //     }
      //     console.log("Hello "+this.CompanyIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}