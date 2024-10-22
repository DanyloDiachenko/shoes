import styles from "./styles.module.scss";
import { FaRegEdit } from "react-icons/fa";

export const AddressesPageContent = () => {
    return (
        <div
            className={styles.content}
            id="tab-addresses"
            role="tabpanel"
            aria-labelledby="tab-addresses-link"
        >
            <p>
                The following addresses will be used on the checkout page by
                default.
            </p>

            <div className="row">
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>
                                Billing Address
                            </h3>
                            <p>
                                User Name
                                <br />
                                User Company
                                <br />
                                John str
                                <br />
                                New York, NY 10001
                                <br />
                                1-234-987-6543
                                <br />
                                yourmail@mail.com
                                <br />
                                <a href="#">
                                    Edit <FaRegEdit />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>
                                Shipping Address
                            </h3>
                            <p>
                                You have not set up this type of address yet.
                                <br />
                                <a href="#">
                                    Edit <FaRegEdit />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
