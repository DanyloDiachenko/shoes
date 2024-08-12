import Link from "next/link";

export const CurrencyDropdown = () => {
    return(
        <div className="header-dropdown">
            <Link href="#">Usd</Link>
            <div className="header-menu">
                <ul>
                    <li>
                        <Link href="#">Eur</Link>
                    </li>
                    <li>
                        <Link href="#">Usd</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
