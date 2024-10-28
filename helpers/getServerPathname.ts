import { headers } from "next/headers";

export const getServerPathname = async () => {
    const headerList = await headers();

    return headerList.get("x-current-path");
};
