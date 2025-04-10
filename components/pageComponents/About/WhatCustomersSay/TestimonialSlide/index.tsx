import Image from "next/image";
import styles from "./styles.module.scss";
import { TestimonialSlideProps } from "./testimonialSlide.props";

export const TestimonialSlide = ({
    authorImage,
    authorName,
    authorRole,
    title,
    comment,
}: TestimonialSlideProps) => {
    return (
        <blockquote className={styles.testimonial}>
            <Image
                src={authorImage}
                alt="user"
                width={50}
                height={50}
            />
            <p>
                “ {title} <br />
                {comment} ”
            </p>
            <cite>
                {authorName}
                <span>{authorRole}</span>
            </cite>
        </blockquote>
    );
};
