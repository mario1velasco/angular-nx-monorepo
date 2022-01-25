import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DividerComponent } from './divider.component';

export default {
  title: 'DividerComponent',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DividerComponent>;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  component: DividerComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}