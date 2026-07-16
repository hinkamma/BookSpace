import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type SettingsSection = 'profile' | 'preferences' | 'notifications' | 'security';

@Component({
  selector: 'app-parametre',
  imports: [RouterLink, CommonModule],
  templateUrl: './parametre.html',
  styleUrl: './parametre.css',
})
export class Parametre {
  activeSection: SettingsSection = 'profile';

  selectSection(section: SettingsSection): void {
    this.activeSection = section;
  }
}
