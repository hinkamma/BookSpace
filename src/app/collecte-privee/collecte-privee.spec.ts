import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectePrivee } from './collecte-privee';

describe('CollectePrivee', () => {
  let component: CollectePrivee;
  let fixture: ComponentFixture<CollectePrivee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectePrivee],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectePrivee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
