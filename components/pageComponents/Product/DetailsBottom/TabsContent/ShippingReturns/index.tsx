import Link from "next/link";

export const ShippingReturns = () => {
    return (
        <div>
            <h3>Delivery & returns</h3>
            <p>
                We deliver to over 100 countries around the world. For full
                details of the delivery options we offer, please view our{" "}
                <Link href="#">Delivery information</Link>
                <br />
                We hope you’ll love every purchase, but if you ever need to
                return an item you can do so within a month of receipt. For full
                details of how to make a return, please view our{" "}
                <Link href="#">Returns information</Link>
            </p>
        </div>
    );
};
