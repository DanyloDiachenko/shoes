export const BannerGroup = () => {
    return (
        <div className="banner-group">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="banner banner-overlay">
                                    <a href="#">
                                        <img
                                            src="/images/demos/demo-10/banners/banner-1.jpg"
                                            alt="Banner"
                                        />
                                    </a>

                                    <div className="banner-content banner-content-right">
                                        <h4 className="banner-subtitle">
                                            <a href="#">New Arrivals</a>
                                        </h4>
                                        <h3 className="banner-title text-white">
                                            <a href="#">
                                                Sneakers &
                                                <br />
                                                Athletic Shoes
                                            </a>
                                        </h3>
                                        <a
                                            href="#"
                                            className="btn btn-outline-white banner-link btn-round"
                                        >
                                            Discover Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="banner banner-overlay banner-overlay-light">
                                    <a href="#">
                                        <img
                                            src="/images/demos/demo-10/banners/banner-2.jpg"
                                            alt="Banner"
                                        />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle bright-black">
                                            <a href="#">Clearance</a>
                                        </h4>
                                        <h3 className="banner-title">
                                            <a href="#">Sandals</a>
                                        </h3>
                                        <div className="banner-text">
                                            <a href="#">up to 70% off</a>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-outline-gray banner-link btn-round"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner banner-large banner-overlay d-none d-sm-block">
                            <a href="#">
                                <img
                                    src="/images/demos/demo-10/banners/banner-3.jpg"
                                    alt="Banner"
                                />
                            </a>

                            <div className="banner-content">
                                <h4 className="banner-subtitle text-white">
                                    <a href="#">On Sale</a>
                                </h4>
                                <h3 className="banner-title text-white">
                                    <a href="#">Slip-On Loafers</a>
                                </h3>
                                <div className="banner-text text-white">
                                    <a href="#">up to 30% off</a>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-outline-white banner-link btn-round"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-sm-none d-lg-block">
                        <div className="banner banner-middle banner-overlay">
                            <a href="#">
                                <img
                                    src="/images/demos/demo-10/banners/banner-4.jpg"
                                    alt="Banner"
                                />
                            </a>

                            <div className="banner-content banner-content-bottom">
                                <h4 className="banner-subtitle text-white">
                                    <a href="#">On Sale</a>
                                </h4>
                                <h3 className="banner-title text-white">
                                    <a href="#">
                                        Amazing <br />
                                        Lace Up Boots
                                    </a>
                                </h3>
                                <div className="banner-text text-white">
                                    <a href="#">from $39.00</a>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-outline-white banner-link btn-round"
                                >
                                    Discover Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
