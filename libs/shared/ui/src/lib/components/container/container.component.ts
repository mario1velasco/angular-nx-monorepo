import { Component, Input } from '@angular/core';

@Component({
  selector: 'Container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input()
  className = '';

  constructor() {
    console.log();
  }
}
