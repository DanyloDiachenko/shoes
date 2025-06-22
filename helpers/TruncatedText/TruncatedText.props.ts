import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TruncatedTextProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    lines: number;
    children: ReactNode;
}
