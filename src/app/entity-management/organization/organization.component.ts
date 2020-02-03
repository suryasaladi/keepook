import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  createCompanyForm: FormGroup;
  submitted: boolean = false;
  companyList: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService,
    private _location: Location
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyId: [null, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.getCompany();


  }
  goBack() {
    this._location.back();
  }


  createCompanySubmit() {
    this.submitted = true;

    console.log(this.createCompanyForm.controls);
    console.log(this.createCompanyForm.invalid);

    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
      return;
    }

    this.createCompanyForm.value['companyId'] = +this.createCompanyForm.value['companyId'];


    this.entityService.saveNewOrganization(this.createCompanyForm.value, null).subscribe(res => {
      if (res['statusCode'] == 202) {
        console.log('success')
      }
    }, err => {

    });

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.createCompanyForm.value, null, 4));
  }

  get fConrols() { return this.createCompanyForm.controls; }

  getCompany() {
    this.entityService.getAllCompany().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.companyList = res['data']['companies'];
      }
    }, err => {

    });
  }
}
