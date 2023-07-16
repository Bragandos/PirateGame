import { Component, Input, OnInit } from '@angular/core';
import { PirateService } from '../services/pirate.service';
import { PirateDTO } from '../DTO/pirateDTO';

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

  constructor(
    private pirateservice: PirateService,
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
      this.updateProfile();
    })
  })
}

updateProfile(){
  this.gold = this.pirate.geld;
  this.kampfkraft = this.pirate.crewupgrade + this.pirate.schiffupgrade;
  this.name = this.pirate.spieler;
  this.schiffname = this.pirate.schiffname;
}

}
