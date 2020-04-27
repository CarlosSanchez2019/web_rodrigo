import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './component/index/index.component';
import { SectionBannerComponent } from './shared/section-banner/section-banner.component';
import { SectionBannerDosComponent } from './shared/section-banner-dos/section-banner-dos.component';
import { SectionBannerTresComponent } from './shared/section-banner-tres/section-banner-tres.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SectionBannerCuatroComponent } from './shared/section-banner-cuatro/section-banner-cuatro.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './shared/footer/footer.component';
import { RedesSocialesComponent } from './shared/redes-sociales/redes-sociales.component';
import { HttpClientModule } from '@angular/common/http';
import { InstagramService } from './service/instagram.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SectionBannerComponent,
    SectionBannerDosComponent,
    SectionBannerTresComponent,
    SectionBannerCuatroComponent,
    FooterComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
