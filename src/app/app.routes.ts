import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Sign } from './sign/sign';
import { Books } from './books/books';
import { Discover } from './discover/discover';
import { HelpSupport } from './help-support/help-support';
import { Statistique } from './statistique/statistique';
import { Bibiotheque } from './bibiotheque/bibiotheque';

export const routes: Routes = [
  { path: '', component: Books },
  { path: 'login', component: Login },
  { path: 'sign', component: Sign },
  { path: 'discover', component: Discover },
  { path: 'help', component: HelpSupport },
  {path: 'stat', component: Statistique},
  {path: 'Bibiotheque', component: Bibiotheque},
  { path: '**', redirectTo: '' }
];