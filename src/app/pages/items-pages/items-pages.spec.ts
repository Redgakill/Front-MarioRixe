import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPages } from './items-pages';

describe('ItemsPages', () => {
  let component: ItemsPages;
  let fixture: ComponentFixture<ItemsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsPages],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
