import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { EntityService } from '../../../_serives/entity.service';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  editCompanyForm: FormGroup;
  submitted: boolean = false;
  

  @Input() editRecords: any;
  @Output() valueChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private entityService: EntityService) { }
  ngOnInit() {
    this.editCompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      website: ['', Validators.required],
      logo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: [''],
      status: [''],
      phoneNumber: ['', Validators.required],
      contactPerson: ['', Validators.required],
    });

   if(this.editRecords) {
    this.setFormValue();
   }
  }

  

  setFormValue(){
    let tempRecord= this.editRecords;

    console.log(tempRecord)
    this.editCompanyForm.setValue({
      companyName: tempRecord['companyName'],
      website: tempRecord ['website'],
      logo: tempRecord['logo'],
      address: tempRecord['address'],
      city: tempRecord['city'],
      zipCode: tempRecord['zipCode'],
      country: tempRecord['country'],
      status: tempRecord['status'],
      phoneNumber:tempRecord ['phoneNumber'],
      contactPerson: tempRecord['contactPerson']
    });
  }

  get fConrols() { return this.editCompanyForm.controls; }
  
  editCompanySubmit() {
    this.submitted = true;
    console.log('testr');
    // stop here if form is invalid

    console.log(this.editCompanyForm.value);
    
    if (this.editCompanyForm.invalid) {
      return;
    }
    else {
      let id = this.editRecords.id;
      this.entityService.editCompany(this.editCompanyForm.value, id, null).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }
  }
}