import { getOrders } from "@/api/orders";
import { OrdersPageContent } from "@/components/page-components/Profile/Orders";

const Orders = async () => {
    const orders = await getOrders();

    return <OrdersPageContent orders={orders} />;
};

export default Orders;
