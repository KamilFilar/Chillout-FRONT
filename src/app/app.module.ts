import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Own modules
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './modules/angular-material/material.module';
import { HomeModule } from './modules/home/home.module';
import { BlogModule } from './modules/blog/blog.module';
import { ShopModule } from './modules/shop/shop.module';
// Components
import { AppComponent } from './app.component';


import { HomeComponent } from './core/pages/home/home.component';
import { HomeWelcomeComponent } from './core/pages/home/home-welcome/home-welcome.component';
import { HomeAboutComponent } from './core/pages/home/home-about/home-about.component';
import { HomeBlogComponent } from './core/pages/home/home-blog/home-blog.component';
import { HomeYoutubeComponent } from './core/pages/home/home-youtube/home-youtube.component';
import { HomeShopComponent } from './core/pages/home/home-shop/home-shop.component';
import { CaruselItemComponent } from './core/pages/home/home-shop/carusel-item/carusel-item.component';
import { ShopComponent } from './modules/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeAboutComponent,
    HomeBlogComponent,
    HomeYoutubeComponent,
    HomeShopComponent,
    CaruselItemComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BlogModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
