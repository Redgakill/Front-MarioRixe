import { TestBed } from '@angular/core/testing';

import { CharacterServices } from './character-services';

describe('CharacterServices', () => {
  let service: CharacterServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
