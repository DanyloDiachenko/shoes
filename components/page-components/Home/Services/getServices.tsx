import { Service } from "./service.interface";
import { LiaRocketSolid, LiaLifeRingSolid } from "react-icons/lia";
import { MdRotateLeft } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { getCurrency } from "@/helpers/getCurrency";

export const getServices = async (): Promise<Service[]> => {
    const currency = await getCurrency();

    return [
        {
            title: "Free Shipping",
            description: `Orders ${
                currency === "uah" ? "₴2000" : "€50"
            } or more`,
            icon: <LiaRocketSolid />,
        },
        {
            title: "Free Returns",
            description: "Within 30 days",
            icon: <MdRotateLeft />,
        },
        {
            title: "Get 20% Off 1 Item",
            description: "when you sign up",
            icon: <AiOutlineInfoCircle />,
        },
        {
            title: "We Support",
            description: "24/7 amazing services",
            icon: <LiaLifeRingSolid />,
        },
    ];
};
