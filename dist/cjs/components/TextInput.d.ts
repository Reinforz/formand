/// <reference types="react" />
import { FormControlProps, TextFieldProps } from '@mui/material';
export declare type TextInputProps = TextFieldProps & {
    helperText?: string;
    name: string;
    label?: string;
    placeholder?: string | number;
    formControlProps?: FormControlProps;
    maxLength?: number;
};
export default function TextInput({ helperText, label, placeholder, multiline, rows, fullWidth, name, required, formControlProps, maxLength, ...props }: TextInputProps): JSX.Element;
