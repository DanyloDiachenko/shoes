import { getProfile } from "@/app/api/auth/user";
import { AddressesPageContent } from "@/components/pageComponents/Profile/Addresses";

const Addresses = async () => {
    const profile = await getProfile();

    return <AddressesPageContent user={profile} />;
};

export default Addresses;
