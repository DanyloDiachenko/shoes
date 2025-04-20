"use client";

import { useState } from "react";
import { AccordionProps } from "./accordion.props";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const Accordion = ({
    isFirstItemOpened = false,
    items,
}: AccordionProps) => {
    const [openedAccordionItemIndex, setOpenedAccordionItemIndex] =
        useState<number>(isFirstItemOpened ? 0 : -1);

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div
                    className={`${styles.card}  ${
                        index === openedAccordionItemIndex ? styles.show : ""
                    }`}
                    key={index}
                >
                    <div
                        className={styles.cardHeader}
                        id={`heading-${index + 1}`}
                    >
                        <Button
                            colorType="btnOutlinePrimary2"
                            onClick={() =>
                                setOpenedAccordionItemIndex(
                                    index === openedAccordionItemIndex
                                        ? -1
                                        : index
                                )
                            }
                            aria-expanded={index === openedAccordionItemIndex}
                            aria-controls={`collapse-${index + 1}`}
                        >
                            <h2 className={styles.cardTitle}>{item.title}</h2>
                            <IoIosArrowDown size={20} />
                        </Button>
                    </div>
                    <div
                        id={`collapse-${index + 1}`}
                        className={styles.collapse}
                        aria-labelledby={`heading-${index + 1}`}
                    >
                        <div className={styles.cardBodyWrapper}>
                            <div className={styles.cardBody}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
