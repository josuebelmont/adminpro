import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NonpagefoundComponent } from './pages/nonpagefound/nonpagefound.component';
import { PagesComponent } from './pages/pages.component';

//Routes
const routes: Routes=[
  //protected routes
  {
    path:'', component: PagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'progress',component:ProgressComponent},
      {path:'grafica1',component:Grafica1Component},
      {path:'', redirectTo:'/dashboard', pathMatch:'full'},

    ]
  },
  

  //public routes
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  
  // {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',component:NonpagefoundComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
