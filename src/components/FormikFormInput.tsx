import { Box, Stack, StackProps } from '@mui/material';
import type { FormConstants, FormInputs, RegularFormInput } from '../types';
import { transformString } from '../utils';
import CheckboxInput from './CheckboxInput';
import DatePickerInput from './DatePickerInput';
import PasswordInput from './PasswordInput';
import RangeInput from './RangeInput';
import RatingInput from './RatingInput';
import SelectInput from './SelectInput';
import TagsInput from './TagsInput';
import TextInput from './TextInput';

type FormikFormInputProps<RequestPayload extends Record<string, any>> =
  RegularFormInput<RequestPayload> & {
    autoFocus: boolean;
    required: boolean;
    placeholder?: string;
    label?: keyof RequestPayload | (string & {});
    disabled: boolean;
    helperText?: string;
    maxLength?: number;
  };

export function FormikFormInput<RequestPayload extends Record<string, any>>(
  props: FormikFormInputProps<RequestPayload>
) {
  const {
    disabled,
    placeholder,
    helperText,
    required,
    label,
    autoFocus,
    type,
    name,
    maxLength
  } = props;

  const transformedLabel = (label ??
    transformString(name as string, "pascal")) as string;
  const fieldCommonProps = {
    label: transformedLabel,
    disabled,
    placeholder,
    name: name as string,
    required,
    helperText
  };

  switch (type) {
    case 'password': {
      return <PasswordInput autoFocus={autoFocus} {...fieldCommonProps} />;
    }
    case 'text': {
      return <TextInput autoFocus={autoFocus} {...fieldCommonProps} />;
    }
    case 'text-multi': {
      return (
        <TextInput
          multiline
          rows={props.rows ?? 5}
          autoFocus={autoFocus}
          maxLength={maxLength}
          {...fieldCommonProps}
        />
      );
    }
    case 'select': {
      return (
        <SelectInput
          {...fieldCommonProps}
          values={props.values}
          transformation={props.transformation}
          multiple={props.multiple ?? false}
        />
      );
    }
    case 'checkbox': {
      return (
        <CheckboxInput
          {...fieldCommonProps}
          checked={props.checked}
          onClick={props.onClick}
        />
      );
    }

    case 'rating': {
      return <RatingInput {...fieldCommonProps} />;
    }

    case 'number': {
      return <TextInput {...fieldCommonProps} type='number' />;
    }
    case 'tags': {
      return <TagsInput {...fieldCommonProps} />;
    }
    case 'date': {
      return <DatePickerInput {...fieldCommonProps} />;
    }
    case 'range': {
      return <RangeInput {...fieldCommonProps} />;
    }
    default: {
      return null;
    }
  }
}

export type FormikFormInputsProps<RequestPayload extends Record<any, any>> = {
  isDisabled?: boolean;
  formInputs: FormInputs<RequestPayload>;
} & Pick<
  FormConstants<RequestPayload>,
  'helperText' | 'label' | 'placeholder' | 'optionalFields'
> &
  Partial<StackProps>;

export function FormikFormInputs<RequestPayload extends Record<any, any>>({
  formInputs,
  helperText,
  label,
  optionalFields = [],
  placeholder,
  isDisabled = false,
  ...stackProps
}: FormikFormInputsProps<RequestPayload>) {
  return (
    <Stack {...stackProps}>
      {formInputs.map((formInput, formInputIndex) =>
        formInput.type === 'group' ? (
          <Stack flexDirection='row' gap={1} key={formInput.name}>
            {formInput.items.map((formInputItem, itemIndex) => {
              return (
                <Box
                  width={`${
                    formInput.sizes
                      ? formInput.sizes[itemIndex] * 100
                      : 100 / formInput.items.length
                  }%`}
                  key={formInputItem.name as string}
                >
                  <FormikFormInput<RequestPayload>
                    autoFocus={itemIndex === 0 && formInputIndex === 0}
                    placeholder={placeholder?.[formInputItem.name]}
                    required={!optionalFields.includes(formInputItem.name)}
                    helperText={helperText?.[formInputItem.name]}
                    label={label?.[formInputItem.name]}
                    disabled={isDisabled}
                    {...formInputItem}
                  />
                </Box>
              );
            })}
          </Stack>
        ) : (
          <FormikFormInput<RequestPayload>
            autoFocus={formInputIndex === 0}
            key={formInput.name as string}
            placeholder={placeholder?.[formInput.name]}
            required={!optionalFields.includes(formInput.name)}
            label={label?.[formInput.name]}
            disabled={isDisabled}
            helperText={helperText?.[formInput.name]}
            {...formInput}
          />
        )
      )}
    </Stack>
  );
}
