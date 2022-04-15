import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigazioneComponent } from './header/navigazione.component';
import { TitoloComponent } from './header/titolo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigazioneComponent,
    TitoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
