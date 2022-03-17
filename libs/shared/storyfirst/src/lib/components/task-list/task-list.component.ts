/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'bizawaynx-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  /**
   * Propiedad del componente para definir el orden de las tareas.
   */
  tasksInOrder: Task[] = [];

  /** Comprueba si está en estado de carga */
  @Input() loading = false;

  /** Evento para cambiar la tarea a anclada */
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Evento para cambiar la tarea a archivada */
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
  }
}
