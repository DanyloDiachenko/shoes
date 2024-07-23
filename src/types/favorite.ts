import { TProduct } from './product';

export type TFavoriteItem = Pick<TProduct, 'id' | 'title' | 'image' | 'category'>;
