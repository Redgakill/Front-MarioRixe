import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightPage } from './fight-page';

describe('FightPage', () => {
  let component: FightPage;
  let fixture: ComponentFixture<FightPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FightPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
