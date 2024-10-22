"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AccountProps } from "./account.props";
import { useState } from "react";

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

    const onSubmit = () => {};

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
                            required
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
                            required
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
                    required
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
                <Input type="email" required value={user.email} disabled />

                <label>Phone number *</label>
                <Input
                    type="string"
                    required
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
                    required
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
                    required
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
                    required
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
