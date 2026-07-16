import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book, BookCard } from '../services/book';
import { RouterLink } from '@angular/router';

interface FeaturedBookItem {
  category: string;
  book: BookCard;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  private readonly bookService = inject(Book);

  featuredBooks: FeaturedBookItem[] = [];
  editingBook: FeaturedBookItem | null = null;
  deleteTarget: FeaturedBookItem | null = null;
  editForm = { title: '', author: '' };
  toastMessage = '';
  showEditPanel = false;
  showDeleteConfirm = false;

  constructor() {
    this.featuredBooks = Object.entries(this.bookService.booksByCategory)
      .filter(([category]) => category !== 'all')
      .map(([category, books]) => ({ category, book: books[0] }))
      .filter((item): item is FeaturedBookItem => !!item.book);
  }

  openEditPanel(item: FeaturedBookItem): void {
    this.editingBook = item;
    this.editForm = {
      title: item.book.title,
      author: item.book.author,
    };
    this.showEditPanel = true;
    this.showDeleteConfirm = false;
  }

  saveEdit(): void {
    if (!this.editingBook) {
      return;
    }

    this.editingBook.book.title = this.editForm.title;
    this.editingBook.book.author = this.editForm.author;
    this.showEditPanel = false;
    this.toastMessage = `Le livre « ${this.editingBook.book.title} » a bien été mis à jour.`;
    this.editingBook = null;
    setTimeout(() => {
      this.toastMessage = '';
    }, 2200);
  }

  openDeleteConfirm(item: FeaturedBookItem): void {
    this.deleteTarget = item;
    this.showDeleteConfirm = true;
    this.showEditPanel = false;
  }

  confirmDelete(): void {
    if (!this.deleteTarget) {
      return;
    }

    this.featuredBooks = this.featuredBooks.filter(item => item !== this.deleteTarget);
    this.toastMessage = `Le livre « ${this.deleteTarget.book.title} » a été supprimé.`;
    this.showDeleteConfirm = false;
    this.deleteTarget = null;
    setTimeout(() => {
      this.toastMessage = '';
    }, 2200);
  }

  closePanels(): void {
    this.showEditPanel = false;
    this.showDeleteConfirm = false;
    this.editingBook = null;
    this.deleteTarget = null;
  }
}
