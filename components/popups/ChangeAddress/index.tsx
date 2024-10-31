"use client";

import { Input } from "@/components/UI/Input";
import { ChangeAddressProps } from "./changeAddress.props";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getProfile } from "@/app/api/auth/user";
import { getClientCookie } from "@/helpers/getClientCookie";

export const ChangeAddress = ({}: ChangeAddressProps) => {
    const getUserProfile = async () => {
        const token = await getClientCookie("token");

        if (!token) {
            return;
        }

        const profile = await getProfile(token);
        console.log(profile);
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <div className={styles.formBox}>
            <div className={styles.title}>Change Address</div>
            <div className={styles.content}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="address-name">User Name</label>
                        <Input
                            type="text"
                            id="address-name"
                            name="address-name"
                            value="User Name"
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
