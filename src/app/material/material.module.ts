import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents = [
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatCardModule,
  MatGridListModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
