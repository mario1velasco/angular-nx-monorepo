import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryFirstComponentComponent } from './library-first-component/library-first-component.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LibraryFirstComponentComponent, ButtonComponent],
  exports: [LibraryFirstComponentComponent, ButtonComponent],
})
export class UiModule {}
