import { TestBed } from '@angular/core/testing';

import { GmtServiceService } from './gmt-service.service';

describe('GmtServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmtServiceService = TestBed.get(GmtServiceService);
    expect(service).toBeTruthy();
  });
});
