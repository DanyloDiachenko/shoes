import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { ProfileLayoutProps } from "./layout.props";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import styles from "./styles.module.scss";
import { ProfileAside } from "@/components/pageComponents/Profile/Aside";
import { getProfile } from "../api/auth/user";
import { getServerCookie } from "@/helpers/getServerCookie";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

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
    const token = getServerCookie("token");

    const profileResponse = await getProfile(token || "");

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
                        <ProfileAside />
                        <div className={styles.mainColumn}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileLayout;
