import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Books } from './books';

describe('Books', () => {
  let component: Books;
  let fixture: ComponentFixture<Books>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Books],
    }).compileComponents();

    fixture = TestBed.createComponent(Books);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the edit panel with the selected book values', () => {
    const selectedItem = component.featuredBooks[0];

    component.openEditPanel(selectedItem);

    expect(component.editingBook).toEqual(selectedItem);
    expect(component.editForm.title).toBe(selectedItem.book.title);
    expect(component.editForm.author).toBe(selectedItem.book.author);
  });

  it('should remove the selected book and show a toast after confirmation', () => {
    const selectedItem = component.featuredBooks[0];

    component.openDeleteConfirm(selectedItem);
    component.confirmDelete();

    expect(component.featuredBooks.some(item => item.book.title === selectedItem.book.title)).toBeFalsy();
    expect(component.toastMessage).toContain('supprimé');
  });
});
