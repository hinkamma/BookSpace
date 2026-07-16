import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Book, BookCard } from '../services/book';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  private readonly bookService = inject(Book);

  readonly featuredBooks: Array<{ category: string; book: BookCard }> = Object.entries(this.bookService.booksByCategory)
    .filter(([category]) => category !== 'all')
    .map(([category, books]) => ({ category, book: books[0] }))
    .filter(item => !!item.book);
}
