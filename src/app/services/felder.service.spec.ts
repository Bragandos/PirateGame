import { TestBed } from '@angular/core/testing';

import { FelderService } from './felder.service';

describe('FelderService', () => {
  let service: FelderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FelderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
