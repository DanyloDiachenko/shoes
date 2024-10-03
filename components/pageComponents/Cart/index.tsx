import styles from "./styles.module.scss";
import { CartTotal } from "./CartTotal";
import { Table } from "./Table";

export const CartPageContent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Table />
                    <CartTotal />
                </div>
            </div>
        </div>
    );
};
