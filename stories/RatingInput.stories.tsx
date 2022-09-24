import { Meta, Story } from '@storybook/react';
import { Formik, FormikConfig } from 'formik';
import RatingInput, { RatingInputProps } from '../src/components/RatingInput';

export default {
  title: 'Components/Form/Rating Input',
  component: RatingInput,
} as Meta;

const Template: Story<
{ ratingInputProps: RatingInputProps } & {
  formikProps?: Partial<FormikConfig<{ name: string }>>;
}
> = ({ ratingInputProps, formikProps }) => (
  <Formik
    initialValues={{
      name: 'John Doe',
    }}
    onSubmit={() => {}}
    validateOnMount
    {...formikProps}
  >
    <RatingInput {...ratingInputProps} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  ratingInputProps: {
    name: 'rating',
  },
};

export const WithLabelPlaceholderHelperText = Template.bind({});
WithLabelPlaceholderHelperText.storyName = 'Label + Helper text';

WithLabelPlaceholderHelperText.args = {
  ratingInputProps: {
    name: 'rating',
    label: 'Your rating',
    helperText: 'How much do your rate this?',
    precision: 1
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ratingInputProps: {
    name: 'rating',
    disabled: true,
  },
};
