import { Injectable } from '@angular/core';

export interface FilterOption {
  label: string;
  // ici en dessous du code nous avons definir un type literal cest a dire a une proprieté on passe plutot une valeur plutot quun type
  value: 'all' | 'developpement' | 'philosophie' | 'science-fiction' | 'biographies' | 'design' | 'architecture';
}

export interface BookCard {
  title: string;
  author: string;
  popularity: string;
  readingTime: string;
}


@Injectable({
  providedIn: 'root',
})

export class Book {
  public readonly booksByCategory: Record<FilterOption['value'], BookCard[]> = 
  {
    all: [
      { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', popularity: '#1 des tendances', readingTime: '5h' },
      { title: 'Le Mythe de Sisyphe', author: 'Albert Camus', popularity: 'En hausse', readingTime: '3h' },
      { title: "Don't Make Me Think", author: 'Steve Krug', popularity: 'Pépite', readingTime: '4h' },
    ],
    developpement: [
      { title: 'Refactoring', author: 'Martin Fowler', popularity: 'Nouveau', readingTime: '6h' },
      { title: 'Clean Code', author: 'Robert C. Martin', popularity: 'Très demandé', readingTime: '4h' },
      { title: 'You Don\'t Know JS', author: 'Kyle Simpson', popularity: 'À la mode', readingTime: '5h' },
    ],
    philosophie: [
      { title: 'Les Misérables', author: 'Victor Hugo', popularity: 'Classique', readingTime: '8h' },
      { title: 'L\'Être et le Néant', author: 'Jean-Paul Sartre', popularity: 'Réflexion', readingTime: '7h' },
      { title: 'La Nausée', author: 'Jean-Paul Sartre', popularity: 'Inspirant', readingTime: '4h' },
    ],
    'science-fiction': [
      { title: 'Dune', author: 'Frank Herbert', popularity: 'Culte', readingTime: '6h' },
      { title: 'Neuromancer', author: 'William Gibson', popularity: 'Iconique', readingTime: '5h' },
      { title: 'Fondation', author: 'Isaac Asimov', popularity: 'Classique', readingTime: '4h' },
    ],
    biographies: [
      { title: 'Becoming', author: 'Michelle Obama', popularity: 'Inspirant', readingTime: '5h' },
      { title: 'Steve Jobs', author: 'Walter Isaacson', popularity: 'Écouté', readingTime: '4h' },
      { title: 'The Diary of a Young Girl', author: 'Anne Frank', popularity: 'Touchant', readingTime: '3h' },
    ],
    design: [
      { title: 'The Design of Everyday Things', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'Atomic Design', author: 'Brad Frost', popularity: 'Référentiel', readingTime: '4h' },
      { title: 'Hooked', author: 'Nir Eyal', popularity: 'À découvrir', readingTime: '3h' },
    ],
    architecture: [
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
      { title: 'The architecte of Everyday ', author: 'Don Norman', popularity: 'Essentiel', readingTime: '5h' },
    ],
  };


   public totalBooks(): number {
    return Object.values(this.booksByCategory).reduce((sum, books) => sum + books.length, 0);
  }

  public lengthBooks(): string {
    const total = this.totalBooks();
    return total > 1 ? `${total} nouveaux livres ajoutés` : `${total} livre ajouté`;
  }

}
