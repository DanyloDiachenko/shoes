export const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <a href="#">Usd</a>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <a href="#">Eur</a>
                                    </li>
                                    <li>
                                        <a href="#">Usd</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <a href="#">Eng</a>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <a href="#">English</a>
                                    </li>
                                    <li>
                                        <a href="#">French</a>
                                    </li>
                                    <li>
                                        <a href="#">Spanish</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <a href="tel:#">
                                            <i className="icon-phone"></i>Call:
                                            +0123 456 789
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">
                                            <i className="icon-heart-o"></i>
                                            Wishlist <span>(3)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a
                                            href="#signin-modal"
                                            data-toggle="modal"
                                        >
                                            <i className="icon-user"></i>Login
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <a href="index.html" className="logo">
                            <img
                                src="/images/logo.png"
                                alt="Molla Logo"
                                width="105"
                                height="25"
                            />
                        </a>

                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="index.html" className="sf-with-ul">
                                        Home
                                    </a>

                                    <div className="megamenu demo">
                                        <div className="menu-col">
                                            <div className="menu-title">
                                                Choose your demo
                                            </div>

                                            <div className="demo-list">
                                                <div className="demo-item">
                                                    <a href="index-1.html">
                                                        <span
                                                            className="demo-bg"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(/images/menu/demos/1.jpg)",
                                                            }}
                                                        ></span>
                                                        <span className="demo-title">
                                                            01 - furniture store
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="megamenu-action text-center">
                                                <a
                                                    href="#"
                                                    className="btn btn-outline-primary-2 view-all-demos"
                                                >
                                                    <span>View All Demos</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="category.html"
                                        className="sf-with-ul"
                                    >
                                        Shop
                                    </a>

                                    <div className="megamenu megamenu-md">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="menu-col">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="menu-title">
                                                                Shop with
                                                                sidebar
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="category-list.html">
                                                                        Shop
                                                                        List
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="category-2cols.html">
                                                                        Shop
                                                                        Grid 2
                                                                        Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="category.html">
                                                                        Shop
                                                                        Grid 3
                                                                        Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="category-4cols.html">
                                                                        Shop
                                                                        Grid 4
                                                                        Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="category-market.html">
                                                                        <span>
                                                                            Shop
                                                                            Market
                                                                            <span className="tip tip-new">
                                                                                New
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                            <div className="menu-title">
                                                                Shop no sidebar
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="category-boxed.html">
                                                                        <span>
                                                                            Shop
                                                                            Boxed
                                                                            No
                                                                            Sidebar
                                                                            <span className="tip tip-hot">
                                                                                Hot
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="category-fullwidth.html">
                                                                        Shop
                                                                        Fullwidth
                                                                        No
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="menu-title">
                                                                Product Category
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="product-category-boxed.html">
                                                                        Product
                                                                        Category
                                                                        Boxed
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-category-fullwidth.html">
                                                                        <span>
                                                                            Product
                                                                            Category
                                                                            Fullwidth
                                                                            <span className="tip tip-new">
                                                                                New
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="menu-title">
                                                                Shop Pages
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="cart.html">
                                                                        Cart
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="checkout.html">
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="wishlist.html">
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="dashboard.html">
                                                                        My
                                                                        Account
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        Lookbook
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="banner banner-overlay">
                                                    <a
                                                        href="category.html"
                                                        className="banner banner-menu"
                                                    >
                                                        <img
                                                            src="/images/menu/banner-1.jpg"
                                                            alt="Banner"
                                                        />

                                                        <div className="banner-content banner-content-top">
                                                            <div className="banner-title text-white">
                                                                Last
                                                                <br />
                                                                Chance
                                                                <br />
                                                                <span>
                                                                    <strong>
                                                                        Sale
                                                                    </strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="product.html"
                                        className="sf-with-ul"
                                    >
                                        Product
                                    </a>

                                    <div className="megamenu megamenu-sm">
                                        <div className="row no-gutters">
                                            <div className="col-md-6">
                                                <div className="menu-col">
                                                    <div className="menu-title">
                                                        Product Details
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="product.html">
                                                                Default
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-centered.html">
                                                                Centered
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-extended.html">
                                                                <span>
                                                                    Extended
                                                                    Info
                                                                    <span className="tip tip-new">
                                                                        New
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-gallery.html">
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sticky.html">
                                                                Sticky Info
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sidebar.html">
                                                                Boxed With
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-fullwidth.html">
                                                                Full Width
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="product-masonry.html">
                                                                Masonry Sticky
                                                                Info
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="banner banner-overlay">
                                                    <a href="category.html">
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
                                                                        spring
                                                                        2019
                                                                    </strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="sf-with-ul">
                                        Pages
                                    </a>

                                    <ul>
                                        <li>
                                            <a
                                                href="about.html"
                                                className="sf-with-ul"
                                            >
                                                About
                                            </a>

                                            <ul>
                                                <li>
                                                    <a href="about.html">
                                                        About 01
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="about-2.html">
                                                        About 02
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="contact.html"
                                                className="sf-with-ul"
                                            >
                                                Contact
                                            </a>

                                            <ul>
                                                <li>
                                                    <a href="contact.html">
                                                        Contact 01
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact-2.html">
                                                        Contact 02
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQs</a>
                                        </li>
                                        <li>
                                            <a href="404.html">Error 404</a>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html">
                                                Coming Soon
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html" className="sf-with-ul">
                                        Blog
                                    </a>

                                    <ul>
                                        <li>
                                            <a href="blog.html">Classic</a>
                                        </li>
                                        <li>
                                            <a href="blog-listing.html">
                                                Listing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Grid</a>
                                            <ul>
                                                <li>
                                                    <a href="blog-grid-2cols.html">
                                                        Grid 2 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-3cols.html">
                                                        Grid 3 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-4cols.html">
                                                        Grid 4 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-sidebar.html">
                                                        Grid sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Masonry</a>
                                            <ul>
                                                <li>
                                                    <a href="blog-masonry-2cols.html">
                                                        Masonry 2 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-masonry-3cols.html">
                                                        Masonry 3 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-masonry-4cols.html">
                                                        Masonry 4 columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-masonry-sidebar.html">
                                                        Masonry sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Mask</a>
                                            <ul>
                                                <li>
                                                    <a href="blog-mask-grid.html">
                                                        Blog mask grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-mask-masonry.html">
                                                        Blog mask masonry
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Single Post</a>
                                            <ul>
                                                <li>
                                                    <a href="single.html">
                                                        Default with sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-fullwidth.html">
                                                        Fullwidth no sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-fullwidth-sidebar.html">
                                                        Fullwidth with sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        href="elements-list.html"
                                        className="sf-with-ul"
                                    >
                                        Elements
                                    </a>

                                    <ul>
                                        <li>
                                            <a href="elements-products.html">
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-typography.html">
                                                Typography
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-titles.html">
                                                Titles
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-banners.html">
                                                Banners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-product-category.html">
                                                Product Category
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-video-banners.html">
                                                Video Banners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-buttons.html">
                                                Buttons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-accordions.html">
                                                Accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-tabs.html">
                                                Tabs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-testimonials.html">
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-blog-posts.html">
                                                Blog Posts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-portfolio.html">
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-cta.html">
                                                Call to Action
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-icon-boxes.html">
                                                Icon Boxes
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search">
                            <a
                                href="#"
                                className="search-toggle"
                                role="button"
                                title="Search"
                            >
                                <i className="icon-search"></i>
                            </a>
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
                            <a
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
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="compare-products">
                                    <li className="compare-product">
                                        <a
                                            href="#"
                                            className="btn-remove"
                                            title="Remove Product"
                                        >
                                            <i className="icon-close"></i>
                                        </a>
                                        <h4 className="compare-product-title">
                                            <a href="product.html">
                                                Blue Night Dress
                                            </a>
                                        </h4>
                                    </li>
                                    <li className="compare-product">
                                        <a
                                            href="#"
                                            className="btn-remove"
                                            title="Remove Product"
                                        >
                                            <i className="icon-close"></i>
                                        </a>
                                        <h4 className="compare-product-title">
                                            <a href="product.html">
                                                White Long Skirt
                                            </a>
                                        </h4>
                                    </li>
                                </ul>

                                <div className="compare-actions">
                                    <a href="#" className="action-link">
                                        Clear All
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-outline-primary-2"
                                    >
                                        <span>Compare</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown cart-dropdown">
                            <a
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
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">
                                                    Beige knitted elastic runner
                                                    shoes
                                                </a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">
                                                    1
                                                </span>
                                                x $84.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a
                                                href="product.html"
                                                className="product-image"
                                            >
                                                <img
                                                    src="/images/products/cart/product-1.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                        </figure>
                                        <a
                                            href="#"
                                            className="btn-remove"
                                            title="Remove Product"
                                        >
                                            <i className="icon-close"></i>
                                        </a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">
                                                    Blue utility pinafore denim
                                                    dress
                                                </a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">
                                                    1
                                                </span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a
                                                href="product.html"
                                                className="product-image"
                                            >
                                                <img
                                                    src="/images/products/cart/product-2.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                        </figure>
                                        <a
                                            href="#"
                                            className="btn-remove"
                                            title="Remove Product"
                                        >
                                            <i className="icon-close"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">
                                        $160.00
                                    </span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <a
                                        href="cart.html"
                                        className="btn btn-primary"
                                    >
                                        View Cart
                                    </a>
                                    <a
                                        href="checkout.html"
                                        className="btn btn-outline-primary-2"
                                    >
                                        <span>Checkout</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
