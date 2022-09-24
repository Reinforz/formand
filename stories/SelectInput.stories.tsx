import { Meta, Story } from '@storybook/react';
import { Formik } from 'formik';

import { SelectInput, SelectInputProps } from '../src/components';

export default {
  title: 'Components/Form/Select Input',
  component: SelectInput
} as Meta;

const Template: Story<SelectInputProps> = (props) => (
  <Formik
    initialValues={{
      role: 'user'
    }}
    onSubmit={() => {}}
    validateOnMount
  >
    <SelectInput {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'role',
  label: 'Role',
  helperText: 'Select your role',
  values: [
    {
      label: 'Admin',
      value: 'admin'
    },
    {
      label: 'User',
      value: 'user'
    }
  ]
};
