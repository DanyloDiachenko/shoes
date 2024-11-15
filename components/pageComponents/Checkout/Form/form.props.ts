import { User } from "@/interfaces/user.inteface";

export interface FormProps {
    user: User;
    orderNotes: string;
    setOrerNotes: (orderNotes: string) => void;
}