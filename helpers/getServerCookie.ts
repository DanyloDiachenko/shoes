import { cookies } from "next/headers";

export const getServerCookie = async (cookieName: string) => {
    return (await cookies()).get(cookieName)?.value || null;
};
