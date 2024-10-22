import { User } from "@/interfaces/user.inteface";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

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

    return resJson;
};

export const getProfile = async (): Promise<User> => {
    const token = (cookies().get("token") as RequestCookie).value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
    });

    const resJson = await res.json();

    return resJson;
};

interface UpdateProfileBody {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
}

export const updateProfile = async ({
    firstName,
    lastName,
    displayName,
    phone,
    currentPassword,
    newPassword,
    confirmNewPassword,
}: UpdateProfileBody): Promise<User> => {
    const token = (cookies().get("token") as RequestCookie).value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName,
            lastName,
            displayName,
            phone,
            currentPassword,
            newPassword,
            confirmNewPassword,
        }),
        cache: "no-cache",
    });

    const resJson = await res.json();

    return resJson;
};
