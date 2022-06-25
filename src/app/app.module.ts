import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
      GetStatusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
