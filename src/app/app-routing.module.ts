import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LivegameComponent } from './livegame/livegame.component';

const routes: Routes = [  
{path: '', component: LoginComponent},
{path: 'livegame', component: LivegameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
