import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputEmailComponent } from './input-email.component';

export default {
  title: 'InputEmailComponent',
  component: InputEmailComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<InputEmailComponent>;

const Template: Story<InputEmailComponent> = (args: InputEmailComponent) => ({
  component: InputEmailComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    id:  `input-email-${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`,
    placeholder:  'Write something',
}