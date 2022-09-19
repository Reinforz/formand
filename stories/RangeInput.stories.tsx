import { Meta, Story } from "@storybook/react";
import { Formik, FormikConfig } from "formik";
import { z } from "zod";

import { RangeInput, RangeInputProps } from "../src/components";
import { toFormikValidationSchema } from "./helpers";

export default {
  title: "Components/Form/Range Input",
  component: RangeInput,
} as Meta;

const Template: Story<
  { rangeInputProps: RangeInputProps } & {
    formikProps?: Partial<FormikConfig<{ name: string }>>;
  }
> = ({ rangeInputProps, formikProps }) => {
  return (
    <Formik
      initialValues={{
        name: "John Doe",
      }}
      onSubmit={() => {}}
      validateOnMount
      {...formikProps}
    >
      <RangeInput {...rangeInputProps} />
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  rangeInputProps: {
    name: "range",
  },
};

export const WithLabelHelperText = Template.bind({});
WithLabelHelperText.storyName = "Label + Helper text";

WithLabelHelperText.args = {
  rangeInputProps: {
    name: "range",
    label: "Full range",
    helperText: "Enter the range of suitable values",
  },
};

export const WithRequired = Template.bind({});
WithRequired.storyName = "Label + Helper text + Required";

WithRequired.args = {
  rangeInputProps: {
    name: "range",
    label: "Full range",
    helperText: "Enter the range of suitable values",
    required: true,
  },
};

export const RequiredFieldError = Template.bind({});
RequiredFieldError.storyName = "Required field error";
RequiredFieldError.args = {
  rangeInputProps: {
    name: "name",
    label: "Full range",
    helperText: "Enter the range of suitable values",
    required: true,
  },
  formikProps: {
    initialValues: {
      name: "",
    },
    initialTouched: {
      name: true,
    },
    validationSchema: toFormikValidationSchema(
      z
        .object({
          name: z.string(),
        })
        .strict()
    ),
  },
};
