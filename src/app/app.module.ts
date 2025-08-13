import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/core/home/home.component';
import { AboutUsComponent } from './pages/core/about-us/about-us.component';
import { MarqueeComponent } from './pages/marquee/marquee/marquee.component';
import { OrbitingCirclesComponent } from './components/orbiting-circles/orbiting-circles.component';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    MarqueeComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrbitingCirclesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
