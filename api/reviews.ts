import { fetchApi } from "@/helpers/fetchApi";
import { Review } from "@/interfaces/entities/review.interface";
import { ResponseError } from "@/interfaces/responseError.interface";

export interface CreateReviewBody {
    rating: number;
    title: string;
    description: string;
    productId: string;
}

export const createReview = async (body: CreateReviewBody): Promise<Review | ResponseError> => {
    return await fetchApi({
        endpoint: "/reviews",
        method: "POST",
        body: body,
        isAuthRequired: true,
    });
};