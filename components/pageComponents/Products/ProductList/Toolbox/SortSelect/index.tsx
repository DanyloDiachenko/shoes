"use client";

import { Select } from "@/components/UI/Select";
import { ISelectOption } from "@/interfaces/selectOption.interface";
import { ChangeEvent, useState } from "react";

const sortOptions: ISelectOption[] = [
    {
        label: "Most Popular",
        value: "mostPopular",
    },
    {
        label: "Most Rated",
        value: "mostRated",
    },
    {
        label: "Date",
        value: "date",
    },
];

export const SortSelect = () => {
    const [activeOption, setActiveOption] = useState<ISelectOption>(
        sortOptions[0]
    );

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = sortOptions.find(
            (option) => option.value === event.target.value
        );
        if (selectedOption) {
            setActiveOption(selectedOption);
        }
    };

    return (
        <Select
            activeOption={activeOption}
            options={sortOptions}
            onOptionChange={handleOptionChange}
        />
    );
};
