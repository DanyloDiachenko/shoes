import { cookies } from "next/headers";

export const deleteServerCookie = async (cookieName: string) => {
    const cookieStore = await cookies();
    cookieStore.delete(cookieName);
};
