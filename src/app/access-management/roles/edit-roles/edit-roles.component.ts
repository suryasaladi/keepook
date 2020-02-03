import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { EntityService } from '../../../_serives/entity.service';


@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {
  editRolesForm: FormGroup;
  submitted: boolean = false;
  

  @Input() editRecords: any;
  @Output() valueChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private entityService: EntityService) { }
  ngOnInit() {
    this.editRolesForm = this.formBuilder.group({
      rolesName: ['', Validators.required],
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
    this.editRolesForm.setValue({
      rolesName: tempRecord['rolesName'],
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

  get fConrols() { return this.editRolesForm.controls; }
  
  editRolesSubmit() {
    this.submitted = true;
    console.log('testr');
    // stop here if form is invalid

    console.log(this.editRolesForm.value);
    
    if (this.editRolesForm.invalid) {
      return;
    }
    else {
      // let id = this.editRecords.id;
      // this.entityService.editRoles(this.editRolesForm.value, id, null).subscribe(res => {
      //   console.log(res);
      // }, err => {
      //   console.log(err);
      // })
    }
  }
}