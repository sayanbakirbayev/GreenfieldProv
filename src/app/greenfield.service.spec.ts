import { TestBed } from '@angular/core/testing';

import { GreenfieldService } from './greenfield.service';

describe('GreenfieldService', () => {
  let service: GreenfieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenfieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
