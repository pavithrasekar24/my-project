import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {path:'',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'user',loadChildren:()=>import('./default-layout/default-layout.module').then(x=>x.DefaultLayoutModule)},
  // {path:'admin',loadChildren:()=>import('./default-layout/default-layout.module').then(x=>x.DefaultLayoutModule)},
  {path:'**',component:PageNotFoundComponent}
];
//app routing -component -links
//load login,signup->dashboard(emp,cus,stu)
//sub routing -> lazy loading-> compliation speed up
//my-app/cus - my-app/emp - my-app/stu
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
   ]
})
export class AppRoutingModule { }

//routing -path(url) -component render
