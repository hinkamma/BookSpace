import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Book, BookCard } from '../services/book';

@Component({
  selector: 'app-bibiotheque',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './bibiotheque.html',
  styleUrls: ['./bibiotheque.css'],
})
export class Bibiotheque {
  private readonly bookService = inject(Book);
  readonly books: BookCard[] = Object.values(this.bookService.booksByCategory).flat();

  // filtre local: 'all' affiche tout, les autres sont des états approximatifs
  selectedFilter: 'all' | 'enCours' | 'done' | 'todo' = 'all';
  displayedBooks: BookCard[] = [...this.books];

  constructor() {}

  selectFilter(filter: 'all' | 'enCours' | 'done' | 'todo'): void {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.displayedBooks = [...this.books];
      return;
    }

    // Comme le service ne contient pas de statut de lecture, on segmente visuellement la liste
    const total = this.books.length;
    if (total === 0) {
      this.displayedBooks = [];
      return;
    }

    if (filter === 'enCours') {
      this.displayedBooks = this.books.slice(0, Math.max(1, Math.ceil(total * 0.25)));
    } else if (filter === 'done') {
      this.displayedBooks = this.books.slice(Math.ceil(total * 0.25), Math.ceil(total * 0.7));
    } else {
      this.displayedBooks = this.books.slice(Math.ceil(total * 0.7));
    }
  }

  ngOnInit() {
    console.log('Bibiotheque component initialized');
    console.log('Books loaded:', this.books);
  }
}