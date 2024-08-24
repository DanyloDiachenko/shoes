import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";

export const ProductDetailsTopRightColumnActions = () => {
    return (
        <div className={styles.actions}>
            <Button colorType="btnOutlinePrimary2" className={styles.addToCart}>
                <span>Add to cart</span>
            </Button>
            <div className={styles.actionsWrapper}>
                <Button colorType="btnPrimary" className={styles.addToWishlist}>
                    <span>Add to Wishlist</span>
                </Button>
            </div>
        </div>
    );
};
