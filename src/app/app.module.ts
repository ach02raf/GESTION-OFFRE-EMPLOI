import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environments';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { SitePageComponent } from './site-page/site-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VoirPlusPageComponent } from './voir-plus-page/voir-plus-page.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SitePageComponent, HomePageComponent, VoirPlusPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FormsModule,
    provideStorage(() => getStorage()),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
