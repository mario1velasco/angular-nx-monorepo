import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-chevron-right-icon',
  templateUrl: './chevron-right-icon.component.html',
  styleUrls: ['./chevron-right-icon.component.scss'],
})
export class ChevronRightIconComponent {
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
