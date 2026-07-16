import { Component, inject } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Book, BookCard } from '../services/book';

@Component({
  selector: 'app-bibiotheque',
  standalone: true,
  imports: [RouterLink, NgFor, NgForOf],
  templateUrl: './bibiotheque.html',
  styleUrls: ['./bibiotheque.css'],
})
export class Bibiotheque {
  private readonly bookService = inject(Book);
  readonly books: BookCard[] = Object.values(this.bookService.booksByCategory).flat();

  constructor() {
    
  }

  ngOnInit() {
    console.log('Bibiotheque component initialized');
    console.log('Books loaded:', this.books);
  }
}