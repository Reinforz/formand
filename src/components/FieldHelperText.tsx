import { Typography, TypographyProps } from '@mui/material'

export interface FieldHelperTextProps extends TypographyProps {
  helperText: string
}

export default function FieldHelperText (props: FieldHelperTextProps): JSX.Element {
  const { helperText, sx = {} } = props
  return (
    <Typography variant="subtitle2" sx={{ opacity: 0.5, ...sx }}>
      {helperText}
    </Typography>
  )
}
