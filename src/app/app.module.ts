import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EntityManagementModule } from './entity-management/entity-management.module';
import { TechnicalSettingsModule } from './technical-settings/technical-settings.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AccessManagementModule } from './access-management/access-management.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkflowManagementModule } from './workflow-management/workflow-management.module';
import { ReportingComponent } from './reporting/reporting.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_serives/auth.service';
import { ChartComponent } from './dashboard/chart/chart.component';
import { CommonModulesModule } from './common-module/common-module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService} from './_serives/http.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccessService } from './_serives/access.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    ReportingComponent,    
    LoginComponent,
    ChartComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntityManagementModule,
    TechnicalSettingsModule,
    AccessManagementModule,
    WorkflowManagementModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModulesModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgbModule,
     

  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
