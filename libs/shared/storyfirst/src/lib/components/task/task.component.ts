/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'bizawaynx-task',
  template: `
    <div class="list-item">
      <input type="text" [value]="title" readonly="true" />
    </div>
  `,
})
export class TaskComponent {
  @Input()
  task!: Task;

  @Input()
  title!: string;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
