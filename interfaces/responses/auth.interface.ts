export interface RegisterResponseSuccess {
    id: string;
    email: string;
    token: string;
}

export interface LoginResponseSuccess extends RegisterResponseSuccess {}
