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
    throw new Error('Method not implemented.');
  }
  
  @Output() childCountChange = new EventEmitter<number>();
  
  children: any[] = [];

  createChildren() {
      const child = {
        name: 'Kaptn Barbossa',
        zwei: 'Kampfkraft: 600 ',
        eventPic:'assets/image/schiffgross.png',
        angriffpluendernshop: 'Angriff'
      };
      this.children.push(child);

      this.childCountService.setChildCount(this.children.length);
    };

    
}
