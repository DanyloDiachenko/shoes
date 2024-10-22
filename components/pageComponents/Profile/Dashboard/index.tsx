import Link from "next/link";
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
                <Link href="#">Log out</Link>)
                <br />
                From your account dashboard you can view your{" "}
                <Link href="/dashboard/orders" className={styles.linkUnderline}>
                    recent orders
                </Link>
                , manage your{" "}
                <Link href="/dashboard/addresses">
                    shipping and billing addresses
                </Link>
                , and{" "}
                <Link href="/dashboard/account">
                    edit your password and account details
                </Link>
                .
            </p>
        </div>
    );
};
