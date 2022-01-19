import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss'],
})
export class AddIconComponent {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  svgClass = 'h-6 w-6';
  @Input()
  isFill = false;

  constructor() {
    // this.viewBox = '0 0 20 20';
    // this.svgClass = 'stroke-current';
  }
}
