import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Country {
  name: {
    common: string;
  };
}

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, HttpClientModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {
  imageUrl = '/assets/nike.svg';
  query = '';
  suggestions: string[] = [];

  constructor(private http: HttpClient) {}

  fetchCountries(query: string) {
    if (query.length > 2) {
      this.http.get<Country[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
        this.suggestions = data.map((country) => country.name.common).filter((name) => name.toLowerCase().includes(query.toLowerCase()));
      });
    } else {
      this.suggestions = [];
    }
  }

  selectCountry(country: string) {
    this.query = country;
    this.suggestions = [];
  }

  clearInput() {
    this.query = '';
    this.suggestions = [];
  }
}
