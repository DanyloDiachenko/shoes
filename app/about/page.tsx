import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AboutPageComponent } from "@/components/pageComponents/About";
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
        title: "About Us",
        link: "/about",
    },
];

const About = () => {
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <AboutPageComponent />
        </>
    );
};

export default About;
