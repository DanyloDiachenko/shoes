"use client";

import { ISelectOption } from "@/interfaces/selectOption.interface";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Select } from "@/components/UI/Select";

const selectOptions: ISelectOption[] = [
    {
        label: "Select a size",
        value: "#",
    },
    {
        label: "Small",
        value: "s",
    },
    {
        label: "Medium",
        value: "m",
    },
    {
        label: "Large",
        value: "l",
    },
    {
        label: "Extra Large",
        value: "xl",
    },
];

export const Sizes = () => {
    const [activeOption, setActiveOption] = useState<ISelectOption>(
        selectOptions[0]
    );

    return (
        <div className={styles.sizes}>
            <label htmlFor="size">Size:</label>
            <Select
                id="size"
                options={selectOptions}
                activeOption={activeOption}
                setActiveOption={setActiveOption}
                className={styles.selectWrapper}
            />
        </div>
    );
};
