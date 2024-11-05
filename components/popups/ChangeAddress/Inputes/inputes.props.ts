import { AddressFormFields } from "../addressFormFields.interface";

export interface InputesProps {
    fields: AddressFormFields | null;
    onFieldChange: (field: keyof AddressFormFields, value: string) => void;
}
