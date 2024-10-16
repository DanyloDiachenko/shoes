"use client";

import styles from "./styles.module.scss";

export const FormBox = () => {
    return (
        <div className={styles.formBox}>
            <div className={styles.formTab}>
                <ul className={styles.navNavPills} role="tablist">
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
                <div className="tab-content">
                    <div
                        className="tab-pane fade"
                        id="signin-2"
                        role="tabpanel"
                        aria-labelledby="signin-tab-2"
                    >
                        <form action="#">
                            <div className="form-group">
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

                            <div className="form-group">
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

                            <div className="form-footer">
                                <button
                                    type="submit"
                                    className="btn btn-outline-primary-2"
                                >
                                    <span>LOG IN</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>

                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="signin-remember-2"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="signin-remember-2"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <a href="#" className="forgot-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </form>
                        <div className="form-choice">
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-g">
                                        <i className="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-f">
                                        <i className="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show active"
                        id="register-2"
                        role="tabpanel"
                        aria-labelledby="register-tab-2"
                    >
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="register-email-2">
                                    Your email address *
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="register-email-2"
                                    name="register-email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="register-password-2">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="register-password-2"
                                    name="register-password"
                                    required
                                />
                            </div>

                            <div className="form-footer">
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
                        <div className="form-choice">
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
