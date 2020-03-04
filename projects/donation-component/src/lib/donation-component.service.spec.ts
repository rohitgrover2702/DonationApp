import { TestBed } from '@angular/core/testing';

import { DonationComponentService } from './donation-component.service';

describe('DonationComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationComponentService = TestBed.get(DonationComponentService);
    expect(service).toBeTruthy();
  });
});
