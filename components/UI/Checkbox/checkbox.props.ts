import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    InputHTMLAttributes,
    ReactNode,
} from "react";

export interface CheckboxProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    title: string;
    id: string;
}
