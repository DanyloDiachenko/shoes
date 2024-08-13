import Link from "next/link";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

export const HeaderMiddle = () => {
    return (
        <div className="header-middle sticky-header">
            <div className="container">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    );
};
