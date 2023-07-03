import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @Input() gold: number = 0;
  @Input() kampfkraft: number = 0;
}
