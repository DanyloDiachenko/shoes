import { SelectOption } from "@/interfaces/selectOption.interface";

export interface SelectProps {
    options: SelectOption[];
    activeOption: SelectOption;
    setActiveOption: (option: SelectOption) => void;
    id: string;
    className?: string;
}
