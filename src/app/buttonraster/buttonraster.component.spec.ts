import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonrasterComponent } from './buttonraster.component';

describe('ButtonrasterComponent', () => {
  let component: ButtonrasterComponent;
  let fixture: ComponentFixture<ButtonrasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonrasterComponent]
    });
    fixture = TestBed.createComponent(ButtonrasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
