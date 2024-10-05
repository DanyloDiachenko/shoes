"use client";

import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";
import { RemoveButtonProps } from "./removeButton.props";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { setCookie } from "@/helpers/setCookie";

export const RemoveButton = ({ cartProduct }: RemoveButtonProps) => {
    const onRemoveButtonClick = () => {
        const cookieProducts = getCookieProductsClient();

        const updatedProducts = cookieProducts.filter(
            (product) => product.id !== cartProduct.id
        );

        setCookie("cart", JSON.stringify(updatedProducts));
    };

    return (
        <button className={styles.btnRemove} onClick={onRemoveButtonClick}>
            <IoMdClose />
        </button>
    );
};
