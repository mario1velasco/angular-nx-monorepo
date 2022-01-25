import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { SharedUiModule } from '@bizawaynx/shared/ui';
import { SharedUtilModule } from '@bizawaynx/shared/util';

@NgModule({
  declarations: [RemoteEntryComponent, BookingComponent, SearchComponent],
  imports: [
    SharedUiModule,
    SharedIconsModule,
    SharedUtilModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'booking',
            component: BookingComponent,
          },
          {
            path: 'search',
            component: SearchComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
