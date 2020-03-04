import { TestBed } from '@angular/core/testing';

import { AuthNewService } from './auth-new.service';

describe('AuthNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthNewService = TestBed.get(AuthNewService);
    expect(service).toBeTruthy();
  });
});
