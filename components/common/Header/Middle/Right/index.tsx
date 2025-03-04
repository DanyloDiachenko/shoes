import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { getCurrency } from "@/helpers/getCurrency";
import { getProduct } from "@/api/products";
import { Product } from "@/interfaces/entities/product.interface";

export const Right = async () => {
    const currency = await getCurrency();
    const cookieProducts = (await getCookieProductsServer()) || [];

    let cartProducts: Product[] = [];

    if (cookieProducts?.length) {
        for (let i = 0; i < cookieProducts.length; i++) {
            const productToCart = await getProduct(cookieProducts[i].id);
            if (!("id" in productToCart)) {
                continue;
            }

            cartProducts = [...cartProducts, productToCart];
        }
    }

    return (
        <div className={styles.headerRight}>
            <Search currency={currency} />
            <CartDropdown
                currency={currency}
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
            />
        </div>
    );
};
