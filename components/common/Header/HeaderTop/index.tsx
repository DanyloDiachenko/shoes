import Link from "next/link";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { LanguageDropdown } from "./LanguageDropdown";

export const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <CurrencyDropdown />
                    <LanguageDropdown />
                </div>

                <div className="header-right">
                    <ul className="top-menu">
                        <li>
                            <Link href="#">Links</Link>
                            <ul>
                                <li>
                                    <Link href="tel:#">
                                        <i className="icon-phone"></i>Call:
                                        +0123 456 789
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
                                        href="#signin-modal"
                                        data-toggle="modal"
                                    >
                                        <i className="icon-user"></i>Login
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
