import { TestBed } from '@angular/core/testing';

import { TourStandService } from './tour-stand.service';

describe('TourStandService', () => {
  let service: TourStandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourStandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
