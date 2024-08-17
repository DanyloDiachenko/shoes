import { Category } from "./Category";
import { Size } from "./Size";
import styles from "./styles.module.scss";

export const Filters = () => {
    return (
        <aside className={styles.column}>
            <div className={styles.sidebar}>
                <div className={styles.widgetClean}>
                    <label>Filters:</label>
                    <a href="#" className={styles.clear}>
                        Clean All
                    </a>
                </div>
                <Category />
                <Size />
                <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                        <a
                            data-toggle="collapse"
                            href="#widget-3"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-3"
                        >
                            Colour
                        </a>
                    </h3>
                    <div className="collapse show" id="widget-3">
                        <div className="widget-body">
                            <div className="filter-colors">
                                <a href="#" style={{ background: "#b87145" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#f0c04a" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#333333" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a
                                    href="#"
                                    className="selected"
                                    style={{ background: "#cc3333" }}
                                >
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#3399cc" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#669933" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#f2719c" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                                <a href="#" style={{ background: "#ebebeb" }}>
                                    <span className="sr-only">Color Name</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                        <a
                            data-toggle="collapse"
                            href="#widget-4"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-4"
                        >
                            Brand
                        </a>
                    </h3>
                    <div className="collapse show" id="widget-4">
                        <div className="widget-body">
                            <div className="filter-items">
                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="brand-1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="brand-1"
                                        >
                                            Next
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                        <a
                            data-toggle="collapse"
                            href="#widget-5"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-5"
                        >
                            Price
                        </a>
                    </h3>
                    <div className="collapse show" id="widget-5">
                        <div className="widget-body">
                            <div className="filter-price">
                                <div className="filter-price-text">
                                    Price Range:
                                    <span id="filter-price-range"></span>
                                </div>
                                <div id="price-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
