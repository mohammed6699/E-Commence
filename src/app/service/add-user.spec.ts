import { TestBed } from '@angular/core/testing';

import { AddUser } from './add-user';

describe('AddUser', () => {
  let service: AddUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
