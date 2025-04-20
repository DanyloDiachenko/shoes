import { FaqItem } from "@/data/faq";

export interface AccordionProps {
    isFirstItemOpened?: boolean;
    items: FaqItem[];
}
