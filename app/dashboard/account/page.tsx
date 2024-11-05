import { getProfile } from "@/app/api/auth/user";
import { AccountPageContent } from "@/components/pageComponents/Profile/Account";
import { getCookie } from "@/helpers/getCookie";
import { User } from "@/interfaces/user.inteface";

const Account = async () => {
    const token = await getCookie("token") as string;
    const profile = (await getProfile(token)) as User;

    return <AccountPageContent user={profile} />;
};

export default Account;
