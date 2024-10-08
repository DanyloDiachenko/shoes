"use client";

import { useDispatch, useSelector } from "react-redux";
import { PaginationProps } from "./pagination.props";
import styles from "./styles.module.scss";
import { RootState } from "@/store";
import { setCurrentPage } from "@/store/slices/products";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Pagination = ({ totalPages }: PaginationProps) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.products.pagination.currentPage
    );

    const onPageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    return (
        <nav aria-label="Page navigation">
            <ul className={styles.pagination}>
                <li
                    className={`${styles.pageItem} ${
                        currentPage === 1 ? styles.inactive : ""
                    }`}
                >
                    <button
                        className={`${styles.pageLink} ${styles.pageLinkPrev}`}
                        aria-label="Previous"
                        onClick={() => {
                            onPageChange(currentPage - 1);
                        }}
                        tabIndex={currentPage === 1 ? -1 : 0}
                        aria-disabled={currentPage === 1}
                    >
                        <FaArrowLeftLong />
                        Prev
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li
                        key={index + 1}
                        className={`${styles.pageItem} ${
                            currentPage === index + 1 ? styles.active : ""
                        }`}
                        aria-current={
                            currentPage === index + 1 ? "page" : undefined
                        }
                    >
                        <button
                            className={styles.pageLink}
                            onClick={() => {
                                onPageChange(index + 1);
                            }}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li
                    className={`${styles.pageItem} ${
                        currentPage === totalPages ? styles.inactive : ""
                    }`}
                >
                    <button
                        className={`${styles.pageLink} ${styles.pageLinkNext}`}
                        aria-label="Next"
                        onClick={() => {
                            onPageChange(currentPage + 1);
                        }}
                        tabIndex={currentPage === totalPages ? -1 : 0}
                        aria-disabled={currentPage === totalPages}
                    >
                        Next <FaArrowRightLong />
                    </button>
                </li>
            </ul>
        </nav>
    );
};
