import styles from "./styles.module.scss";
import { TableProps } from "./table.props";
import { OrderRow } from "./OrderRow";

export const Table = ({ orders, currency }: TableProps) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Date</th>
                    <th>Shipping</th>
                    <th>Products</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <OrderRow
                        key={order.id}
                        order={order}
                        currency={currency}
                        number={index + 1}
                    />
                ))}
            </tbody>
        </table>
    );
};
