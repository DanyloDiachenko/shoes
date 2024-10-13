"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";
import { IoMdClose, IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";
import { CartDropdownProps } from "./cartDropdown.props";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { getProduct } from "@/app/api/products";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { getProductPrice } from "@/helpers/getProductPrice";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";

export const CartDropdown = ({
    currency,
    cartProducts,
    cookieProducts,
}: CartDropdownProps) => {
    const dispatch = useDispatch();
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const [cartProductsClient, setCartProductsClient] =
        useState<Product[]>(cartProducts);
    const [cookieProductsClient, setCookieProductsClient] =
        useState<ProductCookie[]>(cookieProducts);

    const getProductHandler = async (productId: string) => {
        try {
            const productToCart = await getProduct(productId);

            const productExists = cartProductsClient.some(
                (product) => product.id === productToCart.id
            );

            if (!productExists) {
                setCartProductsClient([...cartProductsClient, productToCart]);
            }
        } catch (error) {
            toast.error("Failed to fetch product");
        }
    };

    const onRemoveProductClick = (productId: string) => {
        const updatedProducts = cartProductsClient.filter(
            (product) => product.id !== productId
        );
        setCartProductsClient(updatedProducts);

        const updatedCookieProducts = cookieProductsClient
            .filter((product) => product.id !== productId)
            .map((product) => ({
                id: product.id,
                quantity: product.quantity,
                size: product.size,
            }));

        setCookieProductsClient(updatedCookieProducts);

        const cookieProductsString = JSON.stringify(updatedCookieProducts);
        setCookie("cart", cookieProductsString);
        toogleLocalStorageHandler();

        toast.success("Product successfully removed from cart");
    };

    useEffect(() => {
        const cookieProducts = getCookieProductsClient();
        setCookieProductsClient(cookieProducts);

        if (cookieProducts.length) {
            for (let i = 0; i < cookieProducts.length; i++) {
                getProductHandler(cookieProducts[i].id);
            }
        } else {
            setCartProductsClient([]);
        }
    }, [localStorageToogler]);

    const getProductSize = (product: Product) => {
        const cookieProduct = cookieProductsClient.find(
            (cookieProduct) => cookieProduct.id === product.id
        );

        const productSize = product.sizes.find(
            (size) => size.title === cookieProduct?.size
        );

        return productSize?.title;
    };

    let subtotal = 0;

    for (let i = 0; i < cartProductsClient.length; i++) {
        for (let j = 0; j < cookieProductsClient.length; j++) {
            if (cartProductsClient[i].id === cookieProductsClient[j].id) {
                subtotal +=
                    currency === "uah"
                        ? cartProductsClient[j].priceUah *
                          cookieProductsClient[j].quantity
                        : cartProductsClient[j].priceEur *
                          cookieProductsClient[j].quantity;
            }
        }
    }

    return (
        <div className={styles.dropdown}>
            <Link href="#" className={styles.dropdownToggle} role="button">
                <BsCart2 className={styles.cartIcon} />
                <span className={styles.cartCount}>
                    {cartProductsClient.length}
                </span>
            </Link>
            <div className={styles.dropdownMenu}>
                <div className={styles.dropdownCartProducts}>
                    {cartProductsClient.map((product) => {
                        return (
                            <div className={styles.product} key={product.id}>
                                <div className={styles.productCartDetails}>
                                    <h4 className={styles.productTitle}>
                                        <Link href={`/products/${product.id}`}>
                                            {product.title}
                                        </Link>
                                    </h4>
                                    <div className={styles.cartProductInfo}>
                                        <span className={styles.cartProductQty}>
                                            {
                                                cookieProductsClient.find(
                                                    (product) =>
                                                        product.id ===
                                                        product.id
                                                )?.quantity
                                            }
                                        </span>{" "}
                                        x{" "}
                                        {getProductPrice(
                                            product.priceUah,
                                            product.priceEur,
                                            currency
                                        )}
                                    </div>
                                    <div className={styles.cartProductInfo}>
                                        <span className={styles.cartProductQty}>
                                            Size:
                                        </span>{" "}
                                        {getProductSize(product)}
                                    </div>
                                </div>
                                <figure
                                    className={styles.productImageContainer}
                                >
                                    <Link
                                        href={`/products/${product.id}`}
                                        className={styles.productImage}
                                    >
                                        <img
                                            src={product.mainImage}
                                            alt="product"
                                        />
                                    </Link>
                                </figure>
                                <button
                                    className={styles.btnRemove}
                                    title="Remove Product"
                                    onClick={() =>
                                        onRemoveProductClick(product.id)
                                    }
                                >
                                    <IoMdClose />
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.dropdownCartTotal}>
                    <span>Total</span>
                    <span className={styles.cartTotalPrice}>
                        {getCurrencyIcon(currency)}
                        {subtotal.toFixed(2)}
                    </span>
                </div>
                <div className={styles.dropdownCartAction}>
                    <Link href={`/cart`}>
                        <Button
                            colorType="btnPrimary"
                            className={styles.buttonView}
                        >
                            View Cart
                        </Button>
                    </Link>
                    <Link href={`/checkout`}>
                        <Button
                            colorType="btnOutlinePrimary2"
                            className={styles.buttonCheckout}
                        >
                            <span>Checkout</span>
                            <IoIosArrowRoundForward />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
