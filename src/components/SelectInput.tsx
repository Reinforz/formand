import {
  FormControl,
  FormControlProps,
  MenuItem,
  Select,
  SelectProps,
  Typography
} from '@mui/material';
import { useField } from 'formik';
import { transformString } from '../utils';
import FieldHelperText from './FieldHelperText';
import FieldLabel from './FieldLabel';

export type SelectInputProps<T = string> = SelectProps<T> & {
  helperText?: string;
  name: string;
  label?: string;
  placeholder?: string | number;
  values:
    | string[]
    | ReadonlyArray<string>
    | {
        value: string;
        label: string;
      }[];
  formControlProps?: FormControlProps;
  transformation?: 'capitalize' | 'split_capitalize';
};

export default function SelectInput<T extends string>({
  helperText,
  label,
  placeholder,
  multiline = false,
  rows = 1,
  fullWidth = true,
  name,
  values,
  formControlProps = {},
  transformation = 'split_capitalize',
  ...props
}: SelectInputProps<T>) {
  const [field, { error, value: selectValue }] = useField(name);
  return (
    <FormControl {...formControlProps}>
      {label && <FieldLabel error={error} label={label} name={field.name} />}
      <Select<T>
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        error={Boolean(error)}
        id={field.name}
        displayEmpty
        placeholder={placeholder ?? label}
        renderValue={(value) => {
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return <Typography>None selected</Typography>;
            }
            return value
              .map((val) => transformString(val, transformation))
              .join(',');
          }
          if (!value) {
            return 'None';
          }
          return transformString(value, transformation);
        }}
        {...field}
        {...props}
        value={selectValue}
        required={!Array.isArray(selectValue)}
      >
        {values.map((value) => {
          return typeof value === 'string' ? (
            <MenuItem key={value} value={value}>
              {transformString(value, transformation)}
            </MenuItem>
          ) : (
            <MenuItem key={value.value} value={value.value}>
              {value.label}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && <FieldHelperText helperText={helperText} />}
    </FormControl>
  );
}
