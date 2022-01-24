import { Component } from '@angular/core';

@Component({
  selector: 'bizawaynx-menu-entry',
  template: `<div class="remote-entry">
    <h2>Menu</h2>
    <ul>
      <li><a routerLink="breakfast">Breakfast</a></li>
      <li><a routerLink="lunch">Lunch</a></li>
      <li><a routerLink="dinner">Dinner</a></li>
    </ul>
    <router-outlet></router-outlet>
  </div>`,
  styles: [
    `
      .remote-entry {
        /* background-color: #143055;
        color: white; */
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
