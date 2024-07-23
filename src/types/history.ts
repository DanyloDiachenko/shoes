import { TProduct } from './product';

export type THistoryItem = Pick<TProduct, 'id' | 'title' | 'image'>;
