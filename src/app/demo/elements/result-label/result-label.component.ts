import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-result-label',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule], // Add CommonModule and FormsModule to imports array
  templateUrl: './result-label.component.html',
  styleUrls: ['./result-label.component.scss']
})
export default class ResultLabelComponent {
  imageUrl = '/assets/profile1.svg';
  products: any[] = [];
  newProduct: any = { name: '', description: '' };

  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  focusDescription() {
    this.descriptionInput.nativeElement.focus();
  }

  addProduct() {
    this.products.push({ ...this.newProduct });
    console.log('Product added:', this.newProduct);
    this.newProduct = { name: '', description: '' };
  }
}
