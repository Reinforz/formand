/// <reference types="react" />
import { TypographyProps } from '@mui/material';
export interface FieldHelperTextProps extends TypographyProps {
    helperText: string;
}
export default function FieldHelperText(props: FieldHelperTextProps): JSX.Element;
