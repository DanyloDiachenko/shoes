import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { ProfileLayoutProps } from "./layout.props";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import styles from "./styles.module.scss";
import { ProfileAside } from "@/components/pageComponents/Profile/Aside";
import { getProfile } from "../api/auth/user";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { getCookie } from "@/helpers/getCookie";
import { getServerPathname } from "@/helpers/getServerPathname";

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
        signOut();
        redirect("/login");
    }

    const profileResponse = await getProfile(token);

    if ("statusCode" in profileResponse && profileResponse.statusCode === 401) {
        signOut();
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
