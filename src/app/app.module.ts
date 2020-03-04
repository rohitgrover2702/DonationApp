import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'projects/core/src/projects';
import { CORE_CONFIG } from 'projects/core/src/lib/config/core-config';
import { CommonModule } from '@angular/common';
import { DonationComponentModule } from 'projects/donation-component/src/projects';
import { CoreConfigFactory } from './core-config.factory';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    CommonModule,
    DonationComponentModule
  ],
  providers: [{ provide: CORE_CONFIG, useFactory: CoreConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
