import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-dashboard-icon',
  templateUrl: './dashboard-icon.component.html',
  styleUrls: ['./dashboard-icon.component.scss'],
})
export class DashboardIconComponent {
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
