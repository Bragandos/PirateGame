import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonrasterComponent } from './buttonraster/buttonraster.component';
import { HeaderComponent } from './header/header.component';
import { WindowComponent } from './window/window.component';
import { ButtonComponent } from './button/button.component';





@NgModule({
  declarations: [
    AppComponent,
    ButtonrasterComponent,
    HeaderComponent,
    WindowComponent,
    ButtonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
