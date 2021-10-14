import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnrolmentFormComponent } from './enrolment-form/enrolment-form.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  
  {path:'templateform',component:EnrolmentFormComponent},
  {path:'reactiveform',component:ReactiveFormComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule]
})
export class AppRoutingModule { }
