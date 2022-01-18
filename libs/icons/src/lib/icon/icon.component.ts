import { Component, Input, OnInit } from '@angular/core';
import { IconEnum } from '../../enums/icon.enum';
import { IconType } from '../../types/icon.type';

@Component({
  selector: 'bizawaynx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  type: string = IconEnum.ADD as IconType;

  constructor() {
    // this.type = IconEnum.ADD as IconType;
  }

  ngOnInit(): void {
    console.log(this.type);
  }
}
