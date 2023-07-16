import { Component, Input, OnInit } from '@angular/core';
import { PirateService } from '../services/pirate.service';
import { PirateDTO } from '../DTO/pirateDTO';
import { SchiffUpgradeService } from '../services/schiff-upgrade.service';
import { SchiffupgradeDTO } from '../DTO/schiffUpgradeDTO';
import { CrewupgradeDTO } from '../DTO/crewUpgradeDTO';
import { CrewUpgradeService } from '../services/crew-upgrade.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  @Input() name: string = '';
  @Input() schiffname: string = '';
  @Input() gold: number = 0;
  @Input() kampfkraft: number = 0;
  @Input() id: number = 0;

  private pirate!: PirateDTO;
  private schiffupgrade!: SchiffupgradeDTO;
  private crewupgrade!: CrewupgradeDTO;

  constructor(
    private pirateservice: PirateService,
    private sUpgradeservice: SchiffUpgradeService,
    private cUpgradeservice: CrewUpgradeService
  ) {

  }

  ngOnInit(){
    this.getPirateInfo( this.id);
  }


getPirateInfo(x: number){
  this.pirateservice
  .getByID(x)
  .subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      this.pirate = dto;
      
      this.getSUpgradeStufe();
      

    })
  })
}

getSUpgradeStufe(){
  this.sUpgradeservice
  .getByID(this.pirate.schiffupgrade)
  .subscribe((schiffupgradeDTO:SchiffupgradeDTO[]) => {
    schiffupgradeDTO.forEach((dto:SchiffupgradeDTO) => {
      this.schiffupgrade = dto;
      this.getCUpgradeStufe();
    })
  })

}

getCUpgradeStufe(){
  this.cUpgradeservice
  .getByID(this.pirate.crewupgrade)
  .subscribe((crewupgradeDTO:CrewupgradeDTO[]) => {
    crewupgradeDTO.forEach((dto:CrewupgradeDTO) => {
      this.crewupgrade = dto;
      this.updateProfile();
      
    })
  })

}

updateProfile(){
  this.gold = this.pirate.geld;
  this.kampfkraft = this.crewupgrade.kampfstaerke + this.schiffupgrade.kampfstaerke;
  this.name = this.pirate.spieler;
  this.schiffname = this.pirate.schiffname;
}

}
