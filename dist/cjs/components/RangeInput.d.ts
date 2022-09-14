/// <reference types="react" />
import { FormControlProps } from '@mui/material';
export declare type RangeInputProps = {
    helperText?: string;
    name: string;
    label?: string;
    formControlProps?: FormControlProps;
    required?: boolean;
};
export default function RangeInput({ helperText, label, name, required, formControlProps }: RangeInputProps): JSX.Element;
