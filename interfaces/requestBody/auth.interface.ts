export interface UpdateProfileBody {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
}

export interface RegisterBody {
    email: string;
    password: string;
}

export interface LoginBody extends RegisterBody {
    rememberMe: boolean;
}
