import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Pages",
        link: "/",
    },
    {
        title: "Login",
        link: "#",
    },
];

const Login = async () => {
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </>
    );
};

export default Login;
