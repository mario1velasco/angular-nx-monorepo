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
  constructor() {
    this.type = IconEnum.ADD;
  }
}
