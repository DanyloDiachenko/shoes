import { getProfile } from "@/api/auth";
import { AddressesPageContent } from "@/components/page-components/Profile/Addresses";
import { User } from "@/interfaces/entities/user.inteface";

const Addresses = async () => {
    const profile = (await getProfile()) as User;

    return <AddressesPageContent user={profile} />;
};

export default Addresses;
