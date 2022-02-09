import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
  Args,
} from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';

import * as TaskStories from '../task/task.component.stories';
import { SharedIconsModule } from '@bizawaynx/shared/icons';

export default {
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule, SharedIconsModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
  title: 'TaskList',
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionsData.pinTask,
    onArchiveTask: TaskStories.actionsData.archiveTask,
  },
});

export const Default = Template.bind({});
let aaa: Partial<Args> = [];
if (TaskStories.Default.args) {
  aaa = [
    { ...TaskStories.Default.args['task'], id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args['task'], id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args['task'], id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args['task'], id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args['task'], id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args['task'], id: '6', title: 'Task 6' },
  ];
}
Default.args = {
  tasks: aaa,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args['tasks'].slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
