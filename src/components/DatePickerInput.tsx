import {
  Box, FormControl, FormControlProps, TextField
} from '@mui/material'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers'
import { useField } from 'formik'
import FieldHelperText from './FieldHelperText'
import FieldLabel from './FieldLabel'

export type DatePickerInputProps = Omit<
DatePickerProps<any, any>,
'value' | 'label' | 'onChange' | 'renderInput'
> & {
  helperText?: string
  name: string
  label?: string
  formControlProps?: FormControlProps
  required?: boolean
}

export default function DatePickerInput ({
  helperText,
  label,
  name,
  required,
  formControlProps = {},
  ...props
}: DatePickerInputProps): JSX.Element {
  const [field, { value }, { setValue }] = useField(name)

  const labelField = label
    ? (
      <FieldLabel required={required} label={label} name={field.name} />
    )
    : null

  return (
    <FormControl {...formControlProps}>
      {labelField}
      <DatePicker<Date>
        {...props}
        value={value}
        onChange={(date) => {
          if (date) {
            setValue(date.toString())
          }
        }}
        renderInput={(params) => (
          <TextField
            disabled
            InputProps={{
              disabled: true,
              readOnly: true
            }}
            {...params}
          />
        )}
      />
      {helperText && (
        <Box my={0.5}>
          <FieldHelperText helperText={helperText} />
        </Box>
      )}
    </FormControl>
  )
}
