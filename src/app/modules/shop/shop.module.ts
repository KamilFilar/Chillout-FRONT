import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShopRoutingModule } from './shop-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../angular-material/material.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ShopRoutingModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ShopModule]
})
export class ShopModule { }
