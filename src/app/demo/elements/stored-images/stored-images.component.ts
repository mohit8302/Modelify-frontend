import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Product {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-stored-images',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stored-images.component.html',
  styleUrl: './stored-images.component.scss'
})
export default class StoredImagesComponent {
  imageUrl = '/assets/nike.svg';

  searchQuery: string = '';
  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }
  products: Product[] = [
    {
      name: 'U.S. POLO ASSN.',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: '/assets/nike.svg'
    },
    {
      name: 'Pepe Jeans',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: '/assets/nike.svg'
    },
    {
      name: 'Allen Solly',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: '/assets/nike.svg'
    }
    // Add more products as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
