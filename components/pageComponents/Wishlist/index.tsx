import styles from "./styles.module.scss";

export const WishlistPageComponent = () => {
    return (
        <div className={styles.pageContent}>
            <div className="container">
                <table className={styles.table}></table>
                <div className={styles.wishlistShare}></div>
            </div>
        </div>
    );
};
