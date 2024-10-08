"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import { BrandsProps } from "./brands.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductBrand } from "@/interfaces/product.interface";
import { setBrands } from "@/store/slices/productsSettings";

export const Brands = ({ brands }: BrandsProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedBrands = useSelector(
        (state: RootState) => state.products.filters.brands
    );

    const setBrandsHandler = (brands: ProductBrand[]) => {
        dispatch(setBrands(brands));
    };

    const onBrandClick = (brand: ProductBrand) => {
        const exitstingBrand = selectedBrands.find(
            (selBrand) => selBrand.id === brand.id
        );

        if (exitstingBrand) {
            setBrandsHandler(
                selectedBrands.filter((selBrand) => selBrand.id !== brand.id)
            );
        } else {
            setBrandsHandler([...selectedBrands, brand]);
        }
    };

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-4"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Brand</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-4"
            >
                <div className={styles.widgetBody}>
                    {brands.map((brand) => (
                        <div className={styles.item} key={brand.id}>
                            <Checkbox
                                title={brand.title}
                                id={brand.id}
                                onChange={() => onBrandClick(brand)}
                                checked={selectedBrands.includes(brand)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
