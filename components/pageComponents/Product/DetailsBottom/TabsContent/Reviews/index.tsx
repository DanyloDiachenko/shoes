import Link from "next/link";
import styles from "./styles.module.scss";
import { getRating } from "@/helpers/getRating";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { ReviewsProps } from "./reviews.props";
import { IProductReview } from "@/interfaces/product.interface";

export const Reviews = ({ reviews }: ReviewsProps) => {
    const getReviewDaysAgo = (review: IProductReview) => {
        const currentDate = new Date();
        const reviewDate = new Date(review.createdAt);

        const diffInTime = currentDate.getTime() - reviewDate.getTime();
        const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

        const daySuffix = diffInDays === 1 ? "day" : "days";

        return `${diffInDays} ${daySuffix} ago`;
    };

    return (
        <div className={styles.reviews}>
            <h3 className={styles.title}>Reviews ({reviews.length})</h3>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div className={styles.review}>
                        <div className={`row ${styles.row}`}>
                            <div className={styles.leftColumn}>
                                <h4>{review.author}</h4>
                                <div className={styles.ratingsContainer}>
                                    {getRating(review.rating)}
                                </div>
                                <span className={styles.raviewDate}>
                                    {getReviewDaysAgo(review)}
                                </span>
                            </div>
                            <div className={styles.mainColumn}>
                                <h4>{review.title}</h4>
                                <div className={styles.description}>
                                    <p>{review.description}</p>
                                </div>
                                <div className={styles.actions}>
                                    <Link href="#">
                                        <AiOutlineLike />
                                        <span>
                                            Helpful ({review.helpfulNumber})
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <AiOutlineDislike />
                                        <span>
                                            Unhelpful ({review.unhelpfulNumber})
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No reviews yet...</div>
            )}
        </div>
    );
};
