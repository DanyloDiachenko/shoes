import { LuMail } from "react-icons/lu";
import styles from "./styles.module.scss";

export const WhatNext = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                    <LuMail size={22} />
                    What's Next?
                </h2>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.nextSteps}>
                    <div className={styles.stepsList}>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>
                                Your order is confirmed and we're getting
                                everything ready for you!
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>
                                Sit back and relax! We'll keep you updated on
                                your package's journey with post service.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>
                                Want to see where your order is? Just hop into
                                your post service provider to track its progress
                                in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
