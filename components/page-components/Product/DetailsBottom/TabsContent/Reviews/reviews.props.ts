import {
} from "@/interfaces/entities/product.interface";
import { Review } from "@/interfaces/entities/review.interface";

export interface ReviewsProps {
    reviews: Review[];
    userFullName: string | null;
    productId: string;
}
