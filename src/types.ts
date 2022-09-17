import type { CheckboxInputProps } from "./components/CheckboxInput";

export type GroupFormInput<RequestPayload extends Record<string, any>> = {
  type: 'group';
  // eslint-disable-next-line
  items: RegularFormInput<RequestPayload>[];
  sizes?: number[];
  name: string;
};

export type RegularFormInput<RequestPayload extends Record<string, any>> =
  | {
    name: keyof RequestPayload | (string & {});
    type:
    | 'rating'
    | 'password'
    | 'text'
    | 'number'
    | 'range'
    | 'tags'
    | 'date';
  }
  | {
    name: keyof RequestPayload | (string & {});
    type: 'text-multi';
    rows?: number;
    maxLength?: number;
  }
  | {
    name: keyof RequestPayload | (string & {});
    type: 'select';
    multiple?: boolean;
    values: string[] | readonly string[];
    transformation?: 'capitalize' | 'split_capitalize';
  }
  | {
    name: keyof RequestPayload | (string & {});
    type: 'checkbox';
    checked?: boolean;
    onClick?: CheckboxInputProps['onClick'];
  };

export type FormInputs<RequestPayload extends Record<string, any>> = (
  | GroupFormInput<RequestPayload>
  | RegularFormInput<RequestPayload>
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