import { TestBed } from '@angular/core/testing';

import { UserDataService } from './cliente-service.service';

describe('ClienteServiceService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
