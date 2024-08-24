import { ISelectOption } from "@/interfaces/selectOption.interface";
import { ChangeEventHandler } from "react";

export interface SelectProps {
    options: ISelectOption[];
    activeOption: ISelectOption;
    setActiveOption: (option: ISelectOption) => void;
    id: string;
}
