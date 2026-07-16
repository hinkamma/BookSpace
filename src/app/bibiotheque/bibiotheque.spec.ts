import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bibiotheque } from './bibiotheque';

describe('Bibiotheque', () => {
  let component: Bibiotheque;
  let fixture: ComponentFixture<Bibiotheque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bibiotheque],
    }).compileComponents();

    fixture = TestBed.createComponent(Bibiotheque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
