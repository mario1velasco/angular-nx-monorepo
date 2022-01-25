import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { BellIconComponent } from './icons/bell-icon/bell-icon.component';
import { EmailIconComponent } from './icons/email-icon/email-icon.component';
import { SharedUtilModule } from '@bizawaynx/shared/util';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { CrossIconComponent } from './icons/cross-icon/cross-icon.component';
import { ChevronLeftIconComponent } from './icons/chevron-left-icon/chevron-left-icon.component';
import { ChevronRightIconComponent } from './icons/chevron-right-icon/chevron-right-icon.component';
import { ChevronUpIconComponent } from './icons/chevron-up-icon/chevron-up-icon.component';
import { ChevronDownIconComponent } from './icons/chevron-down-icon/chevron-down-icon.component';
import { SearchIconComponent } from './icons/search-icon/search-icon.component';
import { DashboardIconComponent } from './icons/dashboard-icon/dashboard-icon.component';
import { HotelIconComponent } from './icons/hotel-icon/hotel-icon.component';
import { TrainIconComponent } from './icons/train-icon/train-icon.component';

@NgModule({
  imports: [CommonModule, SharedUtilModule],
  declarations: [
    IconComponent,
    AddIconComponent,
    BellIconComponent,
    EmailIconComponent,
    LogoIconComponent,
    CrossIconComponent,
    ChevronLeftIconComponent,
    ChevronRightIconComponent,
    ChevronUpIconComponent,
    ChevronDownIconComponent,
    SearchIconComponent,
    DashboardIconComponent,
    HotelIconComponent,
    TrainIconComponent,
  ],
  exports: [IconComponent],
})
export class SharedIconsModule {}
