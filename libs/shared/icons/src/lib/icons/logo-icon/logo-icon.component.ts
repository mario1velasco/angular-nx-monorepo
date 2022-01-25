import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
})
export class LogoIconComponent {
  // @Input()
  viewBox = '0 0 300 300';
  // @Input()
  svgClass = 'h-10 w-10';
  @Input()
  isFill = false;
  constructor() {
    // sda
  }
}
