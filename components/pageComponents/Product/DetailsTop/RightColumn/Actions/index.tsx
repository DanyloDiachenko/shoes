import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaRegHeart } from "react-icons/fa";
import { ActionsProps } from "./actions.props";
import { AddProductToCart } from "@/components/additional/AddProductToCart";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";

export const Actions = async ({ product }: ActionsProps) => {
    const cookieProducts = await getCookieProductsServer() || [];

    return (
        <div className={styles.actions}>
            <AddProductToCart
                product={product}
                cookieProducts={cookieProducts}
            />
            <div className={styles.actionsWrapper}>
                <Button
                    colorType="btnOutlinePrimary2"
                    className={styles.addToWishlist}
                >
                    <FaRegHeart />
                    <span>Add to Wishlist</span>
                </Button>
            </div>
        </div>
    );
};
