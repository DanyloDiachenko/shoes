const EXPIRES_DAYS = 365;
const EXPIRES_HOURS = 24;
const EXPIRES_MINUTES = 60;
const EXPIRES_SECONDS = 60;
const EXPIRES_MILISECONDS = 1000;

export const setCookie = (name: string, value: string) => {
    let expires = "";

    const date = new Date();
    date.setTime(
        date.getTime() +
            EXPIRES_DAYS *
                EXPIRES_HOURS *
                EXPIRES_MINUTES *
                EXPIRES_SECONDS *
                EXPIRES_MILISECONDS
    );
    expires = "; expires=" + date.toUTCString();

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};
