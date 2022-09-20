import { Meta, Story } from "@storybook/react";
import { Formik, FormikConfig } from "formik";
import { DatePickerInput, DatePickerInputProps } from "../src/components";

export default {
  title: "Components/Form/DatePicker Input",
  component: DatePickerInput,
} as Meta;

const Template: Story<
  { DatePickerInputProps: DatePickerInputProps } & {
    formikProps?: Partial<FormikConfig<{ name: string }>>;
  }
> = ({ DatePickerInputProps, formikProps }) => {
  return (
    <Formik
      initialValues={{
        name: "DatePicker",
      }}
      onSubmit={() => {}}
      validateOnMount
      {...formikProps}
    >
      <DatePickerInput {...DatePickerInputProps} />
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  DatePickerInputProps: {
    name: "DatePicker",
  },
};

export const WithLabelHelperText = Template.bind({});
WithLabelHelperText.storyName = "Label + Helper text";

WithLabelHelperText.args = {
  DatePickerInputProps: {
    name: "DatePicker",
    label: "Date Picker",
    helperText: "Select a date",
  },
};

export const WithRequired = Template.bind({});
WithRequired.storyName = "Label + Helper text + Required";

WithRequired.args = {
  DatePickerInputProps: {
    name: "DatePicker",
    label: "Date Picker",
    helperText: "Select a date",
    required: true,
  },
};


