import { FormikContextType, FormikState } from 'formik';
import type { CheckboxInputProps } from './components/CheckboxInput';

export type FormInput<RequestPayload extends Record<string, any>> =
  | {
    name: keyof RequestPayload | (string & Record<string, never>);
    input:
    | 'rating'
    | 'password'
    | 'text'
    | 'number'
    | 'range'
    | 'tags'
    | 'date';
    onMount?: (formikContext: FormikContextType<RequestPayload>) => any;
  }
  | {
    name: keyof RequestPayload | (string & Record<string, never>);
    input: 'text-multi';
    rows?: number;
    maxLength?: number;
  }
  | {
    name: keyof RequestPayload | (string & Record<string, never>);
    input: 'select';
    multiple?: boolean;
    values: string[] | readonly string[];
    transformation?: 'capitalize' | 'split_capitalize';
  }
  | {
    name: keyof RequestPayload | (string & Record<string, never>);
    input: 'checkbox';
    checked?: boolean;
    onClick?: CheckboxInputProps['onClick'];
  };

export type RegularFormInput<RequestPayload extends Record<string, any>> = {
  type?: 'regular';
} & FormInput<RequestPayload>;

export type GroupFormInput<RequestPayload extends Record<string, any>> = {
  type: 'group';
  items: RegularFormInput<RequestPayload>[];
  sizes?: number[];
  name: string;
  collection?: boolean;
};

export type DynamicCollectionFormInput<
  RequestPayload extends Record<string, any>
> = FormInput<RequestPayload> & {
  type: 'collection';
  maxItems: number;
  minItems: number;
  selectionFormKey?: string;
  selectMulti?: boolean;
};

export type StaticCollectionFormInput<
  RequestPayload extends Record<string, any>
> = FormInput<RequestPayload> & {
  type: 'collection-static';
  labels: string[];
  selectionFormKey?: string;
  selectMulti?: boolean;
};

export type FormInputExcludingCb<RequestPayload extends Record<string, any>> =
  | GroupFormInput<RequestPayload>
  | RegularFormInput<RequestPayload>
  | DynamicCollectionFormInput<RequestPayload>
  | StaticCollectionFormInput<RequestPayload>;

export type FormInputs<RequestPayload extends Record<string, any>> = (
  | (FormInputExcludingCb<RequestPayload> | null)
  | ((
    values: FormikState<RequestPayload>['values']
  ) => FormInputExcludingCb<RequestPayload> | null)
)[];

export type FormConstants<Payload> = {
  label?: Partial<Record<keyof Payload, string>>;
  placeholder?: Partial<Record<keyof Payload, string>>;
  submitButtonText: string;
  onLoadButtonText: string;
  formHeaderText: string;
  formHeaderHelperText?: string;
  helperText?: Partial<Record<keyof Payload, string>>;
  optionalFields?: (keyof Payload)[];
};
