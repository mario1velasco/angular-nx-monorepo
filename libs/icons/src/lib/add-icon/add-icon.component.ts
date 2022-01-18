import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss'],
})
export class AddIconComponent {
  @Input()
  viewBox = '0 0 20 20';
  svgClass = 'stroke-current';

  constructor() {
    // this.viewBox = '0 0 20 20';
    // this.svgClass = 'stroke-current';
  }
}
