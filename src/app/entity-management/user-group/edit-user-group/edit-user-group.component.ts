import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-edit-user-group',
  templateUrl: './edit-user-group.component.html',
  styleUrls: ['./edit-user-group.component.css']
})
export class EditUserGroupComponent implements OnInit {

  @Input() editRecords: any;
  constructor() { }

  ngOnInit() {

    console.log(this.editRecords)
  }

}
