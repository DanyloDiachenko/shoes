"use client";

import { Input } from "@/components/UI/Input";
import { ChangeAddressProps } from "./changeAddress.props";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { FormEvent, useEffect, useState } from "react";
import { getProfile } from "@/app/api/auth/user";
import { getCookie } from "@/helpers/getCookie";
import { User } from "@/interfaces/user.inteface";
import { UnathorizedResponse } from "@/interfaces/responses/unathorized.interface";
import { Address } from "@/interfaces/address.interface";
import { closePopup as closePopupFunc } from "@/store/slices/openedPopup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

interface FormValues {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string;
    street: string | null;
    city: string | null;
    country: string | null;
    postIndex: string | null;
    homeNumber: string | null;
}

export const ChangeAddress = ({}: ChangeAddressProps) => {
    const dispatch = useDispatch();

    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    const [popupTitle, setPopupTitle] = useState<string>("");
    const [fields, setFields] = useState<FormValues | null>(null);

    const isUserProfile = (
        profile: User | UnathorizedResponse
    ): profile is User => {
        return (profile as User).id !== undefined;
    };

    const closePopup = () => {
        dispatch(closePopupFunc());
    };

    const getUserProfile = async () => {
        if (fields) {
            return;
        }

        const token = await getCookie("token");

        if (!token) return;

        const profile = await getProfile(token);

        if (!isUserProfile(profile)) return;

        const setAddressFields = (address: Address | null) => {
            setFields({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
                email: profile.email,
                street: address?.street || "",
                city: address?.city || "",
                country: address?.country || "",
                postIndex: address?.postIndex || "",
                homeNumber: address?.homeNumber || "",
            });
        };

        if (profile.billingAddress) {
            setAddressFields(profile.billingAddress);
        } else if (profile.shippingAddress) {
            setAddressFields(profile.shippingAddress);
        } else {
            setAddressFields(null);
        }
    };

    const onDiscardClick = (e: FormEvent) => {
        e.preventDefault();

        closePopup();
    };

    const onSubmitClick = (e: FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        switch (openedPopup) {
            case "createBillingAddress":
                setPopupTitle("Create Billing Address");
                break;
            case "createShippingAddress":
                setPopupTitle("Create Shipping Address");
                break;
            case "changeBillingAddress":
                setPopupTitle("Change Billing Address");
                break;
            case "changeShippingAddress":
                setPopupTitle("Change Shipping Address");
                break;
            default:
                setPopupTitle("");
        }
    }, [openedPopup]);

    useEffect(() => {
        getUserProfile();
    }, []);

    if (!fields) {
        return <></>;
    }

    return (
        <div className={styles.formBox}>
            <div className={styles.title}>{popupTitle}</div>
            <div className={styles.content}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-firstName">First Name</label>
                        <Input
                            type="text"
                            id="address-firstName"
                            name="address-firstName"
                            value={fields?.firstName || ""}
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-firstName">Last Name</label>
                        <Input
                            type="text"
                            id="address-lastName"
                            name="address-lastName"
                            value={fields.lastName || ""}
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-phone">User Phone</label>
                        <Input
                            type="phone"
                            id="address-phone"
                            name="address-phone"
                            value={fields?.phone || ""}
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">User Email</label>
                        <Input
                            type="email"
                            id="address-email"
                            name="address-email"
                            value={fields.email}
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-country">Country</label>
                        <Input
                            type="text"
                            id="address-country"
                            name="address-country"
                            value={fields.country || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    country: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-city">City</label>
                        <Input
                            type="text"
                            id="address-city"
                            name="address-city"
                            value={fields.city || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    city: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-street">Street</label>
                        <Input
                            type="text"
                            id="address-street"
                            name="address-street"
                            value={fields.street || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    street: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-street">Home Number</label>
                        <Input
                            type="text"
                            id="address-home-number"
                            name="address-home-number"
                            value={fields.homeNumber || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    homeNumber: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-postal-code">Postal Code</label>
                        <Input
                            type="text"
                            id="address-postal-code"
                            name="address-postal-code"
                            value={fields.postIndex || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    postIndex: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            colorType="btnGray"
                            className={styles.cancelBtn}
                            onClick={onDiscardClick}
                        >
                            <IoMdClose />
                            Discard
                        </Button>
                        <Button
                            colorType="btnOutlinePrimary2"
                            type="submit"
                            className={styles.submitBtn}
                            onClick={onSubmitClick}
                        >
                            Submit
                            <IoIosArrowRoundForward />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
