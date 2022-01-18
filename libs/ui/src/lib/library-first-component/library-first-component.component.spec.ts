import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFirstComponentComponent } from './library-first-component.component';

describe('LibraryFirstComponentComponent', () => {
  let component: LibraryFirstComponentComponent;
  let fixture: ComponentFixture<LibraryFirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryFirstComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
