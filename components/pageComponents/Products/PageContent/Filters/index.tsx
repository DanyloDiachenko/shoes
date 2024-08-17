import { Category } from "./Category";
import { Colour } from "./Colour";
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
                <Colour />
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
