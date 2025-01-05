import { getCookie } from "@/helpers/getCookie";
import { Table } from "./Table";
import { WishlistShare } from "./WishlistShare";

const getWishlistIdsCookie = await getCookie("wishlistIds");

export const WishlistPageComponent = () => {
    console.log(getWishlistIdsCookie);

    return (
        <div className="page-content">
            <div className="container">
                <Table />
                <WishlistShare />
            </div>
        </div>
    );
};
