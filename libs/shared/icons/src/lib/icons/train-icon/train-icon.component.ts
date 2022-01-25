import { Component, Input } from '@angular/core';

@Component({
  selector: 'bizawaynx-train-icon',
  templateUrl: './train-icon.component.html',
  styleUrls: ['./train-icon.component.scss'],
})
export class TrainIconComponent {
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
