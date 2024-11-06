import Link from "next/link";
import styles from "./styles.module.scss";
import { Logout } from "./Logout";
import { DashboardProps } from "./dashboard.props";

export const DashboardPageContent = ({ user }: DashboardProps) => {
    return (
        <div
            className={styles.content}
            id="tab-dashboard"
            role="tabpanel"
            aria-labelledby="tab-dashboard-link"
        >
            <p>
                {user.firstName && user.lastName ? (
                    <>
                        Hello,{" "}
                        <span className={styles.fontDark}>
                            {user.firstName}
                            {user.lastName && ` ${user.lastName}`}
                        </span>{" "}
                        (not{" "}
                        <span className={styles.fontDark}>
                            {user.firstName}
                            {user.lastName && ` ${user.lastName}`}
                        </span>
                    </>
                ) : (
                    <>
                        Hello,{" "}
                        <span className={styles.fontDark}>{user.email}</span>{" "}
                        <>{"("}not </>
                        <span className={styles.fontDark}>{user.email}</span>
                    </>
                )}
                ? <Logout />)
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
