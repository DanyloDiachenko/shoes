import styles from "./styles.module.scss";

export const OurDescription = () => {
    return (
        <div className={`${styles.ourDescription} container`}>
            <div className="row">
                <div className={styles.column}>
                    <h2 className={styles.title}>Our Vision</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
                        urna. In nisi neque, aliquet vel, dapibus id, mattis
                        vel, nisi. Sed pretium, ligula sollicitudin laoreet
                        viverra, tortor libero sodales leo, eget blandit nunc
                        tortor eu nibh.{" "}
                    </p>
                </div>

                <div className={styles.column}>
                    <h2 className={styles.title}>Our Mission</h2>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Morbi
                        purus libero, faucibus adipiscing, commodo quis, gravida
                        id, est. Sed lectus. Praesent elementum hendrerit
                        tortor. Sed semper lorem at felis.
                    </p>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    );
};
