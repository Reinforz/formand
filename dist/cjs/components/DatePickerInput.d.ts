/// <reference types="react" />
import { FormControlProps } from '@mui/material';
import { DatePickerProps } from '@mui/x-date-pickers';
export declare type DatePickerInputProps = Omit<DatePickerProps<any, any>, 'value' | 'label' | 'onChange' | 'renderInput'> & {
    helperText?: string;
    name: string;
    label?: string;
    formControlProps?: FormControlProps;
    required?: boolean;
};
export default function DatePickerInput({ helperText, label, name, required, formControlProps, ...props }: DatePickerInputProps): JSX.Element;
