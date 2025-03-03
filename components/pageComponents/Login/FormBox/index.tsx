"use client";

import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { LoginTab } from "@/types/loginTab.type";
import { Form } from "./Form";

export const FormBox = () => {
    const [tab, setTab] = useState<LoginTab>("signIn");

    const onGoogleLoginClick = () => {};

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
                            <div className="row">
                                <Button
                                    colorType="btnGray"
                                    className={styles.buttonGoogle}
                                    onClick={onGoogleLoginClick}
                                >
                                    <FaGoogle />
                                    <span>Login With Google</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
