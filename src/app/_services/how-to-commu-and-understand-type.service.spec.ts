import { TestBed } from '@angular/core/testing';

import { HowToCommuAndUnderstandTypeService } from './how-to-commu-and-understand-type.service';

describe('HowToCommuAndUnderstandTypeService', () => {
  let service: HowToCommuAndUnderstandTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowToCommuAndUnderstandTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
