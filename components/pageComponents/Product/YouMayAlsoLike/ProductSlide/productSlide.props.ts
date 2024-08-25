export interface ProductSlideProps {
    label: string;
    labelType: "new" | "sale";
    imageSrc: string;
    productLink: string;
    category: string;
    title: string;
    price: string;
    rating: number;
    reviews: number;
    thumbs: string[];
}
