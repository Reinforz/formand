import { Box } from '@mui/system';
import { Meta, Story } from '@storybook/react';

import { FieldLabel, FieldLabelProps } from '../src/components';

export default {
  title: 'Components/Form/Field label text',
  component: FieldLabel
} as Meta;

const Template: Story<FieldLabelProps> = (props) => (
  <Box width={250}>
    <FieldLabel {...props} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  name: 'username',
  label: 'Username'
};

export const Required = Template.bind({});
Required.args = {
  name: 'username',
  label: 'Username',
  required: true
};

export const Error = Template.bind({});
Error.args = {
  name: 'username',
  label: 'Username',
  error: 'Username is required'
};
