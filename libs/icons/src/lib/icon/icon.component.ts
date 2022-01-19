import { Component, Input, OnInit } from '@angular/core';
import { IconEnum } from '../data/enums/icon.enum';
import { IconType } from '../data/types/icon.type';

@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  // @Input() public set type(value: IconType) {
  //   console.log(value);
  // }
  @Input()
  type: string = IconEnum.ADD as IconType;

  constructor() {
    // this.type = IconEnum.ADD as IconType;
  }

  ngOnInit(): void {
    console.log(this.type);
  }
}
