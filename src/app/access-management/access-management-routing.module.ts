import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessManagementComponent } from './access-management.component';
import { RolesComponent } from './roles/roles.component';
import { ViewRolesComponent } from './roles/view-roles/view-roles.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { AssignRolesComponent } from './users/assign-roles/assign-roles.component';


const routes: Routes = [
  { path: '', component: AccessManagementComponent },
  { path: 'add-roles', component: RolesComponent },
 { path: 'add-users', component: UsersComponent },
  { path: 'edit-view-roles', component: ViewRolesComponent },
  { path: 'edit-view-users', component: ViewUsersComponent },
  {path:'assign-roles', component: AssignRolesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes),]
})
export class AccessRoutingModule { }
