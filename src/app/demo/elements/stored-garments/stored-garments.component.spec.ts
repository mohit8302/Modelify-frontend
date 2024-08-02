import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredGarmentsComponent } from './stored-garments.component';

describe('StoredGarmentsComponent', () => {
  let component: StoredGarmentsComponent;
  let fixture: ComponentFixture<StoredGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoredGarmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
