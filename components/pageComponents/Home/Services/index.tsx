import { services } from "./services";
import styles from "./styles.module.scss";

export const Services = () => {
    return (
        <div className={`container ${styles.services}`}>
            <div className="row">
                {services.map((service, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.iconBox}>
                            <span className={styles.icon}>{service.icon}</span>
                            <div className={styles.content}>
                                <h3 className={styles.title}>
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
