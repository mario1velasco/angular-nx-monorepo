import { Component } from '@angular/core';
import { IconEnum } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isList = 0;
  isMenu = false;
  isSearch = false;

  iconEnum = IconEnum;
  constructor() {}

  clickMenu(isMenu: boolean) {
    this.isMenu = isMenu;
  }

  setIsList(isList: number) {
    console.log('SET = ', isList);

    this.isList = isList;
  }
}
