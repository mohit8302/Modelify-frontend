import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stored-garments',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './stored-garments.component.html',
  styleUrl: './stored-garments.component.scss'
})
export default class StoredGarmentsComponent {
  folders = [{ name: 'Summer 2024' }, { name: 'Winter 2024' }, { name: 'Winter 2023' }, { name: 'Spring 2023' }];

  garments = [
    {
      imageUrl: '/assets/tshirt.svg ',
      name: 'Summer 2024 T-Shirt',
      tags: ['Cotton', 'Casual', 'Summer']
    }
  ];
}
