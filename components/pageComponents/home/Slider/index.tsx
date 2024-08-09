export const Slider = () => {
    return (
        <div className="container">
            <div className="intro-slider-container slider-container-ratio mb-2">
                <div
                    className="intro-slider owl-carousel owl-simple owl-light owl-nav-inside"
                    data-toggle="owl"
                    data-owl-options='{"nav": false}'
                >
                    <div className="intro-slide">
                        <figure className="slide-image">
                            <picture>
                                <source
                                    media="(max-width: 480px)"
                                    srcSet="
                                                /images/demos/demo-10/slider/slide-1-480w.jpg
                                            "
                                />
                                <img
                                    src="/images/demos/demo-10/slider/slide-1.jpg"
                                    alt="Image Desc"
                                />
                            </picture>
                        </figure>

                        <div className="intro-content">
                            <h3 className="intro-subtitle">
                                Deals and Promotions
                            </h3>
                            <h1 className="intro-title text-white">
                                Sneakers & Athletic Shoes
                            </h1>

                            <div className="intro-price text-white">
                                from $9.99
                            </div>

                            <a
                                href="category.html"
                                className="btn btn-white-primary btn-round"
                            >
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="intro-slide">
                        <figure className="slide-image">
                            <picture>
                                <source
                                    media="(max-width: 480px)"
                                    srcSet="
                                                /images/demos/demo-10/slider/slide-2-480w.jpg
                                            "
                                />
                                <img
                                    src="/images/demos/demo-10/slider/slide-2.jpg"
                                    alt="Image Desc"
                                />
                            </picture>
                        </figure>

                        <div className="intro-content">
                            <h3 className="intro-subtitle">Trending Now</h3>
                            <h1 className="intro-title text-white">
                                This Week's Most Wanted
                            </h1>

                            <div className="intro-price text-white">
                                from $49.99
                            </div>

                            <a
                                href="category.html"
                                className="btn btn-white-primary btn-round"
                            >
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="intro-slide">
                        <figure className="slide-image">
                            <picture>
                                <source
                                    media="(max-width: 480px)"
                                    srcSet="
                                                /images/demos/demo-10/slider/slide-3-480w.jpg
                                            "
                                />
                                <img
                                    src="/images/demos/demo-10/slider/slide-3.jpg"
                                    alt="Image Desc"
                                />
                            </picture>
                        </figure>
                        <div className="intro-content">
                            <h3 className="intro-subtitle text-white">
                                Deals and Promotions
                            </h3>
                            <h1 className="intro-title text-white">
                                Can’t-miss Clearance:
                            </h1>
                            <div className="intro-price text-white">
                                starting at 60% off
                            </div>
                            <a
                                href="category.html"
                                className="btn btn-white-primary btn-round"
                            >
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <span className="slider-loader"></span>
            </div>
        </div>
    );
};
