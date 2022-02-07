import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SharedIconsModule } from '@bizawaynx/shared/icons';
import { InputEmailComponent } from './input-email.component';
import { action } from '@storybook/addon-actions';
import { InputEmail } from '../../../models/input-email.model';

export default {
  title: 'InputEmailComponent',
  component: InputEmailComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputEmailComponent],
      imports: [SharedIconsModule],
    }),
  ],
} as Meta<InputEmailComponent>;

export const actionsData = {
  valueChange: action('valueChange'),
};

const Template: Story<InputEmailComponent> = (args: InputEmailComponent) => ({
  component: InputEmailComponent,
  props: {
    ...args,
    valueChange: actionsData.valueChange,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  inputEmail: {
    id: `input-email-${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`,
    placeholder: 'Write something',
    labelText: 'Label Text',
    containerClass: 'bg-blue',
    value: 'PrimaryValue',
  },
};

export const Changed = Template.bind({});
Changed.args = {
  inputEmail: {
    ...(Primary.args.inputEmail as InputEmail),
    value: 'Changed Value',
  },
  // inputEmail: {
  //   ...Primary.args.inputEmail,
  //   value: 'new value',
  // },
};
