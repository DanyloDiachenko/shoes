import Link from "next/link";

export const HeaderMiddle = () => {
    return (
        <div className="header-middle sticky-header">
            <div className="container">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars"></i>
                    </button>
                    <Link href="/" className="logo">
                        <img
                            src="/images/logo.png"
                            alt="Molla Logo"
                            width="105"
                            height="25"
                        />
                    </Link>
                    <nav className="main-nav">
                        <ul className="menu sf-arrows">
                            <li>
                                <Link
                                    href="product.html"
                                    className="sf-with-ul"
                                >
                                    Product
                                </Link>

                                <div className="megamenu megamenu-sm">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="menu-col">
                                                <div className="menu-title">
                                                    Product Details
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            Default
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            Centered
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                Extended Info
                                                                <span className="tip tip-new">
                                                                    New
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner banner-overlay">
                                                <Link href="/products">
                                                    <img
                                                        src="/images/menu/banner-2.jpg"
                                                        alt="Banner"
                                                    />

                                                    <div className="banner-content banner-content-bottom">
                                                        <div className="banner-title text-white">
                                                            New Trends
                                                            <br />
                                                            <span>
                                                                <strong>
                                                                    spring 2024
                                                                </strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#" className="sf-with-ul">
                                    Pages
                                </Link>

                                <ul>
                                    <li>
                                        <Link
                                            href="about.html"
                                            className="sf-with-ul"
                                        >
                                            About
                                        </Link>

                                        <ul>
                                            <li>
                                                <Link href="about.html">
                                                    About 01
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="about-2.html">
                                                    About 02
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            href="contact.html"
                                            className="sf-with-ul"
                                        >
                                            Contact
                                        </Link>

                                        <ul>
                                            <li>
                                                <Link href="contact.html">
                                                    Contact 01
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="contact-2.html">
                                                    Contact 02
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="login.html">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="faq.html">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="404.html">Error 404</Link>
                                    </li>
                                    <li>
                                        <Link href="coming-soon.html">
                                            Coming Soon
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="blog.html" className="sf-with-ul">
                                    Blog
                                </Link>

                                <ul>
                                    <li>
                                        <Link href="blog.html">Classic</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-listing.html">
                                            Listing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">Grid</Link>
                                        <ul>
                                            <li>
                                                <Link href="blog-grid-2cols.html">
                                                    Grid 2 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-grid-3cols.html">
                                                    Grid 3 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-grid-4cols.html">
                                                    Grid 4 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-grid-sidebar.html">
                                                    Grid sidebar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#">Masonry</Link>
                                        <ul>
                                            <li>
                                                <Link href="blog-masonry-2cols.html">
                                                    Masonry 2 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-masonry-3cols.html">
                                                    Masonry 3 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-masonry-4cols.html">
                                                    Masonry 4 columns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-masonry-sidebar.html">
                                                    Masonry sidebar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#">Mask</Link>
                                        <ul>
                                            <li>
                                                <Link href="blog-mask-grid.html">
                                                    Blog mask grid
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog-mask-masonry.html">
                                                    Blog mask masonry
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#">Single Post</Link>
                                        <ul>
                                            <li>
                                                <Link href="single.html">
                                                    Default with sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="single-fullwidth.html">
                                                    Fullwidth no sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="single-fullwidth-sidebar.html">
                                                    Fullwidth with sidebar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    href="elements-list.html"
                                    className="sf-with-ul"
                                >
                                    Elements
                                </Link>

                                <ul>
                                    <li>
                                        <Link href="elements-products.html">
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-typography.html">
                                            Typography
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-titles.html">
                                            Titles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-banners.html">
                                            Banners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-product-category.html">
                                            Product Category
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-video-banners.html">
                                            Video Banners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-buttons.html">
                                            Buttons
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-accordions.html">
                                            Accordions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-tabs.html">
                                            Tabs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-testimonials.html">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-blog-posts.html">
                                            Blog Posts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-portfolio.html">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-cta.html">
                                            Call to Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="elements-icon-boxes.html">
                                            Icon Boxes
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <div className="header-search">
                        <Link
                            href="#"
                            className="search-toggle"
                            role="button"
                            title="Search"
                        >
                            <i className="icon-search"></i>
                        </Link>
                        <form action="#" method="get">
                            <div className="header-search-wrapper">
                                <label htmlFor="q" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    className="form-control"
                                    name="q"
                                    id="q"
                                    placeholder="Search in..."
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className="dropdown compare-dropdown">
                        <Link
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-display="static"
                            title="Compare Products"
                            aria-label="Compare Products"
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
                                        <Link href="product.html">
                                            Blue Night Dress
                                        </Link>
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
                                        <Link href="product.html">
                                            White Long Skirt
                                        </Link>
                                    </h4>
                                </li>
                            </ul>

                            <div className="compare-actions">
                                <Link href="#" className="action-link">
                                    Clear All
                                </Link>
                                <Link
                                    href="#"
                                    className="btn btn-outline-primary-2"
                                >
                                    <span>Compare</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown cart-dropdown">
                        <Link
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-display="static"
                        >
                            <i className="icon-shopping-cart"></i>
                            <span className="cart-count">2</span>
                        </Link>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-cart-products">
                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <Link href="product.html">
                                                Beige knitted elastic runner
                                                shoes
                                            </Link>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">
                                                1
                                            </span>
                                            x $84.00
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <Link
                                            href="product.html"
                                            className="product-image"
                                        >
                                            <img
                                                src="/images/products/cart/product-1.jpg"
                                                alt="product"
                                            />
                                        </Link>
                                    </figure>
                                    <Link
                                        href="#"
                                        className="btn-remove"
                                        title="Remove Product"
                                    >
                                        <i className="icon-close"></i>
                                    </Link>
                                </div>

                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <Link href="product.html">
                                                Blue utility pinafore denim
                                                dress
                                            </Link>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">
                                                1
                                            </span>
                                            x $76.00
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <Link
                                            href="product.html"
                                            className="product-image"
                                        >
                                            <img
                                                src="/images/products/cart/product-2.jpg"
                                                alt="product"
                                            />
                                        </Link>
                                    </figure>
                                    <Link
                                        href="#"
                                        className="btn-remove"
                                        title="Remove Product"
                                    >
                                        <i className="icon-close"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">
                                    $160.00
                                </span>
                            </div>

                            <div className="dropdown-cart-action">
                                <Link
                                    href="cart.html"
                                    className="btn btn-primary"
                                >
                                    View Cart
                                </Link>
                                <Link
                                    href="checkout.html"
                                    className="btn btn-outline-primary-2"
                                >
                                    <span>Checkout</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
