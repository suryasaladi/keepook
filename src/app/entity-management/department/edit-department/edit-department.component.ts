import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  @Input() editRecords: any;
  constructor() { }

  ngOnInit() {

    console.log(this.editRecords)
  }

}
