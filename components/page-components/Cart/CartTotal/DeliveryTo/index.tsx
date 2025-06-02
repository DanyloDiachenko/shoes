import Link from "next/link";
import { DeliveryToProps } from "./deliveryTo.props";

export const DeliveryTo = ({ user }: DeliveryToProps) => {
    if (!user) {
        return (
            <td>
                Delivery to:
                <br />
                <Link href="/login">Login / Register</Link>
            </td>
        );
    }

    if (!user.shippingAddress) {
        return (
            <td>
                Delivery to:
                <br />
                <Link href="/dashboard/addresses">Set Up Shipping Address</Link>
            </td>
        );
    }

    return (
        <td>
            Delivery to:
            <br />
            {user.firstName && `${user.firstName} `}
            {user.lastName && `${user.lastName} `}
            <br />
            {user.phone && `${user.phone} `}
            <br />
            {user.shippingAddress.country &&
                `${user.shippingAddress.country}, `}
            {user.shippingAddress.city && `${user.shippingAddress.city}, `}
            {user.shippingAddress.street && `${user.shippingAddress.street}, `}
            {user.shippingAddress.homeNumber &&
                `${user.shippingAddress.homeNumber}, `}
            {user.shippingAddress.postIndex &&
                `${user.shippingAddress.postIndex}`}
            <br />
            <Link href="/dashboard/addresses">Change address</Link>
        </td>
    );
};
