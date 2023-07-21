import { Component, Input, OnInit } from '@angular/core';
import { PirateService } from '../services/pirate.service';
import { PirateDTO } from '../DTO/pirateDTO';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  id: number | undefined;



  private pirate!: PirateDTO;

  constructor(
    private pirateservice: PirateService,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.loginService.data;

  }

  login() {
    // Perform login logic
   this.getPirateInfo(this.username, this.password );
  }


getPirateInfo(x:string, y :string){
  this.pirateservice
  .getByName(x)
  .subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      this.pirate = dto;
      this.updateProfile(x,y);
    })
  })
}




updateProfile(x:string,y:string){
  if (x!= null){
    if(y == this.pirate.passwort){
      this.loginService.data = this.pirate.id;
    sessionStorage.setItem('key', x);
      this.router.navigate(['/livegame'])
    }
  }

}

}
