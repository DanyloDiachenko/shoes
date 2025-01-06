import { cookies } from "next/headers";

export const setServerCookie = async (
    cookieName: string,
    cookieValue: string
) => {
    (await cookies()).set(cookieName, cookieValue);
};
