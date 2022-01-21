import { Component } from '@angular/core';
import { IconEnum, IconType } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: IconType;
  title = 'angularnx';
  isClicked = false;
  emailValue: string | undefined;
  iconEnum = IconEnum;
  constructor() {
    this.type = IconEnum.ADD;
  }

  clickBtn() {
    this.isClicked = !this.isClicked;
  }
}
