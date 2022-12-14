import {
  Checkbox, CheckboxProps, FormControl, FormControlLabel
} from '@mui/material'
import { useField } from 'formik'
import FieldHelperText from './FieldHelperText'

export type CheckboxInputProps = CheckboxProps & {
  helperText?: string
  name: string
  label?: string
}

export default function CheckboxInput ({
  helperText,
  label,
  name,
  ...props
}: CheckboxInputProps): JSX.Element {
  const [field] = useField(name)

  return (
    <FormControl sx={{ width: 'fit-content' }}>
      <FormControlLabel
        control={<Checkbox {...field} {...props} id={field.name} required={false} />}
        label={label}
      />
      {helperText && <FieldHelperText helperText={helperText} />}
    </FormControl>
  )
}
