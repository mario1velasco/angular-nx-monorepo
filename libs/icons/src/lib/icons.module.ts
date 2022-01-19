import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { BellIconComponent } from './icons/bell-icon/bell-icon.component';
import { EmailIconComponent } from './icons/email-icon/email-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IconComponent, AddIconComponent, BellIconComponent, EmailIconComponent],
  exports: [IconComponent],
})
export class IconsModule {}
