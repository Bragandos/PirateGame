import { Component, OnInit } from '@angular/core';
import { PirateDTO } from '../DTO/pirateDTO';
import { PirateService } from '../services/pirate.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upgrade-shop',
  templateUrl: './upgrade-shop.component.html',
  styleUrls: ['./upgrade-shop.component.css']
})
export class UpgradeShopComponent implements OnInit {

  
  data: number = 0;

  schliessen(): void{

  }
  hasBackdrop = "true";




  private pirate!: PirateDTO;

  constructor(
    private pirateservice: PirateService,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.data = this.loginService.data;

  }


ngOnInit(){
  this.getPirateInfo();
}


getPirateInfo(){
  this.pirateservice
  .getByID(this.data)
  .subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      this.pirate = dto;
    })
  })
}


upgradeSchiff(){

  if (this.pirate.geld > 100){
    if (this.pirate.schiffupgrade < 6){
      this.pirate.schiffupgrade =  this.pirate.schiffupgrade + 1;
      this.pirate.geld = this.pirate.geld - 100;

      console.log(this.pirate);
      this.pirateservice.updateByID(this.pirate.id, this.pirate).subscribe(
        (response) => {
          console.log('Schiff geupgradet');
        }
      );
    }
   
  }
  
}

upgradeCrew(){
  if (this.pirate.geld > 100){
    if (this.pirate.crewupgrade < 6){
      this.pirate.crewupgrade =  this.pirate.crewupgrade + 1;
      this.pirate.geld = this.pirate.geld - 100;
      this.pirateservice.updateByID(this.pirate.id, this.pirate).subscribe(
        (response) => {
          console.log('Crew geupgradet');
        }
      );
    }
   
  }
}
}
