export interface Slide {
    subtitle: string;
    title: string;
    priceText: string;
    button: {
        title: string;
        link: string;
    };
    imageSrcs: {
        main: string;
        adaptive: string;
    };
}
