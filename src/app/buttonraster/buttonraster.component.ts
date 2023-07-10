import { Component , Input} from '@angular/core';
var punkt = "";

@Component({
  selector: 'app-buttonraster',
  templateUrl: './buttonraster.component.html',
  styleUrls: ['./buttonraster.component.css'],
})
export class ButtonrasterComponent {
  handleData(data: string) {
    punkt = data;
    console.log(data)
  }
  @Input() koorde = "Feld: " + punkt;
}

