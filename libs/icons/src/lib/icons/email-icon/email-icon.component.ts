import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-email-icon',
  templateUrl: './email-icon.component.html',
  styleUrls: ['./email-icon.component.scss'],
})
export class EmailIconComponent {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  svgClass = 'h-6 w-6';
  @Input()
  isFill = false;

  constructor() {
    // console.log();
  }
}
