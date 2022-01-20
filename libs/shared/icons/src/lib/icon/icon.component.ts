import { Component, Input } from '@angular/core';
import { IconEnum } from '../data/enums/icon.enum';
import { IconType } from '../data/types/icon.type';

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
  type: string = IconEnum.ADD as IconType;

  constructor() {
    // this.type = IconEnum.ADD as IconType;
  }
}
