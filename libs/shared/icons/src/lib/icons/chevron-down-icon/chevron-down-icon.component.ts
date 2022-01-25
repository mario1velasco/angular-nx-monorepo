import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-chevron-down-icon',
  templateUrl: './chevron-down-icon.component.html',
  styleUrls: ['./chevron-down-icon.component.scss'],
})
export class ChevronDownIconComponent {
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
