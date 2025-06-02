"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AccountProps } from "./account.props";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { getAndFormatResponseErrorMessage } from "@/helpers/getAndFormatResponseErrorMessage";
import { getCookie } from "@/helpers/getCookie";
import { updateProfile } from "@/api/auth";

interface FormValues {
    firstName: string | null;
    lastName: string | null;
    displayName: string | null;
    phone: string | null;
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export const AccountPageContent = ({ user }: AccountProps) => {
    const [fields, setFields] = useState<FormValues>({
        ...user,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const token = (await getCookie("token")) as string;

        if (fields.newPassword) {
            if (fields.newPassword !== fields.confirmNewPassword) {
                toast.error("New passwords do not match");

                return;
            }
        }

        const response = await updateProfile({
            firstName: fields.firstName || undefined,
            lastName: fields.lastName || undefined,
            displayName: fields.displayName || undefined,
            phone: fields.phone || undefined,
            currentPassword: fields.currentPassword || undefined,
            newPassword: fields.newPassword || undefined,
        });

        if (!("error" in response)) {
            toast.success("Your profile was successfuly updated");
        } else {
            toast.error(getAndFormatResponseErrorMessage(response));
        }
    };

    return (
        <div
            className={styles.content}
            id="tab-account"
            role="tabpanel"
            aria-labelledby="tab-account-link"
        >
            <form action="#">
                <div className="row">
                    <div className={styles.column}>
                        <label>First Name *</label>
                        <Input
                            type="text"
                            value={fields.firstName || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    firstName: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className={styles.column}>
                        <label>Last Name *</label>
                        <Input
                            type="text"
                            value={fields.lastName || ""}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <label>Display Name *</label>
                <Input
                    type="text"
                    value={fields.displayName || ""}
                    onChange={(e) =>
                        setFields({
                            ...fields,
                            displayName: e.target.value,
                        })
                    }
                />
                <small className={styles.formText}>
                    This will be how your name will be displayed in the account
                    section and in reviews
                </small>

                <label>Email *</label>
                <Input type="email" value={user.email} disabled />

                <label>Phone number *</label>
                <Input
                    type="string"
                    value={fields.phone || ""}
                    onChange={(e) =>
                        setFields({
                            ...fields,
                            phone: e.target.value,
                        })
                    }
                />

                <label>Current password (leave blank to leave unchanged)</label>
                <Input
                    type="password"
                    value={fields.currentPassword || ""}
                    onChange={(e) =>
                        setFields({
                            ...fields,
                            currentPassword: e.target.value,
                        })
                    }
                />

                <label>New password (leave blank to leave unchanged)</label>
                <Input
                    type="password"
                    value={fields.newPassword || ""}
                    onChange={(e) =>
                        setFields({
                            ...fields,
                            newPassword: e.target.value,
                        })
                    }
                />

                <label>Confirm new password</label>
                <Input
                    type="password"
                    className={styles.marginBottom}
                    value={fields.confirmNewPassword || ""}
                    onChange={(e) =>
                        setFields({
                            ...fields,
                            confirmNewPassword: e.target.value,
                        })
                    }
                />
                <Button
                    colorType="btnOutlinePrimary2"
                    type="submit"
                    onClick={onSubmit}
                >
                    <span>SAVE CHANGES</span>
                    <IoIosArrowRoundForward />
                </Button>
            </form>
        </div>
    );
};
