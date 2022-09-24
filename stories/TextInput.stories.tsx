import { Meta, Story } from '@storybook/react';
import { Formik, FormikConfig } from 'formik';
import { z } from 'zod';

import { TextInput, TextInputProps } from '../src/components';
import { toFormikValidationSchema } from './helpers';

export default {
  title: 'Components/Form/Text Input',
  component: TextInput
} as Meta;

const Template: Story<
{ textInputProps: TextInputProps } & {
  formikProps?: Partial<FormikConfig<{ name: string }>>;
}
> = ({ textInputProps, formikProps }) => (
  <Formik
    initialValues={{
      name: 'John Doe'
    }}
    onSubmit={() => { }}
    validateOnMount
    {...formikProps}
  >
    <TextInput {...textInputProps} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  textInputProps: {
    name: 'name'
  }
};

export const WithLabelPlaceholderHelperText = Template.bind({});
WithLabelPlaceholderHelperText.storyName = 'Label + Placeholder + Helper text';

WithLabelPlaceholderHelperText.args = {
  textInputProps: {
    name: 'name',
    label: 'Full name',
    placeholder: 'John Doe',
    helperText: 'First and last name separated by space'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  textInputProps: {
    name: 'name',
    disabled: true
  }
};

export const RequiredFieldError = Template.bind({});
RequiredFieldError.storyName = 'Required field error';
RequiredFieldError.args = {
  textInputProps: {
    name: 'name',
    label: 'Full name',
    placeholder: 'John Doe',
    helperText: 'First and last name separated by space',
    required: true
  },
  formikProps: {
    initialValues: {
      name: ''
    },
    initialTouched: {
      name: true
    },
    validationSchema: toFormikValidationSchema(
      z
        .object({
          name: z.string()
        })
        .strict()
    )
  }
};

export const InvalidFieldInputError = Template.bind({});
InvalidFieldInputError.storyName = 'Invalid field input error';
InvalidFieldInputError.args = {
  textInputProps: {
    name: 'name',
    label: 'Full name',
    placeholder: 'John Doe',
    helperText: 'First and last name separated by space',
    required: true
  },
  formikProps: {
    initialValues: {
      name: 123 as any
    },
    initialTouched: {
      name: true
    },
    validationSchema: toFormikValidationSchema(
      z
        .object({
          name: z.string({ invalid_type_error: 'String expected' })
        })
        .strict()
    )
  }
};
