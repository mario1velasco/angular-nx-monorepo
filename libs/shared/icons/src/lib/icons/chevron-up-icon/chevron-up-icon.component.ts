import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-chevron-up-icon',
  templateUrl: './chevron-up-icon.component.html',
  styleUrls: ['./chevron-up-icon.component.scss'],
})
export class ChevronUpIconComponent {
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
