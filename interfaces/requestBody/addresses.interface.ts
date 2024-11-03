export interface CreateAddressBody {
    street: string;
    city: string;
    country: string;
    postIndex: string;
    homeNumber: string;
}

export interface UpdateAddressBody extends Partial<CreateAddressBody> {}
