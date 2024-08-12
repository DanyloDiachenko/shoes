import Link from "next/link";

export const LanguageDropdown = () => {
    return (
        <div className="header-dropdown">
            <Link href="#">Eng</Link>
            <div className="header-menu">
                <ul>
                    <li>
                        <Link href="#">English</Link>
                    </li>
                    <li>
                        <Link href="#">French</Link>
                    </li>
                    <li>
                        <Link href="#">Spanish</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}