import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, SearchBar, RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  private readonly router = inject(Router);
  protected readonly authRoutes = ['/login', '/sign','/help','/stat','/Bibiotheque'];
  protected readonly currentUrl = signal(this.router.url);

  protected quantite = signal(1);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects || event.url);
      }
    });
  }

  protected shouldShowLayout(): boolean {
    return !this.authRoutes.includes(this.currentUrl());
  }
}
