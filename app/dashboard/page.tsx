import { getProfile } from "@/api/auth";
import { DashboardPageContent } from "@/components/pageComponents/Profile/Dashboard";
import { User } from "@/interfaces/user.inteface";

const Dashboard = async () => {
    const profile = (await getProfile() as User);

    return <DashboardPageContent user={profile} />;
};

export default Dashboard;
