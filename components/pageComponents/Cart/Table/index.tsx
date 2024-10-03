import styles from "./styles.module.scss";

export const Table = () => {
    return (
        <div className={styles.column}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.productCol}>
                            <div className={styles.product}>
                                <figure className={styles.productMedia}>
                                    <a href="#">
                                        <img
                                            src="assets/images/products/table/product-1.jpg"
                                            alt="Product image"
                                        />
                                    </a>
                                </figure>

                                <h3 className={styles.productTitle}>
                                    <a href="#">
                                        Beige knitted elastic runner shoes
                                    </a>
                                </h3>
                            </div>
                        </td>
                        <td className={styles.priceCol}>$84.00</td>
                        <td className={styles.quantityCol}>
                            <div className={styles.cartProductQuantity}>
                                <input
                                    type="number"
                                    className="form-control"
                                    value="1"
                                    min="1"
                                    max="10"
                                    step="1"
                                    data-decimals="0"
                                    required
                                />
                            </div>
                        </td>
                        <td className={styles.totalCol}>$84.00</td>
                        <td className={styles.removeCol}>
                            <button className={styles.btnRemove}>
                                <i className={styles.iconClose}></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.cartBottom}>
                <div className={styles.cartDiscount}>
                    <form action="#">
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                className={styles.formControl}
                                required
                                placeholder="coupon code"
                            />
                            <div className={styles.inputGroupAppend}>
                                <button
                                    className={styles.btnOutlinePrimary2}
                                    type="submit"
                                >
                                    <i
                                        className={styles.iconLongArrowRight}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <a href="#" className={styles.btnOutlineDark2}>
                    <span>UPDATE CART</span>
                    <i className={styles.iconRefresh}></i>
                </a>
            </div>
        </div>
    );
};
