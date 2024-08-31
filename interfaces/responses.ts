import {
    IProduct,
    IProductCategoryWithProductsQuantity,
} from "./product.interface";

export interface GetProductsResponse {
    data: IProduct[];
    total: number /* Общее количество продуктов, которые соответствуют критериям поиска. */;
    totalPages: number;
    count: number /* Количество продуктов, отображаемых на текущей странице. */;
    page: number /* Номер текущей страницы, что позволяет фронтенду понять, какие продукты отображаются. */;
    limit: number /* Лимит (количество продуктов на одной странице), что помогает рассчитывать, сколько продуктов должно отображаться на текущей странице. */;
}
