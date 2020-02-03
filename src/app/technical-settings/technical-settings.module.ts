import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { TechnicalSettingsRoutingModule } from './technical-settings-routing.module';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';
import { TechnicalSettingsComponent } from './technical-settings.component';
import { AddDataSourceComponent } from './add-data-source/add-data-source.component';
import { TechnicalSidebarComponent } from './technical-sidebar/technical-sidebar.component';
import { AddPathfileSettingComponent } from './add-pathfile-setting/add-pathfile-setting.component';
import { EditDataSourceComponent } from './edit-data-source/edit-data-source.component';
import { ViewDataSourceComponent } from './view-data-source/view-data-source.component';

@NgModule({
  declarations: [
    AddTemplatePropertiesComponent,
    AddContractPropertiesComponent,
    AddDataSourceComponent,
    TechnicalSidebarComponent,
    TechnicalSettingsComponent,
    AddPathfileSettingComponent,
    EditDataSourceComponent,
    ViewDataSourceComponent],
  imports: [
    CommonModule,
    TechnicalSettingsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule
  ]
})
export class TechnicalSettingsModule { }
