"use client";

import { ISelectOption } from "@/interfaces/selectOption.interface";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Select } from "@/components/UI/Select";
import { SizesProps } from "./sizes.props";

export const Sizes = ({ product }: SizesProps) => {
    const [activeOption, setActiveOption] = useState<ISelectOption>({
        label: "Select a size",
        value: "#",
    });

    const selectOptions: ISelectOption[] = product.sizes.map((size) => ({
        label: String(size.title),
        value: size.id,
    }));
    selectOptions.push({
        label: "Select a size",
        value: "#",
    });

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
