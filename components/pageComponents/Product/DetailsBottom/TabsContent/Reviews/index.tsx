import styles from "./styles.module.scss";

export const Reviews = () => {
    return (
        <div
            className="tab-pane fade"
            id="product-review-tab"
            role="tabpanel"
            aria-labelledby="product-review-link"
        >
            <div className="reviews">
                <h3>Reviews (2)</h3>
                <div className="review">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <h4>
                                <a href="#">Samanta J.</a>
                            </h4>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                            </div>
                            <span className="review-date">6 days ago</span>
                        </div>
                        <div className="col">
                            <h4>Good, perfect size</h4>

                            <div className="review-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ducimus cum dolores
                                    assumenda asperiores facilis porro
                                    reprehenderit animi culpa atque blanditiis
                                    commodi perspiciatis doloremque, possimus,
                                    explicabo, autem fugit beatae quae voluptas!
                                </p>
                            </div>

                            <div className="review-action">
                                <a href="#">
                                    <i className="icon-thumbs-up"></i>
                                    Helpful (2)
                                </a>
                                <a href="#">
                                    <i className="icon-thumbs-down"></i>
                                    Unhelpful (0)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <h4>
                                <a href="#">John Doe</a>
                            </h4>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                            </div>
                            <span className="review-date">5 days ago</span>
                        </div>
                        <div className="col">
                            <h4>Very good</h4>

                            <div className="review-content">
                                <p>
                                    Sed, molestias, tempore? Ex dolor esse iure
                                    hic veniam laborum blanditiis laudantium
                                    iste amet. Cum non voluptate eos enim, ab
                                    cumque nam, modi, quas iure illum
                                    repellendus, blanditiis perspiciatis beatae!
                                </p>
                            </div>

                            <div className="review-action">
                                <a href="#">
                                    <i className="icon-thumbs-up"></i>
                                    Helpful (0)
                                </a>
                                <a href="#">
                                    <i className="icon-thumbs-down"></i>
                                    Unhelpful (0)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
