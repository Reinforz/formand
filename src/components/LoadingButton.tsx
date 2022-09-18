import { Button, ButtonProps, CircularProgress } from '@mui/material'

interface LoadingButtonProps extends ButtonProps {
  children: JSX.Element | string
}

export default function LoadingButton ({ children, ...props }: LoadingButtonProps): JSX.Element {
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
  )
}
