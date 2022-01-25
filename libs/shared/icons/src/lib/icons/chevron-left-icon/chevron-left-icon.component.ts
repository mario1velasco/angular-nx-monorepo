import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-chevron-left-icon',
  templateUrl: './chevron-left-icon.component.html',
  styleUrls: ['./chevron-left-icon.component.scss'],
})
export class ChevronLeftIconComponent {
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
