"use client";

import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";
import { RemoveButtonProps } from "./removeButton.props";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { setCookie } from "@/helpers/setCookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";

export const RemoveButton = ({ cartProduct }: RemoveButtonProps) => {
    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onRemoveButtonClick = () => {
        const cookieProducts = getCookieProductsClient();

        const updatedProducts = cookieProducts.filter(
            (product) => product.id !== cartProduct.id
        );
        setCookie("cart", JSON.stringify(updatedProducts));
        toogleLocalStorageHandler();

        toast.success(`Product successfully removed from cart`);
    };

    return (
        <button className={styles.btnRemove} onClick={onRemoveButtonClick}>
            <IoMdClose />
        </button>
    );
};
