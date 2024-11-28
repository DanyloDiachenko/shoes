import styles from "./styles.module.scss";

export const Services = () => {
    return (
        <div className={`container ${styles.services}`}>
            <div className="row">
                <div className={styles.column}>
                    <div className={styles.iconBox}>
                        <span className={styles.icon}>
                            <svg></svg>
                        </span>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Free Shipping</h3>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
