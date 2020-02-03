import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowManagementComponent } from './workflow-management.component';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowStepComponent } from './workflow-step/workflow-step.component';


@NgModule({
  declarations: [WorkflowManagementComponent,WorkflowStepComponent],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowManagementModule { }
