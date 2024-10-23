export interface UpdateProfileBody {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
}

export interface SignUpBody {
    email: string;
    password: string;
}
