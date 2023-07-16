import { TestBed } from '@angular/core/testing';

import { SchiffUpgradeService } from './schiff-upgrade.service';

describe('SchiffUpgradeService', () => {
  let service: SchiffUpgradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchiffUpgradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
