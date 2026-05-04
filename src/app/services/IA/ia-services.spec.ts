import { TestBed } from '@angular/core/testing';

import { IAServices } from './ia-services';

describe('IAServices', () => {
  let service: IAServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
