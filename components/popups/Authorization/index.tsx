"use client";

import { useDispatch } from "react-redux";
import { AuthorizationPopupProps } from "./authorizationPopup.props";
import { PopupType } from "@/types/popup.type";
import { setOpenedPopup } from "@/store/slices/openedPopup";
import { useRef, useState } from "react";
import { onOutsideClick } from "@/helpers/onOutsideClick";
import { SignInForm } from "./SignInForm";
import { RegisterForm } from "./RegisterForm";

export const AuthorizationPopup = ({ isOpened }: AuthorizationPopupProps) => {
    const [activeTab, setActiveTab] = useState<"signIn" | "register">("signIn");

    const popupRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const setOpenedPopupHandler = (popupToOpen: PopupType) => {
        dispatch(setOpenedPopup(popupToOpen));
    };

    onOutsideClick(popupRef, () => {
        setOpenedPopupHandler("");
    });

    return (
        <div
            className={`modal fade ${isOpened ? "show" : ""}`}
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            style={{ display: isOpened ? "block" : "none" }}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                ref={popupRef}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={() => setOpenedPopupHandler("")}
                        >
                            <span aria-hidden="true">
                                <i className="icon-close"></i>
                            </span>
                        </button>

                        <div className="form-box">
                            <div className="form-tab">
                                <ul
                                    className="nav nav-pills nav-fill"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${
                                                activeTab === "signIn"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            href="#"
                                            role="tab"
                                            aria-controls="signin"
                                            aria-selected="true"
                                            onClick={() =>
                                                setActiveTab("signIn")
                                            }
                                        >
                                            Sign In
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${
                                                activeTab === "register"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            href="#"
                                            role="tab"
                                            aria-controls="register"
                                            aria-selected="false"
                                            onClick={() =>
                                                setActiveTab("register")
                                            }
                                        >
                                            Register
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div
                                        className={`tab-pane fade ${
                                            activeTab === "signIn"
                                                ? "show active"
                                                : ""
                                        }`}
                                        role="tabpanel"
                                        aria-labelledby="signin-tab"
                                    >
                                        <SignInForm />
                                    </div>
                                    <div
                                        className={`tab-pane fade ${
                                            activeTab === "register"
                                                ? "show active"
                                                : ""
                                        }`}
                                        role="tabpanel"
                                        aria-labelledby="register-tab"
                                    >
                                        <RegisterForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
