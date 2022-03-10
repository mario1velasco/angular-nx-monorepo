import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';
import { Task } from '../../../model/task.model';

export default {
  component: TaskComponent,
  title: 'TaskComponent',
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta<TaskComponent>;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  component: TaskComponent,
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  title: 'Pinned',
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  } as Task,
};

export const Archived = Template.bind({});
Archived.args = {
  title: 'Archived',
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  } as Task,
};
