import { TestBed } from '@angular/core/testing';

import { PopuUpService } from './popu-up.service';

describe('PopuUpService', () => {
  let service: PopuUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopuUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
