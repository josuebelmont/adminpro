import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { NonpagefoundComponent } from './nonpagefound/nonpagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


//Routes
const routes: Routes=[
  //path '/dashboard' pagesRouting
  //path '/auth' auth routing
  {path:'',redirectTo: '/dashboard', pathMatch:'full'},
  {path:'**',component:NonpagefoundComponent}


]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
