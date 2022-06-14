import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogRoutingModule } from './blog-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../angular-material/material.module';
// Components

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BlogRoutingModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [BlogModule]
})
export class BlogModule { }
