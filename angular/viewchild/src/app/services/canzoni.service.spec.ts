import { TestBed } from '@angular/core/testing';

import { CanzoniService } from './canzoni.service';

describe('CanzoniService', () => {
  let service: CanzoniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanzoniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
