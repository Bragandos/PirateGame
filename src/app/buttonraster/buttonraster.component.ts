import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { EventAnzahlServiceService } from '../event-anzahl-service.service';

const i = 0;

interface Button{
  id: number;
}

@Component({
  selector: 'app-buttonraster',
  templateUrl: './buttonraster.component.html',
  styleUrls: ['./buttonraster.component.css'],

})
export class ButtonrasterComponent implements OnInit {

  childCount: number = 0;
  playerlocation: number = 0;
  playerlastlocation: number = 0;

  constructor(
    private childCountService: EventAnzahlServiceService) {
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
  buttonsOrgImages = new Map<number, string>();
  buttonsImages = new Map<number, string>();

  buttons: Button[] = Array(25).fill(0).map((_, index) => ({ id: index + 1 }));
  buttonEventEmitter = new EventEmitter<{ event: any, index: number }>();


ngOnInit() {
  for (let i = 0; i < 25; i++) {
    var bild = 'assets/image/wasser.png';

    if (i == 1 || i == 9 || i == 17 || i == 25) {
      bild = 'assets/image/insel.png';
    }

    this.buttonsImages.set(i+1, bild);
    this.buttonsOrgImages.set(i+1, bild);
  }
  this.playerlocation = 13;
  this.playerlastlocation = 13;

  this.bewegen(13);
}

  bewegen(buttonId : number){

  console.log(`Button ${buttonId} was pressed.`);
  this.playerlocation = buttonId;

  this.buttonsImages.set(this.playerlocation, 'assets/image/pSchiff.png');
  this.buttonsImages.set(this.playerlastlocation, <string>this.buttonsOrgImages.get(this.playerlastlocation));

  this.playerlastlocation = this.playerlocation;
}

handleData(data: string, x: number) {
  this.koorde = this.naten[x+i];
}

leeren(data: string){
  this.koorde = data;
}

gibBild(buttonId : number) : string{
  return <string>this.buttonsImages.get(buttonId);
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

