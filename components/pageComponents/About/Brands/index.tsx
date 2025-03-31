import Link from "next/link";
import styles from "./styles.module.scss";

export const Brands = () => {
    return (
        <div className={`${styles.brands} container`}>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className={styles.brandsText}>
                        <h2 className={styles.title}>
                            The world's premium design brands in one
                            destination.
                        </h2>
                        <p>
                            Phasellus hendrerit. Pellentesque aliquet nibh nec
                            urna. In nisi neque, aliquet vel, dapibus id, mattis
                            vel, nis
                        </p>
                    </div>
                    <div className={styles.brandsDisplay}>
                        <div className={`${styles.content} row`}>
                            <div className={styles.column}>
                                <Link href="#" className={styles.brand}>
                                    <img
                                        src="assets/images/brands/1.png"
                                        alt="Brand Name"
                                    />
                                </Link>
                            </div>
                            {/* <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/2.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div> */}
                            {/* <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/3.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/7.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/4.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/5.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/6.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="brand">
                                    <img
                                        src="assets/images/brands/9.png"
                                        alt="Brand Name"
                                    />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
