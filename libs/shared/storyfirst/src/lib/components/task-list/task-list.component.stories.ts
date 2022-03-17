import { CommonModule } from '@angular/common';
import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from './task-list.component';
import * as TaskStories from '../task/task.component.stories';
import { Task } from '../../../model/task.model';

export default {
  title: 'TaskListComponent',
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      //👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
    //👇 Envuelve nuestras historias con un decorador
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
} as Meta<TaskListComponent>;

const Template: Story<TaskListComponent> = (args: TaskListComponent) => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionsData.onPinTask,
    onArchiveTask: TaskStories.actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      ...(TaskStories as any).Default.args.task,
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      ...(TaskStories as any).Default.args.task,
      id: '2',
      title: 'Task 2',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      ...(TaskStories as any).Default.args.task,
      id: '3',
      title: 'Task 3',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      ...(TaskStories as any).Default.args.task,
      id: '4',
      title: 'Task 4',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      ...(TaskStories as any).Default.args.task,
      id: '5',
      title: 'Task 5',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      ...(TaskStories as any).Default.args.task,
      id: '6',
      title: 'Task 6',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Dar forma a las historias a través de la composición de argumentos.
  // Datos heredados que provienen de la historia predeterminada.
  tasks: [
    ...(Default.args.tasks as Task[]).slice(0, 5),
    {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED',
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Dar forma a las historias a través de la composición de argumentos.
  // Datos heredados que provienen de la historia de carga.
  ...Loading.args,
  loading: false,
};
