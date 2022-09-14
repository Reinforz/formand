/// <reference types="react" />
import { FormControlProps, SelectProps } from '@mui/material';
export declare type SelectInputProps<T = string> = SelectProps<T> & {
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
export default function SelectInput<T extends string>({ helperText, label, placeholder, multiline, rows, fullWidth, name, values, formControlProps, transformation, ...props }: SelectInputProps<T>): JSX.Element;
