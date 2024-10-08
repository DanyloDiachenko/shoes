"use client";

import { Select } from "@/components/UI/Select";
import { SelectOption } from "@/interfaces/selectOption.interface";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "@/store/slices/products";
import { SortProductsBy } from "@/types/sortProductsBy.type";

const sortOptions: SelectOption[] = [
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
    const dispatch = useDispatch();

    const [activeOption, setActiveOption] = useState<SelectOption>(
        sortOptions[0]
    );

    const setSortByHandler = (optionValue: SortProductsBy) => {
        dispatch(setSortBy(optionValue));
    };

    const onOptionChange = (option: SelectOption) => {
        setActiveOption(option);
        setSortByHandler(option.value as SortProductsBy);
    };

    return (
        <Select
            activeOption={activeOption}
            options={sortOptions}
            setActiveOption={(option) => onOptionChange(option as SelectOption)}
            id="sortby"
        />
    );
};
