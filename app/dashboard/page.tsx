import { DashboardPageContent } from "@/components/pageComponents/Profile/Dashboard";
import { getCookie } from "@/helpers/getCookie";
import { getProfile } from "../api/auth/user";
import { User } from "@/interfaces/user.inteface";

const Dashboard = async () => {
    const token = (await getCookie("token")) as string;
    const profile = (await getProfile(token)) as User;

    return <DashboardPageContent user={profile} />;
};

export default Dashboard;
