/// <reference types="react" />
import { FormControlProps, RatingProps } from '@mui/material';
export declare type RatingInputProps = Omit<RatingProps, 'onChange'> & {
    name: string;
    label?: string;
    required?: boolean;
    formControlProps?: FormControlProps;
    helperText?: string;
};
export default function RatingInput({ label, name, required, formControlProps, helperText, ...props }: RatingInputProps): JSX.Element;
