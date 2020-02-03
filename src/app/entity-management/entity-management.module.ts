import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { EntityRoutingModule } from './entity-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EntityManagementComponent } from './entity-management.component';
import { EntitySidebarComponent } from './entity-sidebar/entity-sidebar.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { EntityService } from '../_serives/entity.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CommonModulesModule } from '../common-module/common-module';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { EditOrganizationComponent } from './organization/edit-organization/edit-organization.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { ViewUserGroupComponent } from './user-group/view-user-group/view-user-group.component';
import { EditUserGroupComponent } from './user-group/edit-user-group/edit-user-group.component';




@NgModule({
  declarations: [
    CompanyComponent,
    UserGroupComponent,
    OrganizationComponent,
    DepartmentComponent,
    EntityManagementComponent,
    EntitySidebarComponent,
    EditCompanyComponent,
    ViewCompanyComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent,
    EditOrganizationComponent,
    ViewOrganizationComponent,
    EditUserGroupComponent,
    ViewUserGroupComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,    
    CommonModulesModule,
    EntityRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule, 
  ],
  providers:[
    EntityService
  ]
})
export class EntityManagementModule { }



