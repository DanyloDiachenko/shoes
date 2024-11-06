export const getCookie = async (name: string) => {
    if (typeof document === "undefined") {
        const { cookies } = await import("next/headers");

        const cookieStore = await cookies();
        const value = cookieStore.get(name);

        return value ? value.value : null;
    } else {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }

        return null;
    }
};
