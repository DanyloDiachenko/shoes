import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";
import { OrdersPageComponentProps } from "./orders.props";
import { Table } from "./Table";
import { getCurrency } from "@/helpers/getCurrency";

export const OrdersPageContent = async ({
    orders,
}: OrdersPageComponentProps) => {
    const currency = await getCurrency();

    return (
        <div
            className={styles.content}
            id="tab-orders"
            role="tabpanel"
            aria-labelledby="tab-orders-link"
        >
            {orders.length ? (
                <Table currency={currency} orders={orders} />
            ) : (
                <>
                    <p>No order has been made yet.</p>
                    <Link href="/products">
                        <Button colorType="btnOutlinePrimary2">
                            <span>Go Shop</span>
                            <IoIosArrowRoundForward />
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};
