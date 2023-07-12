import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventboxComponent } from './eventbox.component';

describe('EventboxComponent', () => {
  let component: EventboxComponent;
  let fixture: ComponentFixture<EventboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventboxComponent]
    });
    fixture = TestBed.createComponent(EventboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
