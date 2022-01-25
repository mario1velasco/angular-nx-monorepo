import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContainerComponent } from './container.component';

export default {
  title: 'ContainerComponent',
  component: ContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContainerComponent>;

const Template: Story<ContainerComponent> = (args: ContainerComponent) => ({
  component: ContainerComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    className:  '',
}