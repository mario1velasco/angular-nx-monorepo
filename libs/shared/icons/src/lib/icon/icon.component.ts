import { Component, Input } from '@angular/core';
import { IconEnum, IconType, Required } from '@bizawaynx/shared/util';

@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  // @Input() public set type(value: IconType) {
  //   console.log(value);
  // }
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  isFill = false;
  @Input()
  svgClass = 'h-6 w-6';
  @Input()
  @Required
  type: string | undefined;

  constructor() {
    // this.type = IconEnum.ADD as IconType;
  }
}