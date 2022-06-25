import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatInputModule
  ],

  declarations: []
})
export class MaterialModule { }
