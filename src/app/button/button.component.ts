import { Component, Input,EventEmitter, Output } from '@angular/core';


var i = 0;
var wort = '';

if (i == 1){
  wort = 'assets/image/insel.png ';
}else{
  wort = 'assets/image/wasser.png ';
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})
export class ButtonComponent {

  @Input() anz = "";

  @Input() bild = wort;


  @Output() dataEvent = new EventEmitter<string>();

  sendData() {
    const data = "A5";
    this.dataEvent.emit(data);
  }

}

