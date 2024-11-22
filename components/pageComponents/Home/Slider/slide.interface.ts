export interface Slide {
    subtitle: string;
    title: string;
    priceText: string;
    button: {
        title: string;
        url: string;
    };
    imageSrcs: {
        main: string;
        adaptive: string;
    }
}
