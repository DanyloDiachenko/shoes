import styles from "./styles.module.scss";
import { TableProps } from "./table.props";
import { IProduct } from "@/interfaces/product.interface";
import { ProductRow } from "./ProductRow";
import { CartDiscount } from "./CartDiscount";
import { ClearCartButton } from "./ClearCartButton";

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
    const processedProducts = cartProducts.map((cartProduct) => {
        const selectedSize = getProductSize(cartProduct.id, cookieProducts);

        const productCookie = cookieProducts.find(
            (cookieProduct) => cookieProduct.id === cartProduct.id
        );

        const quantity = productCookie ? productCookie.quantity : 1;

        const totalPrice = calculateTotalPerProduct(
            cartProduct,
            quantity,
            currency
        );

        return {
            ...cartProduct,
            selectedSize,
            quantity,
            totalPrice,
        };
    });

    return (
        <div className={styles.column}>
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
        </div>
    );
};
