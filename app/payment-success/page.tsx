import { PaymentSuccessPageComponent } from "@/components/page-components/PaymentSuccessPageComponent";
import { redirect } from "next/navigation";

interface PaymentSuccessPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentSuccess = async ({ searchParams }: PaymentSuccessPageProps) => {
    const checkoutDataStringified = (await searchParams).data;
    if (!checkoutDataStringified) {
        redirect("/not-found");
    }

    return (
        <PaymentSuccessPageComponent
            checkoutDataStringified={checkoutDataStringified as string}
        />
    );
};

export default PaymentSuccess;
