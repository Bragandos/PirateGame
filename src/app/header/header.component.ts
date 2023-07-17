import { Overlay, OverlayConfig, OverlayRef , CdkOverlayOrigin} from '@angular/cdk/overlay'
import { Component , QueryList, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { UpgradeShopComponent } from '../upgrade-shop/upgrade-shop.component';
import { CdkPortal, ComponentPortal, Portal} from '@angular/cdk/portal';
import { TextlogComponent } from '../textlog/textlog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class HeaderComponent {
  isOpen = false;
  isMenuOpen: boolean = false;
  isDa = false;




  @ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>> | undefined;
  @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin | undefined;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {

   }
  
logout(){
  sessionStorage.removeItem('key');
}
}
