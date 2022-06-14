import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../angular-material/material.module';
// Components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [HomeModule]
})
export class HomeModule { }
