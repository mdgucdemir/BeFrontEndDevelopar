import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 
  modulun altindaki componenti baske bir yerde kullanmak isitiyor isen,
  componentin modulunden -- exports -- array ine yazip export edeceksin,
  kullanmak istedigin yerdeki modulden ise -- import -- edeceksin ve imports array ine yazicaksin
*/

/*
  imports:[] daki -- AppRoutingModule -- en sonda yazilmasi gerekiyor.
  Cunki olusturmus oldugun diger router lar yerine AppRoutingModule icerisindeki moduller ilk calismaya baslar.
  Eger AppRoutingModule icerisinde bir NotFound page gibi bir router in var ise, o hep calisacak.
  Diger Route lara gitmek istediginde hep NotFound Page gelicek 
*/
