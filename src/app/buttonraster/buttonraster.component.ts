import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import { EventAnzahlServiceService } from '../services/event-anzahl-service.service';
import { PirateService } from '../services/pirate.service';
import { Router } from '@angular/router';
import { PirateDTO } from '../DTO/pirateDTO';
import { WindowComponent } from '../window/window.component';
import { EventDTO } from '../DTO/eventDTO';
import { CommLinkService } from '../services/comm-link.service';
import { InselnService } from '../services/inseln.service';
import { InselDTO } from '../DTO/inselnDTO';

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
  @Input() id2: number = 0;
  childCount: number = 0;
  playerlocation: number = 0;
  playerlastlocation: number = 0;
  private pirate!: PirateDTO;
  private inselArray: Array<InselDTO> = [];




  private fieldplayers : Map<number, number> = new Map([
    [1,0],
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0],
    [7,0],
    [8,0],
    [9,0],
    [10,0],
    [11,0],
    [12,0],
    [13,0],
    [14,0],
    [15,0],
    [16,0],
    [17,0],
    [18,0],
    [19,0],
    [20,0],
    [21,0],
    [22,0],
    [23,0],
    [24,0],
    [25,0],
  ]);

  constructor(
    private pirateservice: PirateService,
    private inselservice: InselnService,
    private router: Router,
    private childCountService: EventAnzahlServiceService,
    private commLink: CommLinkService) {
    
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
  this.getPirateInfo( this.id2);
  this.getInseln();

  for (let i = 0; i < 25; i++) {
    var bild = 'assets/image/wasser.png';

    if (i == 1 || i == 9 || i == 17 || i == 25) {
      bild = 'assets/image/insel.png';
    }

    this.buttonsImages.set(i+1, bild);
    this.buttonsOrgImages.set(i+1, bild);
  }

}

  bewegen(buttonId : number){
  let bew = false;
  //console.log(`Button ${buttonId} was pressed.`);
  
  if (this.playerlocation - buttonId == -1 && this.playerlocation % 5 != 0){
    bew = true;
  }else if(this.playerlocation - buttonId == 1 && this.playerlocation % 5 != 1){
    bew = true;
  }
  else if (this.playerlocation - buttonId == 5){
    bew = true;
  }
  else if (this.playerlocation - buttonId == -5){
    bew = true;
  }



  if (bew){
  this.playerlocation = buttonId;


  if (buttonId == 2 || buttonId == 10 || buttonId == 18) {
  this.buttonsImages.set(this.playerlocation, 'assets/image/pInsel.png');
  }else {
    this.buttonsImages.set(this.playerlocation, 'assets/image/pSchiff.png');
  }

  this.buttonsImages.set(this.playerlastlocation, <string>this.buttonsOrgImages.get(this.playerlastlocation));

  this.playerlastlocation = this.playerlocation;

  this.pirate.feld = this.playerlocation;
  this.pirateservice.updateByID(this.pirate.id, this.pirate).subscribe(
    (response) => {
    }
  );

    


 this.getAnzvonDB();
}
}

getPirateInfo(x: number){
  this.pirateservice
  .getByID(x)
  .subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      this.pirate = dto;
      
  
      const x = this.pirate.feld;

      this.playerlocation = x +1;
      this.playerlastlocation = x + 1;
    
      this.bewegen(x);
      this.getAnzvonDB();

    })
  })
}

getInseln(){
  this.inselservice.getAll()
  .subscribe((inselDTOS:InselDTO[]) => {
    inselDTOS.forEach((dto:InselDTO) =>{
      this.inselArray.push(dto);
    })
  });
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

getAnzvonDB(){
  let counter = 0;
  for (let felder = 0; felder < 25; felder++){
    this.fieldplayers.set(felder,0);
  }
  this.pirateservice
  .getAll().subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      if (dto.id !== this.pirate.id){      
        this.fieldplayers.set(dto.feld, this.fieldplayers.get(dto.feld) as number +1);
      }
    });
    this.inselservice.getAll()
    .subscribe((inselDTOS:InselDTO[]) => {
      inselDTOS.forEach((dto:InselDTO) =>{
        if (this.playerlocation === dto.feld && dto.feld != 18){
          counter++;
          this.commLink.dataArray.push(  { name: dto.name, zwei: 'Goldmenge: '+ dto.wert , eventPic: 'assets/image/insel1.png', angriffpluendernshop :'Plündern'});
          this.commLink.changed = true;
        }
        if (this.playerlocation === dto.feld && dto.feld == 18){
          counter++;
          this.commLink.dataArray.push(  { name: dto.name, zwei: '' , eventPic: 'assets/image/hafen.png', angriffpluendernshop :'Shop'});
          this.commLink.changed = true;
        }
      })
    });
    pirateDTO.forEach((dto:PirateDTO) => {
      
      if (dto.id !== this.pirate.id && this.playerlocation === dto.feld){  
        counter++;
        this.commLink.dataArray.push(  { name: dto.schiffname, zwei: 'Kampfkraft: '+ (dto.crewupgrade*50 + dto.schiffupgrade*50) , eventPic: 'assets/image/schiffgross.png', angriffpluendernshop :'Angriff'});
        this.commLink.changed = true;
      }
      if (counter === 0){
        this.commLink.dataArray = [];
        this.commLink.changed = true;
      }
    })
  }
  
  )
  
}

gibAnz(buttonId : number): string{
  if (this.fieldplayers.get(buttonId) as number === 0){
    return '';
  }
  return (this.fieldplayers.get(buttonId) as number).toString();
}


}

