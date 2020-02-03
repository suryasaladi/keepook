import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  createDeparmentForm: FormGroup;
  submitted: boolean = false;
  organizationList: any[] ;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService,
    private _location: Location
  ) { }




  ngOnInit() {
    this.createDeparmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      organisationUnitId: ['', Validators.required],
      
    });
   
    this.getOraganization();

  }
  goBack() {
    this._location.back();
  }


  createDeparmentSubmit() {
    this.submitted = true;

    console.log(this.createDeparmentForm.controls.value);
    console.log(this.createDeparmentForm.invalid);

    // stop here if form is invalid
    // if (this.createDeparmentForm.invalid) {
    //   return;
    // }
    this.createDeparmentForm.value['organisationUnitId'] = 1;


    this.entityService.saveNewDepartment(this.createDeparmentForm.value, null).subscribe(res => {
      if (res['statusCode'] == 202) {
        console.log('success')
      }
    }, err => {

    });


   
    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.createDeparmentForm.value, null, 4));
  }

  get fConrols() { return this.createDeparmentForm.controls; }
  
  getOraganization() {
    this.entityService.getAllOrganization().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.organizationList = res['data']['organisationUnits'];
      }
    }, err => {

    });
  }
}
