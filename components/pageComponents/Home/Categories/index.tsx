import styles from "./styles.module.scss";

export const Categories = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className={styles.column}>
                    <div className="banner banner-cat">
                        <a href="#">
                            <img
                                src="assets/images/demos/demo-10/banners/banner-5.jpg"
                                alt="Banner"
                            />
                        </a>
                        <div className="banner-content banner-content-overlay text-center">
                            <h3 className="banner-title font-weight-normal">
                                Women's
                            </h3>
                            <h4 className="banner-subtitle">125 Products</h4>
                            <a href="category.html" className="banner-link">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="banner banner-cat">
                        <a href="#">
                            <img
                                src="assets/images/demos/demo-10/banners/banner-6.jpg"
                                alt="Banner"
                            />
                        </a>
                        <div className="banner-content banner-content-overlay text-center">
                            <h3 className="banner-title font-weight-normal">
                                Men's
                            </h3>
                            <h4 className="banner-subtitle">97 Products</h4>
                            <a href="category.html" className="banner-link">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="banner banner-cat">
                        <a href="#">
                            <img
                                src="assets/images/demos/demo-10/banners/banner-7.jpg"
                                alt="Banner"
                            />
                        </a>
                        <div className="banner-content banner-content-overlay text-center">
                            <h3 className="banner-title font-weight-normal">
                                Kid's
                            </h3>
                            <h4 className="banner-subtitle">48 Products</h4>
                            <a href="category.html" className="banner-link">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
