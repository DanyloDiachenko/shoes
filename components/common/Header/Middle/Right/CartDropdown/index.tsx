"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";
import { IoMdClose, IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";
import { CartDropdownProps } from "./cartDropdown.props";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { getProduct } from "@/api/products";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { getProductPrice } from "@/helpers/getProductPrice";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import Image from "next/image";
import { Product } from "@/interfaces/entities/product.interface";

export const CartDropdown = ({
    currency,
    cartProducts,
    cookieProducts,
}: CartDropdownProps) => {
    const dispatch = useDispatch();
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [cartProductsClient, setCartProductsClient] =
        useState<Product[]>(cartProducts);
    const [cookieProductsClient, setCookieProductsClient] =
        useState<CookieProduct[]>(cookieProducts);

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const getProductHandler = async (productId: string) => {
        try {
            const productToCart = await getProduct(productId);
            if (!("id" in productToCart)) {
                return;
            }

            const productExists = cartProductsClient.some(
                (product) => product.id === productToCart.id
            );

            if (!productExists) {
                if (productToCart) {
                    setCartProductsClient([
                        ...cartProductsClient,
                        productToCart,
                    ]);
                }
            }
        } catch (error) {
            console.log(error);
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

    const setCartProductsClientHandler = async () => {
        const cookieProducts = await getCookieProductsClient();
        setCookieProductsClient(cookieProducts);

        if (cookieProducts.length) {
            for (let i = 0; i < cookieProducts.length; i++) {
                getProductHandler(cookieProducts[i].id);
            }
        } else {
            setCartProductsClient([]);
        }
    };

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
                const productPriceUah =
                    cartProductsClient[i].priceWithDiscountUah !== 0
                        ? cartProductsClient[i].priceWithDiscountUah
                        : cartProductsClient[i].priceUah;
                const productPriceEur =
                    cartProductsClient[i].priceWithDiscountEur !== 0
                        ? cartProductsClient[i].priceWithDiscountEur
                        : cartProductsClient[i].priceEur;

                subtotal +=
                    currency === "uah"
                        ? productPriceUah * cookieProductsClient[j].quantity
                        : productPriceEur * cookieProductsClient[j].quantity;
            }
        }
    }

    const onCheckoutClick = () => {
        if (cartProductsClient.length === 0) {
            toast.error("Cart is empty");
            return;
        }
    };

    useEffect(() => {
        setCartProductsClientHandler();
    }, [localStorageToogler]);

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
                    {cartProductsClient.length ? (
                        cartProductsClient.map((product) => (
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
                                                    (cookieProduct) =>
                                                        cookieProduct.id ===
                                                        product.id
                                                )?.quantity
                                            }
                                        </span>{" "}
                                        x{" "}
                                        {getProductPrice(
                                            product.priceUah,
                                            product.priceEur,
                                            product.priceWithDiscountUah,
                                            product.priceWithDiscountEur,
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
                                        <Image
                                            src={product.mainImage}
                                            alt="product"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
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
                        ))
                    ) : (
                        <div className={styles.noProducts}>
                            No product added yet...
                        </div>
                    )}
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
                    <Link
                        href={cartProductsClient.length ? "/checkout" : "#"}
                        onClick={onCheckoutClick}
                    >
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
