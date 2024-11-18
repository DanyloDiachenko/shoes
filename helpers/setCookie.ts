export const setCookie = (name: string, value: string) => {
    let expires = "";

    const date = new Date();
    date.setTime(
        date.getTime() +
            Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRES_IN_SECONDS || 31536000)
    );
    expires = "; expires=" + date.toUTCString();

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};
