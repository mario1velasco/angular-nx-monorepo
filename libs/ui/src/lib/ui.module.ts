import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryFirstComponentComponent } from './library-first-component/library-first-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LibraryFirstComponentComponent
  ],
  exports: [
    LibraryFirstComponentComponent
  ],
})
export class UiModule {}
