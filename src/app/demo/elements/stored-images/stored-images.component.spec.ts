import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredImagesComponent } from './stored-images.component';

describe('StoredImagesComponent', () => {
  let component: StoredImagesComponent;
  let fixture: ComponentFixture<StoredImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoredImagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StoredImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
