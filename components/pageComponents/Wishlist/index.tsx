import { getCookie } from "@/helpers/getCookie";
import { Table } from "./Table";
import { WishlistShare } from "./WishlistShare";
import { Product } from "@/interfaces/product.interface";
import { getProduct } from "@/app/api/products";
import { getCurrency } from "@/helpers/getCurrency";

export const WishlistPageComponent = async () => {
    const currency = await getCurrency();

    const wishlistIdsString = await getCookie("wishlistIds");
    const wishlistIds: string[] = wishlistIdsString
        ? JSON.parse(wishlistIdsString)
        : [];

    let wishlistProducts: Product[] = [];

    for (let i = 0; i < wishlistIds.length; i++) {
        const product = await getProduct(wishlistIds[i]);
        if (!product) {
            return;
        }

        wishlistProducts.push(product);
    }

    return (
        <div className="page-content">
            <div className="container">
                <Table
                    wishlistProductsServer={wishlistProducts}
                    currency={currency}
                />
                <WishlistShare />
            </div>
        </div>
    );
};
