import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//added manually
import { RouterModule,Routes } from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //added maunally
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }