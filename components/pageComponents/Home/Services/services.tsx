import { Service } from "./service.interface";
import { LiaRocketSolid, LiaLifeRingSolid } from "react-icons/lia";
import { MdRotateLeft } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const services: Service[] = [
    {
        title: "Free Shipping",
        description: "Orders $50 or more",
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
