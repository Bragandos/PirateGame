import { TestBed } from '@angular/core/testing';

import { CrewUpgradeService } from './crew-upgrade.service';

describe('CrewUpgradeService', () => {
  let service: CrewUpgradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewUpgradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
