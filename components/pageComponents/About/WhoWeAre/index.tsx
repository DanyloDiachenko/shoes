import styles from "./styles.module.scss";

export const WhoWeAre = () => {
    return (
        <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-3 mb-lg-0">
                        <h2 className="title">Who We Are</h2>
                        <p className="lead text-primary mb-3">
                            Pellentesque odio nisi, euismod pharetra a ultricies{" "}
                            <br />
                            in diam. Sed arcu. Cras consequat
                        </p>
                        <p className="mb-2">
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti. Sed egestas, ante et
                            vulputate volutpat, uctus metus libero eu augue.{" "}
                        </p>
                        <a
                            href="blog.html"
                            className="btn btn-sm btn-minwidth btn-outline-primary-2"
                        >
                            <span>VIEW OUR NEWS</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="about-images">
                            <img
                                src="assets/images/about/img-1.jpg"
                                alt=""
                                className="about-img-front"
                            />
                            <img
                                src="assets/images/about/img-2.jpg"
                                alt=""
                                className="about-img-back"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
