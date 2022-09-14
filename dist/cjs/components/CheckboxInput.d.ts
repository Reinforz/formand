/// <reference types="react" />
import { CheckboxProps } from '@mui/material';
export declare type CheckboxInputProps = CheckboxProps & {
    helperText?: string;
    name: string;
    label?: string;
};
export default function CheckboxInput({ helperText, label, name, ...props }: CheckboxInputProps): JSX.Element;
