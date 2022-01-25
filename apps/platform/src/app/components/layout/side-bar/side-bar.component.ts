import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconEnum } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input()
  isMenu: string | undefined;
  @Output() isMenuChange = new EventEmitter<string>();
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
