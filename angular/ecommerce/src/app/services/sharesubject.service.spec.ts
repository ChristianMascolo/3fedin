import { TestBed } from '@angular/core/testing';

import { SharesubjectService } from './sharesubject.service';

describe('SharesubjectService', () => {
  let service: SharesubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharesubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
