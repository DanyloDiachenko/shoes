import { LoginTab } from "@/types/loginTab.type";

export interface FormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    tab: LoginTab;
}