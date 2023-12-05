import { TestBed } from '@angular/core/testing';

import { GetAllOffreService } from './get-all-offre.service';

describe('GetAllOffreService', () => {
  let service: GetAllOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
