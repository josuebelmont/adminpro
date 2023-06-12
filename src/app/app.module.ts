import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NonpagefoundComponent } from './nonpagefound/nonpagefound.component';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NonpagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
