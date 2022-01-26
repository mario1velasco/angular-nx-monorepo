import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedIconsModule],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  className: 'btn',
  disabled: true,
};
