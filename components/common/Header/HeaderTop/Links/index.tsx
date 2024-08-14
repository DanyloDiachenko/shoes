"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { setOpenedPopup } from "@/store/slices/openedPopup";
import { PopupType } from "@/types/popup.type";

export const Links = () => {
    const dispatch = useDispatch();

    const setOpenedPopupHandler = (popupToOpen: PopupType) => {
        dispatch(setOpenedPopup(popupToOpen));
    };

    return (
        <div className="header-right">
            <ul className="top-menu">
                <li>
                    <Link href="#">Links</Link>
                    <ul>
                        <li>
                            <Link href="tel:#">
                                <i className="icon-phone"></i>Call: +0123 456
                                789
                            </Link>
                        </li>
                        <li>
                            <Link href="wishlist.html">
                                <i className="icon-heart-o"></i>
                                Wishlist <span>(3)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="about.html">About Us</Link>
                        </li>
                        <li>
                            <Link href="contact.html">Contact Us</Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() =>
                                    setOpenedPopupHandler("authorization")
                                }
                            >
                                <i className="icon-user"></i>Login
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
