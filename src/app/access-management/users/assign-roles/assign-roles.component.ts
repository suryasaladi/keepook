import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccessService } from 'src/app/_serives/access.service';

@Component({
  selector: 'app-assign-roles',
  templateUrl: './assign-roles.component.html',
  styleUrls: ['./assign-roles.component.css']
})
export class AssignRolesComponent implements OnInit {
  assignRoleForm: FormGroup;
  submitted: boolean = false;
  httpService: any;
  allRoles: any;

  constructor(
    private _location: Location,
    private formBuilder: FormBuilder,
    private accessService: AccessService
  ) { }

  ngOnInit() {
    this.assignRoleForm = this.formBuilder.group({
      createRole: ['', Validators.required]

    });
    this.getAllRoles();
  }

  getAllRoles() {
    this.accessService.getAllRoles().subscribe(res => {
      console.log(res);
      this.allRoles = res['data'].company;
    })
  }

  assignRoleSubmit() {
    this.submitted = true;
    console.log('submitted')
    // stop here if form is invalid
    if (this.assignRoleForm.invalid) {
      return;
    }

    else {
      console.log(this.assignRoleForm.value);

      this.httpService.saveNewRoles(this.assignRoleForm.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  }

  get fConrols() { return this.assignRoleForm.controls; }

  goBack() {
    this._location.back();
  }

}
