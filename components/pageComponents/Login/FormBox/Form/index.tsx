"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { FormProps } from "./form.props";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Checkbox } from "@/components/UI/Checkbox";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { login, register } from "@/api/auth";
import { getAndFormatResponseErrorMessage } from "@/helpers/getAndFormatResponseErrorMessage";
import { useRouter } from "next/navigation";
import { setCookie } from "@/helpers/setCookie";

export const Form = ({ tab }: FormProps) => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [agreeToPolicy, setAgreeToPolicy] = useState(false);

    const loginHandler = async () => {
        const response = await login({
            email,
            password,
            rememberMe,
        });

        if ("error" in response) {
            toast.error(getAndFormatResponseErrorMessage(response));
        } else {
            toast.success("Logged in successfully!");
            setCookie("token", response.token);
            router.refresh();
            router.push("/dashboard/account");
        }
    };

    const registerHandler = async () => {
        if (!agreeToPolicy) {
            toast.error("Please agree to the policy");

            return;
        }

        try {
            const response = await register({
                email,
                password,
            });

            if ("error" in response) {
                toast.error(getAndFormatResponseErrorMessage(response));
            } else {
                toast.success("Register successfully! Loginning now...");
                setCookie("token", response.token);
                router.refresh();
                router.push("/dashboard/account");
            }
        } catch (error) {
            console.error("Register error:", error);
            toast.error("Try again later!");
        }
    };

    const onAuthClick = (e: FormEvent) => {
        e.preventDefault();

        if (email.length === 0 || password.length === 0) {
            toast.error("Please fill all fields!");
            return;
        }

        if (tab === "signIn") {
            loginHandler();
        } else {
            registerHandler();
        }
    };

    return (
        <form action="#" className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="auth-email">Your email address *</label>
                <Input
                    type="text"
                    id="auth-email"
                    name="auth-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="auth-password">Password *</label>
                <Input
                    type="password"
                    id="auth-password"
                    name="auth-password"
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
                    onClick={(e) => onAuthClick(e)}
                >
                    <span>{tab === "signIn" ? "LOG IN" : "SIGN UP"}</span>
                    <IoIosArrowRoundForward />
                </Button>
                {tab === "signIn" ? (
                    <Checkbox
                        title="Remember Me"
                        id="signin-remember"
                        value={String(rememberMe)}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                ) : (
                    <Checkbox
                        title="I agree to the privacy policy *"
                        id="register-policy"
                        value={String(agreeToPolicy)}
                        onChange={() => setAgreeToPolicy(!agreeToPolicy)}
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
