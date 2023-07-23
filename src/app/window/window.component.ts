import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EventboxComponent } from '../eventbox/eventbox.component';
import { EventAnzahlServiceService } from '../services/event-anzahl-service.service';
import { EventDTO } from '../DTO/eventDTO';
import { CommLinkService } from '../services/comm-link.service';


@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  providers: [EventAnzahlServiceService]
})
export class WindowComponent implements OnInit{
  children: any[] = [];

  

  constructor(private childCountService: EventAnzahlServiceService,
    private commLink: CommLinkService) {

   }
  ngOnInit(): void {

    this.children =  this.childCountService.getData();
    this.checkCommLink();

    };
    // get Spieler ID
    // gib alle spieler wo spieler.feld übereinstimmen
    // für jeden eintrag createChildren()
  
  
  @Output() childCountChange = new EventEmitter<number>();
  
checkCommLink(){
    if (this.commLink.changed){
      this.commLink.changed = false;
      this.children = this.commLink.dataArray;
    }
    
    setTimeout(() => {
      this.checkCommLink();
    }, 500);

}

  createChildren(nam: string, zw: string, img:string, option: string): void {
      const child = {
        name: nam,            //'Kaptn Barbossa',
        zwei: zw,             //'Kampfkraft: 600 ',
        eventPic: img,        //'assets/image/schiffgross.png',
        angriffpluendernshop: option //'Angriff'
      };
      this.children.push(child);

      this.childCountService.setChildCount(this.children.length);
    };

  callChildServiceList(){
    this.children.push(this.childCountService.getChild);
  }  
    

}
