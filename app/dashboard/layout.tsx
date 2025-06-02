import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { ProfileLayoutProps } from "./layout.props";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import styles from "./styles.module.scss";
import { ProfileAside } from "@/components/page-components/Profile/Aside";
import { redirect } from "next/navigation";
import { getCookie } from "@/helpers/getCookie";
import { getServerPathname } from "@/helpers/getServerPathname";
import { setCookie } from "@/helpers/setCookie";
import { getProfile } from "@/api/auth";

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

const ProfileLayout = async ({ children }: ProfileLayoutProps) => {
    const token = await getCookie("token");
    const pathname = (await getServerPathname()) as string;

    if (!token) {
        setCookie("token", "");
        redirect("/login");
    }

    const profileResponse = await getProfile();

    if ("statusCode" in profileResponse && profileResponse.statusCode === 401) {
        setCookie("token", "");
        redirect("/login");
    }

    return (
        <>
            <PageHeader title="My Account" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <ProfileAside serverPathname={pathname} />
                        <div className={styles.mainColumn}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileLayout;
