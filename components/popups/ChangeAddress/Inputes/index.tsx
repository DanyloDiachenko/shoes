import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { AddressFormFields } from "../addressFormFields.interface";
import { InputesProps } from "./inputes.props";
import { inputFields } from "./inputFields";

export const Inputes = ({ fields, onFieldChange }: InputesProps) => {
    return (
        <>
            {inputFields.map((field, index) => (
                <div key={index} className={styles.formGroup}>
                    <label htmlFor={`address-${field.name}`}>
                        {field.label} {!field.disabled && "*"}
                    </label>
                    <Input
                        type="text"
                        id={`address-${field.name}`}
                        name={`address-${field.name}`}
                        value={
                            fields?.[field.name as keyof AddressFormFields] ||
                            ""
                        }
                        disabled={field.disabled}
                        onChange={
                            !field.disabled
                                ? (e) =>
                                      onFieldChange(
                                          field.name as keyof AddressFormFields,
                                          e.target.value
                                      )
                                : undefined
                        }
                    />
                </div>
            ))}
        </>
    );
};
