import { Box, FormControl, FormControlProps, Stack, TextField } from '@mui/material';
import { useField } from 'formik';
import FieldHelperText from './FieldHelperText';
import FieldLabel from './FieldLabel';

export type RangeInputProps = {
  helperText?: string;
  name: string;
  label?: string;
  formControlProps?: FormControlProps;
  required?: boolean;
};

export default function RangeInput({
  helperText,
  label,
  name,
  required = false,
  formControlProps = {}
}: RangeInputProps) {
  const [field, { error, touched, value }, { setTouched, setValue }] =
    useField(name);

  const errorState = touched ? Boolean(error) : false;

  const labelField = label ? (
    <FieldLabel
      required={required}
      error={
        touched && error ? (error.includes('required') ? '' : error) : undefined
      }
      label={label}
      name={field.name}
    />
  ) : null;

  return (
    <FormControl {...formControlProps}>
      {labelField}
      <Stack gap={1} flexDirection="row" alignItems={"center"}>
        <TextField
          error={errorState}
          id={field.name}
          placeholder="0"
          onClick={() => {
            setTouched(true, true);
          }}
          type="number"
          onChange={(e) => {
            setValue([Number(e.target.value), value?.[1]]);
          }}
          value={value?.[0]}
          InputProps={{
            inputProps: {
              min: 0,
              max: value?.[1],
              step: 5,
            },
          }}
        />
        <TextField
          error={errorState}
          id={field.name}
          placeholder="∞"
          onChange={(e) => {
            setValue([value?.[0], Number(e.target.value)]);
          }}
          onClick={() => {
            setTouched(true, true);
          }}
          type="number"
          value={value?.[1]}
          InputProps={{
            inputProps: {
              min: value?.[0],
              step: 5,
            },
          }}
        />
      </Stack>
      {helperText && (
        <Box my={0.5}>
          <FieldHelperText helperText={helperText} />
        </Box>
      )}
    </FormControl>
  );
}
