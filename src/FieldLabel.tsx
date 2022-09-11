import {
  Box,
  FormHelperText,
  FormLabel,
  Typography,
  useTheme
} from '@mui/material';

export interface FieldLabelProps {
  name: string;
  label: string;
  error?: string | boolean;
  required?: boolean;
}

export function FieldLabel(props: FieldLabelProps) {
  const theme = useTheme();
  const { name, required, label, error } = props;
  const requiredLabel = (
    <Box display='flex'>
      {label}
      {required ? (
        <Typography color={theme.palette.error.light} marginLeft={0.5}>
          *
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
  return (
    <Box display='flex' mb={0.5} flexDirection='column'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <FormLabel htmlFor={name}>{requiredLabel}</FormLabel>
        {Boolean(error) && (
          <FormHelperText
            sx={{
              mx: 0
            }}
            error={Boolean(error)}
          >
            {error}
          </FormHelperText>
        )}
      </Box>
    </Box>
  );
}
