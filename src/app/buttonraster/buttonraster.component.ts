import { Component , Input} from '@angular/core';


var punkt = "";


@Component({
  selector: 'app-buttonraster',
  templateUrl: './buttonraster.component.html',
  styleUrls: ['./buttonraster.component.css'],
})
export class ButtonrasterComponent {

  koorde = "";

  naten = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'E1',
    'E2',
    'E3',
    'E4',
    'E5'
  ];

  handleData(data: string) {
    
    this.koorde = data;
    console.log(data)
  }
  



  
}

