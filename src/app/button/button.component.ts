import { Component, Input,EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})
export class ButtonComponent {

  @Input() anz = "";
  bild = 'assets/image/wasser.png';
  @Output() dataEvent = new EventEmitter<string>();

  sendData() {
    const data = "A5";
    this.dataEvent.emit(data);
  }

}

