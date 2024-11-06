"use client";

import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { FormEvent, useEffect, useState } from "react";
import { getProfile } from "@/app/api/auth/user";
import { getCookie } from "@/helpers/getCookie";
import { User } from "@/interfaces/user.inteface";
import { UnathorizedResponse } from "@/interfaces/responses/unathorized.interface";
import { closePopup as closePopupFunc } from "@/store/slices/openedPopup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { createOrUpdateAddress } from "@/app/api/addresses";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Inputes } from "./Inputes";
import { AddressFormFields } from "./addressFormFields.interface";

const titles: { [key: string]: string } = {
    "": "",
    createShippingAddress: "Create Shipping Address",
    createBillingAddress: "Create Billing Address",
    updateBillingAddress: "Change Billing Address",
    updateShippingAddress: "Change Shipping Address",
};

export const ChangeAddress = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    const [popupTitle, setPopupTitle] = useState<string>("");
    const [fields, setFields] = useState<AddressFormFields | null>(null);

    const isUserProfile = (
        profile: User | UnathorizedResponse
    ): profile is User => {
        return (profile as User).id !== undefined;
    };

    const getUserProfile = async () => {
        const token = await getCookie("token");
        if (!token || fields) return;

        const profile = await getProfile(token);
        if (!isUserProfile(profile)) return;

        const address =
            profile.billingAddress || profile.shippingAddress || null;
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

    const onFieldChange = (field: keyof AddressFormFields, value: string) => {
        setFields((prev) => (prev ? { ...prev, [field]: value } : prev));
    };

    const handleSubmit = async (
        type: "billing" | "shipping",
        action: "create" | "update"
    ) => {
        if (
            !fields ||
            !fields.street?.length ||
            !fields.city?.length ||
            !fields.country?.length ||
            !fields.postIndex?.length ||
            !fields.homeNumber?.length
        ) {
            toast.error("Please fill all possible fields");

            return;
        }

        const actionType = `${action}${
            type.charAt(0).toUpperCase() + type.slice(1)
        }` as
            | "createBilling"
            | "createShipping"
            | "updateBilling"
            | "updateShipping";

        const response = await createOrUpdateAddress(actionType, {
            street: fields.street,
            city: fields.city,
            country: fields.country,
            postIndex: fields.postIndex,
            homeNumber: fields.homeNumber,
        });

        if (response.id) {
            toast.success(
                `${
                    type.charAt(0).toUpperCase() + type.slice(1)
                } Address ${action}d successfully`
            );

            router.refresh();
            dispatch(closePopupFunc());
        }
    };

    const onSubmitClick = (e: FormEvent) => {
        e.preventDefault();

        const type = openedPopup.includes("Billing") ? "billing" : "shipping";
        const action = openedPopup.includes("create") ? "create" : "update";

        handleSubmit(type, action);
    };

    const onDiscardClick = (e: FormEvent) => {
        e.preventDefault();

        dispatch(closePopupFunc());
    };

    useEffect(() => {
        setPopupTitle(titles[openedPopup] || "");
    }, [openedPopup]);

    useEffect(() => {
        getUserProfile();
    }, []);

    if (!fields) return null;

    return (
        <div className={styles.formBox}>
            <div className={styles.title}>{popupTitle}</div>
            <div className={styles.content}>
                <form>
                    <Inputes fields={fields} onFieldChange={onFieldChange} />
                    <div className={styles.buttons}>
                        <Button
                            colorType="btnGray"
                            className={styles.cancelBtn}
                            onClick={onDiscardClick}
                        >
                            <IoMdClose /> Discard
                        </Button>
                        <Button
                            colorType="btnOutlinePrimary2"
                            type="submit"
                            className={styles.submitBtn}
                            onClick={onSubmitClick}
                        >
                            Submit <IoIosArrowRoundForward />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
