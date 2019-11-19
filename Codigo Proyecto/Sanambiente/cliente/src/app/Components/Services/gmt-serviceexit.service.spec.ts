import { TestBed } from '@angular/core/testing';

import { GmtServiceexitService } from './gmt-serviceexit.service';

describe('GmtServiceexitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmtServiceexitService = TestBed.get(GmtServiceexitService);
    expect(service).toBeTruthy();
  });
});
