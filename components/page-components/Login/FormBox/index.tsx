"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { LoginTab } from "@/types/loginTab.type";
import { Form } from "./Form";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { googleAuth } from "@/api/auth";
import { setCookie } from "@/helpers/setCookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAndFormatResponseErrorMessage } from "@/helpers/getAndFormatResponseErrorMessage";

export const FormBox = () => {
    const router = useRouter();

    const [tab, setTab] = useState<LoginTab>("signIn");

    const onGoogleLogin = async (response: CredentialResponse) => {
        try {
            const res = await googleAuth(response.credential || "");
            console.log(res);

            if ("token" in res) {
                setCookie("token", res.token);
                toast.success("Login successful");
                router.refresh();

                setTimeout(() => {
                    router.push("/dashboard/account");
                }, 1000);
            } else {
                getAndFormatResponseErrorMessage(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.formBox}>
            <div className={styles.formTab}>
                <ul className={styles.navPills} role="tablist">
                    <li className={styles.navItem}>
                        <button
                            className={`${styles.navButton} ${
                                tab === "signIn" ? styles.active : ""
                            }`}
                            role="tab"
                            aria-selected={tab === "signIn"}
                            onClick={() => setTab("signIn")}
                        >
                            Sign In
                        </button>
                    </li>
                    <li className={styles.navItem}>
                        <button
                            className={`${styles.navButton} ${
                                tab === "register" ? styles.active : ""
                            }`}
                            role="tab"
                            aria-selected={tab === "register"}
                            onClick={() => setTab("register")}
                        >
                            Register
                        </button>
                    </li>
                </ul>
                <div className={styles.tabContent}>
                    <div
                        className={styles.tabPane}
                        role="tabpanel"
                        aria-labelledby="signin-tab-2"
                    >
                        <Form tab={tab} />
                        <div className={styles.formChoice}>
                            <p>or sign in with</p>
                            <div className={styles.googleLogin}>
                                <GoogleLogin
                                    onSuccess={onGoogleLogin}
                                    onError={() => {
                                        toast.error("Login failed, try again");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
