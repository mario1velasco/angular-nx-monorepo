import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [RemoteEntryComponent, SearchComponent, BookingComponent],
  imports: [
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
