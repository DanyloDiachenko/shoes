"use client";

import { Input } from "@/components/UI/Input";
import { ChangeAddressProps } from "./changeAddress.props";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfile } from "@/app/api/auth/user";
import { getClientCookie } from "@/helpers/getClientCookie";
import { User } from "@/interfaces/user.inteface";
import { UnathorizedResponse } from "@/interfaces/responses/unathorized.interface";

interface FormValues {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string;
    street: string | null;
    city: string | null;
    country: string | null;
    postIndex: string | null;
}

export const ChangeAddress = ({}: ChangeAddressProps) => {
    const [popupTitle, setPopupTitle] = useState<string>("");
    const [fields, setFields] = useState<FormValues>();

    const isUserProfile = (
        profile: User | UnathorizedResponse
    ): profile is User => {
        return (profile as User).id !== undefined;
    };

    const getUserProfile = async () => {
        const token = getClientCookie("token");

        if (!token) {
            return;
        }

        const profile = await getProfile(token);

        if (!isUserProfile(profile)) {
            return;
        }

        if (profile.billingAddress) {
            setPopupTitle("Change Billing Address");
            setFields({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
                email: profile.email,
                street: profile.billingAddress?.street,
                city: profile.billingAddress?.city,
                country: profile.billingAddress?.country,
                postIndex: profile.billingAddress?.postIndex,
            });
        } else if (profile.shippingAddress) {
            setPopupTitle("Change Shipping Address");
            setFields({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
                email: profile.email,
                street: profile.shippingAddress?.street,
                city: profile.shippingAddress?.city,
                country: profile.shippingAddress?.country,
                postIndex: profile.shippingAddress?.postIndex,
            });
        } else if (!profile.billingAddress) {
            setPopupTitle("Create Billing Address");
            setFields({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
                email: profile.email,
                street: "",
                city: "",
                country: "",
                postIndex: "",
            });
        } else if (!profile.shippingAddress) {
            setPopupTitle("Create Shipping Address");
            setFields({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
                email: profile.email,
                street: "",
                city: "",
                country: "",
                postIndex: "",
            });
        }
    };

    useEffect(() => {
        getUserProfile();
    }, []);

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
                            value="User First Name"
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-firstName">Last Name</label>
                        <Input
                            type="text"
                            id="address-lastName"
                            name="address-lastName"
                            value="User Last Name"
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-phone">User Phone</label>
                        <Input
                            type="phone"
                            id="address-phone"
                            name="address-phone"
                            value="1-234-987-6543"
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">User Email</label>
                        <Input
                            type="email"
                            id="address-email"
                            name="address-email"
                            value="yourmail@mail.com"
                            disabled
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-street">Street</label>
                        <Input
                            type="text"
                            id="address-street"
                            name="address-street"
                            value=""
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-city">City</label>
                        <Input
                            type="text"
                            id="address-city"
                            name="address-city"
                            value=""
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-postal-code">Postal Code</label>
                        <Input
                            type="text"
                            id="address-postal-code"
                            name="address-postal-code"
                            value=""
                        />
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            colorType="btnGray"
                            className={styles.cancelBtn}
                        >
                            <IoMdClose />
                            Discard
                        </Button>
                        <Button
                            colorType="btnOutlinePrimary2"
                            type="submit"
                            className={styles.submitBtn}
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
