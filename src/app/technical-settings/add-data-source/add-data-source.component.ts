import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-data-source',
  templateUrl: './add-data-source.component.html',
  styleUrls: ['./add-data-source.component.css']
})
export class AddDataSourceComponent implements OnInit {

  createCompanyForm: FormGroup;
  submitted: boolean= false;
  afuConfig: any;
  token:String;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _location: Location,
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyNameCL: ['', Validators.required],
      TemplatesCountCL: ['', Validators.required],
      TemplatesPeriodCL: ['', Validators.required],
      ContractsCountCL: ['', Validators.required],
      ContractsPeriodCL: ['', Validators.required],
   
      companyNameOL: ['', Validators.required],
      TemplatesCountOL: ['', Validators.required],
      TemplatesPeriodOL: ['', Validators.required],
      ContractsCountOL: ['', Validators.required],      
      ContractsPeriodOL: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyNameCL'].valueChanges.subscribe(val => {  
        // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);
       
  });
  this.token = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')): null;
     console.log(this.token);

  this.afuConfig ={
    theme:'attachPin',
   uploadAPI: {
     url:"http://23.96.4.235:9094/api/media/uploadFile",
     headers: {
       // "Content-Type" : "application/json;charset=UTF-8",
       "Authorization" : 'Bearer ' + this.token
        }
   }
 };

  }
  goBack(){
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

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.createCompanyForm.value, null, 4));
}

get fConrols() { return this.createCompanyForm.controls; }
  
}
