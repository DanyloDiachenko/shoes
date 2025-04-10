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
        <blockquote className="testimonial text-center">
            <img src={authorImage} alt="user" />
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
