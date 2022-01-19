import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ContainerComponent],
  exports: [ButtonComponent, ContainerComponent],
})
export class UiModule {}
