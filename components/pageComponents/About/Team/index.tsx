import styles from "./styles.module.scss";

export const Team = () => {
    return (
        <div className={`${styles.team} container`}>
            <h2 className="title text-center mb-4">Meet Our Team</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="member member-anim text-center">
                        <figure className="member-media">
                            <img
                                src="assets/images/team/member-1.jpg"
                                alt="member photo"
                            />
                            <figcaption className="member-overlay">
                                <div className="member-overlay-content">
                                    <h3 className="member-title">
                                        Samanta Grey
                                        <span>Founder &amp; CEO</span>
                                    </h3>
                                    <p>
                                        Sed pretium, ligula sollicitudin
                                        viverra, tortor libero sodales leo, eget
                                        blandit nunc.
                                    </p>
                                    <div className="social-icons social-icons-simple">
                                        <a
                                            href="#"
                                            className="social-icon"
                                            title="Facebook"
                                            target="_blank"
                                        >
                                            <i className="icon-facebook-f"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="social-icon"
                                            title="Twitter"
                                            target="_blank"
                                        >
                                            <i className="icon-twitter"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="social-icon"
                                            title="Instagram"
                                            target="_blank"
                                        >
                                            <i className="icon-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <div className="member-content">
                            <h3 className="member-title">
                                Samanta Grey<span>Founder &amp; CEO</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
