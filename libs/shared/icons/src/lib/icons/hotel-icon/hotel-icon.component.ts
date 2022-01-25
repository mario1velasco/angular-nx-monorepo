import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-hotel-icon',
  templateUrl: './hotel-icon.component.html',
  styleUrls: ['./hotel-icon.component.scss'],
})
export class HotelIconComponent {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  svgClass = 'h-6 w-6';
  @Input()
  isFill = false;
  constructor() {
    // sda
  }
}
