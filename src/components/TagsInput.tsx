import {
  Autocomplete,
  AutocompleteProps,
  Box,
  Chip,
  FormControl,
  TextField
} from '@mui/material'
import { useField } from 'formik'
import FieldHelperText from './FieldHelperText'
import FieldLabel from './FieldLabel'

export interface TagsInputProps
  extends Omit<
  AutocompleteProps<string, true, undefined, true>,
  'options' | 'renderInput'
  > {
  name: string
  required?: boolean
  label: string
  max?: number
  placeholder?: string
  helperText?: string
}

export default function TagsInput (props: TagsInputProps): JSX.Element {
  const {
    placeholder,
    max = 5,
    required = true,
    label,
    name,
    helperText,
    ...rest
  } = props
  const [field, { value }, { setValue }] = useField<string[]>(name)
  return (
    <FormControl>
      <FieldLabel required={required} label={label} name={field.name} />
      <Autocomplete<string, true, undefined, true>
        multiple
        options={[]}
        freeSolo
        renderTags={(tags, getTagProps) =>
          tags.map((tag, index) => (
            <Chip variant='filled' label={tag} {...getTagProps({ index })} key={tag} />
          ))
        }
        onChange={(_, tags) => {
          setValue(
            tags.map((tag) => tag.toLowerCase().trim().split(' ').join())
          )
        }}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            placeholder={placeholder}
            disabled={value.length === max}
            inputProps={{
              ...params.inputProps,
              disabled: value.length === max
            }}
          />
        )}
        {...rest}
      />
      {helperText && (
        <Box my={0.5}>
          <FieldHelperText helperText={helperText} />
        </Box>
      )}
    </FormControl>
  )
}
