import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
//import { RecapitulatifComponent } from '../recapitulatif/recapitulatif.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { PhoneNumberPipe } from './phoneNumber.pipe';
import { InputErrorDirective } from './input-error.directive';


@NgModule({
  declarations: [FormsModule],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    UserFormComponent,
    HomeComponent,
    PhoneNumberPipe,
    InputErrorDirective,
    UserFormComponent
  ]
})
export class UserFormModule { }
