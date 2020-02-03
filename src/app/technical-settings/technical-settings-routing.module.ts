import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalSettingsComponent } from './technical-settings.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';
import { AddDataSourceComponent } from './add-data-source/add-data-source.component';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
import { AddPathfileSettingComponent } from './add-pathfile-setting/add-pathfile-setting.component';
import { EditDataSourceComponent } from './edit-data-source/edit-data-source.component';
import { ViewDataSourceComponent } from './view-data-source/view-data-source.component';
const routes: Routes = [
  { path: '', component: TechnicalSettingsComponent},
  { path: 'add-contract-properties', component: AddContractPropertiesComponent },
  { path: 'add-data-source', component: AddDataSourceComponent},
  {path: 'edit-data-source', component: EditDataSourceComponent},
  {path: 'view-data-source', component: ViewDataSourceComponent},
  { path: 'add-template-properties', component: AddTemplatePropertiesComponent},  
  { path: 'add-pathfile-setting', component: AddPathfileSettingComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TechnicalSettingsRoutingModule { }
