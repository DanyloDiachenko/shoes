import { Input } from "@/components/UI/Input";
import { ChangeAddressProps } from "./changeAddress.props";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";

export const ChangeAddress = ({}: ChangeAddressProps) => {
    return (
        <div className={styles.formBox}>
            <div className={styles.title}>Change Address</div>
            <div className={styles.content}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">Password *</label>
                        <Input
                            type="password"
                            id="singin-password-2"
                            name="singin-password"
                            required
                            value=""
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">Password *</label>
                        <Input
                            type="password"
                            id="singin-password-2"
                            name="singin-password"
                            required
                            value=""
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">Password *</label>
                        <Input
                            type="password"
                            id="singin-password-2"
                            name="singin-password"
                            required
                            value=""
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="singin-password-2">Password *</label>
                        <Input
                            type="password"
                            id="singin-password-2"
                            name="singin-password"
                            required
                            value=""
                        />
                    </div>
                    <div className={styles.buttons}>
                        <Button colorType="btnGray" className={styles.cancelBtn}>
                            <IoMdClose />
                            Discard
                        </Button>
                        <Button colorType="btnOutlinePrimary2" type="submit" className={styles.submitBtn}>
                            Submit
                            <IoIosArrowRoundForward />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
