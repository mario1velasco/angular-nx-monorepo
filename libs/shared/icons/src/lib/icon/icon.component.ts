import { Component, Input, OnInit } from '@angular/core';
import { IconEnum, EnumUtils } from '@bizawaynx/shared/util';

@Component({
  // ! type is required
  selector: 'Icon[type]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  isFill = false;
  @Input()
  svgClass = 'h-6 w-6';
  @Input()
  type: string | undefined;

  iconEnum = IconEnum;

  constructor() {
    // this.type = IconEnum.ADD as IconType;
  }

  ngOnInit(): void {
    EnumUtils.existsOnEnum(this.type, this.iconEnum, this.constructor.name);
  }
}
