import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EventboxComponent } from '../eventbox/eventbox.component';
import { EventAnzahlServiceService } from '../event-anzahl-service.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  providers: [EventAnzahlServiceService]
})
export class WindowComponent implements OnInit{
  constructor(private childCountService: EventAnzahlServiceService) { }
  ngOnInit(): void {
    // get Spieler ID
    // gib alle spieler wo spieler.feld übereinstimmen
    // für jeden eintrag createChildren()
  }
  
  @Output() childCountChange = new EventEmitter<number>();
  
  children: any[] = [];

  createChildren(nam: string, zw: string, img:string, option: string) {
      const child = {
        name: nam,            //'Kaptn Barbossa',
        zwei: zw,             //'Kampfkraft: 600 ',
        eventPic: img,        //'assets/image/schiffgross.png',
        angriffpluendernshop: option //'Angriff'
      };
      this.children.push(child);

      this.childCountService.setChildCount(this.children.length);
    };

    
}
