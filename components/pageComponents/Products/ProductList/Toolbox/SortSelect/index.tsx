"use client";

import { Select } from "@/components/UI/Select";
import { ISelectOption } from "@/interfaces/selectOption.interface";
import { useState } from "react";
import { ISortSelectOption } from "./sortSelectOption.interface";
import { useDispatch } from "react-redux";
import { setSortBy } from "@/store/slices/products";
import { SortProductsByType } from "@/types/sortProductsBy.type";

const sortOptions: ISortSelectOption[] = [
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

    const [activeOption, setActiveOption] = useState<ISortSelectOption>(
        sortOptions[0]
    );

    const setSortByHandler = (optionValue: SortProductsByType) => {
        dispatch(setSortBy(optionValue));
    };

    const onOptionChange = (option: ISortSelectOption) => {
        setActiveOption(option);
        setSortByHandler(option.value);
    };

    return (
        <Select
            activeOption={activeOption}
            options={sortOptions}
            setActiveOption={(option) =>
                onOptionChange(option as ISortSelectOption)
            }
            id="sortby"
        />
    );
};
