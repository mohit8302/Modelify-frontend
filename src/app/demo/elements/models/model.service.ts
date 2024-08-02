import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor() {}

  getModelData(): Observable<any> {
    const data = {
      folderPath: '/Models/Swedish',
      imageUrl: '/assets/nike.svg',
      name: 'Erik',
      country: 'Sweden',
      skinColor: 'Light Skin',
      eyeColor: 'Blue',
      bodyType: 'Ectomorph',
      imageType: 'Three-Quarter',
      gender: 'Male',
      clothingType: 'Jackets',
      studio: 'Studio'
    };
    return of(data);
  }
}
