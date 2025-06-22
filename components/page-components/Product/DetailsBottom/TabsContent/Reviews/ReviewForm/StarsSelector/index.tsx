import { StarsSelectorProps } from "./StarsSelector.props";
import styles from "./styles.module.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarsSelector = ({ stars, setStars }: StarsSelectorProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setStars(value)}
          onMouseEnter={() => setHovered(value)}
          onMouseLeave={() => setHovered(null)}
          className={styles.starButton}
          aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
        >
          <FaStar
            className={styles.starIcon}
            fill={(hovered ?? stars) >= value ? "#c96" : "lightgray"}
          />
        </button>
      ))}
    </div>
  );
};
