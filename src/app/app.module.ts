import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../angular-material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/pages/home/home.component';
import { HomeWelcomeComponent } from './core/pages/home/home-welcome/home-welcome.component';
import { HomeAboutComponent } from './core/pages/home/home-about/home-about.component';
import { HomeBlogComponent } from './core/pages/home/home-blog/home-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeBlogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
