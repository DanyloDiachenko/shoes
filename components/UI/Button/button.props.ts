import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    colorType: "btnPrimary" | "btnOutlinePrimary2" | "btnOutlineDark2";
    children: ReactNode;
}
