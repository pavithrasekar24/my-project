import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from '../add-event/add-event.component';
import { CustomerTableComponent } from '../customer-table/customer-table.component';
import { CustomerComponent } from '../customer/customer.component';
import { DirectiveExampleComponent } from '../directive-example/directive-example.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';
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
    {path:'customer',component:CustomerComponent},
    {path:'customer-table',component:CustomerTableComponent},
    {path:'student',component:StudentDataComponent},
    {path:'add-event',component:AddEventComponent},
    {path:'directive-types',component:DirectiveExampleComponent},
    {path:'pipe-types',component:PipeExampleComponent}


 ] }
  ];

export const DefaultLayoutRoutes = RouterModule.forChild(routes);
