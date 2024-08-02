import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [FormsModule, CommonModule], // Include CommonModule
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export default class GenerateComponent implements OnInit {
  imageUrl = '/assets/profile1.svg';
  imageUrl1 = '/assets/nike.svg';
  searchQuery: string = '';
  profiles = [
    {
      name: 'Allen Solly',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      isSelected: true
    }
  ];
  models = [
    {
      imageUrl: '/assets/nike.svg',
      name: 'Erik',
      country: 'Sweden',
      skinColor: 'Light Skin',
      eyeColor: 'Blue',
      bodyType: 'Ectomorph',
      imageType: 'Three-Quarter'
    },
    {
      imageUrl: '/assets/nike.svg',
      name: 'Erik',
      country: 'Sweden',
      skinColor: 'Light Skin',
      eyeColor: 'Blue',
      bodyType: 'Ectomorph',
      imageType: 'Three-Quarter'
    }
    // Add more dummy models as needed
  ];
  garments = [
    {
      imageUrl: '/assets/tshirt.svg',
      title: 'Summer 2024 T-Shirt',
      breadcrumb: '/Summer/Men/T-Shirts',
      tags: ['T-shirts', 'Summer', '2024']
    },
    {
      imageUrl: '/assets/tshirt.svg ',
      title: 'Summer 2024 T-Shirt',
      breadcrumb: '/Summer/Men/T-Shirts',
      tags: ['T-shirts', 'Summer', '2023']
    }
    // Add more items as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }
}
