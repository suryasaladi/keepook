import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './access-management-routing.module';
import { AccessManagementComponent } from './access-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { ViewRolesComponent } from './roles/view-roles/view-roles.component';
import { AccessSidebarComponent } from './access-sidebar/access-sidebar.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { AssignRolesComponent } from './users/assign-roles/assign-roles.component';
import { AccessService } from '../_serives/access.service';





@NgModule({
  declarations: [
    AccessManagementComponent,
    RolesComponent,
    ViewRolesComponent,
    AccessSidebarComponent,
    EditRolesComponent,
    UsersComponent,
    EditUsersComponent,
    ViewUsersComponent,
    AssignRolesComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AccessService
  ]
})
export class AccessManagementModule { }
