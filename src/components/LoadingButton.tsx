import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

export interface LoadingButtonProps extends ButtonProps {
  children: ReactNode
}

export default function LoadingButton({ children, ...props }: LoadingButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{
        maxWidth: 250,
        alignSelf: 'center'
      }}
      {...props}
    >
      <CircularProgress
        size={20}
        sx={{
          color: 'white',
          mr: 1
        }}
      />
      {children}
    </Button>
  );
}
