import { Component } from '@angular/core';

@Component({
  selector: 'bizawaynx-hotel-entry',
  template: `<h2>Hotel Vertical</h2>
    <ul>
      <li><a routerLink="booking">Booking</a></li>
      <li><a routerLink="search">Search</a></li>
    </ul>
    <router-outlet></router-outlet>`,
  styles: [``],
})
export class RemoteEntryComponent {}
