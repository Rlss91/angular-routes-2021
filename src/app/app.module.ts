import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    Page2Component,
    Page3Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
