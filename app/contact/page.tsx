import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactPageComponent } from "@/components/page-components/Contact";
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
        title: "Contact Us",
        link: "/contact",
    },
];

const Contact = () => {
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactPageComponent />
        </>
    );
};

export default Contact;
