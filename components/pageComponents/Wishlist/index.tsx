import { Table } from "./Table";
import { WishlistShare } from "./WishlistShare";

export const WishlistPageComponent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <Table />
                <WishlistShare />
            </div>
        </div>
    );
};
