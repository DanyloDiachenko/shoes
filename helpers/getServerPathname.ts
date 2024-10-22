import { headers } from "next/headers";

export const getServerPathname = () => {
    const headerList = headers();
    
    return headerList.get("x-current-path");
};
