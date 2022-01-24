import { Component } from '@angular/core';

@Component({
  selector: 'bizawaynx-train-entry',
  template: `<h2>Train Vertical</h2>
    <ul>
      <li><a routerLink="booking">Booking</a></li>
      <li><a routerLink="search">Search</a></li>
    </ul>
    <router-outlet></router-outlet>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
