"use client";

import { useDispatch, useSelector } from "react-redux";
import { PaginationProps } from "./pagination.props";
import styles from "./styles.module.scss";
import { RootState } from "@/store";
import { setCurrentPage } from "@/store/slices/products";

export const Pagination = ({ totalPages }: PaginationProps) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.products.pagination.currentPage
    );

    const handlePageChange = (page: number) => {
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
                    <a
                        className={`${styles.pageLink} ${styles.pageLinkPrev}`}
                        href="#"
                        aria-label="Previous"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                        }}
                        tabIndex={currentPage === 1 ? -1 : 0}
                        aria-disabled={currentPage === 1}
                    >
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-left"></i>
                        </span>
                        Prev
                    </a>
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
                        <a
                            className={styles.pageLink}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(index + 1);
                            }}
                        >
                            {index + 1}
                        </a>
                    </li>
                ))}
                <li
                    className={`${styles.pageItem} ${
                        currentPage === totalPages ? styles.inactive : ""
                    }`}
                >
                    <a
                        className={`${styles.pageLink} ${styles.pageLinkNext}`}
                        href="#"
                        aria-label="Next"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                        }}
                        tabIndex={currentPage === totalPages ? -1 : 0}
                        aria-disabled={currentPage === totalPages}
                    >
                        Next{" "}
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-right"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
