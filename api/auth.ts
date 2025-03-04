import { fetchApi } from "@/helpers/fetchApi";
import { User } from "@/interfaces/entities/user.inteface";
import { ResponseError } from "@/interfaces/responseError.interface";

interface UpdateProfileBody {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
}

interface RegisterBody {
    email: string;
    password: string;
}

interface LoginBody extends RegisterBody {
    rememberMe: boolean;
}

interface LoginResponseSuccess {
    token: string;
}

interface RegisterResponseSuccess extends LoginResponseSuccess {}

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

export const googleAuth = async (
    token: string
): Promise<LoginResponseSuccess | ResponseError> => {
    return await fetchApi({
        endpoint: "/auth/google-login",
        method: "POST",
        body: {
            token,
        },
    });
};

export const getProfile = async (): Promise<User | ResponseError> => {
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
