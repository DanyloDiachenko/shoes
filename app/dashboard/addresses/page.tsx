import { getProfile } from "@/app/api/auth/user";
import { AddressesPageContent } from "@/components/pageComponents/Profile/Addresses";
import { getServerCookie } from "@/helpers/getServerCookie";
import { User } from "@/interfaces/user.inteface";

const Addresses = async () => {
    const token = getServerCookie("token") as string;
    const profile = (await getProfile(token)) as User;

    return <AddressesPageContent user={profile} />;
};

export default Addresses;
