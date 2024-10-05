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
        console.log(option);
        dispatch(
            setProductToCart({
                ...productToCart,
                size: Number(option.label),
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
    console.log(productToCart);

    return (
        <div className={styles.sizes}>
            <label htmlFor="size">Size:</label>
            <Select
                id="size"
                options={selectOptions}
                activeOption={
                    selectOptions.find(
                        (option) => Number(option.label) === productToCart.size
                    ) || selectOptions[selectOptions.length - 1]
                }
                setActiveOption={setActiveOptionHandler}
                className={styles.selectWrapper}
            />
        </div>
    );
};
