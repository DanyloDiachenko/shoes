import { cookies } from "next/headers";

export const getServerCookie = (name: string): string | null => {
    const cookieStore = cookies();
    const value = cookieStore.get(name);

    return value ? value.value : null;
};
