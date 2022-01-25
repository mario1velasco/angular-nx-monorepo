import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-cross-icon',
  templateUrl: './cross-icon.component.html',
  styleUrls: ['./cross-icon.component.scss'],
})
export class CrossIconComponent {
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
