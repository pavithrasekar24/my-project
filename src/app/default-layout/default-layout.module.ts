import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DefaultLayoutRoutes } from './default-layout.routing';
import { DirectiveExampleComponent } from '../directive-example/directive-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
  CommonModule,
    // BrowserModule,
    DefaultLayoutRoutes,
  ],
  declarations: [DefaultLayoutComponent,NavBarComponent]
})
export class DefaultLayoutModule { }
