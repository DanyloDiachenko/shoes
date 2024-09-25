"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";
import { IoMdClose, IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";
import { CartDropdownProps } from "./cartDropdown.props";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/product.interface";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getClientCookie } from "@/helpers/getClientCookie";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { getProduct } from "@/app/api/products";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";

export const CartDropdown = ({
    currency,
    cartProducts,
    cookieProducts,
}: CartDropdownProps) => {
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [products, setProducts] = useState<IProduct[]>(cartProducts);
    const [cookieProductsClient, setCookieProductsClient] =
        useState<IProductCookie[]>(cookieProducts);

    const getProductHandler = async (productId: string) => {
        const productToCart = await getProduct(productId);

        if (products.find((product) => product.id === productToCart.id)) {
            return;
        }

        setProducts([...products, productToCart]);
    };

    const onRemoveProductClick = (productId: string) => {
        const updatedProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(updatedProducts);

        const updatedCookieProducts = cookieProducts
            .filter((product) => product.id !== productId)
            .map((product) => ({
                id: product.id,
                quantity: product.quantity,
                colorId: product.colorId,
                sizeId: product.sizeId,
            }));
        setCookieProductsClient(updatedCookieProducts);

        const cookieProductsString = JSON.stringify(updatedCookieProducts);
        setCookie("cart", cookieProductsString);

        toast.success("Product successfully removed from cart");
    };

    useEffect(() => {
        const cookieProductsString = getClientCookie("cart") || "";
        const cookieProducts: IProductCookie[] = cookieProductsString
            ? JSON.parse(cookieProductsString)
            : [];
        setCookieProductsClient(cookieProducts);

        for (let i = 0; i < cookieProducts.length; i++) {
            getProductHandler(cookieProducts[i].id);
        }
    }, [localStorageToogler]);

    return (
        <div className={styles.dropdown}>
            <Link href="#" className={styles.dropdownToggle} role="button">
                <BsCart2 className={styles.cartIcon} />
                <span className={styles.cartCount}>{products.length}</span>
            </Link>
            <div className={styles.dropdownMenu}>
                <div className={styles.dropdownCartProducts}>
                    {products.map((product) => (
                        <div className={styles.product}>
                            <div className={styles.productCartDetails}>
                                <h4 className={styles.productTitle}>
                                    <Link href={`/products/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </h4>
                                <span className={styles.cartProductInfo}>
                                    <span className={styles.cartProductQty}>
                                        {
                                            cookieProductsClient.find(
                                                (product) =>
                                                    product.id === product.id
                                            )?.quantity
                                        }
                                    </span>{" "}
                                    x {currency === "uah" ? "₴" : "€"}
                                    {currency === "uah"
                                        ? product.priceUah.toFixed(2)
                                        : product.priceEur.toFixed(2)}
                                </span>
                            </div>
                            <figure className={styles.productImageContainer}>
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
                                onClick={() => onRemoveProductClick(product.id)}
                            >
                                <IoMdClose />
                            </button>
                        </div>
                    ))}
                </div>
                <div className={styles.dropdownCartTotal}>
                    <span>Total</span>
                    <span className={styles.cartTotalPrice}>
                        {currency === "uah" ? "₴" : "€"}
                        {products
                            .reduce((acc, product) => acc + product.priceUah, 0)
                            .toFixed(2)}
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
                    <Link href="checkout.html">
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
