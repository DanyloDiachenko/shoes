import styles from "./styles.module.scss";
import { TableProps } from "./table.props";
import { Product } from "@/interfaces/product.interface";
import { ProductRow } from "./ProductRow";
import { CartDiscount } from "./CartDiscount";
import { ClearCartButton } from "./ClearCartButton";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { getCurrency } from "@/helpers/getCurrency";
import { getProductPrice } from "@/helpers/getProductPrice";

export const Table = ({ cartProducts, cookieProducts }: TableProps) => {
    const currency = getCurrency();

    const getCartProduct = (cookieProductId: string) => {
        return cartProducts.find(
            (cartProduct) => cartProduct.id === cookieProductId
        );
    };

    const getSelectedSize = (cookieProductId: string) => {
        return getProductSize(cookieProductId, cookieProducts);
    };

    const getProductSize = (productId: string, cookieProducts: any[]) => {
        const productCookie = cookieProducts.find(
            (cookieProduct) => cookieProduct.id === productId
        );

        return productCookie ? productCookie.size : null;
    };

    const calculateTotalPerProduct = (product: Product, quantity: number) => {
        const price = getProductPrice(
            product.priceUah,
            product.priceEur,
            currency
        );

        return Number(price) * quantity;
    };

    const processedProducts = cookieProducts
        .map((cookieProduct) => {
            const cartProduct = getCartProduct(cookieProduct.id);
            const selectedSize = getSelectedSize(cookieProduct.id);
            const quantity = cookieProduct ? cookieProduct.quantity : 1;

            const totalPrice = cartProduct
                ? calculateTotalPerProduct(cartProduct, quantity)
                : 0;

            return {
                ...(cartProduct as Product),
                selectedSize,
                quantity,
                totalPrice,
            };
        })
        .filter(Boolean);

    return (
        <div className={styles.column}>
            {cookieProducts.length ? (
                <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {processedProducts.map((cartProduct) => (
                                <ProductRow
                                    key={cartProduct.id}
                                    cartProduct={cartProduct}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.cartBottom}>
                        <CartDiscount />
                        <ClearCartButton />
                    </div>
                </>
            ) : (
                <>
                    <h2 className={styles.notFound}>No results found</h2>
                    <Link href="/products">
                        <Button colorType="btnOutlinePrimary2">
                            Go to Shop
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};
