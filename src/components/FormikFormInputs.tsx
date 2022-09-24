import { Box, Stack, StackProps } from '@mui/material';
import { FormikContextType, useFormikContext } from 'formik';
import { useEffect } from 'react';
import {
  DynamicCollectionFormInput,
  FormConstants,
  FormInputExcludingCb,
  FormInputs,
  RegularFormInput,
  StaticCollectionFormInput
} from '../types';
import { transformString } from '../utils';
import CheckboxInput from './CheckboxInput';
import {
  DynamicCollectionTextInput,
  StaticCollectionTextInput
} from './Collections/CollectionTextInput';
import DatePickerInput from './DatePickerInput';
import PasswordInput from './PasswordInput';
import RangeInput from './RangeInput';
import RatingInput from './RatingInput';
import SelectInput from './SelectInput';
import TagsInput from './TagsInput';
import TextInput from './TextInput';

type CommonFormInput<RequestPayload extends Record<string, any>> = {
  autoFocus: boolean;
  required: boolean;
  placeholder?: string;
  label?: keyof RequestPayload | (string & Record<string, never>);
  disabled: boolean;
  helperText?: string;
  maxLength?: number;
  onMount?: (formikContext: FormikContextType<RequestPayload>) => void;
};

export function RegularFormikFormInput<
  RequestPayload extends Record<string, any>
>(props: CommonFormInput<RequestPayload> & RegularFormInput<RequestPayload>) {
  const {
    disabled,
    placeholder,
    helperText,
    required,
    label,
    autoFocus,
    input,
    name,
    maxLength,
    onMount
  } = props;
  const context = useFormikContext<RequestPayload>();

  const transformedLabel = (label
    ?? transformString(name as string), 'pascal') as string;
  const fieldCommonProps = {
    label: transformedLabel,
    disabled,
    placeholder,
    name: name as string,
    required,
    helperText
  };

  useEffect(() => {
    if (onMount) {
      onMount(context);
    }
  }, []);

  switch (input) {
    case 'password': {
      return <PasswordInput autoFocus={autoFocus} {...fieldCommonProps} />;
    }
    case 'text': {
      return <TextInput autoFocus={autoFocus} {...fieldCommonProps} />;
    }
    case 'text-multi': {
      const { rows = 5 } = props;
      return (
        <TextInput
          multiline
          rows={rows}
          autoFocus={autoFocus}
          maxLength={maxLength}
          {...fieldCommonProps}
        />
      );
    }
    case 'select': {
      const { values, transformation, multiple = false } = props;

      return (
        <SelectInput
          {...fieldCommonProps}
          values={values}
          transformation={transformation}
          multiple={multiple}
        />
      );
    }
    case 'checkbox': {
      const { checked, onClick } = props;

      return (
        <CheckboxInput
          {...fieldCommonProps}
          checked={checked}
          onClick={onClick}
        />
      );
    }

    case 'rating': {
      return <RatingInput {...fieldCommonProps} />;
    }

    case 'number': {
      return <TextInput {...fieldCommonProps} type="number" />;
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

export function DynamicCollectionFormikFormInput<
  RequestPayload extends Record<string, any>
>(
  props: CommonFormInput<RequestPayload> &
  DynamicCollectionFormInput<RequestPayload>
) {
  const {
    disabled,
    placeholder,
    helperText,
    required,
    label,
    autoFocus,
    name,
    input,
    maxItems,
    minItems,
    onMount,
    selectMulti,
    selectionFormKey
  } = props;
  const context = useFormikContext<RequestPayload>();

  const transformedLabel = (label
    ?? transformString(name as string), 'pascal') as string;
  const fieldCommonProps = {
    label: transformedLabel,
    disabled,
    placeholder,
    name: name as string,
    required,
    helperText
  };

  useEffect(() => {
    if (onMount) {
      onMount(context);
    }
  }, []);

  switch (input) {
    case 'text': {
      return (
        <DynamicCollectionTextInput
          selectMulti={selectMulti}
          selectionFormKey={selectionFormKey}
          maxItems={maxItems}
          minItems={minItems}
          autoFocus={autoFocus}
          {...fieldCommonProps}
        />
      );
    }

    default: {
      return null;
    }
  }
}

export function StaticCollectionFormikFormInput<
  RequestPayload extends Record<string, any>
>(
  props: CommonFormInput<RequestPayload> &
  StaticCollectionFormInput<RequestPayload>
) {
  const {
    disabled,
    placeholder,
    helperText,
    required,
    label,
    autoFocus,
    name,
    input,
    labels,
    onMount,
    selectMulti,
    selectionFormKey
  } = props;
  const context = useFormikContext<RequestPayload>();

  const transformedLabel = (label
    ?? transformString(name as string), 'pascal') as string;
  const fieldCommonProps = {
    label: transformedLabel,
    disabled,
    placeholder,
    name: name as string,
    required,
    helperText
  };

  useEffect(() => {
    if (onMount) {
      onMount(context);
    }
  }, []);

  switch (input) {
    case 'text': {
      return (
        <StaticCollectionTextInput
          selectMulti={selectMulti}
          selectionFormKey={selectionFormKey}
          labels={labels}
          autoFocus={autoFocus}
          {...fieldCommonProps}
        />
      );
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

export default function FormikFormInputs<RequestPayload extends Record<any, any>>({
  formInputs,
  helperText,
  label,
  optionalFields = [],
  placeholder,
  isDisabled = false,
  ...stackProps
}: FormikFormInputsProps<RequestPayload>) {
  const { values } = useFormikContext<RequestPayload>();

  function formikFormInput({
    formInputIndex,
    formInputItem
  }: {
    formInputIndex: number;
    formInputItem: FormInputs<RequestPayload>[0];
  }) {
    let formInput: FormInputExcludingCb<RequestPayload> | null = null;
    if (formInputItem instanceof Function) {
      formInput = formInputItem(values);
    } else {
      formInput = formInputItem;
    }
    if (!formInputItem || !formInput) {
      return null;
    }
    const commonProps = {
      autoFocus: formInputIndex === 0,
      placeholder: placeholder?.[formInput.name],
      required: !optionalFields.includes(formInput.name),
      helperText: helperText?.[formInput.name],
      label: label?.[formInput.name],
      disabled: isDisabled,
      key: `${label?.[formInput.name]}.${formInputIndex}`
    };

    if (formInput.type === 'collection') {
      return (
        <DynamicCollectionFormikFormInput<RequestPayload>
          {...commonProps}
          {...formInput}
        />
      );
    } if (formInput.type === 'regular' || formInput.type === undefined) {
      return (
        <RegularFormikFormInput<RequestPayload>
          {...commonProps}
          {...formInput}
        />
      );
    } if (formInput.type === 'collection-static') {
      return (
        <StaticCollectionFormikFormInput<RequestPayload>
          {...commonProps}
          {...formInput}
        />
      );
    } if (formInput.type === 'group') {
      const { sizes } = formInput;
      const totalItems = formInput.items.length;
      return (
        <Stack flexDirection="row" gap={1} key={formInput.name}>
          {formInput.items.map((_formInputItem, itemIndex) => (formInput ? (
            <Box
              width={`${sizes ? sizes[itemIndex] * 100 : 100 / totalItems}%`}
              key={`${formInput.name.toString()}.${itemIndex}` as string}
            >
              {formikFormInput({
                formInputIndex: itemIndex,
                formInputItem: _formInputItem
              })}
            </Box>
          ) : null))}
        </Stack>
      );
    }
    return null;
  }

  return (
    <Stack {...stackProps}>
      {formInputs.map((formInput, formInputIndex) => formikFormInput({
        formInputIndex,
        formInputItem: formInput
      }))}
    </Stack>
  );
}
