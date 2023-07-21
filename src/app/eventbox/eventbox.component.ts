import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventbox',
  templateUrl: './eventbox.component.html',
  styleUrls: ['./eventbox.component.css']
})
export class EventboxComponent {
  @Input() eventPic = "";
  @Input() name = "";
  @Input() zweiteoption = "";
  @Input() angriffpluendernshop = "";



feindBox(nam: string, zwei: string){
  this.eventPic = 'assets/image/schiffgross.png';
  this.angriffpluendernshop = 'Angriff'
  this.name = nam;
  this.zweiteoption = zwei;
}

inselBox(nam:string,zwei:string){
  this.eventPic = 'assets/image/insel.png';
  this.angriffpluendernshop = 'Plündern'
  this.name = nam;
  this.zweiteoption = zwei;
}

hafenBox(nam:string,zwei:string){
  this.eventPic = 'assets/image/hafen.png';
  this.angriffpluendernshop = 'Shop'
  this.name = nam;
  this.zweiteoption = zwei;
}



}



