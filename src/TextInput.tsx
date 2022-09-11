import {
  Box,
  FormControl,
  FormControlProps,
  TextField,
  TextFieldProps
} from '@mui/material';
import { useField } from 'formik';
import { ReactNode } from 'react';
import { FieldHelperText } from './FieldHelperText';
import { FieldLabel } from './FieldLabel';

export type TextInputProps = TextFieldProps & {
  helperText?: string;
  name: string;
  label?: string;
  placeholder?: string | number;
  formControlProps?: FormControlProps;
  maxLength?: number;
};

export function TextInput({
  helperText,
  label,
  placeholder,
  multiline = false,
  rows = 1,
  fullWidth = true,
  name,
  required,
  formControlProps = {},
  maxLength,
  ...props
}: TextInputProps) {
  const [field, { error, touched, value }, { setTouched }] =
    useField<string>(name);

  const errorState = touched ? Boolean(error) : false;

  const labelField = label ? (
    <FieldLabel
      required={required}
      error={
        touched && error
          ? error.toLowerCase().includes('required')
            ? ''
            : error
          : undefined
      }
      label={label}
      name={field.name}
    />
  ) : null;

  let maxCharLengthField: ReactNode = null;

  const inputProps: Partial<TextFieldProps> = {};

  if (maxLength) {
    inputProps.inputProps = { maxLength };
    maxCharLengthField = (
      <FieldHelperText
        sx={{
          mb: 0.5
        }}
        helperText={`${value?.length || 0}/${maxLength}`}
      />
    );
  }

  return (
    <FormControl {...formControlProps}>
      {labelField} {maxCharLengthField}
      <TextField
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        error={errorState}
        id={field.name}
        placeholder={placeholder ?? label}
        onClick={() => {
          setTouched(true, true);
        }}
        {...inputProps}
        {...field}
        {...props}
      />
      {helperText && (
        <Box my={0.5}>
          <FieldHelperText helperText={helperText} />
        </Box>
      )}
    </FormControl>
  );
}
