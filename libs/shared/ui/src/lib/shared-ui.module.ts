import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { InputEmailComponent } from './components/form/input-email/input-email.component';
import { SharedIconsModule } from '@bizawaynx/shared-icons';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, SharedIconsModule, FormsModule, BrowserModule],
  declarations: [ButtonComponent, ContainerComponent, InputEmailComponent],
  exports: [ButtonComponent, ContainerComponent, InputEmailComponent],
})
export class SharedUiModule {}
