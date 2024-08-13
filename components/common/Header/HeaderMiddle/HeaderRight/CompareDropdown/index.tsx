import Link from "next/link";

export const CompareDropdown = () => {
    return (
        <div className="dropdown compare-dropdown">
            <Link
                href="#"
                className="dropdown-toggle"
                role="button"
                title="Compare Products"
            >
                <i className="icon-random"></i>
            </Link>

            <div className="dropdown-menu dropdown-menu-right">
                <ul className="compare-products">
                    <li className="compare-product">
                        <Link
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                        >
                            <i className="icon-close"></i>
                        </Link>
                        <h4 className="compare-product-title">
                            <Link href="product.html">Blue Night Dress</Link>
                        </h4>
                    </li>
                    <li className="compare-product">
                        <Link
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                        >
                            <i className="icon-close"></i>
                        </Link>
                        <h4 className="compare-product-title">
                            <Link href="product.html">White Long Skirt</Link>
                        </h4>
                    </li>
                </ul>

                <div className="compare-actions">
                    <Link href="#" className="action-link">
                        Clear All
                    </Link>
                    <Link href="#" className="btn btn-outline-primary-2">
                        <span>Compare</span>
                        <i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};
