import {
    SignUpBody,
    UpdateProfileBody,
} from "@/interfaces/requestBody/auth.interface";
import { RegisterResponseSuccess } from "@/interfaces/responses/auth.interface";
import { UnathorizedResponse } from "@/interfaces/responses/unathorized.interface";
import { User } from "@/interfaces/user.inteface";

export const register = async ({
    email,
    password,
}: SignUpBody): Promise<RegisterResponseSuccess | ResponseError> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const resJson = await res.json();

    return resJson;
};

export const getProfile = async (
    token: string
): Promise<User | UnathorizedResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const resJson = await res.json();

    return resJson;
};

export const updateProfile = async (
    token: string,
    body: UpdateProfileBody
): Promise<User | ResponseError> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });

    const resJson = await res.json();

    return resJson;
};
