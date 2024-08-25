import Link from "next/link";
import styles from "./styles.module.scss";
import { getRating } from "@/helpers/getRating";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <h3 className={styles.title}>Reviews (2)</h3>
            <div className={styles.review}>
                <div className={`row ${styles.row}`}>
                    <div className={styles.leftColumn}>
                        <h4>Samanta J.</h4>
                        <div className={styles.ratingsContainer}>
                            {getRating(4)}
                        </div>
                        <span className={styles.raviewDate}>6 days ago</span>
                    </div>
                    <div className={styles.mainColumn}>
                        <h4>Good, perfect size</h4>
                        <div className={styles.description}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ducimus cum dolores assumenda
                                asperiores facilis porro reprehenderit animi
                                culpa atque blanditiis commodi perspiciatis
                                doloremque, possimus, explicabo, autem fugit
                                beatae quae voluptas!
                            </p>
                        </div>
                        <div className={styles.actions}>
                            <Link href="#">
                                <AiOutlineLike />
                                <span>Helpful (2)</span>
                            </Link>
                            <Link href="#">
                                <AiOutlineDislike />
                                <span>Unhelpful (0)</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
