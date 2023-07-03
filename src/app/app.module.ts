import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { ButtonrasterComponent } from './buttonraster/buttonraster.component';
import { ButtonComponent } from './button/button.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    ButtonrasterComponent,
    ButtonComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
