import styles from "./styles.module.scss";

export const DashboardPageContent = () => {
    return (
        <div
            className={styles.content}
            id="tab-dashboard"
            role="tabpanel"
            aria-labelledby="tab-dashboard-link"
        >
            <p>
                Hello <span className={styles.fontDark}>User</span> (not{" "}
                <span className={styles.fontDark}>User</span>?{" "}
                <a href="#">Log out</a>)
                <br />
                From your account dashboard you can view your{" "}
                <a href="#tab-orders" className={styles.linkUnderline}>
                    recent orders
                </a>
                , manage your{" "}
                <a href="#tab-address">shipping and billing addresses</a>, and{" "}
                <a href="#tab-account">
                    edit your password and account details
                </a>
                .
            </p>
        </div>
    );
};
