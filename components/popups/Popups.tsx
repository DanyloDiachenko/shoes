"use client";

import { useSelector } from "react-redux";
import { AuthorizationPopup } from "./Authorization";
import { NewsletterPopup } from "./Newsletter";
import type { RootState } from "@/store";

export const Popups = () => {
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    return (
        <>
            <AuthorizationPopup isOpened={openedPopup === "authorization"} />
            {/* <NewsletterPopup /> */}
            {openedPopup.length && (
                <div
                    className={`modal-backdrop fade ${
                        openedPopup.length ? "show" : ""
                    }`}
                ></div>
            )}
        </>
    );
};
