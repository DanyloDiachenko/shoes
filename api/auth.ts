import { fetchApi } from "@/helpers/fetchApi";
import {
    LoginBody,
    RegisterBody,
    UpdateProfileBody,
} from "@/interfaces/requestBody/auth.interface";
import {
    LoginResponseSuccess,
    RegisterResponseSuccess,
} from "@/interfaces/responses/auth.interface";
import { UnathorizedResponse } from "@/interfaces/responses/unathorized.interface";
import { User } from "@/interfaces/user.inteface";

export const register = async (
    registerBody: RegisterBody
): Promise<RegisterResponseSuccess | ResponseError> => {
    return await fetchApi({
        endpoint: "/users/create",
        method: "POST",
        body: registerBody,
    });
};

export const login = async (
    loginBody: LoginBody
): Promise<LoginResponseSuccess | ResponseError> => {
    return await fetchApi({
        endpoint: "/auth/login",
        method: "POST",
        body: loginBody,
    });
};

export const getProfile = async (): Promise<User | UnathorizedResponse> => {
    return await fetchApi({
        endpoint: "/auth/profile",
        method: "GET",
        isAuthRequired: true,
    });
};

export const updateProfile = async (
    body: UpdateProfileBody
): Promise<User | ResponseError> => {
    return await fetchApi({
        endpoint: "/users/update",
        method: "PUT",
        body,
        isAuthRequired: true,
    });
};
