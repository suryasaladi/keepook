import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { EntityService } from '../../../_serives/entity.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  editUsersForm: FormGroup;
  submitted: boolean = false;
  

  @Input() editRecords: any;
  @Output() valueChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private entityService: EntityService) { }
  ngOnInit() {
    this.editUsersForm = this.formBuilder.group({
      usersName: ['', Validators.required],
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
    this.editUsersForm.setValue({
      usersName: tempRecord['usersName'],
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

  get fConrols() { return this.editUsersForm.controls; }
  
  editUsersSubmit() {
    this.submitted = true;
    console.log('testr');
    // stop here if form is invalid

    console.log(this.editUsersForm.value);
    
    if (this.editUsersForm.invalid) {
      return;
    }
    else {
      // let id = this.editRecords.id;
      // this.entityService.editUsers(this.editUsersForm.value, id, null).subscribe(res => {
      //   console.log(res);
      // }, err => {
      //   console.log(err);
      // })
    }
  }
}