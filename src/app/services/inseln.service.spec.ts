import { TestBed } from '@angular/core/testing';

import { InselnService } from './inseln.service';

describe('InselnService', () => {
  let service: InselnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InselnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
