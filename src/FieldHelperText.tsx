import { Typography, TypographyProps } from '@mui/material';

export interface FieldHelperTextProps extends TypographyProps {
  helperText: string;
}

export function FieldHelperText(props: FieldHelperTextProps) {
  const { helperText, sx = {} } = props;
  return (
    <Typography variant='subtitle2' sx={{ opacity: 0.5, ...sx }}>
      {helperText}
    </Typography>
  );
}
