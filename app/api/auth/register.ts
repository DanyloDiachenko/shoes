interface SignUpCredentials {
    email: string;
    password: string;
}

interface RegisterResponseSuccess {
    id: string;
    email: string;
    token: string;
}
interface RegisterResponseError {
    error: string;
    message: string;
    statusCode: number;
}
type RegisterResponse = RegisterResponseSuccess | RegisterResponseError;

export const register = async ({
    email,
    password,
}: SignUpCredentials): Promise<RegisterResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-cache",
    });

    const resJson = await res.json();
    if (!res.ok) {
        console.log("Failed to fetch data", resJson);

        return resJson;
    }

    return resJson;
};
