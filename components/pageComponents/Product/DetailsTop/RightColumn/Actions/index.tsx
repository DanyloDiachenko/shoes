import { LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaRegHeart } from "react-icons/fa";

export const ProductDetailsTopRightColumnActions = () => {
    return (
        <div className={styles.actions}>
            <Button
                colorType="btnOutlinePrimary2"
                className={`${styles.addToCart}`}
                /* className={`${styles.addToCart} ${styles.inactive}`} */
            >
                <LiaCartPlusSolid />
                <span>add to cart</span>
            </Button>
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
