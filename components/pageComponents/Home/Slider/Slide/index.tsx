import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { SlideProps } from "./slide.props";

export const SLide = ({ slide }: SlideProps) => {
    return (
        <div className={styles.slide}>
            <figure className={styles.figure}>
                <picture>
                    <source
                        media="(max-width: 480px)"
                        srcSet={slide.imageSrcs.adaptive}
                    />
                    <img src={slide.imageSrcs.main} alt="Image Desc" />
                </picture>
            </figure>
            <div className={styles.content}>
                <h3 className={styles.subtitle}>{slide.subtitle}</h3>
                <h1 className={styles.title}>{slide.title}</h1>
                <div className={styles.price}>{slide.priceText}</div>
                <Link href={slide.button.link}>
                    <Button colorType="btnOutlinePrimary2">
                        <span>{slide.button.title}</span>
                        <i className="icon-long-arrow-right"></i>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
