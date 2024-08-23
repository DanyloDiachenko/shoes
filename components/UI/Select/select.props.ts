import { ISelectOption } from "@/interfaces/selectOption.interface";
import { ChangeEventHandler } from "react";

export interface SelectProps {
    options: ISelectOption[];
    activeOption: ISelectOption;
    onOptionChange: ChangeEventHandler<HTMLSelectElement>;
}
