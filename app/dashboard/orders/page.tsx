import { getOrders } from "@/api/orders";
import { OrdersPageContent } from "@/components/page-components/Profile/Orders";

const Orders = async () => {
    const orders = await getOrders();
    console.log(orders);

    return <OrdersPageContent orders={orders} />;
};

export default Orders;
