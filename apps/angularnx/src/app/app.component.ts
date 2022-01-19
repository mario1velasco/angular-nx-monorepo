import { Component } from '@angular/core';
import { IconEnum } from '../../../../libs/icons/src/enums/icon.enum';
import { IconType } from '../../../../libs/icons/src/types/icon.type';

@Component({
  selector: 'bizawaynx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: IconType;
  title = 'angularnx';
  isClicked = false;
  constructor() {
    this.type = IconEnum.ADD;
  }

  clickBtn() {
    console.log('hola');
    this.isClicked = true;
  }
}
