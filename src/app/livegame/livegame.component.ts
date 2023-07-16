import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-livegame',
  templateUrl: './livegame.component.html',
  styleUrls: ['./livegame.component.css'],
  providers: []
})



export class LivegameComponent {
  textLogArray: string[] = [];

  


  constructor(
 private http : HttpClient
) {}; 

ngOnInit(): void{
  this.testAPI();
};

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

  testAPI(){
    const apiUrl = '/api/test';
    this.http.get<any[]>(apiUrl).subscribe(data => {
      console.log(data);
    });
  }
}
