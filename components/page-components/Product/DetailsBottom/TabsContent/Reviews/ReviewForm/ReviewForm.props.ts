import { Review } from "@/interfaces/entities/review.interface";

export interface ReviewFormProps {
    userFullName: string | null;
    productId: string;
    addReview: (newReview: Review) => void;
}