import {
  Box, Button, Divider, Stack, SxProps, Typography
} from '@mui/material'
import { Form, Formik, FormikConfig } from 'formik'
import { ReactNode } from 'react'
import { FormConstants, FormInputs } from '../types'
import { FormikFormInputs } from './FormikFormInput'
import LoadingButton from './LoadingButton'

export interface FormikFormProps<Payload extends Record<string, any>> {
  formPreSubmit?: ReactNode
  formFooter?: ReactNode
  formConstants: FormConstants<Payload> & {
    payloadFactory: () => Payload
    validationSchema: any
  }
  formInputs: FormInputs<Payload>
  onSubmit: FormikConfig<Payload>['onSubmit']
  formBodySx?: SxProps
  formSx?: SxProps
  isLoading?: boolean
}

export function FormikForm<Payload extends Record<string, any>> (
  props: FormikFormProps<Payload>
): JSX.Element {
  const {
    isLoading = false,
    formFooter,
    formConstants: {
      payloadFactory,
      validationSchema,
      formHeaderText,
      onLoadButtonText,
      submitButtonText,
      label,
      placeholder,
      helperText,
      optionalFields = [],
      formHeaderHelperText
    },
    formBodySx = {},
    formInputs,
    formPreSubmit,
    formSx = {},
    onSubmit
  } = props

  return (
    <Formik
      validateOnBlur={false}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      validateOnChange
      initialValues={payloadFactory()}
    >
      {({ isSubmitting, isValid }) => (
        <Box sx={formSx}>
          <Form
            style={{
              height: 'fit-content',
              width: '100%'
            }}
          >
            <Stack
              gap={1}
              my={2}
              sx={{
                display: { xs: 'flex', sm: 'initial' },
                flexDirection: { xs: 'column', sm: 'initial' },
                alignItems: { xs: 'center', sm: 'initial' },
                my: { md: 3 }
              }}
            >
              <Stack
                flexDirection="row"
                alignItems="center"
                sx={{
                  justifyContent: { sm: 'center', xs: 'normal' },
                  display: 'initial'
                }}
              >
                <Typography variant="h5">{formHeaderText}</Typography>
              </Stack>
              {formHeaderHelperText && (
                <Typography
                  variant="subtitle1"
                  sx={{ opacity: 0.75, display: { xs: 'none', sm: 'initial' } }}
                >
                  {formHeaderHelperText}
                </Typography>
              )}
              <Divider
                sx={{
                  my: 2
                }}
              />
            </Stack>
            <FormikFormInputs<Payload>
              formInputs={formInputs}
              label={label}
              placeholder={placeholder as any}
              helperText={helperText}
              optionalFields={optionalFields}
              isDisabled={isSubmitting}
              sx={formBodySx}
              mb={2}
              gap={2}
            />
            {formPreSubmit}
            <Stack flexDirection="row" justifyContent="space-between" mb={3}>
              {isLoading
                ? (
                  <LoadingButton disabled>{onLoadButtonText}</LoadingButton>
                )
                : (
                  <Button type="submit" disabled={isSubmitting || !isValid}>
                    {submitButtonText}
                  </Button>
                )}
            </Stack>
            {formFooter}
          </Form>
        </Box>
      )}
    </Formik>
  )
}
