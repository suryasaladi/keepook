import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.css']
})
export class EditOrganizationComponent implements OnInit {

  @Input() editRecords: any;
  constructor() { }

  ngOnInit() {

    console.log(this.editRecords)
  }

}
