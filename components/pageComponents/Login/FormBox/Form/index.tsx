import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { FormProps } from "./form.props";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Checkbox } from "@/components/UI/Checkbox";
import Link from "next/link";

export const Form = ({
    email,
    setEmail,
    password,
    setPassword,
    tab,
}: FormProps) => {
    return (
        <form action="#" className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="singin-email-2">Your email address *</label>
                <Input
                    type="text"
                    id="singin-email-2"
                    name="singin-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="singin-password-2">Password *</label>
                <Input
                    type="password"
                    id="singin-password-2"
                    name="singin-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.formFooter}>
                <Button
                    type="submit"
                    colorType="btnOutlinePrimary2"
                    className={styles.button}
                >
                    <span>{tab === "signIn" ? "LOG IN" : "SIGN UP"}</span>
                    <IoIosArrowRoundForward />
                </Button>
                {tab === "signIn" ? (
                    <Checkbox title="Remember Me" id="signin-remember-2" />
                ) : (
                    <Checkbox
                        title="I agree to the privacy policy *"
                        id="register-policy-2"
                    />
                )}
                {tab === "signIn" && (
                    <Link href="#" className={styles.forgotLink}>
                        Forgot Your Password?
                    </Link>
                )}
            </div>
        </form>
    );
};
