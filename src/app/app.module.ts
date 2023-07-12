import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ButtonrasterComponent } from './buttonraster/buttonraster.component';
import { HeaderComponent } from './header/header.component';
import { WindowComponent } from './window/window.component';
import { ButtonComponent } from './button/button.component';
import { ProfilComponent } from './profil/profil.component';
import { TextlogComponent } from './textlog/textlog.component';
import { LoginComponent } from './login/login.component';
import { LivegameComponent } from './livegame/livegame.component';
import { EventboxComponent } from './eventbox/eventbox.component';



const appRoute: Routes = [
  {path: '', component: LoginComponent},
  {path: 'livegame', component: LivegameComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    ButtonrasterComponent,
    HeaderComponent,
    WindowComponent,
    ButtonComponent,
    ProfilComponent,
    TextlogComponent,
    LoginComponent,
    LivegameComponent,
    EventboxComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
