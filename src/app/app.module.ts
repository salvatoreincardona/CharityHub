import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigazioneComponent } from './header/navigazione.component';
import { TitoloComponent } from './header/titolo.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner.component';
import { AssociazioniComponent } from './home/associazioni.component';
import { IniziativeComponent } from './home/iniziative.component';
import { StorieComponent } from './home/storie.component';
import { CaroselloComponent } from './home/carosello.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigazioneComponent,
    TitoloComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    BannerComponent,
    AssociazioniComponent,
    IniziativeComponent,
    StorieComponent,
    CaroselloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
