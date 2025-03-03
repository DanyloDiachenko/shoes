import styles from "./styles.module.scss";
import { ActionsProps } from "./actions.props";
import { AddProductToCart } from "@/components/common/AddProductToCart";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { AddToWishlist } from "./AddToWislist";

export const Actions = async ({ product }: ActionsProps) => {
    const cookieProducts = (await getCookieProductsServer()) || [];

    return (
        <div className={styles.actions}>
            <AddProductToCart
                product={product}
                cookieProducts={cookieProducts}
            />
            <div className={styles.actionsWrapper}>
                <AddToWishlist product={product} />
            </div>
        </div>
    );
};
