export interface UpdateProfileBody {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
}

export interface SignUpBody {
    email: string;
    password: string;
}
