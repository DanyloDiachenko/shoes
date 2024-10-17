"use client";

import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Checkbox } from "@/components/UI/Checkbox";
import Link from "next/link";

export const FormBox = () => {
    return (
        <div className={styles.formBox}>
            <div className={styles.formTab}>
                <ul className={styles.navPills} role="tablist">
                    <li className={styles.navItem}>
                        <a
                            className={styles.navLink}
                            id="signin-tab-2"
                            href="#signin-2"
                            role="tab"
                            aria-controls="signin-2"
                            aria-selected={false}
                        >
                            Sign In
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a
                            className={`${styles.navLink} ${styles.active}`}
                            id="register-tab-2"
                            href="#register-2"
                            role="tab"
                            aria-controls="register-2"
                            aria-selected="true"
                        >
                            Register
                        </a>
                    </li>
                </ul>
                <div className={styles.tabContent}>
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
                                <Link href="#" className={styles.forgotLink}>
                                    Forgot Your Password?
                                </Link>
                            </div>
                        </form>
                        <div className={styles.formChoice}>
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                                <div className={styles.column}>
                                    <a href="#" className="btn btn-login btn-g">
                                        <i className="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>
                                <div className={styles.column}>
                                    <a href="#" className="btn btn-login btn-f">
                                        <i className="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <button
                                    type="submit"
                                    className="btn btn-outline-primary-2"
                                >
                                    <span>SIGN UP</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>

                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="register-policy-2"
                                        required
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="register-policy-2"
                                    >
                                        I agree to the{" "}
                                        <a href="#">privacy policy</a> *
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className={styles.formChoice}>
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-g">
                                        <i className="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        href="#"
                                        className="btn btn-login  btn-f"
                                    >
                                        <i className="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
