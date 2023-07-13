import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeShopComponent } from './upgrade-shop.component';

describe('UpgradeShopComponent', () => {
  let component: UpgradeShopComponent;
  let fixture: ComponentFixture<UpgradeShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradeShopComponent]
    });
    fixture = TestBed.createComponent(UpgradeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
