import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainIconComponent } from './train-icon.component';

describe('TrainIconComponent', () => {
  let component: TrainIconComponent;
  let fixture: ComponentFixture<TrainIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
