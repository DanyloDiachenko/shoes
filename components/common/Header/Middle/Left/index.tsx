import Link from "next/link";
import { headerNavigation } from "@/data/headerNavigation";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MobileMenuButton } from "./MobileMenuButton";
import { getCategories } from "@/app/api/categories";
import {
    Product,
    ProductBrand,
    ProductCategory,
    ProductSize,
} from "@/interfaces/product.interface";
import { getProducts } from "@/app/api/products";
import { getCurrency } from "@/helpers/getCurrency";
import { getBrands } from "@/app/api/brands";
import { getSizes } from "@/app/api/sizes";

export const Left = async () => {
    const currency = await getCurrency();

    let bestsellers: Product[] = [];
    let categories: ProductCategory[] = [];
    let brands: ProductBrand[] = [];
    let sizes: ProductSize[] = [];
    bestsellers = (
        await getProducts({
            pageNumber: 1,
            limit: 8,
            sortBy: "mostPopular",
            categorySlugs: ["bestsellers"],
            sizeSlugs: undefined,
            colorSlug: undefined,
            currency,
        })
    ).data;
    categories = await getCategories();
    brands = await getBrands();
    sizes = await getSizes();

    return (
        <div className={styles.headerLeft}>
            <MobileMenuButton />
            <Link href="/" className={styles.logo}>
                <img
                    src="/images/icons/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                />
            </Link>
            <nav className={styles.mainNav}>
                <ul className={styles.menu}>
                    {headerNavigation.map((item, index) => (
                        <li key={index} className={styles.linksWrapper}>
                            <Link href={item.link} className={styles.mainLink}>
                                {item.title} <IoIosArrowDown />
                            </Link>
                            <ul className={styles.sublinks}>
                                {item.sublinks.map((sublink, index) => (
                                    <li key={index}>
                                        <Link href={sublink.link}>
                                            {sublink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
