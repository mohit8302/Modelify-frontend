import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModelService } from './model.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [MatButtonModule, NgSelectModule, MatIconModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class ModelsComponent implements OnInit {
  imageUrl = '/assets/nike.svg';
  modelData: any = {};

  genderItems = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Other' }
  ];
  countryItems = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'UK' },
    { id: 1, name: 'India' },
    { id: 2, name: 'Sweden' },
    { id: 3, name: 'Scotland' }
  ];
  bodyTypeItems = [
    { id: 1, name: 'Ectomorph' },
    { id: 2, name: 'Mesomorph' },
    { id: 3, name: 'Endomorph' },
    { id: 4, name: 'Triangle' },
    { id: 5, name: 'Inverted Triangle' },
    { id: 6, name: 'Athletic' },
    { id: 7, name: 'Oval' },
    { id: 8, name: 'Diamond' },
    { id: 9, name: 'Hourglass' }
  ];
  skinColorItems = [
    { id: 1, name: 'Fair Skin' },
    { id: 2, name: 'Light Skin' },
    { id: 3, name: 'Medium Skin' },
    { id: 4, name: 'Olive Skin' },
    { id: 5, name: 'Brown Skin' },
    { id: 6, name: 'Dark Brown Skin' },
    { id: 7, name: 'Black Skin' }
  ];

  eyeColorItems = [
    { id: 1, name: 'Blue' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Brown' },
    { id: 4, name: 'Hazel' },
    { id: 5, name: 'Amber' },
    { id: 6, name: 'Gray' },
    { id: 7, name: 'Vilot' },
    { id: 8, name: 'Heterochromia' }
  ];

  selectedGender = null;
  selectedCountry = null;
  selectedBodyType = null;
  selectedSkinColor = null;
  selectedEyeColor = null;

  constructor(private modelService: ModelService) {}

  ngOnInit() {
    this.modelService.getModelData().subscribe((data) => {
      this.modelData = data;
    });
  }
}
