import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutRoutes } from './default-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    DefaultLayoutRoutes,
  ],
  declarations: [DefaultLayoutComponent,NavBarComponent]
})
export class DefaultLayoutModule { }
