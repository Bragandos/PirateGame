import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-textlog',
  templateUrl: './textlog.component.html',
  styleUrls: ['./textlog.component.css']
})
export class TextlogComponent {

  @Input() text: string[] | undefined;


}


