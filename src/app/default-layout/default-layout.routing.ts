import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from '../add-event/add-event.component';
import { CustomerTableComponent } from '../customer-table/customer-table.component';
import { EmployeeComponent } from '../employee/employee.component';
import { StudentDataComponent } from '../student-data/student-data.component';
import { StudentTableComponent } from '../student-table/student-table.component';
import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  {
    path:"",component:DefaultLayoutComponent,
    children:[
    // {path:"",redirectTo:'customer'},
    {path:'employee',component:EmployeeComponent},
    {path:'student-table',component:StudentTableComponent},
    {path:'customer',component:CustomerTableComponent},
    {path:'student',component:StudentDataComponent},
    {path:'add-event',component:AddEventComponent},

 ] }
  ];

export const DefaultLayoutRoutes = RouterModule.forChild(routes);
