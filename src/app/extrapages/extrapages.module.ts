import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgOtpInputModule } from  'ng-otp-input';

import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [ Page404Component ],
  imports: [
    CommonModule,
    CarouselModule,
    NgOtpInputModule
  ]
})
export class ExtrapagesModule { }
