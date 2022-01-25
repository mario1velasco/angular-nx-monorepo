import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelIconComponent } from './hotel-icon.component';

describe('HotelIconComponent', () => {
  let component: HotelIconComponent;
  let fixture: ComponentFixture<HotelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
