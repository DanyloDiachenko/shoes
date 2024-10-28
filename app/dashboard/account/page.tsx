import { getProfile } from "@/app/api/auth/user";
import { AccountPageContent } from "@/components/pageComponents/Profile/Account";
import { getServerCookie } from "@/helpers/getServerCookie";
import { User } from "@/interfaces/user.inteface";

const Account = async () => {
    const token = await getServerCookie("token") as string;
    const profile = (await getProfile(token)) as User;

    return <AccountPageContent user={profile} />;
};

export default Account;
