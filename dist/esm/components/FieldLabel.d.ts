/// <reference types="react" />
export interface FieldLabelProps {
    name: string;
    label: string;
    error?: string | boolean;
    required?: boolean;
}
export default function FieldLabel(props: FieldLabelProps): JSX.Element;
