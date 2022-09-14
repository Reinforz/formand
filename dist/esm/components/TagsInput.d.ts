/// <reference types="react" />
import { AutocompleteProps } from '@mui/material';
export interface TagsInputProps extends Omit<AutocompleteProps<string, true, undefined, true>, 'options' | 'renderInput'> {
    name: string;
    required?: boolean;
    label: string;
    max?: number;
    placeholder?: string;
    helperText?: string;
}
export default function TagsInput(props: TagsInputProps): JSX.Element;
