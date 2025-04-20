import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { FaqPageComponent } from "@/components/pageComponents/Faq";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Pages",
        link: "#",
    },
    {
        title: "Faq",
        link: "#",
    },
];

const Faq = async () => {
    return (
        <>
            <PageHeader title="F.A.Q" subtitle="Pages" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <FaqPageComponent />
        </>
    );
};

export default Faq;
