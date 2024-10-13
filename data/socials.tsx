import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface Social {
    title: string;
    link: string;
    icon: JSX.Element;
}

export const socials: Social[] = [
    {
        title: "Facebook",
        link: "#",
        icon: <FaFacebookF />,
    },
    {
        title: "Twitter",
        link: "#",
        icon: <FaXTwitter />,
    },
    {
        title: "Instagram",
        link: "#",
        icon: <FaInstagram />,
    },
    {
        title: "Youtube",
        link: "#",
        icon: <FaYoutube />,
    },
    {
        title: "Pinterest",
        link: "#",
        icon: <FaPinterest />,
    },
];
