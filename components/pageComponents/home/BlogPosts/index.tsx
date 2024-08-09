export const BlogPosts = () => {
    return (
        <div className="blog-posts">
            <div className="container">
                <h2 className="title-lg text-center mb-4">From Our Blog</h2>

                <div
                    className="owl-carousel owl-simple mb-4"
                    data-toggle="owl"
                    data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "520": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'
                >
                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img
                                    src="/images/demos/demo-10/blog/post-1.jpg"
                                    alt="image desc"
                                />
                            </a>
                        </figure>

                        <div className="entry-body text-center">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Sed adipiscing ornare.</a>
                            </h3>

                            <div className="entry-content">
                                <p>
                                    Phasellus hendrerit. Pellentesque aliquet
                                    nibh nec urna. In nisi neque, aliquet vel,
                                    dapibus id, mattis vel, nisi.
                                </p>
                                <a href="single.html" className="read-more">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img
                                    src="/images/demos/demo-10/blog/post-2.jpg"
                                    alt="image desc"
                                />
                            </a>
                        </figure>

                        <div className="entry-body text-center">
                            <div className="entry-meta">
                                <a href="#">Dec 12, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">
                                    Fusce lacinia arcuet nulla.
                                </a>
                            </h3>

                            <div className="entry-content">
                                <p>
                                    Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh.
                                </p>
                                <a href="single.html" className="read-more">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img
                                    src="/images/demos/demo-10/blog/post-3.jpg"
                                    alt="image desc"
                                />
                            </a>
                        </figure>

                        <div className="entry-body text-center">
                            <div className="entry-meta">
                                <a href="#">Dec 19, 2018</a>, 2 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Aliquam erat volutpat.</a>
                            </h3>

                            <div className="entry-content">
                                <p>
                                    Pellentesque aliquet nibh nec urna. In nisi
                                    neque, aliquet vel, dapibus id, mattis vel,
                                    nisi.
                                </p>
                                <a href="single.html" className="read-more">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img
                                    src="/images/demos/demo-10/blog/post-4.jpg"
                                    alt="image desc"
                                />
                            </a>
                        </figure>

                        <div className="entry-body text-center">
                            <div className="entry-meta">
                                <a href="#">Dec 19, 2018</a>, 2 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Quisque a lectus.</a>
                            </h3>

                            <div className="entry-content">
                                <p>
                                    Sed egestas, ante et vulputate volutpat,
                                    eros pede semper est, vitae luctus metus
                                    libero eu augue.
                                </p>
                                <a href="single.html" className="read-more">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="more-container text-center mt-1">
                    <a
                        href="blog.html"
                        className="btn btn-outline-lightgray btn-more btn-round"
                    >
                        <span>View more articles</span>
                        <i className="icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
