import { cookies } from "next/headers";

export const deleteServerCookie = (cookieName: string) => {
    const cookieStore = cookies();
    cookieStore.delete(cookieName);
};
