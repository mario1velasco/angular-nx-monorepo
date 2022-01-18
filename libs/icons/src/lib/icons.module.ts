import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { AddIconComponent } from './add-icon/add-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IconComponent, AddIconComponent],
  exports: [IconComponent],
})
export class IconsModule {}
