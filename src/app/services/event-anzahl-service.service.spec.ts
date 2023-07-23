import { TestBed } from '@angular/core/testing';

import { EventAnzahlServiceService } from './event-anzahl-service.service';

describe('EventAnzahlServiceService', () => {
  let service: EventAnzahlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventAnzahlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
