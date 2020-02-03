import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { DepartmentComponent } from './department/department.component';
import { OrganizationComponent } from './organization/organization.component';
import { EntityManagementComponent } from './entity-management.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ViewUserGroupComponent } from './user-group/view-user-group/view-user-group.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
const routes: Routes = [
  { path: '', component: EntityManagementComponent },
  { path: 'add-company', component: CompanyComponent },
  { path: 'add-organization', component: OrganizationComponent },
  { path: 'add-department', component:DepartmentComponent },
  { path: 'add-user-groups', component: UserGroupComponent },
  { path: 'edit-view-company', component: ViewCompanyComponent },
  { path: 'edit-view-organization', component: ViewOrganizationComponent },
  { path: 'edit-view-department', component: ViewDepartmentComponent },
  { path: 'edit-view-user-groups', component: ViewUserGroupComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EntityRoutingModule { }
