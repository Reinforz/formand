import {
  FormControl,
  FormControlProps,
  Rating,
  RatingProps
} from '@mui/material';
import { useField } from 'formik';
import FieldHelperText from './FieldHelperText';
import FieldLabel from './FieldLabel';

export type RatingInputProps = Omit<RatingProps, 'onChange'> & {
  name: string;
  label?: string;
  required?: boolean;
  formControlProps?: FormControlProps;
  helperText?: string;
};

export default function RatingInput({
  label,
  name,
  required,
  formControlProps = {},
  helperText,
  ...props
}: RatingInputProps) {
  const [field, , { setTouched, setValue }] = useField(name);

  const labelField = label ? (
    <FieldLabel required={required} label={label} name={field.name} />
  ) : null;

  return (
    <FormControl
      sx={{ width: 'fit-content', ...(formControlProps.sx ?? {}) }}
      {...formControlProps}
    >
      {labelField}
      <Rating
        id={field.name}
        onClick={() => {
          setTouched(true, true);
        }}
        precision={0.5}
        {...field}
        {...props}
        onChange={(_, value) => {
          setValue(Number(value));
        }}
      />
      {helperText && <FieldHelperText helperText={helperText} />}
    </FormControl>
  );
}
