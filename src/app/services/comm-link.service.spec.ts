import { TestBed } from '@angular/core/testing';

import { CommLinkService } from './comm-link.service';

describe('CommLinkService', () => {
  let service: CommLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
