"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closePopup as closePopupFunc } from "@/store/slices/openedPopup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    useStripe,
    useElements,
    CardElement,
} from "@stripe/react-stripe-js";
import { createPayment } from "@/api/payments";

// Инициализация Stripe
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || ""
); // Твой публичный ключ

const CheckoutForm = ({ onClose }: { onClose: () => void }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const router = useRouter();
    const payment = useSelector((state: RootState) => state.payment.payment);
    if (!payment) {
        return <></>;
    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setError("Ошибка Stripe, попробуйте позже.");
            setLoading(false);
            return;
        }

        try {
            const response = await createPayment(payment);
            /* const response = await fetch(
                "/api/payments/create-payment-intent",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: payment.amount,
                        currency: payment.currency,
                    }),
                }
            ); */

            /* const { clientSecret } = await response.json(); */

            if (!response.id) {
                throw new Error("Не удалось получить client_secret");
            }

            // 2️⃣ Подтверждаем платёж через Stripe Elements
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                response.id,
                {
                    payment_method: {
                        card: elements.getElement(CardElement)!,
                    },
                }
            );

            if (error) {
                setError(error.message || "Ошибка оплаты");
                return;
            }

            if (paymentIntent.status === "succeeded") {
                toast.success("✅ Оплата успешна!");
                dispatch(closePopupFunc()); // Закрываем модалку
                router.push("/order-success"); // Перенаправляем на страницу успеха
            }
        } catch (err: any) {
            setError(err.message || "Ошибка обработки платежа.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Оплата</h2>
                <form onSubmit={handleSubmit}>
                    <CardElement className={styles.cardElement} />
                    <Button
                        colorType="btnPrimary"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Обрабатываем..." : "Оплатить"}
                    </Button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
                <button className={styles.closeButton} onClick={onClose}>
                    <IoMdClose />
                </button>
            </div>
        </div>
    );
};

export const Payment = () => {
    const dispatch = useDispatch();
    const payment = useSelector((state: RootState) => state.payment.payment);
    const isOpen = useSelector(
        (state: RootState) => state.openedPopup.openedPopup === "payment"
    );

    const closePopup = () => {
        dispatch(closePopupFunc());
    };

    return (
        isOpen && (
            <div className={styles.formBox}>
                <div className={styles.title}>Оплата</div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm onClose={closePopup} />
                </Elements>
            </div>
        )
    );
};
