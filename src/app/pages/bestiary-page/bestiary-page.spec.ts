import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaryPage } from './bestiary-page';

describe('BestiaryPage', () => {
  let component: BestiaryPage;
  let fixture: ComponentFixture<BestiaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestiaryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BestiaryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
