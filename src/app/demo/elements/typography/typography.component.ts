import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; // Ensure MatDialog is imported

import { PopUpComponent } from '../pop-up/pop-up.component';

interface Country {
  name: {
    common: string;
  };
}

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, HttpClientModule, MatDialogModule, PopUpComponent], // Add MatDialogModule here
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {
  imageUrl = '/assets/nike.svg';
  query = '';
  suggestions: string[] = [];
  highlightedIndex: number = -1;

  constructor(private http: HttpClient, private dialogRef: MatDialog, public dialog: MatDialog) {}

  fetchCountries(query: string) {
    if (query.length > 1) {
      this.http.get<Country[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
        this.suggestions = data.map((country) => country.name.common).filter((name) => name.toLowerCase().includes(query.toLowerCase()));
      });
    } else {
      this.suggestions = [];
    }
    this.highlightedIndex = -1; // Reset highlighted index
  }

  selectCountry(country: string) {
    this.query = country;
    this.suggestions = [];
  }

  clearInput() {
    this.query = '';
    this.suggestions = [];
    this.highlightedIndex = -1; // Reset highlighted index
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.suggestions.length === 0) {
      return;
    }

    if (event.key === 'ArrowDown') {
      // Navigate down
      this.highlightedIndex = (this.highlightedIndex + 1) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      // Navigate up
      this.highlightedIndex = (this.highlightedIndex - 1 + this.suggestions.length) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'Enter') {
      // Select highlighted suggestion
      if (this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
        this.selectCountry(this.suggestions[this.highlightedIndex]);
        event.preventDefault();
      }
    }
  }
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
  }
}
