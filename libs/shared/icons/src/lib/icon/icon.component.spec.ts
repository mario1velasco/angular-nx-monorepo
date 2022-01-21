import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconEnum } from '@bizawaynx/shared/util';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.type = IconEnum.ADD;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
