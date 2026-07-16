import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Sign } from './sign/sign';
import { Books } from './books/books';
import { Discover } from './discover/discover';
import { HelpSupport } from './help-support/help-support';
import { Statistique } from './statistique/statistique';
import { Bibiotheque } from './bibiotheque/bibiotheque';
import { Parametre } from './parametre/parametre';
import { CollectePrivee } from './collecte-privee/collecte-privee';

export const routes: Routes = [
  { path: '', component: Books },
  { path: 'login', component: Login },
  { path: 'sign', component: Sign },
  { path: 'discover', component: Discover },
  { path: 'help', component: HelpSupport },
  {path: 'stat', component: Statistique},
  {path: 'bibiotheque', component: Bibiotheque},
  {path: 'parametre', component: Parametre},
  {path: 'collecte_privee', component: CollectePrivee},

  { path: '**', redirectTo: '' }
];