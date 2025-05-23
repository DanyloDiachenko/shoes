"use client";

import Link from "next/link";
import { AddressesProps } from "./addresses.props";
import styles from "./styles.module.scss";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Popup } from "@/types/popup.type";
import { setOpenedPopup } from "@/store/slices/openedPopup";

export const AddressesPageContent = ({ user }: AddressesProps) => {
    const dispatch = useDispatch();

    const setOpenedPopupHandler = (popupToOpen: Popup) => {
        dispatch(setOpenedPopup(popupToOpen));
    };

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
                                        {user.billingAddress.street} str,{" "}
                                        {user.billingAddress.homeNumber}
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
                                <Link
                                    href={"#"}
                                    onClick={() =>
                                        setOpenedPopupHandler(
                                            user.billingAddress
                                                ? "updateBillingAddress"
                                                : "createBillingAddress"
                                        )
                                    }
                                    scroll={false}
                                >
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
                                        {user.shippingAddress.street} str,{" "}
                                        {user.shippingAddress.homeNumber}
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
                                <Link
                                    href={"#"}
                                    onClick={() =>
                                        setOpenedPopupHandler(
                                            user.shippingAddress
                                                ? "updateShippingAddress"
                                                : "createShippingAddress"
                                        )
                                    }
                                    scroll={false}
                                >
                                    Edit <FaRegEdit />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
