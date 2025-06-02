import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LoginPageComponent } from "@/components/page-components/Login";
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

const Login = () => {
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <LoginPageComponent />
        </>
    );
};

export default Login;
