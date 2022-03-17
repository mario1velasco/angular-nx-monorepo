/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'bizawaynx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  task!: Task;

  @Input()
  title!: string;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
