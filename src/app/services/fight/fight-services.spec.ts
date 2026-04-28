import { TestBed } from '@angular/core/testing';

import { FightServices } from './fight-services';

describe('FightServices', () => {
  let service: FightServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
