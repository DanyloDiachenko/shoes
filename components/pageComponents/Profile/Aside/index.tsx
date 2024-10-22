import styles from "./styles.module.scss";

export const ProfileAside = () => {
    return (
        <aside className="col-md-4 col-lg-3">
            <ul
                className="nav nav-dashboard flex-column mb-3 mb-md-0"
                role="tablist"
            >
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="tab-dashboard-link"
                        data-toggle="tab"
                        href="#tab-dashboard"
                        role="tab"
                        aria-controls="tab-dashboard"
                        aria-selected="true"
                    >
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-orders-link"
                        data-toggle="tab"
                        href="#tab-orders"
                        role="tab"
                        aria-controls="tab-orders"
                        aria-selected="false"
                    >
                        Orders
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-downloads-link"
                        data-toggle="tab"
                        href="#tab-downloads"
                        role="tab"
                        aria-controls="tab-downloads"
                        aria-selected="false"
                    >
                        Downloads
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-address-link"
                        data-toggle="tab"
                        href="#tab-address"
                        role="tab"
                        aria-controls="tab-address"
                        aria-selected="false"
                    >
                        Adresses
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-account-link"
                        data-toggle="tab"
                        href="#tab-account"
                        role="tab"
                        aria-controls="tab-account"
                        aria-selected="false"
                    >
                        Account Details
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Sign Out
                    </a>
                </li>
            </ul>
        </aside>
    );
};
