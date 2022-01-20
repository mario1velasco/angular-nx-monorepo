import { Component } from '@angular/core';
import { IconEnum } from '../../../../libs/icons/src/lib/data/enums/icon.enum';
import { IconType } from '../../../../libs/icons/src/lib/data/types/icon.type';
import { IconsModule } from '@bizawaynx/icons';

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
  constructor() {
    this.type = IconEnum.ADD;
  }

  clickBtn() {
    this.isClicked = !this.isClicked;
  }
}
