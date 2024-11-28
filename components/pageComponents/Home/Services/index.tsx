import { Service } from "./service.interface";
import styles from "./styles.module.scss";
import { LiaRocketSolid, LiaLifeRingSolid } from "react-icons/lia";
import { MdRotateLeft } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const services: Service[] = [
    {
        title: "Free Shipping",
        description: "Orders $50 or more",
        icon: <LiaRocketSolid />,
    },
    {
        title: "Free Returns",
        description: "Within 30 days",
        icon: <MdRotateLeft />,
    },
    {
        title: "Get 20% Off 1 Item",
        description: "when you sign up",
        icon: <AiOutlineInfoCircle />,
    },
    {
        title: "We Support",
        description: "24/7 amazing services",
        icon: <LiaLifeRingSolid />,
    },
];

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
