import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'addservice',
    component:AddServiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
