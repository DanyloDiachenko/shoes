import { getProfile } from "@/app/api/auth/user";
import { AddressesPageContent } from "@/components/pageComponents/Profile/Addresses";
import { getCookie } from "@/helpers/getCookie";
import { User } from "@/interfaces/user.inteface";

const Addresses = async () => {
    const token = (await getCookie("token")) as string;
    const profile = (await getProfile(token)) as User;

    return <AddressesPageContent user={profile} />;
};

export default Addresses;
