import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { SlideProps } from "./slide.props";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const Slide = ({
    imageSrcs,
    button,
    subtitle,
    title,
    priceText,
}: SlideProps) => {
    return (
        <div className={styles.slide}>
            <figure className={styles.figure}>
                <picture>
                    <source
                        media="(max-width: 480px)"
                        srcSet={imageSrcs.adaptive}
                    />
                    <Image
                        src={imageSrcs.main}
                        alt={title}
                        loading="eager"
                        priority={true}
                        width={1170}
                        height={500}
                        sizes="(max-width: 480px) 480px, 400px"
                    />
                </picture>
            </figure>
            <div className={styles.content}>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>{priceText}</div>
                <Link href={button.link}>
                    <Button colorType="btnOutlinePrimary2">
                        <span>{button.title}</span>
                        <FaArrowRightLong size={15} />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
