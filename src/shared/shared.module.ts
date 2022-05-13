import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class SharedModule { }