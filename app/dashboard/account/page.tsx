import { getProfile } from "@/api/auth";
import { AccountPageContent } from "@/components/pageComponents/Profile/Account";
import { User } from "@/interfaces/entities/user.inteface";

const Account = async () => {
    const profile = (await getProfile()) as User;

    return <AccountPageContent user={profile} />;
};

export default Account;
