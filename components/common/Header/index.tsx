import { HeaderTop } from "./HeaderTop";
import { HeaderMiddle } from "./HeaderMiddle";

export const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
};
