import styles from "./styles.module.scss";

export const Pagination = () => {
    return (
        <nav aria-label="Page navigation">
            <ul className={styles.pagination}>
                <li className={`${styles.pageItem} ${styles.inactive}`}>
                    <a
                        className={`${styles.pageLink} ${styles.pageLinkPrev}`}
                        href="#"
                        aria-label="Previous"
                        tabIndex={-1}
                        aria-disabled={true}
                    >
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-left"></i>
                        </span>
                        Prev
                    </a>
                </li>
                <li
                    className={`${styles.pageItem} ${styles.active}`}
                    aria-current="page"
                >
                    <a className={styles.pageLink} href="#">
                        1
                    </a>
                </li>
                <li className={`${styles.pageItem}`}>
                    <a className={styles.pageLink} href="#">
                        2
                    </a>
                </li>
                <li className={`${styles.pageItem}`}>
                    <a className={styles.pageLink} href="#">
                        3
                    </a>
                </li>
                <li className={styles.total}>of 6</li>
                <li className={`${styles.pageItem}`}>
                    <a
                        className={`${styles.pageLink} ${styles.pageLinkPrev}`}
                        href="#"
                        aria-label="Next"
                    >
                        Next{" "}
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-right"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
