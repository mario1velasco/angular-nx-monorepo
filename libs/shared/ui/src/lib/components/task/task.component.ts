import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconEnum } from '@bizawaynx/shared/util';

@Component({
  selector: 'bizawaynx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: any;

  @Output()
  pinTask = new EventEmitter<Event>();

  @Output()
  archiveTask = new EventEmitter<Event>();

  iconEnum = IconEnum;
  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.pinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.archiveTask.emit(id);
  }

  isPinned(state: string) {
    return state !== 'TASK_PINNED' ? true : false;
  }
}
