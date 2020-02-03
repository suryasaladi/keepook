import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReversePipe } from '../pipe/reverse.pipe';


@NgModule({
  declarations: [HeaderComponent, PopupModalComponent,  PageLoaderComponent,
    ReversePipe,   ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
   
  ],
  exports: [ 
    HeaderComponent,
    PopupModalComponent,
    PageLoaderComponent,
    ReversePipe,
  ],
  providers: [
    NgbActiveModal ,
  ]
})
export class CommonModulesModule { }