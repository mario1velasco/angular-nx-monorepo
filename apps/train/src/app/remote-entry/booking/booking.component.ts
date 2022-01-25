import { Component, OnInit } from '@angular/core';
import { IconEnum } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  enum = IconEnum;
}
