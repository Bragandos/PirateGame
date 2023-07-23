import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { CdkPortal, Portal } from '@angular/cdk/portal';
import { Component, Input, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { PirateService } from '../services/pirate.service';
import { PirateDTO } from '../DTO/pirateDTO';

@Component({
  selector: 'app-eventbox',
  templateUrl: './eventbox.component.html',
  styleUrls: ['./eventbox.component.css']
})
export class EventboxComponent {
  isOpen = false;
  isMenuOpen: boolean = false;
  isDa = false;
  private pirate!: PirateDTO;

  @Input() eventPic = "";
  @Input() name = "";
  @Input() zweiteoption = "";
  @Input() angriffpluendernshop = "";

  @ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>> | undefined;
  @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin | undefined;



  constructor(
    private overlay: Overlay, 
    private viewContainerRef: ViewContainerRef,
    private pirateservice: PirateService,) {

  }


eventOption(){
  if (this.angriffpluendernshop === "Shop"){
    this.isOpen = !this.isOpen
  }
  if (this.angriffpluendernshop === "Plündern"){
    const x = sessionStorage.getItem("key");
    if (x != null){
    this.getPirateInfo(parseInt(x))
    }
  }

}


getPirateInfo(x: number){
  this.pirateservice
  .getByID(x)
  .subscribe((pirateDTO:PirateDTO[]) => {
    pirateDTO.forEach((dto:PirateDTO) => {
      this.pirate = dto;
      this.pirate.geld = this.pirate.geld + parseInt(this.zweiteoption.split(' ')[1]);
      this.pirateservice.updateByID(this.pirate.id, this.pirate);
      console.log(this.pirate);
    })
  })
}


}



