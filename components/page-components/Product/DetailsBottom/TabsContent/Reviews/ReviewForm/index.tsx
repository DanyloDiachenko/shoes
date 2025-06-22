import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Textarea } from "@/components/UI/Textarea";
import { Button } from "@/components/UI/Button";
import { StarsSelector } from "./StarsSelector";
import { ReviewFormProps } from "./ReviewForm.props";
import { createReview } from "@/api/reviews";
import { getAndFormatResponseErrorMessage } from "@/helpers/getAndFormatResponseErrorMessage";
import { toast } from "react-toastify";
import { Review } from "@/interfaces/entities/review.interface";

export const ReviewForm = ({
    userFullName,
    productId,
    addReview,
}: ReviewFormProps) => {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [stars, setStars] = useState(0);

    const handleSubmitReview = async () => {
        if (!userFullName) {
            toast.error("Please, authorize to left review");
            return;
        }
        if (!title || !comment) {
            toast.error("Please, fill all required fields");
            return;
        }

        const createdReview = await createReview({
            title: title,
            description: comment,
            rating: stars,
            productId,
        });
        if (!createdReview) {
            toast.error(getAndFormatResponseErrorMessage(createdReview));
            return;
        }

        toast("Review created successfuly, thanks!");
        addReview(createdReview as Review);
    };

    return (
        <div className={styles.reviewForm}>
            <h4 className={styles.title}>Write a Review</h4>
            <form onSubmit={handleSubmitReview} className={styles.form}>
                <div className={styles.field}>
                    <label className={styles.label}>Rating *</label>
                    <StarsSelector stars={stars} setStars={setStars} />
                </div>
                <div className={styles.field}>
                    <label htmlFor="title" className={styles.label}>
                        Title *
                    </label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles.input}
                        placeholder="Cool Product"
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="full-name" className={styles.label}>
                        Full Name *
                    </label>
                    <Input
                        id="full-name"
                        type="text"
                        value={userFullName || undefined}
                        className={styles.input}
                        placeholder={userFullName || "Authorize First"}
                        required
                        disabled
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="comment" className={styles.label}>
                        Review *
                    </label>
                    <Textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className={styles.textarea}
                        placeholder="Share your experience with this product..."
                        required
                    />
                </div>
                <Button
                    colorType="btnPrimary"
                    type="submit"
                    className={styles.submitButton}
                >
                    Submit Review
                </Button>
            </form>
        </div>
    );
};
