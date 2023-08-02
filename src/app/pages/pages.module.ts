import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgOptimizedImage,
  ]
})
export class PagesModule { }
