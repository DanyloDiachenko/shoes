import styles from "./styles.module.scss";

export const Banner = () => {
    return (
        <div className="container">
            <div className={styles.pageHeader}>
                <h1 className={styles.title}>
                    About us<span>Who we are</span>
                </h1>
            </div>
        </div>
    );
};
