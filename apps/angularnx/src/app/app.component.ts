import { Component } from '@angular/core';
import { IconEnum, IconType } from '@bizawaynx/shared/util';
import { InputEmail } from '@bizawaynx/shared/ui';

@Component({
  selector: 'bizawaynx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: IconType;
  title = 'angularnx';
  isClicked = false;
  emailValue = '';
  iconEnum = IconEnum;
  inputEmail1: InputEmail;
  inputEmail2: InputEmail;
  constructor() {
    this.type = IconEnum.ADD;
    this.inputEmail1 = {
      id: `input-email-${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`,
      placeholder: 'Placeholder inputEmail1',
      labelText: 'My Custom label from inputEmail1',
      containerClass: 'bg-blue',
      value: this.emailValue,
    };
    this.inputEmail2 = {
      id: `input-email-${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`,
      placeholder: 'Placeholder inputEmail2',
      labelText: 'My Custom label from inputEmail2',
      containerClass: 'bg-blue',
      value: this.emailValue,
    };
  }

  clickBtn() {
    this.isClicked = !this.isClicked;
  }

  valueChange(event: any) {
    this.emailValue = event;
  }
}
