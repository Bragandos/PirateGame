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



export class LivegameComponent implements OnInit{
  textLogArray: string[] = [];
  data: number = 0;



  constructor(
 private login: LoginService,

) {
  this.data = this.login.data;


}

ngOnInit(): void {
    const x = sessionStorage.getItem("key");
    if (x != null){
      this.data = parseInt(x);
    }
  }
  
  kampfLotto(value1: number, value2: number): string {
    // Add the two values together
    const combinedValue = value1 + value2;
  
    // Calculate the percentage of each value
    const percentageValue1 = (value1 / combinedValue) * 100;
    const percentageValue2 = (value2 / combinedValue) * 100;
  
    // Generate a random number between 0 and 100
    const randomPercentage = Math.random() * 100;
  
    // Determine the winner based on the random percentage
    if (randomPercentage <= percentageValue1) {
      return `Value 1 (${value1}) is the winner!`;
    } else {
      return `Value 2 (${value2}) is the winner!`;
    }
  }


gibId(){
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
    console.log(this.kampfLotto(100,300));
    const tex = 'Käptn Jake hat Käptn Barbossa bezwungen!';
    const textex = this.getCurrentTime() + " " + tex + "\n";
    this.textLogArray.push(textex);

  }

  gibText(){

    return this.textLogArray;
  }

}
