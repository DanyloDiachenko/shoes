import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const AccountPageContent = () => {
    return (
        <div
            className={styles.content}
            id="tab-account"
            role="tabpanel"
            aria-labelledby="tab-account-link"
        >
            <form action="#">
                <div className="row">
                    <div className={styles.column}>
                        <label>First Name *</label>
                        <Input type="text" required />
                    </div>

                    <div className={styles.column}>
                        <label>Last Name *</label>
                        <Input type="text" required />
                    </div>
                </div>
                <label>Display Name *</label>
                <Input type="text" required />
                <small className={styles.formText}>
                    This will be how your name will be displayed in the account
                    section and in reviews
                </small>

                <label>Email address *</label>
                <Input type="email" required />

                <label>Current password (leave blank to leave unchanged)</label>
                <Input type="password" required />

                <label>New password (leave blank to leave unchanged)</label>
                <Input type="password" required />

                <label>Confirm new password</label>
                <Input
                    type="password"
                    required
                    className={styles.marginBottom}
                />
                <Button colorType="btnOutlinePrimary2" type="submit">
                    <span>SAVE CHANGES</span>
                    <IoIosArrowRoundForward />
                </Button>
            </form>
        </div>
    );
};
