import { Meta, Story } from '@storybook/react';
import { Formik, FormikConfig } from 'formik';
import DatePickerInput, { DatePickerInputProps } from '../src/components/DatePickerInput';

export default {
  title: 'Components/Form/DatePicker Input',
  component: DatePickerInput,
} as Meta;

const Template: Story<
{
  datePickerInputProps: DatePickerInputProps } & {
  formikProps?: Partial<FormikConfig<{ name: string }>>;
}
> = ({ datePickerInputProps, formikProps }) => (
  <Formik
    initialValues={{
      name: 'DatePicker',
    }}
    onSubmit={() => {}}
    validateOnMount
    {...formikProps}
  >
    <DatePickerInput {...datePickerInputProps} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  datePickerInputProps: {
    name: 'DatePicker',
  },
};

export const WithLabelHelperText = Template.bind({});
WithLabelHelperText.storyName = 'Label + Helper text';

WithLabelHelperText.args = {
  datePickerInputProps: {
    name: 'DatePicker',
    label: 'Date Picker',
    helperText: 'Select a date',
  },
};

export const WithRequired = Template.bind({});
WithRequired.storyName = 'Label + Helper text + Required';

WithRequired.args = {
  datePickerInputProps: {
    name: 'DatePicker',
    label: 'Date Picker',
    helperText: 'Select a date',
    required: true,
  },
};


