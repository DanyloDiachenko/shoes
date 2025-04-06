import { ReactNode } from "react";

interface SocialLink {
    title: string;
    link: string;
    icon: ReactNode;
}

export interface TeamMember {
    name: string;
    position: string;
    image: string;
    description: string;
    socialLinks: SocialLink[];
}
