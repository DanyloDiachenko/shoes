import Link from "next/link";
import { AddressesProps } from "./addresses.props";
import styles from "./styles.module.scss";
import { FaRegEdit } from "react-icons/fa";

export const AddressesPageContent = ({ user }: AddressesProps) => {
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
                                {user.billingAddress ? (
                                    <>
                                        {user.firstName} {user.lastName}
                                        <br />
                                        {user.billingAddress.street} str
                                        <br />
                                        {user.billingAddress.city},{" "}
                                        {user.billingAddress.country}{" "}
                                        {user.billingAddress.postIndex}
                                        <br />
                                        {user.phone}
                                        <br />
                                        {user.email}
                                        <br />
                                    </>
                                ) : (
                                    "You have not set up this type of address yet."
                                )}
                                <Link href="#">
                                    Edit <FaRegEdit />
                                </Link>
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
                                {user.shippingAddress ? (
                                    <>
                                        {user.firstName} {user.lastName}
                                        <br />
                                        {user.shippingAddress.street} str
                                        <br />
                                        {user.shippingAddress.city},{" "}
                                        {user.shippingAddress.country}{" "}
                                        {user.shippingAddress.postIndex}
                                        <br />
                                        {user.phone}
                                        <br />
                                        {user.email}
                                        <br />
                                    </>
                                ) : (
                                    "You have not set up this type of address yet."
                                )}
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
