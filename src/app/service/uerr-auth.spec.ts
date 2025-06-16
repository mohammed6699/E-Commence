import { TestBed } from '@angular/core/testing';

import { UerrAuth } from './uerr-auth';

describe('UerrAuth', () => {
  let service: UerrAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UerrAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
