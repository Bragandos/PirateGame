import { Component , EventEmitter, Input, Output} from '@angular/core';
import { EventAnzahlServiceService } from '../event-anzahl-service.service';
import { ButtonComponent } from '../button/button.component';

const i = 0;

const aktuellesFeld = 13;
interface Button{
  id: number;
}





@Component({
  selector: 'app-buttonraster',
  templateUrl: './buttonraster.component.html',
  styleUrls: ['./buttonraster.component.css'],

})
export class ButtonrasterComponent {

  childCount: number = 0;

  constructor(private childCountService: EventAnzahlServiceService) {
    this.childCount = this.childCountService.getChildCount();
  }

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
  if (buttonId == 1){
    return 'assets/image/insel.png';
  }
  else if (buttonId == 13){
    return 'assets/image/pSchiff.png'
  }
  else if (buttonId == 9){
    return 'assets/image/insel.png'
  }
  else if (buttonId == 17){
    return 'assets/image/insel.png'
  }
  else if (buttonId == 25){
    return 'assets/image/insel.png'
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

