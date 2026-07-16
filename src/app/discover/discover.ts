import { Component, inject } from '@angular/core';
import { Book, FilterOption, BookCard } from '../services/book';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.html',
  styleUrls: ['./discover.css'],
})
export class Discover {
  // on injecte le service
  private readonly bookService = inject(Book);

  // on declare le filtre
  readonly filters: FilterOption[] = [
      { label: 'Tout explorer', value: 'all' },
      { label: 'Développement', value: 'developpement' },
      { label: 'Philosophie', value: 'philosophie' },
      { label: 'Science-Fiction', value: 'science-fiction' },
      { label: 'Biographies', value: 'biographies' },
      { label: 'Design & UI/UX', value: 'design' },
      { label: 'architecture', value: 'architecture' }
    ];

    // on initialie le labael filter a All
    selectedCategory: FilterOption['value'] = 'all';
    // on initialise le label section
    sectionTitle = 'Populaires ce mois-ci';

  //  on initialise le tableau d'afficharge qui est au depart a vide 
  currentBooks: BookCard[] = [];
  booksByCategory: Record<FilterOption['value'], BookCard[]> = this.bookService.booksByCategory;

  constructor() {
    this.currentBooks = this.booksByCategory.all;
  }

    selectCategory(category: FilterOption['value']): void {
      this.selectedCategory = category;
      this.currentBooks = this.booksByCategory[category];
      this.sectionTitle = this.getSectionTitle(category);
    }

    private getSectionTitle(category: FilterOption['value']): string {
      switch (category) {
        case 'developpement':
          return 'Livres de développement';
        case 'philosophie':
          return 'Livres de philosophie';
        case 'science-fiction':
          return 'Science-fiction à découvrir';
        case 'biographies':
          return 'Biographies inspirantes';
        case 'design':
          return 'Design & UX';
        default:
          return 'Populaires ce mois-ci';
      }
    }

    public totalBooks(): number {
      return this.bookService.totalBooks();
    }

    public lengthBooks(): string {
      return this.bookService.lengthBooks();
    }
}
