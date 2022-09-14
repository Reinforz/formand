/// <reference types="react" />
import { CheckboxProps, FormControlProps, TypographyProps, TextFieldProps, RatingProps, SelectProps, AutocompleteProps } from '@mui/material';
import { DatePickerProps } from '@mui/x-date-pickers';

declare type CheckboxInputProps = CheckboxProps & {
    helperText?: string;
    name: string;
    label?: string;
};
declare function CheckboxInput({ helperText, label, name, ...props }: CheckboxInputProps): JSX.Element;

declare type DatePickerInputProps = Omit<DatePickerProps<any, any>, 'value' | 'label' | 'onChange' | 'renderInput'> & {
    helperText?: string;
    name: string;
    label?: string;
    formControlProps?: FormControlProps;
    required?: boolean;
};
declare function DatePickerInput({ helperText, label, name, required, formControlProps, ...props }: DatePickerInputProps): JSX.Element;

interface FieldHelperTextProps extends TypographyProps {
    helperText: string;
}
declare function FieldHelperText(props: FieldHelperTextProps): JSX.Element;

interface FieldLabelProps {
    name: string;
    label: string;
    error?: string | boolean;
    required?: boolean;
}
declare function FieldLabel(props: FieldLabelProps): JSX.Element;

declare type TextInputProps = TextFieldProps & {
    helperText?: string;
    name: string;
    label?: string;
    placeholder?: string | number;
    formControlProps?: FormControlProps;
    maxLength?: number;
};
declare function TextInput({ helperText, label, placeholder, multiline, rows, fullWidth, name, required, formControlProps, maxLength, ...props }: TextInputProps): JSX.Element;

declare function PasswordInput(props: TextInputProps): JSX.Element;

declare type RangeInputProps = {
    helperText?: string;
    name: string;
    label?: string;
    formControlProps?: FormControlProps;
    required?: boolean;
};
declare function RangeInput({ helperText, label, name, required, formControlProps }: RangeInputProps): JSX.Element;

declare type RatingInputProps = Omit<RatingProps, 'onChange'> & {
    name: string;
    label?: string;
    required?: boolean;
    formControlProps?: FormControlProps;
    helperText?: string;
};
declare function RatingInput({ label, name, required, formControlProps, helperText, ...props }: RatingInputProps): JSX.Element;

declare type SelectInputProps<T = string> = SelectProps<T> & {
    helperText?: string;
    name: string;
    label?: string;
    placeholder?: string | number;
    values: string[] | ReadonlyArray<string> | {
        value: string;
        label: string;
    }[];
    formControlProps?: FormControlProps;
    transformation?: 'capitalize' | 'split_capitalize';
};
declare function SelectInput<T extends string>({ helperText, label, placeholder, multiline, rows, fullWidth, name, values, formControlProps, transformation, ...props }: SelectInputProps<T>): JSX.Element;

interface TagsInputProps extends Omit<AutocompleteProps<string, true, undefined, true>, 'options' | 'renderInput'> {
    name: string;
    required?: boolean;
    label: string;
    max?: number;
    placeholder?: string;
    helperText?: string;
}
declare function TagsInput(props: TagsInputProps): JSX.Element;

declare function transformString(inputStr: string, transformation?: 'capitalize' | 'split_capitalize'): string;

export { CheckboxInput, CheckboxInputProps, DatePickerInput, DatePickerInputProps, FieldHelperText, FieldHelperTextProps, FieldLabel, FieldLabelProps, PasswordInput, RangeInput, RangeInputProps, RatingInput, RatingInputProps, SelectInput, SelectInputProps, TagsInput, TagsInputProps, TextInput, TextInputProps, transformString };
