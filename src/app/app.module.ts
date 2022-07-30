import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared-module/material/material.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ApprovalStatusComponent } from './approvalStatus/approvalStatus.component';
import { GetStatusComponent } from './get-status/get-status.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { MyDirectiveDirective } from './my-directive.directive';
import {  concatPipe, FilterPipe, SquarePipe } from './custom.pipe';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    StudentTableComponent,
      CustomerTableComponent,
      EmployeeComponent,
      LoginComponent,
      PageNotFoundComponent,
      SignUpComponent,
      EventDetailsComponent,
      AddEventComponent,
      ApprovalStatusComponent,
      GetStatusComponent,
      DirectiveExampleComponent,
      PipeExampleComponent,
      MyDirectiveDirective,
      SquarePipe,
      concatPipe,
      FilterPipe,
      CustomerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
