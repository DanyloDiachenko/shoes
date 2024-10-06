import styles from "./styles.module.scss";
import { TableProps } from "./table.props";
import { IProduct } from "@/interfaces/product.interface";
import { ProductRow } from "./ProductRow";
import { CartDiscount } from "./CartDiscount";
import { ClearCartButton } from "./ClearCartButton";
import { Button } from "@/components/UI/Button";
import Link from "next/link";

const getProductPrice = (product: IProduct, currency: string) => {
    return currency === "uah" ? product.priceUah : product.priceEur;
};

const getProductSize = (productId: string, cookieProducts: any[]) => {
    const productCookie = cookieProducts.find(
        (cookieProduct) => cookieProduct.id === productId
    );

    return productCookie ? productCookie.size : null;
};

const calculateTotalPerProduct = (
    product: IProduct,
    quantity: number,
    currency: string
) => {
    const price = getProductPrice(product, currency);

    return price * quantity;
};

export const Table = ({
    cartProducts,
    currency,
    cookieProducts,
}: TableProps) => {
    const processedProducts = cookieProducts
        .map((cookieProduct) => {
            const cartProduct = cartProducts.find(
                (cartProduct) => cartProduct.id === cookieProduct.id
            );

            const selectedSize = getProductSize(
                cookieProduct.id,
                cookieProducts
            );

            const quantity = cookieProduct ? cookieProduct.quantity : 1;

            const totalPrice = cartProduct
                ? calculateTotalPerProduct(cartProduct, quantity, currency)
                : 0;

            return {
                ...(cartProduct as IProduct),
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
                                    currency={currency}
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
