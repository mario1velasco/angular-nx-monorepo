import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Required } from '../../../decorators/required.decorator';

@Component({
  selector: 'Input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent {
  @Input()
  id = `input-email-${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`;
  @Input()
  placeholder = 'Write something';
  @Input()
  labelText: string | undefined;
  @Input()
  containerClass: string | undefined;
  @Input()
  @Required
  value: string | undefined;
  @Output() valueChange = new EventEmitter<string>();
  // <document-content [(view)]="view" ></document-content>
  // Is syntactic sugar for this:
  // <document-content [view]="view" (viewChange)="view=$event" ></document-content>

  constructor() {
    console.log();
  }

  onInputChange(event: Event) {
    this.valueChange.emit(this.value);
  }
}
