import { Component, Input,EventEmitter, Output } from '@angular/core';




@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})
export class ButtonComponent {

  @Input() anz : string | undefined;
  @Input() bild = 'assets/image/wasser.png';
  @Output() dataEvent = new EventEmitter<string>();
  @Output() leerEvent = new EventEmitter<string>();
  @Output() clickEvent = new EventEmitter<string>();


bewegen(){
  const data = "x";
  this.clickEvent.emit(data);
 // this.bild = 'assets/image/pSchiff.png'

}

  sendData() {
    const data = "";
    this.dataEvent.emit(data);
  }

  resetData() {
    const data = "";
 //   this.bild = 'assets/image/pSchiff.png';
    this.leerEvent.emit(data);
  }

}

