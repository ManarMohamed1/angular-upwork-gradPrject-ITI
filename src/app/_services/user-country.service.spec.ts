import { TestBed } from '@angular/core/testing';

import { UserCountryService } from './user-country.service';

describe('UserCountryService', () => {
  let service: UserCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
