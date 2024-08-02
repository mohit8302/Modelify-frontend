import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGarmentsComponent } from './upload-garments.component';

describe('UploadGarmentsComponent', () => {
  let component: UploadGarmentsComponent;
  let fixture: ComponentFixture<UploadGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadGarmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
