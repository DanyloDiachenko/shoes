import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LoginPageComponent } from "@/components/pageComponents/Login";
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
            <LoginPageComponent />
        </>
    );
};

export default Login;
