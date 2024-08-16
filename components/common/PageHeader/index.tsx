import { PageHeaderProps } from "./pageHeader.props";
import styles from "./styles.module.scss";

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <div
            className={styles.pageHeader}
            style={{
                backgroundImage: "url(/images/banners/page-header-bg.png)",
            }}
        >
            <div className="container">
                <h1>
                    {title}
                    <span>{subtitle}</span>
                </h1>
            </div>
        </div>
    );
};
