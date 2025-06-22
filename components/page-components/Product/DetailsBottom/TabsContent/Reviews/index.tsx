import Link from "next/link";
import styles from "./styles.module.scss";
import { getProductRating } from "@/helpers/getProductRating";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { ReviewsProps } from "./reviews.props";
import { Review } from "@/interfaces/entities/review.interface";
import { ReviewForm } from "./ReviewForm";
import { useState } from "react";

export const Reviews = ({
    userFullName,
    productId,
    reviews: allReviews,
}: ReviewsProps) => {
    const [reviews, setReviews] = useState<Review[]>(allReviews);

    const getReviewDaysAgo = (review: Review) => {
        const currentDate = new Date();
        const reviewDate = new Date(review.createdAt);

        const diffInTime = currentDate.getTime() - reviewDate.getTime();
        const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

        const daySuffix = diffInDays === 1 ? "day" : "days";

        return `${diffInDays} ${daySuffix} ago`;
    };

    const addReview = (newReview: Review) => {
        setReviews([...reviews, newReview]);
    };

    return (
        <div className={styles.reviews}>
            <h3 className={styles.title}>Reviews ({reviews.length})</h3>
            <div className={styles.wrapper}>
                <div>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div className={styles.review} key={review.id}>
                                <div className={`row ${styles.row}`}>
                                    <div className={styles.leftColumn}>
                                        <h4>{review.author}</h4>
                                        <div
                                            className={styles.ratingsContainer}
                                        >
                                            {getProductRating(review.rating)}
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
                                                    Helpful (
                                                    {review.helpfulNumber})
                                                </span>
                                            </Link>
                                            <Link href="#">
                                                <AiOutlineDislike />
                                                <span>
                                                    Unhelpful (
                                                    {review.unhelpfulNumber})
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
                <ReviewForm
                    userFullName={userFullName}
                    productId={productId}
                    addReview={addReview}
                />
            </div>
        </div>
    );
};
