import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './component/index/index.component';
import { SectionBannerComponent } from './shared/section-banner/section-banner.component';
import { SectionBannerDosComponent } from './shared/section-banner-dos/section-banner-dos.component';
import { SectionBannerTresComponent } from './shared/section-banner-tres/section-banner-tres.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SectionBannerComponent,
    SectionBannerDosComponent,
    SectionBannerTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
