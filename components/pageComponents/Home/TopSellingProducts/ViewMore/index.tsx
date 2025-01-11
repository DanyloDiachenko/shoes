import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export const ViewMore = () => {
    return (
        <div className={styles.moreContainer}>
            <Link href="/products">
                <Button colorType="btnOutlinePrimary2">
                    <span>View more products</span>
                    <FaArrowRightLong />
                </Button>
            </Link>
        </div>
    );
};
