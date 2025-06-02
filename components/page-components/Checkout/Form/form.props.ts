import { User } from "@/interfaces/entities/user.inteface";

export interface FormProps {
    user: User;
    orderNotes: string;
    setOrerNotes: (orderNotes: string) => void;
}