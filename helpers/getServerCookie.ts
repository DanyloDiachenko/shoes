import { cookies } from "next/headers";

export const getServerCookie = async (name: string): Promise<string | null> => {
    const cookieStore = await cookies();
    const value = cookieStore.get(name);

    return value ? value.value : null;
};
