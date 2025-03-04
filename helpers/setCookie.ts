export const setCookie = (name: string, value: unknown) => {
    if (typeof document !== "undefined") {
        const expiresIn = Number(
            process.env.NEXT_PUBLIC_TOKEN_EXPIRES_IN_SECONDS || 31536000
        );
        const date = new Date();
        date.setTime(date.getTime() + expiresIn * 1000);

        document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()}; SameSite=Strict; Secure`;
    }
};
