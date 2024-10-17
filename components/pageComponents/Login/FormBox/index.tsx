"use client";

import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Checkbox } from "@/components/UI/Checkbox";
import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export const FormBox = () => {
    const [tab, setTab] = useState<"signIn" | "register">("signIn");

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
                    {tab === "signIn" ? (
                        <div
                            className={styles.tabPane}
                            id="signin-2"
                            role="tabpanel"
                            aria-labelledby="signin-tab-2"
                        >
                            <form action="#">
                                <div className={styles.formGroup}>
                                    <label htmlFor="singin-email-2">
                                        Username or email address *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="singin-email-2"
                                        name="singin-email"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="singin-password-2">
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="singin-password-2"
                                        name="singin-password"
                                        required
                                    />
                                </div>

                                <div className={styles.formFooter}>
                                    <Button
                                        type="submit"
                                        colorType="btnOutlinePrimary2"
                                        className={styles.button}
                                    >
                                        <span>LOG IN</span>
                                        <IoIosArrowRoundForward />
                                    </Button>

                                    <Checkbox
                                        title="Remember Me"
                                        id="signin-remember-2"
                                    />
                                    <Link
                                        href="#"
                                        className={styles.forgotLink}
                                    >
                                        Forgot Your Password?
                                    </Link>
                                </div>
                            </form>
                            <div className={styles.formChoice}>
                                <p>or sign in with</p>
                                <div className="row">
                                    <div className={styles.column}>
                                        <Button
                                            colorType="btnGray"
                                            className={styles.buttonGoogle}
                                        >
                                            <FaGoogle />
                                            <span>Login With Google</span>
                                        </Button>
                                    </div>
                                    <div className={styles.column}>
                                        <Button
                                            colorType="btnGray"
                                            className={styles.buttonFacebook}
                                        >
                                            <FaFacebookF />
                                            <span>Login With Facebook</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={styles.tabPane}
                            id="register-2"
                            role="tabpanel"
                            aria-labelledby="register-tab-2"
                        >
                            <form action="#">
                                <div className={styles.formGroup}>
                                    <label htmlFor="register-email-2">
                                        Your email address *
                                    </label>
                                    <input
                                        type="email"
                                        className={styles.formControl}
                                        id="register-email-2"
                                        name="register-email"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="register-password-2">
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        className={styles.formControl}
                                        id="register-password-2"
                                        name="register-password"
                                        required
                                    />
                                </div>

                                <div className={styles.formFooter}>
                                    <Button
                                        type="submit"
                                        colorType="btnOutlinePrimary2"
                                        className={styles.button}
                                    >
                                        <span>SIGN UP</span>
                                        <IoIosArrowRoundForward />
                                    </Button>

                                    <Checkbox
                                        title="I agree to the privacy policy *"
                                        id="register-policy-2"
                                    />
                                </div>
                            </form>
                            <div className={styles.formChoice}>
                                <p>or sign in with</p>
                                <div className="row">
                                    <div className={styles.column}>
                                        <Button
                                            colorType="btnGray"
                                            className={styles.buttonGoogle}
                                        >
                                            <FaGoogle />
                                            <span>Login With Google</span>
                                        </Button>
                                    </div>
                                    <div className={styles.column}>
                                        <Button
                                            colorType="btnGray"
                                            className={styles.buttonFacebook}
                                        >
                                            <FaFacebookF />
                                            <span>Login With Facebook</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
