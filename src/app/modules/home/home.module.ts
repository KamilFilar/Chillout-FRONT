import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../angular-material/material.module';
// Components
import { HomeComponent } from './home.component';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeBlogComponent } from './components/home-blog/home-blog.component';
import { HomeShopComponent } from './components/home-shop/home-shop.component';
import { HomeYoutubeComponent } from './components/home-youtube/home-youtube.component';
// Subcomponents
import { CaruselItemComponent } from './components/home-shop/carusel-item/carusel-item.component';

@NgModule({
  declarations: [
    // Components
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeBlogComponent,
    HomeShopComponent,
    HomeYoutubeComponent,
    // Subcomponents
    CaruselItemComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeModule]
})
export class HomeModule { }
