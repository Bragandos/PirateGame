import { Component , EventEmitter, Input} from '@angular/core';


const i = 0;

interface Button{
  id: number;
}





@Component({
  selector: 'app-buttonraster',
  templateUrl: './buttonraster.component.html',
  styleUrls: ['./buttonraster.component.css'],

})
export class ButtonrasterComponent {

  naten: string[] = [
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


  koorde = "";

  buttons: Button[] = Array(25).fill(0).map((_, index) => ({ id: index + 1 }));
  buttonEventEmitter = new EventEmitter<{ event: any, index: number }>();




bewegen(buttonId : number){
  
  console.log(`Button ${buttonId} was pressed.`);
  if (buttonId == 18){  // Runter
    
  }
}

handleData(data: string, x: number) {
  this.koorde = this.naten[x+i];
}
  
leeren(data: string){
  this.koorde = data;
}

gibBild(buttonId : number){
  if (buttonId == 18){
    return 'assets/image/insel.png';
  }
  else if (buttonId == 13){
    return 'assets/image/pSchiff.png'
  }
  else{
    return 'assets/image/wasser.png';
  }

}
gibAnz(buttonId : number){
  if (buttonId == 6){
    return '2';
  }else if (buttonId == 13)
    return '3';
  else{
    return '';
  }
}
  
}

