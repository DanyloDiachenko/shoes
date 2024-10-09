import { Left } from "./Left";
import { Right } from "./Right";
import styles from "./styles.module.scss";
import { MiddleProps } from "./middle.props";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { Product } from "@/interfaces/product.interface";
import { getProduct } from "@/app/api/products";

export const Middle = async ({}: MiddleProps) => {
    let cartProducts: Product[] = [];

    const cookieProducts = getCookieProductsServer() || [];

    if (cookieProducts?.length) {
        for (let i = 0; i < cookieProducts.length; i++) {
            const productToCart = await getProduct(cookieProducts[i].id);

            cartProducts = [...cartProducts, productToCart];
        }
    }

    return (
        <div className={`${styles.headerMiddle} sticky-header`}>
            <div className={`container ${styles.container}`}>
                <Left />
                <Right cartProducts={cartProducts} />
            </div>
        </div>
    );
};
