import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconEnum } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input()
  isMenu: string | undefined;
  @Output() isMenuChange = new EventEmitter<string>();
  // @Input()
  // isMenu = false;
  isList = 0;
  isSearch = false;

  iconEnum = IconEnum;
  constructor() {
    //
  }

  clickMenu(isMenu: string) {
    this.isMenu = isMenu;
    this.isMenuChange.emit(this.isMenu);
  }

  setIsList(isList: number) {
    this.isList = isList;
  }
}
