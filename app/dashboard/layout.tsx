import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { ProfileLayoutProps } from "./layout.props";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import styles from "./styles.module.scss";
import { ProfileAside } from "@/components/pageComponents/Profile/Aside";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/products",
    },
    {
        title: "My Account",
        link: "#",
    },
];

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
    return (
        <>
            <PageHeader title="My Account" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <ProfileAside />
                        <div className={styles.mainColumn}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileLayout;
