import { TestBed } from '@angular/core/testing';

import { HeldDataService } from './held-data.service';

describe('HeldDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeldDataService = TestBed.get(HeldDataService);
    expect(service).toBeTruthy();
  });
});
