import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TaskComponent, TaskListComponent],
  exports: [TaskComponent, TaskListComponent],
})
export class SharedStoryfirstModule {}
