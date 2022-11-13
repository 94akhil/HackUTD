import { TestBed } from '@angular/core/testing';

import { EgoServiceService } from './ego-service.service';

describe('EgoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgoServiceService = TestBed.get(EgoServiceService);
    expect(service).toBeTruthy();
  });
});
