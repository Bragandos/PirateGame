import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livegame',
  templateUrl: './livegame.component.html',
  styleUrls: ['./livegame.component.css'],
  providers: []
})



export class LivegameComponent{
  textLogArray: string[] = [];
  data: number = 0;



  constructor(
 private login: LoginService,

) {
  this.data = this.login.data;
}; 


gibId(){
  console.log(this.data);
  return this.data;
}

  getCurrentTime(): string {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
  }

  addText(){
    const tex = 'Käptn Jake hat Käptn Barbossa bezwungen!';
    const textex = this.getCurrentTime() + " " + tex + "\n";
    this.textLogArray.push(textex);

  }

  gibText(){

    return this.textLogArray;
  }

}
