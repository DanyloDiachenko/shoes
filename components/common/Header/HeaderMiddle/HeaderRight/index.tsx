import { Search } from "./Search";
import { CompareDropdown } from "./CompareDropdown";
import { CartDropdown } from "./CartDropdown";

export const HeaderRight = () => {
    return (
        <div className="header-right">
            <Search />
            <CompareDropdown />
            <CartDropdown />
        </div>
    );
};
