import { Meta, Story } from '@storybook/react';
import { Formik, FormikConfig } from 'formik';
import { z } from 'zod';

import PasswordInput from '../src/components/PasswordInput';
import { TextInputProps } from '../src/components/TextInput';
import { toFormikValidationSchema } from './helpers';

export default {
  title: 'Components/Form/Password Input',
  component: PasswordInput
} as Meta;


const Template: Story<
{ passwordInputProps: TextInputProps } & {
  formikProps?: Partial<FormikConfig<{ password: string }>>;
}
> = ({ passwordInputProps, formikProps }) => (
  <Formik
    initialValues={{
      password: ''
    }}
    onSubmit={() => {}}
    validateOnMount
    {...formikProps}
  >
    <PasswordInput {...passwordInputProps} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  passwordInputProps: {
    name: 'password',
    label: 'Password',
    placeholder: '**********',
    helperText: 'Must contain uppercase, lowercase, digits and symbols'
  },
  formikProps: {
    initialValues: {
      password: ''
    },
    initialTouched: {
      password: true
    },
    validationSchema: toFormikValidationSchema(
      z
        .object({
          password: z
            .string()
            .regex(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-?;,./{}|":<>[\]\\' ~_]).*/,
              'Weak password'
            )
        })
        .strict()
    )
  }
};
