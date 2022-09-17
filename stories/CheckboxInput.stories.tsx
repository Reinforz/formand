import { Meta, Story } from '@storybook/react';
import { Formik, FormikConfig } from 'formik';

import { CheckboxInput, CheckboxInputProps } from '../src/components';

export default {
  title: 'Components/Form/Checkbox Input',
  component: CheckboxInput
} as Meta;

const Template: Story<
  { checkboxInputProps: CheckboxInputProps } & {
    formikProps?: Partial<FormikConfig<{ name: string }>>;
  }
> = ({ checkboxInputProps, formikProps }) => {
  return (
    <Formik
      initialValues={{
        name: 'John Doe'
      }}
      onSubmit={() => {}}
      validateOnMount
      {...formikProps}
    >
      <CheckboxInput {...checkboxInputProps} />
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  checkboxInputProps: {
    name: 'developer',
    label: 'Developer'
  }
};

export const WithLabelPlaceholderHelperText = Template.bind({});
WithLabelPlaceholderHelperText.storyName = 'Label + Placeholder + Helper text';

WithLabelPlaceholderHelperText.args = {
  checkboxInputProps: {
    name: 'developer',
    label: 'Developer',
    helperText: 'Are you a developer?'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  checkboxInputProps: {
    name: 'name',
    label: 'Developer',
    disabled: true
  }
};
