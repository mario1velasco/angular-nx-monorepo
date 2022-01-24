import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'breakfast',
            component: BreakfastComponent,
          },
          {
            path: 'lunch',
            component: LunchComponent,
          },
          {
            path: 'dinner',
            component: DinnerComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
