"use client";

import { ISelectOption } from "@/interfaces/selectOption.interface";
import styles from "./styles.module.scss";
import { Select } from "@/components/UI/Select";
import { SizesProps } from "./sizes.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setProductToCart } from "@/store/slices/productToCart";

export const Sizes = ({ product }: SizesProps) => {
    const dispatch = useDispatch();
    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const setActiveOptionHandler = (option: ISelectOption) => {
        dispatch(
            setProductToCart({
                ...productToCart,
                sizeId: option.value,
            })
        );
    };

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
                activeOption={
                    selectOptions.find(
                        (option) => option.value === productToCart.sizeId
                    ) || selectOptions[selectOptions.length - 1]
                }
                setActiveOption={setActiveOptionHandler}
                className={styles.selectWrapper}
            />
        </div>
    );
};
