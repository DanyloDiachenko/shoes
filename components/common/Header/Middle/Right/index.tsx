import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { getCurrency } from "@/helpers/getCurrency";
import { Product } from "@/interfaces/product.interface";
import { getProduct } from "@/app/api/products";

export const Right = async () => {
    const currency = getCurrency();
    const cookieProducts = getCookieProductsServer() || [];

    let cartProducts: Product[] = [];

    if (cookieProducts?.length) {
        for (let i = 0; i < cookieProducts.length; i++) {
            const productToCart = await getProduct(cookieProducts[i].id);

            cartProducts = [...cartProducts, productToCart];
        }
    }

    return (
        <div className={styles.headerRight}>
            <Search />
            <CartDropdown
                currency={currency}
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
            />
        </div>
    );
};
