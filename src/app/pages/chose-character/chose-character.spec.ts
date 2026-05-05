import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseCharacter } from './chose-character';

describe('ChoseCharacter', () => {
  let component: ChoseCharacter;
  let fixture: ComponentFixture<ChoseCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoseCharacter],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoseCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
