import { TestBed } from '@angular/core/testing';

import { EmployeeRestService } from './employee-rest.service';

describe('EmployeeRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeRestService = TestBed.get(EmployeeRestService);
    expect(service).toBeTruthy();
  });
});
