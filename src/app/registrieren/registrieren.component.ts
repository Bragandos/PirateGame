import { Component } from '@angular/core';
import { PirateService } from '../services/pirate.service';
import { PirateDTO } from '../DTO/pirateDTO';
import { Router, NavigationExtras } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.css']
})
export class RegistrierenComponent {
  schiffsname!: string;
  username!: string;
  password!: string;
  id: number | undefined;
  geld: number | undefined;
  crewupgrade: number | undefined;
  schiffupgrade: number | undefined;
  feld: number | undefined;

  isRegistrationSuccess: boolean = false;


  private pirate!: PirateDTO;

  constructor(
    private pirateservice: PirateService,
    private router: Router,
    private signupService: SignupService,
  ) {
    this.signupService.data;
  }

  signup() {
    console.log(this.schiffsname, this.username, this.password)

    const geld = this.geld !== undefined ? this.geld : 0;
    const feld = this.feld !== undefined ? this.feld : 0;
    const schiffupgrade = this.schiffupgrade !== undefined ? this.schiffupgrade : 1;
    const crewupgrade = this.crewupgrade !== undefined ? this.crewupgrade : 1;
    const id = this.id !== undefined ? this.id : 13;

    this.createPirate(this.schiffsname, this.username, this.password, geld, feld, schiffupgrade, crewupgrade, id)
  }

  createPirate(s:string, t:string, u:string, v:number, w:number,x:number, y:number, z:number) {
    const newPirate: PirateDTO = {
      schiffname: s,
      spieler: t,
      passwort: u,
      id: v,
      geld: w,
      crewupgrade: x,
      schiffupgrade: y,
      feld: z
    }

  this.pirateservice.createItem(newPirate).subscribe(
    (response) => {
      console.log('Pirate created successfully');
      this.router.navigate(['']);
    },
    (error) => {
      console.error('Failed to create pirate', error);
    }
  );
}
}
