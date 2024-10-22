import { getProfile } from "@/app/api/auth/user";
import { AccountPageContent } from "@/components/pageComponents/Profile/Account";

const Account = async () => {
    const profile = await getProfile();

    return <AccountPageContent user={profile} />;
};

export default Account;
