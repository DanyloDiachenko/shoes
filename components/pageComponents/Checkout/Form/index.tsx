import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Checkbox } from "@/components/UI/Checkbox";
import { Textarea } from "@/components/UI/Textarea";
import { FormProps } from "./form.props";

export const Form = ({ user }: FormProps) => {
    return (
        <div className={styles.column}>
            <h2 className={styles.title}>Shipping Details</h2>
            <div className="row">
                <div className={styles.col}>
                    <label>First Name *</label>
                    <Input type="text" disabled value={user.firstName || ""} />
                </div>

                <div className={styles.col}>
                    <label>Last Name *</label>
                    <Input type="text" disabled />
                </div>
            </div>
            <label>Company Name (Optional)</label>
            <Input type="text" />
            <label>Country *</label>
            <Input type="text" disabled />
            <label>Street address *</label>
            <Input
                type="text"
                placeholder="House number and Street name"
                disabled
            />
            <Input
                type="text"
                placeholder="Appartments, suite, unit etc ..."
                disabled
            />
            <div className="row">
                <div className={styles.col}>
                    <label>Town / City *</label>
                    <Input type="text" disabled />
                </div>
                <div className={styles.col}>
                    <label>State / County *</label>
                    <Input type="text" disabled />
                </div>
            </div>
            <div className="row">
                <div className={styles.col}>
                    <label>Postcode / ZIP *</label>
                    <Input type="text" disabled />
                </div>
                <div className={styles.col}>
                    <label>Phone *</label>
                    <Input type="text" disabled />
                </div>
            </div>
            <label>Email address *</label>
            <Input type="email" disabled />
            <Checkbox
                title="Ship to a different address?"
                id="checkout-diff-address"
                className={styles.checkbox}
            />
            <label className={styles.textareaLabel}>
                Order notes (optional)
            </label>
            <Textarea
                cols={30}
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className={styles.textarea}
            />
        </div>
    );
};
