import styles from "./styles.module.scss";

export const Team = () => {
    return (
        <div className={`${styles.team} container`}>
            <h2 className={styles.title}>Meet Our Team</h2>
            <div className="row">
                <div className={styles.column}>
                    <div className={styles.member}>
                        <figure className={styles.media}>
                            <img
                                src="assets/images/team/member-1.jpg"
                                alt="member photo"
                            />
                            <figcaption className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <h3 className={styles.memberTitle}>
                                        Samanta Grey
                                        <span>Founder &amp; CEO</span>
                                    </h3>
                                    /{" "}
                                    <p>
                                        Sed pretium, ligula sollicitudin
                                        viverra, tortor libero sodales leo, eget
                                        blandit nunc.
                                    </p>
                                    <div className={styles.socialIcons}>
                                        <a
                                            href="#"
                                            className={styles.socialIcon}
                                            title="Facebook"
                                            target="_blank"
                                        >
                                            <i className="icon-facebook-f"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className={styles.socialIcon}
                                            title="Twitter"
                                            target="_blank"
                                        >
                                            <i className="icon-twitter"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className={styles.socialIcon}
                                            title="Instagram"
                                            target="_blank"
                                        >
                                            <i className="icon-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <div className={styles.memberContent}>
                            <h3 className={styles.memberTitle}>
                                Samanta Grey
                                <span>Founder &amp; CEO</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
