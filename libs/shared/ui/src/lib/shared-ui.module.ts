import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { InputEmailComponent } from './components/form/input-email/input-email.component';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUtilModule } from '@bizawaynx/shared/util';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  imports: [
    CommonModule,
    SharedIconsModule,
    FormsModule,
    BrowserModule,
    SharedUtilModule,
    SharedIconsModule,
  ],
  declarations: [
    ButtonComponent,
    ContainerComponent,
    InputEmailComponent,
    DividerComponent,
  ],
  exports: [
    ButtonComponent,
    ContainerComponent,
    InputEmailComponent,
    DividerComponent,
  ],
})
export class SharedUiModule {}
