const EXPIRES_DAYS = 365;

export const setCookie = (name: string, value: string) => {
    let expires = "";

    const date = new Date();
    date.setTime(date.getTime() + EXPIRES_DAYS * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};
